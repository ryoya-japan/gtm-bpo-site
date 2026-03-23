interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/10 text-accent"
      : "bg-muted text-muted-foreground";
  return (
    <span
      className={`inline-block text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full ${styles}`}
    >
      {children}
    </span>
  );
}
