"use client";

import Image from "next/image";
import Link from "next/link";
import LoanCalculator from "@/components/LoanCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import RepresentativeExample from "@/components/RepresentativeExample";
import { HeroReveal, Reveal, StaggerChildren } from "@/components/ScrollAnimations";

const hpFAQ = [
  {
    question: "Apakah itu perjanjian Hire Purchase (HP)?",
    answer:
      "Ia merupakan kontrak di mana anda “menyewa” motosikal daripada Pemilik (First Class Credit Sdn. Bhd.) dan hak milik berpindah kepada anda setelah pembiayaan diselesaikan sepenuhnya. Anda hanya menjadi pemilik sah selepas ansuran terakhir dijelaskan.",
  },
  {
    question:
      "Adakah pembiayaan Hire Purchase motosikal First Class Credit tertakluk di bawah Akta Sewa Beli 1967?",
    answer:
      "Ya. Semua pembiayaan motosikal kami tertakluk di bawah Akta Sewa Beli 1967, yang melindungi anda sebagai Penyewa.",
  },
  {
    question: "Apakah jumlah maksimum yang boleh dibiayai?",
    answer:
      "Anda boleh membiayai sehingga 90% daripada nilai motosikal. Margin sebenar bergantung pada profil anda dan motosikal tersebut.",
  },
  {
    question: "Apakah kadar keuntungan yang ditawarkan?",
    answer:
      "Kadar rata tetap 10.00% setahun (≈ 0.833% sebulan). Kadar ini dikunci untuk sepanjang tempoh pembiayaan.",
  },
  {
    question: "Apakah tempoh pinjaman minimum dan maksimum?",
    answer: "Minimum 1 tahun (12 bulan) dan maksimum 5 tahun (60 bulan).",
  },
  {
    question: "Boleh berikan contoh perwakilan?",
    answer: (
      <>
        <p>Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli:</p>
        <RepresentativeExample
          title="Contoh Pinjaman Perwakilan"
          rows={[
            { label: "Jumlah pinjaman", value: "RM10,000" },
            { label: "Kadar faedah", value: "10% setahun (kadar rata)" },
            { label: "Tempoh", value: "48 bulan" },
          ]}
          monthlyLabel="Ansuran bulanan"
          monthly="RM294"
          finalLabel="Ansuran akhir"
          final="RM278"
          note="*Kedua-dua ansuran termasuk yuran transaksi."
        />
      </>
    ),
  },
  {
    question: "Apakah yuran dan caj yang perlu saya bayar?",
    answer:
      "Menurut PDS: Duti Setem RM20 (tanpa penjamin) atau RM60 (dengan penjamin), Caj e-Hakmilik RM3, dan Pos RM10. Semua yuran didedahkan dengan jelas di awal — tiada caj tersembunyi.",
  },
  {
    question: "Adakah saya memerlukan insurance / Takaful?",
    answer:
      "Ya. Perlindungan insurance / Takaful komprehensif adalah wajib di bawah Akta Sewa Beli 1967 sehingga kemudahan HP diselesaikan sepenuhnya.",
  },
  {
    question: "Bagaimana jika saya terlepas bayaran?",
    answer:
      "Penalti bayaran lewat sebanyak 8% setahun atas jumlah tertunggak akan dikenakan, dikira secara harian. Hubungi kami lebih awal jika anda menghadapi kesukaran supaya kami dapat mencari penyelesaian yang sesuai.",
  },
  {
    question: "Bolehkah saya menyelesaikan pinjaman lebih awal?",
    answer:
      "Ya. Anda akan menerima rebat berkanun menurut Akta Sewa Beli 1967, dikira seperti berikut: Rebat = [RP × (RP + 1)] / [OP × (OP + 1)] × Jumlah Caj Tempoh, di mana RP = Baki Tempoh (bulan) dan OP = Tempoh Asal (bulan).",
  },
  {
    question: "Berapa lama proses kelulusan mengambil masa?",
    answer:
      "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini, dan penyata KWSP/bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam.",
  },
];

