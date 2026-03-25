"use client";
import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative bg-card overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-24 border-b border-border/50">
          <div className="max-w-3xl">
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6">
              // Ready to start?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">Your Japan journey</span>
              <br />
              <span className="text-gradient">starts here.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Join startups from around the world who trusted us to launch in Japan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg neon-box hover:scale-105 transition-transform"
              >
                <span>Get in touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent/50 hover:bg-muted transition-all"
              >
                <span>{siteConfig.email}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-lg text-accent-foreground">G</span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground">{siteConfig.name}</p>
                <p className="text-xs text-muted-foreground">{siteConfig.company}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your execution-oriented partner for entering and growing in Japan.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors anime-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6">
              Resources
            </p>
            <ul className="space-y-3">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors anime-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6">
              Contact
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="text-foreground font-medium">{siteConfig.contact.name}</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block hover:text-accent transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">
              Made with passion in Japan
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs text-accent font-mono">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
