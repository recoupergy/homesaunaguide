import Link from "next/link";
import { SAUNA_STANDARD } from "@/lib/editorial";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-standard">
        <div><span>Our sauna standard</span><strong>Design from the bather outward.</strong></div>
        <dl>{SAUNA_STANDARD.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
        <Link href="/point-of-view">See the full standard →</Link>
      </div>
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true"><span>H</span></span>
            <span className="brand-type">Home Sauna <em>Guide</em></span>
          </Link>
          <p>Bather-first sauna planning, building, heater, ventilation, and bathing guidance with current sources and honest tradeoffs.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/guides/planning">Plan a sauna</Link>
          <Link href="/guides/building">Build well</Link>
          <Link href="/guides/heaters">Choose a heater</Link>
          <Link href="/guides/health">Health evidence</Link>
          <Link href="/point-of-view">Our point of view</Link>
          <Link href="/blog">Sauna articles</Link>
        </div>
        <div>
          <h2>Trust</h2>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/sources">Primary sources</Link>
          <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Home Sauna Guide</span>
        <span>Verify current manuals, listings, permits, and local code before building.</span>
      </div>
    </footer>
  );
}
