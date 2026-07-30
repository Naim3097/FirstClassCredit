import Image from "next/image";
import Link from "next/link";
import LoanCalculator from "@/components/LoanCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import EligibilitySection from "@/components/EligibilitySection";
import { mapEligibilityRows } from "@/components/eligibilityData";
import { faqsToItems } from "@/components/faqItems";
import {
  getEligibility,
  getSiteSettings,
  getSmartphoneProducts,
  getFAQs,
} from "@/lib/content";
import { smartphoneFAQms } from "@/data/smartphoneFAQ.bm";
import { HeroReveal, Reveal, StaggerChildren } from "@/components/ScrollAnimations";

const APPLY_HREF = "/ms/apply?type=smartphone";

const phoneIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
  </svg>
);

// Built-in lineup — used until smartphone products are added in the CMS.
const FALLBACK_LINEUP = [
  { name: "iPhone 17e", desc: "Kemas, sangat nipis, dan sarat dengan ciri generasi baharu yang penting.", img: "/iphone-17e.jpg", href: APPLY_HREF },
  { name: "iPhone 17", desc: "Keseimbangan sempurna antara kuasa dan reka bentuk harian.", img: "/iphone-17.jpg", href: APPLY_HREF },
  { name: "iPhone 17 Pro", desc: "Kamera bertaraf pro dan prestasi terunggul dalam kemasan titanium premium.", img: "/iphone-17-pro.jpg", href: APPLY_HREF },
  { name: "iPhone 17 Pro Max", desc: "Pengalaman iPhone terunggul dengan paparan terbesar dan kuasa maksimum.", img: "/iphone-17-pro-max.jpg", href: APPLY_HREF },
];

const FALLBACK_ELIGIBILITY = [
  { icon: "person", label: "Warganegara", value: "Warganegara Malaysia" },
  { icon: "calendar", label: "Umur", value: "18 hingga 65 tahun" },
  { icon: "income", label: "Pendapatan Minimum", value: "Gaji bulanan asas RM1,300" },
  {
    icon: "document",
    label: "Dokumen",
    value:
      "Salinan NRIC, slip gaji 3 bulan terkini atau penyata KWSP terkini, penyata bank pengkreditan gaji 3 bulan terkini dan bukti bank.",
  },
];

