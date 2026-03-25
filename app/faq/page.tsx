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
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">FAQ</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Common questions,</span>
              <br />
              <span className="text-gradient">answered directly.</span>
            </h1>
            
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We&apos;ve compiled the questions we hear most from companies
              evaluating a Japan market entry. If you don&apos;t find what
              you&apos;re looking for, reach out directly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="What to know before reaching out."
          />
          <div className="mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="mt-16 p-8 bg-muted rounded-2xl border border-border pixel-corners">
            <p className="font-display font-semibold text-xl text-foreground mb-2">
              Have a different question?
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              We&apos;re happy to answer questions specific to your situation.
              Book a call or send us a message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-secondary transition-colors group anime-underline"
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
        theme="dark"
      />
    </>
  );
}
