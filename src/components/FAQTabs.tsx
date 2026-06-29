"use client";

import { useState } from "react";
import FAQAccordion, { type FAQItem } from "./FAQAccordion";

interface FAQTabsProps {
  motorcycleItems: FAQItem[];
  smartphoneItems?: FAQItem[];
  smartphoneMessage?: string;
  /** Classes applied to the panel that wraps the accordion. */
  panelClassName?: string;
}

const tabs = [
  { key: "motorcycle", label: "Motorcycle HP Financing" },
  { key: "smartphone", label: "Smartphone HP Financing" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function FAQTabs({
  motorcycleItems,
  smartphoneItems,
  smartphoneMessage,
  panelClassName = "",
}: FAQTabsProps) {
  const [tab, setTab] = useState<TabKey>("motorcycle");

  const items = tab === "motorcycle" ? motorcycleItems : smartphoneItems;

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
        {tabs.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              aria-pressed={active}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-300 ${
                active
                  ? "bg-[#2C76BB] text-white shadow-[0_8px_20px_-8px_rgba(44,118,187,0.65)]"
                  : "bg-white text-[#272A33]/65 border border-[#e2e6ef] hover:text-[#2C76BB] hover:border-[#2C76BB]/40"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {items ? (
        <div key={tab} className={`impact-swap ${panelClassName}`}>
          <FAQAccordion items={items} />
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#eef0f5] p-7 md:p-9 flex items-start gap-4 shadow-[0_10px_40px_-22px_rgba(13,36,97,0.25)]">
          <div className="w-11 h-11 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
              <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
            </svg>
          </div>
          <div>
            <h3 className="text-[16px] md:text-[17px] font-semibold text-[#272A33] mb-2">
              Coming Soon
            </h3>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed max-w-[560px]">
              {smartphoneMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
