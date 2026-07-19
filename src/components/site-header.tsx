import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href="/" aria-label="Home Sauna Guide home">
          <span className="brand-mark" aria-hidden="true"><span>H</span></span>
          <span className="brand-type">Home Sauna <em>Guide</em></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/guides">Guides</Link>
          <Link href="/point-of-view">Our take</Link>
          <Link href="/blog">Articles</Link>
          <Link href="/tools/sauna-room-calculator">Room calculator</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link className="header-cta" href="/guides/planning">Start planning <span aria-hidden="true">→</span></Link>
      </div>
    </header>
  );
}
