"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroReveal, Reveal } from "@/components/ScrollAnimations";

export default function About() {
  return (
    <>
      {/* ===== HERO — Minimal, text-only, deep blue ===== */}
      <section className="relative bg-[#253A7D] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-36 md:pt-44 pb-20 md:pb-28">
          <HeroReveal className="max-w-[680px]">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
              About Us
            </p>
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-extralight leading-[1.08] text-white tracking-[-0.02em]">
              Your trusted partner in financing services.
            </h1>
          </HeroReveal>
        </div>
      </section>

      {/* ===== INTRO — Two-column, text + image ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-[16px] md:text-[18px] text-[var(--text-secondary)] leading-[1.7] mb-6">
                At First Class Credit, we believe that achieving your mobility
                and lifestyle goals should be a milestone, not a financial
                burden.
              </p>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7]">
                Based in Kuching, Sarawak, we specialize in providing flexible
                and accessible financing solutions tailored for Malaysians.
                Whether you are purchasing your first motorcycle, upgrading your
                daily ride, or securing funds for specific personal objectives,
                we bridge the gap between your aspirations and reality.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="First Class Credit team"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STRENGTHS — Not 4 identical cards. Mixed layout. ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-16 max-w-sm">
              Why First Class Credit?
            </h2>
          </Reveal>

          {/* Two rows, 2 items each, with different emphasis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#2C76BB] mb-3">
                Speed
              </p>
              <p className="text-[16px] text-[#272A33] leading-relaxed">
                You get fast pre-approvals so you can move forward with your
                plans without delay. We know time matters when you&apos;ve found
                the right bike.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F18F33] mb-3">
                Flexibility
              </p>
              <p className="text-[16px] text-[#272A33] leading-relaxed">
                We look beyond traditional credit scores. We evaluate your
                current potential and financial stability to find the right
                solution for you.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#47A7DD] mb-3">
                Transparency
              </p>
              <p className="text-[16px] text-[#272A33] leading-relaxed">
                No hidden charges. Our services operate with strict
                compliance &mdash; including adherence to the Hire Purchase Act
                1967 &mdash; ensuring your consumer rights are always protected.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33]/50 mb-3">
                Personalised Service
              </p>
              <p className="text-[16px] text-[#272A33] leading-relaxed">
                Our dedicated team of specialists guides you through every
                document, application, and signature. You&apos;re never just a
                number.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MISSION — Full-width warm accent, blockquote style ===== */}
      <section className="py-20 md:py-28 bg-[#FDF0CD]">
        <div className="max-w-[720px] mx-auto px-5 md:px-10 lg:px-16 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#253A7D]/50 mb-6">
              Our Mission
            </p>
            <blockquote className="text-[20px] md:text-[26px] font-light text-[#272A33] leading-[1.5] tracking-[-0.01em]">
              To empower Malaysians by providing inclusive financial solutions
              that drive mobility, personal advancement, and economic growth.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ===== VALUES — Three items, horizontal dividers ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272A33] leading-snug mb-14">
              Our values
            </h2>
          </Reveal>

          <div className="divide-y divide-[#e8e8e0]">
            <Reveal>
              <div className="py-8 first:pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <h3 className="text-[18px] font-semibold text-[#272A33] md:w-40 flex-shrink-0">
                    Integrity
                  </h3>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    Fair interest rates and honest communication. We say what we
                    mean and mean what we say.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="py-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <h3 className="text-[18px] font-semibold text-[#272A33] md:w-40 flex-shrink-0">
                    Innovation
                  </h3>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    A seamless online application process designed to save you
                    time and effort. We invest in technology that makes your
                    experience better.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="py-8 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <h3 className="text-[18px] font-semibold text-[#272A33] md:w-40 flex-shrink-0">
                    Commitment
                  </h3>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    Supporting you from your very first instalment all the way
                    to your final payment and ownership transfer.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#272A33] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-[15px] text-white/50 leading-relaxed mb-6">
                Join the Malaysians who have trusted First Class Credit to take
                control of their financial journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="text-white/50 text-[15px] font-medium hover:text-white transition-colors duration-300 flex items-center"
                >
                  Contact our team &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
