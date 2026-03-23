import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-bold text-lg text-white mb-3">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Your execution-oriented partner for entering and growing in the Japanese market.
            </p>
            <p className="mt-4 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</p>
            <ul className="space-y-2 text-sm">
              <li>Market Research</li>
              <li>Go-to-Market Strategy</li>
              <li>Localization</li>
              <li>Partnerships &amp; BD</li>
              <li>E-commerce &amp; Retail</li>
              <li>Operations &amp; BPO</li>
              <li>Launch Execution</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Japan Market Entry Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
