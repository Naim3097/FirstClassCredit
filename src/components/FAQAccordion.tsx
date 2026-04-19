"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--border-light)]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-semibold text-[var(--text-primary)] text-base md:text-lg">
              {item.question}
            </span>
            <span
              className={`shrink-0 w-6 h-6 flex items-center justify-center text-blue transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="8" y1="2" x2="8" y2="14" />
                <line x1="2" y1="8" x2="14" y2="8" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ease-out ${
              openIndex === i ? "max-h-[500px] pb-5" : "max-h-0"
            }`}
          >
            <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
