import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { AnswerBox } from "@/components/answer-box";
import { TopicCard } from "@/components/topic-card";
import { getPostByPath, recoverySummary } from "@/lib/content";
import { EDITORIAL_POSITIONS } from "@/lib/editorial";

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
          <span className="kicker light">Traditional sauna knowledge · Est. 2019</span>
          <h1>Build the sauna<br />you will actually use.</h1>
          <p>We favor real löyly, useful bench geometry, durable wood, proven heaters, clean air, and fewer gimmicks. Start with the bathing experience. Then build the room around it.</p>
          <div className="hero-actions">
            <Link className="button ember" href="/guides/planning">Plan your sauna <span aria-hidden="true">→</span></Link>
            <Link className="text-link light" href="/guides">Explore every guide <span aria-hidden="true">↗</span></Link>
          </div>
          <dl className="hero-proof">
            <div><dt>{recoverySummary.publishedContentCount}</dt><dd>original pages preserved</dd></div>
            <div><dt>5</dt><dd>practical decision guides</dd></div>
            <div><dt>0</dt><dd>miracle claims required</dd></div>
          </dl>
        </div>
      </section>

      <section className="decision-section section">
        <div className="shell">
          <div className="section-intro split-heading">
            <div><span className="kicker">The order matters</span><h2>Plan the experience.<br />Then plan the room.</h2></div>
            <AnswerBox>
              A sauna is a room of hot air, hot stones, water, and people. Decide where bathers sit and how löyly moves before choosing finishes, accessories, or a heater from a product photo.
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

      <section className="section home-position-section">
        <div className="shell">
          <div className="section-title-row">
            <div><span className="kicker">Recommendations with a backbone</span><h2>We have a point of view.</h2></div>
            <Link className="text-link" href="/point-of-view">Read all six positions →</Link>
          </div>
          <div className="home-position-grid">
            {EDITORIAL_POSITIONS.slice(0, 3).map((position) => (
              <article key={position.number}>
                <span>{position.number}</span>
                <h3>{position.title}</h3>
                <p>{position.body}</p>
                <Link href={position.href}>{position.linkLabel} →</Link>
              </article>
            ))}
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
            <h2>A sauna is a system, not a hot box.</h2>
            <p className="lead">Heat, air, water, people, and the building envelope all interact. The most expensive mistakes happen when one is designed in isolation.</p>
            <ol className="number-list">
              <li><span>01</span><div><strong>Löyly before lifestyle extras</strong><p>Heat, humidity, seating, and rhythm establish the brief.</p></div></li>
              <li><span>02</span><div><strong>People before heater</strong><p>Bench and ceiling geometry place bathers in the hot zone.</p></div></li>
              <li><span>03</span><div><strong>Real load before kilowatts</strong><p>Finished volume, glass, masonry, climate, and construction drive equipment choice.</p></div></li>
              <li><span>04</span><div><strong>Manual before rule of thumb</strong><p>Exact clearances, sensors, controls, and ventilation win.</p></div></li>
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
            <span className="kicker light">Opinion, with receipts</span>
            <h2>We show our work and our tradeoffs.</h2>
            <p>Sauna advice crosses construction, electrical work, fire safety, product service, and health. We say what we prefer, explain why it fits, link to primary manuals and credible health sources, and flag what still needs professional judgment.</p>
          </div>
          <div className="trust-links">
            <Link href="/point-of-view"><span>01</span><strong>Our point of view</strong><em>What we promote and what we reject</em></Link>
            <Link href="/editorial-policy"><span>02</span><strong>Editorial policy</strong><em>How we research and update</em></Link>
            <Link href="/sources"><span>03</span><strong>Primary sources</strong><em>Manuals, certification, health evidence</em></Link>
          </div>
        </div>
      </section>
    </>
  );
}
