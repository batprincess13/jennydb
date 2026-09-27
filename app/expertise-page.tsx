import Link from "next/link";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: Array<{ title: string; text: string }>;
};

type ExpertisePageProps = {
  eyebrow: string;
  title: string;
  deck: string;
  path: string;
  schemaType?: "Article" | "Service";
  sections: Section[];
  calloutTitle: string;
  calloutText: string;
  about?: string[];
  sourceLinks?: Array<{ title: string; url: string; note: string }>;
};

export function ExpertisePage({
  eyebrow,
  title,
  deck,
  path,
  schemaType = "Article",
  sections,
  calloutTitle,
  calloutText,
  about = [],
  sourceLinks = [],
}: ExpertisePageProps) {
  const url = `https://jennydb.shopandhire.net${path}`;
  const schema = schemaType === "Service"
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name: title,
        description: deck,
        url,
        provider: {
          "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Founders, CEOs, and business leaders of growing service-based and people-intensive businesses",
        },
        serviceType: eyebrow,
        isPartOf: {
          "@id": "https://jennydb.shopandhire.net/#website",
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description: deck,
        datePublished: "2026-09-14",
        dateModified: "2026-09-15",
        author: {
          "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
        },
        publisher: {
          "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
        },
        mainEntityOfPage: url,
        isPartOf: {
          "@id": "https://jennydb.shopandhire.net/#website",
        },
        about: about.map((name) => ({ "@type": "Thing", name })),
        citation: sourceLinks.map(({ title, url }) => ({
          "@type": "Article",
          name: title,
          url,
          author: {
            "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
          },
        })),
        inLanguage: "en",
      };

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <header className="article-header">
        <Link className="wordmark" href="/" aria-label="Jenny Delumen-Buenaobra, home">
          <span>Jenny</span>
          <span>Delumen-Buenaobra</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/case-studies">Case Studies</Link>
        </nav>
        <Link className="header-cta" href="/#contact">Request a fit call</Link>
      </header>

      <article>
        <div className="article-hero">
          <p className="eyebrow">Jenny Delumen-Buenaobra · {eyebrow}</p>
          <h1>{title}</h1>
          <p className="article-deck">{deck}</p>
          <p className="article-byline">
            {schemaType === "Article"
              ? "Practical guide by Jenny Delumen-Buenaobra · Reviewed September 15, 2026"
              : "Service overview · Jenny Delumen-Buenaobra, Operations & Execution Leader"}
          </p>
        </div>

        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
            )}
            {section.numbered && (
              <ol>
                {section.numbered.map((item) => (
                  <li key={item.title}><strong>{item.title}</strong> {item.text}</li>
                ))}
              </ol>
            )}
          </section>
        ))}

        {sourceLinks.length > 0 && (
          <section className="article-sources" aria-labelledby="published-thinking-heading">
            <p className="eyebrow">Published thinking behind the framework</p>
            <h2 id="published-thinking-heading">Related articles by Jenny Delumen-Buenaobra</h2>
            <ul>
              {sourceLinks.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a>
                  <span>{source.note}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <aside className="article-callout">
          <p className="eyebrow">Discuss the operational need</p>
          <h2>{calloutTitle}</h2>
          <p>{calloutText}</p>
          <Link className="button button-primary" href="/#contact">Request a fit call ↗</Link>
        </aside>

        <nav className="related-links" aria-label="Related expertise">
          <p className="eyebrow">Related expertise</p>
          <Link href="/operating-principles">Operating principles ↗</Link>
          <Link href="/fractional-operations-leadership">Fractional operations leadership ↗</Link>
          <Link href="/operations-systems-process-improvement">Operations systems and process improvement ↗</Link>
          <Link href="/delegation-systems">Delegation systems ↗</Link>
          <Link href="/ai-enabled-operations">AI-enabled operations ↗</Link>
          <Link href="/case-studies">Case studies ↗</Link>
        </nav>
      </article>

      <footer>
        <p>Jenny Delumen-Buenaobra</p>
        <p>Operations &amp; Execution Leader · AI Enthusiast</p>
        <Link className="text-link" href="/">Return to the main site ↗</Link>
      </footer>
    </main>
  );
}
