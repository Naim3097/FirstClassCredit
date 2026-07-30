"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ScrollAnimations";
import { Icon } from "./icons";
import { localizeHref, type Locale } from "@/lib/locale";
import type { IconKey } from "@/fields/iconOptions";

type Variant = "navy" | "light";

export interface ImpactStat {
  value: string;
  label: string;
  variant: Variant;
  icon: IconKey | string;
}

export interface ImpactService {
  key: "motorcycle" | "smartphone";
  tab: string;
  heading: string;
  body: string;
  button: { text: string; href: string };
  plate: {
    image: string;
    alt: string;
    badge?: string;
    eyebrow: string;
    text: string;
  };
  stats: ImpactStat[];
}

export interface ImpactData {
  eyebrow: string;
  services: ImpactService[];
}

const EYEBROW: Record<Locale, string> = {
  en: "Our Impact",
  ms: "Impak Kami",
};

// Built-in fallback content — used until the "Our Impact" global is populated.
const SERVICES: Record<Locale, ImpactService[]> = {
  en: [
    {
      key: "motorcycle",
      tab: "Motorcycle HP Financing",
      heading: "The Numbers That Matter",
      body: "We keep it simple. Competitive rates, fast approvals, and high financing margins so you can focus on what matters — getting on the road.",
      button: { text: "About Motorcycle Financing", href: "/financing-hp" },
      plate: {
        image: "/moped.png",
        alt: "Happy customer with new motorcycle",
        eyebrow: "On the road",
        text: "Driving Malaysians forward with simple, transparent motorcycle HP financing.",
      },
      stats: [
        { value: "90%", label: "Maximum financing margin", variant: "navy", icon: "clock" },
        { value: "60", label: "Months maximum tenure", variant: "light", icon: "calendar" },
        { value: "24–48h", label: "Pre-approval turnaround", variant: "light", icon: "bolt" },
        { value: "10%", label: "Fixed interest per annum", variant: "light", icon: "percent" },
      ],
    },
    {
      key: "smartphone",
      tab: "Smartphone HP Financing",
      heading: "Built to Keep You Connected",
      body: "A simpler way to own your next device. Transparent terms, fast pre-approvals, and a fixed monthly rate you can plan around.",
      button: { text: "About Smartphone Financing", href: "/objective-financing" },
      plate: {
        image: "/iphone-horizontal-3.jpg",
        alt: "Person using a new smartphone",
        eyebrow: "Stay connected",
        text: "Own the latest device today and spread the cost with confidence.",
      },
      stats: [
        { value: "36", label: "Months maximum tenure", variant: "light", icon: "calendar" },
        { value: "24–48h", label: "Pre-approval turnaround", variant: "light", icon: "bolt" },
        { value: "10%", label: "Per annum effective interest rate", variant: "navy", icon: "percent" },
        { value: "", label: "iPhone 17 Full Lineup Now Available", variant: "navy", icon: "apple" },
      ],
    },
  ],
  ms: [
    {
      key: "motorcycle",
      tab: "Pembiayaan Sewa Beli Motosikal",
      heading: "Angka yang Penting",
      body: "Kami permudahkan semuanya. Kadar yang kompetitif, kelulusan pantas, dan margin pembiayaan yang tinggi supaya anda boleh fokus pada apa yang penting — meneruskan perjalanan anda.",
      button: { text: "Tentang Pembiayaan Motosikal", href: "/financing-hp" },
      plate: {
        image: "/moped.png",
        alt: "Pelanggan gembira dengan motosikal baharu",
        eyebrow: "Di atas jalan",
        text: "Membawa rakyat Malaysia ke hadapan dengan pembiayaan sewa beli motosikal yang mudah dan telus.",
      },
      stats: [
        { value: "90%", label: "Margin pembiayaan maksimum", variant: "navy", icon: "clock" },
        { value: "60", label: "Bulan tempoh maksimum", variant: "light", icon: "calendar" },
        { value: "24–48j", label: "Tempoh pra-kelulusan", variant: "light", icon: "bolt" },
        { value: "10%", label: "Faedah tetap setahun", variant: "light", icon: "percent" },
      ],
    },
    {
      key: "smartphone",
      tab: "Pembiayaan Sewa Beli Telefon Pintar",
      heading: "Direka untuk Anda Sentiasa Terhubung",
      body: "Cara yang lebih mudah untuk memiliki peranti baharu anda. Terma yang telus, pra-kelulusan pantas, dan kadar bulanan tetap yang mudah dirancang.",
      button: { text: "Tentang Pembiayaan Telefon Pintar", href: "/objective-financing" },
      plate: {
        image: "/iphone-horizontal-3.jpg",
        alt: "Individu menggunakan telefon pintar baharu",
        eyebrow: "Kekal terhubung",
        text: "Miliki peranti terkini hari ini dan bayar secara ansuran dengan penuh yakin.",
      },
      stats: [
        { value: "36", label: "Bulan tempoh maksimum", variant: "light", icon: "calendar" },
        { value: "24–48j", label: "Tempoh pra-kelulusan", variant: "light", icon: "bolt" },
        { value: "10%", label: "Kadar faedah efektif setahun", variant: "navy", icon: "percent" },
        { value: "", label: "iPhone 17 Full Lineup Kini Tersedia", variant: "navy", icon: "apple" },
      ],
    },
  ],
};

