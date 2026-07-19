import { readFileSync } from "node:fs";
import { AMAZON_TAG, isAmazonUrl } from "./amazon-links.mjs";

const data = JSON.parse(readFileSync(new URL("../src/data/legacy-content.json", import.meta.url), "utf8"));
const errors = [];
let linkCount = 0;

for (const post of data.posts) {
  for (const match of post.contentHtml.matchAll(/<a href="([^"]+)"([^>]*)>/gi)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!isAmazonUrl(href)) continue;
    linkCount += 1;
    const url = new URL(href);
    if (url.hostname === "amzn.to") errors.push(`Unresolved short link on ${post.path}: ${href}`);
    if (url.protocol !== "https:") errors.push(`Non-HTTPS Amazon link on ${post.path}: ${href}`);
    if (url.searchParams.get("tag") !== AMAZON_TAG) errors.push(`Wrong Amazon tag on ${post.path}: ${href}`);
    if (!/rel="[^"]*sponsored[^"]*"/i.test(match[2])) errors.push(`Missing sponsored rel on ${post.path}: ${href}`);
  }
}

const serialized = JSON.stringify(data);
if (/(?:saunamarketpl|microgridmedia|solarmedia)-20/i.test(serialized)) errors.push("A retired Amazon associate tag remains in legacy content");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${linkCount} legacy Amazon links use ${AMAZON_TAG}, HTTPS, and sponsored attributes.`);
