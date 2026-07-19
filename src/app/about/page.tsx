import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { recoverySummary } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Home Sauna Guide editorial mission and our point of view on better sauna design, products, evidence, and daily use.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell narrow-hero">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <span className="kicker light">Knowledge with a point of view</span>
          <h1>Practical sauna judgment for better heat at home.</h1>
          <p>Home Sauna Guide helps people design for better heat at bather level: useful benches, breathable air, controllable löyly, durable construction, safe exits, and a room that dries. We state what we prefer, explain the tradeoffs, and point to the source that should have the final word.</p>
        </div>
      </header>
      <section className="section utility-section">
        <div className="shell utility-layout">
          <article className="prose utility-prose">
            <h2>Our purpose</h2>
            <p>A home sauna sits at the intersection of architecture, moisture management, electrical or chimney work, fire safety, product service, and daily ritual. That makes shallow advice unusually expensive. We publish clear decision frameworks, identify the source that should have the final word, and say when professional judgment is needed.</p>
            <h2>What we stand for</h2>
            <p>Traditional water-on-stones sauna is our reference point. We work from the ceiling down, aim to keep the whole bather in the warm steam zone, treat fresh air and drying as separate but connected jobs, and prefer one durable moisture strategy through the enclosure. Electric heat fits most home routines; wood fire fits when tending it is part of the joy. Infrared is a separate experience. Cold plunging is optional. Health claims should lag evidence, not lead it.</p>
            <p>We are pragmatic without being vague. The upper bench belongs near the ceiling, feet should sit near or above the stone line when practical, glazing should earn its heat penalty, doors should open outward without trapping anyone, and every heater should be judged as a complete system. When an existing room, budget, code, or accessibility need forces a compromise, we explain how to protect the experience rather than pretending the tradeoff disappeared.</p>
            <p>The editorial team works from a maintained body of product specifications, manuals, installation patterns, support lessons, owner questions, and sauna-culture knowledge. We turn that material into original guidance for this site. We do not invent personal testing stories or borrow another property’s identity.</p>
            <h2>A living sauna reference</h2>
            <p>Our library spans {recoverySummary.publishedContentCount} articles across planning, construction, heaters, products, health evidence, culture, and bathing practice. Long-running articles keep their publication dates and open with a current editorial position when the subject has changed.</p>
            <p>Product availability, prices, medical evidence, code references, and external links can age. We keep the useful depth, make current judgment easy to find, and exclude obsolete or potentially misleading material from search when a newer guide should lead.</p>
            <h2>How to use this site</h2>
            <p>Start with <Link href="/point-of-view">our point of view</Link> and the <Link href="/guides/planning">2026 planning guide</Link>, then move to the building, heater, health, and bathing guides. Use the article library for depth. Before a purchase or build, check the exact equipment manual, current certification, local code, and qualified installer.</p>
          </article>
          <aside className="utility-card">
            <span className="kicker">At a glance</span>
            <dl>
              <div><dt>{recoverySummary.publishedContentCount}</dt><dd>in-depth articles</dd></div>
              <div><dt>5</dt><dd>current decision guides</dd></div>
              <div><dt>2026</dt><dd>sources reviewed</dd></div>
            </dl>
            <Link className="button pine" href="/editorial-policy">Read our editorial policy →</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
