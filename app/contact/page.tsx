import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your Japan market entry goals. We'll respond within 1-2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-foreground text-background pt-32 pb-20">
        <Container>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6">
            Contact
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl text-balance">
            Let&apos;s talk about your{" "}
            <span className="italic">Japan goals.</span>
          </h1>
          <p className="mt-8 text-lg text-background/70 max-w-xl leading-relaxed">
            Fill in the form below and we&apos;ll get back to you within 1-2
            business days. Or email us directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-background underline underline-offset-4 hover:text-background/80 transition-colors"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="py-32 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Get in Touch"
                title="Tell us about your project."
                description="The more context you can give us about your business and Japan goals, the more useful our first conversation will be."
              />
              <div className="mt-12">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  What to include
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "A brief description of your product or service",
                    "Your current Japan market knowledge or prior activity",
                    "What you're trying to accomplish in Japan",
                    "Your approximate timeline and budget range",
                    "Any specific challenges or questions you have",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  What happens next
                </p>
                <ol className="space-y-4">
                  {[
                    "We review your inquiry and respond within 1-2 business days",
                    "We schedule an initial call (typically 30-45 minutes)",
                    "We provide an honest assessment and proposed next steps",
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-sm text-muted-foreground"
                    >
                      <span className="w-8 h-8 rounded-full border-2 border-accent text-accent text-xs font-serif flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-border pt-8">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Email us directly
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-accent font-medium hover:text-accent/80 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
