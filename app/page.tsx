import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "GTJ — Go-To Japan | Launch and Grow in Japan | Sekaichi.inc",
  description: "We help overseas companies enter the Japanese market through local strategy, execution, partnerships, operations, and go-to-market support.",
};

const whyJapanPoints = [
  {
    title: "The third-largest economy in the world",
    description: "Japan offers massive commercial opportunity across consumer, B2B, and digital categories — with a sophisticated, loyal buyer base.",
  },
  {
    title: "But notoriously hard to enter alone",
    description: "Language barriers, cultural nuance, local business norms, and complex distribution structures make Japan one of the most challenging markets to navigate without local expertise.",
  },
  {
    title: "Most overseas launches fail quietly",
    description: "Companies often underestimate what Japan requires: not just translation, but deep local execution — from partnerships to product localization to channel relationships built over time.",
  },
];

const differentiators = [
  {
    title: "Strategy and execution in one place",
    description: "We don't just build slide decks. We execute. From research to launch to scale, we're on the ground making it happen.",
    num: "01",
  },
  {
    title: "English-first communication, Japan-native execution",
    description: "You communicate with us in English. We handle the complexity of Japanese business culture and communication on your behalf.",
    num: "02",
  },
  {
    title: "Flexible engagement models",
    description: "Pilot-based, project-based, retainer — or hybrid. We adapt to your stage, budget, and risk tolerance.",
    num: "03",
  },
  {
    title: "Genuine local network",
    description: "Partnerships, introductions, and market access come from real relationships built in Japan — not a contact list.",
    num: "04",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We start with a direct conversation about your business, your Japan ambitions, and what success looks like. No sales deck — just an honest assessment of where you are and what you need.",
  },
  {
    title: "Market Hypothesis & Scoping",
    description: "We develop a clear hypothesis for how your product or service fits the Japan market, and define the right scope for the engagement — pilot, project, or full entry support.",
  },
  {
    title: "Pilot Design",
    description: "For most companies, we start with a structured pilot designed to generate real market signal quickly. We define objectives, timeline, and success criteria upfront.",
  },
  {
    title: "Local Execution",
    description: "We execute. Research, partnerships, localization, GTM, operations — whichever services are relevant to your plan, we handle them with local knowledge and accountability.",
  },
  {
    title: "Optimization & Scale",
    description: "Based on what we learn, we refine the approach and support your path to scale — whether that means expanding the engagement or transitioning to a sustainable local structure.",
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-bg-primary pt-24 pb-32 min-h-[92vh] flex items-center">
        {/* Grid background */}
        <div className="absolute inset-0 hero-grid" />

        {/* Scanline */}
        <div className="scanline-overlay" />

        {/* Red glow orb top-right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at center, rgba(255,45,85,0.08) 0%, transparent 70%)", transform: "translate(20%, -20%)" }}
        />
        {/* Cyan glow orb bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at center, rgba(0,212,255,0.05) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
        />

        {/* Decorative floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 border border-accent/30 rotate-45 float-shape" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan/20 rounded-full float-shape-alt" />
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 border border-gold/20 rotate-12 float-shape" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-[15%] w-1.5 h-1.5 bg-accent/30 rounded-full float-shape-alt" style={{ animationDelay: "4s" }} />

        {/* Decorative Japanese katakana — decorative only */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block overflow-hidden">
          <span
            className="jp-deco"
            aria-hidden="true"
            style={{ fontSize: "clamp(100px, 14vw, 200px)", opacity: 0.04, right: "-40px", position: "relative" }}
          >
            市場参入
          </span>
        </div>

        <Container>
          <div className="max-w-3xl relative z-10">
            {/* HUD Badge */}
            <div className="animate-fade-up mb-6">
              <span className="hud-badge">
                <span className="dot" />
                STATUS: ACTIVE — MARKET: JAPAN
              </span>
            </div>

            {/* Eyebrow */}
            <p
              className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 animate-fade-up-delay-1 flex items-center gap-2"
            >
              <span className="w-6 h-px bg-accent" />
              Japan Market Entry Partner — by Sekaichi.inc
            </p>

            {/* Main headline with glitch */}
            <h1
              className="font-heading font-black text-white mb-6 animate-fade-up-delay-2 glitch-text"
              data-text="Launch and grow in Japan — without starting from zero."
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              Launch and grow in{" "}
              <span className="text-accent">Japan</span>
              {" "}— without starting from zero.
            </h1>

            {/* Typewriter subheadline */}
            <div className="mb-4 animate-fade-up-delay-2 h-7 overflow-hidden">
              <span className="typewriter-text text-cyan text-sm font-mono font-semibold">
                Go-To Japan (GTJ) — The bridge between ambition and execution.
              </span>
            </div>

            <p className="text-lg text-[#a0aec0] leading-relaxed mb-10 max-w-2xl animate-fade-up-delay-3">
              We help overseas companies enter the Japanese market through local strategy, execution, partnerships, operations, and go-to-market support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-4">
              <Button href="/contact" size="lg" variant="primary" className="btn-glow">
                Book a Call
              </Button>
              <Button href="/services" size="lg" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ TRUST BAR ============ */}
      <div className="section-divider" />
      <section className="py-6 bg-surface border-b border-[#1a2040]">
        <Container>
          <p className="text-xs text-[#a0aec0] text-center tracking-wide">
            Helping companies from the{" "}
            <span className="font-semibold text-white">US, Europe, UK, Southeast Asia, Middle East &amp; Australia</span>{" "}
            build traction in Japan
          </p>
        </Container>
      </section>
      <div className="section-divider" />

      {/* ============ WHY JAPAN IS HARD ============ */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="The Japan Opportunity"
                title="The world's third-largest market. But not the easiest one to crack."
                description="Japan is a premium market with deep brand loyalty, strong purchasing power, and unique local dynamics. The opportunity is real — but so is the complexity."
              />
              <div className="mt-10 space-y-6">
                {whyJapanPoints.map((point, i) => (
                  <div key={i} className="flex gap-4 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/40 text-accent font-heading font-black text-xs"
                      style={{ borderRadius: "2px" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white mb-1" style={{ letterSpacing: "-0.01em" }}>{point.title}</p>
                      <p className="text-[#a0aec0] text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark corner-brackets rounded-xl p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">Why companies struggle</p>
              <ul className="space-y-4">
                {[
                  "Entering with a home-market playbook that doesn't translate",
                  "Underestimating cultural and communication nuance",
                  "Lacking local relationships and channel access",
                  "No local execution infrastructure or team",
                  "Going too slow — or too fast — for the market",
                  "Treating Japan as one homogeneous audience",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#a0aec0]">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="py-24 bg-surface-dark">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="What We Do"
              title="From market research to live operations."
              description="We provide the full range of capabilities needed to enter and grow in Japan — strategy, execution, and everything in between."
            />
            <Button href="/services" variant="secondary" size="sm" className="whitespace-nowrap flex-shrink-0">
              View all services →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} compact index={i} />
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ============ WHY US ============ */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <SectionHeader
            eyebrow="Why Work With GTJ"
            title="More than advice. We do the work."
            description="Most Japan market advisors stop at strategy. We continue through execution — providing the local presence, relationships, and operational support your business actually needs."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="card-dark corner-brackets rounded-xl p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="step-number mb-3" style={{ fontSize: "36px" }}>{item.num}</div>
                <div className="h-px bg-gradient-to-r from-accent to-transparent mb-4" />
                <h3 className="font-heading font-bold text-white mb-3 text-sm leading-snug" style={{ letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p className="text-xs text-[#a0aec0] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ============ PROCESS SNAPSHOT ============ */}
      <section className="py-24 bg-surface-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="How We Work"
                title="A structured process. Practical and fast."
                description="We move quickly from conversation to scoped engagement. Most clients go from first contact to a defined plan in two to three weeks."
              />
              <Button href="/how-we-work" variant="secondary" size="md" className="mt-8">
                Learn how we work →
              </Button>
            </div>
            <div>
              {processSteps.map((step, i) => (
                <ProcessStep
                  key={i}
                  number={i + 1}
                  title={step.title}
                  description={step.description}
                  isLast={i === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ============ CASE STUDIES ============ */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Case Studies"
              title="Examples of work we do."
              description="Sample engagements across categories and markets. Content is illustrative — real client details are kept confidential."
            />
            <Button href="/case-studies" variant="secondary" size="sm" className="whitespace-nowrap flex-shrink-0">
              View all cases →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} compact />
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ============ ENGAGEMENT MODELS ============ */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,45,85,0.05) 0%, transparent 70%)" }}
        />
        <Container>
          <div className="relative z-10">
            <SectionHeader
              eyebrow="Engagement Models"
              title="Flexible structures built around your stage."
              description="There's no single model that fits every company entering Japan. We offer flexible structures that align with your goals, budget, and risk tolerance."
              align="center"
            />
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Pilot-Based", num: "01", description: "A time-bounded, scoped engagement designed to generate market signal before full investment. Ideal for early-stage evaluation." },
                { label: "Project-Based", num: "02", description: "A defined project scope with clear deliverables — market research, GTM plan, partnership development, launch execution, etc." },
                { label: "Retainer", num: "03", description: "Ongoing monthly support across GTM, operations, partnerships, or BPO. Best for companies with active Japan operations." },
                { label: "Hybrid / Performance-Aligned", num: "04", description: "In select cases, we can structure engagements with performance components. Contact us to discuss what might work for your situation." },
              ].map((model, i) => (
                <div key={i} className="card-dark corner-brackets rounded-xl p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="step-number mb-2" style={{ fontSize: "32px" }}>{model.num}</div>
                  <div className="h-px bg-gradient-to-r from-gold to-transparent mb-4" />
                  <p className="font-heading font-bold text-white mb-3 text-sm" style={{ letterSpacing: "-0.01em" }}>{model.label}</p>
                  <p className="text-[#a0aec0] text-xs leading-relaxed">{model.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/contact" size="lg" variant="primary" className="btn-glow">
                Discuss Your Engagement
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to explore Japan?"
        description="Book a call and let's have a direct conversation about your business and how we can help."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "Read our FAQ", href: "/faq" }}
        theme="light"
      />
    </>
  );
}
