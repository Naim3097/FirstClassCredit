"use client";

import { useState } from "react";

interface LoanCalculatorProps {
  minAmount?: number;
  maxAmount?: number;
  step?: number;
  defaultAmount?: number;
  tenures?: number[];
  defaultTenure?: number;
  pdsHref?: string;
}

export default function LoanCalculator({
  minAmount = 3000,
  maxAmount = 50000,
  step = 1000,
  defaultAmount = 12000,
  tenures = [12, 24, 36, 48, 60],
  defaultTenure = 48,
  pdsHref = "/motorcycle-hp-pds.pdf",
}: LoanCalculatorProps = {}) {
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
          Amount Financed (RM)
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
          Loan Tenure
        </label>
        <select
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="w-full py-3.5 px-0 border-0 border-b-2 border-[var(--border-color)] bg-transparent text-base focus:border-blue focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          {tenures.map((t) => (
            <option key={t} value={t}>
              {t} months ({t / 12} {t / 12 === 1 ? "year" : "years"})
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-6">
        Fixed rate: <strong>10.00% per annum (flat)</strong>
      </p>

      {/* Summary breakdown — PDS format */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 border-t border-[var(--border-color)]">
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            Total Term Charges
          </p>
          <p className="text-base font-semibold text-dark-blue">RM {fmt(totalTermCharges)}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            Total Payable
          </p>
          <p className="text-base font-semibold text-dark-blue">RM {fmt(totalPayable)}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            No. of Instalments
          </p>
          <p className="text-base font-semibold text-dark-blue">{tenure}</p>
        </div>
        <div>
          <p className="text-[var(--text-muted)] uppercase text-[10px] font-semibold tracking-[1.5px] mb-1">
            Final Instalment
          </p>
          <p className="text-base font-semibold text-dark-blue">RM {final.toLocaleString()}</p>
        </div>
      </div>

      {/* Headline monthly */}
      <div className="text-center pt-8 mt-6 border-t border-[var(--border-color)]">
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-2">
          Monthly Instalment
        </p>
        <p className="text-4xl md:text-5xl font-semibold text-dark-blue">
          RM {monthly.toLocaleString()}
        </p>
        <p className="text-[11px] text-[var(--text-muted)] mt-3 leading-relaxed">
          Indicative only — actual instalment, margin, and rate will be confirmed in your
          signed Hire Purchase Agreement and{" "}
          <a
            href={pdsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue font-semibold underline underline-offset-2 hover:text-dark-blue"
          >
            Product Disclosure Sheet
          </a>
          .
        </p>
      </div>
    </div>
  );
}
