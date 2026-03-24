import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with us and entering the Japanese market.",
};

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,214,10,0.05) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block">
          <span className="jp-deco" aria-hidden="true" style={{ fontSize: "140px", opacity: 0.04 }}>質問</span>
        </div>
        <Container>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              FAQ
            </p>
            <h1
              className="font-heading font-black text-white leading-tight max-w-2xl mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
            >
              Common questions, answered directly.
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-xl leading-relaxed">
              We&apos;ve compiled the questions we hear most from companies evaluating a Japan market entry. If you don&apos;t find what you&apos;re looking for, reach out directly.
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section className="py-24 bg-bg-primary">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="What to know before reaching out."
          />
          <div className="mt-10">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="mt-12 card-dark corner-brackets-cyan rounded-xl p-6">
            <p className="font-heading font-bold text-white mb-1" style={{ letterSpacing: "-0.01em" }}>Have a different question?</p>
            <p className="text-sm text-[#a0aec0] mb-4">
              We&apos;re happy to answer questions specific to your situation. Book a call or send us a message.
            </p>
            <div className="flex gap-3">
              <a href="/contact" className="text-sm font-semibold text-accent hover:text-accent-light transition-colors">Contact us →</a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Still have questions?"
        description="Let's have a direct conversation. We're happy to talk through your situation without obligation."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
        theme="light"
      />
    </>
  );
}
