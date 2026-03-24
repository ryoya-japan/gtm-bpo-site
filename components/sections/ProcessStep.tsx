interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  const numStr = number < 10 ? `0${number}` : `${number}`;

  return (
    <div className="relative flex gap-5">
      {/* Number + connector line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 flex items-center justify-center font-heading font-black text-accent text-sm border border-accent/50 rounded-sm bg-accent/5 flex-shrink-0"
          style={{ letterSpacing: "-0.02em" }}
        >
          {numStr}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(to bottom, rgba(255,45,85,0.3), rgba(26,32,64,0.3))", minHeight: "2rem" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 pt-1">
        <h3
          className="font-heading font-bold text-white mb-2 leading-snug"
          style={{ fontSize: "clamp(15px, 2vw, 18px)", letterSpacing: "-0.02em" }}
        >
          {title}
        </h3>
        <p className="text-[#a0aec0] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
