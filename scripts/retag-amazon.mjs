#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { AMAZON_TAG, htmlAttributeUrl, isAmazonUrl } from "./amazon-links.mjs";

const dataPath = process.argv[2] ?? "src/data/legacy-content.json";
const data = JSON.parse(readFileSync(dataPath, "utf8"));
let linksUpdated = 0;
let pagesUpdated = 0;

for (const post of data.posts) {
  let changed = false;
  post.contentHtml = post.contentHtml.replace(
    /<img\b[^>]*src="https?:\/\/[^"']*amazon-adsystem\.com\/e\/ir\?[^"']*"[^>]*\/?\s*>/gi,
    () => {
      changed = true;
      return "";
    },
  );
  post.contentHtml = post.contentHtml.replace(
    /<a href="([^"]+)"(?: rel="[^"]*")?(?: target="[^"]*")?>/gi,
    (anchor, href) => {
      if (!isAmazonUrl(href)) return anchor;
      linksUpdated += 1;
      changed = true;
      return `<a href="${htmlAttributeUrl(href)}" rel="sponsored nofollow noopener" target="_blank">`;
    },
  );
  if (changed) pagesUpdated += 1;
}

writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Applied Amazon tag ${AMAZON_TAG} to ${linksUpdated} links across ${pagesUpdated} legacy pages.`);
