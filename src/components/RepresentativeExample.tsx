interface RepresentativeExampleProps {
  className?: string;
}

const rows = [
  { label: "Loan amount", value: "RM10,000" },
  { label: "Interest rate", value: "10% per annum (flat rate)" },
  { label: "Tenure", value: "48 months" },
];

/**
 * Representative loan example card — mirrors the brand "Representative Loan
 * Example" panel. Figures are illustrative and inclusive of the transaction fee.
 */
export default function RepresentativeExample({ className = "" }: RepresentativeExampleProps) {
  return (
    <div
      className={`mt-4 w-full max-w-[420px] rounded-xl bg-[#253A7D] text-white p-5 md:p-6 shadow-[0_16px_40px_-18px_rgba(13,36,97,0.55)] ${className}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#FCDB81] mb-4">
        Representative Loan Example
      </p>

      <div className="divide-y divide-white/15">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 py-2.5"
          >
            <span className="text-[12.5px] text-white/65">{row.label}</span>
            <span className="text-[13px] font-semibold text-white text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/20 space-y-3">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[12.5px] font-semibold text-white">
            Monthly instalment
          </span>
          <span className="text-[20px] md:text-[22px] font-bold text-[#FCDB81] leading-none">
            RM294
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-[12.5px] font-semibold text-white">
            Final instalment
          </span>
          <span className="text-[16px] md:text-[17px] font-bold text-white leading-none">
            RM278
          </span>
        </div>
      </div>

      <p className="text-[10px] text-white/45 mt-4 leading-snug">
        *Both instalments are inclusive of the transaction fee.
      </p>
    </div>
  );
}
