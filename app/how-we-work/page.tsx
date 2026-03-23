import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Our process for helping overseas companies enter Japan — from initial consultation to launch and scale.",
};

const steps = [
  {
    title: "Initial Consultation",
    description: "We start with an open conversation — no slide decks, no sales pitch. We want to understand your business, your Japan ambitions, your timeline, and your constraints. This conversation is honest and direct: if we don't think a Japan engagement makes sense for your stage or situation, we'll tell you.",
  },
  {
    title: "Market Hypothesis & Scoping",
    description: "Based on what we learn, we develop a hypothesis about how your product or service fits the Japan market. We then propose a clear engagement scope — defining objectives, timeline, deliverables, and success criteria. You'll know exactly what you're committing to before anything starts.",
  },
  {
    title: "Pilot Design",
    description: "For companies at the evaluation or early-entry stage, we design a structured pilot. A good pilot is time-bounded, focused on answering the specific questions that matter for your go/no-go decision, and built to generate real market signal — not just reports. We define what success looks like before we start.",
  },
  {
    title: "Local Execution",
    description: "This is where we do the work. Research, localization, partnership outreach, GTM execution, launch coordination, operations — whatever the scope requires, we execute with local knowledge and accountability. You communicate with us in English; we handle the Japan-side complexity.",
  },
  {
    title: "Optimization & Scale",
    description: "We review what we've learned, refine the approach, and support your path forward — whether that's expanding the engagement, scaling what's working, or helping you transition to a sustainable local structure. We're invested in your long-term success in Japan, not just delivering a report.",
  },
];

const engagementModels = [
  {
    name: "Pilot-Based",
    description: "A focused, time-bounded engagement (typically 8–12 weeks) designed to generate real market signal before committing to full entry. Ideal for companies that want to validate their Japan thesis before significant investment.",
    best: "Early-stage evaluation, new market entrants",
  },
  {
    name: "Project-Based",
    description: "A scoped engagement with defined deliverables — a Japan GTM plan, a localized product, a partnership pipeline, a launch execution. Clear start, end, and success criteria.",
    best: "Specific milestones, point-in-time needs",
  },
  {
    name: "Retainer",
    description: "Ongoing monthly support across one or more service areas — GTM, partnerships, BPO, operations. Best for companies that have launched and need continuous local execution support.",
    best: "Active Japan operations, ongoing growth",
  },
  {
    name: "Hybrid / Performance-Aligned",
    description: "In select situations, we're open to engagement structures that include performance-based components, aligned with milestones or business outcomes. This depends on the nature of the engagement and the business.",
    best: "Aligned incentives, specific commercial outcomes",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-gray-950 text-white py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">How We Work</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            From conversation to execution, quickly.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            We move fast. Most clients go from first contact to a defined engagement scope in two to three weeks.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                eyebrow="Our Process"
                title="Five steps from first call to growing in Japan."
              />
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every engagement follows the same core structure, adapted to your specific stage and goals. We prioritize clarity at every step — no ambiguity about scope, timeline, or what we&apos;re working toward.
              </p>
            </div>
            <div>
              {steps.map((step, i) => (
                <ProcessStep
                  key={i}
                  number={i + 1}
                  title={step.title}
                  description={step.description}
                  isLast={i === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gray-50">
        <Container>
          <SectionHeader
            eyebrow="Engagement Models"
            title="We adapt to your stage and goals."
            description="There's no standard package. Engagements are structured around what your business actually needs — and what makes commercial sense for your Japan investment thesis."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{model.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{model.description}</p>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Best for:</span> {model.best}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Clarity before anything starts."
            align="center"
          />
          <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
            <p>We believe the best partnerships start with total clarity. Before any engagement begins, you&apos;ll know exactly what we&apos;re working on, why, and how we&apos;ll measure success. No scope creep, no surprises.</p>
            <p>We also believe in honest assessment. If your product doesn&apos;t seem right for Japan at this stage, or if a different approach would serve you better, we&apos;ll say so. Our goal is a long-term relationship built on trust — not a one-off project fee.</p>
            <p>And we believe in speed. Japan is a market that rewards early movers in many categories. We try to move from conversation to execution as quickly as responsibly possible.</p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's start with a conversation."
        description="Tell us about your Japan goals. We'll give you an honest read on where we can help."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
