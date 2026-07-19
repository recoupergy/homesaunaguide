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
import { getLegacyEditorialContext } from "@/lib/editorial";
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
      modifiedTime: SITE.updated,
      images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Home Sauna Guide: build the sauna you will actually use" }],
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
  const editorialContext = getLegacyEditorialContext(post);
  const hasAmazonLinks = /(?:www\.)?amazon\.com/i.test(post.contentHtml);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: SITE.updated,
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
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}${post.path}` },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <article className="legacy-article">
        <header className="article-hero">
          <div className="shell article-hero-inner">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Articles", href: "/blog" }, { name: post.title }]} />
            <span className="kicker light">{listing ? "Product reference" : `${post.categories[0]?.name ?? "Sauna guide"} · In-depth article`}</span>
            <h1>{post.title}</h1>
            <p>{post.description || post.excerpt}</p>
            <div className="article-byline">
              <span>By Home Sauna Guide Editorial Team</span>
              <time dateTime={post.date}>Published {formatDate(post.date)}</time>
              <span>{readingTime(post.wordCount)}</span>
            </div>
          </div>
        </header>

        <div className="shell article-layout">
          <aside className="article-rail">
            <span>On this page</span>
            <a href="#quick-answer">Quick answer</a>
            <a href="#current-position">Our current position</a>
            <a href="#article-body">Full article</a>
            <a href="#editorial-note">Before you act</a>
            <Link href="/sources">Sources policy</Link>
          </aside>
          <div className="article-main">
            <div id="quick-answer">
              <AnswerBox label={listing ? "Product status" : "Article in brief"}>
                {listing
                  ? "This product reference is not a current offer. Availability, pricing, certification, ownership, and specifications can change; verify every detail directly with the current manufacturer or seller."
                  : post.description || post.excerpt}
              </AnswerBox>
            </div>

            <aside id="current-position" className="current-position" role="note">
              <span>{editorialContext.label}</span>
              <h2>{editorialContext.title}</h2>
              <p>{editorialContext.body}</p>
              <Link href={editorialContext.href}>{editorialContext.linkLabel} →</Link>
            </aside>

            {health && (
              <aside className="safety-note" role="note">
                <strong>Health-content note</strong>
                <p>Health evidence changes over time. Sauna is not medical treatment. Do not use a sauna when ill; stop for dizziness or discomfort; and ask a qualified clinician about pregnancy, cardiovascular conditions, low blood pressure, or medication concerns.</p>
                <Link href="/guides/health">Read the current evidence and safety guide →</Link>
              </aside>
            )}

            {hasAmazonLinks && (
              <aside className="affiliate-article-note" role="note">
                <strong>Affiliate disclosure</strong>
                <span>As an Amazon Associate I earn from qualifying purchases. Amazon links on this page use our current associate tag; availability and specifications can change. <Link href="/affiliate-disclosure">Full disclosure →</Link></span>
              </aside>
            )}

            <div
              id="article-body"
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <aside id="editorial-note" className="archive-note">
              <span>Before you act</span>
              <h2>Check current details before you build or buy.</h2>
              <p>Product specifications, prices, links, health evidence, building guidance, and code references can change. Use our current position above to frame the decision, then compare it with the exact heater manual, current product listing, local authority, and our <Link href="/sources">primary-source library</Link>.</p>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related-section section">
          <div className="shell">
            <div className="section-title-row">
              <div><span className="kicker">Continue learning</span><h2>Related sauna guides.</h2></div>
              <Link className="text-link" href="/blog">All articles →</Link>
            </div>
            <div className="article-grid">{related.map((item) => <ArticleCard key={item.path} post={item} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
