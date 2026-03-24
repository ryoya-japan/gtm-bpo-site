import { Service } from "@/content/services";

const serviceNumbers: Record<string, string> = {
  search: "01",
  map: "02",
  globe: "03",
  handshake: "04",
  megaphone: "05",
  shopping: "06",
  settings: "07",
  rocket: "08",
};

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
  index?: number;
}

export function ServiceCard({ service, compact = false, index = 0 }: ServiceCardProps) {
  const num = serviceNumbers[service.icon] || `0${index + 1}`;

  return (
    <div className="card-dark corner-brackets rounded-xl p-6 group">
      {/* Accent top bar */}
      <div className="h-px bg-gradient-to-r from-accent to-transparent mb-6" />

      <div className="flex items-start gap-4 mb-4">
        {/* Game-style number */}
        <div className="flex-shrink-0">
          <span className="step-number">{num}</span>
        </div>
        <div className="flex-1 min-w-0 pt-2">
          {/* Badge tag */}
          <span className="inline-block text-xs font-semibold px-2 py-0.5 border border-accent/30 text-accent bg-accent/5 rounded-sm mb-2 tracking-wide uppercase">
            {service.icon}
          </span>
          <h3
            className="font-heading font-bold text-white leading-snug"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", letterSpacing: "-0.02em" }}
          >
            {service.title}
          </h3>
        </div>
      </div>

      <p className="text-[#a0aec0] text-sm leading-relaxed">
        {compact ? service.description.slice(0, 120) + "..." : service.description}
      </p>

      {!compact && service.outcomes.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-[#1a2040] pt-5">
          {service.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#a0aec0]">
              <span className="text-cyan mt-0.5 flex-shrink-0 font-bold">›</span>
              {outcome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
