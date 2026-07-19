import legacy from "@/data/legacy-content.json";

export type Category = {
  name: string;
  slug: string;
  taxonomy: string;
};

export type LegacyPost = {
  id: number | string;
  type: "post" | "page" | "product" | "property";
  path: string;
  slug: string;
  title: string;
  originalTitle: string;
  description: string;
  date: string;
  modified: string;
  excerpt: string;
  contentHtml: string;
  wordCount: number;
  categories: Category[];
  featuredImage: string | null;
  legacyFeaturedImagePath: string | null;
  sourceArchiveUrl?: string;
};

export const legacyPosts = legacy.posts as LegacyPost[];
export const recoverySummary = legacy.summary;

export function normalizePath(path: string) {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/, "") : withSlash;
}

export function getPostByPath(path: string) {
  const normalized = normalizePath(path);
  return legacyPosts.find((post) => normalizePath(post.path) === normalized);
}

export function isHealthTopic(post: LegacyPost) {
  const haystack = `${post.title} ${post.path}`.toLowerCase();
  return /health|benefit|weight-loss|heart|covid|coronavirus|heat-shock|blood-pressure|pregnan|sick|illness/.test(haystack);
}

export function isHistoricalListing(post: LegacyPost) {
  return post.type === "product" || post.type === "property";
}

export function isIndexable(post: LegacyPost) {
  if (isHistoricalListing(post) || post.wordCount < 180) return false;
  if (/coronavirus|covid/.test(post.path)) return false;
  return true;
}

export function getEditorialPosts() {
  return legacyPosts
    .filter((post) => post.type === "post" && post.wordCount >= 180)
    .sort((a, b) => b.wordCount - a.wordCount);
}

export function getRelatedPosts(post: LegacyPost, limit = 3) {
  const categorySlugs = new Set(post.categories.map((category) => category.slug));
  return getEditorialPosts()
    .filter((candidate) => candidate.path !== post.path)
    .map((candidate) => ({
      candidate,
      score: candidate.categories.reduce((sum, category) => sum + (categorySlugs.has(category.slug) ? 3 : 0), 0) +
        candidate.title.toLowerCase().split(/\W+/).filter((word) => word.length > 5 && post.title.toLowerCase().includes(word)).length,
    }))
    .sort((a, b) => b.score - a.score || b.candidate.wordCount - a.candidate.wordCount)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function formatDate(value: string) {
  const normalized = /^\d{8}$/.test(value)
    ? `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`
    : value;
  const date = new Date(`${normalized.replace(" ", "T")}Z`);
  if (Number.isNaN(date.valueOf())) return "Original archive";
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(date);
}

export function readingTime(wordCount: number) {
  return `${Math.max(1, Math.ceil(wordCount / 225))} min read`;
}
