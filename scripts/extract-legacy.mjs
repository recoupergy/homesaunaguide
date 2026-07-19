#!/usr/bin/env node

import { createReadStream, readFileSync, writeFileSync } from "node:fs";
import { createGunzip } from "node:zlib";
import { createInterface } from "node:readline";
import { basename } from "node:path";
import { isAmazonUrl, retagAmazonUrl } from "./amazon-links.mjs";

const databasePath = process.argv[2];
const archiveCdxPath = process.argv[3];
const outputPath = process.argv[4] ?? "src/data/legacy-content.json";

if (!databasePath) {
  console.error("Usage: node scripts/extract-legacy.mjs database.sql.gz archive-cdx.json [output.json]");
  process.exit(1);
}

const posts = new Map();
const selectedMeta = new Map();
const terms = new Map();
const taxonomies = new Map();
const relationships = new Map();
const redirects = [];

const META_KEYS = new Set([
  "_thumbnail_id",
  "_wp_attached_file",
  "_elementor_data",
  "_yoast_wpseo_title",
  "_yoast_wpseo_metadesc",
  "rank_math_title",
  "rank_math_description",
]);

function unescapeMysql(value) {
  return value.replace(/\\([0bnrtZ\\'\"])/g, (_, char) => {
    const escapes = {
      0: "\0",
      b: "\b",
      n: "\n",
      r: "\r",
      t: "\t",
      Z: "\x1a",
      "\\": "\\",
      "'": "'",
      '"': '"',
    };
    return escapes[char] ?? char;
  });
}

function parseTuples(statement) {
  const valuesIndex = statement.indexOf(" VALUES ");
  if (valuesIndex < 0) return [];
  const input = statement.slice(valuesIndex + 8).replace(/;\s*$/, "");
  const rows = [];
  let row = [];
  let token = "";
  let inString = false;
  let escaped = false;
  let inTuple = false;

  const pushToken = () => {
    const trimmed = token.trim();
    if (!inString && trimmed.toUpperCase() === "NULL") row.push(null);
    else if (!inString && /^-?\d+(?:\.\d+)?$/.test(trimmed)) row.push(Number(trimmed));
    else row.push(unescapeMysql(token));
    token = "";
  };

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    if (!inTuple) {
      if (char === "(") {
        inTuple = true;
        row = [];
        token = "";
      }
      continue;
    }

    if (inString) {
      if (escaped) {
        token += `\\${char}`;
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "'") {
        inString = false;
      } else {
        token += char;
      }
      continue;
    }

    if (char === "'") {
      inString = true;
    } else if (char === ",") {
      pushToken();
    } else if (char === ")") {
      pushToken();
      rows.push(row);
      inTuple = false;
    } else {
      token += char;
    }
  }
  return rows;
}

function rememberMeta(postId, key, value) {
  if (!META_KEYS.has(key)) return;
  const current = selectedMeta.get(postId) ?? {};
  current[key] = value;
  selectedMeta.set(postId, current);
}

function rememberRelationship(objectId, taxonomyId) {
  const current = relationships.get(objectId) ?? [];
  current.push(taxonomyId);
  relationships.set(objectId, current);
}

