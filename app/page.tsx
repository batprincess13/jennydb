"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Operations diagnostic",
    text: "A focused review of how work moves across the business and reaches the customer, including where ownership, decision rights, handoffs, coordination, or execution are unclear or concentrated in too few people.",
    outcome: "You leave with clear priorities and a practical action plan.",
    href: "/operating-principles",
  },
  {
    number: "02",
    title: "Operations buildout",
    text: "Design or repair the operating structure behind delivery: workflows, roles, delegation, SOPs, service standards, escalation paths, quality controls, knowledge systems, execution tracking, and management routines.",
    outcome: "Your team knows what to do, who owns it, and what good looks like.",
    href: "/operations-systems-process-improvement",
  },
  {
    number: "03",
    title: "Delegation & team readiness",
    text: "For founders and business leaders preparing to delegate recurring work, add support, launch a new service, strengthen managers, or turn individual delivery into a dependable team operation.",
    outcome: "The right work moves to the right people with clear expectations, ownership, and oversight.",
    href: "/delegation-systems",
  },
  {
    number: "04",
    title: "Fractional operations leadership",
    text: "Ongoing, remote operational leadership for founders who need someone to translate priorities into coordinated execution, strengthen managers, and hold operating work together without creating a full-time executive role before the business is ready.",
    outcome: "The business gains senior operational capacity without one leader remaining the default owner of every initiative.",
    href: "/fractional-operations-leadership",
  },
];

const scenarios = [
  {
    number: "01",
    short: "Direction",
    title: "How do we turn the vision into something the business can execute?",
    symptoms:
      "The direction feels clear to leadership, but the team receives it in fragments. Priorities shift, initiatives stall, and progress still depends on repeated explanation.",
    possibilities:
      "The vision may need to be translated into clearer decisions, operating requirements, priorities, ownership, resources, and a practical sequence of execution.",
    contribution:
      "From the diagnostic, I develop a phased operating plan, secure alignment across leadership and delivery teams, and establish the governance and management cadence required to sustain coordinated execution as conditions evolve.",
    image: "/images/vision-execution.webp",
  },
  {
    number: "02",
    short: "Capacity",
    title: "Do we need to hire, or change how work moves?",
    symptoms:
      "Customers are waiting longer. Deadlines are slipping. Overtime is becoming normal. The team feels overloaded, but it is difficult to see where the capacity is going.",
    possibilities:
      "More headcount may be the answer. The pressure could also come from uneven workloads, changing demand, absences, repeated work, unclear priorities, inefficient handoffs, or tools slowing people down.",
    contribution:
      "With the binding constraint established, I define the required operating response and lead implementation. The response may encompass work redesign, resource reallocation, capability development, specialist support, AI-enabled augmentation, automation, or targeted workforce planning.",
    image: "/images/capacity-hiring.webp",
  },
  {
    number: "03",
    short: "Decisions",
    title: "Why do so many decisions still land with you?",
    symptoms:
      "Approvals, exceptions, and routine questions keep landing with you or one key leader. The team waits, work slows, and time intended for customers, strategy, and growth is consumed by daily decisions.",
    possibilities:
      "The pressure may involve decision boundaries, access to information, team capability, confidence, escalation paths, or controls that have not evolved with the business.",
    contribution:
      "I establish decision governance by assigning decision rights and accountable owners, setting operating guardrails, and defining how concerns and exceptions move through the organization for resolution at the appropriate level. Targeted coaching equips managers to exercise authority within those parameters.",
    image: "/images/founder-approval.webp",
  },
  {
    number: "04",
    short: "Consistency",
    title: "We have good people. Why does the customer experience still vary?",
    symptoms:
      "Service quality changes depending on who handles the work. Customers receive different answers, follow-up, or resolutions, while strong performers absorb exceptions and managers repeatedly step in.",
    possibilities:
      "The gap may involve role clarity, service standards, coaching, manager capability, training, handoffs, quality controls, tools, performance systems, or culture.",
    contribution:
      "To stabilize service delivery, I determine the required combination of workflow redesign, service standards, training, fit-for-purpose tools, quality controls, specialist support, and AI-enabled guidance or automation, then lead implementation through adoption, performance validation, and operational stabilization.",
    image: "/images/process-consistency.webp",
  },
  {
    number: "05",
    short: "Profit",
    title: "We’re busy. Where is the profit?",
    symptoms:
      "Revenue is coming in, but cash remains tight. Payroll decisions feel risky, projects consume more time than expected, and growing activity is not creating equal financial confidence.",
    possibilities:
      "Pricing may be part of it. So might scope creep, rework, low utilization, delayed billing, inefficient delivery, staffing costs, or an unhealthy mix of work.",
    contribution:
      "An operational performance review produces a prioritized improvement program across workflow design, resource deployment, delivery controls, and management practices. I lead execution against the agreed priorities to strengthen margin performance and cash-flow predictability.",
    image: "/images/profit-visibility.webp",
  },
];

