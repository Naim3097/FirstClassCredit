"use client";

import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import { HeroReveal, Reveal, StaggerChildren, CountUp } from "@/components/ScrollAnimations";
import AnimatedLiquidBackground from "@/components/AnimatedLiquidBackground";

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
      "You can finance up to 90% of the motorcycle\u2019s value for a maximum period of 5 years (60 months).",
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
      <section className="relative min-h-screen flex items-end bg-[#253A7D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#253A7D] via-[#253A7D]/60 to-[#253A7D]/30" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-20 md:pb-28 pt-32 w-full">
          <HeroReveal className="max-w-[640px]">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
              HP Motorcycle Financing
            </p>
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-extralight leading-[1.08] text-white tracking-[-0.02em] mb-6">
              Turn your two-wheeled
              <br />
              goals into reality.
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/60 max-w-[480px] mb-10 leading-[1.6]">
              Hassle-free HP financing in Kuching and beyond. Flexible
              repayments up to 60 months, up to 90% margin of financing.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Apply Now
              </Link>
              <Link
                href="/financing-hp"
                className="text-white/60 text-[15px] font-medium hover:text-white transition-colors duration-300"
              >
                How it works &rarr;
              </Link>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== ANIMATED GRADIENT TAGLINE ===== */}
      <section className="relative overflow-hidden" style={{ minHeight: "560px" }}>
        <AnimatedLiquidBackground color1="#253A7D" color2="#1a6bb5" color3="#0b1a3d" />

        {/* subtle grain overlay matching the Framer component's noise layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
            opacity: 0.06,
          }}
        />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[560px] text-center max-w-[800px] mx-auto px-5 md:px-10 py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-6">
              Your Financial Partner
            </p>
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-extralight leading-[1.08] text-white tracking-[-0.02em] mb-6">
              Financing that moves{" "}
              <br className="hidden md:block" />
              <span className="text-[#47A7DD]">as fast as you do.</span>
            </h2>
            <p className="text-[17px] md:text-[19px] text-white/60 max-w-[480px] mx-auto leading-[1.6] mb-10">
              Get pre-approved in 24–48 hours with minimal paperwork. We handle
              the complexity so you can focus on the ride.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-[13px] font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47A7DD] inline-block" />
                Up to 90&nbsp;% financing margin
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47A7DD] inline-block" />
                Tenures up to 60 months
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47A7DD] inline-block" />
                Kuching &amp; beyond
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-tight text-[#272A33] mb-16 max-w-md">
              Financing solutions for where you are and where you&apos;re going.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Reveal className="md:col-span-3 bg-white border border-[#e8e8e0] rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] group transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(39,42,51,0.08)]">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#253A7D] leading-snug mb-3">
                  Hit the Road with Your Dream Bike
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-md">
                  Stop waiting and start riding. Secure your new or used
                  motorcycle with hassle-free HP financing and flexible
                  repayment plans up to 60 months.
                </p>
              </div>
              <Link
                href="/financing-hp"
                className="mt-8 text-[#2C76BB] text-[15px] font-semibold inline-flex items-center gap-2 group-hover:gap-3.5 transition-all duration-300"
              >
                Explore Motorcycle Financing <span aria-hidden>&rarr;</span>
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-2 bg-[#272A33] rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
              <span className="inline-block bg-[#F18F33] text-white text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full w-fit">
                Coming Soon
              </span>
              <div>
                <h3 className="text-[20px] font-semibold text-white leading-snug mb-3 mt-6">
                  Achieve Your Next Big Goal
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Flexible financing for personal milestones, lifestyle
                  upgrades, and essential devices.
                </p>
                <Link
                  href="/objective-financing"
                  className="mt-6 text-white/40 text-[14px] font-medium inline-flex items-center gap-1.5"
                >
                  Objective Financing &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== NUMBERS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-4">
                The numbers that matter.
              </h2>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-md">
                We keep it simple. Competitive fixed rates, fast approvals, and
                high financing margins so you can focus on what matters &mdash;
                getting on the road.
              </p>
            </Reveal>

            <StaggerChildren className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <p className="text-[42px] md:text-[52px] font-extralight text-[#253A7D] leading-none tracking-tight">
                  <CountUp end={90} suffix="%" />
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] mt-2">
                  Maximum financing margin
                </p>
              </div>
              <div>
                <p className="text-[42px] md:text-[52px] font-extralight text-[#253A7D] leading-none tracking-tight">
                  <CountUp end={60} />
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] mt-2">
                  Months maximum tenure
                </p>
              </div>
              <div>
                <p className="text-[42px] md:text-[52px] font-extralight text-[#253A7D] leading-none tracking-tight">
                  24-48h
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] mt-2">
                  Pre-approval turnaround
                </p>
              </div>
              <div>
                <p className="text-[42px] md:text-[52px] font-extralight text-[#253A7D] leading-none tracking-tight">
                  <CountUp end={10} suffix="%" />
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] mt-2">
                  Fixed rate per annum
                </p>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <Reveal className="bg-white rounded-2xl p-8 md:p-10 border border-[#e8e8e0]">
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#2C76BB] mb-4">
                  Competitive Rates
                </p>
                <h3 className="text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Rates designed to match your financial profile.
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  Fixed or variable interest rates with full transparency. No
                  hidden charges &mdash; every fee is stated upfront in your
                  Product Disclosure Sheet.
                </p>
              </Reveal>
              <Reveal delay={0.08} className="bg-[#253A7D] rounded-2xl p-8 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#47A7DD] mb-4">
                  Quick Turnaround
                </p>
                <h3 className="text-[20px] font-semibold text-white leading-snug mb-3">
                  Pre-approval within 24 to 48 hours.
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed">
                  Submit your documents and move forward faster. Our team
                  reviews every application with urgency so you&apos;re not left
                  waiting.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 lg:mt-12">
              <Reveal delay={0.04} className="bg-white rounded-2xl p-8 md:p-10 border border-[#e8e8e0]">
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#2C76BB] mb-4">
                  High Margin Financing
                </p>
                <h3 className="text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Finance up to 90% of your motorcycle&apos;s value.
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  New or used &mdash; get the maximum backing you need with a
                  minimal down payment and flexible tenure options up to 5
                  years.
                </p>
              </Reveal>
              <Reveal delay={0.12} className="bg-[#FDF0CD] rounded-2xl p-8 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#253A7D]/60 mb-4">
                  Flexible &amp; Transparent
                </p>
                <h3 className="text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  We look beyond your credit score.
                </h3>
                <p className="text-[15px] text-[#272A33]/70 leading-relaxed">
                  We evaluate your current potential and financial stability.
                  Even if traditional banks have declined you, we specialize in
                  finding solutions.
                </p>
              </Reveal>
            </div>
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
                &ldquo;The process was so fast &mdash; I got my motorcycle
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
                    Motorcycle Owner &middot; Kuching
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
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[720px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-12">
              Common questions, <br className="hidden md:block" />
              straight answers.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={homeFAQ} />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <Link
                href="/resources"
                className="text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors duration-300"
              >
                See all FAQs &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#272A33] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <h2 className="text-[22px] md:text-[28px] font-light text-white leading-snug max-w-lg">
                Ready to get on the road? <br className="hidden md:block" />
                Start your application in 5 minutes.
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
