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
      <section className="bg-foreground text-background pt-32 pb-20">
        <Container>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-6">
            Services
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl text-balance">
            Everything you need to launch and grow{" "}
            <span className="italic">in Japan.</span>
          </h1>
          <p className="mt-8 text-lg text-background/70 max-w-xl leading-relaxed">
            We provide end-to-end Japan market entry support — strategy through
            execution — so you don&apos;t have to piece together multiple
            agencies and advisors.
          </p>
        </Container>
      </section>

      <section className="py-32 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="Strategy. Execution. Operations."
            description="Each service is designed to address a specific challenge in entering the Japanese market. Engagements can include one service or many, depending on your needs."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} compact={false} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-muted">
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
