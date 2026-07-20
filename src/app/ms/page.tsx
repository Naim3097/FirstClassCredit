"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQTabs from "@/components/FAQTabs";
import ImpactShowcase from "@/components/ImpactShowcase";
import { motorcycleHomeFAQms, smartphoneHomeFAQms } from "@/data/homeFAQ.bm";
import { HeroReveal, Reveal } from "@/components/ScrollAnimations";

const heroSlides = [
  {
    key: "motorcycle",
    eyebrow: "Pembiayaan Sewa Beli Motosikal First Class",
    eyebrowColor: "text-[#47A7DD]",
    title: (
      <>
        Motosikal baharu anda,
        <br />
        dibiayai dengan cara yang mudah
      </>
    ),
    body: "Pembiayaan Hire Purchase motosikal berlesen di Kuching. Margin sehingga 90%, tempoh sehingga 60 bulan, kadar tetap tanpa kejutan.",
    bg: "/home-2.jpg",
    applyHref: "/ms/apply",
    howHref: "/ms/financing-hp",
  },
  {
    key: "smartphone",
    eyebrow: "Pembiayaan Sewa Beli Telefon Pintar First Class",
    eyebrowColor: "text-[#FCDB81]",
    title: (
      <>
        Pembiayaan bijak untuk
        <br />
        telefon pintar baharu anda
      </>
    ),
    body: "Biayai naik taraf teknologi anda dengan mudah. First Class Credit membawakan pembiayaan telefon pintar yang mudah diakses dan tanpa kerumitan, dengan terma fleksibel untuk Kuching dan sekitarnya.",
    bg: "/home-iphone-2.jpg",
    applyHref: "/ms/apply?type=smartphone",
    howHref: "/ms/objective-financing",
  },
] as const;

