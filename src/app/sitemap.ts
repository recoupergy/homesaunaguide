import type { MetadataRoute } from "next";
import { isIndexable, legacyPosts } from "@/lib/content";
import { SITE } from "@/lib/site";
import { TOPICS } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/guides", "/point-of-view", "/blog", "/faq", "/about", "/editorial-policy", "/affiliate-disclosure", "/contact", "/sources", "/tools/sauna-room-calculator"];
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({ url: `${SITE.url}${path}`, lastModified: SITE.updated, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/guides" ? 0.9 : 0.7 }));
  const topics: MetadataRoute.Sitemap = Object.keys(TOPICS).map((topic) => ({ url: `${SITE.url}/guides/${topic}`, lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.9 }));
  const archive: MetadataRoute.Sitemap = legacyPosts.filter(isIndexable).map((post) => ({ url: `${SITE.url}${post.path}`, lastModified: post.modified || post.date, changeFrequency: "yearly", priority: 0.5 }));
  return [...staticEntries, ...topics, ...archive];
}
