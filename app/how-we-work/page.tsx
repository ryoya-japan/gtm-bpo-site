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
    num: "01",
    description: "A focused, time-bounded engagement (typically 8–12 weeks) designed to generate real market signal before committing to full entry. Ideal for companies that want to validate their Japan thesis before significant investment.",
    best: "Early-stage evaluation, new market entrants",
  },
  {
    name: "Project-Based",
    num: "02",
    description: "A scoped engagement with defined deliverables — a Japan GTM plan, a localized product, a partnership pipeline, a launch execution. Clear start, end, and success criteria.",
    best: "Specific milestones, point-in-time needs",
  },
  {
    name: "Retainer",
    num: "03",
    description: "Ongoing monthly support across one or more service areas — GTM, partnerships, BPO, operations. Best for companies that have launched and need continuous local execution support.",
    best: "Active Japan operations, ongoing growth",
  },
  {
    name: "Hybrid / Performance-Aligned",
    num: "04",
    description: "In select situations, we're open to engagement structures that include performance-based components, aligned with milestones or business outcomes. This depends on the nature of the engagement and the business.",
    best: "Aligned incentives, specific commercial outcomes",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,214,10,0.05) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block">
          <span className="jp-deco" aria-hidden="true" style={{ fontSize: "140px", opacity: 0.04 }}>プロセス</span>
        </div>
        <Container>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              How We Work
            </p>
            <h1
              className="font-heading font-black text-white leading-tight max-w-2xl mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
            >
              From conversation to execution, quickly.
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-xl leading-relaxed">
              We move fast. Most clients go from first contact to a defined engagement scope in two to three weeks.
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Process Steps */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                eyebrow="Our Process"
                title="Five steps from first call to growing in Japan."
              />
              <p className="mt-4 text-[#a0aec0] leading-relaxed">
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

      <div className="section-divider" />

      {/* Engagement Models */}
      <section className="py-24 bg-surface-dark">
        <Container>
          <SectionHeader
            eyebrow="Engagement Models"
            title="We adapt to your stage and goals."
            description="There's no standard package. Engagements are structured around what your business actually needs — and what makes commercial sense for your Japan investment thesis."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, i) => (
              <div key={i} className="card-dark corner-brackets rounded-xl p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="step-number mb-2" style={{ fontSize: "36px" }}>{model.num}</div>
                <div className="h-px bg-gradient-to-r from-accent to-transparent mb-4" />
                <h3 className="font-heading font-bold text-white text-base mb-2" style={{ letterSpacing: "-0.01em" }}>{model.name}</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed mb-4">{model.description}</p>
                <p className="text-xs text-[#a0aec0]">
                  <span className="text-gold font-semibold">Best for:</span> {model.best}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Commitment */}
      <section className="py-24 bg-bg-primary">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Clarity before anything starts."
            align="center"
          />
          <div className="mt-10 space-y-6 text-[#a0aec0] leading-relaxed">
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