export default async function SmartphoneFinancingMs() {
  const [elig, settings, products, faqs] = await Promise.all([
    getEligibility("ms"),
    getSiteSettings("ms"),
    getSmartphoneProducts("ms"),
    getFAQs("ms", "smartphone-page"),
  ]);
  const faqItems = faqs.length > 0 ? faqsToItems(faqs) : smartphoneFAQms;
  const eligGroup = elig?.smartphone;
  const eligRows = eligGroup?.rows?.length
    ? mapEligibilityRows(eligGroup)
    : FALLBACK_ELIGIBILITY;
  const smartphonePds = settings?.smartphonePdsUrl || "/smartphone-hp-pds.pdf";
  const lineup =
    products.length > 0
      ? products.map((p) => ({
          name: p.name,
          desc: p.description,
          img:
            typeof p.image === "object" && p.image?.url
              ? p.image.url
              : "/iphone-17.jpg",
          href: "/ms/apply?type=smartphone",
        }))
      : FALLBACK_LINEUP;

  return (
    <>
      {/* ===== SP-S01 HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        {/* Background image + gradient — matches the motorcycle hero fade */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/iphone-background-2.png')" }}
            aria-hidden
          />
          {/* Left-to-right gradient: minimal overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 20%, rgba(13,36,97,0.75) 38%, rgba(13,36,97,0.15) 60%, rgba(13,36,97,0.0) 100%)",
            }}
            aria-hidden
          />
          {/* Subtle bottom navy fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d2461]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32 lg:pb-40 min-h-[580px] md:min-h-[680px] lg:min-h-[740px] flex items-center">
          <HeroReveal className="max-w-[620px]">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] md:tracking-[3px] text-[#FCDB81] mb-4 md:mb-5">
              Pembiayaan Sewa Beli Telefon Pintar First Class
            </p>
            <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              Cara Bijak untuk<br className="hidden sm:block" /> Menaik Taraf Telefon Anda
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[460px] mb-8 md:mb-10 leading-[1.65]">
              Pembiayaan yang pantas dan telus untuk peranti flagship terkini.
              Nikmati bayaran bulanan yang fleksibel sehingga 36 bulan.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <a
                href={APPLY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Mohon Sekarang
              </a>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== SP-S02 WHY US ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-start">
            <Reveal className="lg:col-span-3">
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                Mengapa Pilih<br /> First Class Credit?
              </h2>
              <div className="w-12 h-[3px] bg-[#2C76BB] rounded-full" />
            </Reveal>

            <StaggerChildren className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
              {[
                {
                  title: "Kadar Tetap Kompetitif",
                  desc: "Kadar rata tetap yang dikunci supaya anda boleh merancang aliran tunai bulanan tanpa sebarang turun naik yang mengejutkan.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V12M10 20V4M16 20v-6M22 20H2" />
                    </svg>
                  ),
                },
                {
                  title: "Kos Pendahuluan Rendah",
                  desc: "Miliki telefon pintar premium tanpa menghabiskan simpanan anda.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2.5" y="6" width="19" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  ),
                },
                {
                  title: "Kelulusan Pantas",
                  desc: "Status pra-kelulusan dalam masa 24–48 jam selepas dokumen dihantar.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                    </svg>
                  ),
                },
                {
                  title: "Peranti 100% Tulen",
                  desc: "Semua telefon pintar dijamin tulen, baharu, dan disertakan dengan waranti pengeluar standard.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.5l8 3v6c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10v-6l8-3z" />
                      <path d="M9 12l2 2 4-4" />
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

      {/* ===== SP-S03 iPHONE 17 LINEUP ===== */}
      <section className="relative py-16 md:py-24 bg-[#0d2461] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          aria-hidden
          style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(71,167,221,0.25) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal className="text-center mb-10 md:mb-14 max-w-[640px] mx-auto">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#FCDB81] mb-3 md:mb-4">
              Barisan Produk
            </p>
            <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-bold text-white leading-[1.1] tracking-tight mb-4">
              iPhone 17 Full Lineup, Sedia untuk Anda
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed">
              Pilih model yang sesuai untuk anda. Mohon hari ini dan naik taraf
              ke iPhone paling canggih daripada Apple setakat ini.
            </p>
          </Reveal>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {lineup.map((d) => (
              <div
                key={d.name}
                className="group relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Device image */}
                <div className="relative aspect-[16/10] bg-[#f4f6fb] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-[15px] sm:text-[17px] md:text-[19px] font-bold text-[#0d2461] mb-2 leading-snug">
                    {d.name}
                  </h3>
                  <p className="text-[12px] md:text-[13.5px] text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                    {d.desc}
                  </p>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-[#EE4720] text-white text-[13px] md:text-[13.5px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-full"
                  >
                    Mohon Sekarang
                  </a>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== SP-S04 KELAYAKAN (CMS) ===== */}
      <EligibilitySection
        eyebrow={eligGroup?.eyebrow || "Sebelum Anda Memohon"}
        heading={eligGroup?.heading || "Kelayakan &\nDokumen"}
        intro={
          eligGroup?.intro ||
          "Pastikan anda memenuhi syarat di bawah sebelum memulakan permohonan anda."
        }
        checkLabel="Semak Kelayakan Anda"
        checkHref="/ms/apply?type=smartphone"
        pdsLabel="Lihat Product Disclosure Sheet (PDS)"
        pdsHref={smartphonePds}
        rows={eligRows}
      />

      {/* ===== SP-S05 CALCULATOR ===== */}
      <section
        className="py-14 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(71,167,221,0.18) 0%, transparent 65%)" }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-4">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#47A7DD] mb-3 md:mb-4">
                Rancang bajet anda
              </p>
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-4 md:mb-5">
                Lihat Bagaimana Ia<br /> Sesuai dengan Anda
              </h2>
              <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed max-w-md mb-5 md:mb-6">
                Gunakan kalkulator kami untuk menganggarkan ansuran bulanan
                anda. Laraskan jumlah dibiayai dan tempoh untuk mencari pelan
                bayaran balik yang sesuai untuk anda.
              </p>
              <p className="text-[12px] md:text-[13px] text-white/40 italic">
                *Berdasarkan kadar tetap 10.00% setahun (rata).
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              <LoanCalculator
                minAmount={3000}
                maxAmount={10000}
                step={500}
                defaultAmount={4000}
                tenures={[12, 24, 36]}
                defaultTenure={24}
                pdsHref={smartphonePds}
                locale="ms"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SP-S06 HOW TO APPLY ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal className="text-center mb-10 md:mb-12">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#2C76BB] mb-3 md:mb-4">
              Cara memohon
            </p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#272A33] leading-[1.15] tracking-tight max-w-[640px] mx-auto">
              Langkah Mudah ke Arah Naik Taraf Anda
            </h2>
          </Reveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 relative">
            <div
              className="hidden lg:block absolute left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#B8D4EF] z-0"
              style={{ top: "76px" }}
              aria-hidden
            />
            {[
              {
                n: 1,
                title: "Pilih Peranti Anda",
                desc: "Pilih model telefon pintar yang anda idamkan dan gunakan kalkulator kami untuk mencari ansuran bulanan yang sesuai dengan bajet anda.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                    <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
                  </svg>
                ),
              },
              {
                n: 2,
                title: "Permohonan dalam Talian Pantas",
                desc: "Isi borang permohonan 5 minit kami dengan butiran peribadi dan pekerjaan anda.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="13" rx="2" />
                    <line x1="2" y1="20" x2="22" y2="20" />
                  </svg>
                ),
              },
              {
                n: 3,
                title: "Pengesahan Pantas",
                desc: "Pasukan kami menyemak profil anda dan menghubungi anda melalui WhatsApp dalam masa 24–48 jam untuk pra-kelulusan.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="4" width="14" height="18" rx="2" />
                    <path d="M9 4V2.5h6V4" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="14" y2="14" />
                  </svg>
                ),
              },
              {
                n: 4,
                title: "Ambil Telefon Anda",
                desc: "Tandatangani perjanjian anda, jelaskan bayaran pendahuluan, dan ambil telefon pintar baharu anda.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                    <path d="M9.5 6.5l1.8 1.8 3.2-3.2" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.n} className="relative z-10 text-center px-2">
                <div className="w-7 h-7 mx-auto rounded-full bg-white border-2 border-[#2C76BB] flex items-center justify-center text-[#2C76BB] text-[12px] font-bold mb-3">
                  {s.n}
                </div>
                <div
                  className="w-16 h-16 md:w-[72px] md:h-[72px] mx-auto rounded-full flex items-center justify-center mb-5 shadow-md"
                  style={{ background: "linear-gradient(135deg, #47A7DD 0%, #2C76BB 45%, #0d2461 100%)" }}
                >
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
              <a
                href={APPLY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Mulakan Permohonan Anda
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SP-S07 FAQ ===== */}
      <section className="py-14 md:py-20 bg-[#f7f4ef]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <Reveal className="lg:col-span-4">
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                Soalan Lazim
              </h2>
              <div className="w-12 h-[3px] bg-[#2C76BB] rounded-full mb-6" />
              <Link
                href="/ms/resources"
                className="inline-flex items-center gap-1.5 text-[#2C76BB] text-[14px] font-semibold hover:text-[#253A7D] transition-colors"
              >
                Lihat Semua Soalan Lazim
              </Link>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              <div className="bg-white rounded-2xl px-5 md:px-8 py-2 md:py-3 shadow-[0_10px_40px_-20px_rgba(13,36,97,0.15)]">
                <FAQAccordion items={faqItems} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SP-S08 CTA ===== */}
      <section className="relative overflow-hidden py-9 md:py-11" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 items-center justify-center flex-shrink-0 text-white">
                  {phoneIcon}
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-white leading-snug tracking-tight">
                    Bersedia untuk Menaik Taraf Telefon Anda?
                  </h2>
                  <p className="text-[13px] md:text-[14px] text-white/65 mt-1">
                    Mulakan permohonan anda dalam masa 5 minit sahaja.
                  </p>
                </div>
              </div>
              <a
                href={APPLY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-fit"
              >
                Mohon Sekarang
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
