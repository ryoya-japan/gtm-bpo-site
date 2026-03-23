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
      <section className="bg-gray-950 text-white py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Let&apos;s talk about your Japan goals.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            Fill in the form below and we&apos;ll get back to you within 1–2 business days. Or email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="py-24">
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">What to include</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "A brief description of your product or service",
                    "Your current Japan market knowledge or prior activity",
                    "What you're trying to accomplish in Japan",
                    "Your approximate timeline and budget range",
                    "Any specific challenges or questions you have",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">What happens next</p>
                <ol className="space-y-3">
                  {[
                    "We review your inquiry and respond within 1–2 business days",
                    "We schedule an initial call (typically 30–45 minutes)",
                    "We provide an honest assessment and proposed next steps",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Email us directly</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-accent font-medium hover:underline">
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
