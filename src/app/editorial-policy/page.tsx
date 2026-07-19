import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Home Sauna Guide researches, sources, reviews, updates, and corrects sauna guidance.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <header className="page-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Editorial policy" }]} /><span className="kicker light">Trust is a method</span><h1>Our editorial policy.</h1><p>How we separate current guidance, evidence, judgment, older material, and commercial relationships.</p></div></header>
      <section className="section utility-section"><div className="shell utility-layout"><article className="prose utility-prose">
        <h2>Source hierarchy</h2>
        <p>For installation and product claims, we prioritize the current manual for the exact model, certification records, official manufacturer documentation, and the authority having jurisdiction. For health coverage, we prefer recent reviews, primary research, and physician-reviewed institutional guidance. Trade publications and experienced practitioners can add context; they do not overrule a manual, listing, code, or clinician.</p>
        <h2>How current guides are built</h2>
        <p>We begin with the decision a reader must make, identify the facts that change that decision, and link the most authoritative current sources. We also state our judgment. Traditional löyly is our reference experience, electric is the default for most home routines, thermally modified wood earns a preference where stability matters, and every product recommendation must include the problem it solves and the tradeoff it creates.</p>
        <p>We distinguish broad principles from model-specific requirements. Dates are shown when recency matters, uncertainty is stated plainly, and firsthand claims are never invented. Specifics beat superlatives.</p>
        <h2>How long-running articles are handled</h2>
        <p>Articles keep stable URLs and clear publication dates. When a subject has changed, a current editorial position appears before the full article. Broken commercial references and obsolete language may be cleaned up. Material that is too thin, transactional, obsolete, or potentially misleading may remain accessible while being excluded from search indexing.</p>
        <h2>Health and safety</h2>
        <p>Health content is educational, not medical advice. Sauna is not presented as treatment for infection or as a replacement for exercise, medication, vaccination, or clinical care. Earlier health articles remain accessible but are excluded from search indexing in favor of the current evidence guide. Building content cannot account for every jurisdiction or installation.</p>
        <h2>Corrections and updates</h2>
        <p>Substantive current-guide changes update the reviewed date. Factual errors are corrected without disguising the change. Send a precise correction with a primary source to <a href="mailto:hello@homesaunaguide.com">hello@homesaunaguide.com</a>.</p>
      </article><aside className="utility-card"><span className="kicker">The short version</span><h2>Have a position. Show the tradeoff.</h2><p>We value direct answers, but never at the expense of the source that has legal, technical, or clinical authority.</p><Link className="button pine" href="/point-of-view">Read our point of view →</Link></aside></div></section>
    </>
  );
}
