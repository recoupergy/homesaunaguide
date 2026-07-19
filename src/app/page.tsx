import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { AnswerBox } from "@/components/answer-box";
import { TopicCard } from "@/components/topic-card";
import { getPostByPath, recoverySummary } from "@/lib/content";

const featuredPaths = [
  "/barrel-sauna",
  "/how-to-build-a-diy-barrel-sauna-from-scratch",
  "/best-wood-sauna-stoves",
  "/how-long-should-you-stay-in-a-sauna",
  "/sauna-vs-steam-room-whats-the-difference",
  "/sauna-vapor-barrier-science",
];

export default function Home() {
  const featured = featuredPaths.map(getPostByPath).filter((post) => post !== undefined);

  return (
    <>
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/sauna-ritual.jpg"
          alt="A bather in a wool sauna hat outside a traditional woodland sauna"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <span className="kicker light">Independent sauna knowledge · Est. 2019</span>
          <h1>Better heat starts<br />with a better plan.</h1>
          <p>Clear, source-led guidance for planning, building, choosing, and using a home sauna—without the folklore masquerading as fact.</p>
          <div className="hero-actions">
            <Link className="button ember" href="/guides/planning">Plan your sauna <span aria-hidden="true">→</span></Link>
            <Link className="text-link light" href="/guides">Explore every guide <span aria-hidden="true">↗</span></Link>
          </div>
          <dl className="hero-proof">
            <div><dt>{recoverySummary.publishedContentCount}</dt><dd>original pages preserved</dd></div>
            <div><dt>6</dt><dd>practical decision guides</dd></div>
            <div><dt>2026</dt><dd>sources and standards checked</dd></div>
          </dl>
        </div>
      </section>

      <section className="decision-section section">
        <div className="shell">
          <div className="section-intro split-heading">
            <div><span className="kicker">A calm way through the decisions</span><h2>Plan the experience.<br />Then plan the room.</h2></div>
            <AnswerBox>
              The right home sauna depends on intended use, finished room volume, heat source, ventilation, and safe clearances. Decide those first; finishes come later.
            </AnswerBox>
          </div>
          <div className="topic-grid">
            <TopicCard topic="planning" number="01" />
            <TopicCard topic="building" number="02" />
            <TopicCard topic="heaters" number="03" />
            <TopicCard topic="health" number="04" />
            <TopicCard topic="rituals" number="05" />
          </div>
        </div>
      </section>

      <section className="field-note-section section">
        <div className="shell field-note-grid">
          <div className="field-image-wrap">
            <Image src="/images/sauna-wood.jpg" alt="Fresh green towels inside a wood-lined sauna" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span className="image-caption">From the original Home Sauna Guide photo archive</span>
          </div>
          <div className="field-copy">
            <span className="kicker">The 2026 planning brief</span>
            <h2>A sauna is a system, not a box with a heater.</h2>
            <p className="lead">Heat, air, water, people, and the building envelope all interact. The most expensive mistakes happen when one is designed in isolation.</p>
            <ol className="number-list">
              <li><span>01</span><div><strong>Use before size</strong><p>Capacity and bathing style establish the brief.</p></div></li>
              <li><span>02</span><div><strong>Volume before heater</strong><p>Finished room geometry drives equipment choice.</p></div></li>
              <li><span>03</span><div><strong>Air before finishes</strong><p>Ventilation and drying shape comfort and durability.</p></div></li>
              <li><span>04</span><div><strong>Manual before rule of thumb</strong><p>Model-specific clearances and sensor placement win.</p></div></li>
            </ol>
            <Link className="button pine" href="/guides/planning">Read the planning guide <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="popular-section section">
        <div className="shell">
          <div className="section-title-row">
            <div><span className="kicker">Deep from the archive</span><h2>Guides readers return to.</h2></div>
            <Link className="text-link" href="/blog">Browse the full archive <span aria-hidden="true">→</span></Link>
          </div>
          <div className="article-grid">
            {featured.map((post) => <ArticleCard key={post.path} post={post} />)}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="shell trust-grid">
          <div>
            <span className="kicker light">Useful over viral</span>
            <h2>We show our work.</h2>
            <p>Sauna advice crosses construction, electrical work, fire safety, and health. We separate current guidance from historical material, link to primary manuals and credible health sources, and flag what needs professional judgment.</p>
          </div>
          <div className="trust-links">
            <Link href="/editorial-policy"><span>01</span><strong>Editorial policy</strong><em>How we research and update</em></Link>
            <Link href="/sources"><span>02</span><strong>Primary sources</strong><em>Manuals, certification, health evidence</em></Link>
            <Link href="/affiliate-disclosure"><span>03</span><strong>Commercial transparency</strong><em>How recommendations are funded</em></Link>
          </div>
        </div>
      </section>
    </>
  );
}
