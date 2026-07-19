import Link from "next/link";
import type { TopicKey } from "@/lib/topics";
import { TOPICS } from "@/lib/topics";

export function TopicCard({ topic, number }: { topic: TopicKey; number: string }) {
  const item = TOPICS[topic];
  return (
    <Link className="topic-card" href={`/guides/${topic}`}>
      <span className="topic-number">{number}</span>
      <span className="topic-eyebrow">{item.eyebrow}</span>
      <strong>{item.title}</strong>
      <span>{item.description}</span>
      <em>Explore guide <span aria-hidden="true">→</span></em>
    </Link>
  );
}
