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
      <section className="bg-gray-950 text-white py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-5">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Everything you need to launch and grow in Japan.
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            We provide end-to-end Japan market entry support — strategy through execution — so you don&apos;t have to piece together multiple agencies and advisors.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="Strategy. Execution. Operations."
            description="Each service is designed to address a specific challenge in entering the Japanese market. Engagements can include one service or many, depending on your needs."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} compact={false} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
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
