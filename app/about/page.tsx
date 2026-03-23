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
  },
  {
    title: "International communication by design",
    description: "We communicate exclusively in English with our overseas clients. We understand how international businesses think, make decisions, and measure success. We translate between two worlds — literally and operationally.",
  },
  {
    title: "Commercial alignment",
    description: "We measure our work by business outcomes. Not reports delivered or hours logged. Our goal is to help your Japan business grow — and we structure engagements accordingly.",
  },
  {
    title: "Flexibility over rigidity",
    description: "We don't have a fixed playbook. Japan is diverse, and your business is unique. We design approaches that fit your market, your stage, and your goals — not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-950 text-white py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Built for the companies that want to actually win in Japan.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            We exist because there&apos;s a gap between &quot;Japan strategy&quot; and &quot;Japan results.&quot; We bridge it.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="A Japan-focused execution partner."
              />
              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
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
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">What we are</p>
                <ul className="space-y-2">
                  {[
                    "A Japan GTM and BPO execution partner",
                    "A bridge between overseas companies and Japan",
                    "A flexible, practical team that gets things done",
                    "A long-term partner aligned with your growth",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">What we are not</p>
                <ul className="space-y-2">
                  {[
                    "A traditional consulting firm (strategy only)",
                    "A distributor or reseller",
                    "A creative or branding agency",
                    "A translation service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section className="py-24 bg-gray-50">
        <Container>
          <SectionHeader
            eyebrow="What Makes Us Different"
            title="Execution capability, not just market knowledge."
            description="Japan market knowledge is table stakes. What matters is whether you can translate that knowledge into real business outcomes. That's where we focus."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Why Japan Needs Local Execution"
            title="The gap between knowing Japan and succeeding in Japan."
            align="center"
          />
          <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
            <p>Japan is a market where trust, relationships, and cultural alignment matter enormously. Business moves through introductions. Decisions take longer. Customers expect higher standards. And the nuances that separate a brand that resonates from one that falls flat are often invisible to outsiders.</p>
            <p>This means that overseas companies entering Japan without local execution capability — real local presence, real local relationships, real knowledge of how things actually work — tend to either fail quietly or waste significant time and budget before finding their footing.</p>
            <p>The companies that succeed in Japan typically do one of two things: they build a strong local team early, or they partner with someone who already has the local infrastructure in place. We&apos;re built to be that partner — giving you local execution capability without requiring you to build a Japan organization from scratch on day one.</p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gray-950 text-white">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Practical. Commercial. Long-term.
            </h2>
            <div className="space-y-5 text-gray-300 leading-relaxed">
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
