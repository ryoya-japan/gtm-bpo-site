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
  const bgClass =
    theme === "accent"
      ? "bg-accent"
      : theme === "light"
      ? "bg-muted"
      : "bg-foreground";

  const textClass = theme === "light" ? "text-foreground" : "text-background";
  const subClass =
    theme === "light" ? "text-muted-foreground" : "text-background/70";

  return (
    <section className={`py-24 ${bgClass}`}>
      <Container>
        <div className="max-w-3xl">
          <h2
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance ${textClass}`}
          >
            {title}
          </h2>
          <p className={`mt-6 text-lg leading-relaxed ${subClass}`}>
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              href={primaryCTA.href}
              variant={theme === "light" ? "primary" : "outline"}
              size="lg"
              className={
                theme !== "light"
                  ? "border-background text-background hover:bg-background hover:text-foreground"
                  : ""
              }
            >
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="ghost"
                size="lg"
                className={
                  theme !== "light"
                    ? "text-background/70 hover:text-background hover:bg-background/10"
                    : ""
                }
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
