"use client";
import { CaseStudy } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyCardProps {
  study: CaseStudy;
  compact?: boolean;
}

export function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-8 hover-lift hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <Badge variant="default">{study.category}</Badge>
            <p className="text-xs text-muted-foreground mt-2">{study.region}</p>
          </div>
          <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Sample
          </span>
        </div>

        <h3 className="font-serif text-xl text-card-foreground mb-4 tracking-tight">
          {study.client}
        </h3>

        <div className="mb-4">
          <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-2">
            Challenge
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
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-2">
                Support Provided
              </p>
              <ul className="space-y-1.5">
                {study.support.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-5 border-t border-border">
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-2">
                Outcome
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
