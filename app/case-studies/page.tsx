import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies in operating structure, service delivery, multi-site implementation, sales enablement, and applied AI systems.",
  alternates: {
    canonical: "https://jennydb.shopandhire.net/case-studies",
  },
  openGraph: {
    type: "website",
    url: "https://jennydb.shopandhire.net/case-studies",
    title: "Case Studies | Jenny Delumen-Buenaobra",
    description:
      "Operational case studies showing how stronger structure, cross-functional execution, team enablement, and applied AI addressed real operating needs.",
    images: ["/images/case-studies-operations-hero.png"],
  },
};

const caseStudies = [
  {
    number: "01",
    category: "Operating structure · Team enablement",
    title: "Building an accountable operating team",
    problem:
      "The business had no clear operating structure. Routine execution depended heavily on CEO direction, team members worked as followers rather than accountable owners, and standards for hiring, training, performance, scheduling, capacity, and recurring work were inconsistent.",
    changed:
      "The operation was rebuilt around hiring and performance standards, role-specific training, working tools, client-communication scripts, SOPs, schedules, capacity planning, ownership and escalation paths, reporting, and shared knowledge. The team gained both the practical tools and the authority needed to carry work forward.",
    result:
      "The business moved from CEO-directed execution toward a more capable and accountable operating team. Frontline capacity increased by approximately 200%, client reach expanded rapidly, and the operating structure supported 130% cumulative revenue growth from 2023 through 2025.",
    metrics: [
      { value: "+200%", label: "Frontline capacity" },
      { value: "+130%", label: "Cumulative revenue growth" },
    ],
    lesson:
      "Sustainable growth requires clear standards, usable tools, appropriate authority, and accountability across the team.",
  },
  {
    number: "02",
    category: "Sales enablement · Recurring revenue",
    title: "Enabling agent-led sales and recurring-revenue growth",
    problem:
      "The CEO handled nearly every sales call and directed what team members should say. Sales knowledge and decision-making were concentrated with one person, limiting the team's ability to convert opportunities independently.",
    changed:
      "A structured sales process equipped agents to qualify prospects, conduct discovery, route offers, handle objections, and define the next action. In 2024, an AI-enabled Sales GPT added live access to approved scripts and decision guidance while maintaining clear legal, pricing, service, and compliance boundaries.",
    result:
      "New subscriptions increased 142%, subscription-related revenue increased 104%, and total company revenue increased 48% in 2024. The Sales GPT operated as part of the broader sales-enablement system that supported these results.",
    metrics: [
      { value: "+142%", label: "New subscriptions" },
      { value: "+104%", label: "Subscription-related revenue" },
      { value: "+48%", label: "Total company revenue" },
    ],
    lesson:
      "AI can strengthen revenue execution when it gives trained employees timely access to approved knowledge, decision guidance, and a consistent sales process.",
  },
  {
    number: "03",
    category: "AI-enabled operations · Professional services",
    title: "Reducing legal-support turnaround and attorney hours",
    problem:
      "Legal-support work required substantial attorney coordination to structure issues, prepare documents, assess contract risks, develop client communications, and align matters with appropriate legal resources. Completing that cycle could take several days or weeks, and attorney hours affected client billing.",
    changed:
      "The legal assistant was designed and operationalized around defined use cases, workflow, output standards, governance, and integration. It supports issue framing, document generation, contract and commercial-risk visibility, client communications, pricing inputs, and resource alignment while retaining attorney review and human judgment.",
    result:
      "Attorney-coordination turnaround decreased from several days or weeks to approximately one day. The system reduced the attorney hours required for supported work, allowing the business to offer lower client billing while retaining attorney review. It also improved consistency and made legal-support work easier to scale.",
    metrics: [
      { value: "≈1 day", label: "Attorney-coordination turnaround" },
      { value: "Lower", label: "Attorney hours and client billing" },
    ],
    lesson:
      "A controlled AI workflow can improve turnaround, reduce the cost to serve, support more accessible pricing, and increase delivery capacity while preserving professional oversight.",
  },
  {
    number: "04",
    category: "Service delivery · Operational scaling",
    title: "Building the operating structure for a new enterprise account",
    problem:
      "A new account for a Fortune 500 client had to be launched within a large BPO organization. Training, Quality, Reporting, Capacity Planning, and Operations each had established responsibilities, but allowing the functions to develop their plans separately would have created gaps between staffing, readiness, performance expectations, and day-to-day execution.",
    changed:
      "Operations worked directly across the support functions from the beginning. Training plans, quality processes, reporting requirements, utilization controls, staffing and capacity plans, and implementation timelines were developed as one operating system. The resulting plans and processes became the foundation used by the account and its supporting departments.",
    result:
      "The account exceeded client performance expectations quarter after quarter, earned client performance bonuses, and exceeded margin targets through disciplined utilization and capacity planning. Reports remained decision-ready, operating plans were executed on schedule, additional volume and business followed, and the account's initial headcount doubled. A later assignment involved leading another account new to the site, with responsibility eventually expanding across 20 teams.",
    metrics: [
      { value: "+100%", label: "Initial account headcount" },
      { value: "QoQ", label: "Performance above expectations" },
      { value: "20 teams", label: "Later account leadership scope" },
    ],
    lesson:
      "A strong launch depends on integrating operations, training, quality, reporting, and capacity planning around one execution model from the start.",
  },
  {
    number: "05",
    category: "Process improvement · Multi-site implementation",
    title: "Implementing a new technical-support process across four sites",
    problem:
      "A global technology company introduced a new troubleshooting and decision-making procedure for its technical-support operation. The procedure had to be implemented consistently across four delivery sites, with technical leads prepared to guide frontline teams and maintain the required standards after rollout.",
    changed:
      "The implementation was managed as a coordinated cross-site operating change. Technical leads were trained and equipped to apply the procedure, onsite sessions were conducted across the participating locations, and weekly cross-site meetings were used to review execution, address implementation gaps, and maintain alignment. Adoption was checked beyond the initial training so the process became part of regular technical-support execution.",
    result:
      "The troubleshooting and decision-making procedure was implemented across all four sites and delivered the performance improvement the client had established for the initiative.",
    metrics: [
      { value: "4 sites", label: "Coordinated implementation" },
      { value: "Achieved", label: "Client-defined performance gain" },
    ],
    lesson:
      "Multi-site change succeeds when training, local ownership, execution checks, and ongoing coordination are managed as one implementation system.",
  },
  {
    number: "06",
    category: "AI system design · Knowledge work",
    title: "Designing a governed prompt-building system",
    problem:
      "Prompt-building tools often transfer the technical work back to the user by requiring them to define prompt architecture, frameworks, system roles, and evaluation logic. That creates friction and still leaves important objectives, constraints, sources, and success criteria unresolved.",
    changed:
      "Smart Prompt Builder was designed to accept natural-language goals, existing prompts, failed outputs, examples, and source material. Its interaction protocol detects whether the task requires building, debugging, reverse engineering, or execution; extracts known information before asking questions; separates instructions from source content; handles corrections; and asks only for user-held information that materially affects the result.",
    result:
      "The completed operating and interaction framework established a consistent method for translating ordinary user input into structured downstream instructions. It also defined execution boundaries, risk-sensitive clarification rules, and stopping conditions intended to improve expected-outcome accuracy without unnecessary intake.",
    metrics: [],
    lesson:
      "Useful AI systems reduce the expertise demanded from the user while making objectives, constraints, sources, and execution boundaries more explicit inside the system.",
  },
  {
    number: "07",
    category: "AI workflow design · Application development",
    title: "Using a domain-specific GPT to frame an application's operating model",
    problem:
      "An application concept for cosmetic skin analysis needed more than an interface idea. The underlying workflow had to define required inputs, image-quality checks, cosmetic assessment boundaries, climate and product-availability considerations, safety controls, recommendation logic, and a consistent report structure before application development could be properly framed.",
    changed:
      "A Skin Care GPT was developed as the initial operating framework. Its rules covered input validation, image assessment, climate classification, cosmetic skin evaluation, scoring, routine generation, ingredient-safety checks, product guidance, progress tracking, and mandatory non-medical boundaries. The workflow also defined how recommendations should remain consistent across the profile, scores, goals, routine, and final report.",
    result:
      "The GPT became the initial functional blueprint for app development, turning a broad product idea into a structured workflow with defined inputs, decision rules, outputs, and safety constraints.",
    metrics: [],
    lesson:
      "A domain-specific GPT can be used as an operational prototype to define and test an application's logic before interface and engineering decisions are finalized.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://jennydb.shopandhire.net/case-studies#collection",
  name: "Case Studies",
  description:
    "Operational case studies in team accountability, service delivery, multi-site implementation, sales enablement, and AI-enabled workflows.",
  url: "https://jennydb.shopandhire.net/case-studies",
  isPartOf: { "@id": "https://jennydb.shopandhire.net/#website" },
  author: { "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra" },
  inLanguage: "en",
};

export default function CaseStudies() {
  return (
    <main className="case-studies-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="article-header">
        <Link className="wordmark" href="/" aria-label="Jenny Delumen-Buenaobra, home">
          <span>Jenny</span>
          <span>Delumen-Buenaobra</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/case-studies" aria-current="page">Case Studies</Link>
        </nav>
        <Link className="header-cta" href="/#contact">Request a fit call</Link>
      </header>

      <section className="case-hero">
        <div className="case-hero-copy">
          <p className="eyebrow">Operational change in practice</p>
          <h1>Case Studies</h1>
          <p>
            These cases show how operating structure, cross-functional execution,
            process implementation, team enablement, and applied AI were used to
            address recurring business and delivery problems.
          </p>
        </div>
        <div className="case-hero-image">
          <Image
            src="/images/case-studies-operations-hero.png"
            alt="An operations team moving work through a connected system of people, decisions, and tools"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
      </section>

      <section className="case-list" aria-label="Operations case studies">
        {caseStudies.map((study) => (
          <article className="case-study" key={study.number}>
            <header className="case-study-heading">
              <span>{study.number}</span>
              <div>
                <p className="case-category">{study.category}</p>
                <h2>{study.title}</h2>
              </div>
            </header>

            <div className="case-narrative">
              <section>
                <h3>Problem</h3>
                <p>{study.problem}</p>
              </section>
              <section>
                <h3>What changed</h3>
                <p>{study.changed}</p>
              </section>
              <section>
                <h3>Result</h3>
                <p>{study.result}</p>
              </section>
            </div>

            {study.metrics.length > 0 && (
              <div className={`case-metrics case-metrics-${study.metrics.length}`} aria-label="Key results">
                {study.metrics.map((metric) => (
                  <div className="case-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            <aside className="case-lesson">
              <p className="eyebrow">What this demonstrates</p>
              <p>{study.lesson}</p>
            </aside>
          </article>
        ))}
      </section>

      <section className="case-contact">
        <p className="eyebrow">Discuss the operational need</p>
        <h2>Build the structure the next stage requires.</h2>
        <p>
          Bring the problem, the work that keeps returning, or the workflow that
          is no longer keeping pace. The starting point is the operating need.
        </p>
        <Link className="button button-primary" href="/#contact">Request a fit call ↗</Link>
      </section>

      <footer>
        <p>Jenny Delumen-Buenaobra</p>
        <p>Operations &amp; Execution Leader · AI Enthusiast</p>
        <Link className="text-link" href="/">Return to the main site ↗</Link>
      </footer>
    </main>
  );
}
