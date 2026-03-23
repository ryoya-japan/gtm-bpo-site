import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and why we built a Japan-focused execution partner for overseas companies.",
};

const differentiators = [
  {
    title: "Local execution, not just advice",
    description:
      "We don't stop at strategy decks. We have the local network, language capability, and operational infrastructure to actually implement — from partnership development to e-commerce operations to customer support.",
  },
  {
    title: "International communication by design",
    description:
      "We communicate exclusively in English with our overseas clients. We understand how international businesses think, make decisions, and measure success. We translate between two worlds — literally and operationally.",
  },
  {
    title: "Commercial alignment",
    description:
      "We measure our work by business outcomes. Not reports delivered or hours logged. Our goal is to help your Japan business grow — and we structure engagements accordingly.",
  },
  {
    title: "Flexibility over rigidity",
    description:
      "We don't have a fixed playbook. Japan is diverse, and your business is unique. We design approaches that fit your market, your stage, and your goals — not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-foreground text-background pt-32 pb-20">
        <Container>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6">
            About
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl text-balance">
            Built for the companies that want to{" "}
            <span className="italic">actually win in Japan.</span>
          </h1>
          <p className="mt-8 text-lg text-background/70 max-w-xl leading-relaxed">
            We exist because there&apos;s a gap between &quot;Japan
            strategy&quot; and &quot;Japan results.&quot; We bridge it.
          </p>
        </Container>
      </section>

      <section className="py-32 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="A Japan-focused execution partner."
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We are a go-to-market and business process outsourcing (BPO)
                  partner built specifically for overseas companies entering and
                  growing in Japan. Our team combines deep local market
                  knowledge with the international business fluency needed to
                  make cross-border expansion work.
                </p>
                <p>
                  We&apos;re not a traditional consulting firm. We don&apos;t
                  hand you a market report and move on. We build and execute
                  Japan market strategies alongside you — from initial research
                  and positioning to live partnerships, operational
                  infrastructure, and ongoing growth support.
                </p>
                <p>
                  Our clients include SaaS companies, consumer brands, fintech
                  companies, marketplace platforms, AI companies, and more — all
                  with the same challenge: how to build real traction in Japan
                  without building a large local organization from scratch.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-8">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  What we are
                </p>
                <ul className="space-y-3">
                  {[
                    "A Japan GTM and BPO execution partner",
                    "A bridge between overseas companies and Japan",
                    "A flexible, practical team that gets things done",
                    "A long-term partner aligned with your growth",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-2xl p-8">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  What we are not
                </p>
                <ul className="space-y-3">
                  {[
                    "A traditional consulting firm (strategy only)",
                    "A distributor or reseller",
                    "A creative or branding agency",
                    "A translation service",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
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

      <section className="py-32 bg-muted">
        <Container>
          <SectionHeader
            eyebrow="What Makes Us Different"
            title="Execution capability, not just market knowledge."
            description="Japan market knowledge is table stakes. What matters is whether you can translate that knowledge into real business outcomes. That's where we focus."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl p-8 hover-lift hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-px bg-accent/20 mb-6 transform origin-left group-hover:bg-accent group-hover:scale-x-110 transition-all duration-300" />
                <h3 className="font-serif text-xl text-card-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-background">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Why Japan Needs Local Execution"
            title="The gap between knowing Japan and succeeding in Japan."
            align="center"
          />
          <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed text-center">
            <p>
              Japan is a market where trust, relationships, and cultural
              alignment matter enormously. Business moves through introductions.
              Decisions take longer. Customers expect higher standards. And the
              nuances that separate a brand that resonates from one that falls
              flat are often invisible to outsiders.
            </p>
            <p>
              This means that overseas companies entering Japan without local
              execution capability — real local presence, real local
              relationships, real knowledge of how things actually work — tend
              to either fail quietly or waste significant time and budget before
              finding their footing.
            </p>
            <p>
              The companies that succeed in Japan typically do one of two
              things: they build a strong local team early, or they partner with
              someone who already has the local infrastructure in place.
              We&apos;re built to be that partner — giving you local execution
              capability without requiring you to build a Japan organization
              from scratch on day one.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-foreground text-background">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6">
              Our Approach
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance mb-8">
              Practical. Commercial. <span className="italic">Long-term.</span>
            </h2>
            <div className="space-y-6 text-background/70 leading-relaxed">
              <p>
                We don&apos;t optimize for impressive slide decks. We optimize
                for business results. That means we&apos;re comfortable telling
                clients when a particular approach won&apos;t work in Japan,
                when a timeline is unrealistic, or when a market hypothesis
                needs refinement.
              </p>
              <p>
                We work as a genuine partner — sharing our honest assessment,
                building plans based on real market dynamics, and staying
                accountable to the outcomes we agree on together.
              </p>
              <p>
                Japan is a long game. The companies that win here build
                carefully, adapt continuously, and invest in the right local
                relationships over time. We&apos;re here to help you do exactly
                that.
              </p>
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