const testimonials = [
  {
    quote:
      "Jenny brings a rare combination of deep technical knowledge, strong analytical thinking, and exceptional leadership capability. She has an impressive ability to quickly understand complex challenges, apply structured problem-solving, and translate insights into clear, strategic actions.",
    name: "Jigger James Macatangay",
    title: "Operations Director · DAP Brands (Tax Maverick)",
    context: "Former direct report",
  },
  {
    quote:
      "She is a transformational leader who helped me build my career and develop my skills. She is a patient and supportive mentor who is always willing to help her team members grow and learn. She is results-oriented and always setting high standards for herself and her team.",
    name: "Dax Bermejo",
    title: "COPC Implementation Leader · Air Niugini",
    context: "Former direct report",
  },
  {
    quote:
      "Jenny is exceptional in analytical skills, strategic thinking, and effective decision-making. Would always consider working with her again!",
    name: "Joy Gozon",
    title: "Senior Director · Soding Brothers Solutions",
    context: "Former direct manager",
  },
  {
    quote:
      "Solid on execution, leadership with grit and passion for people. Always striving for excellence. What an honor to have worked with Jenny.",
    name: "Claire Sommereux-Alfonso",
    title: "Global Vice President for Client Success · Concentrix",
    context: "Former senior colleague",
  },
  {
    quote:
      "Jenny has been one of my best mentors while working at Convergys. As an Operations Manager, she significantly impacted my career development. Her leadership style is an excellent balance of support and empowerment, and I am grateful for everything she has taught me.",
    name: "Alyanna A.",
    title: "Project Coordinator & Customer Support Professional",
    context: "Former colleague · Convergys",
  },
];

