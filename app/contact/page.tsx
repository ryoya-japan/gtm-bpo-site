import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your Japan market entry goals. We'll respond within 1-2 business days.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,45,85,0.07) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block">
          <span className="jp-deco" aria-hidden="true" style={{ fontSize: "140px", opacity: 0.04 }}>連絡</span>
        </div>
        <Container>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              Contact
            </p>
            <h1
              className="font-heading font-black text-white leading-tight max-w-2xl mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
            >
              Let&apos;s talk about your Japan goals.
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-xl leading-relaxed">
              Fill in the form below and we&apos;ll get back to you within 1–2 business days. Or email us directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-light transition-colors font-medium">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Form Section */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Get in Touch"
                title="Tell us about your project."
                description="The more context you can give us about your business and Japan goals, the more useful our first conversation will be."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              {/* What to include */}
              <div className="card-dark corner-brackets rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What to include</p>
                <ul className="space-y-2 text-sm text-[#a0aec0]">
                  {[
                    "A brief description of your product or service",
                    "Your current Japan market knowledge or prior activity",
                    "What you're trying to accomplish in Japan",
                    "Your approximate timeline and budget range",
                    "Any specific challenges or questions you have",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan mt-0.5 flex-shrink-0 font-bold">›</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What happens next */}
              <div className="card-dark corner-brackets-cyan rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">What happens next</p>
                <ol className="space-y-4">
                  {[
                    "We review your inquiry and respond within 1–2 business days",
                    "We schedule an initial call (typically 30–45 minutes)",
                    "We provide an honest assessment and proposed next steps",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#a0aec0]">
                      <span
                        className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/40 text-accent font-heading font-black text-xs"
                        style={{ borderRadius: "2px" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct email */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#a0aec0] mb-2">Email us directly</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-accent font-medium hover:text-accent-light transition-colors">
                  {siteConfig.email}
                </a>
                <p className="text-xs text-[#a0aec0] mt-1">{siteConfig.contactPerson} — {siteConfig.company}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
