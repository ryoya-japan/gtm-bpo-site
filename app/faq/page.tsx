import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about working with us and entering the Japanese market.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-foreground text-background pt-32 pb-20">
        <Container>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6">
            FAQ
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl text-balance">
            Common questions,{" "}
            <span className="italic">answered directly.</span>
          </h1>
          <p className="mt-8 text-lg text-background/70 max-w-xl leading-relaxed">
            We&apos;ve compiled the questions we hear most from companies
            evaluating a Japan market entry. If you don&apos;t find what
            you&apos;re looking for, reach out directly.
          </p>
        </Container>
      </section>

      <section className="py-32 bg-background">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="What to know before reaching out."
          />
          <div className="mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="mt-16 p-8 bg-muted rounded-2xl">
            <p className="font-serif text-xl text-foreground mb-2">
              Have a different question?
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              We&apos;re happy to answer questions specific to your situation.
              Book a call or send us a message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
            >
              Contact us
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
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
