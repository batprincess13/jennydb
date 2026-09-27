import type { Metadata } from "next";
import { ExpertisePage } from "../expertise-page";

export const metadata: Metadata = {
  title: "AI with Operational Judgment Framework",
  description:
    "A six-part framework for diagnosing where AI belongs, choosing automation or augmentation, preserving human judgment, governing risk, and validating operational value.",
  alternates: { canonical: "https://jennydb.shopandhire.net/ai-enabled-operations" },
  openGraph: {
    type: "article",
    url: "https://jennydb.shopandhire.net/ai-enabled-operations",
    title: "AI with Operational Judgment Framework",
    description: "A practical framework for deciding where AI belongs, what should remain human-led, and whether the application creates real operational value.",
  },
};

export default function Page() {
  return <ExpertisePage
    eyebrow="AI-enabled operations"
    title="AI with operational judgment."
    deck="A six-part framework for applying AI to real work without separating the technology from root-cause diagnosis, operational design, human judgment, accountable ownership, and measurable value."
    path="/ai-enabled-operations"
    about={["AI-enabled operations", "Human-in-the-loop workflows", "AI workflow governance", "Operational accountability"]}
    sections={[
      {
        heading: "The six decisions",
        numbered: [
          { title: "Diagnose the real problem.", text: "Find the root cause and actual bottleneck before selecting an AI application." },
          { title: "Define the value.", text: "State what should improve for the worker, customer, or business." },
          { title: "Decide AI's role.", text: "Choose what to automate, what to augment, what AI should support, and what should remain human-led." },
          { title: "Prepare the operation.", text: "Clarify workflow, ownership, source context, standards, and decision boundaries." },
          { title: "Direct and govern.", text: "Set objectives, constraints, validation, review, escalation, and accountable ownership." },
          { title: "Validate the result.", text: "Confirm that the bottleneck moved, the outcome improved, and people became more capable." },
        ],
      },
      {
        heading: "1. Diagnose the real problem",
        paragraphs: [
          "AI does what it is directed to do. It can automate a report, summarize a meeting, or make a workflow look more sophisticated while the real bottleneck remains. Root-cause analysis still comes first.",
          "The first question is whether the problem sits in the task at all. It may sit in unclear ownership, a badly designed process, inaccessible information, weak decision-making, an unnecessary approval, or a manager who has not provided enough direction.",
        ],
      },
      {
        heading: "2. Define the value",
        paragraphs: [
          "Automation performs work that a person would otherwise do. Augmentation extends what that person becomes capable of doing. The operational purpose should identify who benefits and how: more time for judgment, better information, stronger decisions, improved service, reduced friction, or greater capacity for valuable work.",
          "AI should leave people more capable than it found them. If the application produces activity without improving the outcome for the worker, customer, or business, its purpose needs to be reconsidered.",
        ],
      },
      {
        heading: "3. Decide AI's role",
        bullets: [
          "Automate stable, repeatable activity when the expected result and exceptions are understood.",
          "Augment people when better information, analysis, or capacity helps them exercise judgment more effectively.",
          "Use AI for decision support when a person still needs to interpret context, weigh consequences, and own the decision.",
          "Keep work human-led when it depends on authority, care, professional judgment, sensitive relationships, or consequences the system cannot adequately evaluate.",
        ],
      },
      {
        heading: "4. Prepare the operation",
        paragraphs: [
          "AI is a multiplier. When the workflow is unclear, AI applies inconsistency faster. When ownership is undefined, it creates faster confusion. When decisions depend on one person, it can help everyone reach the same bottleneck sooner.",
          "Readiness requires a defined workflow, accountable owner, usable source context, expected output, operating standards, decision boundaries, and a known path for exceptions. The quality of the result still depends on the quality of the system behind it.",
        ],
      },
      {
        heading: "5. Direct and govern",
        paragraphs: [
          "AI output reflects the conditions imposed on it. A useful operating environment defines the objective, constraints, source context, assumptions, treatment of uncertainty, validation standard, and refinement process. Clearer direction reduces the model's freedom to produce something polished but operationally weak.",
          "Human oversight is part of the operating design. The question is not whether AI can produce an output. It is what risk, complexity, or consequence makes human or expert validation necessary.",
        ],
        bullets: [
          "One accountable owner for the workflow and its result",
          "Approved source context and instructions grounded in the actual work",
          "Explicit assumptions, constraints, and uncertainty handling",
          "Validation proportionate to the consequence of an error",
          "Human review where judgment, approval, fairness, or accountability matters",
          "Escalation for uncertainty, exceptions, and sensitive decisions",
        ],
      },
      {
        heading: "6. Validate the result",
        paragraphs: [
          "A working automation is not automatically a successful operation. Test whether the original bottleneck moved, the outcome improved, and the system created more value than the work required to configure, supply, monitor, maintain, and correct it.",
          "Watch what the system requires from people. If employees must feed it unnecessary information, correct it constantly, work around it, or change a sound process merely to keep the tool running, people have started serving the automation. That is an operating failure even when the technology itself works.",
          "Use real cases, probe the output, surface assumptions, test failure scenarios, and monitor patterns over time. AI can go surprisingly far. Knowing when risk, complexity, or consequence calls for deeper expertise remains part of the judgment.",
        ],
      },
    ]}
    sourceLinks={[
      {
        title: "WHY ARE WE REALLY USING AI?",
        url: "https://www.linkedin.com/pulse/why-we-really-using-ai-jennifer-delumen-buenaobra-v2exc/",
        note: "Automation, augmentation, and the value AI should create for people.",
      },
      {
        title: "AI Doesn’t Differentiate You. You Differentiate AI.",
        url: "https://www.linkedin.com/pulse/ai-doesnt-differentiate-you-jennifer-delumen-buenaobra-xn9jc/",
        note: "How objectives, constraints, assumptions, and refinement shape decision-grade output.",
      },
      {
        title: "CAN AI REPLACE MANAGERS?",
        url: "https://www.linkedin.com/pulse/can-ai-replace-managers-jennifer-delumen-buenaobra-wystc/",
        note: "Human judgment, management accountability, decision boundaries, and oversight.",
      },
      {
        title: "You Might Be AI-Replaceable. Here's the Part That Isn't.",
        url: "https://www.linkedin.com/pulse/you-might-ai-replaceable-heres-part-isnt-jennifer-delumen-buenaobra-ztklc/",
        note: "The continuing value of context, judgment, adaptability, and attention to detail.",
      },
    ]}
    calloutTitle="Bring the recurring work you think AI could improve."
    calloutText="Jenny can diagnose the operating need, determine where AI is useful, and design the workflow, direction, controls, human review, and accountability required around it."
  />;
}
