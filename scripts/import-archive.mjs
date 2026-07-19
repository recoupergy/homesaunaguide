#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const contentPath = process.argv[2] ?? "src/data/legacy-content.json";
const cdxPath = process.argv[3];

if (!cdxPath) {
  console.error("Usage: node scripts/import-archive.mjs content.json archive-cdx.json");
  process.exit(1);
}

const data = JSON.parse(readFileSync(contentPath, "utf8"));
const cdx = JSON.parse(readFileSync(cdxPath, "utf8"));
const existingPaths = new Set(data.posts.map((post) => post.path.replace(/\/$/, "") || "/"));
const skipPath = /^(?:\/$|\/\d{4}\/\d{2}$|\/author\/|\/category\/|\/wp-login\.php|\/cgi-sys\/)/;

function decodeEntities(value) {
  return String(value)
    .replace(/&#8211;|&ndash;/gi, "–")
    .replace(/&#8212;|&mdash;/gi, "—")
    .replace(/&#8217;|&rsquo;/gi, "’")
    .replace(/&#8220;|&ldquo;/gi, "“")
    .replace(/&#8221;|&rdquo;/gi, "”")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function textFromHtml(html) {
  return decodeEntities(
    String(html)
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function cleanArticleHtml(html) {
  return String(html)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|noscript|iframe|form)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(input|button)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(input|button)[^>]*\/?>/gi, "")
    .replace(/\s(?:on\w+|style|class|id|data-[\w-]+)=(?:"[^"]*"|'[^']*')/gi, "")
    .replace(/<img\b[^>]*>/gi, (tag) => {
      const alt = decodeEntities(tag.match(/alt=(?:"|')([^"']*)/i)?.[1] ?? "");
      return alt ? `<span class="legacy-image-note" role="note">Historic image: ${alt}</span>` : "";
    })
    .replace(/href=("|')http:\/\/homesaunaguide\.com/gi, 'href=$1https://homesaunaguide.com')
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/\s{3,}/g, " ")
    .trim();
}

function extractArticle(html) {
  const article = html.match(/<article\b[^>]*\bid=(?:"|')post-\d+(?:"|')[^>]*>([\s\S]*?)<\/article>/i)?.[1];
  if (!article) return null;
  const title = decodeEntities(article.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "").replace(/<[^>]+>/g, "").trim();
  const date = article.match(/<div[^>]*class=(?:"|')[^"']*date_time_post[^"']*(?:"|')[^>]*>([^<]+)/i)?.[1]?.trim() ?? "";
  const featuredFigure = article.match(/<figure[^>]*class=(?:"|')[^"']*top_featured_image[^"']*(?:"|')[^>]*>[\s\S]*?<\/figure>/i)?.[0] ?? "";
  let bodyStart = 0;
  if (featuredFigure) {
    bodyStart = article.indexOf(featuredFigure) + featuredFigure.length;
  } else {
    const h1End = article.search(/<\/h1>/i);
    const firstContent = article.slice(Math.max(0, h1End)).search(/<(?:p|h2|ul|ol|blockquote)\b/i);
    bodyStart = firstContent >= 0 ? Math.max(0, h1End) + firstContent : 0;
  }
  const body = cleanArticleHtml(article.slice(bodyStart));
  const text = textFromHtml(body);
  if (!title || text.length < 80) return null;
  return { title, date, body, text };
}

let imported = 0;

for (const row of cdx.slice(1)) {
  const originalUrl = new URL(row[0]);
  const path = originalUrl.pathname.replace(/\/$/, "") || "/";
  if (skipPath.test(path) || existingPaths.has(path)) continue;
  const archiveUrl = `https://web.archive.org/web/${row[1]}id_/${row[0]}`;
  const html = execFileSync("curl", ["-sS", "--max-time", "30", archiveUrl], {
    encoding: "utf8",
    maxBuffer: 24 * 1024 * 1024,
  });
  const article = extractArticle(html);
  if (!article) continue;

  data.posts.push({
    id: `archive-${row[1]}`,
    type: "post",
    path,
    slug: path.split("/").filter(Boolean).at(-1),
    title: article.title,
    originalTitle: article.title,
    description: article.text.slice(0, 165),
    date: article.date || row[1].slice(0, 8),
    modified: article.date || row[1].slice(0, 8),
    excerpt: article.text.slice(0, 240),
    contentHtml: article.body,
    wordCount: article.text.split(/\s+/).length,
    categories: [{ name: "Sauna Guide", slug: "sauna-guide", taxonomy: "category" }],
    featuredImage: null,
    legacyFeaturedImagePath: null,
    sourceArchiveUrl: archiveUrl,
  });
  existingPaths.add(path);
  imported += 1;
}

data.posts.sort((a, b) => b.wordCount - a.wordCount || a.path.localeCompare(b.path));
data.summary.publishedContentCount = data.posts.length;
data.summary.archivePostsImported = imported;
data.uncoveredArchivePages = data.archivePages.filter((page) => !existingPaths.has(page.path));
data.summary.uncoveredArchivePageCount = data.uncoveredArchivePages.length;
writeFileSync(contentPath, `${JSON.stringify(data, null, 2)}\n`);

console.log(JSON.stringify({ imported, totalPosts: data.posts.length, uncoveredArchivePages: data.uncoveredArchivePages.length }, null, 2));

