import { readFileSync, writeFileSync } from "node:fs";

const dataPath = process.argv[2] ?? "src/data/legacy-content.json";
const data = JSON.parse(readFileSync(dataPath, "utf8"));

function sanitizeText(value) {
  if (typeof value !== "string") return value;

  return value
    .replace(/<a\b[^>]*href=["'][^"']*(?:saunamarketplace|SaunaMarketplace)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi, "$1")
    .replace(/a robust mobile sauna marketplace/gi, "a robust mobile sauna ecosystem")
    .replace(/sauna marketplace/gi, "Home Sauna Guide")
    .replace(/saunamarketplace(?:\.com)?/gi, "Home Sauna Guide")
    .replace(/@Home Sauna Guide/gi, "Home Sauna Guide")
    .replace(/upper bench height should ben /gi, "upper bench height should be ");
}

for (const post of data.posts) {
  for (const field of ["title", "originalTitle", "description", "excerpt", "contentHtml"]) {
    post[field] = sanitizeText(post[field]);
  }
}

writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Sanitized visible legacy brand language in ${data.posts.length} pages.`);
