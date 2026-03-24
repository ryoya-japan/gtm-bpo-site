"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 glass ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" onClick={() => setMobileOpen(false)}>
              <span
                className="font-heading font-bold text-2xl text-white tracking-tighter group-hover:text-accent transition-colors duration-200"
                style={{ letterSpacing: "-0.04em" }}
              >
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-[#a0aec0] group-hover:text-cyan transition-colors duration-200">
                by {siteConfig.company}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive
                        ? "text-accent"
                        : "text-[#a0aec0] hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="btn-neon-red inline-flex items-center justify-center font-medium text-sm px-5 py-2.5 rounded-md"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-[#a0aec0] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Grid BG */}
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative z-10 flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-3xl font-heading font-bold tracking-tight transition-all duration-200 py-3 border-b border-[#1a2040] ${
                    isActive
                      ? "text-accent"
                      : "text-white hover:text-accent hover:pl-2"
                  }`}
                  style={{
                    letterSpacing: "-0.02em",
                    transitionDelay: mobileOpen ? `${i * 0.05}s` : "0s",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-neon-red inline-flex items-center justify-center font-medium text-base px-8 py-4 rounded-md w-full"
            >
              Book a Call
            </Link>
          </div>
          <div className="mt-auto pb-8">
            <p className="text-[#a0aec0] text-sm">{siteConfig.email}</p>
            <p className="text-[#1a2040] text-xs mt-1">{siteConfig.company}</p>
          </div>
          {/* Decorative JP text */}
          <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
            <span className="jp-deco" style={{ fontSize: "120px", opacity: 0.04 }}>市場</span>
          </div>
        </div>
      </div>
    </>
  );
}
