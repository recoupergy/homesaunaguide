import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { EDITORIAL_POSITIONS, HEATER_SHORTLIST, MATERIAL_SHORTLIST } from "@/lib/editorial";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Sauna Point of View",
  description: "The clear positions behind Home Sauna Guide recommendations on löyly, room design, heaters, wood, cold exposure, and product fit.",
  alternates: { canonical: "/point-of-view" },
};

export default function PointOfViewPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "What we believe makes a better sauna",
      description: metadata.description,
      dateModified: SITE.updated,
      mainEntityOfPage: `${SITE.url}/point-of-view`,
      author: { "@type": "Organization", name: "Home Sauna Guide Editorial Team" },
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Home Sauna Guide editorial positions",
      itemListElement: EDITORIAL_POSITIONS.map((position, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: position.title,
        description: position.body,
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <header className="page-hero">
        <div className="shell narrow-hero">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our point of view" }]} />
          <span className="kicker light">Clear recommendations need a position</span>
          <h1>What we believe makes a better sauna.</h1>
          <p>We are not neutral about every material, heater, room shape, or wellness claim. These are the judgments behind our guides, including the tradeoffs that keep them honest.</p>
        </div>
      </header>

      <section className="section position-section">
        <div className="shell">
          <div className="position-grid">
            {EDITORIAL_POSITIONS.map((position) => (
              <article key={position.number}>
                <span>{position.number}</span>
                <h2>{position.title}</h2>
                <p>{position.body}</p>
                <Link href={position.href}>{position.linkLabel} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shortlist-section">
        <div className="shell">
          <div className="section-intro split-heading">
            <div>
              <span className="kicker">A heater shortlist, not a leaderboard</span>
              <h2>Four good answers to four different rooms.</h2>
            </div>
            <p className="lead">We lean toward proven traditional electric heat for most homes, then narrow by room load, layout, stone character, controls, and the problem the heater needs to solve.</p>
          </div>
          <div className="shortlist-table">
            {HEATER_SHORTLIST.map((heater, index) => (
              <article key={heater.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{heater.name}</h3><em>{heater.fit}</em></div>
                <p>{heater.take}</p>
                <div><strong>Tradeoff</strong><p>{heater.tradeoff}</p><a href={heater.url} rel="noopener">Official product information ↗</a></div>
              </article>
            ))}
          </div>
          <p className="shortlist-caveat">This is a decision shortlist, not a purchase prescription. Model ranges, certifications, controls, and manuals change. Confirm the exact North American product and installation documents before ordering.</p>
        </div>
      </section>

      <section className="section materials-section">
        <div className="shell materials-layout">
          <div>
            <span className="kicker light">Where our wood bias lands</span>
            <h2>Stable wood makes the rest of the design easier.</h2>
            <p>We prefer thermally modified wood when repeated heat, humidity, and outdoor weather make movement and durability central to the project. Color is a design choice. Stability is a performance choice.</p>
            <a className="text-link light" href="https://thermory.com/wp-content/uploads/2022/08/Thermory_Sauna_materials_Product_catalogue_0322-A4_ENG_web.pdf" rel="noopener">Read an official sauna-material catalog ↗</a>
          </div>
          <div className="material-cards">
            {MATERIAL_SHORTLIST.map((material) => <article key={material.name}><h3>{material.name}</h3><p>{material.take}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section viewpoint-close">
        <div className="shell viewpoint-close-inner">
          <span className="kicker">The standard underneath every recommendation</span>
          <h2>Specifics beat superlatives.</h2>
          <p>We would rather explain why a product fits, where it compromises, and what must be verified than declare one universal winner. If a current manual or primary source disagrees with a general rule here, the current source wins.</p>
          <div><Link className="button pine" href="/guides/planning">Start with the planning guide →</Link><Link className="text-link" href="/editorial-policy">Read our editorial policy</Link></div>
        </div>
      </section>
    </>
  );
}
