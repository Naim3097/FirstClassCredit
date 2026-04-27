"use client";

import Image from "next/image";
import Link from "next/link";
import LoanCalculator from "@/components/LoanCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import { HeroReveal, Reveal, StaggerChildren } from "@/components/ScrollAnimations";

const hpFAQ = [
  {
    question: "What is a Hire Purchase (HP) agreement?",
    answer:
      "It is a contract where you \u201chire\u201d the motorcycle from the owner (the financier) with an option to purchase it at the end of the term. You become the legal owner only after the final instalment is paid.",
  },
  {
    question: "Is First Class Credit HP governed under the Hire Purchase Act 1967?",
    answer: "Yes.",
  },
  {
    question: "What is the maximum amount financed?",
    answer:
      "Under the Hire Purchase Act 1967, you can finance up to 90% of the motorcycle\u2019s value.",
  },
  {
    question: "What are the profit rates offered?",
    answer: "0.833% per month / 10% per annum.",
  },
  {
    question: "What is the minimum and maximum loan tenure?",
    answer: "Minimum 1 year, maximum 5 years.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Typical costs include Stamp Duty, Processing Fees, and JPJ Ownership Claim (Hakmilik) fee \u2014 clearly stated in your Product Disclosure Sheet.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, 3 months\u2019 salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours.",
  },
];