export default function FinancingHPMs() {
  return (
    <>
      {/* ===== VF-S01 HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        {/* Right-side motorcycle image */}
        <div className="absolute inset-0">
          {/* Mobile image (hidden on lg+) */}
          <Image
            src="/moped-mobile-view.jpg"
            alt=""
            fill
            className="object-cover object-center lg:hidden"
            priority
          />
          {/* Desktop image (hidden on mobile) */}
          <Image
            src="/moped-bike-2.jpg"
            alt=""
            fill
            className="object-cover object-right hidden lg:block"
            priority
          />
          {/* Left-to-right gradient: minimal overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 20%, rgba(13,36,97,0.75) 38%, rgba(13,36,97,0.15) 60%, rgba(13,36,97,0.0) 100%)",
            }}
          />
          {/* Subtle bottom navy fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d2461]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32 lg:pb-40 min-h-[580px] md:min-h-[680px] lg:min-h-[740px] flex items-center">
          <HeroReveal className="max-w-[600px]">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] md:tracking-[3px] text-[#47A7DD] mb-4 md:mb-5">
              Pembiayaan Sewa Beli Motosikal First Class
            </p>
            <h1 className="text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              Membiayai motosikal<br className="hidden sm:block" /> baharu anda, dipermudah
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[440px] mb-8 md:mb-10 leading-[1.65]">
              Pembiayaan Hire Purchase yang pantas, fleksibel dan telus untuk
              motosikal baharu dan terpakai — margin sehingga 90% dan tempoh
              sehingga 5 tahun, tertakluk sepenuhnya di bawah Akta Sewa Beli 1967.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <a
                href="/ms/apply"
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

      {/* ===== VF-S02 WHY US ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-start">
            {/* Heading column */}
            <Reveal className="lg:col-span-3">
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                Mengapa Pilih<br /> First Class Credit?
              </h2>
              <div className="w-12 h-[3px] bg-[#2C76BB] rounded-full" />
            </Reveal>

            {/* Cards */}
            <StaggerChildren className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
              {[
                {
                  title: "Kadar Tetap Kompetitif",
                  desc: "Kadar rata tetap yang dikunci supaya anda boleh merancang aliran tunai bulanan dengan yakin.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V12M10 20V4M16 20v-6M22 20H2" />
                    </svg>
                  ),
                },
                {
                  title: "Margin Tinggi",
                  desc: "Biayai sehingga 90% daripada nilai motosikal anda — baharu atau terpakai.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="6" y1="18" x2="18" y2="6" />
                      <circle cx="7.5" cy="7.5" r="2" />
                      <circle cx="16.5" cy="16.5" r="2" />
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
                  title: "Pembaharuan Tanpa Kerumitan",
                  desc: "Perkhidmatan pembaharuan road tax dan insurance / Takaful yang bersepadu.",
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
      <section className="relative py-16 md:py-24 bg-[#f7f4ef] overflow-hidden">
        {/* Decorative dot grid — bottom left */}
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none" aria-hidden>
          <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 24 + 12} cy={row * 24 + 12} r="3" fill="#0d2461" />
              ))
            )}
          </svg>
        </div>
        {/* Decorative dot grid — top right */}
        <div className="absolute top-0 right-0 w-40 h-32 opacity-10 pointer-events-none" aria-hidden>
          <svg width="160" height="128" viewBox="0 0 160 128" fill="none">
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 7 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 22 + 11} cy={row * 22 + 11} r="2.5" fill="#0d2461" />
              ))
            )}
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: heading panel */}
            <Reveal className="lg:col-span-4">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#dde3f0] rounded-full px-4 py-2 mb-7 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d2461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="13" y2="17" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#0d2461]">Sebelum Anda Memohon</span>
              </div>

              <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#0d2461] leading-[1.1] tracking-tight mb-5">
                Kelayakan &amp;<br />Dokumen
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed mb-7 max-w-[320px]">
                Pastikan anda memenuhi syarat di bawah sebelum memulakan permohonan anda.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/ms/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#0d2461] text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
                >
                  Semak Kelayakan Anda
                </a>
                <a
                  href="/motorcycle-hp-pds.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#666] text-[13px] font-medium underline underline-offset-2 hover:text-[#0d2461] transition-colors w-fit"
                >
                  Lihat Product Disclosure Sheet (PDS)
                </a>
              </div>
            </Reveal>

            {/* Right: rows card */}
            <Reveal delay={0.08} className="lg:col-span-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(13,36,97,0.12)]">
                {[
                  {
                    label: "Warganegara",
                    value: "Warganegara Malaysia",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d2461" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                      </svg>
                    ),
                  },
                  {
                    label: "Umur",
                    value: "18 hingga 70 tahun (pada akhir tempoh pembiayaan)",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d2461" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.5" y="5" width="17" height="15" rx="2" />
                        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Pendapatan Minimum",
                    value: "Gaji bulanan asas RM1,500",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d2461" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2.5" y="6" width="19" height="12" rx="2" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Dokumen",
                    value: "Salinan NRIC, slip gaji 3 bulan terkini, penyata KWSP terkini atau penyata bank 3 bulan terkini",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d2461" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    ),
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex items-center gap-0 ${i < arr.length - 1 ? "border-b border-[#eef0f5]" : ""}`}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center px-5 md:px-7 py-5 md:py-6 flex-shrink-0">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#e8eaf6] flex items-center justify-center">
                        {row.icon}
                      </div>
                    </div>
                    {/* Vertical divider */}
                    <div className="w-px self-stretch bg-[#eef0f5] flex-shrink-0" />
                    {/* Label */}
                    <div className="px-5 md:px-7 py-5 md:py-6 w-[140px] md:w-[180px] flex-shrink-0">
                      <span className="text-[13px] md:text-[15px] font-bold text-[#0d2461]">{row.label}</span>
                    </div>
                    {/* Value */}
                    <div className="px-4 md:px-6 py-5 md:py-6 flex-1 text-[13px] md:text-[14px] text-[#555] leading-snug">
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
      <section
        className="py-14 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(71,167,221,0.18) 0%, transparent 65%)" }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-4">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#47A7DD] mb-3 md:mb-4">
                Rancang bajet anda
              </p>
              <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-4 md:mb-5">
                Lihat Bagaimana Ia<br /> Sesuai Dengan Anda
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
              <LoanCalculator locale="ms" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VF-S05 HOW TO APPLY ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal className="text-center mb-10 md:mb-12">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#2C76BB] mb-3 md:mb-4">
              Cara memohon
            </p>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#272A33] leading-[1.15] tracking-tight max-w-[640px] mx-auto">
              Langkah mudah untuk anda mula menunggang
            </h2>
          </Reveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 relative">
            {/* Connecting dotted line (desktop) — vertically centered on the icon circles */}
            <div
              className="hidden lg:block absolute left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#B8D4EF] z-0"
              style={{ top: "76px" }}
              aria-hidden
            />
            {[
              {
                n: 1,
                title: "Anggarkan Pinjaman Anda",
                desc: "Gunakan kalkulator dalam talian kami untuk mencari ansuran bulanan yang sesuai dengan bajet anda.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                title: "Permohonan Dalam Talian Pantas",
                desc: "Isi borang permohonan 5 minit kami dengan butiran motosikal dan peribadi anda.",
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
                title: "Tandatangan & Tunggang",
                desc: "Tandatangani Perjanjian Hire Purchase anda, jelaskan downpayment, dan ambil motosikal anda.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                {/* Icon — blue gradient circle */}
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
                href="/ms/apply"
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

      {/* ===== VF-S06 FAQ ===== */}
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
                <FAQAccordion items={hpFAQ} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VF-S07 CTA ===== */}
      <section className="relative overflow-hidden py-9 md:py-11" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>

        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-white leading-snug tracking-tight">
                    Berminat Untuk Memohon?
                  </h2>
                  <p className="text-[13px] md:text-[14px] text-white/65 mt-1">
                    Mulakan permohonan anda dalam masa 5 minit sahaja.
                  </p>
                </div>
              </div>
              <a
                href="/ms/apply"
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
