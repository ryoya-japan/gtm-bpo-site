import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  theme?: "dark" | "accent" | "light";
}

export function CTASection({
  title = "Ready to Enter the Japanese Market?",
  description = "Let's talk about your goals and build a plan that works for your business.",
  primaryCTA = { label: "Book a Call", href: "/contact" },
  secondaryCTA = { label: "Explore Services", href: "/services" },
  theme = "dark",
}: CTASectionProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`py-20 relative overflow-hidden ${
        isLight
          ? "bg-surface border-t border-[#1a2040]"
          : "bg-bg-secondary"
      }`}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      {/* Glow orb */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,45,85,0.08) 0%, transparent 70%)" }}
      />

      <Container>
        <div className="relative z-10 max-w-2xl">
          <h2
            className="font-heading font-bold leading-tight text-white mb-4"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>
          <p className="text-lg text-[#a0aec0] mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={primaryCTA.href} variant="primary" size="lg" className="btn-glow">
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary" size="lg">
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
