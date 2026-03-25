import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Examples of Japan market entry engagements across consumer, SaaS, fintech, marketplace, and other categories.",
};

export default function CaseStudiesPage() {
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
        
        {/* Gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Case Studies</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Examples of what Japan market entry</span>
              <br />
              <span className="text-gradient">looks like in practice.</span>
            </h1>
            
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              The following case studies illustrate the types of engagements we
              run and the outcomes we work toward. Specific client details are
              kept confidential.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-5 bg-accent/10 border-y border-accent/20">
        <Container>
          <p className="text-sm text-foreground flex items-center gap-3">
            <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong className="text-accent">Note:</strong> Case studies are illustrative examples based on engagements we run. Client names and metrics have been anonymized.
            </span>
          </p>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container>
          <SectionHeader
            eyebrow="Engagements"
            title="Across categories, stages, and regions."
            description="From early-stage market validation to full-service launch execution and ongoing operations."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} compact={false} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to discuss your Japan expansion?"
        description="Tell us about your business and goals. We'll give you an honest read on how we can help."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
        theme="dark"
      />
    </>
  );
}
