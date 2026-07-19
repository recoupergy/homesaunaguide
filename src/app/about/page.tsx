import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { recoverySummary } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Home Sauna Guide editorial mission, our product and design perspective, and the responsibly recovered original archive.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell narrow-hero">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <span className="kicker light">Knowledge with a point of view</span>
          <h1>Practical sauna judgment, with its history intact.</h1>
          <p>Home Sauna Guide helps people make better decisions about rooms, heaters, construction, and bathing. We preserve the useful history, correct the framing around it, and state what we would choose today.</p>
        </div>
      </header>
      <section className="section utility-section">
        <div className="shell utility-layout">
          <article className="prose utility-prose">
            <h2>Our purpose</h2>
            <p>A home sauna sits at the intersection of architecture, moisture management, electrical or chimney work, fire safety, product service, and daily ritual. That makes shallow advice unusually expensive. We publish clear decision frameworks, identify the source that should have the final word, and say when professional judgment is needed.</p>
            <h2>What we stand for</h2>
            <p>Traditional water-on-stones sauna is our reference point. We favor bench and ceiling geometry that puts people in the hot zone, electric heat for most home routines, wood fire when tending it is part of the joy, thermally modified wood where stability earns its cost, and product recommendations that explain their tradeoffs. Infrared is a separate experience. Cold plunging is optional. Health claims should lag evidence, not lead it.</p>
            <p>The editorial team works from a maintained body of product specifications, manuals, installation patterns, support lessons, owner questions, and sauna-culture knowledge. We turn that material into original guidance for this site. We do not invent personal testing stories or borrow another property’s identity.</p>
            <h2>A responsible rebuild</h2>
            <p>The original WordPress database and media archive were recovered in July 2026. We preserved {recoverySummary.publishedContentCount} published routes and restored historical redirects. Archive pages retain their historical argument and publication context; they are labeled so readers can distinguish recovered material from current guidance.</p>
            <p>We do not quietly rewrite old arguments to make them appear current. Product availability, prices, medical claims, code references, and external links can age. Every archived route now carries a current editorial position above the recovered body. Broken commercial references and obsolete brand language are cleaned up without disguising the age of the underlying article.</p>
            <h2>How to use this site</h2>
            <p>Start with <Link href="/point-of-view">our point of view</Link> and the <Link href="/guides/planning">2026 planning guide</Link>, then move to the building, heater, health, and bathing guides. Use the archive for depth and history. Before a purchase or build, check the exact equipment manual, current certification, local code, and qualified installer.</p>
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
