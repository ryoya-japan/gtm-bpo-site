"use client";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6 group">
      <div className="flex flex-col items-center">
        <div className="relative w-12 h-12 rounded-xl border-2 border-accent/30 bg-card flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)] transition-all duration-500">
          <span className="font-mono text-sm text-accent group-hover:text-accent-foreground transition-colors">
            {String(number).padStart(2, '0')}
          </span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-accent/50 to-transparent mt-3" style={{ minHeight: "2rem" }} />
        )}
      </div>
      <div className="pb-10">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
