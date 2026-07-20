"use client";

import { useState } from "react";
import type { Locale } from "@/lib/locale";

interface LoanCalculatorProps {
  minAmount?: number;
  maxAmount?: number;
  step?: number;
  defaultAmount?: number;
  tenures?: number[];
  defaultTenure?: number;
  pdsHref?: string;
  locale?: Locale;
}

const LABELS = {
  en: {
    amount: "Amount Financed (RM)",
    tenure: "Loan Tenure",
    months: "months",
    year: "year",
    years: "years",
    fixedRate: "Fixed rate:",
    ratePhrase: "10.00% per annum (flat)",
    totalTermCharges: "Total Term Charges",
    totalPayable: "Total Payable",
    noInstalments: "No. of Instalments",
    finalInstalment: "Final Instalment",
    monthlyInstalment: "Monthly Instalment",
    disclaimerPre:
      "Indicative only — actual instalment, margin, and rate will be confirmed in your signed Hire Purchase Agreement and",
    pdsLabel: "Product Disclosure Sheet",
  },
  ms: {
    amount: "Jumlah Dibiayai (RM)",
    tenure: "Tempoh Pinjaman",
    months: "bulan",
    year: "tahun",
    years: "tahun",
    fixedRate: "Kadar tetap:",
    ratePhrase: "10.00% setahun (rata)",
    totalTermCharges: "Jumlah Caj Tempoh",
    totalPayable: "Jumlah Perlu Dibayar",
    noInstalments: "Bilangan Ansuran",
    finalInstalment: "Ansuran Akhir",
    monthlyInstalment: "Ansuran Bulanan",
    disclaimerPre:
      "Anggaran sahaja — ansuran, margin dan kadar sebenar akan disahkan dalam Perjanjian Hire Purchase anda yang ditandatangani dan",
    pdsLabel: "Product Disclosure Sheet",
  },
} as const;

export default function LoanCalculator({
  minAmount = 3000,
  maxAmount = 50000,
  step = 1000,
  defaultAmount = 12000,
  tenures = [12, 24, 36, 48, 60],
  defaultTenure = 48,
  pdsHref = "/motorcycle-hp-pds.pdf",
  locale = "en",
}: LoanCalculatorProps = {}) {
  const t9n = LABELS[locale];
  const [amount, setAmount] = useState(defaultAmount);
  const [tenure, setTenure] = useState(defaultTenure);
  const rate = 0.1; // 10% per annum, flat (per PDS)

  // PDS-style flat-rate calculation
  const totalTermCharges = amount * rate * (tenure / 12);
  const totalPayable = amount + totalTermCharges;
  const monthly = Math.round(totalPayable / tenure);
  // Final instalment absorbs rounding so the sum matches totalPayable
  const final = Math.round(totalPayable - monthly * (tenure - 1));

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_rgba(39,42,51,0.06)] max-w-[640px] mx-auto">
      {/* Amount Financed */}
      <div className="mb-8">
        <label className="block text-xs font-semibold uppercase tracking-[1.5px] text-blue mb-3">
          {t9n.amount}
        </label>
        <input
          type="range"
          min={minAmount}
          max={maxAmount}
          step={step}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-blue"
        />
        <div className="text-3xl font-semibold text-dark-blue mt-3">
          RM {amount.toLocaleString()}
        </div>
      </div>

      {/* Tenure */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-[1.5px] text-blue mb-3">
          {t9n.tenure}
        </label>
        <select
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="w-full py-3.5 px-0 border-0 border-b-2 border-[var(--border-color)] bg-transparent text-base focus:border-blue focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          {tenures.map((t) => (
            <option key={t} value={t}>
              {t} {t9n.months} ({t / 12} {t / 12 === 1 ? t9n.year : t9n.years})
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-6">
        {t9n.fixedRate} <strong>{t9n.ratePhrase}</strong>
      </p>

      {/* Summary breakdown — PDS format */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 border-t border-[var(--border-color)]">
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            {t9n.totalTermCharges}
          </p>
          <p className="text-base font-semibold text-dark-blue">RM {fmt(totalTermCharges)}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            {t9n.totalPayable}
          </p>
          <p className="text-base font-semibold text-dark-blue">RM {fmt(totalPayable)}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            {t9n.noInstalments}
          </p>
          <p className="text-base font-semibold text-dark-blue">{tenure}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            {t9n.finalInstalment}
          </p>
          <p className="text-base font-semibold text-dark-blue">RM {final.toLocaleString()}</p>
        </div>
      </div>

      {/* Headline monthly */}
      <div className="text-center pt-8 mt-6 border-t border-[var(--border-color)]">
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-2">
          {t9n.monthlyInstalment}
        </p>
        <p className="text-4xl md:text-5xl font-semibold text-dark-blue">
          RM {monthly.toLocaleString()}
        </p>
        <p className="text-[11px] text-[var(--text-muted)] mt-3 leading-relaxed">
          {t9n.disclaimerPre}{" "}
          <a
            href={pdsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue font-semibold underline underline-offset-2 hover:text-dark-blue"
          >
            {t9n.pdsLabel}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
