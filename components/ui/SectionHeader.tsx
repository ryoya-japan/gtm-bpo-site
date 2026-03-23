interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl" style={align === "center" ? { margin: "1rem auto 0" } : {}}>
          {description}
        </p>
      )}
    </div>
  );
}
