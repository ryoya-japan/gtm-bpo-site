import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-[#1a2040] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

      {/* Decorative JP text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
        <span className="jp-deco" style={{ fontSize: "200px", opacity: 0.025 }}>日本</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand col */}
          <div>
            <div className="mb-4">
              <p
                className="font-heading font-bold text-3xl text-white mb-0.5"
                style={{ letterSpacing: "-0.04em" }}
              >
                {siteConfig.name}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#a0aec0]">
                Go-To Japan — by {siteConfig.company}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[#a0aec0] max-w-xs mb-4">
              Your execution-oriented partner for entering and growing in the Japanese market.
            </p>
            <div className="space-y-1">
              <p className="text-xs text-[#a0aec0] uppercase tracking-widest font-semibold">Contact</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-accent hover:text-accent-light transition-colors font-medium"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-2">
              <p className="text-xs text-[#a0aec0]">{siteConfig.contactPerson}</p>
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <p className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0aec0] hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col */}
          <div>
            <p className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Services</p>
            <ul className="space-y-2 text-sm text-[#a0aec0]">
              {[
                "Market Research",
                "Go-to-Market Strategy",
                "Localization",
                "Partnerships & BD",
                "E-commerce & Retail",
                "Operations & BPO",
                "Launch Execution",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#a0aec0]">
            © {new Date().getFullYear()} {siteConfig.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hud-badge">
              <span className="dot" />
              Market: Japan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
