"use client";
import { useEffect } from "react";

/**
 * RevealObserver — mounts an IntersectionObserver that adds `.visible`
 * to any element with the `.reveal` class when it scrolls into view.
 * Drop this anywhere in the layout (once) to enable scroll-triggered
 * fade-in across the entire site.
 */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
