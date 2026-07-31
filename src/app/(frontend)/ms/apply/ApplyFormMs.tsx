"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { ApplyConfig } from "@/lib/applyConfig";

const malaysianStates = [
  "Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan",
  "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah",
  "Sarawak", "Selangor", "Terengganu", "W.P. Kuala Lumpur",
  "W.P. Labuan", "W.P. Putrajaya",
];

// Google Apps Script Web App endpoint (logs to Sheet + emails the team + saves files to Drive)
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyOdINPqWuzRUf0ZS3gS2wndViOjNUQoN3kx8M7g7A6VWRhLgT1tVl5IkQgslXL3BNU/exec";
const WHATSAPP_NUMBER = "60169328901";
// Shared secret — must match FORM_TOKEN in the Apps Script (spam protection)
const FORM_TOKEN = "fcc-form-7Kq2pX9wL";
// Reject the whole submission if the attached files exceed this (email/payload limits)
const MAX_TOTAL_FILE_BYTES = 18 * 1024 * 1024; // ~18 MB

// Read a File as base64 (without the "data:...;base64," prefix)
const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

// Input sanitisers
const digitsOnly = (v: string) => v.replace(/\D/g, "");
const noDigits = (v: string) => v.replace(/[0-9]/g, "");
const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const deviceModels = [
  "iPhone 17e",
  "iPhone 17",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max",
];

const initialForm = {
  // Motorcycle
  condition: "",
  brand: "",
  year: "",
  price: "",
  downpayment: "",
  tenure: "",
  // Smartphone
  deviceModel: "",
  smartphoneTenure: "",
  employment: "",
  salary: "",
  commitments: "",
  location: "",
  creditIssues: "",
  fullName: "",
  age: "",
  nric: "",
  email: "",
  phone: "",
  preferredComm: "",
  pdpa: false,
};

