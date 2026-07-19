import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site";
import { TOPICS } from "@/lib/topics";

const questions = Object.values(TOPICS).flatMap(
  (topic) => topic.faqs as readonly (readonly [string, string])[],
);

export const metadata: Metadata = {
  title: "Home Sauna Questions, Answered",
  description: "Direct answers to common questions about sauna planning, construction, heaters, health, and bathing.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })), url: `${SITE.url}/faq` };
  return (
    <>
      <JsonLd data={schema} />
      <header className="page-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} /><span className="kicker light">Direct answers, useful caveats</span><h1>Home sauna questions.</h1><p>Start with the short answer. Follow the linked guide when the decision depends on room, model, jurisdiction, or health history.</p></div></header>
      <section className="section faq-page"><div className="shell faq-list">{Object.entries(TOPICS).map(([key, topic]) => <section key={key}><span className="kicker">{topic.eyebrow}</span><h2>{topic.title.replace(/^How to /, "")}</h2>{topic.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}<Link className="text-link" href={`/guides/${key}`}>Read the full guide →</Link></section>)}</div></section>
    </>
  );
}