function readSerializedRedirectSources(serialized) {
  const sources = [];
  const itemPattern = /s:7:"pattern";s:\d+:"([^"]+)";s:10:"comparison";s:\d+:"([^"]+)"/g;
  for (const match of serialized.matchAll(itemPattern)) {
    sources.push({ pattern: match[1], comparison: match[2] });
  }
  return sources;
}

const reader = createInterface({
  input: createReadStream(databasePath).pipe(createGunzip()),
  crlfDelay: Infinity,
});

let statement = "";
let collecting = false;
let table = "";

for await (const line of reader) {
  if (!collecting) {
    const match = line.match(/^INSERT INTO `([^`]+)`/);
    if (!match) continue;
    table = match[1];
    if (!["wp0i_posts", "wp0i_postmeta", "wp0i_terms", "wp0i_term_taxonomy", "wp0i_term_relationships", "wp0i_rank_math_redirections"].includes(table)) {
      continue;
    }
    statement = line;
    collecting = !line.endsWith(";");
  } else {
    statement += `\n${line}`;
    collecting = !line.endsWith(";");
  }

  if (collecting) continue;
  const rows = parseTuples(statement);

  if (table === "wp0i_posts") {
    for (const row of rows) {
      posts.set(Number(row[0]), {
        id: Number(row[0]),
        authorId: Number(row[1]),
        date: row[2],
        dateGmt: row[3],
        content: row[4] ?? "",
        title: row[5] ?? "",
        excerpt: row[6] ?? "",
        status: row[7],
        slug: row[11] ?? "",
        modified: row[14],
        parentId: Number(row[17] ?? 0),
        guid: row[18] ?? "",
        menuOrder: Number(row[19] ?? 0),
        type: row[20],
        mimeType: row[21] ?? "",
      });
    }
  } else if (table === "wp0i_postmeta") {
    for (const row of rows) rememberMeta(Number(row[1]), row[2], row[3] ?? "");
  } else if (table === "wp0i_terms") {
    for (const row of rows) terms.set(Number(row[0]), { name: row[1], slug: row[2] });
  } else if (table === "wp0i_term_taxonomy") {
    for (const row of rows) {
      taxonomies.set(Number(row[0]), {
        termId: Number(row[1]),
        taxonomy: row[2],
        description: row[3] ?? "",
        parent: Number(row[4] ?? 0),
      });
    }
  } else if (table === "wp0i_term_relationships") {
    for (const row of rows) rememberRelationship(Number(row[0]), Number(row[1]));
  } else if (table === "wp0i_rank_math_redirections") {
    for (const row of rows) {
      if (row[5] !== "active") continue;
      for (const source of readSerializedRedirectSources(row[1] ?? "")) {
        redirects.push({
          source: source.pattern.replace(/^\/+|\/+$/g, ""),
          comparison: source.comparison,
          destination: String(row[2] ?? "").replace(/^http:\/\/homesaunaguide\.com/i, "https://homesaunaguide.com"),
          statusCode: Number(row[3] ?? 301),
          hits: Number(row[4] ?? 0),
        });
      }
    }
  }

  statement = "";
  table = "";
}

function htmlEntityDecode(value) {
  return String(value)
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function repairMojibake(value) {
  return String(value)
    .replace(/Â/g, "")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã¤/g, "ä")
    .replace(/Ã¥/g, "å")
    .replace(/â|â€“/g, "–")
    .replace(/â|â€”/g, "—")
    .replace(/â|â€™/g, "’")
    .replace(/â|â€œ/g, "“")
    .replace(/â|â€/g, "”");
}

const mediaCdx = new Map();
if (archiveCdxPath) {
  const mediaPath = archiveCdxPath.replace(/hsg-cdx\.json$/, "hsg-media-cdx.json");
  try {
    const rows = JSON.parse(readFileSync(mediaPath, "utf8"));
    for (const row of rows.slice(1)) {
      const original = row[0].replace(/^https?:\/\/homesaunaguide\.com/i, "");
      const archiveUrl = `https://web.archive.org/web/${row[1]}id_/${row[0]}`;
      mediaCdx.set(original, archiveUrl);
    }
  } catch {
    // The media index is optional; extraction still preserves all text and URLs.
  }
}

function safeHref(value) {
  const href = String(value ?? "").trim();
  if (!href || /^(?:javascript|data):/i.test(href)) return "#";
  if (isAmazonUrl(href)) return retagAmazonUrl(href);
  return href.replace(/^http:\/\/homesaunaguide\.com/i, "https://homesaunaguide.com");
}

