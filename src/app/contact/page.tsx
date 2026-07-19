import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Home Sauna Guide editorial team with corrections, questions, and source suggestions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} /><span className="kicker light">Send the useful detail</span><h1>Contact Home Sauna Guide.</h1><p>Corrections, primary sources, product updates, and serious editorial inquiries are welcome.</p></div></header>
      <section className="section utility-section"><div className="shell contact-grid">
        <div className="contact-panel"><span className="kicker">Editorial</span><h2>hello@homesaunaguide.com</h2><p>For the fastest useful response, include the page URL, the sentence or claim in question, and a current primary source.</p><a className="button ember" href="mailto:hello@homesaunaguide.com?subject=Home%20Sauna%20Guide%20inquiry">Write an email →</a></div>
        <div className="contact-aside"><h2>We can help with</h2><ul><li>Factual corrections and broken links</li><li>Primary manuals or certification updates</li><li>Product and specification updates</li><li>Editorial and licensing inquiries</li></ul><p>We cannot approve a specific installation, diagnose symptoms, or replace a licensed contractor, authority having jurisdiction, or clinician.</p></div>
      </div></section>
    </>
  );
}
