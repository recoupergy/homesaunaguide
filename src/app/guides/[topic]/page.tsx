import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/answer-box";
import { AffiliatePicks } from "@/components/affiliate-picks";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { getEditorialPosts } from "@/lib/content";
import { HEATER_SHORTLIST, MATERIAL_SHORTLIST } from "@/lib/editorial";
import { SITE } from "@/lib/site";
import { TOPICS, topicSources, type TopicKey } from "@/lib/topics";

type Props = { params: Promise<{ topic: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(TOPICS).map((topic) => ({ topic })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  if (!(topic in TOPICS)) return {};
  const item = TOPICS[topic as TopicKey];
  return { title: item.title, description: item.description, alternates: { canonical: `/guides/${topic}` } };
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params;
  if (!(topic in TOPICS)) notFound();
  const key = topic as TopicKey;
  const item = TOPICS[key];
  const sources = topicSources(key);
  const articles = getEditorialPosts()
    .map((post) => ({ post, score: item.keywords.filter((keyword) => `${post.title} ${post.path}`.toLowerCase().includes(keyword)).length }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.post.wordCount - a.post.wordCount)
    .slice(0, 6)
    .map(({ post }) => post);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: item.title,
      description: item.description,
      dateModified: SITE.updated,
      mainEntityOfPage: `${SITE.url}/guides/${key}`,
      author: { "@type": "Organization", name: "Home Sauna Guide Editorial Team" },
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: item.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <article className="topic-page">
        <header className="page-hero topic-hero">
          <div className="shell narrow-hero">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: item.title }]} />
            <span className="kicker light">{item.eyebrow} · Updated July 19, 2026</span>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </header>

        <div className="shell topic-layout">
          <div className="topic-main">
            <AnswerBox>{item.answer}</AnswerBox>
            <aside className="guide-position" role="note">
              <span>Our take</span>
              <p>{item.position}</p>
              <Link href="/point-of-view">See every position behind our recommendations →</Link>
            </aside>
            <section className="topic-steps">
              <span className="kicker">The decision path</span>
              <h2>What matters, in order.</h2>
              <ol>
                {item.steps.map(([title, body], index) => (
                  <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></li>
                ))}
              </ol>
            </section>
            {key === "building" && (
              <section className="topic-shortlist">
                <span className="kicker">Our wood bias</span>
                <h2>Three materials we keep coming back to.</h2>
                <div className="material-mini-grid">
                  {MATERIAL_SHORTLIST.map((material) => <article key={material.name}><h3>{material.name}</h3><p>{material.take}</p></article>)}
                </div>
                <p className="shortlist-caveat">Use the grade and profile intended for its job. Bench stock, wall cladding, and exterior boards are not interchangeable just because the species name matches.</p>
              </section>
            )}
            {key === "heaters" && (
              <section className="topic-shortlist">
                <span className="kicker">Shortlist by job</span>
                <h2>Good heaters solve different problems.</h2>
                <div className="heater-mini-list">
                  {HEATER_SHORTLIST.map((heater, index) => (
                    <article key={heater.name}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div><h3>{heater.name}</h3><strong>{heater.fit}</strong><p>{heater.take}</p></div>
                      <a href={heater.url} rel="noopener">Official details ↗</a>
                    </article>
                  ))}
                </div>
                <Link className="text-link" href="/point-of-view">Read the tradeoffs behind the shortlist →</Link>
              </section>
            )}
            <section className="topic-faq">
              <span className="kicker">Direct answers</span>
              <h2>Common questions.</h2>
              {item.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            </section>
            {key === "rituals" && <AffiliatePicks />}
            <section className="topic-sources">
              <span className="kicker">Primary-source trail</span>
              <h2>Check the current authority.</h2>
              <p>Model manuals, listings, local code, and personal medical advice take priority over general web guidance.</p>
              <ul>{sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener">{source.name} ↗</a><span>{source.note}</span></li>)}</ul>
              <Link className="text-link" href="/sources">View every source →</Link>
            </section>
          </div>
          <aside className="topic-rail">
            <span>Our non-negotiable</span>
            <strong>Do not design from a generic diagram.</strong>
            <p>Use the current manual for the exact heater and control you buy. Clearances, sensor position, ventilation, electrical requirements, and allowed room volume vary.</p>
            <Link href="/tools/sauna-room-calculator">Calculate room volume →</Link>
          </aside>
        </div>
      </article>
      {articles.length > 0 && <section className="section popular-section"><div className="shell"><div className="section-title-row"><div><span className="kicker">From the sauna library</span><h2>Read deeper.</h2></div><Link className="text-link" href="/blog">All articles →</Link></div><div className="article-grid">{articles.map((post) => <ArticleCard key={post.path} post={post} />)}</div></div></section>}
    </>
  );
}
