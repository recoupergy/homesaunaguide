export const AMAZON_TAG = "homesaunag-20";

const SHORT_LINKS = new Map([
  ["https://amzn.to/2GPcg2N", "https://www.amazon.com/dp/B01LYNWRLA"],
  ["https://amzn.to/2LxGMRh", "https://www.amazon.com/s?k=traditional+sauna"],
  ["https://amzn.to/2UknQdx", "https://www.amazon.com/dp/B079QCLFHR"],
  ["https://amzn.to/33TYUuY", "https://www.amazon.com/dp/B076DQ5F8D"],
]);

const TRACKING_KEYS = [
  "camp",
  "creative",
  "creativeASIN",
  "linkCode",
  "linkId",
  "qid",
  "ref_",
  "sr",
  "ufe",
  "_encoding",
];

export function isAmazonUrl(value) {
  try {
    const url = new URL(String(value).replaceAll("&amp;", "&"));
    return /(^|\.)amazon\.com$/i.test(url.hostname) || url.hostname.toLowerCase() === "amzn.to";
  } catch {
    return false;
  }
}

export function retagAmazonUrl(value) {
  const decoded = String(value).replaceAll("&amp;", "&");
  if (!isAmazonUrl(decoded)) return decoded;

  const expanded = SHORT_LINKS.get(decoded.replace(/\/$/, "")) ?? decoded;
  const url = new URL(expanded);
  url.protocol = "https:";
  url.hostname = "www.amazon.com";

  const product = url.pathname.match(/\/(?:gp\/product|dp)\/([A-Z0-9]{10})(?:\/|$)/i)
    ?? url.pathname.match(/\/dp\/([A-Z0-9]{10})(?:\/|$)/i);
  if (product) {
    url.pathname = `/dp/${product[1].toUpperCase()}`;
    url.search = "";
  } else {
    for (const key of TRACKING_KEYS) url.searchParams.delete(key);
  }

  url.searchParams.set("tag", AMAZON_TAG);
  url.hash = "";
  return url.toString();
}

export function htmlAttributeUrl(value) {
  return retagAmazonUrl(value).replaceAll("&", "&amp;");
}
