interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 flex items-center gap-2" style={align === "center" ? { justifyContent: "center" } : {}}>
          <span className="w-4 h-px bg-accent inline-block" />
          {eyebrow}
          <span className="w-4 h-px bg-accent inline-block" style={align === "center" ? {} : { display: "none" }} />
        </p>
      )}
      <h2
        className={`font-heading font-bold leading-tight ${light ? "text-gray-900" : "text-white"}`}
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${light ? "text-gray-600" : "text-[#a0aec0]"}`}
          style={align === "center" ? { margin: "1rem auto 0" } : {}}
        >
          {description}
        </p>
      )}
    </div>
  );
}
