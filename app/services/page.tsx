import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service Japan market entry support — from research and GTM strategy to localization, partnerships, e-commerce, and operations.",
};

export default function ServicesPage() {
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Services</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Everything you need to launch and grow</span>
              <br />
              <span className="text-gradient">in Japan.</span>
            </h1>
            
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We provide end-to-end Japan market entry support — strategy through
              execution — so you don&apos;t have to piece together multiple
              agencies and advisors.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="Strategy. Execution. Operations."
            description="Each service addresses a specific challenge in entering the Japanese market. Engagements can include one service or many."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} compact={false} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5" />
        
        <Container size="narrow" className="relative">
          <div className="bg-card border border-border rounded-2xl p-10 text-center pixel-corners">
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-4">
              // Important Note
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Not a package. A partnership.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t offer fixed service packages. Every engagement is scoped based on what your business actually needs to succeed in Japan — whether that&apos;s one service or a combination of several.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Tell us what you need."
        description="Let's talk about your Japan goals and build the right scope together."
        primaryCTA={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: "See How We Work", href: "/how-we-work" }}
        theme="dark"
      />
    </>
  );
}
