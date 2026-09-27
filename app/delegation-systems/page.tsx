import type { Metadata } from "next";
import { ExpertisePage } from "../expertise-page";

export const metadata: Metadata = {
  title: "Delegation Systems for Growing Businesses",
  description:
    "Delegation systems for founders who need recurring work, decisions, ownership, and accountability to move reliably through a capable team.",
  alternates: { canonical: "https://jennydb.shopandhire.net/delegation-systems" },
  openGraph: {
    type: "article",
    url: "https://jennydb.shopandhire.net/delegation-systems",
    title: "Delegation Systems for Growing Businesses",
    description: "A practical operating model for delegating recurring work without losing control of quality, decisions, or accountability.",
  },
};

export default function Page() {
  return <ExpertisePage
    eyebrow="Delegation systems"
    title="Delegation that holds after the handoff."
    deck="A practical operating model for founders and business leaders who need recurring work and routine decisions to move through a capable team without losing visibility, service quality, or accountability."
    path="/delegation-systems"
    about={["Delegation readiness", "Founder dependence", "Decision rights", "Management accountability"]}
    sections={[
      {
        heading: "Why delegated work returns",
        paragraphs: [
          "A task can be assigned without the conditions required to own it. The recipient may understand the activity but lack the expected outcome, decision authority, context, tools, standard, or response for exceptions. Work then waits, escalates, or returns for correction.",
          "Repeated follow-up is therefore evidence to diagnose. It may indicate a capability gap, but it may also reveal an incomplete workflow, conflicting priorities, inaccessible information, or controls that require unnecessary approval.",
        ],
      },
      {
        heading: "The conditions for delegation readiness",
        bullets: [
          "A specific outcome and definition of acceptable performance",
          "One accountable owner and clear supporting roles",
          "Access to the information, tools, and resources required",
          "Decision rights and guardrails appropriate to the risk",
          "Known handoffs, dependencies, and timing requirements",
          "Review points and measures that provide visibility without constant checking",
          "An escalation path for exceptions outside the assigned authority",
        ],
      },
      {
        heading: "Control without becoming the bottleneck",
        paragraphs: [
          "Good control makes risk and performance visible. It does not require the founder to approve every routine step. The level of review should match the consequence of the decision, the capability of the owner, and the stability of the process.",
          "As the work becomes reliable, review can shift from individual transactions toward patterns, exceptions, service outcomes, and improvement priorities. This preserves leadership visibility while allowing the team to operate.",
        ],
      },
      {
        heading: "A practical delegation sequence",
        numbered: [
          { title: "Choose the work deliberately.", text: "Prioritize recurring work or decisions where reduced founder dependence will create meaningful capacity or speed." },
          { title: "Define the operating conditions.", text: "Set the outcome, owner, authority, standard, inputs, handoffs, controls, and escalation path." },
          { title: "Transfer context and practice.", text: "Use real work to build judgment and reveal missing information or unclear boundaries." },
          { title: "Review outcomes and exceptions.", text: "Coach against evidence and improve the system where the same friction repeats." },
          { title: "Adjust oversight as reliability grows.", text: "Reduce unnecessary approvals while retaining measures appropriate to the risk." },
        ],
      },
    ]}
    calloutTitle="Bring the work you cannot seem to get off your plate."
    calloutText="Jenny can determine whether the constraint sits in the process, ownership, role design, capability, management practice, or support model, then build the structure required for the handoff to hold."
  />;
}
