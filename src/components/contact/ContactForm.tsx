"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/locale";

const LABELS = {
  en: {
    thankYouTitle: "Thank you!",
    thankYouBody:
      "We've received your message and will get back to you within 1 working day.",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    phone: "Phone Number",
    phonePlaceholder: "e.g. 016-855 8553",
    enquiry: "Enquiry Type",
    enquiryPlaceholder: "Choose enquiry type...",
    enquiryMotorcycle: "Apply for Motorcycle HP Financing",
    enquirySmartphone: "Apply for Smartphone HP Financing",
    enquiryGeneral: "General Enquiry",
    message: "Message / Special Requests",
    messagePlaceholder: "Anything else we should know?",
    submit: "Send Message",
  },
  ms: {
    thankYouTitle: "Terima kasih!",
    thankYouBody:
      "Kami telah menerima mesej anda dan akan menghubungi anda semula dalam masa 1 hari bekerja.",
    name: "Nama",
    namePlaceholder: "Nama penuh anda",
    email: "E-mel",
    emailPlaceholder: "anda@email.com",
    phone: "Nombor Telefon",
    phonePlaceholder: "cth. 016-855 8553",
    enquiry: "Jenis Pertanyaan",
    enquiryPlaceholder: "Pilih jenis pertanyaan...",
    enquiryMotorcycle: "Mohon Pembiayaan Sewa Beli Motosikal",
    enquirySmartphone: "Mohon Pembiayaan Sewa Beli Telefon Pintar",
    enquiryGeneral: "Pertanyaan Umum",
    message: "Mesej / Permintaan Khas",
    messagePlaceholder: "Ada apa-apa lagi yang perlu kami tahu?",
    submit: "Hantar Mesej",
  },
} as const;

export default function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = LABELS[locale];
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

  if (submitted) {
    return (
      <div className="py-16">
        <p className="text-[22px] font-semibold text-[#272A33] mb-2">
          {t.thankYouTitle}
        </p>
        <p className="text-[15px] text-[var(--text-secondary)]">
          {t.thankYouBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name | Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[13px] font-semibold text-[#272A33] mb-1.5">
            {t.name}
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] font-semibold text-[#272A33] mb-1.5">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
            placeholder={t.emailPlaceholder}
          />
        </div>
      </div>

      {/* Row 2: Phone | Enquiry Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-[13px] font-semibold text-[#272A33] mb-1.5">
            {t.phone}
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
            placeholder={t.phonePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="enquiry" className="block text-[13px] font-semibold text-[#272A33] mb-1.5">
            {t.enquiry}
          </label>
          <select
            id="enquiry"
            value={formData.enquiry}
            onChange={(e) => setFormData({ ...formData, enquiry: e.target.value })}
            className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors text-[var(--text-secondary)] appearance-none"
          >
            <option value="">{t.enquiryPlaceholder}</option>
            <option value="motorcycle">{t.enquiryMotorcycle}</option>
            <option value="smartphone">{t.enquirySmartphone}</option>
            <option value="general">{t.enquiryGeneral}</option>
          </select>
        </div>
      </div>

      {/* Message — full width */}
      <div>
        <label htmlFor="message" className="block text-[13px] font-semibold text-[#272A33] mb-1.5">
          {t.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 text-[15px] bg-white border border-[#e0e0e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors resize-none"
          placeholder={t.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
      >
        {t.submit}
      </button>
    </form>
  );
}
