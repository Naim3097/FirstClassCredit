import Link from "next/link";
import Image from "next/image";
import FAQTabs from "@/components/FAQTabs";
import RepresentativeExample from "@/components/RepresentativeExample";
import ImpactShowcase from "@/components/ImpactShowcase";
import HomeHero, { type HeroSlide } from "@/components/home/HomeHero";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import { bannersToSlides } from "@/components/home/heroSlides";
import { mapImpact } from "@/components/home/impactData";
import { faqsToItems } from "@/components/faqItems";
import {
  getHeroBanners,
  getHomeImpact,
  getTestimonials,
  getFAQs,
} from "@/lib/content";
import { smartphoneHomeFAQ } from "@/data/smartphoneFAQ";
import { Reveal } from "@/components/ScrollAnimations";

// Built-in slides — used until hero banners are added in the CMS.
const FALLBACK_SLIDES: HeroSlide[] = [
  {
    key: "motorcycle",
    eyebrow: "First Class Motorcycle Hire Purchase Financing",
    accent: "sky",
    title: "Your Next Ride,\nFinanced the Straightforward Way",
    body: "Licensed motorcycle Hire Purchase financing in Kuching. Up to 90% margin, tenures up to 60 months, fixed rates with no surprises.",
    bg: "/home-2.jpg",
    applyHref: "/apply",
    howHref: "/financing-hp",
    applyLabel: "Apply Now",
    howLabel: "How It Works",
  },
  {
    key: "smartphone",
    eyebrow: "First Class Smartphone Hire Purchase Financing",
    accent: "gold",
    title: "Smart Financing for\nYour Next Smartphone",
    body: "Fund your next tech upgrade effortlessly. First Class Credit is bringing you hassle-free, accessible smartphone financing with flexible terms to Kuching and beyond.",
    bg: "/home-iphone-2.jpg",
    applyHref: "/apply?type=smartphone",
    howHref: "/objective-financing",
    applyLabel: "Apply Now",
    howLabel: "How It Works",
  },
];

// Built-in reviews — used until testimonials are added in the CMS.
const FALLBACK_TESTIMONIALS = [
  {
    quote:
      "The process was so fast — I got my motorcycle within a week of applying. The team was incredibly helpful from start to finish.",
    authorName: "Ahmad Razak",
    descriptor: "Motorcycle Owner · Kuching",
    featured: true,
  },
  {
    quote:
      "Even with my credit history, First Class Credit found a way to help me. Transparent rates, no surprises.",
    authorName: "Siti Nurhaliza",
    descriptor: "Sibu",
    featured: false,
  },
  {
    quote:
      "The online application took less than 5 minutes. Pre-approval came in 24 hours. Professional service from start to finish.",
    authorName: "James Lee",
    descriptor: "Miri",
    featured: false,
  },
];

const homeFAQ = [
  {
    question: "What are the basic eligibility requirements?",
    answer:
      "Malaysian citizen aged 18\u201365 at the point of application with a minimum monthly income of RM1,500.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, latest 3 months\u2019 salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours.",
  },
  {
    question: "What is the maximum financing margin and tenure?",
    answer:
      "You can finance up to 90% of the motorcycle\u2019s value for a maximum period of 5 years (60 months). Actual margin depends on your profile and the motorcycle.",
  },
  {
    question: "What is the profit rate offered?",
    answer:
      "A fixed flat rate of 10.00% per annum (\u2248 0.833% per month), locked in for the full tenure.",
  },
  {
    question: "Can you provide a representative example?",
    answer: (
      <>
        <p>Here is a typical representative example for a hire purchase loan:</p>
        <RepresentativeExample />
      </>
    ),
  },
  {
    question: "Are there any hidden fees?",
    answer: (
      <>
        No. Per the{" "}
        <a
          href="/motorcycle-hp-pds.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2C76BB] font-semibold underline underline-offset-2 hover:text-[#253A7D]"
        >
          Product Disclosure Sheet (PDS)
        </a>
        : Stamp Duty RM20 (without guarantor) or RM60 (with guarantor),
        e-Hakmilik Charges RM3, and Postage RM10. All fees are disclosed up
        front.
      </>
    ),
  },
];

