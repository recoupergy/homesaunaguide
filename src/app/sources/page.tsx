import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EDITORIAL_SOURCES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primary Sauna Sources",
  description: "The manuals, certification resources, Finnish design guidance, and physician-reviewed health sources behind Home Sauna Guide.",
  alternates: { canonical: "/sources" },
};

export default function SourcesPage() {
  return (
    <>
      <header className="page-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Sources" }]} /><span className="kicker light">Go to the authority</span><h1>Primary-source library.</h1><p>Our point of view frames the decision. The exact manual, current listing, local requirements, and evidence appropriate to the claim keep it honest.</p></div></header>
      <section className="section sources-section"><div className="shell"><div className="sources-intro"><h2>Sources used for the 2026 guides.</h2><p>This is a starting library, not a substitute for the documentation tied to your model, property, jurisdiction, or health history.</p></div><ol className="source-list">{EDITORIAL_SOURCES.map((source, index) => <li key={source.url}><span>{String(index + 1).padStart(2, "0")}</span><div><h2><a href={source.url} rel="noopener">{source.name} ↗</a></h2><p>{source.note}</p></div></li>)}</ol><aside className="source-rule"><strong>The rule that prevents most bad advice:</strong><span>A general article can frame the decision. The current model manual, official listing, local authority, or clinician makes it specific.</span></aside></div></section>
    </>
  );
}
