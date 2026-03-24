"use client";
import { useState } from "react";
import { FAQ } from "@/content/faq";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#1a2040] border-t border-b border-[#1a2040]">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span
              className={`font-heading font-semibold text-sm leading-snug transition-colors ${
                openIndex === index ? "text-accent" : "text-white group-hover:text-accent"
              }`}
              style={{ letterSpacing: "-0.01em" }}
            >
              {faq.question}
            </span>
            <div
              className={`w-7 h-7 flex items-center justify-center flex-shrink-0 border transition-all ${
                openIndex === index
                  ? "border-accent text-accent bg-accent/10 rotate-180"
                  : "border-[#1a2040] text-[#a0aec0]"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <svg
                className="w-4 h-4 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="pb-5 text-[#a0aec0] leading-relaxed text-sm border-l-2 border-accent/30 pl-4 mb-2">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
