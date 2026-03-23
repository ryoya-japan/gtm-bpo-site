import { CaseStudy } from "@/content/caseStudies";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyCardProps {
  study: CaseStudy;
  compact?: boolean;
}

export function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <Badge variant="default">{study.category}</Badge>
          <p className="text-xs text-gray-500 mt-1">{study.region}</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
          Sample
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 text-lg mb-3">{study.client}</h3>
      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Challenge</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {compact ? study.challenge.slice(0, 100) + "..." : study.challenge}
        </p>
      </div>
      {!compact && (
        <>
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Support Provided</p>
            <ul className="space-y-1">
              {study.support.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Outcome</p>
            <p className="text-sm text-gray-700 font-medium">{study.outcome}</p>
          </div>
        </>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