function sanitizeHtml(input) {
  let html = repairMojibake(String(input ?? ""));
  html = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|noscript|iframe|form)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(input|button)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(input|button)[^>]*\/?>/gi, "")
    .replace(/\[(?:\/?)[a-z][^\]]*\]/gi, "")
    .replace(/\s(?:on\w+|style|class|id|data-[\w-]+)=(?:"[^"]*"|'[^']*')/gi, "")
    .replace(/<a\b([^>]*)href=("|')([^"']*)(\2)([^>]*)>/gi, (_, before, quote, href) => {
      const cleaned = safeHref(href);
      const external = /^https?:\/\//i.test(cleaned) && !/^https?:\/\/(?:www\.)?homesaunaguide\.com/i.test(cleaned);
      const amazon = isAmazonUrl(cleaned);
      const attributeHref = cleaned.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
      return `<a href="${attributeHref}"${external ? ` rel="${amazon ? "sponsored " : ""}nofollow noopener"` : ""}${amazon ? ' target="_blank"' : ""}>`;
    })
    .replace(/<img\b[^>]*>/gi, (tag) => {
      const source = tag.match(/(?:src|data-src)=(?:"|')([^"']+)/i)?.[1] ?? "";
      const alt = htmlEntityDecode(tag.match(/alt=(?:"|')([^"']*)/i)?.[1] ?? "").replace(/"/g, "&quot;");
      if (!source) return "";
      if (/amazon-adsystem\.com\/e\/ir\?/i.test(source)) return "";
      const normalized = source.replace(/^https?:\/\/(?:www\.)?homesaunaguide\.com/i, "");
      const archived = mediaCdx.get(normalized);
      if (archived) return `<img src="${archived}" alt="${alt}" loading="lazy" />`;
      if (/\/wp-content\/uploads\//i.test(normalized)) {
        return alt ? `<span class="legacy-image-note" role="note">Historic image: ${alt}</span>` : "";
      }
      if (/^https?:\/\//i.test(source)) return `<img src="${source}" alt="${alt}" loading="lazy" />`;
      return "";
    })
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/(?:<br\s*\/?>\s*){3,}/gi, "<br /><br />")
    .replace(/\s{3,}/g, " ")
    .trim();
  return html;
}

function elementorToHtml(serialized) {
  if (!serialized) return "";
  let tree;
  try {
    tree = JSON.parse(serialized);
  } catch {
    return "";
  }
  const pieces = [];
  const visit = (node) => {
    const settings = node?.settings ?? {};
    if (node?.widgetType === "heading" && settings.title) {
      const level = /^h[2-4]$/.test(settings.header_size) ? settings.header_size : "h2";
      pieces.push(`<${level}>${settings.title}</${level}>`);
    } else if (node?.widgetType === "text-editor" && settings.editor) {
      pieces.push(settings.editor);
    } else if (node?.widgetType === "image" && settings.image?.url) {
      pieces.push(`<figure><img src="${settings.image.url}" alt="" loading="lazy" /></figure>`);
    } else if (node?.widgetType === "button" && settings.text) {
      pieces.push(`<p><a href="${safeHref(settings.link?.url)}">${settings.text}</a></p>`);
    } else if (Array.isArray(settings.icon_list)) {
      pieces.push(`<ul>${settings.icon_list.map((item) => `<li>${item.text ?? ""}</li>`).join("")}</ul>`);
    } else if (Array.isArray(settings.tabs)) {
      for (const tab of settings.tabs) pieces.push(`<h3>${tab.tab_title ?? ""}</h3>${tab.tab_content ?? ""}`);
    } else if (Array.isArray(settings.tabs_content)) {
      for (const tab of settings.tabs_content) pieces.push(`<h3>${tab.tab_title ?? ""}</h3>${tab.tab_content ?? ""}`);
    }
    if (Array.isArray(node?.elements)) node.elements.forEach(visit);
  };
  if (Array.isArray(tree)) tree.forEach(visit);
  return sanitizeHtml(pieces.join("\n"));
}

function textFromHtml(html) {
  return htmlEntityDecode(
    String(html)
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function categoryInfo(postId) {
  const result = [];
  for (const taxonomyId of relationships.get(postId) ?? []) {
    const taxonomy = taxonomies.get(taxonomyId);
    if (!taxonomy || !["category", "product_cat", "property_type"].includes(taxonomy.taxonomy)) continue;
    const term = terms.get(taxonomy.termId);
    if (term) result.push({ ...term, taxonomy: taxonomy.taxonomy });
  }
  return result;
}

function buildPath(post) {
  if (["post", "page"].includes(post.type)) return `/${post.slug}`;
  if (post.type === "product") return `/product/${post.slug}`;
  if (["property", "houzez_property"].includes(post.type)) return `/sauna-for-sale/${post.slug}`;
  return `/${post.type}/${post.slug}`;
}

const publicTypes = new Set(["post", "page", "product", "property", "houzez_property"]);
const legacyPosts = [];
const allTypeCounts = {};

for (const post of posts.values()) {
  if (post.status === "publish") allTypeCounts[post.type] = (allTypeCounts[post.type] ?? 0) + 1;
  if (post.status !== "publish" || !post.slug || !publicTypes.has(post.type)) continue;
  const meta = selectedMeta.get(post.id) ?? {};
  const elementorHtml = elementorToHtml(meta._elementor_data);
  const standardHtml = sanitizeHtml(post.content);
  const contentHtml = textFromHtml(elementorHtml).length > textFromHtml(standardHtml).length
    ? elementorHtml
    : standardHtml;
  const contentText = textFromHtml(contentHtml);
  if (!contentText && post.type !== "page") continue;

  const thumbnailId = Number(meta._thumbnail_id ?? 0);
  const thumbnailPost = posts.get(thumbnailId);
  const thumbnailMeta = selectedMeta.get(thumbnailId) ?? {};
  const attachedPath = thumbnailMeta._wp_attached_file || thumbnailPost?.guid?.match(/\/wp-content\/uploads\/(.+)$/)?.[1] || "";
  const mediaPath = attachedPath ? `/wp-content/uploads/${attachedPath}` : "";

  const description = textFromHtml(repairMojibake(
    meta.rank_math_description ||
    meta._yoast_wpseo_metadesc ||
    post.excerpt ||
    contentText.slice(0, 165),
  )).replace(/Â\s?/g, " ").replace(/\s+/g, " ").trim().slice(0, 165);
  const originalTitle = repairMojibake(post.title).trim();
  const optimizedTitle = repairMojibake(meta.rank_math_title || meta._yoast_wpseo_title || originalTitle)
    .replace(/%[^%]+%/g, "")
    .replace(/[|–-]\s*$/, "")
    .trim();

  legacyPosts.push({
    id: post.id,
    type: post.type,
    path: buildPath(post),
    slug: post.slug,
    title: optimizedTitle || originalTitle || post.slug.replace(/-/g, " "),
    originalTitle,
    description,
    date: post.dateGmt || post.date,
    modified: post.modified,
    excerpt: textFromHtml(repairMojibake(post.excerpt || contentText.slice(0, 240))).replace(/Â\s?/g, " ").replace(/\s+/g, " ").trim().slice(0, 240),
    contentHtml,
    wordCount: contentText ? contentText.split(/\s+/).length : 0,
    categories: categoryInfo(post.id),
    featuredImage: mediaCdx.get(mediaPath) ?? null,
    legacyFeaturedImagePath: mediaPath || null,
  });
}

legacyPosts.sort((a, b) => b.wordCount - a.wordCount || a.path.localeCompare(b.path));

let archivePages = [];
if (archiveCdxPath) {
  const cdx = JSON.parse(readFileSync(archiveCdxPath, "utf8"));
  archivePages = cdx.slice(1).map((row) => {
    const url = new URL(row[0]);
    return {
      path: url.pathname.replace(/\/$/, "") || "/",
      originalUrl: row[0],
      timestamp: row[1],
      archiveUrl: `https://web.archive.org/web/${row[1]}id_/${row[0]}`,
      mimeType: row[3],
    };
  });
}

const contentPaths = new Set(legacyPosts.map((post) => post.path.replace(/\/$/, "") || "/"));
const uncoveredArchivePages = archivePages.filter((page) => !contentPaths.has(page.path));

const dedupedRedirects = [];
const redirectKeySet = new Set();
for (const item of redirects.sort((a, b) => b.hits - a.hits)) {
  const key = `${item.source}|${item.destination}`;
  if (!item.source || redirectKeySet.has(key)) continue;
  redirectKeySet.add(key);
  dedupedRedirects.push(item);
}

const output = {
  generatedAt: new Date().toISOString(),
  source: {
    database: basename(databasePath),
    archive: archiveCdxPath ? basename(archiveCdxPath) : null,
    archivePageCount: archivePages.length,
  },
  summary: {
    publishedContentCount: legacyPosts.length,
    publishedTypeCounts: allTypeCounts,
    redirectCount: dedupedRedirects.length,
    uncoveredArchivePageCount: uncoveredArchivePages.length,
  },
  posts: legacyPosts,
  redirects: dedupedRedirects,
  archivePages,
  uncoveredArchivePages,
};

writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify(output.summary, null, 2));
console.log(`Wrote ${outputPath}`);
