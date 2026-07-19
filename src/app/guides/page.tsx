import type { Metadata } from "next";
import Link from "next/link";
import { TopicCard } from "@/components/topic-card";
import { ArticleCard } from "@/components/article-card";
import { getEditorialPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home Sauna Planning & Building Guides",
  description: "Start with a clear decision path for sauna planning, construction, heater selection, health evidence, and better bathing.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const cornerstone = getEditorialPosts().slice(0, 6);
  return (
    <>
      <section className="page-hero guide-index-hero">
        <div className="shell narrow-hero">
          <span className="kicker light">The Home Sauna Guide field manual</span>
          <h1>From first sketch<br />to first löyly.</h1>
          <p>Follow the decisions in order. Each guide gives you the direct answer first, then the reasoning, source trail, and original archive for a deeper read.</p>
          <Link className="button ember" href="/guides/planning">Start with planning →</Link>
        </div>
      </section>
      <section className="section guide-map-section">
        <div className="shell">
          <div className="section-intro"><span className="kicker">Five decisions, in order</span><h2>Your sauna roadmap.</h2></div>
          <div className="topic-grid">
            <TopicCard topic="planning" number="01" />
            <TopicCard topic="building" number="02" />
            <TopicCard topic="heaters" number="03" />
            <TopicCard topic="health" number="04" />
            <TopicCard topic="rituals" number="05" />
          </div>
        </div>
      </section>
      <section className="section popular-section">
        <div className="shell">
          <div className="section-title-row"><div><span className="kicker">Long-form library</span><h2>Cornerstone reads.</h2></div><Link className="text-link" href="/blog">All articles →</Link></div>
          <div className="article-grid">{cornerstone.map((post) => <ArticleCard key={post.path} post={post} />)}</div>
        </div>
      </section>
    </>
  );
}
