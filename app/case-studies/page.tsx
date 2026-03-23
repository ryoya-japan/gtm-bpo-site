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
      <section className="bg-gray-950 text-white py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Examples of what Japan market entry looks like in practice.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            The following case studies illustrate the types of engagements we run and the outcomes we work toward. Specific client details are kept confidential.
          </p>
        </Container>
      </section>

      <section className="py-8 bg-amber-50 border-b border-amber-100">
        <Container>
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> The case studies below are illustrative examples based on the types of engagements we run. Client names and specific metrics have been anonymized or generalized. Content marked &quot;Sample&quot; should be replaced with real case study data when available.
          </p>
        </Container>
      </section>

      <section className="py-24">
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
