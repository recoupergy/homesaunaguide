import Link from "next/link";
import { AFFILIATE_PICKS } from "@/lib/affiliate";

export function AffiliatePicks() {
  return (
    <section className="affiliate-picks" aria-labelledby="affiliate-picks-heading">
      <span className="kicker">Useful, not essential</span>
      <h2 id="affiliate-picks-heading">A few accessories worth considering.</h2>
      <p className="affiliate-intro">A good room and a good session need very little equipment. These are the four extras we find genuinely practical; the links open current Amazon search results so you can compare materials and reviews instead of being pushed toward one stale model.</p>
      <div className="affiliate-grid">
        {AFFILIATE_PICKS.map((product, index) => (
          <article key={product.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{product.name}</h3>
            <p>{product.note}</p>
            <a href={product.href} rel="sponsored nofollow noopener" target="_blank">Compare on Amazon <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
      <p className="affiliate-disclosure">As an Amazon Associate I earn from qualifying purchases. Buying through these links may support the site at no added cost to you. <Link href="/affiliate-disclosure">Read the full disclosure.</Link></p>
    </section>
  );
}
