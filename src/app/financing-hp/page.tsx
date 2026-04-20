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
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-end bg-[#253A7D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#253A7D] via-[#253A7D]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-20 md:pb-28 pt-32 w-full">
          <HeroReveal className="max-w-[600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
              Motorcycle Financing HP
            </p>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-extralight leading-[1.08] text-white tracking-[-0.02em] mb-6">
              Financing your next ride, simplified.
            </h1>
            <p className="text-[17px] text-white/60 max-w-[460px] mb-10 leading-[1.6]">
              Fast, flexible, and transparent motorcycle ownership with up to
              90% margin of financing and tenures up to 5 years.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
            >
              Apply Now
            </Link>
          </HeroReveal>
        </div>
      </section>

      {/* ===== WHY US — Horizontal scroll-like feel, not a grid ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-14 max-w-sm">
              Why choose First Class Credit?
            </h2>
          </Reveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#2C76BB] pt-6">
              <h4 className="text-[16px] font-semibold text-[#272A33] mb-2">
                Competitive Rates
              </h4>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                Fixed or variable interest rates that match your financial
                profile.
              </p>
            </div>
            <div className="border-t-2 border-[#47A7DD] pt-6">
              <h4 className="text-[16px] font-semibold text-[#272A33] mb-2">
                High Margin
              </h4>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                Finance up to 90% of your motorcycle&apos;s value — new or
                used.
              </p>
            </div>
            <div className="border-t-2 border-[#F18F33] pt-6">
              <h4 className="text-[16px] font-semibold text-[#272A33] mb-2">
                Quick Turnaround
              </h4>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                Pre-approval status within 24&ndash;48 hours of document
                submission.
              </p>
            </div>
            <div className="border-t-2 border-[#272A33] pt-6">
              <h4 className="text-[16px] font-semibold text-[#272A33] mb-2">
                Hassle-Free Renewals
              </h4>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                Integrated road tax and insurance renewal services.
              </p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* ===== REQUIREMENTS — Clean table, not eyebrow+grid ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug">
                Eligibility &amp; documents
              </h2>
              <Link
                href="/apply"
                className="text-[#2C76BB] text-[14px] font-semibold"
              >
                Check if you qualify &rarr;
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {/* Desktop table */}
            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#272A33] text-white">
                    <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[1px] rounded-tl-lg">
                      Requirement
                    </th>
                    <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[1px] rounded-tr-lg">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  <tr className="border-b border-[#e8e8e0]">
                    <td className="px-6 py-4 font-medium text-[#272A33]">Nationality</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">Malaysian Citizen</td>
                  </tr>
                  <tr className="border-b border-[#e8e8e0] bg-[#FDF0CD]/30">
                    <td className="px-6 py-4 font-medium text-[#272A33]">Age</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">18 to 70 years old (at end of financing tenure)</td>
                  </tr>
                  <tr className="border-b border-[#e8e8e0]">
                    <td className="px-6 py-4 font-medium text-[#272A33]">Minimum Income</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">RM1,500 basic monthly salary</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#272A33]">Documents</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">
                      Copy of NRIC, latest 3 months&apos; pay slips, latest EPF
                      statement or 3 months&apos; bank statements
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {[
                { label: "Nationality", value: "Malaysian Citizen" },
                { label: "Age", value: "18 to 70 years old (at end of financing tenure)" },
                { label: "Minimum Income", value: "RM1,500 basic monthly salary" },
                { label: "Documents", value: "Copy of NRIC, latest 3 months\u2019 pay slips, latest EPF statement or 3 months\u2019 bank statements" },
              ].map((item) => (
                <div key={item.label} className="bg-[var(--bg-primary)] rounded-xl p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#2C76BB] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[15px] text-[#272A33]">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== LOAN CALCULATOR ===== */}
      <section className="py-20 md:py-28 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-4">
                Plan your budget.
              </h2>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-md mb-6">
                Use our calculator to estimate your monthly instalment. Adjust
                the loan amount and tenure to find a plan that fits.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">
                Based on a fixed profit rate of 10% per annum.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <LoanCalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== HOW TO APPLY — Steps ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-14">
              How to apply
            </h2>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2C76BB] flex items-center justify-center text-[#2C76BB] text-[15px] font-semibold">
                  1
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#272A33] mb-1">
                    Estimate Your Loan
                  </h4>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    Use our online calculator to find a monthly instalment that
                    fits your budget.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2C76BB] flex items-center justify-center text-[#2C76BB] text-[15px] font-semibold">
                  2
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#272A33] mb-1">
                    Quick Online Application
                  </h4>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    Fill out our 5-minute application form with your motorcycle
                    and personal details.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2C76BB] flex items-center justify-center text-[#2C76BB] text-[15px] font-semibold">
                  3
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#272A33] mb-1">
                    Fast Verification
                  </h4>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    Our team reviews your profile and contacts you via
                    WhatsApp within 24&ndash;48 hours for pre-approval.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C76BB] flex items-center justify-center text-white text-[15px] font-semibold">
                  4
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#272A33] mb-1">
                    Sign &amp; Drive
                  </h4>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    Sign your Hire Purchase Agreement, settle the downpayment,
                    and collect your motorcycle.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Start Your Application
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[720px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-12">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={hpFAQ} />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <Link
                href="/resources"
                className="text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors"
              >
                See all FAQs &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#2C76BB] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <h2 className="text-[22px] md:text-[26px] font-light text-white leading-snug">
                Interested to apply?
              </h2>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit"
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
