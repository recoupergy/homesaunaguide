import Link from "next/link";
import { formatDate, readingTime, type LegacyPost } from "@/lib/content";

export function ArticleCard({ post, compact = false }: { post: LegacyPost; compact?: boolean }) {
  return (
    <article className={`article-card${compact ? " compact" : ""}`}>
      <div className="card-meta">
        <span>{post.categories[0]?.name ?? "Sauna guide"}</span>
        <span>{readingTime(post.wordCount)}</span>
      </div>
      <h3><Link href={post.path}>{post.title}</Link></h3>
      {!compact && <p>{post.excerpt || post.description}</p>}
      <div className="card-foot">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <Link aria-label={`Read ${post.title}`} href={post.path}>Read <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
