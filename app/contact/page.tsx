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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Contact</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Let&apos;s talk about your</span>
              <br />
              <span className="text-gradient">Japan goals.</span>
            </h1>
            
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Fill in the form below and we&apos;ll get back to you within 1-2
              business days. Or email us directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:underline transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
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
            <div className="space-y-8">
              <div className="bg-muted rounded-2xl p-6 border border-border">
                <p className="text-xs font-mono tracking-widest uppercase text-accent mb-5">
                  // What to include
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
              
              <div className="bg-muted rounded-2xl p-6 border border-border">
                <p className="text-xs font-mono tracking-widest uppercase text-accent mb-5">
                  // What happens next
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
                      <span className="w-8 h-8 rounded-lg border border-accent/30 bg-card text-accent text-xs font-mono flex items-center justify-center flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="bg-muted rounded-2xl p-6 border border-border">
                <p className="text-xs font-mono tracking-widest uppercase text-accent mb-3">
                  // Direct contact
                </p>
                <p className="text-sm text-foreground font-medium mb-2">{siteConfig.contact.name}</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-accent hover:text-secondary transition-colors anime-underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
