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
    <div className="divide-y divide-[var(--border-color)]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="text-[17px] font-semibold text-deep-blue pr-4 leading-snug">
                {item.question}
              </span>
              <span
                className={`text-blue text-2xl flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-out ${
                isOpen ? "max-h-[500px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-[720px] whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
