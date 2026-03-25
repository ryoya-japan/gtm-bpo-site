"use client";
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
      : "bg-card";

  const textClass = theme === "accent" ? "text-accent-foreground" : "text-foreground";
  const subClass = theme === "accent" ? "text-accent-foreground/70" : "text-muted-foreground";

  return (
    <section className={`py-32 ${bgClass} relative overflow-hidden`}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {theme !== "accent" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      )}
      
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6">
            // Let&apos;s connect
          </p>
          <h2
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance ${textClass}`}
          >
            {title}
          </h2>
          <p className={`mt-6 text-lg leading-relaxed max-w-xl mx-auto ${subClass}`}>
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={primaryCTA.href}
              variant={theme === "accent" ? "outline" : "primary"}
              size="lg"
              className={
                theme === "accent"
                  ? "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                  : ""
              }
            >
              {primaryCTA.label}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="ghost"
                size="lg"
                className={
                  theme === "accent"
                    ? "text-accent-foreground/70 hover:text-accent-foreground hover:bg-accent-foreground/10"
                    : "text-muted-foreground hover:text-foreground"
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
