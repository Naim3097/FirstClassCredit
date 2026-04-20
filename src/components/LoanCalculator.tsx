"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(15000);
  const [tenure, setTenure] = useState(24);
  const rate = 0.1;
  const totalInterest = amount * rate * (tenure / 12);
  const monthly = Math.round((amount + totalInterest) / tenure);

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_rgba(39,42,51,0.06)] max-w-[640px] mx-auto">
      {/* Loan Amount */}
      <div className="mb-8">
        <label className="block text-xs font-semibold uppercase tracking-[1.5px] text-blue mb-3">
          Loan Amount (RM)
        </label>
        <input
          type="range"
          min={5000}
          max={50000}
          step={5000}
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
          <option value={12}>12 months (1 year)</option>
          <option value={24}>24 months (2 years)</option>
          <option value={36}>36 months (3 years)</option>
          <option value={48}>48 months (4 years)</option>
          <option value={60}>60 months (5 years)</option>
        </select>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-6">
        Fixed profit rate: <strong>10% per annum</strong>
      </p>

      {/* Result */}
      <div className="text-center pt-8 border-t border-[var(--border-color)]">
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-2">
          Estimated Monthly Instalment
        </p>
        <p className="text-4xl md:text-5xl font-semibold text-dark-blue">
          RM {monthly.toLocaleString()}
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-3">
          *Indicative calculation only. Actual instalment may differ.
        </p>
      </div>
    </div>
  );
}
