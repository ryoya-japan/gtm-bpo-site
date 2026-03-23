import { Metadata } from "next";
import Link from "next/link";
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
  description:
    "We help overseas companies enter the Japanese market through local strategy, execution, partnerships, operations, and go-to-market support.",
};

const whyJapanPoints = [
  {
    title: "The third-largest economy in the world",
    description:
      "Japan offers massive commercial opportunity across consumer, B2B, and digital categories — with a sophisticated, loyal buyer base.",
  },
  {
    title: "But notoriously hard to enter alone",
    description:
      "Language barriers, cultural nuance, local business norms, and complex distribution structures make Japan one of the most challenging markets to navigate without local expertise.",
  },
  {
    title: "Most overseas launches fail quietly",
    description:
      "Companies often underestimate what Japan requires: not just translation, but deep local execution — from partnerships to product localization to channel relationships built over time.",
  },
];

const differentiators = [
  {
    title: "Strategy and execution in one place",
    description:
      "We don't just build slide decks. We execute. From research to launch to scale, we're on the ground making it happen.",
  },
  {
    title: "English-first communication, Japan-native execution",
    description:
      "You communicate with us in English. We handle the complexity of Japanese business culture and communication on your behalf.",
  },
  {
    title: "Flexible engagement models",
    description:
      "Pilot-based, project-based, retainer — or hybrid. We adapt to your stage, budget, and risk tolerance.",
  },
  {
    title: "Genuine local network",
    description:
      "Partnerships, introductions, and market access come from real relationships built in Japan — not a contact list.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "We start with a direct conversation about your business, your Japan ambitions, and what success looks like. No sales deck — just an honest assessment of where you are and what you need.",
  },
  {
    title: "Market Hypothesis & Scoping",
    description:
      "We develop a clear hypothesis for how your product or service fits the Japan market, and define the right scope for the engagement — pilot, project, or full entry support.",
  },
  {
    title: "Pilot Design",
    description:
      "For most companies, we start with a structured pilot designed to generate real market signal quickly. We define objectives, timeline, and success criteria upfront.",
  },
  {
    title: "Local Execution",
    description:
      "We execute. Research, partnerships, localization, GTM, operations — whichever services are relevant to your plan, we handle them with local knowledge and accountability.",
  },
  {
    title: "Optimization & Scale",
    description:
      "Based on what we learn, we refine the approach and support your path to scale — whether that means expanding the engagement or transitioning to a sustainable local structure.",
  },
];

const marqueeItems = [
  "Market Research",
  "Go-to-Market Strategy",
  "Localization",
  "Partnerships & BD",
  "E-commerce & Retail",
  "Operations & BPO",
  "Launch Execution",
];

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-background pt-20 pb-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 animate-fade-in">
                Japan Market Entry Partner
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground animate-fade-in-up">
                Launch and grow in Japan —{" "}
                <span className="italic">without starting from zero.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mt-8 max-w-xl animate-fade-in-up">
                We help overseas companies enter the Japanese market through
                local strategy, execution, partnerships, operations, and
                go-to-market support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up">
                <Button href="/contact" size="lg">
                  Book a Call
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 border-2 border-accent/20 rounded-3xl transform rotate-3" />
                <div className="absolute inset-4 border-2 border-accent/10 rounded-2xl transform -rotate-2" />
                <div className="absolute inset-8 bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-serif text-8xl text-accent/20">JP</p>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">
                      Your Gateway to Japan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Scrolling Marquee */}
      <section className="border-y border-border py-6 overflow-hidden bg-muted">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-medium tracking-wide text-muted-foreground flex items-center gap-8"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-16 bg-background">
        <Container>
          <p className="text-sm text-muted-foreground text-center">
            Helping companies from the{" "}
            <span className="font-medium text-foreground">
              US, Europe, UK, Southeast Asia, Middle East & Australia
            </span>{" "}
            build traction in Japan
          </p>
        </Container>
      </section>

      {/* Why Japan is hard */}
      <section className="py-32 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader
                eyebrow="The Japan Opportunity"
                title="The world's third-largest market. But not the easiest one to crack."
                description="Japan is a premium market with deep brand loyalty, strong purchasing power, and unique local dynamics. The opportunity is real — but so is the complexity."
              />
              <div className="mt-12 space-y-8">
                {whyJapanPoints.map((point, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <span className="font-serif text-sm text-accent group-hover:text-accent-foreground transition-colors">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">
                        {point.title}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-3xl p-10 lg:p-12">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
                Why companies struggle
              </p>
              <ul className="space-y-5">
                {[
                  "Entering with a home-market playbook that doesn't translate",
                  "Underestimating cultural and communication nuance",
                  "Lacking local relationships and channel access",
                  "No local execution infrastructure or team",
                  "Going too slow — or too fast — for the market",
                  "Treating Japan as one homogeneous audience",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm text-foreground"
                  >
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
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
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-32 bg-muted">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="What We Do"
              title="From market research to live operations."
              description="We provide the full range of capabilities needed to enter and grow in Japan — strategy, execution, and everything in between."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group whitespace-nowrap"
            >
              View all services
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-32 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Why Work With Us"
            title="More than advice. We do the work."
            description="Most Japan market advisors stop at strategy. We continue through execution — providing the local presence, relationships, and operational support your business actually needs."
            align="center"
          />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group text-center lg:text-left"
              >
                <div className="w-full h-px bg-accent mb-8 transform origin-left group-hover:scale-x-110 transition-transform duration-300" />
                <h3 className="font-serif text-lg text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process snapshot */}
      <section className="py-32 bg-muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader
                eyebrow="How We Work"
                title="A structured process. Practical and fast."
                description="We move quickly from conversation to scoped engagement. Most clients go from first contact to a defined plan in two to three weeks."
              />
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group mt-10"
              >
                Learn how we work
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
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
      <section className="py-32 bg-background">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="Case Studies"
              title="Examples of work we do."
              description="Sample engagements across categories and markets. Content is illustrative — real client details are kept confidential."
            />
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group whitespace-nowrap"
            >
              View all cases
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement models */}
      <section className="py-32 bg-foreground text-background">
        <Container>
          <SectionHeader
            eyebrow="Engagement Models"
            title="Flexible structures built around your stage."
            description="There's no single model that fits every company entering Japan. We offer flexible structures that align with your goals, budget, and risk tolerance."
            align="center"
            dark
          />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Pilot-Based",
                description:
                  "A time-bounded, scoped engagement designed to generate market signal before full investment. Ideal for early-stage evaluation.",
              },
              {
                label: "Project-Based",
                description:
                  "A defined project scope with clear deliverables — market research, GTM plan, partnership development, launch execution, etc.",
              },
              {
                label: "Retainer",
                description:
                  "Ongoing monthly support across GTM, operations, partnerships, or BPO. Best for companies with active Japan operations.",
              },
              {
                label: "Hybrid / Performance-Aligned",
                description:
                  "In select cases, we can structure engagements with performance components. Contact us to discuss what might work for your situation.",
              },
            ].map((model, i) => (
              <div
                key={i}
                className="group bg-background/5 border border-background/10 rounded-2xl p-8 hover:bg-background/10 transition-all duration-300"
              >
                <p className="font-serif text-xl text-background mb-4 tracking-tight">
                  {model.label}
                </p>
                <p className="text-background/60 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button
              href="/contact"
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
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
