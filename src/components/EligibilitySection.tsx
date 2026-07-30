import { Reveal } from "@/components/ScrollAnimations";
import { Icon } from "@/components/icons";
import type { IconKey } from "@/fields/iconOptions";

export type EligibilityRow = {
  icon: IconKey | string;
  label: string;
  value: string;
};

/**
 * "Eligibility & Documents" section on the financing pages. Presentational —
 * pages resolve each field from the CMS with a built-in fallback.
 */
export default function EligibilitySection({
  eyebrow,
  heading,
  intro,
  checkLabel,
  checkHref,
  pdsLabel,
  pdsHref,
  rows,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  checkLabel: string;
  checkHref: string;
  pdsLabel: string;
  pdsHref: string;
  rows: EligibilityRow[];
}) {
  const headingLines = heading.split("\n");
  return (
    <section className="relative py-16 md:py-24 bg-[#f7f4ef] overflow-hidden">
      {/* Decorative dot grids */}
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none" aria-hidden>
        <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 24 + 12} cy={row * 24 + 12} r="3" fill="#0d2461" />
            )),
          )}
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-32 opacity-10 pointer-events-none" aria-hidden>
        <svg width="160" height="128" viewBox="0 0 160 128" fill="none">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 22 + 11} cy={row * 22 + 11} r="2.5" fill="#0d2461" />
            )),
          )}
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: heading panel */}
          <Reveal className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 bg-white border border-[#dde3f0] rounded-full px-4 py-2 mb-7 shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d2461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="13" y2="17" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0d2461]">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#0d2461] leading-[1.1] tracking-tight mb-5">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed mb-7 max-w-[320px]">
              {intro}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={checkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0d2461] text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
              >
                {checkLabel}
              </a>
              <a
                href={pdsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#666] text-[13px] font-medium underline underline-offset-2 hover:text-[#0d2461] transition-colors w-fit"
              >
                {pdsLabel}
              </a>
            </div>
          </Reveal>

          {/* Right: rows card */}
          <Reveal delay={0.08} className="lg:col-span-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(13,36,97,0.12)]">
              {rows.map((row, i) => (
                <div
                  key={`${row.label}-${i}`}
                  className={`flex items-center gap-0 ${i < rows.length - 1 ? "border-b border-[#eef0f5]" : ""}`}
                >
                  <div className="flex items-center justify-center px-5 md:px-7 py-5 md:py-6 flex-shrink-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#e8eaf6] flex items-center justify-center text-[#0d2461]">
                      <Icon name={row.icon} size={20} />
                    </div>
                  </div>
                  <div className="w-px self-stretch bg-[#eef0f5] flex-shrink-0" />
                  <div className="px-5 md:px-7 py-5 md:py-6 w-[140px] md:w-[180px] flex-shrink-0">
                    <span className="text-[13px] md:text-[15px] font-bold text-[#0d2461]">
                      {row.label}
                    </span>
                  </div>
                  <div className="px-4 md:px-6 py-5 md:py-6 flex-1 text-[13px] md:text-[14px] text-[#555] leading-snug">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
