import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="shell"><span className="kicker light">404 · The heat moved</span><h1>This page is not in the recovered archive.</h1><p>Search the original library or start with the current planning guide.</p><div><Link className="button ember" href="/blog">Search the archive →</Link><Link className="text-link light" href="/guides/planning">Start planning →</Link></div></div></section>;
}
