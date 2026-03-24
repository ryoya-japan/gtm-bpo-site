interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan" | "gold";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles: Record<string, string> = {
    default: "border border-[#1a2040] text-[#a0aec0] bg-surface",
    accent: "border border-accent/40 text-accent bg-accent/10",
    cyan: "border border-cyan/40 text-cyan bg-cyan/10",
    gold: "border border-gold/40 text-gold bg-gold/10",
  };
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-sm tracking-wide ${styles[variant]}`}
      style={{ letterSpacing: "0.05em" }}
    >
      {children}
    </span>
  );
}
