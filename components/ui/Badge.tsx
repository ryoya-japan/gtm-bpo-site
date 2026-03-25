interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/20 text-accent border-accent/30"
      : "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={`inline-block text-[10px] font-mono tracking-wide px-3 py-1.5 rounded-lg border ${styles}`}
    >
      {children}
    </span>
  );
}
