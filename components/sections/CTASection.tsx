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
  const bg =
    theme === "accent"
      ? "bg-accent"
      : theme === "light"
      ? "bg-gray-50 border-t border-gray-200"
      : "bg-gray-950";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const subColor = theme === "light" ? "text-gray-600" : "text-gray-300";

  return (
    <section className={`py-20 ${bg}`}>
      <Container>
        <div className="max-w-2xl">
          <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${textColor}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg ${subColor}`}>{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="secondary"
                size="lg"
                className={theme !== "light" ? "border-gray-600 text-white hover:bg-gray-800 hover:text-white bg-transparent" : ""}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