export default function Home() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialTouchStart, setTestimonialTouchStart] = useState<number | null>(null);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

  const changeScenario = (next: number) => {
    setActiveScenario((next + scenarios.length) % scenarios.length);
  };

  const changeTestimonial = (next: number) => {
    setActiveTestimonial((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonialPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rotation = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(rotation);
  }, [testimonialPaused]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jenny Delumen-Buenaobra, home">
          <span>Jenny</span>
          <span>Delumen-Buenaobra</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/case-studies">Case Studies</a>
          <a href="#services">Services</a>
          <a href="#principles">Principles</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Request a fit call</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Jenny Delumen-Buenaobra · Operations &amp; Execution Leader | AI Enthusiast</p>
          <h1><span>Growth needs structure.</span></h1>
          <p className="hero-lede">
            I help founders, CEOs, and business leaders turn business direction
            into coordinated execution through clear priorities, accountable
            ownership, capable teams, scalable workflows, and management
            controls that sustain service quality as the business grows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Discuss an operational need <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#services">
              How I can help <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Operating focus">
          <p className="proof-kicker">Operational focus</p>
          <div className="proof-line"><span>People</span><small>Capable teams</small></div>
          <div className="proof-line"><span>Process</span><small>Scalable systems</small></div>
          <div className="proof-line"><span>Accountability</span><small>Visible ownership</small></div>
          <div className="proof-line accent"><span>AI</span><small>Where useful</small></div>
          <p className="proof-note">
            Technology supports the operation. It does not replace judgment.
          </p>
        </aside>
      </section>

      <section className="fit-section" aria-labelledby="fit-heading">
        <div className="fit-heading">
          <div>
            <p className="eyebrow">Best suited for</p>
            <h2 id="fit-heading">Growing businesses whose operating structure has not kept pace.</h2>
          </div>
          <p>
            This work is best suited to service-based and people-intensive
            businesses that have outgrown ad hoc support and need operational
            work organized, delegated, managed, and made reliable.
          </p>
        </div>

        <div className="fit-grid">
          <article>
            <span>01</span>
            <h3>Growth has added complexity</h3>
            <p>More customers, services, people, or projects have increased the coordination required to keep delivery moving.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Delegation is not holding</h3>
            <p>Work remains difficult to hand off because the process, owner, standard, or expected result is unclear.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Execution keeps returning</h3>
            <p>Projects require repeated follow-up, cross-functional coordination, and leadership decisions before they can move or finish.</p>
          </article>
          <article>
            <span>04</span>
            <h3>The support model is unclear</h3>
            <p>You may be considering a VA, Executive Assistant, operations hire, or additional support without yet having defined what should be delegated or how the work should operate.</p>
          </article>
        </div>

        <aside className="support-distinction">
          <div>
            <p className="eyebrow">When workload points to a larger operating need</p>
            <h3>Adding capacity works best when the work is ready to be delegated.</h3>
          </div>
          <p>
            The visible symptom may be workload. When the underlying issue is
            unclear workflow, ownership, delegation, or accountability, another
            person can inherit the same friction. I structure the work,
            establish ownership, determine the right support model, and build
            the execution controls that allow more to move without repeated
            leadership intervention.
          </p>
        </aside>
      </section>

      <section className="section familiar-section" id="familiar">
        <div className="familiar-intro">
          <p className="eyebrow">Operational needs, recognized</p>
          <h2>Do any of these sound familiar?</h2>
          <p>
            Growth can create execution strain before the underlying operating
            problem is clear. These are common signs that the work, ownership,
            or management structure needs attention.
          </p>
        </div>

        <div className="scenario-tabs" role="tablist" aria-label="Common operational issues">
          {scenarios.map((item, index) => (
            <button
              key={item.number}
              type="button"
              role="tab"
              aria-selected={activeScenario === index}
              aria-controls="active-scenario"
              className={activeScenario === index ? "active" : ""}
              onClick={() => setActiveScenario(index)}
            >
              <span>{item.number}</span>
              {item.short}
            </button>
          ))}
        </div>

        {scenarios.map((scenario, index) => (
          <article
            className="scenario-stage"
            id={index === activeScenario ? "active-scenario" : `scenario-${index + 1}`}
            role="tabpanel"
            aria-live={index === activeScenario ? "polite" : "off"}
            aria-label={`${scenario.short}: ${scenario.title}`}
            hidden={index !== activeScenario}
            tabIndex={index === activeScenario ? 0 : -1}
            key={scenario.number}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") changeScenario(activeScenario - 1);
              if (event.key === "ArrowRight") changeScenario(activeScenario + 1);
            }}
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 45) {
                changeScenario(activeScenario + (distance < 0 ? 1 : -1));
              }
              setTouchStart(null);
            }}
          >
            <img src={scenario.image} alt="" />
            <div className="scenario-shade" />
            <div className="scenario-copy">
              <p className="scenario-number">{scenario.number} / 05</p>
              <h3>{scenario.title}</h3>
              <p>{scenario.symptoms}</p>
              <p className="scenario-possibilities">{scenario.possibilities}</p>
              <p className="scenario-contribution">{scenario.contribution}</p>
            </div>
            <div className="scenario-controls" aria-label="Browse operational issues">
              <button type="button" onClick={() => changeScenario(activeScenario - 1)} aria-label="Previous issue">←</button>
              <button type="button" onClick={() => changeScenario(activeScenario + 1)} aria-label="Next issue">→</button>
            </div>
          </article>
        ))}

        <div className="case-studies-bridge">
          <a className="text-link" href="/case-studies">
            See how these operational problems were addressed <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="diagnostic-bridge">
          <p>The need is visible. The right response may not be.</p>
          <div>
            <span>
              These are the kinds of operational problems I diagnose, structure,
              and help carry through implementation. The work may require clearer
              ownership, redesigned workflows, stronger management practices, a
              different support model, or coordinated execution across several areas.
            </span>
            <a className="text-link" href="#services">
              Find the right starting point <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">How I can help</p>
          <h2>Build what growth requires. Repair what is getting in the way.</h2>
          <p>
            Every engagement begins with the operating need: what is sitting
            with leadership, why execution is breaking down, what structure is
            missing, and how much involvement is required to make the change work.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3><a href={service.href}>{service.title}</a></h3>
              <div>
                <p>{service.text}</p>
                <strong>{service.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
        <aside className="specialist-note">
          <div>
            <p className="eyebrow">Specialist support, when needed</p>
            <h3>The right response does not always sit within one discipline.</h3>
          </div>
          <p>
            When specialist expertise or added capacity forms part of the
            operating solution, I can define the requirement, clarify scope and
            ownership, coordinate independent specialists, and establish the
            onboarding, performance expectations, and controls needed to
            integrate that support into the operation.
          </p>
        </aside>
      </section>

      <section className="visual-section" aria-label="Operations workflow design">
        <img
          src="/images/workflow-operations.png"
          alt="A team organizing an operational workflow around a shared process map"
        />
        <div className="visual-overlay">
          <p className="eyebrow">From activity to operation</p>
          <h2>Good operations make the work visible.</h2>
          <p>
            Roles, handoffs, decisions, standards, and exceptions should not
            remain unclear or concentrated with one leader or a few key people. The work
            becomes easier to delegate and manage when the system can be seen,
            followed, measured, and improved.
          </p>
        </div>
      </section>

      <section className="section principles-section" id="principles">
        <div className="section-heading">
          <p className="eyebrow">Operating principles</p>
          <h2>Make recurring work easier to execute as the business grows.</h2>
          <p>
            Operational leverage comes from designing the work so that people can
            act with the right context, authority, standards, and controls. These
            are the practical definitions I use when diagnosing and building an operation.
          </p>
        </div>
        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Concentrated execution</h3>
            <p>
              Routine execution, decisions, knowledge, or follow-through repeatedly
              return to one leader or a few key people because ownership, authority,
              workflow, or operating conditions are incomplete.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Delegation readiness</h3>
            <p>
              Work is ready to delegate when the outcome, owner, decision boundaries,
              information, standards, review points, and escalation path are clear.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>AI-ready work</h3>
            <p>
              A workflow is ready for AI when the purpose and source context are defined,
              outputs can be validated, and human review and escalation remain explicit.
            </p>
          </article>
        </div>
        <a className="text-link" href="/operating-principles">
          Read the operating principles <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="section ai-section">
        <div className="ai-intro">
          <div>
            <p className="eyebrow">The AI edge</p>
            <h2>Apply AI with operational judgment.</h2>
          </div>
          <blockquote>
            Sometimes the right answer is AI. Sometimes it is a clearer role, a
            simpler process, or a manager making the decision they already own.
          </blockquote>
        </div>
        <div className="ai-copy">
          <p className="ai-framework-kicker">AI with operational judgment</p>
          <ol className="ai-framework">
            <li>
              <span>01</span>
              <div>
                <strong>Diagnose the real problem.</strong>
                <p>Find the root cause and the actual bottleneck before selecting what AI should do.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Define the value.</strong>
                <p>State what should improve for the person doing the work, the customer, or the business.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Decide AI&apos;s role.</strong>
                <p>Choose what to automate, what to augment, what AI should support, and what stays human-led.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <strong>Prepare the operation.</strong>
                <p>Clarify the workflow, ownership, source context, standards, and decision boundaries.</p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <strong>Direct and govern.</strong>
                <p>Set constraints, validation, human review, escalation, and accountable ownership.</p>
              </div>
            </li>
            <li>
              <span>06</span>
              <div>
                <strong>Validate the result.</strong>
                <p>Check whether the bottleneck moved, the outcome improved, and people became more capable.</p>
              </div>
            </li>
          </ol>
          <div className="ai-framework-footer">
            <p className="ai-applications">
              AI should leave people more capable than it found them.
            </p>
            <a className="text-link" href="/ai-enabled-operations">
              Read the AI-enabled operations framework <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section proof-section" id="proof">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>What people say about working with me.</h2>
          <p>
            Perspectives from leaders, colleagues, and team members who have
            worked with me across different stages of my career.
          </p>
        </div>
        <div
          className="testimonial-slider"
          onMouseEnter={() => setTestimonialPaused(true)}
          onMouseLeave={() => setTestimonialPaused(false)}
          onFocusCapture={() => setTestimonialPaused(true)}
          onBlurCapture={() => setTestimonialPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              aria-live={index === activeTestimonial && testimonialPaused ? "polite" : "off"}
              aria-label={`Recommendation from ${testimonial.name}`}
              hidden={index !== activeTestimonial}
              tabIndex={index === activeTestimonial ? 0 : -1}
              key={testimonial.name}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") changeTestimonial(activeTestimonial - 1);
                if (event.key === "ArrowRight") changeTestimonial(activeTestimonial + 1);
              }}
              onTouchStart={(event) => setTestimonialTouchStart(event.touches[0].clientX)}
              onTouchEnd={(event) => {
                if (testimonialTouchStart === null) return;
                const distance = event.changedTouches[0].clientX - testimonialTouchStart;
                if (Math.abs(distance) > 45) {
                  changeTestimonial(activeTestimonial + (distance < 0 ? 1 : -1));
                }
                setTestimonialTouchStart(null);
              }}
            >
              <div className="testimonial-count">
                <span>0{index + 1}</span>
                <span>0{testimonials.length}</span>
              </div>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{testimonial.quote}</blockquote>
              <footer className="testimonial-source">
                <strong>{testimonial.name}</strong>
                <span className="testimonial-title">{testimonial.title}</span>
                <span className="testimonial-context">{testimonial.context}</span>
              </footer>
            </article>
          ))}

          <div className="testimonial-navigation" aria-label="Browse recommendations">
            <div className="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={index === activeTestimonial ? "active" : ""}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show recommendation ${index + 1} from ${item.name}`}
                  aria-current={index === activeTestimonial ? "true" : undefined}
                />
              ))}
            </div>
            <div className="testimonial-arrows">
              <button
                type="button"
                onClick={() => changeTestimonial(activeTestimonial - 1)}
                aria-label="Previous recommendation"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => changeTestimonial(activeTestimonial + 1)}
                aria-label="Next recommendation"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-lead">
          <div>
            <p className="eyebrow">Operational experience</p>
            <h2>More than 20 years spent turning business intent into operational execution.</h2>
          </div>
          <p className="about-intro">
            More than 20 years of operational responsibility span BPO operations,
            outsourced service delivery for global accounts, multi-site process
            improvement, and growth-stage businesses. That breadth shapes how I
            approach both new and established operations: connecting business
            direction with the people, workflows, controls, and management
            practices required for reliable execution, while considering how the
            result affects customers and the business.
          </p>
        </div>

        <div className="experience-list" aria-label="Experience shaping the approach">
          <article className="experience-row">
            <span className="experience-number">01</span>
            <h3>Operations and service delivery</h3>
            <div className="experience-detail">
              <p>BPO operations management · Service delivery for global enterprise accounts</p>
              <p>Customer service · Technical support · Workforce and performance management</p>
            </div>
          </article>
          <article className="experience-row">
            <span className="experience-number">02</span>
            <h3>Process improvement and operational buildout</h3>
            <div className="experience-detail">
              <p>Multi-site process engineering and improvement · Startup operations built from the ground up</p>
              <p>Operating controls · Reporting systems · Capacity planning · Project delivery</p>
            </div>
          </article>
          <article className="experience-row">
            <span className="experience-number">03</span>
            <h3>People leadership and customer experience</h3>
            <div className="experience-detail">
              <p>Remote-team leadership · Manager coaching · Talent development</p>
              <p>Customer experience · Service standards · Quality management · Escalation and issue resolution</p>
            </div>
          </article>
        </div>

        <div className="professional-foundation">
          <div>
            <p className="eyebrow">Professional foundation</p>
            <p>
              Licensed Electronics and Communications Engineer · PMP Training · Lean Six Sigma Foundations ·
              Process Improvement Foundations · Software Project Management Foundations
            </p>
          </div>
          <a
            className="text-link"
            href="https://ph.linkedin.com/in/jennydb"
            target="_blank"
            rel="noreferrer"
          >
            View my LinkedIn profile <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow">Discuss the operational need</p>
          <h2>Bring the operational problem or the work that keeps stalling.</h2>
          <p>
            Share where execution is breaking down, what you are trying to
            delegate, or what the next stage requires, along with a preferred
            time for a 20-minute fit call. I will follow up by email to confirm.
          </p>
          <a
            className="text-link"
            href="https://ph.linkedin.com/in/jennydb"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>

        <form
          className="call-request-form"
          action="https://formsubmit.co/6a656e6e792e64656c756d656e40676d61696c2e636f6d"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New fit call request from the website"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            className="form-honeypot"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            <span>Business or company <small>Optional</small></span>
            <input name="business" type="text" autoComplete="organization" />
          </label>
          <div className="schedule-grid">
            <label>
              <span>Preferred date</span>
              <input name="preferredDate" type="date" required />
            </label>
            <label>
              <span>Preferred time</span>
              <input name="preferredTime" type="time" required />
            </label>
            <label>
              <span>Time zone</span>
              <input
                name="timezone"
                type="text"
                placeholder="e.g. PHT / UTC+8"
                required
              />
            </label>
          </div>
          <label>
            <span>What operational need would be useful to discuss?</span>
            <textarea
              name="context"
              rows={5}
              placeholder="An execution problem, unclear ownership, a workflow bottleneck, a delegation challenge, or an upcoming stage of growth."
              required
            />
          </label>
          <div className="form-submit">
            <button className="button button-primary" type="submit">
              Send call request <span aria-hidden="true">↗</span>
            </button>
            <p>
              Your details will come directly to me. I will reply by email to
              confirm a time.
            </p>
          </div>
        </form>
      </section>

      <footer>
        <p>Jenny Delumen-Buenaobra</p>
        <p>Operations &amp; Execution Leader · AI Enthusiast · Remote engagements</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
