"use client";
import { useState } from "react";
import { FAQ } from "@/content/faq";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`group bg-card border rounded-2xl transition-all duration-300 ${
            openIndex === index 
              ? "border-accent/50 shadow-[0_0_20px_hsl(var(--accent)/0.1)]" 
              : "border-border hover:border-accent/30"
          }`}
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left gap-6"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className={`font-display font-medium text-lg transition-colors ${
              openIndex === index ? "text-accent" : "text-foreground"
            }`}>
              {faq.question}
            </span>
            <div
              className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === index
                  ? "bg-accent border-accent rotate-180"
                  : "border-border group-hover:border-accent/50"
              }`}
            >
              <svg
                className={`w-4 h-4 transition-colors ${
                  openIndex === index
                    ? "text-accent-foreground"
                    : "text-muted-foreground"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed px-6 pb-6 pr-16">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