export default function FinancingHP() {
  return (
    <>
      {/* ===== VF-S01 HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        {/* Right-side motorcycle image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1800&q=85&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover object-right"
            priority
            unoptimized
          />
          {/* Left-to-right gradient: solid navy on left, fade to transparent on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 30%, rgba(13,36,97,0.85) 50%, rgba(13,36,97,0.35) 75%, rgba(13,36,97,0.15) 100%)",
            }}
          />
          {/* Subtle bottom navy fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d2461]/60 to-transparent" />
        </div>

        {/* Faint FCC watermark in middle */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none" aria-hidden>
          <svg width="320" height="320" viewBox="0 0 100 100" fill="none" className="opacity-[0.06]">
            <circle cx="50" cy="50" r="40" stroke="#47A7DD" strokeWidth="1.5" />
            <path d="M35 35 L65 35 M35 50 L55 50 M35 65 L65 65" stroke="#47A7DD" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-24 md:pt-28 pb-16 md:pb-20 lg:pb-24 min-h-[480px] md:min-h-[540px] lg:min-h-[580px] flex items-center">
          <HeroReveal className="max-w-[600px]">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] md:tracking-[3px] text-[#47A7DD] mb-4 md:mb-5">
              Motorcycle Financing
            </p>
            <h1 className="text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              Financing your<br className="hidden sm:block" /> next ride, simplified.
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[440px] mb-8 md:mb-10 leading-[1.65]">
              Fast, flexible, and transparent motorcycle financing with up to
              90% margin of financing and tenures up to 5 years.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Apply Now
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-1.5 text-white text-[13px] md:text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
              >
                Check if you qualify <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== VF-S02 WHY US ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-start">
            {/* Heading column */}
            <Reveal className="lg:col-span-3">
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                Why choose<br /> First Class Credit?
              </h2>
              <div className="w-12 h-[3px] bg-[#2C76BB] rounded-full" />
            </Reveal>

            {/* Cards */}
            <StaggerChildren className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
              {[
                {
                  title: "Competitive Rates",
                  desc: "Fixed or variable interest rates to match your financial profile.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V12M10 20V4M16 20v-6M22 20H2" />
                    </svg>
                  ),
                },
                {
                  title: "High Margin",
                  desc: "Finance up to 90% of your motorcycle\u2019s value \u2014 new or used.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="6" y1="18" x2="18" y2="6" />
                      <circle cx="7.5" cy="7.5" r="2" />
                      <circle cx="16.5" cy="16.5" r="2" />
                    </svg>
                  ),
                },
                {
                  title: "Quick Turnaround",
                  desc: "Pre-approval status within 24\u201348 hours of document submission.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                    </svg>
                  ),
                },
                {
                  title: "Hassle-Free Renewals",
                  desc: "Integrated road tax and insurance renewal services.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
                    </svg>
                  ),
                },
              ].map((c) => (
                <div key={c.title}>
                  <div className="w-14 h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center mb-5">
                    {c.icon}
                  </div>
                  <h4 className="text-[16px] md:text-[17px] font-semibold text-[#272A33] mb-3">
                    {c.title}
                  </h4>
                  <p className="text-[13.5px] md:text-[14px] text-[var(--text-secondary)] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ===== VF-S03 ELIGIBILITY ===== */}
      <section className="py-14 md:py-20 bg-[#FDF0CD]/40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Heading */}
            <Reveal className="lg:col-span-4">
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                Eligibility &amp; documents
              </h2>
              <Link
                href="/apply"
                className="inline-flex items-center gap-1.5 text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors"
              >
                Check if you qualify <span aria-hidden>&rarr;</span>
              </Link>
            </Reveal>

            {/* Table card */}
            <Reveal delay={0.08} className="lg:col-span-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-20px_rgba(13,36,97,0.15)]">
                {/* Header */}
                <div className="grid grid-cols-[1fr_1.4fr] md:grid-cols-[1fr_1.6fr] bg-[#0d2461] text-white">
                  <div className="px-5 md:px-7 py-4 md:py-5 text-[11px] md:text-[12px] font-bold uppercase tracking-[1.5px]">
                    Requirement
                  </div>
                  <div className="px-5 md:px-7 py-4 md:py-5 text-[11px] md:text-[12px] font-bold uppercase tracking-[1.5px]">
                    Details
                  </div>
                </div>

                {/* Rows */}
                {[
                  {
                    label: "Nationality",
                    value: "Malaysian Citizen",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                      </svg>
                    ),
                    bg: "bg-white",
                  },
                  {
                    label: "Age",
                    value: "18 to 70 years old at end of financing tenure",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.5" y="5" width="17" height="15" rx="2" />
                        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                      </svg>
                    ),
                    bg: "bg-[#FDF0CD]/40",
                  },
                  {
                    label: "Minimum Income",
                    value: "RM1,500 basic monthly salary",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2.5" y="6" width="19" height="12" rx="2" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    ),
                    bg: "bg-white",
                  },
                  {
                    label: "Documents",
                    value:
                      "Copy of NRIC, latest 3 months\u2019 payslips, latest EPF statement or 3 months\u2019 bank statements",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    ),
                    bg: "bg-white",
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[1fr_1.4fr] md:grid-cols-[1fr_1.6fr] ${row.bg} ${
                      i < arr.length - 1 ? "border-b border-[#eef0f5]" : ""
                    }`}
                  >
                    <div className="px-5 md:px-7 py-4 md:py-5 flex items-center gap-3">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                        {row.icon}
                      </div>
                      <span className="text-[13px] md:text-[14.5px] font-semibold text-[#272A33]">
                        {row.label}
                      </span>
                    </div>
                    <div className="px-5 md:px-7 py-4 md:py-5 flex items-center text-[13px] md:text-[14px] text-[var(--text-secondary)] leading-snug">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VF-S04 LOAN CALCULATOR ===== */}
      <section className="py-14 md:py-20 bg-[#E8F1FB]/50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-4">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#2C76BB] mb-3 md:mb-4">
                Plan your budget
              </p>
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-4 md:mb-5">
                See how it fits<br /> your plan.
              </h2>
              <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-md mb-5 md:mb-6">
                Use our calculator to estimate your monthly instalment. Adjust
                the loan amount and tenure to find a plan that suits you.
              </p>
              <p className="text-[12px] md:text-[13px] text-[var(--text-muted)] italic">
                *Based on a fixed profit rate of 10% per annum.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              <LoanCalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VF-S05 HOW TO APPLY ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal className="text-center mb-10 md:mb-12">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#2C76BB] mb-3 md:mb-4">
              How to apply
            </p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#272A33] leading-[1.15] tracking-tight max-w-[640px] mx-auto">
              Simple steps to get you on the road.
            </h2>
          </Reveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 relative">
            {/* Connecting dotted line (desktop) */}
            <div
              className="hidden lg:block absolute top-[58px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#E8F1FB] z-0"
              aria-hidden
            />
            {[
              {
                n: 1,
                title: "Estimate Your Loan",
                desc: "Use our online calculator to find a monthly instalment that fits your budget.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="11" x2="10" y2="11" />
                    <line x1="13" y1="11" x2="16" y2="11" />
                    <line x1="8" y1="15" x2="10" y2="15" />
                    <line x1="13" y1="15" x2="16" y2="15" />
                    <line x1="8" y1="19" x2="10" y2="19" />
                    <line x1="13" y1="19" x2="16" y2="19" />
                  </svg>
                ),
              },
              {
                n: 2,
                title: "Quick Online Application",
                desc: "Fill out our 5-minute application form with your motorcycle and personal details.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="13" rx="2" />
                    <line x1="2" y1="20" x2="22" y2="20" />
                  </svg>
                ),
              },
              {
                n: 3,
                title: "Fast Verification",
                desc: "Our team reviews your profile and contacts you via WhatsApp within 24\u201348 hours for pre-approval.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="4" width="14" height="18" rx="2" />
                    <path d="M9 4V2.5h6V4" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="14" y2="14" />
                  </svg>
                ),
              },
              {
                n: 4,
                title: "Sign & Drive",
                desc: "Sign your Hire Purchase Agreement, settle the downpayment, and collect your motorcycle.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="15" r="4" />
                    <path d="M11 12l9-9 2 2-2 2 1 1-2 2-1-1-3 3" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.n} className="relative z-10 text-center px-2">
                {/* Number badge */}
                <div className="w-7 h-7 mx-auto rounded-full bg-white border-2 border-[#2C76BB] flex items-center justify-center text-[#2C76BB] text-[12px] font-bold mb-3">
                  {s.n}
                </div>
                {/* Icon */}
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] mx-auto rounded-full bg-[#E8F1FB]/60 flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h4 className="text-[15px] md:text-[16px] font-semibold text-[#272A33] mb-2.5">
                  {s.title}
                </h4>
                <p className="text-[13px] md:text-[13.5px] text-[var(--text-secondary)] leading-relaxed max-w-[220px] mx-auto">
                  {s.desc}
                </p>
              </div>
            ))}
          </StaggerChildren>

          <Reveal delay={0.2}>
            <div className="mt-10 md:mt-12 flex justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Start Your Application
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== VF-S06 FAQ ===== */}
      <section className="py-14 md:py-20 bg-[#FDF0CD]/40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <Reveal className="lg:col-span-4">
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                Frequently asked<br /> questions
              </h2>
              <div className="w-12 h-[3px] bg-[#2C76BB] rounded-full mb-6" />
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors"
              >
                See all FAQs <span aria-hidden>&rarr;</span>
              </Link>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              <div className="bg-white rounded-2xl px-5 md:px-8 py-2 md:py-3 shadow-[0_10px_40px_-20px_rgba(13,36,97,0.15)]">
                <FAQAccordion items={hpFAQ} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VF-S07 CTA ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden py-9 md:py-11">
        {/* Wavy line decoration on right */}
        <div className="absolute inset-y-0 right-0 w-[55%] pointer-events-none opacity-40 hidden md:block" aria-hidden>
          <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none">
            <path d="M0,100 Q150,40 300,100 T600,100" stroke="#47A7DD" strokeWidth="1" fill="none" />
            <path d="M0,120 Q150,60 300,120 T600,120" stroke="#47A7DD" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M0,80 Q150,20 300,80 T600,80" stroke="#47A7DD" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M0,140 Q150,80 300,140 T600,140" stroke="#47A7DD" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-white leading-snug tracking-tight">
                    Interested to apply?
                  </h2>
                  <p className="text-[13px] md:text-[14px] text-white/65 mt-1">
                    Start your application in just 5 minutes.
                  </p>
                </div>
              </div>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit"
              >
                Apply Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
