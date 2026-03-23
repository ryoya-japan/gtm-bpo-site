import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Large Typography Section */}
        <div className="py-20 border-b border-background/10">
          <p className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-balance max-w-4xl">
            Ready to explore
            <br />
            <span className="italic">the Japanese market?</span>
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-lg font-medium text-background/80 hover:text-background transition-colors group"
            >
              <span>Get in touch</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <p className="font-serif text-2xl tracking-tight mb-4">
              {siteConfig.name}
            </p>
            <p className="text-sm leading-relaxed text-background/60 max-w-xs">
              Your execution-oriented partner for entering and growing in the
              Japanese market.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/40 mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/40 mb-6">
              Services
            </p>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Market Research</li>
              <li>Go-to-Market Strategy</li>
              <li>Localization</li>
              <li>Partnerships</li>
              <li>Operations</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-background/40 mb-6">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-background/40">
            Japan Market Entry Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
