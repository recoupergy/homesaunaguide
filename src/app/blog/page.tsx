import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { getEditorialPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sauna Articles & In-Depth Guides",
  description: "Browse Home Sauna Guide articles on building, heaters, health evidence, ritual, buying, and sauna culture.",
  alternates: { canonical: "/blog" },
};

type Props = { searchParams: Promise<{ q?: string }> };

export default async function BlogPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.toLowerCase().trim();
  const allPosts = getEditorialPosts();
  const posts = query
    ? allPosts.filter((post) => `${post.title} ${post.excerpt} ${post.categories.map((c) => c.name).join(" ")}`.toLowerCase().includes(query))
    : allPosts;
  return (
    <>
      <section className="page-hero archive-hero">
        <div className="shell narrow-hero"><span className="kicker light">Go deeper than the buying checklist</span><h1>The sauna library.</h1><p>Long-form field notes, practical guides, product analysis, health evidence, and sauna culture. Each article leads with the judgment that matters now.</p></div>
      </section>
      <section className="section archive-section">
        <div className="shell">
          <form className="archive-search" action="/blog" method="get" role="search">
            <label htmlFor="archive-q">Search the sauna library</label>
            <div><input id="archive-q" name="q" type="search" defaultValue={q} placeholder="Try “ventilation,” “barrel,” or “heater”…" /><button type="submit">Search</button></div>
          </form>
          <div className="archive-results-row"><h2>{query ? `Results for “${q}”` : "All editorial articles"}</h2><span>{posts.length} {posts.length === 1 ? "article" : "articles"}</span></div>
          {posts.length > 0 ? <div className="article-grid archive-grid">{posts.map((post) => <ArticleCard key={post.path} post={post} />)}</div> : <div className="empty-state"><h2>No exact match.</h2><p>Try a broader word, or clear the search to browse every article.</p></div>}
        </div>
      </section>
    </>
  );
}
