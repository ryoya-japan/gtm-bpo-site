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
          className={`text-xs font-medium tracking-[0.2em] uppercase mb-4 ${
            dark ? "text-accent-foreground/60" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance ${
          dark ? "text-accent-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed max-w-2xl ${
            dark ? "text-accent-foreground/70" : "text-muted-foreground"
          }`}
          style={align === "center" ? { margin: "1.5rem auto 0" } : {}}
        >
          {description}
        </p>
      )}
    </div>
  );
}
