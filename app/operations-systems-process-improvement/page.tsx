import type { Metadata } from "next";
import { ExpertisePage } from "../expertise-page";

export const metadata: Metadata = {
  title: "Operations Systems and Process Improvement",
  description:
    "Operations systems and process improvement for service businesses that need clearer workflows, ownership, SOPs, controls, and more reliable execution.",
  alternates: { canonical: "https://jennydb.shopandhire.net/operations-systems-process-improvement" },
  openGraph: {
    type: "website",
    url: "https://jennydb.shopandhire.net/operations-systems-process-improvement",
    title: "Operations Systems and Process Improvement",
    description: "Design or repair workflows, ownership, SOPs, controls, and management routines behind reliable service delivery.",
  },
};

export default function Page() {
  return <ExpertisePage
    eyebrow="Operations systems and process improvement"
    title="Build the operating system behind reliable service delivery."
    deck="Operations design and process improvement for growing service-based and people-intensive businesses that need work to move with clearer ownership, stronger controls, and less dependence on individual memory or repeated intervention."
    path="/operations-systems-process-improvement"
    schemaType="Service"
    sections={[
      {
        heading: "What an operations system connects",
        paragraphs: [
          "A workflow is only one part of an operation. Reliable execution depends on how the workflow connects with roles, decision rights, service standards, information, tools, measures, review routines, and escalation paths.",
          "Improving one component without checking the others can move the problem rather than solve it. A faster intake process, for example, creates little value if ownership after intake remains unclear or the delivery team lacks the information needed to act.",
        ],
      },
      {
        heading: "Common operating gaps",
        bullets: [
          "Work is performed differently depending on who handles it.",
          "Handoffs lose information or require repeated follow-up.",
          "SOPs exist but do not reflect how work is actually completed.",
          "Approvals and exceptions accumulate with one leader.",
          "Reporting describes activity without showing delivery risk or performance.",
          "Service growth increases coordination faster than capacity.",
        ],
      },
      {
        heading: "The improvement sequence",
        numbered: [
          { title: "Observe the real work.", text: "Map how demand enters, moves, waits, changes hands, reaches the customer, and creates follow-up." },
          { title: "Find the binding constraint.", text: "Separate visible symptoms from the workflow, capacity, capability, decision, or control issue causing them." },
          { title: "Design the operating response.", text: "Clarify roles, handoffs, standards, decision rights, tools, controls, and measures together." },
          { title: "Implement with owners and managers.", text: "Test the design against actual work, equip the people responsible, and correct gaps during adoption." },
          { title: "Validate the result.", text: "Check whether execution became more reliable and whether customer, employee, and business outcomes improved." },
        ],
      },
      {
        heading: "Where SOPs fit",
        paragraphs: [
          "An SOP records a repeatable part of the operating design. It should tell the person doing the work what outcome is required, what steps and standards apply, what information is needed, and what to do when the normal path does not fit.",
          "Documentation becomes useful when it is maintained through ownership, training, quality review, feedback, and change control. Without those supporting practices, the document can quickly separate from the operation it is meant to guide.",
        ],
      },
    ]}
    calloutTitle="Start with the process that creates repeated follow-up."
    calloutText="Jenny diagnoses how the work currently moves, designs the required operating structure, and helps carry the change through implementation and stabilization."
  />;
}
