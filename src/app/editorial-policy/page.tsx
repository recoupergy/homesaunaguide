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
      <header className="page-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Editorial policy" }]} /><span className="kicker light">Trust is a method</span><h1>Our editorial policy.</h1><p>How we separate current guidance, recovered history, evidence, opinion, and commercial relationships.</p></div></header>
      <section className="section utility-section"><div className="shell utility-layout"><article className="prose utility-prose">
        <h2>Source hierarchy</h2>
        <p>For installation and product claims, we prioritize the current manual for the exact model, certification records, official manufacturer documentation, and the authority having jurisdiction. For health coverage, we prefer recent reviews, primary research, and physician-reviewed institutional guidance. Trade publications and experienced practitioners can add context; they do not overrule a manual, listing, code, or clinician.</p>
        <h2>How current guides are built</h2>
        <p>We begin with the decision a reader must make, identify the facts that change that decision, and link the most authoritative current sources. We distinguish broad principles from model-specific requirements. Dates are shown when recency matters, and uncertainty is stated plainly.</p>
        <h2>How archived articles are handled</h2>
        <p>Recovered articles remain at their original URLs. Their historic body copy is preserved and clearly labeled. Material that is too thin, transactional, obsolete, or potentially misleading may remain available for URL continuity while being excluded from search indexing. A preservation note points readers toward current sources.</p>
        <h2>Health and safety</h2>
        <p>Health content is educational, not medical advice. Sauna is not presented as treatment for infection or as a replacement for exercise, medication, vaccination, or clinical care. Building content cannot account for every jurisdiction or installation.</p>
        <h2>Corrections and updates</h2>
        <p>Substantive current-guide changes update the reviewed date. Factual errors are corrected without disguising the change. Send a precise correction with a primary source to <a href="mailto:hello@homesaunaguide.com">hello@homesaunaguide.com</a>.</p>
      </article><aside className="utility-card"><span className="kicker">The short version</span><h2>Manuals beat maxims.</h2><p>We value direct answers, but never at the expense of the source that has legal, technical, or clinical authority.</p><Link className="button pine" href="/sources">Open the source library →</Link></aside></div></section>
    </>
  );
}
