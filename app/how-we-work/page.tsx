import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our process for helping overseas companies enter Japan — from initial consultation to launch and scale.",
};

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We start with an open conversation — no slide decks, no sales pitch. We want to understand your business, your Japan ambitions, your timeline, and your constraints.",
  },
  {
    title: "Market Hypothesis & Scoping",
    description:
      "Based on what we learn, we develop a hypothesis about how your product or service fits the Japan market. We then propose a clear engagement scope.",
  },
  {
    title: "Pilot Design",
    description:
      "For companies at the evaluation or early-entry stage, we design a structured pilot. A good pilot is time-bounded and built to generate real market signal.",
  },
  {
    title: "Local Execution",
    description:
      "This is where we do the work. Research, localization, partnership outreach, GTM execution, launch coordination, operations — we execute with local knowledge.",
  },
  {
    title: "Optimization & Scale",
    description:
      "We review what we've learned, refine the approach, and support your path forward — whether that's expanding the engagement or transitioning to a local structure.",
  },
];

const engagementModels = [
  {
    name: "Pilot-Based",
    description: "A focused, time-bounded engagement (typically 8-12 weeks) designed to generate real market signal before committing to full entry.",
    best: "Early-stage evaluation, new market entrants",
  },
  {
    name: "Project-Based",
    description: "A scoped engagement with defined deliverables — a Japan GTM plan, a localized product, a partnership pipeline, a launch execution.",
    best: "Specific milestones, point-in-time needs",
  },
  {
    name: "Retainer",
    description: "Ongoing monthly support across one or more service areas — GTM, partnerships, BPO, operations. Best for companies that have launched.",
    best: "Active Japan operations, ongoing growth",
  },
  {
    name: "Hybrid / Performance-Aligned",
    description: "In select situations, we're open to engagement structures that include performance-based components, aligned with milestones.",
    best: "Aligned incentives, specific commercial outcomes",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">How We Work</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">From conversation to execution,</span>
              <br />
              <span className="text-gradient">quickly.</span>
            </h1>
            
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We move fast. Most clients go from first contact to a defined
              engagement scope in two to three weeks.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader
                eyebrow="Our Process"
                title="Five steps from first call to growing in Japan."
              />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every engagement follows the same core structure, adapted to
                your specific stage and goals. We prioritize clarity at every
                step — no ambiguity about scope, timeline, or what we&apos;re
                working toward.
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

      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        
        <Container className="relative">
          <SectionHeader
            eyebrow="Engagement Models"
            title="We adapt to your stage and goals."
            description="There's no standard package. Engagements are structured around what your business actually needs."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl p-8 transition-all duration-500 card-hover hover:border-accent/50"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all">
                  <span className="font-mono text-sm text-accent group-hover:text-accent-foreground transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {model.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-mono text-accent">Best for:</span>{" "}
                  {model.best}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Clarity before anything starts."
            align="center"
          />
          <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed text-center">
            <p>
              We believe the best partnerships start with total clarity. Before
              any engagement begins, you&apos;ll know exactly what we&apos;re
              working on, why, and how we&apos;ll measure success.
            </p>
            <p>
              We also believe in honest assessment. If your product doesn&apos;t
              seem right for Japan at this stage, we&apos;ll say so. Our goal is a
              long-term relationship built on trust.
            </p>
            <p>
              And we believe in speed. Japan rewards early movers. We move from
              conversation to execution as quickly as responsibly possible.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's start with a conversation."
        description="Tell us about your Japan goals. We'll give you an honest read on where we can help."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
        theme="dark"
      />
    </>
  );
}