export default function ApplyFormMs({ config }: { config: ApplyConfig }) {
  const financingOptions = [
    config.motorcycleEnabled && { value: "motorcycle", label: config.motorcycleLabel },
    config.smartphoneEnabled && { value: "objective", label: config.smartphoneLabel },
  ].filter(Boolean) as { value: string; label: string }[];

  const [step, setStep] = useState(1);
  const [financingType, setFinancingType] = useState(
    config.motorcycleEnabled ? "motorcycle" : "objective",
  );
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = <K extends keyof typeof initialForm>(key: K, value: (typeof initialForm)[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // Which questions this product asks — switched on/off in the CMS.
  const fields =
    financingType === "motorcycle"
      ? config.motorcycleFields
      : config.smartphoneFields;

  // Step 2 disappears entirely when every question in it is switched off.
  const hasStep2 =
    fields.employment ||
    fields.salary ||
    fields.commitments ||
    fields.location ||
    fields.creditIssues;
  const stepDefs = [
    { num: 1, label: "Butiran Pembiayaan" },
    ...(hasStep2 ? [{ num: 2, label: "Profil Kewangan" }] : []),
    { num: 3, label: "Butiran Peribadi" },
  ];
  const stepAt = (offset: number) => {
    const i = stepDefs.findIndex((s) => s.num === step);
    const next = Math.min(Math.max(i + offset, 0), stepDefs.length - 1);
    return stepDefs[next].num;
  };
  const goNext = () => setStep(stepAt(1));
  const goBack = () => setStep(stepAt(-1));

  // Preselect the financing type from the URL (?type=smartphone) — e.g. when
  // a customer arrives from a Smartphone HP Financing CTA.
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (
      (type === "smartphone" || type === "objective") &&
      config.smartphoneEnabled
    ) {
      setFinancingType("objective");
    }
  }, [config.smartphoneEnabled]);

  // ── Validation ──────────────────────────────────────────────────
  // A hidden question is never required.
  const need = (shown: boolean, filled: boolean) => !shown || filled;
  const step1Valid =
    financingType === "motorcycle"
      ? need(fields.condition, !!form.condition) &&
        need(fields.brand, form.brand.trim().length > 0) &&
        need(fields.year, !!form.year) &&
        need(fields.price, form.price.length > 0) &&
        need(fields.downpayment, form.downpayment.length > 0) &&
        need(fields.tenure, !!form.tenure)
      : need(fields.deviceModel, !!form.deviceModel) &&
        need(fields.smartphoneTenure, !!form.smartphoneTenure);
  const step2Valid =
    need(fields.employment, !!form.employment) &&
    need(fields.salary, form.salary.length > 0) &&
    need(fields.location, !!form.location) &&
    need(fields.creditIssues, !!form.creditIssues);
  const step3Valid =
    form.fullName.trim().length > 0 &&
    need(fields.age, form.age.length > 0) &&
    need(fields.nric, form.nric.length === 12) &&
    need(fields.email, emailValid(form.email)) &&
    form.phone.length >= 10 &&
    form.phone.length <= 12 &&
    need(fields.preferredComm, !!form.preferredComm) &&
    form.pdpa;
  const allValid = step1Valid && step2Valid && step3Valid;

  const pdsHref =
    financingType === "motorcycle"
      ? "/motorcycle-hp-pds.pdf"
      : "/smartphone-hp-pds.pdf";

  const inputClass =
    "w-full py-3.5 px-0 border-0 border-b-2 border-[#e8e8e0] bg-transparent text-base focus:border-[#2C76BB] focus:outline-none transition-colors placeholder:text-[#888]";
  const selectClass =
    "w-full py-3.5 px-0 border-0 border-b-2 border-[#e8e8e0] bg-transparent text-base focus:border-[#2C76BB] focus:outline-none transition-colors appearance-none cursor-pointer";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-[1.5px] text-[#2C76BB] mb-2";
  const errorClass = "text-[12px] text-[#EE4720] mt-1.5";
  const req = <span className="text-[#EE4720]">*</span>;
  const nextBtn =
    "px-8 py-4 bg-[#2C76BB] text-white font-semibold rounded-lg transition-all duration-300 enabled:hover:bg-[#253A7D] disabled:opacity-40 disabled:cursor-not-allowed";

  // ── Derived submission values ───────────────────────────────────
  const financingLabel =
    financingType === "motorcycle"
      ? "Motorcycle HP Financing"
      : "Smartphone HP Financing";
  const product =
    financingType === "motorcycle"
      ? [
          fields.brand && form.brand,
          fields.condition && form.condition && `(${form.condition})`,
          fields.year && form.year,
        ]
          .filter(Boolean)
          .join(" ")
      : fields.deviceModel
        ? form.deviceModel
        : "";
  const tenure =
    financingType === "motorcycle"
      ? fields.tenure
        ? form.tenure
        : ""
      : fields.smartphoneTenure
        ? form.smartphoneTenure
        : "";

  // Prefilled WhatsApp message (shown on the success screen) — carries all
  // the relevant form details so the team gets everything (no payslips).
  // Questions switched off in the CMS are left out entirely.
  const line = (shown: boolean, text: string) => (shown ? [text] : []);
  const financingLines =
    financingType === "motorcycle"
      ? [
          ...line(fields.condition, `Keadaan: ${form.condition}`),
          ...line(fields.brand, `Motosikal: ${form.brand}`),
          ...line(fields.year, `Tahun: ${form.year}`),
          ...line(fields.price, `Harga: RM${form.price}`),
          ...line(fields.downpayment, `Downpayment: RM${form.downpayment}`),
          ...line(fields.tenure, `Tempoh: ${form.tenure}`),
        ]
      : [
          ...line(fields.deviceModel, `Peranti: ${form.deviceModel}`),
          ...line(fields.smartphoneTenure, `Tempoh: ${form.smartphoneTenure}`),
        ];

  const profileLines = [
    ...line(fields.employment, `Pekerjaan: ${form.employment}`),
    ...line(fields.salary, `Gaji bulanan: RM${form.salary}`),
    ...line(
      fields.commitments && !!form.commitments,
      `Komitmen bulanan: RM${form.commitments}`,
    ),
    ...line(fields.location, `Lokasi: ${form.location}`),
    ...line(
      fields.creditIssues,
      `Masalah kredit sedia ada: ${form.creditIssues}`,
    ),
  ];

  const waLines: string[] = [
    "Hai First Class Credit, saya baru sahaja menghantar permohonan saya.",
    "",
    "— Pembiayaan —",
    `Jenis: ${financingLabel}`,
    ...financingLines,
    ...(profileLines.length ? ["", "— Profil Kewangan —", ...profileLines] : []),
    "",
    "— Butiran Peribadi —",
    `Nama: ${form.fullName}`,
    ...line(fields.age, `Umur: ${form.age}`),
    ...line(fields.nric, `NRIC: ${form.nric}`),
    ...line(fields.email, `E-mel: ${form.email}`),
    `Telefon: ${form.phone}`,
    ...line(fields.preferredComm, `Cara hubungan pilihan: ${form.preferredComm}`),
  ];
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    waLines.join("\n")
  )}`;

  const handleSubmit = async () => {
    if (!allValid || submitting) return;
    // Honeypot: a real user never fills this — silently "succeed" for bots.
    if (honeypot) {
      setSubmitted(true);
      return;
    }
    const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
    if (totalBytes > MAX_TOTAL_FILE_BYTES) {
      setSubmitError(
        "Fail slip gaji anda terlalu besar (maksimum ~18 MB kesemuanya). Sila kecilkan saiznya atau hantar melalui WhatsApp."
      );
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const encodedFiles = await Promise.all(
        files.map(async (f) => ({
          name: f.name,
          mimeType: f.type || "application/octet-stream",
          data: await fileToBase64(f),
        }))
      );
      const payload = {
        token: FORM_TOKEN,
        honeypot,
        financingType: financingLabel,
        product,
        tenure,
        fullName: form.fullName,
        // Questions switched off in the CMS are submitted blank so the
        // spreadsheet columns stay aligned.
        age: fields.age ? form.age : "",
        nric: fields.nric ? form.nric : "",
        email: fields.email ? form.email : "",
        phone: form.phone,
        salary: fields.salary ? form.salary : "",
        employment: fields.employment ? form.employment : "",
        commitments: fields.commitments ? form.commitments : "",
        location: fields.location ? form.location : "",
        creditIssues: fields.creditIssues ? form.creditIssues : "",
        preferredComm: fields.preferredComm ? form.preferredComm : "",
        files: encodedFiles,
      };
      // text/plain avoids a CORS preflight that Apps Script can't answer;
      // no-cors guarantees the POST is delivered (response is opaque).
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Terdapat masalah semasa menghantar permohonan anda. Sila cuba lagi, atau WhatsApp kami di +60 16-932 8901."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#2C76BB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#2C76BB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extralight text-[#272A33] mb-4">
            Berjaya!
          </h1>
          <p className="text-[rgb(85,85,81)] leading-relaxed mb-8">
            Pakar pembiayaan kami akan menyemak profil anda dan menghubungi anda
            melalui WhatsApp secepat mungkin. Untuk mempercepatkan proses,
            hantarkan butiran dan slip gaji anda kepada kami melalui WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#25D366] text-white text-[15px] font-semibold rounded-lg transition-transform duration-200 hover:scale-[1.02] w-full sm:w-auto"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hantar Butiran melalui WhatsApp
            </a>
            <Link
              href="/ms"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-[#2C76BB] text-[#2C76BB] font-semibold rounded-lg transition-all duration-300 hover:bg-[#2C76BB] hover:text-white w-full sm:w-auto"
            >
              Kembali ke Laman Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 py-6 flex items-center justify-between">
        <Link href="/ms" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="First Class Credit"
            width={160}
            height={50}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <Link
          href="/ms"
          className="text-sm text-[rgb(85,85,81)] hover:text-[#2C76BB] transition-colors"
        >
          Kembali ke Laman Utama
        </Link>
      </div>

      {/* Stepper */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 py-8">
        <div className="flex items-center justify-center">
          {stepDefs.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    step >= s.num
                      ? "bg-[#2C76BB] text-white"
                      : "border-2 border-[#e8e8e0] text-[#888]"
                  }`}
                >
                  {step > s.num ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="hidden md:inline text-sm font-semibold text-[#272A33]">
                  {s.label}
                </span>
              </div>
              {i < stepDefs.length - 1 && (
                <div className="w-12 md:w-16 h-[2px] bg-[#e8e8e0] mx-3 md:mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[640px] mx-auto px-5 md:px-10 pb-20">
        {/* Honeypot — hidden from real users; bots fill it and get rejected */}
        <input
          type="text"
          name="fcc_hp_field"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          data-1p-ignore="true"
          data-lpignore="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px] top-0 h-0 w-0 opacity-0"
        />

        {/* Step 1: Financing Details */}
        {step === 1 && (
          <div className="space-y-7">
            {/* Highlighted: choose financing type first */}
            <div className="rounded-2xl border-2 border-[#2C76BB]/35 bg-[#E8F1FB]/60 p-5 md:p-6">
              <div className="flex items-start gap-2.5 mb-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2C76BB] text-white text-[12px] font-bold flex-shrink-0">
                  1
                </span>
                <p className="text-[14px] md:text-[15px] font-bold text-[#0d2461] leading-snug">
                  Mula di sini — pilih jenis pembiayaan anda
                </p>
              </div>
              <p className="text-[12.5px] md:text-[13px] text-[#555] mb-4 ml-[34px]">
                Pilih sama ada anda mahukan Pembiayaan Sewa Beli{" "}
                <strong className="text-[#0d2461]">Motosikal</strong> atau{" "}
                <strong className="text-[#0d2461]">Telefon Pintar</strong>.
                Bahagian borang yang lain akan dikemas kini mengikut pilihan anda.
              </p>
              <label className={labelClass}>Jenis Pembiayaan {req}</label>
              <div className="relative">
                <select
                  value={financingType}
                  onChange={(e) => setFinancingType(e.target.value)}
                  className="w-full py-3.5 pl-4 pr-10 bg-white border-2 border-[#2C76BB]/40 rounded-lg text-base font-semibold text-[#0d2461] focus:border-[#2C76BB] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {financingOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#2C76BB]"
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            {financingType === "motorcycle" ? (
              <>
                {fields.condition && (
                  <div>
                    <label className={labelClass}>Keadaan Motosikal {req}</label>
                    <select
                      value={form.condition}
                      onChange={(e) => set("condition", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih keadaan…</option>
                      <option value="New">Baharu</option>
                      <option value="Used">Terpakai</option>
                    </select>
                  </div>
                )}
                {fields.brand && (
                  <div>
                    <label className={labelClass}>
                      Jenama &amp; Model Motosikal {req}
                    </label>
                    <input
                      type="text"
                      value={form.brand}
                      onChange={(e) => set("brand", e.target.value)}
                      placeholder="cth., Yamaha Y16ZR"
                      className={inputClass}
                    />
                  </div>
                )}
                {fields.year && (
                  <div>
                    <label className={labelClass}>Tahun Pembuatan {req}</label>
                    <select
                      value={form.year}
                      onChange={(e) => set("year", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih tahun…</option>
                      {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                        <option key={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                )}
                {(fields.price || fields.downpayment) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {fields.price && (
                      <div>
                        <label className={labelClass}>Harga Motosikal (RM) {req}</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={form.price}
                          onChange={(e) => set("price", digitsOnly(e.target.value))}
                          placeholder="cth., 12000"
                          className={inputClass}
                        />
                      </div>
                    )}
                    {fields.downpayment && (
                      <div>
                        <label className={labelClass}>Downpayment (RM) {req}</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={form.downpayment}
                          onChange={(e) => set("downpayment", digitsOnly(e.target.value))}
                          placeholder="cth., 1200"
                          className={inputClass}
                        />
                      </div>
                    )}
                  </div>
                )}
                {fields.tenure && (
                  <div>
                    <label className={labelClass}>Tempoh Pinjaman {req}</label>
                    <select
                      value={form.tenure}
                      onChange={(e) => set("tenure", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih tempoh…</option>
                      <option value="1 year">1 tahun</option>
                      <option value="2 years">2 tahun</option>
                      <option value="3 years">3 tahun</option>
                      <option value="4 years">4 tahun</option>
                      <option value="5 years">5 tahun</option>
                    </select>
                  </div>
                )}
              </>
            ) : (
              <>
                {fields.deviceModel && (
                  <div>
                    <label className={labelClass}>Model Peranti {req}</label>
                    <select
                      value={form.deviceModel}
                      onChange={(e) => set("deviceModel", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih model peranti…</option>
                      {deviceModels.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                )}
                {fields.smartphoneTenure && (
                  <div>
                    <label className={labelClass}>Tempoh Pembiayaan Pilihan {req}</label>
                    <select
                      value={form.smartphoneTenure}
                      onChange={(e) => set("smartphoneTenure", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Pilih tempoh…</option>
                      <option value="12 Months">12 Bulan</option>
                      <option value="24 Months">24 Bulan</option>
                      <option value="36 Months">36 Bulan</option>
                    </select>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="button"
                disabled={!step1Valid}
                onClick={goNext}
                className={nextBtn}
              >
                Seterusnya
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Financial Profile */}
        {step === 2 && (
          <div className="space-y-7">
            {fields.employment && (
              <div>
                <label className={labelClass}>Jenis Pekerjaan {req}</label>
                <select
                  value={form.employment}
                  onChange={(e) => set("employment", e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Pilih jenis pekerjaan…</option>
                  <option value="Private">Swasta</option>
                  <option value="Government">Kerajaan</option>
                  <option value="GLC">GLC</option>
                  <option value="Self-Employed / Business">Bekerja Sendiri / Perniagaan</option>
                  <option value="Part-Timer">Separuh Masa</option>
                </select>
              </div>
            )}
            {fields.salary && (
              <div>
                <label className={labelClass}>Gaji Pokok Bulanan (RM) {req}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.salary}
                  onChange={(e) => set("salary", digitsOnly(e.target.value))}
                  placeholder="cth., 2500"
                  className={inputClass}
                />
              </div>
            )}
            {fields.commitments && (
              <div>
                <label className={labelClass}>
                  Jumlah Komitmen Bulanan (RM){" "}
                  <span className="normal-case tracking-normal font-normal text-[#888]">
                    — Pilihan
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.commitments}
                  onChange={(e) => set("commitments", digitsOnly(e.target.value))}
                  placeholder="cth., 800"
                  className={inputClass}
                />
              </div>
            )}
            {fields.location && (
              <div>
                <label className={labelClass}>Lokasi Semasa {req}</label>
                <select
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Pilih negeri…</option>
                  {malaysianStates.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </div>
            )}
            {fields.creditIssues && (
              <div>
                <label className={labelClass}>Ada Masalah Kredit Sedia Ada? {req}</label>
                <div className="flex gap-6 pt-2">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="creditIssues"
                        value={opt}
                        checked={form.creditIssues === opt}
                        onChange={(e) => set("creditIssues", e.target.value)}
                        className="w-4 h-4 accent-[#2C76BB]"
                      />
                      <span>{opt === "Yes" ? "Ya" : "Tidak"}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={goBack}
                className="text-[rgb(85,85,81)] font-semibold hover:text-[#2C76BB] transition-colors"
              >
                Kembali
              </button>
              <button
                type="button"
                disabled={!step2Valid}
                onClick={goNext}
                className={nextBtn}
              >
                Seterusnya
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div className="space-y-7">
            <div>
              <label className={labelClass}>Nama Penuh (seperti dalam NRIC) {req}</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => set("fullName", noDigits(e.target.value))}
                placeholder="Nama penuh rasmi"
                className={inputClass}
              />
            </div>
            {fields.age && (
              <div>
                <label className={labelClass}>Umur {req}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={form.age}
                  onChange={(e) => set("age", digitsOnly(e.target.value))}
                  placeholder="cth., 28"
                  className={inputClass}
                />
              </div>
            )}
            {fields.nric && (
              <div>
                <label className={labelClass}>Nombor NRIC {req}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={12}
                  value={form.nric}
                  onChange={(e) => set("nric", digitsOnly(e.target.value))}
                  placeholder="cth., 900101131234"
                  className={inputClass}
                />
                {form.nric.length > 0 && form.nric.length < 12 && (
                  <p className={errorClass}>NRIC mesti tepat 12 digit.</p>
                )}
              </div>
            )}
            {fields.email && (
              <div>
                <label className={labelClass}>Alamat E-mel {req}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="anda@email.com"
                  className={inputClass}
                />
                {form.email.length > 0 && !emailValid(form.email) && (
                  <p className={errorClass}>Sila masukkan alamat e-mel yang sah.</p>
                )}
              </div>
            )}
            <div>
              <label className={labelClass}>Nombor Telefon {req}</label>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={12}
                value={form.phone}
                onChange={(e) => set("phone", digitsOnly(e.target.value))}
                placeholder="cth., 0168558553"
                className={inputClass}
              />
              {form.phone.length > 0 && (form.phone.length < 10 || form.phone.length > 12) && (
                <p className={errorClass}>Nombor telefon mesti 10–12 digit.</p>
              )}
            </div>
            {fields.preferredComm && (
              <div>
                <label className={labelClass}>Cara Hubungan Pilihan {req}</label>
                <div className="flex flex-wrap gap-6 pt-2">
                  {["WhatsApp", "Phone Call", "Email"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredComm"
                        value={opt}
                        checked={form.preferredComm === opt}
                        onChange={(e) => set("preferredComm", e.target.value)}
                        className="w-4 h-4 accent-[#2C76BB]"
                      />
                      <span>{opt === "Phone Call" ? "Panggilan Telefon" : opt === "Email" ? "E-mel" : opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {fields.payslip && (
            <div>
              <label className={labelClass}>
                Muat Naik Slip Gaji{" "}
                <span className="normal-case tracking-normal font-normal text-[#888]">
                  — Pilihan
                </span>
              </label>
              <label
                htmlFor="payslip"
                className="mt-2 block border-2 border-dashed border-[#e8e8e0] rounded-xl p-8 text-center hover:border-[#2C76BB] transition-colors cursor-pointer"
              >
                <input
                  id="payslip"
                  type="file"
                  multiple
                  accept="image/*,application/pdf"
                  onChange={(e) =>
                    setFiles(e.target.files ? Array.from(e.target.files) : [])
                  }
                  className="hidden"
                />
                <p className="text-sm text-[#888]">
                  Klik untuk muat naik atau seret &amp; lepas
                </p>
                <p className="text-xs text-[#888] mt-1">
                  Muat naik slip gaji 3 bulan terkini anda — anda boleh pilih
                  beberapa fail (PDF, JPG atau PNG).
                </p>
              </label>
              {files.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {files.map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className="flex items-center gap-2 text-[13px] text-[#272A33]"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2C76BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span className="truncate">{f.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            )}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="pdpa"
                checked={form.pdpa}
                onChange={(e) => set("pdpa", e.target.checked)}
                className="w-4 h-4 mt-1 accent-[#2C76BB] flex-shrink-0"
              />
              <label htmlFor="pdpa" className="text-sm text-[rgb(85,85,81)] leading-relaxed cursor-pointer">
                Saya bersetuju dengan pemprosesan data peribadi saya selaras
                dengan Akta Perlindungan Data Peribadi 2010. {req}
              </label>
            </div>

            <p className="text-sm text-[rgb(85,85,81)] leading-relaxed">
              Sebelum menghantar, sila semak{" "}
              <a
                href={pdsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C76BB] font-semibold underline underline-offset-2 hover:text-[#253A7D]"
              >
                Product Disclosure Sheet (PDS)
              </a>
              .
            </p>

            <button
              type="button"
              disabled={!allValid || submitting}
              onClick={handleSubmit}
              className="w-full py-4 bg-[#EE4720] text-white font-semibold rounded-lg transition-all duration-300 enabled:hover:bg-[#F18F33] enabled:hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed mt-2"
            >
              {submitting ? "Sedang menghantar…" : "Hantar Permohonan"}
            </button>
            {submitError && (
              <p className="text-sm text-[#EE4720] text-center">{submitError}</p>
            )}
            <p className="text-sm text-[rgb(85,85,81)] text-center italic">
              Jaminan Respons Pantas: Pakar kami akan menghubungi anda melalui
              WhatsApp secepat mungkin.
            </p>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={goBack}
                className="text-[rgb(85,85,81)] font-semibold hover:text-[#2C76BB] transition-colors"
              >
                Kembali
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
