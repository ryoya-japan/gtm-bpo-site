import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service Japan market entry support — from research and GTM strategy to localization, partnerships, e-commerce, and operations.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block">
          <span className="jp-deco" aria-hidden="true" style={{ fontSize: "140px", opacity: 0.04 }}>サービス</span>
        </div>
        <Container>
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              Services
            </p>
            <h1
              className="font-heading font-black text-white leading-tight max-w-2xl mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
            >
              Everything you need to launch and grow in Japan.
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-xl leading-relaxed">
              We provide end-to-end Japan market entry support — strategy through execution — so you don&apos;t have to piece together multiple agencies and advisors.
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Services Grid */}
      <section className="py-24 bg-bg-primary">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="Strategy. Execution. Operations."
            description="Each service is designed to address a specific challenge in entering the Japanese market. Engagements can include one service or many, depending on your needs."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} compact={false} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Note */}
      <section className="py-16 bg-surface-dark">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Important Note"
            title="Not a package. A partnership."
            description="We don't offer fixed service packages. Every engagement is scoped based on what your business actually needs to succeed in Japan — whether that's one service or a combination of several. Our goal is to build a plan that fits your stage, your budget, and your timeline."
            align="center"
          />
        </Container>
      </section>

      <CTASection
        title="Tell us what you need."
        description="Let's talk about your Japan goals and build the right scope together."
        primaryCTA={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: "See How We Work", href: "/how-we-work" }}
      />
    </>
  );
}
