"use client";
import { CaseStudy } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyCardProps {
  study: CaseStudy;
  compact?: boolean;
}

export function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 card-hover hover:border-accent/50 overflow-hidden">
      {/* Decorative corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <Badge variant="default">{study.category}</Badge>
            <p className="text-xs text-muted-foreground mt-2 font-mono">{study.region}</p>
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
            Sample
          </span>
        </div>

        <h3 className="font-display font-semibold text-xl text-card-foreground mb-4 tracking-tight">
          {study.client}
        </h3>

        <div className="mb-4">
          <p className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">
            // Challenge
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {compact
              ? study.challenge.slice(0, 100) + "..."
              : study.challenge}
          </p>
        </div>

        {!compact && (
          <>
            <div className="mb-4">
              <p className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">
                // Support
              </p>
              <ul className="space-y-1.5">
                {study.support.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-5 border-t border-border">
              <p className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">
                // Outcome
              </p>
              <p className="text-sm text-foreground font-medium">
                {study.outcome}
              </p>
            </div>
          </>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
