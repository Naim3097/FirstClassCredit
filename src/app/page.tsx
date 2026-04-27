"use client";

import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import { HeroReveal, Reveal, StaggerChildren, CountUp } from "@/components/ScrollAnimations";

const homeFAQ = [
  {
    question: "What are the basic eligibility requirements?",
    answer:
      "Malaysian citizen aged 18\u201365 at the point of application with a minimum monthly income of RM1,500.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, 3 months\u2019 salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours.",
  },
  {
    question: "What is the maximum financing margin and tenure?",
    answer:
      "You can finance up to 90% of the vehicle\u2019s value for a maximum period of 5 years (60 months).",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Typical costs include Stamp Duty, Processing Fees, and JPJ Ownership Claim (Hakmilik) fee \u2014 all clearly stated in your Product Disclosure Sheet.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-end bg-[#0b1a3d] overflow-hidden">
        {/* Background image with slow zoom */}
        <div className="absolute inset-0">
          <Image
            src="/home-hero.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-80 hero-zoom-img"
            priority
          />
          {/* Gradient: bottom band only — desktop */}
          <div className="absolute inset-0 hidden md:block" style={{
            background: "linear-gradient(to top, #0d2461ee 0%, #1a3a7acc 30%, #253A7D55 60%, transparent 100%)"
          }} />
          {/* Gradient: mobile */}
          <div className="absolute inset-0 block md:hidden" style={{
            background: "linear-gradient(to top, #0d2461f2 0%, #1a3a7add 35%, #253A7D66 65%, transparent 100%)"
          }} />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-24 md:pb-32 pt-32 flex flex-col items-center text-center">
          <HeroReveal className="flex flex-col items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
              HP Vehicle Financing
            </p>
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-extralight leading-[1.08] text-white tracking-[-0.02em] mb-6">
              Turn your mobility
              <br />
              goals into reality.
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[480px] mb-10 leading-[1.6]">
              Hassle-free HP financing in Kuching and beyond. Flexible
              repayments up to 60 months, up to 90% margin of financing.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Apply Now
              </Link>
              <Link
                href="/financing-hp"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white/80 text-[15px] font-medium rounded-lg hover:border-white/60 hover:text-white transition-all duration-300"
              >
                How it works &rarr;
              </Link>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== FLOATING STATS BAR ===== */}
      <div className="relative z-20 bg-[#0d2461] px-5 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(13,36,97,0.18)] px-6 md:px-12 py-7 md:py-8 -translate-y-10 md:-translate-y-14"
          >
            <div className="grid grid-cols-3 divide-x divide-[#e8e8e0]">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 gap-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-[28px] sm:text-[40px] md:text-[56px] font-extralight text-[#253A7D] leading-none tracking-tight">
                    <CountUp end={60} />
                  </span>
                  <span className="text-[11px] sm:text-[13px] md:text-[15px] font-semibold text-[#253A7D] leading-tight">month</span>
                </div>
                <p className="text-[9px] sm:text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-[1.2px] sm:tracking-[1.5px] mt-1">
                  max tenure
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 gap-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-[28px] sm:text-[40px] md:text-[56px] font-extralight text-[#253A7D] leading-none tracking-tight">
                    <CountUp end={90} />
                  </span>
                  <span className="text-[11px] sm:text-[13px] md:text-[15px] font-semibold text-[#253A7D] leading-tight">%</span>
                </div>
                <p className="text-[9px] sm:text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-[1.2px] sm:tracking-[1.5px] mt-1">
                  financing margin
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 gap-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-[28px] sm:text-[40px] md:text-[56px] font-extralight text-[#253A7D] leading-none tracking-tight">
                    <CountUp end={24} />
                  </span>
                  <span className="text-[11px] sm:text-[13px] md:text-[15px] font-semibold text-[#253A7D] leading-tight">hour</span>
                </div>
                <p className="text-[9px] sm:text-[11px] md:text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-[1.2px] sm:tracking-[1.5px] mt-1">
                  approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PRODUCTS ===== */}
      <section className="py-14 md:py-20 bg-[#0d2461]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Heading column */}
            <Reveal className="flex flex-col justify-center md:pr-4">
              <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#47A7DD] mb-5">
                Financing Solutions
              </p>
              <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-semibold leading-[1.15] text-white tracking-[-0.01em]">
                For where you are and where you&apos;re going.
              </h2>
              <p className="text-[14px] text-white/55 leading-relaxed mt-5 max-w-xs">
                Solutions that move with your life. Simple, flexible and built around you.
              </p>
            </Reveal>

            {/* Drive Forward card */}
            <Reveal delay={0.08} className="relative overflow-hidden bg-[#172f6e] border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[300px] group transition-all duration-500 hover:border-[#47A7DD]/40">
              {/* Car image bg */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop')",
                }}
                aria-hidden
              />
              {/* Gradient overlay for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,36,97,0.92) 0%, rgba(23,47,110,0.78) 45%, rgba(23,47,110,0.35) 100%)",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center mb-6">
                  {/* car icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#47A7DD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 17h14M5 17v-3l2-5h10l2 5v3M5 17v2h2v-2M19 17v2h-2v-2" />
                    <circle cx="8" cy="14.5" r="0.6" fill="#47A7DD" />
                    <circle cx="16" cy="14.5" r="0.6" fill="#47A7DD" />
                  </svg>
                </div>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-white leading-snug mb-3">
                  Drive Forward with Your Next Vehicle
                </h3>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  Stop waiting and start moving. Secure your new or used vehicle
                  with hassle-free HP financing and flexible repayment plans up
                  to 60 months.
                </p>
              </div>
              <Link
                href="/financing-hp"
                className="relative mt-6 text-[#47A7DD] text-[14px] font-semibold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300"
              >
                Explore Vehicle Financing <span aria-hidden>&rarr;</span>
              </Link>
            </Reveal>

            {/* Coming soon card */}
            <Reveal delay={0.16} className="relative bg-[#253A7D] border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[300px] overflow-hidden group">
              {/* House image bg */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop')",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,58,125,0.92) 0%, rgba(37,58,125,0.78) 45%, rgba(37,58,125,0.3) 100%)",
                }}
                aria-hidden
              />
              <span className="absolute top-5 right-5 z-10 inline-block bg-[#F18F33] text-white text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full w-fit">
                Coming Soon
              </span>
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center mb-6">
                  {/* target icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FCDB81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.6" fill="#FCDB81" />
                  </svg>
                </div>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-white leading-snug mb-3">
                  Achieve Your Next Big Goal
                </h3>
                <p className="text-[14px] text-white/65 leading-relaxed">
                  Flexible financing for personal milestones, lifestyle upgrades,
                  and essential devices.
                </p>
              </div>
              <Link
                href="/objective-financing"
                className="relative mt-6 text-[#FCDB81]/80 text-[14px] font-medium inline-flex items-center gap-1.5 hover:text-[#FCDB81] hover:gap-3 transition-all duration-300"
              >
                Check on Financing &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== NUMBERS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal className="mb-10 md:mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#2C76BB] mb-4">
              Our Impact
            </p>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#272A33] leading-[1.15] tracking-[-0.01em] mb-4">
              The numbers that matter.
            </h2>
            <p className="text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-lg">
              We keep it simple. Competitive rates, fast approvals, and high
              financing margins so you can focus on what matters &mdash; getting
              on the road.
            </p>
          </Reveal>

          {/* Bento: image left (wide & short), stat cards stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            {/* Wide image plate */}
            <Reveal className="lg:col-span-8 relative rounded-2xl overflow-hidden h-[260px] md:h-[340px] lg:h-auto lg:min-h-[420px] shadow-[0_20px_60px_-30px_rgba(13,36,97,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80&auto=format&fit=crop"
                alt="Open road"
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(13,36,97,0.15) 0%, rgba(13,36,97,0.05) 40%, rgba(13,36,97,0.55) 100%)",
                }}
                aria-hidden
              />
              {/* Floating mini-card overlay */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-7 md:left-7 md:right-auto max-w-[240px] md:max-w-[300px] bg-white/95 backdrop-blur rounded-lg md:rounded-xl p-3 md:p-5 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)]">
                <p className="text-[9px] md:text-[11px] font-semibold uppercase tracking-[1.5px] md:tracking-[2px] text-[#2C76BB] mb-1 md:mb-1.5">
                  On the road
                </p>
                <p className="text-[11px] md:text-[14px] text-[#272A33] leading-snug">
                  Driving Malaysians forward with simple, transparent vehicle
                  financing.
                </p>
              </div>
            </Reveal>

            {/* Right column: stacked stat cards (mobile 2x2, desktop 1 col) */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3">
              {/* 90% — Dark Navy */}
              <Reveal delay={0.06} className="relative bg-[#0d2461] rounded-xl px-4 md:px-5 py-5 lg:py-4 flex items-center gap-3 md:gap-4 min-h-[110px] lg:min-h-0 overflow-hidden">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FCDB81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-3">
                  <p className="text-[24px] md:text-[28px] lg:text-[26px] font-bold text-[#FCDB81] leading-none tracking-tight lg:min-w-[64px]">
                    <CountUp end={90} suffix="%" />
                  </p>
                  <p className="text-[11.5px] md:text-[12px] text-white/70 mt-1.5 lg:mt-0 leading-snug">
                    Maximum financing margin
                  </p>
                </div>
              </Reveal>

              {/* 60 — Light tinted */}
              <Reveal delay={0.12} className="relative bg-[#E8F1FB] rounded-xl px-4 md:px-5 py-5 lg:py-4 flex items-center gap-3 md:gap-4 min-h-[110px] lg:min-h-0 overflow-hidden">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5" width="17" height="15" rx="2" />
                    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-3">
                  <p className="text-[24px] md:text-[28px] lg:text-[26px] font-bold text-[#253A7D] leading-none tracking-tight lg:min-w-[64px]">
                    <CountUp end={60} />
                  </p>
                  <p className="text-[11.5px] md:text-[12px] text-[#272A33]/65 mt-1.5 lg:mt-0 leading-snug">
                    Months maximum tenure
                  </p>
                </div>
              </Reveal>

              {/* 24-48h — Light tinted (matches 60) */}
              <Reveal delay={0.18} className="relative bg-[#E8F1FB] rounded-xl px-4 md:px-5 py-5 lg:py-4 flex items-center gap-3 md:gap-4 min-h-[110px] lg:min-h-0 overflow-hidden">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-3">
                  <p className="text-[20px] md:text-[24px] lg:text-[22px] font-bold text-[#253A7D] leading-none tracking-tight whitespace-nowrap lg:min-w-[64px]">
                    24&ndash;48h
                  </p>
                  <p className="text-[11.5px] md:text-[12px] text-[#272A33]/65 mt-1.5 lg:mt-0 leading-snug">
                    Pre-approval turnaround
                  </p>
                </div>
              </Reveal>

              {/* 10% — Light tinted (matches 60) */}
              <Reveal delay={0.24} className="relative bg-[#E8F1FB] rounded-xl px-4 md:px-5 py-5 lg:py-4 flex items-center gap-3 md:gap-4 min-h-[110px] lg:min-h-0 overflow-hidden">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <circle cx="7.5" cy="7.5" r="2" />
                    <circle cx="16.5" cy="16.5" r="2" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-3">
                  <p className="text-[24px] md:text-[28px] lg:text-[26px] font-bold text-[#253A7D] leading-none tracking-tight lg:min-w-[64px]">
                    <CountUp end={10} suffix="%" />
                  </p>
                  <p className="text-[11.5px] md:text-[12px] text-[#272A33]/65 mt-1.5 lg:mt-0 leading-snug">
                    Fixed interest per annum
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="relative py-24 md:py-32 bg-[#0d2461] overflow-hidden">
        {/* Hero image background at 50% opacity */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <Image
            src="/home-hero.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,36,97,0.65) 0%, rgba(13,36,97,0.55) 50%, rgba(13,36,97,0.75) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Competitive Rates — white */}
            <Reveal className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  Competitive Rates
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Rates designed to match your financial profile.
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Fixed or variable interest rates with full transparency. No
                  hidden charges &mdash; always the best rates for your
                  financial situation.
                </p>
              </div>
            </Reveal>

            {/* High Margin Financing — white */}
            <Reveal delay={0.06} className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5l2.5 2-3 1.5 3 1.5-2.5 2-2.5-2 3-1.5-3-1.5z" />
                  <path d="M5 8.5c-1.5 1.8-1.8 4.5-.5 7l7.5 5 7.5-5c1.3-2.5 1-5.2-.5-7" />
                  <path d="M9 13l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  High Margin Financing
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Finance up to 90% of your vehicle&apos;s value.
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  New or used &mdash; get the maximum backing you need with a
                  minimal down payment and flexible tenure options up to 5 years.
                </p>
              </div>
            </Reveal>

            {/* Quick Turnaround — dark navy */}
            <Reveal delay={0.12} className="bg-[#253A7D] rounded-2xl p-7 md:p-9 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FCDB81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#F18F33] mb-2.5">
                  Quick Turnaround
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-white leading-snug mb-3">
                  Pre-approval within 24 to 48 hours.
                </h3>
                <p className="text-[14px] text-white/65 leading-relaxed">
                  Submit your documents and move forward faster. Our team
                  reviews every application with urgency so you&apos;re not left
                  waiting.
                </p>
              </div>
            </Reveal>

            {/* Flexible & Transparent — cream */}
            <Reveal delay={0.18} className="bg-[#FDF0CD] rounded-2xl p-7 md:p-9 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8721F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5l8 3v6c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10v-6l8-3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#B8721F] mb-2.5">
                  Flexible &amp; Transparent
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  We look beyond your credit score.
                </h3>
                <p className="text-[14px] text-[#272A33]/70 leading-relaxed">
                  We evaluate your current potential and financial stability.
                  Honest &amp; transparent approach to finding solutions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[var(--text-muted)] mb-10">
              What our customers say
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <blockquote className="text-[22px] md:text-[28px] font-light text-[#272A33] leading-[1.4] tracking-[-0.01em]">
                &ldquo;The process was so fast &mdash; I got my vehicle
                within a week of applying. The team was incredibly helpful from
                start to finish.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#253A7D] flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#272A33]">
                    Ahmad Razak
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    Vehicle Owner &middot; Kuching
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-8">
              <Reveal delay={0.08}>
                <div className="border-l-2 border-[#2C76BB] pl-6">
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed italic">
                    &ldquo;Even with my credit history, First Class Credit found
                    a way to help me. Transparent rates, no surprises.&rdquo;
                  </p>
                  <p className="text-[13px] font-semibold text-[#272A33] mt-3">
                    Siti Nurhaliza &middot; Sibu
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="border-l-2 border-[#F18F33] pl-6">
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed italic">
                    &ldquo;The online application took less than 5 minutes.
                    Pre-approval came in 24 hours. Professional service from
                    start to finish.&rdquo;
                  </p>
                  <p className="text-[13px] font-semibold text-[#272A33] mt-3">
                    James Lee &middot; Miri
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pt-20 md:pt-28 pb-6 md:pb-8 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#2C76BB] mb-4">
                Common Questions
              </p>
              <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-semibold text-[#272A33] leading-[1.15] tracking-[-0.01em]">
                Common questions, <br />straight answers.
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-[#eef0f5] px-6 md:px-8">
                  <FAQAccordion items={homeFAQ} />
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 text-center">
                  <Link
                    href="/resources"
                    className="text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors duration-300"
                  >
                    See all FAQs &rarr;
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA — intersects footer ===== */}
      <section className="relative z-10 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl px-7 md:px-12 py-9 md:py-14 translate-y-[18%] md:translate-y-[40%] shadow-[0_24px_60px_-20px_rgba(13,36,97,0.45)]">
              {/* Car image bg */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80&auto=format&fit=crop')",
                }}
                aria-hidden
              />
              {/* Dark blue gradient: solid left -> transparent right */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #0d2461 0%, #0d2461ee 35%, #253A7Dcc 60%, rgba(37,58,125,0.45) 100%)",
                }}
                aria-hidden
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
                <div className="flex-1">
                  <h2 className="text-[26px] md:text-[34px] lg:text-[38px] font-semibold text-white leading-[1.15] tracking-[-0.01em]">
                    Ready to finance your next vehicle?
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-white/70 mt-3 max-w-md">
                    Start your application in just 5 minutes.
                  </p>
                </div>
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit flex-shrink-0"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
