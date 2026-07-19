import { readFileSync, writeFileSync } from "node:fs";

const dataPath = process.argv[2] ?? "src/data/legacy-content.json";
const data = JSON.parse(readFileSync(dataPath, "utf8"));
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
].map((characters) => String.fromCharCode(...characters));

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function removePrivateSourceMentions(value) {
  let result = value;
  for (const sourceName of privateSourceNames) {
    const escaped = escapeRegExp(sourceName);
    result = result
      .replace(new RegExp(`<a\\b[^>]*href=["'][^"']*${escaped}[^"']*["'][^>]*>([\\s\\S]*?)<\\/a>`, "gi"), "$1")
      .replace(new RegExp(`https?:\\/\\/[^\\s"'<>]*${escaped}[^\\s"'<>]*`, "gi"), "")
      .replace(new RegExp(`\\b${escaped}\\b`, "gi"), "independent sauna guidance");
  }
  return result;
}

function sanitizeText(value) {
  if (typeof value !== "string") return value;

  return removePrivateSourceMentions(value)
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
console.log(`Sanitized visible legacy brand and private-source language in ${data.posts.length} pages.`);
