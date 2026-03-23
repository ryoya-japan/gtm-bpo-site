"use client";
import { useState } from "react";
import { FAQ } from "@/content/faq";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, index) => (
        <div key={index} className="group">
          <button
            className="w-full flex items-center justify-between py-6 text-left gap-6 transition-colors hover:text-accent"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
              {faq.question}
            </span>
            <div
              className={`w-10 h-10 rounded-full border-2 border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                openIndex === index
                  ? "bg-accent border-accent rotate-180"
                  : "group-hover:border-accent"
              }`}
            >
              <svg
                className={`w-4 h-4 transition-colors ${
                  openIndex === index
                    ? "text-accent-foreground"
                    : "text-muted-foreground group-hover:text-accent"
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
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed pr-16">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
