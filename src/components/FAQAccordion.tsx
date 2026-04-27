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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#eef0f5]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] md:text-[16px] font-semibold text-[#272A33] pr-4 leading-snug">
                {item.question}
              </span>
              <span className="text-[#2C76BB] flex-shrink-0 w-5 h-5 flex items-center justify-center" aria-hidden>
                {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <line x1="3" y1="8" x2="13" y2="8" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <line x1="3" y1="8" x2="13" y2="8" />
                    <line x1="8" y1="3" x2="8" y2="13" />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-out ${
                isOpen ? "max-h-[500px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed max-w-[720px] whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
