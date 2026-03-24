import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Examples of Japan market entry engagements across consumer, SaaS, fintech, marketplace, and other categories.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block">
          <span className="jp-deco" aria-hidden="true" style={{ fontSize: "140px", opacity: 0.04 }}>実績</span>
        </div>
        <Container>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              Case Studies
            </p>
            <h1
              className="font-heading font-black text-white leading-tight max-w-2xl mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
            >
              Examples of what Japan market entry looks like in practice.
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-xl leading-relaxed">
              The following case studies illustrate the types of engagements we run and the outcomes we work toward. Specific client details are kept confidential.
            </p>
          </div>
        </Container>
      </section>

      {/* Note banner */}
      <section className="py-5 bg-surface border-y border-gold/20">
        <Container>
          <p className="text-sm text-gold/80">
            <strong className="text-gold">Note:</strong> The case studies below are illustrative examples based on the types of engagements we run. Client names and specific metrics have been anonymized or generalized. Content marked &quot;SAMPLE&quot; should be replaced with real case study data when available.
          </p>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Case Studies Grid */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <SectionHeader
            eyebrow="Engagements"
            title="Across categories, stages, and regions."
            description="From early-stage market validation to full-service launch execution and ongoing operations, we work with companies at different stages of their Japan journey."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        theme="light"
      />
    </>
  );
}
