interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-mono tracking-widest uppercase mb-4 ${
            dark ? "text-secondary" : "text-accent"
          }`}
        >
          // {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-balance ${
          dark ? "text-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed max-w-2xl ${
            dark ? "text-muted-foreground" : "text-muted-foreground"
          }`}
          style={align === "center" ? { margin: "1.5rem auto 0" } : {}}
        >
          {description}
        </p>
      )}
    </div>
  );
}
