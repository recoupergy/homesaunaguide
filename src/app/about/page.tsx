import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { recoverySummary } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the editorial mission behind Home Sauna Guide and learn how the original publishing archive was responsibly recovered.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell narrow-hero">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <span className="kicker light">Independent by design</span>
          <h1>Practical sauna knowledge, with its history intact.</h1>
          <p>Home Sauna Guide helps people make calmer, safer decisions about rooms, heaters, construction, and bathing—while preserving the original site instead of erasing it.</p>
        </div>
      </header>
      <section className="section utility-section">
        <div className="shell utility-layout">
          <article className="prose utility-prose">
            <h2>Our purpose</h2>
            <p>A home sauna sits at the intersection of architecture, moisture management, electrical or chimney work, fire safety, wellness, and daily ritual. That makes shallow advice unusually expensive. We publish clear decision frameworks, identify the source that should have the final word, and say when professional judgment is needed.</p>
            <h2>A responsible rebuild</h2>
            <p>The original WordPress database and media archive were recovered in July 2026. We preserved {recoverySummary.publishedContentCount} published pages at their original paths and restored historical redirects. Archive pages retain their original copy and publication context; they are labeled so readers can distinguish recovered material from current guidance.</p>
            <p>We do not quietly rewrite old articles to make them appear current. Product availability, prices, medical claims, code references, and external links can age. Current decision guides live separately and link to primary sources.</p>
            <h2>How to use this site</h2>
            <p>Start with the <Link href="/guides/planning">2026 planning guide</Link>, then move to the current building, heater, health, and bathing guides. Use the archive for depth and history. Before a purchase or build, check the exact equipment manual, current certification, local code, and qualified installer.</p>
          </article>
          <aside className="utility-card">
            <span className="kicker">At a glance</span>
            <dl>
              <div><dt>{recoverySummary.publishedContentCount}</dt><dd>original pages preserved</dd></div>
              <div><dt>{recoverySummary.redirectCount}</dt><dd>legacy redirects restored</dd></div>
              <div><dt>2026</dt><dd>current guides reviewed</dd></div>
            </dl>
            <Link className="button pine" href="/editorial-policy">Read our editorial policy →</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
