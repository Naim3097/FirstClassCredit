import Image from "next/image";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { HeroReveal, Reveal } from "@/components/ScrollAnimations";
import PartnerSection from "@/components/about/PartnerSection";
import { getAboutPartner } from "@/lib/content";

export default async function About() {
  const partner = await getAboutPartner("en");
  const partnerLogo =
    partner && typeof partner.logo === "object" && partner.logo?.url
      ? partner.logo.url
      : "/jomkaki-motor.png";

  return (
    <>
      {/* ===== AB-S01 HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-0">
            {/* Left: text */}
            <HeroReveal className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
                About Us
              </p>
              <h1 className="text-[34px] sm:text-[44px] md:text-[52px] font-bold leading-[1.08] text-white tracking-[-0.02em] mb-6">
                Your Trusted Partner<br className="hidden sm:block" /> in Financing Services
              </h1>
              <p className="text-[15px] md:text-[16px] text-white/70 max-w-[420px] mb-10 leading-[1.65]">
                Whether you are upgrading your ride or your smartphone, we help Malaysians reach their goals with flexible, transparent, and reliable hire purchase financing.
              </p>
              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#47A7DD" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-white/65 leading-snug">Trusted by Malaysians<br />since 2018</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#47A7DD" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-white/65 leading-snug">Flexible solutions<br />for your needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#47A7DD" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-white/65 leading-snug">Fast approvals,<br />hassle-free</span>
                </div>
              </div>
            </HeroReveal>

            {/* Right: photo — mobile (below text) + lg (side column) */}
            <div className="relative self-end mt-8 lg:mt-0">
              <div className="relative h-[280px] sm:h-[360px] lg:h-[460px] mx-auto lg:ml-8 rounded-t-[2rem] overflow-hidden">
                <Image
                  src="/about-hero.jpg"
                  alt="First Class Credit financial partner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-bottom scale-[1.2] origin-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AB-S02 STORY + STATS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: story */}
            <Reveal>
              <p className="text-[20px] md:text-[26px] font-bold text-[#0d2461] leading-[1.38] mb-6">
                At First Class Credit, we believe reaching your goals should be an exciting milestone, never a financial burden.
              </p>
              <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.8] mb-3">
                Based in Kuching, Sarawak, First Class Credit Sdn. Bhd. (201801009791 / 1271805-K) is a licensed credit provider offering accessible hire purchase solutions to individuals. As a trusted institution governed by the Hire Purchase Act 1967, we provide the financial backing you need to move forward. Whether you are hitting the road with our Motorcycle HP Financing or staying connected through our Smartphone HP Financing, we bridge the gap between your aspirations and reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[#0d2461] text-[14px] font-semibold hover:text-[#47A7DD] transition-colors mt-4"
              >
                Contact Us
              </Link>
            </Reveal>

            {/* Right: stats card */}
            <Reveal delay={0.1}>
              <div className="bg-[#f4f5fb] rounded-2xl overflow-hidden">
                {/* Text + stats — padded */}
                <div className="p-7 md:p-9">
                  <div className="mb-6">
                    <p className="text-[15px] font-bold text-[#0d2461] mb-1.5">
                      Proudly based in Kuching, Sarawak
                    </p>
                    <p className="text-[13px] text-[#666] leading-relaxed">
                      Serving communities across Sarawak and supporting Malaysians nationwide.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#dddde8]">
                    <div>
                      <p className="text-[26px] md:text-[30px] font-bold text-[#0d2461] leading-none mb-1">10K+</p>
                      <p className="text-[12px] text-[#666] leading-snug">Happy Customers</p>
                    </div>
                    <div>
                      <p className="text-[26px] md:text-[30px] font-bold text-[#0d2461] leading-none mb-1">7+</p>
                      <p className="text-[12px] text-[#666] leading-snug">Years of Experience</p>
                    </div>
                    <div>
                      <p className="text-[26px] md:text-[30px] font-bold text-[#0d2461] leading-none mb-1">98%</p>
                      <p className="text-[12px] text-[#666] leading-snug">Customer Satisfaction</p>
                    </div>
                  </div>
                </div>
                {/* Sarawak image — edge-to-edge, flush to card bottom */}
                <div className="relative h-[220px] md:h-[260px]">
                  <Image
                    src="/sarawak.png"
                    alt="Kuching, Sarawak"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Soft gradient fade from card background at top */}
                  <div
                    className="absolute inset-x-0 top-0 h-20 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, #f4f5fb 0%, transparent 100%)" }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== AB-S03 WHY FCC ===== */}
      <section className="py-20 md:py-28 bg-[#f8f8f5]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal className="text-center mb-12 md:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#F18F33] mb-3">
              Our Advantage
            </p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0d2461] mb-3">
              Why First Class Credit?
            </h2>
            <div className="w-10 h-0.5 bg-[#0d2461] mx-auto" />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#0d2461" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Speed",
                desc: "You get fast pre-approvals so you can secure your ride or device without the wait.",
              },
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#0d2461" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Flexibility",
                desc: "We look beyond traditional credit scores. We evaluate your current potential and financial stability to find a plan that works for you.",
              },
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#0d2461" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Transparency",
                desc: "No hidden charges, no surprises. We operate with complete transparency so your consumer rights are always protected — in full compliance with the Hire Purchase Act 1967.",
              },
              {
                icon: (
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#0d2461" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Personalised Service",
                desc: "Our dedicated team of specialists guides you through every document, application, and signature. You're never just a number.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-14 h-14 rounded-full bg-[#e8eaf6] flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0d2461] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.75]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AB-S04 MISSION ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/about-mission.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Brand-blue overlay */}
        <div className="absolute inset-0 bg-[#0d2461] opacity-80" />
        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 text-center flex flex-col items-center">
          <Reveal y={20} duration={0.7}>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-6">
              Our Mission
            </p>
          </Reveal>
          <Reveal y={40} delay={0.12} duration={0.9}>
            <p className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.3] max-w-[860px] tracking-[-0.02em]">
              To empower Malaysians by providing inclusive financial solutions that drive mobility, digital connectivity, and economic growth.
            </p>
          </Reveal>
          <Reveal y={24} delay={0.28} duration={0.8}>
            <div className="mt-8 w-16 h-1 bg-[#EE4720] rounded-full" />
          </Reveal>
        </div>
      </section>

      {/* ===== AB-S05 VALUES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">

          {/* Header */}
          <Reveal className="mb-10 md:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#F18F33] mb-4">
              Our Values
            </p>
            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-[#0d2461] leading-[1.1] tracking-tight max-w-[540px]">
              The Values That<br />Drive Everything We Do
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: value rows */}
            <div className="flex flex-col gap-4">
              {[
                {
                  accentColor: "#0d2461",
                  iconBg: "#e8eaf6",
                  iconColor: "#0d2461",
                  icon: (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#0d2461" strokeWidth="1.7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Integrity",
                  desc: "Fair interest rates and honest communication. We say what we mean and mean what we say.",
                },
                {
                  accentColor: "#EE4720",
                  iconBg: "#fde8e2",
                  iconColor: "#EE4720",
                  icon: (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#EE4720" strokeWidth="1.7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Innovation",
                  desc: "A seamless online application process designed to save you time and effort. We invest in technology that makes your experience better.",
                },
                {
                  accentColor: "#0d2461",
                  iconBg: "#e8eaf6",
                  iconColor: "#0d2461",
                  icon: (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#0d2461" strokeWidth="1.7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Commitment",
                  desc: "Supporting you from your very first instalment all the way to your final payment and ownership transfer.",
                },
              ].map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="bg-white rounded-xl overflow-hidden flex items-stretch shadow-[0_2px_16px_-4px_rgba(13,36,97,0.09)]">
                    {/* Left accent bar */}
                    <div className="w-1 flex-shrink-0" style={{ backgroundColor: v.accentColor }} />
                    {/* Icon */}
                    <div className="flex items-center justify-center px-5 py-5 flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: v.iconBg }}
                      >
                        {v.icon}
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="w-px bg-[#eef0f5] self-stretch flex-shrink-0" />
                    {/* Text */}
                    <div className="px-5 py-5 flex flex-col gap-1.5 flex-1 min-w-0">
                      <h3 className="text-[14px] md:text-[15px] font-bold text-[#0d2461]">{v.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.7]">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right: illustration */}
            <Reveal delay={0.1} className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-[960px]">
                <Image
                  src="/about-values.png"
                  alt="Values illustration"
                  width={960}
                  height={960}
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== AB-S05b PARTNER — JomKaki Motor ===== */}
      <PartnerSection
        eyebrow={partner?.eyebrow || "Our Partner"}
        heading={partner?.heading || "Powered by JomKaki Motor"}
        logoUrl={partnerLogo}
        logoAlt="JomKaki Motor"
        linkLabel={partner?.linkLabel || "Visit JomKaki Motor"}
        linkUrl={partner?.linkUrl || "#"}
        vendorLabel="Official Vendor Partner"
        body={
          partner?.body ? (
            <RichText data={partner.body} />
          ) : (
            <>
              <p>
                At First Class Credit, we are committed to making your upgrades
                as seamless as possible. To bring our financial solutions
                directly to you, we have proudly partnered with JomKaki Motor.
              </p>
              <p>
                As our official vendor partner, JomKaki Motor serves as your
                premier destination to access our Hire Purchase (HP) financing.
                Whether you are looking to hit the road with a new motorcycle or
                upgrade your tech with the latest smartphone, you can easily
                apply for and utilise our flexible financing plans directly
                through JomKaki Motor. Together, we ensure a smooth,
                hassle-free experience from application to ownership.
              </p>
            </>
          )
        }
      />

      {/* ===== AB-S06 CTA ===== */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="hidden md:flex w-14 h-14 rounded-full bg-white/10 items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#47A7DD" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-2">
                  Ready to Get Started?
                </h2>
                <p className="text-[13px] md:text-[14px] text-white/55 max-w-[400px] leading-relaxed">
                  Join the Malaysians who have trusted First Class Credit to take control of their financial journey.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <a
                href="/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="text-white/55 text-[13px] md:text-[14px] font-medium hover:text-white transition-colors duration-300 flex items-center gap-1"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
