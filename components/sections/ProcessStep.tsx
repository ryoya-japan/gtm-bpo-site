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
    <div className="relative flex gap-8 group">
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full border-2 border-accent bg-background flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
          <span className="font-serif text-xl text-accent group-hover:text-accent-foreground transition-colors">
            {number}
          </span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-4" style={{ minHeight: "2rem" }} />
        )}
      </div>
      <div className="pb-12">
        <h3 className="font-serif text-xl text-foreground mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
