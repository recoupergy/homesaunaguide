import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Home Sauna Guide commercial and affiliate disclosure.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <header className="page-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Affiliate disclosure" }]} /><span className="kicker light">Commercial transparency</span><h1>Affiliate disclosure.</h1><p>How the site may be funded, and the line money does not cross.</p></div></header>
      <section className="section utility-section"><div className="shell utility-layout"><article className="prose utility-prose">
        <h2>The plain-language disclosure</h2>
        <p>Home Sauna Guide may use affiliate links. If you buy through one, the site may earn a commission at no additional cost to you. A commercial relationship does not guarantee coverage, placement, or a favorable conclusion.</p>
        <h2>Editorial independence</h2>
        <p>Recommendations begin with reader fit, safety, documentation, certification, serviceability, and total ownership considerations. Manufacturers and sellers do not receive the right to approve independent editorial copy. Sponsored material, if published, will be labeled prominently.</p>
        <h2>The recovered archive</h2>
        <p>Old articles and marketplace listings may contain links or commercial statements from the original publication. Those pages are preserved for continuity and historical reference. Availability, price, ownership, terms, and affiliate participation may have changed.</p>
        <h2>Before you buy</h2>
        <p>Verify the current model, manual, listing, warranty, seller, return policy, replacement parts, installation requirements, and local support directly. The best product is the one that fits the room, the intended session, and the qualified installer’s plan.</p>
      </article><aside className="utility-card"><span className="kicker">Effective</span><h2>July 19, 2026</h2><p>Questions about a relationship or a specific article are welcome.</p><a className="button pine" href="mailto:hello@homesaunaguide.com">Email the editorial team →</a></aside></div></section>
    </>
  );
}
