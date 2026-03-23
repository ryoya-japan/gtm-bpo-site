interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/10 text-accent"
      : "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${styles}`}>
      {children}
    </span>
  );
}
