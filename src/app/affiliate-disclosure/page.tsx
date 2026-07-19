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
        <p><strong>As an Amazon Associate I earn from qualifying purchases.</strong> Home Sauna Guide uses the Amazon associate tag <code>homesaunag-20</code>. If you buy through an eligible Amazon link, the site may earn a commission at no additional cost to you.</p>
        <p>A commercial relationship does not guarantee coverage, placement, or a favorable conclusion. Affiliate links are marked as sponsored in the page markup. We add products only where they solve a real problem, not to turn every paragraph into a shopping list.</p>
        <h2>Editorial independence</h2>
        <p>Recommendations begin with reader fit, safety, documentation, certification, serviceability, and total ownership considerations. We state the job a product does and the tradeoff it brings. Manufacturers and sellers do not receive the right to approve independent editorial copy. Sponsored material, if published, will be labeled prominently.</p>
        <h2>Earlier commercial content</h2>
        <p>Long-running articles and product references may contain commercial statements from their publication date. Availability, price, ownership, terms, and affiliate participation can change, so every purchase decision should be checked against current seller information.</p>
        <h2>Before you buy</h2>
        <p>Verify the current model, manual, listing, warranty, seller, return policy, replacement parts, installation requirements, and local support directly. The best product is the one that fits the room, the intended session, and the qualified installer’s plan.</p>
      </article><aside className="utility-card"><span className="kicker">Effective</span><h2>July 19, 2026</h2><p>Questions about a relationship or a specific article are welcome.</p><a className="button pine" href="mailto:hello@homesaunaguide.com">Email the editorial team →</a></aside></div></section>
    </>
  );
}
