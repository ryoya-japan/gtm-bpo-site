import { CaseStudy } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyCardProps {
  study: CaseStudy;
  compact?: boolean;
}

export function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  return (
    <div className="card-dark corner-brackets-cyan rounded-xl p-6 group">
      {/* Accent top bar — cyan */}
      <div className="h-px bg-gradient-to-r from-cyan to-transparent mb-5" />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <Badge variant="cyan">{study.category}</Badge>
          <p className="text-xs text-[#a0aec0]">{study.region}</p>
        </div>
        <span className="text-xs text-[#a0aec0] border border-[#1a2040] px-2 py-1 rounded-sm whitespace-nowrap font-mono">
          SAMPLE
        </span>
      </div>

      <h3
        className="font-heading font-bold text-white mb-3 leading-snug"
        style={{ fontSize: "clamp(15px, 2vw, 18px)", letterSpacing: "-0.02em" }}
      >
        {study.client}
      </h3>

      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1.5">Challenge</p>
        <p className="text-sm text-[#a0aec0] leading-relaxed">
          {compact ? study.challenge.slice(0, 100) + "..." : study.challenge}
        </p>
      </div>

      {!compact && (
        <>
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1.5">Support Provided</p>
            <ul className="space-y-1">
              {study.support.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#a0aec0]">
                  <span className="text-cyan mt-0.5 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-[#1a2040]">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1.5">Outcome</p>
            <p className="text-sm text-white font-medium">{study.outcome}</p>
          </div>
        </>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <Badge key={tag} variant="default">{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
