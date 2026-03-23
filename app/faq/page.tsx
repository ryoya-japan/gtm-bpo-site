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
      <section className="bg-gray-950 text-white py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Common questions, answered directly.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            We&apos;ve compiled the questions we hear most from companies evaluating a Japan market entry. If you don&apos;t find what you&apos;re looking for, reach out directly.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="What to know before reaching out."
          />
          <div className="mt-10">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="font-semibold text-gray-900 mb-1">Have a different question?</p>
            <p className="text-sm text-gray-600 mb-4">
              We&apos;re happy to answer questions specific to your situation. Book a call or send us a message.
            </p>
            <div className="flex gap-3">
              <a href="/contact" className="text-sm font-medium text-accent hover:underline">Contact us →</a>
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
