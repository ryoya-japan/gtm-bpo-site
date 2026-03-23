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
  title: "Zenith Japan — Launch and Grow in Japan",
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
  },
  {
    title: "English-first communication, Japan-native execution",
    description: "You communicate with us in English. We handle the complexity of Japanese business culture and communication on your behalf.",
  },
  {
    title: "Flexible engagement models",
    description: "Pilot-based, project-based, retainer — or hybrid. We adapt to your stage, budget, and risk tolerance.",
  },
  {
    title: "Genuine local network",
    description: "Partnerships, introductions, and market access come from real relationships built in Japan — not a contact list.",
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
      {/* Hero */}
      <section className="bg-gray-950 text-white pt-24 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #C84B31 0%, transparent 60%)" }} />
        <Container>
          <div className="max-w-3xl relative">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">
              Japan Market Entry Partner
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight mb-6">
              Launch and grow in Japan — without starting from zero.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We help overseas companies enter the Japanese market through local strategy, execution, partnerships, operations, and go-to-market support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Book a Call
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="secondary"
                className="border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:text-white"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-gray-100 py-8">
        <Container>
          <p className="text-sm text-gray-500 text-center">
            Helping companies from the{" "}
            <span className="font-medium text-gray-700">US, Europe, UK, Southeast Asia, Middle East &amp; Australia</span>{" "}
            build traction in Japan
          </p>
        </Container>
      </section>

      {/* Why Japan is hard */}
      <section className="py-24">
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
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{point.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Why companies struggle</p>
              <ul className="space-y-4">
                {[
                  "Entering with a home-market playbook that doesn't translate",
                  "Underestimating cultural and communication nuance",
                  "Lacking local relationships and channel access",
                  "No local execution infrastructure or team",
                  "Going too slow — or too fast — for the market",
                  "Treating Japan as one homogeneous audience",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
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

      {/* Services overview */}
      <section className="py-24 bg-gray-50">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Why Work With Us"
            title="More than advice. We do the work."
            description="Most Japan market advisors stop at strategy. We continue through execution — providing the local presence, relationships, and operational support your business actually needs."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="border-t-2 border-accent pt-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-base leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process snapshot */}
      <section className="py-24 bg-gray-50">
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

      {/* Case studies preview */}
      <section className="py-24">
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

      {/* Engagement models */}
      <section className="py-24 bg-gray-950 text-white">
        <Container>
          <SectionHeader
            eyebrow="Engagement Models"
            title="Flexible structures built around your stage."
            description="There's no single model that fits every company entering Japan. We offer flexible structures that align with your goals, budget, and risk tolerance."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Pilot-Based", description: "A time-bounded, scoped engagement designed to generate market signal before full investment. Ideal for early-stage evaluation." },
              { label: "Project-Based", description: "A defined project scope with clear deliverables — market research, GTM plan, partnership development, launch execution, etc." },
              { label: "Retainer", description: "Ongoing monthly support across GTM, operations, partnerships, or BPO. Best for companies with active Japan operations." },
              { label: "Hybrid / Performance-Aligned", description: "In select cases, we can structure engagements with performance components. Contact us to discuss what might work for your situation." },
            ].map((model, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <p className="font-semibold text-white mb-3">{model.label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg">
              Discuss Your Engagement
            </Button>
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