function StatCard({ stat }: { stat: ImpactStat }) {
  const navy = stat.variant === "navy";
  return (
    <div
      className={`relative rounded-xl px-4 md:px-5 py-5 lg:py-4 flex items-center gap-3 md:gap-4 min-h-[110px] lg:min-h-0 overflow-hidden ${
        navy ? "bg-[#0d2461]" : "bg-[#E8F1FB]"
      }`}
    >
      <div
        className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          navy ? "bg-white/10 text-[#FCDB81]" : "bg-white text-[#253A7D]"
        }`}
      >
        <Icon name={stat.icon} size={18} />
      </div>
      {stat.value ? (
        <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-3">
          <p
            className={`text-[22px] md:text-[26px] lg:text-[25px] font-bold leading-none tracking-tight whitespace-nowrap ${
              navy ? "text-[#FCDB81]" : "text-[#253A7D]"
            }`}
          >
            {stat.value}
          </p>
          <p
            className={`text-[11.5px] md:text-[12px] mt-1.5 lg:mt-0 leading-snug ${
              navy ? "text-white/70" : "text-[#272A33]/65"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ) : (
        <div className="min-w-0 flex-1">
          <p
            className={`text-[13px] md:text-[14px] font-bold leading-snug ${
              navy ? "text-white" : "text-[#253A7D]"
            }`}
          >
            {stat.label}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ImpactShowcase({
  locale = "en",
  impact,
}: {
  locale?: Locale;
  impact?: ImpactData | null;
}) {
  const services =
    impact && impact.services.length > 0 ? impact.services : SERVICES[locale];
  const eyebrow = impact?.eyebrow || EYEBROW[locale];

  const [active, setActive] = useState<ImpactService["key"]>("motorcycle");
  const service = services.find((s) => s.key === active) ?? services[0];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Header */}
        <Reveal className="mb-9 md:mb-12 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#2C76BB] mb-5">
            {eyebrow}
          </p>

          {/* Segmented service toggle */}
          <div className="inline-flex p-1 rounded-full bg-[#F1F4F9] border border-[#e2e6ef] mb-6">
            {services.map((s) => {
              const isActive = s.key === active;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(s.key)}
                  aria-pressed={isActive}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13.5px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#0d2461] text-white shadow-[0_8px_18px_-8px_rgba(13,36,97,0.6)]"
                      : "text-[#272A33]/60 hover:text-[#0d2461]"
                  }`}
                >
                  {s.tab}
                </button>
              );
            })}
          </div>

          {/* Heading / body / button — swap on toggle */}
          <div key={`head-${active}`} className="impact-swap">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#272A33] leading-[1.15] tracking-[-0.01em] mb-4">
              {service.heading}
            </h2>
            <p className="text-[15px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-lg">
              {service.body}
            </p>
            <div className="mt-7">
              <Link
                href={localizeHref(service.button.href, locale)}
                className="inline-flex items-center px-5 py-2.5 bg-[#0d2461] text-white text-[13.5px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#253A7D]"
              >
                {service.button.text}
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Bento — swap on toggle */}
        <Reveal>
          <div key={`bento-${active}`} className="impact-swap grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            {/* Wide image plate */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden h-[260px] md:h-[340px] lg:h-auto lg:min-h-[420px] shadow-[0_20px_60px_-30px_rgba(13,36,97,0.35)]">
              {service.plate.image && (
                <Image
                  src={service.plate.image}
                  alt={service.plate.alt}
                  fill
                  className="object-cover object-center"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(13,36,97,0.15) 0%, rgba(13,36,97,0.05) 40%, rgba(13,36,97,0.55) 100%)",
                }}
                aria-hidden
              />
              {service.plate.badge && (
                <span className="absolute top-4 right-4 md:top-6 md:right-6 inline-block bg-[#F18F33] text-white text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full">
                  {service.plate.badge}
                </span>
              )}
              {/* Floating mini-card overlay */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-7 md:left-7 md:right-auto max-w-[240px] md:max-w-[300px] bg-white/95 backdrop-blur rounded-lg md:rounded-xl p-3 md:p-5 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)]">
                <p className="text-[9px] md:text-[11px] font-semibold uppercase tracking-[1.5px] md:tracking-[2px] text-[#2C76BB] mb-1 md:mb-1.5">
                  {service.plate.eyebrow}
                </p>
                <p className="text-[11px] md:text-[14px] text-[#272A33] leading-snug">
                  {service.plate.text}
                </p>
              </div>
            </div>

            {/* Right: stat cards (mobile 2-col, desktop 1-col) */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3">
              {service.stats.map((stat, i) => (
                <StatCard key={`${stat.label}-${i}`} stat={stat} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
