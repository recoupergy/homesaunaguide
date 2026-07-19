import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/answer-box";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import {
  formatDate,
  getPostByPath,
  getRelatedPosts,
  isHealthTopic,
  isHistoricalListing,
  isIndexable,
  legacyPosts,
  readingTime,
} from "@/lib/content";
import { SITE } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return legacyPosts.map((post) => ({ slug: post.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostByPath(`/${slug.join("/")}`);
  if (!post) return {};
  const title = post.title || post.originalTitle;
  const description = post.description || post.excerpt;
  const index = isIndexable(post);
  return {
    title,
    description,
    alternates: { canonical: post.path },
    robots: { index, follow: true, googleBot: { index, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "article",
      title,
      description,
      url: post.path,
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Home Sauna Guide" }],
    },
  };
}

export default async function LegacyContentPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostByPath(`/${slug.join("/")}`);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const health = isHealthTopic(post);
  const listing = isHistoricalListing(post);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: `${SITE.url}${post.path}`,
    author: { "@type": "Organization", name: "Home Sauna Guide Editorial Team", url: `${SITE.url}/about` },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    isAccessibleForFree: true,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Archive", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}${post.path}` },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <article className="legacy-article">
        <header className="article-hero">
          <div className="shell article-hero-inner">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Archive", href: "/blog" }, { name: post.title }]} />
            <span className="kicker light">{listing ? "Historical marketplace listing" : "Original Home Sauna Guide archive"}</span>
            <h1>{post.title}</h1>
            <p>{post.description || post.excerpt}</p>
            <div className="article-byline">
              <span>By Home Sauna Guide Editorial Team</span>
              <time dateTime={post.date}>Originally published {formatDate(post.date)}</time>
              <span>{readingTime(post.wordCount)}</span>
            </div>
          </div>
        </header>

        <div className="shell article-layout">
          <aside className="article-rail">
            <span>On this page</span>
            <a href="#quick-answer">Quick answer</a>
            <a href="#original-article">Original article</a>
            <a href="#editorial-note">Editorial note</a>
            <Link href="/sources">Sources policy</Link>
          </aside>
          <div className="article-main">
            <div id="quick-answer">
              <AnswerBox label={listing ? "Archive status" : "Article in brief"}>
                {listing
                  ? "This page preserves an original listing and URL for continuity. Availability, pricing, certification, ownership, and specifications may have changed; verify every detail directly with the current manufacturer or seller."
                  : post.description || post.excerpt}
              </AnswerBox>
            </div>

            {health && (
              <aside className="safety-note" role="note">
                <strong>Health-content note</strong>
                <p>This archived article may predate current evidence. Sauna is not medical treatment. Do not use a sauna when ill; stop for dizziness or discomfort; and ask a qualified clinician about pregnancy, cardiovascular conditions, low blood pressure, or medication concerns.</p>
                <Link href="/guides/health">Read the current evidence and safety guide →</Link>
              </aside>
            )}

            <div
              id="original-article"
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <aside id="editorial-note" className="archive-note">
              <span>Archive continuity</span>
              <h2>This original page has been preserved—not silently rewritten.</h2>
              <p>Product details, prices, links, medical claims, building guidance, and code references can age. Before acting, compare this archive with the current heater manual, product listing, local authority, and our <Link href="/sources">primary-source library</Link>.</p>
              {post.sourceArchiveUrl && <a href={post.sourceArchiveUrl} rel="nofollow noopener">View the recovered Archive.org capture ↗</a>}
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related-section section">
          <div className="shell">
            <div className="section-title-row">
              <div><span className="kicker">Continue learning</span><h2>Related sauna guides.</h2></div>
              <Link className="text-link" href="/blog">Full archive →</Link>
            </div>
            <div className="article-grid">{related.map((item) => <ArticleCard key={item.path} post={item} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
