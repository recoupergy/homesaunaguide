import { readFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("../src/data/legacy-content.json", import.meta.url), "utf8"));
const errors = [];
const paths = new Set();
const privateSourceNames = [
  [83, 97, 117, 110, 97, 84, 105, 109, 101, 115],
  [83, 97, 117, 110, 97, 32, 84, 105, 109, 101, 115],
  [84, 114, 117, 109, 112, 107, 105, 110],
  [71, 108, 101, 110, 110, 32, 65, 117, 101, 114, 98, 97, 99, 104],
  [71, 108, 101, 110, 110],
  [71, 108, 101, 110],
  [65, 117, 101, 114, 98, 97, 99, 104],
  [76, 111, 99, 97, 108, 77, 105, 108, 101],
  [68, 101, 110, 100, 114, 105, 116, 101, 67, 111, 99, 107, 116, 97, 105, 108],
].map((characters) => String.fromCharCode(...characters).toLowerCase());

for (const post of data.posts) {
  if (!post.path?.startsWith("/")) errors.push(`Invalid path: ${post.path}`);
  if (paths.has(post.path)) errors.push(`Duplicate path: ${post.path}`);
  paths.add(post.path);
  if (!post.title?.trim()) errors.push(`Missing title: ${post.path}`);
  if (!post.contentHtml?.trim() && post.wordCount > 0) errors.push(`Missing content: ${post.path}`);
  if (/<script|javascript:|\son\w+=|<iframe|<form/i.test(post.contentHtml)) errors.push(`Unsafe HTML: ${post.path}`);
  const visibleFields = `${post.title} ${post.originalTitle} ${post.description} ${post.excerpt} ${post.contentHtml}`;
  if (/sauna\s*marketplace/i.test(visibleFields)) errors.push(`Prohibited legacy brand reference: ${post.path}`);
  for (const sourceName of privateSourceNames) {
    if (new RegExp(`\\b${sourceName}\\b`, "i").test(visibleFields)) errors.push(`Private source reference: ${post.path}`);
  }
}

for (const redirect of data.redirects) {
  const source = `/${redirect.source}`.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/";
  let destination = redirect.destination;
  try {
    const url = new URL(destination);
    if (/^(www\.)?homesaunaguide\.com$/.test(url.hostname)) destination = url.pathname.replace(/\/$/, "") || "/";
  } catch {}
  if (source === destination) errors.push(`Self redirect: ${source}`);
}

if (data.posts.length !== data.summary.publishedContentCount) errors.push("Summary count does not match post count");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${data.posts.length} legacy pages, ${data.redirects.length} stored redirects, unique paths, and sanitized HTML.`);
