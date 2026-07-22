"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroReveal, Reveal } from "@/components/ScrollAnimations";

export default function ContactMs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile hero */}
          <Image
            src="/contact-us-new-mobile.jpg"
            alt=""
            fill
            className="object-cover object-center lg:hidden"
            priority
          />
          {/* Desktop hero */}
          <Image
            src="/contact-us-new.jpg"
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
              Hubungi
            </p>
            <h1 className="text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              Jom hubungi<br className="hidden sm:block" /> kami
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[440px] mb-8 md:mb-10 leading-[1.65]">
              Sama ada anda ingin tahu lebih lanjut tentang pilihan pembiayaan kami atau perlukan bantuan dengan permohonan anda, kami sentiasa bersedia membantu. Hubungi kami hari ini!
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Hantar Mesej
              </Link>
              <a
                href="https://wa.me/60169328901"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white text-[13px] md:text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
              >
                WhatsApp Kami
              </a>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section id="contact-form" className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT: Heading + Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-[38px] md:text-[52px] font-bold text-[#272A33] leading-[1.1] tracking-[-0.02em] mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-10">
                  Beritahu kami bagaimana kami boleh bantu, dan kami akan sahkan pertanyaan anda dalam masa 1 hari bekerja.
                </p>
              </Reveal>

              {submitted ? (
                <div className="py-16">
                  <p className="text-[22px] font-semibold text-[#272A33] mb-2">
                    Terima kasih!
                  </p>
                  <p className="text-[15px] text-[var(--text-secondary)]">
                    Kami telah menerima mesej anda dan akan menghubungi anda
                    semula dalam masa 1 hari bekerja.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name | Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                      >
                        Nama
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                        placeholder="Nama penuh anda"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                      >
                        E-mel
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                        placeholder="anda@email.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone | Enquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                      >
                        Nombor Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                        placeholder="cth. 016-855 8553"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquiry"
                        className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                      >
                        Jenis Pertanyaan
                      </label>
                      <select
                        id="enquiry"
                        value={formData.enquiry}
                        onChange={(e) =>
                          setFormData({ ...formData, enquiry: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors text-[var(--text-secondary)] appearance-none"
                      >
                        <option value="">Pilih jenis pertanyaan...</option>
                        <option value="motorcycle">Mohon Pembiayaan Sewa Beli Motosikal</option>
                        <option value="smartphone">Mohon Pembiayaan Sewa Beli Telefon Pintar</option>
                        <option value="general">Pertanyaan Umum</option>
                      </select>
                    </div>
                  </div>

                  {/* Message — full width */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                    >
                      Mesej / Permintaan Khas
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors resize-none"
                      placeholder="Ada apa-apa lagi yang perlu kami tahu?"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
                  >
                    Hantar Mesej
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: Description + Image card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                {/* Image card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#e8e8e0]" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/contact-form.png"
                    alt="First Class Credit"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO + MAP ===== */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Info */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[15px] text-white/70 leading-relaxed mb-10">
                  Sama ada anda ingin tahu lebih lanjut tentang pilihan
                  pembiayaan kami atau perlukan bantuan dengan permohonan anda,
                  kami sentiasa bersedia membantu. Hubungi kami hari ini!
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/50 mb-2">
                      Alamat
                    </p>
                    <p className="text-[15px] text-white/80 leading-relaxed">
                      First Class Credit Sdn. Bhd. (1271805-K)<br />
                      Lot 538, Ground Floor, Section 6,<br />
                      KTLD, Jalan Satok,<br />
                      93400 Kuching, Sarawak
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/50 mb-2">
                      Pejabat
                    </p>
                    <a
                      href="tel:+6082237878"
                      className="text-[15px] text-[#47A7DD] hover:text-white transition-colors"
                    >
                      +60 82-237878
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/50 mb-2">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/60169328901"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#47A7DD] hover:text-white transition-colors"
                    >
                      +60 16-932 8901
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/50 mb-2">
                      Waktu operasi
                    </p>
                    <p className="text-[15px] text-white/80">
                      Isnin &ndash; Jumaat: 8:30 AM &ndash; 5:30 PM
                    </p>
                    <p className="text-[13px] text-white/50 mt-1">
                      Tutup pada hujung minggu &amp; cuti umum
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Map */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden h-full min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps?q=Lot+538+Section+6+KTLD+Jalan+Satok+93400+Kuching+Sarawak&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="First Class Credit — Lot 538, Jalan Satok, Kuching"
                />
              </div>
            </Reveal>

          </div>

          {/* Quick-apply nudge */}
          <Reveal delay={0.14}>
            <div className="mt-10 bg-white rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <p className="text-[14px] text-[#272A33]">
                Sedia untuk Memohon Pembiayaan Hire Purchase?
              </p>
              <a
                href="/ms/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EE4720] text-[14px] font-semibold whitespace-nowrap"
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