export default function HomeMs() {
  const [activeHero, setActiveHero] = useState(0);
  const [interaction, setInteraction] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActiveHero((i) => (i + 1) % heroSlides.length),
      6500
    );
    return () => clearInterval(id);
  }, [interaction]);

  const goTo = (i: number) => {
    setActiveHero((i + heroSlides.length) % heroSlides.length);
    setInteraction((n) => n + 1);
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let startX: number | null = null;
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0]?.clientX ?? null;
    };
    const onEnd = (e: TouchEvent) => {
      if (startX === null) return;
      const dx = (e.changedTouches[0]?.clientX ?? startX) - startX;
      startX = null;
      if (Math.abs(dx) < 45) return;
      setActiveHero(
        (i) => (i + (dx < 0 ? 1 : -1) + heroSlides.length) % heroSlides.length
      );
      setInteraction((n) => n + 1);
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  const slide = heroSlides[activeHero];

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end bg-[#0b1a3d] overflow-hidden"
        style={{ touchAction: "pan-y" }}
      >
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <div
              key={s.key}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                activeHero === i ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={activeHero !== i}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${s.bg}')`, opacity: 0.8 }}
              />
            </div>
          ))}
          <div className="absolute inset-0 hidden md:block" style={{
            background: "linear-gradient(to top, #0d2461ee 0%, #1a3a7acc 18%, #253A7D55 35%, transparent 55%)"
          }} />
          <div className="absolute inset-0 block md:hidden" style={{
            background: "linear-gradient(to top, #0d2461f2 0%, #1a3a7add 20%, #253A7D66 40%, transparent 60%)"
          }} />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-24 md:pb-32 pt-32 flex flex-col items-center text-center">
          <HeroReveal key={slide.key} className="flex flex-col items-center">
            <p className={`text-[15px] md:text-[18px] font-extrabold uppercase tracking-[3.5px] mb-5 ${slide.eyebrowColor}`}>
              {slide.eyebrow}
            </p>
            <h1 className="text-[38px] md:text-[56px] lg:text-[68px] font-light leading-[1.06] text-white tracking-[-0.02em] mb-6">
              {slide.title}
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[560px] mb-10 leading-[1.6]">
              {slide.body}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap min-h-[52px]">
              <a
                href={slide.applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Mohon Sekarang
              </a>
              <Link
                href={slide.howHref}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white/80 text-[15px] font-medium rounded-lg hover:border-white/60 hover:text-white transition-all duration-300"
              >
                Cara Ia Berfungsi
              </Link>
            </div>
          </HeroReveal>

          <div className="mt-12 flex items-center gap-2.5">
            {heroSlides.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Tunjuk pembiayaan ${s.key}`}
                aria-current={activeHero === i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeHero === i ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLOATING STATS BAR ===== */}
      <div className="relative z-20 bg-[#0d2461] px-5 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(13,36,97,0.18)] px-6 md:px-12 py-7 md:py-8 -translate-y-10 md:-translate-y-14">
            <div className="grid grid-cols-3 divide-x divide-[#e8e8e0]">
              <div className="flex flex-col items-center justify-start text-center px-2 sm:px-4 md:px-8 gap-3">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5" width="17" height="15" rx="2" />
                    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-bold text-[#253A7D] leading-tight">
                  Tempoh Pinjaman Fleksibel
                </p>
              </div>

              <div className="flex flex-col items-center justify-start text-center px-2 sm:px-4 md:px-8 gap-3">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l5-5 4 4 8-8" />
                    <path d="M15 8h5v5" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-bold text-[#253A7D] leading-tight">
                  Margin Pembiayaan Tinggi
                </p>
              </div>

              <div className="flex flex-col items-center justify-start text-center px-2 sm:px-4 md:px-8 gap-3">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="#253A7D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-bold text-[#253A7D] leading-tight">
                  Kelulusan Pantas
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
            <Reveal className="flex flex-col justify-center md:pr-4">
              <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#47A7DD] mb-5">
                Penyelesaian Pembiayaan
              </p>
              <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-semibold leading-[1.15] text-white tracking-[-0.01em]">
                Menyokong perjalanan anda, kini dan seterusnya
              </h2>
              <p className="text-[14px] text-white/55 leading-relaxed mt-5 max-w-xs">
                Penyelesaian yang seiring dengan kehidupan anda. Mudah, fleksibel dan direka mengikut keperluan anda.
              </p>
            </Reveal>

            {/* Motorcycle card */}
            <Reveal delay={0.08} className="relative overflow-hidden bg-[#172f6e] border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[300px] group transition-all duration-500 hover:border-[#47A7DD]/40">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/underbone-motor-3.png')" }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(13,36,97,0.92) 0%, rgba(23,47,110,0.78) 45%, rgba(23,47,110,0.35) 100%)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center mb-6">
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
                  Teruskan perjalanan dengan motosikal baharu anda
                </h3>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  Berhenti menunggu, mula menunggang. Dapatkan motosikal baharu atau terpakai anda dengan pembiayaan HP tanpa kerumitan dan pelan bayaran balik fleksibel sehingga 60 bulan.
                </p>
              </div>
              <Link
                href="/ms/financing-hp"
                className="relative mt-6 text-[#47A7DD] text-[14px] font-bold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300"
              >
                Terokai Pembiayaan Sewa Beli Motosikal First Class
              </Link>
            </Reveal>

            {/* Smartphone card */}
            <Reveal delay={0.16} className="relative bg-[#253A7D] border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[300px] overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/buy-phone-2.png')" }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(37,58,125,0.92) 0%, rgba(37,58,125,0.78) 45%, rgba(37,58,125,0.3) 100%)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FCDB81" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                    <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
                  </svg>
                </div>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-white leading-snug mb-3">
                  Naik taraf telefon pintar anda
                </h3>
                <p className="text-[14px] text-white/65 leading-relaxed">
                  Dapatkan peranti terkini tanpa kos pendahuluan yang tinggi. Nikmati pelan pembiayaan yang fleksibel dan telus, direka untuk memastikan anda sentiasa terhubung.
                </p>
              </div>
              <Link
                href="/ms/objective-financing"
                className="relative mt-6 text-[#FCDB81]/90 text-[14px] font-bold inline-flex items-center gap-1.5 hover:text-[#FCDB81] hover:gap-3 transition-all duration-300"
              >
                Terokai Pembiayaan Sewa Beli Telefon Pintar First Class
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== OUR IMPACT ===== */}
      <ImpactShowcase locale="ms" />

      {/* ===== WHY US ===== */}
      <section className="relative py-24 md:py-32 bg-[#0d2461] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <Image src="/home-hero.jpg" alt="" fill className="object-cover object-center opacity-50" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(13,36,97,0.65) 0%, rgba(13,36,97,0.55) 50%, rgba(13,36,97,0.75) 100%)" }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <Reveal className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  Kadar Kompetitif
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Kadar rata tetap, dikunci sepanjang tempoh
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Nikmati kadar kompetitif dengan ketelusan sepenuhnya dari awal — tiada caj tersembunyi, tiada kejutan.
                </p>
              </div>
            </Reveal>

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
                  Pembiayaan Margin Tinggi
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Dapatkan pembiayaan maksimum untuk pembelian anda
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Dapatkan sokongan maksimum yang anda perlukan dengan pilihan tempoh fleksibel yang disesuaikan dengan bajet dan gaya hidup anda.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  Kelulusan Pantas
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Pra-kelulusan dalam masa 24 hingga 48 jam
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Hantar dokumen anda dan bergerak lebih pantas. Pasukan kami menyemak setiap permohonan dengan segera supaya anda tidak menunggu lama.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="bg-white rounded-2xl p-7 md:p-9 border border-[#eef0f5] flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5l8 3v6c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10v-6l8-3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#2C76BB] mb-2.5">
                  Fleksibel &amp; Telus
                </p>
                <h3 className="text-[19px] md:text-[20px] font-semibold text-[#272A33] leading-snug mb-3">
                  Kami menilai lebih daripada skor kredit anda
                </h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Kami menilai potensi semasa dan kestabilan kewangan anda. Pendekatan yang jujur &amp; telus dalam mencari penyelesaian.
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
              Apa kata pelanggan kami
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <blockquote className="text-[22px] md:text-[28px] font-light text-[#272A33] leading-[1.4] tracking-[-0.01em]">
                &ldquo;Prosesnya sangat pantas &mdash; saya dapat motosikal saya dalam masa seminggu selepas memohon. Pasukan mereka amat membantu dari mula hingga akhir.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#253A7D] flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#272A33]">Ahmad Razak</p>
                  <p className="text-[13px] text-[var(--text-muted)]">Pemilik Motosikal &middot; Kuching</p>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-8">
              <Reveal delay={0.08}>
                <div className="border-l-2 border-[#2C76BB] pl-6">
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed italic">
                    &ldquo;Walaupun dengan sejarah kredit saya, First Class Credit tetap mencari jalan untuk membantu saya. Kadar yang telus, tiada kejutan.&rdquo;
                  </p>
                  <p className="text-[13px] font-semibold text-[#272A33] mt-3">Siti Nurhaliza &middot; Sibu</p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="border-l-2 border-[#F18F33] pl-6">
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed italic">
                    &ldquo;Permohonan dalam talian mengambil masa kurang daripada 5 minit. Pra-kelulusan diterima dalam masa 24 jam. Perkhidmatan profesional dari mula hingga akhir.&rdquo;
                  </p>
                  <p className="text-[13px] font-semibold text-[#272A33] mt-3">James Lee &middot; Miri</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="pt-20 md:pt-28 pb-6 md:pb-8 bg-[#f7f4ef]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#2C76BB] mb-4">
                Soalan Lazim
              </p>
              <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-semibold text-[#272A33] leading-[1.15] tracking-[-0.01em]">
                Soalan lazim, <br />jawapan jelas
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <FAQTabs
                  motorcycleItems={motorcycleHomeFAQms}
                  smartphoneItems={smartphoneHomeFAQms}
                  locale="ms"
                  panelClassName="bg-white rounded-2xl border border-[#eef0f5] px-6 md:px-8"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 text-center">
                  <Link
                    href="/ms/resources"
                    className="text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors duration-300"
                  >
                    Lihat Semua Soalan Lazim
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative z-10 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl px-7 md:px-12 py-9 md:py-14 translate-y-[18%] md:translate-y-[40%] shadow-[0_24px_60px_-20px_rgba(13,36,97,0.45)]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/watch-laptop-and-phone.jpg')" }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, #0d2461 0%, #0d2461ee 35%, #253A7Dcc 60%, rgba(37,58,125,0.45) 100%)" }}
                aria-hidden
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
                <div className="flex-1">
                  <h2 className="text-[26px] md:text-[34px] lg:text-[38px] font-semibold text-white leading-[1.15] tracking-[-0.01em]">
                    Bersedia untuk membiayai pencapaian anda yang seterusnya?
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-white/70 mt-3 max-w-md">
                    Mulakan permohonan anda dalam masa 5 minit sahaja.
                  </p>
                </div>
                <a
                  href="/ms/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit flex-shrink-0"
                >
                  Mohon Sekarang
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
