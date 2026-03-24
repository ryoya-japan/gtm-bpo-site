import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and why we built a Japan-focused execution partner for overseas companies.",
};

const differentiators = [
  {
    title: "Local execution, not just advice",
    description: "We don't stop at strategy decks. We have the local network, language capability, and operational infrastructure to actually implement — from partnership development to e-commerce operations to customer support.",
    num: "01",
  },
  {
    title: "International communication by design",
    description: "We communicate exclusively in English with our overseas clients. We understand how international businesses think, make decisions, and measure success. We translate between two worlds — literally and operationally.",
    num: "02",
  },
  {
    title: "Commercial alignment",
    description: "We measure our work by business outcomes. Not reports delivered or hours logged. Our goal is to help your Japan business grow — and we structure engagements accordingly.",
    num: "03",
  },
  {
    title: "Flexibility over rigidity",
    description: "We don't have a fixed playbook. Japan is diverse, and your business is unique. We design approaches that fit your market, your stage, and your goals — not the other way around.",
    num: "04",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle at center, rgba(255,45,85,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block">
          <span className="jp-deco" aria-hidden="true" style={{ fontSize: "140px", opacity: 0.04 }}>私たち</span>
        </div>
        <Container>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              About GTJ
            </p>
            <h1
              className="font-heading font-black text-white leading-tight max-w-2xl mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
            >
              Built for the companies that want to actually win in Japan.
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-xl leading-relaxed">
              We exist because there&apos;s a gap between &quot;Japan strategy&quot; and &quot;Japan results.&quot; We bridge it.
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Who We Are */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="A Japan-focused execution partner."
              />
              <div className="mt-6 space-y-5 text-[#a0aec0] leading-relaxed">
                <p>
                  We are a go-to-market and business process outsourcing (BPO) partner built specifically for overseas companies entering and growing in Japan. Our team combines deep local market knowledge with the international business fluency needed to make cross-border expansion work.
                </p>
                <p>
                  We&apos;re not a traditional consulting firm. We don&apos;t hand you a market report and move on. We build and execute Japan market strategies alongside you — from initial research and positioning to live partnerships, operational infrastructure, and ongoing growth support.
                </p>
                <p>
                  Our clients include SaaS companies, consumer brands, fintech companies, marketplace platforms, AI companies, and more — all with the same challenge: how to build real traction in Japan without building a large local organization from scratch.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-dark corner-brackets rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What we are</p>
                <ul className="space-y-2">
                  {[
                    "A Japan GTM and BPO execution partner",
                    "A bridge between overseas companies and Japan",
                    "A flexible, practical team that gets things done",
                    "A long-term partner aligned with your growth",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a0aec0]">
                      <span className="text-cyan mt-0.5 flex-shrink-0 font-bold">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-dark corner-brackets-cyan rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">What we are not</p>
                <ul className="space-y-2">
                  {[
                    "A traditional consulting firm (strategy only)",
                    "A distributor or reseller",
                    "A creative or branding agency",
                    "A translation service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a0aec0]">
                      <svg className="w-4 h-4 text-[#a0aec0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Differentiators */}
      <section className="py-24 bg-surface-dark">
        <Container>
          <SectionHeader
            eyebrow="What Makes Us Different"
            title="Execution capability, not just market knowledge."
            description="Japan market knowledge is table stakes. What matters is whether you can translate that knowledge into real business outcomes. That's where we focus."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="card-dark corner-brackets rounded-xl p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="step-number mb-2" style={{ fontSize: "36px" }}>{item.num}</div>
                <div className="h-px bg-gradient-to-r from-accent to-transparent mb-4" />
                <h3 className="font-heading font-bold text-white mb-3 text-sm" style={{ letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Why Japan Needs Local Execution */}
      <section className="py-24 bg-bg-primary">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Why Japan Needs Local Execution"
            title="The gap between knowing Japan and succeeding in Japan."
            align="center"
          />
          <div className="mt-10 space-y-6 text-[#a0aec0] leading-relaxed">
            <p>Japan is a market where trust, relationships, and cultural alignment matter enormously. Business moves through introductions. Decisions take longer. Customers expect higher standards. And the nuances that separate a brand that resonates from one that falls flat are often invisible to outsiders.</p>
            <p>This means that overseas companies entering Japan without local execution capability — real local presence, real local relationships, real knowledge of how things actually work — tend to either fail quietly or waste significant time and budget before finding their footing.</p>
            <p>The companies that succeed in Japan typically do one of two things: they build a strong local team early, or they partner with someone who already has the local infrastructure in place. We&apos;re built to be that partner — giving you local execution capability without requiring you to build a Japan organization from scratch on day one.</p>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Our Approach */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />
        <Container>
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              Our Approach
            </p>
            <h2
              className="font-heading font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.04em" }}
            >
              Practical. Commercial. Long-term.
            </h2>
            <div className="space-y-5 text-[#a0aec0] leading-relaxed">
              <p>We don&apos;t optimize for impressive slide decks. We optimize for business results. That means we&apos;re comfortable telling clients when a particular approach won&apos;t work in Japan, when a timeline is unrealistic, or when a market hypothesis needs refinement.</p>
              <p>We work as a genuine partner — sharing our honest assessment, building plans based on real market dynamics, and staying accountable to the outcomes we agree on together.</p>
              <p>Japan is a long game. The companies that win here build carefully, adapt continuously, and invest in the right local relationships over time. We&apos;re here to help you do exactly that.</p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's talk about your Japan ambitions."
        description="Book a call and let's find out how we can help."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
        theme="light"
      />
    </>
  );
}
