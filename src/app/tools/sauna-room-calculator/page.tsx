import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SaunaCalculator } from "@/components/sauna-calculator";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sauna Room Volume Calculator",
  description: "Calculate finished sauna room volume in cubic feet and cubic meters, then use the exact heater manual to account for glass and masonry.",
  alternates: { canonical: "/tools/sauna-room-calculator" },
};

export default function CalculatorPage() {
  const schema = { "@context": "https://schema.org", "@type": "WebApplication", name: "Sauna Room Volume Calculator", url: `${SITE.url}/tools/sauna-room-calculator`, applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return (
    <>
      <JsonLd data={schema} />
      <header className="page-hero calculator-hero"><div className="shell narrow-hero"><Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Tools" }, { name: "Sauna room calculator" }]} /><span className="kicker light">Measure twice, shortlist once</span><h1>Sauna room volume calculator.</h1><p>Calculate the finished air volume of a rectangular sauna. Then add every manufacturer-specified heat penalty and use the current heater manual—not a generic web ratio—to make the final selection.</p></div></header>
      <section className="section calculator-section"><div className="shell calculator-layout"><div><SaunaCalculator /><p className="calculator-caveat"><strong>Planning tool, not an equipment specification.</strong> Vaults, recesses, glass, masonry, logs, climate, insulation, stone height, bench layout, and model design can change the answer. Your current manual, installer, and local authority control.</p></div><aside className="calculator-guide"><span className="kicker">Use the number well</span><ol><li><span>01</span><p>Measure the <strong>finished interior</strong>, not framing dimensions.</p></li><li><span>02</span><p>Record glass, tile, stone, concrete, logs, and every other uninsulated surface.</p></li><li><span>03</span><p>Open the manuals for two or three listed heaters and apply each maker’s exact adjustment.</p></li><li><span>04</span><p>Compare stone capacity, stone height, airflow, clearances, sensor position, ventilation type, electrical or chimney scope, and service access.</p></li></ol><Link className="button pine" href="/guides/heaters">Read the heater guide →</Link></aside></div></section>
    </>
  );
}