export default async function Home() {
  const [banners, impactGlobal, testimonials, faqMoto, faqPhone] =
    await Promise.all([
      getHeroBanners("en"),
      getHomeImpact("en"),
      getTestimonials("en"),
      getFAQs("en", "home-motorcycle"),
      getFAQs("en", "home-smartphone"),
    ]);

  const slides =
    banners.length > 0
      ? bannersToSlides(banners, "en", {
          apply: "Apply Now",
          how: "How It Works",
        })
      : FALLBACK_SLIDES;

  const impact = mapImpact(impactGlobal);
  const testimonialItems =
    testimonials.length > 0
      ? testimonials
      : FALLBACK_TESTIMONIALS;
  const motorcycleFAQ =
    faqMoto.length > 0 ? faqsToItems(faqMoto) : homeFAQ;
  const smartphoneFAQItems =
    faqPhone.length > 0 ? faqsToItems(faqPhone) : smartphoneHomeFAQ;

  return (
    <>
      {/* ===== HERO (alternating services) ===== */}
      <HomeHero slides={slides} />

      {/* ===== FLOATING STATS BAR ===== */}
      <div className="relative z-20 bg-[#0d2461] px-5 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(13,36,97,0.18)] px-6 md:px-12 py-7 md:py-8 -translate-y-10 md:-translate-y-14"
          >
            <div className="grid grid-cols-3 divide-x divide-[#e8e8e0]">
              {/* Stat 1 — Flexible Loan Tenures */}
              <div className="flex flex-col items-center justify-start text-center px-2 sm:px-4 md:px-8 gap-3">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5" width="17" height="15" rx="2" />
                    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-bold text-[#253A7D] leading-tight">
                  Flexible Loan Tenures
                </p>
              </div>

              {/* Stat 2 — High Financing Margin */}
              <div className="flex flex-col items-center justify-start text-center px-2 sm:px-4 md:px-8 gap-3">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l5-5 4 4 8-8" />
                    <path d="M15 8h5v5" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-bold text-[#253A7D] leading-tight">
                  High Financing Margin
                </p>
              </div>

              {/* Stat 3 — Fast Approval */}
              <div className="flex flex-col items-center justify-start text-center px-2 sm:px-4 md:px-8 gap-3">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-bold text-[#253A7D] leading-tight">
                  Fast Approval
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
                For Where You Are and Where You&apos;re Going
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
                  backgroundImage: "url('/underbone-motor-3.png')",
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
                  {/* motorbike icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#47A7DD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="17" r="2.5" />
                    <circle cx="18.5" cy="17" r="2.5" />
                    <path d="M8 17h7" />
                    <path d="M14 17l-2-6h-2l-3 4h7" />
                    <path d="M16 11l2-3h2" />
                    <path d="M12 11h4" />
                  </svg>
                </div>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-white leading-snug mb-3">
                  Ride Forward with Your Next Motorcycle
                </h3>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  Stop waiting and start riding. Secure your new or used
                  motorcycle with hassle-free HP financing and flexible
                  repayment plans up to 60 months.
                </p>
              </div>
              <Link
                href="/financing-hp"
                className="relative mt-6 text-[#47A7DD] text-[14px] font-bold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300"
              >
                Explore First Class Motorcycle HP Financing
              </Link>
            </Reveal>

            {/* Smartphone card */}
            <Reveal delay={0.16} className="relative bg-[#253A7D] border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[300px] overflow-hidden group">
              {/* House image bg */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/buy-phone-2.png')",
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
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center mb-6">
                  {/* smartphone icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FCDB81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                    <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
                  </svg>
                </div>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-white leading-snug mb-3">
                  Upgrade Your Smartphone
                </h3>
                <p className="text-[14px] text-white/65 leading-relaxed">
                  Get the latest devices without the heavy upfront cost. Enjoy
                  flexible and transparent financing plans designed to keep you
                  connected.
                </p>
              </div>
              <Link
                href="/objective-financing"
                className="relative mt-6 text-[#FCDB81]/90 text-[14px] font-bold inline-flex items-center gap-1.5 hover:text-[#FCDB81] hover:gap-3 transition-all duration-300"
              >
                Explore First Class Smartphone HP Financing
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== OUR IMPACT (motorcycle / smartphone toggle) ===== */}
      <ImpactShowcase impact={impact} />

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
                  A Fixed Flat Rate, Locked In for the Full Tenure
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Enjoy competitive rates with complete transparency upfront — no
                  hidden charges, no surprises.
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
                  Secure Maximum Financing for Your Purchase
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Get the maximum backing you need with flexible tenure options
                  tailored to fit your budget and your lifestyle.
                </p>
              </div>
            </Reveal>

            {/* Quick Turnaround — white */}
            <Reveal delay={0.12} className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  Quick Turnaround
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Pre-Approval Within 24 to 48 Hours
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Submit your documents and move forward faster. Our team
                  reviews every application with urgency so you&apos;re not left
                  waiting.
                </p>
              </div>
            </Reveal>

            {/* Flexible & Transparent — white */}
            <Reveal delay={0.18} className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5l8 3v6c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10v-6l8-3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  Flexible &amp; Transparent
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  We Look Beyond Your Credit Score
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  We evaluate your current potential and financial stability.
                  Honest &amp; transparent approach to finding solutions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <HomeTestimonials
        eyebrow="What our customers say"
        items={testimonialItems}
      />

      {/* ===== FAQ ===== */}
      <section className="pt-20 md:pt-28 pb-6 md:pb-8 bg-[#f7f4ef]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#2C76BB] mb-4">
                Common Questions
              </p>
              <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-semibold text-[#272A33] leading-[1.15] tracking-[-0.01em]">
                Common Questions, <br />Straight Answers
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <FAQTabs
                  motorcycleItems={motorcycleFAQ}
                  smartphoneItems={smartphoneFAQItems}
                  panelClassName="bg-white rounded-2xl border border-[#eef0f5] px-6 md:px-8"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 text-center">
                  <Link
                    href="/resources"
                    className="text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors duration-300"
                  >
                    See All FAQs
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
              {/* Bike image bg */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/watch-laptop-and-phone.jpg')",
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
                    Ready to Finance Your Next Milestone?
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-white/70 mt-3 max-w-md">
                    Start your application in just 5 minutes.
                  </p>
                </div>
                <a
                  href="/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit flex-shrink-0"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
