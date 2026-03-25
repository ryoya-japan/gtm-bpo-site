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
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Go To Japan`,
  description: siteConfig.description,
};

const stats = [
  { value: "50+", label: "Projects Launched" },
  { value: "12", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Avg. Growth Rate" },
];

const whyJapanPoints = [
  {
    title: "Third-largest economy globally",
    description:
      "Japan offers massive commercial opportunity across consumer, B2B, and digital categories — with a sophisticated, loyal buyer base.",
  },
  {
    title: "Notoriously hard to enter alone",
    description:
      "Language barriers, cultural nuance, local business norms, and complex distribution make Japan one of the most challenging markets.",
  },
  {
    title: "Most overseas launches fail",
    description:
      "Companies often underestimate what Japan requires: deep local execution from partnerships to product localization.",
  },
];

const differentiators = [
  {
    icon: "01",
    title: "Strategy + Execution",
    description: "We don't just build slide decks. We execute from research to launch to scale.",
  },
  {
    icon: "02",
    title: "English-first, Japan-native",
    description: "You communicate in English. We handle Japanese business complexity.",
  },
  {
    icon: "03",
    title: "Flexible Models",
    description: "Pilot-based, project-based, retainer — we adapt to your stage and budget.",
  },
  {
    icon: "04",
    title: "Real Network",
    description: "Partnerships and introductions from real relationships built in Japan.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "Direct conversation about your business and Japan ambitions. No sales deck — just honest assessment.",
  },
  {
    title: "Market Hypothesis",
    description: "We develop a clear hypothesis for how your product fits Japan and define the right engagement scope.",
  },
  {
    title: "Pilot Design",
    description: "Structured pilot to generate real market signal. Clear objectives, timeline, and success criteria.",
  },
  {
    title: "Local Execution",
    description: "Research, partnerships, localization, GTM, operations — whatever your plan needs.",
  },
  {
    title: "Scale",
    description: "Based on learnings, we refine and support your path to sustainable growth in Japan.",
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
  "Brand Strategy",
];

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating elements */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-accent rounded-full float animate-float" />
        <div className="absolute top-1/2 right-32 w-2 h-2 bg-secondary rounded-full float-delay-1 animate-float" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full float-delay-2 animate-float" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Japan Market Entry Partner</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Go To</span>
              <br />
              <span className="text-gradient glitch" data-text="Japan.">Japan.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mt-8 max-w-2xl">
              We help overseas companies enter the Japanese market through local strategy, execution, partnerships, and go-to-market support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button href="/contact" size="lg">
                Start Your Journey
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/services" size="lg" variant="secondary">
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform origin-left">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Scrolling Marquee */}
      <section className="border-y border-border py-6 overflow-hidden bg-card">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-mono tracking-wide text-muted-foreground flex items-center gap-8"
            >
              {item}
              <span className="w-2 h-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </section>

      {/* Why Japan Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader
                eyebrow="The Japan Opportunity"
                title="The world's third-largest market. Not the easiest to crack."
                description="Japan is a premium market with deep brand loyalty, strong purchasing power, and unique local dynamics."
              />
              <div className="mt-12 space-y-6">
                {whyJapanPoints.map((point, i) => (
                  <div key={i} className="group flex gap-5 p-5 rounded-xl border border-transparent hover:border-accent/30 hover:bg-card transition-all duration-300 card-hover">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                      <span className="font-mono text-sm text-accent group-hover:text-accent-foreground transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-2">
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
            
            <div className="relative">
              <div className="sticky top-32">
                <div className="relative bg-card rounded-2xl p-8 border border-border pixel-corners">
                  <p className="text-xs font-mono tracking-widest uppercase text-accent mb-8">
                    // Common Mistakes
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Entering with a home-market playbook",
                      "Underestimating cultural nuance",
                      "Lacking local relationships",
                      "No local execution infrastructure",
                      "Moving too slow — or too fast",
                      "Treating Japan as homogeneous",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-sm text-muted-foreground group hover:text-foreground transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
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
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-32 bg-card relative">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        <Container className="relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="What We Do"
              title="From market research to live operations."
              description="Full range of capabilities for entering and growing in Japan."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-secondary transition-colors group whitespace-nowrap anime-underline"
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

      {/* Why Us */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
        
        <Container className="relative">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="More than advice. We do the work."
            description="Most Japan market advisors stop at strategy. We continue through execution — providing local presence, relationships, and operational support."
            align="center"
          />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-500 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all">
                  <span className="font-mono text-lg text-accent group-hover:text-accent-foreground transition-colors">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
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

      {/* Process */}
      <section className="py-32 bg-card">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader
                eyebrow="How We Work"
                title="A structured process. Practical and fast."
                description="From first contact to defined plan in 2-3 weeks."
              />
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-secondary transition-colors group mt-10 anime-underline"
              >
                Learn how we work
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
            <div className="space-y-1">
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

      {/* Case Studies */}
      <section className="py-32 relative">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="Case Studies"
              title="Examples of work we do."
              description="Sample engagements across categories. Real client details are confidential."
            />
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-secondary transition-colors group whitespace-nowrap anime-underline"
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

      {/* Engagement Models */}
      <section className="py-32 bg-accent relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <Container className="relative">
          <SectionHeader
            eyebrow="Engagement Models"
            title="Flexible structures for your stage."
            description="No single model fits every company. We offer flexible structures aligned with your goals."
            align="center"
            dark
          />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Pilot-Based",
                description: "Time-bounded engagement for market signal before full investment.",
              },
              {
                label: "Project-Based",
                description: "Defined scope with clear deliverables — research, GTM, partnerships.",
              },
              {
                label: "Retainer",
                description: "Ongoing monthly support across GTM, operations, and partnerships.",
              },
              {
                label: "Hybrid",
                description: "Performance-aligned structures for select cases. Let's discuss.",
              },
            ].map((model, i) => (
              <div
                key={i}
                className="group bg-accent-foreground/5 backdrop-blur-sm border border-accent-foreground/10 rounded-2xl p-6 hover:bg-accent-foreground/10 transition-all duration-300"
              >
                <p className="font-display text-xl font-semibold text-accent-foreground mb-3">
                  {model.label}
                </p>
                <p className="text-accent-foreground/70 text-sm leading-relaxed">
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
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
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
        theme="dark"
      />
    </>
  );
}
