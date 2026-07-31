"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { ApplyConfig } from "@/lib/applyConfig";

export type { ApplyConfig };

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

export default function ApplyForm({ config }: { config: ApplyConfig }) {
  // Financing types the CMS has enabled, in display order.
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
    { num: 1, label: "Financing Details" },
    ...(hasStep2 ? [{ num: 2, label: "Financial Profile" }] : []),
    { num: 3, label: "Personal Details" },
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
          ...line(fields.condition, `Condition: ${form.condition}`),
          ...line(fields.brand, `Motorcycle: ${form.brand}`),
          ...line(fields.year, `Year: ${form.year}`),
          ...line(fields.price, `Price: RM${form.price}`),
          ...line(fields.downpayment, `Downpayment: RM${form.downpayment}`),
          ...line(fields.tenure, `Tenure: ${form.tenure}`),
        ]
      : [
          ...line(fields.deviceModel, `Device: ${form.deviceModel}`),
          ...line(fields.smartphoneTenure, `Tenure: ${form.smartphoneTenure}`),
        ];

  const profileLines = [
    ...line(fields.employment, `Employment: ${form.employment}`),
    ...line(fields.salary, `Monthly salary: RM${form.salary}`),
    ...line(
      fields.commitments && !!form.commitments,
      `Monthly commitments: RM${form.commitments}`,
    ),
    ...line(fields.location, `Location: ${form.location}`),
    ...line(fields.creditIssues, `Existing credit issues: ${form.creditIssues}`),
  ];

  const waLines: string[] = [
    "Hi First Class Credit, I've just submitted my application.",
    "",
    "— Financing —",
    `Type: ${financingLabel}`,
    ...financingLines,
    ...(profileLines.length ? ["", "— Financial Profile —", ...profileLines] : []),
    "",
    "— Personal Details —",
    `Name: ${form.fullName}`,
    ...line(fields.age, `Age: ${form.age}`),
    ...line(fields.nric, `NRIC: ${form.nric}`),
    ...line(fields.email, `Email: ${form.email}`),
    `Phone: ${form.phone}`,
    ...line(fields.preferredComm, `Preferred contact: ${form.preferredComm}`),
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
        "Your payslip files are too large (max ~18 MB total). Please reduce them or send via WhatsApp."
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
        "Something went wrong sending your application. Please try again, or WhatsApp us at +60 16-932 8901."
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
            Success!
          </h1>
          <p className="text-[rgb(85,85,81)] leading-relaxed mb-8">
            Our financing specialist will review your profile and WhatsApp you
            as soon as possible. To speed things up, send us your details and
            payslips on WhatsApp.
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
              Send Details on WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-[#2C76BB] text-[#2C76BB] font-semibold rounded-lg transition-all duration-300 hover:bg-[#2C76BB] hover:text-white w-full sm:w-auto"
            >
              Back to Home
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
        <Link href="/" className="flex items-center gap-3">
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
          href="/"
          className="text-sm text-[rgb(85,85,81)] hover:text-[#2C76BB] transition-colors"
        >
          Back to Home
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
                  Start here — choose your financing type
                </p>
              </div>
              <p className="text-[12.5px] md:text-[13px] text-[#555] mb-4 ml-[34px]">
                Pick whether you want{" "}
                <strong className="text-[#0d2461]">Motorcycle</strong> or{" "}
                <strong className="text-[#0d2461]">Smartphone</strong> HP
                Financing. The rest of the form updates to match your choice.
              </p>
              <label className={labelClass}>Financing Type {req}</label>
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
                    <label className={labelClass}>Motorcycle Condition {req}</label>
                    <select
                      value={form.condition}
                      onChange={(e) => set("condition", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Select condition…</option>
                      <option>New</option>
                      <option>Used</option>
                    </select>
                  </div>
                )}
                {fields.brand && (
                  <div>
                    <label className={labelClass}>
                      Motorcycle Brand &amp; Model {req}
                    </label>
                    <input
                      type="text"
                      value={form.brand}
                      onChange={(e) => set("brand", e.target.value)}
                      placeholder="e.g., Yamaha Y16ZR"
                      className={inputClass}
                    />
                  </div>
                )}
                {fields.year && (
                  <div>
                    <label className={labelClass}>Year of Manufacture {req}</label>
                    <select
                      value={form.year}
                      onChange={(e) => set("year", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Select year…</option>
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
                        <label className={labelClass}>Motorcycle Price (RM) {req}</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={form.price}
                          onChange={(e) => set("price", digitsOnly(e.target.value))}
                          placeholder="e.g., 12000"
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
                          placeholder="e.g., 1200"
                          className={inputClass}
                        />
                      </div>
                    )}
                  </div>
                )}
                {fields.tenure && (
                  <div>
                    <label className={labelClass}>Loan Tenure {req}</label>
                    <select
                      value={form.tenure}
                      onChange={(e) => set("tenure", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Select tenure…</option>
                      <option>1 year</option>
                      <option>2 years</option>
                      <option>3 years</option>
                      <option>4 years</option>
                      <option>5 years</option>
                    </select>
                  </div>
                )}
              </>
            ) : (
              <>
                {fields.deviceModel && (
                  <div>
                    <label className={labelClass}>Device Model {req}</label>
                    <select
                      value={form.deviceModel}
                      onChange={(e) => set("deviceModel", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Select device model…</option>
                      {deviceModels.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                )}
                {fields.smartphoneTenure && (
                  <div>
                    <label className={labelClass}>Preferred Financing Tenure {req}</label>
                    <select
                      value={form.smartphoneTenure}
                      onChange={(e) => set("smartphoneTenure", e.target.value)}
                      className={selectClass}
                    >
                      <option value="" disabled>Select tenure…</option>
                      <option>12 Months</option>
                      <option>24 Months</option>
                      <option>36 Months</option>
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
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Financial Profile */}
        {step === 2 && (
          <div className="space-y-7">
            {fields.employment && (
              <div>
                <label className={labelClass}>Employment Type {req}</label>
                <select
                  value={form.employment}
                  onChange={(e) => set("employment", e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Select employment type…</option>
                  <option>Private</option>
                  <option>Government</option>
                  <option>GLC</option>
                  <option>Self-Employed / Business</option>
                  <option>Part-Timer</option>
                </select>
              </div>
            )}
            {fields.salary && (
              <div>
                <label className={labelClass}>Monthly Basic Salary (RM) {req}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.salary}
                  onChange={(e) => set("salary", digitsOnly(e.target.value))}
                  placeholder="e.g., 2500"
                  className={inputClass}
                />
              </div>
            )}
            {fields.commitments && (
              <div>
                <label className={labelClass}>
                  Total Monthly Commitments (RM){" "}
                  <span className="normal-case tracking-normal font-normal text-[#888]">
                    — Optional
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.commitments}
                  onChange={(e) => set("commitments", digitsOnly(e.target.value))}
                  placeholder="e.g., 800"
                  className={inputClass}
                />
              </div>
            )}
            {fields.location && (
              <div>
                <label className={labelClass}>Current Location {req}</label>
                <select
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Select state…</option>
                  {malaysianStates.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </div>
            )}
            {fields.creditIssues && (
              <div>
                <label className={labelClass}>Existing Credit Issues? {req}</label>
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
                      <span>{opt}</span>
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
                Back
              </button>
              <button
                type="button"
                disabled={!step2Valid}
                onClick={goNext}
                className={nextBtn}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div className="space-y-7">
            <div>
              <label className={labelClass}>Full Name (as per NRIC) {req}</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => set("fullName", noDigits(e.target.value))}
                placeholder="Full legal name"
                className={inputClass}
              />
            </div>
            {fields.age && (
              <div>
                <label className={labelClass}>Age {req}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={form.age}
                  onChange={(e) => set("age", digitsOnly(e.target.value))}
                  placeholder="e.g., 28"
                  className={inputClass}
                />
              </div>
            )}
            {fields.nric && (
              <div>
                <label className={labelClass}>NRIC Number {req}</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={12}
                  value={form.nric}
                  onChange={(e) => set("nric", digitsOnly(e.target.value))}
                  placeholder="e.g., 900101131234"
                  className={inputClass}
                />
                {form.nric.length > 0 && form.nric.length < 12 && (
                  <p className={errorClass}>NRIC must be exactly 12 digits.</p>
                )}
              </div>
            )}
            {fields.email && (
              <div>
                <label className={labelClass}>Email Address {req}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="your@email.com"
                  className={inputClass}
                />
                {form.email.length > 0 && !emailValid(form.email) && (
                  <p className={errorClass}>Please enter a valid email address.</p>
                )}
              </div>
            )}
            <div>
              <label className={labelClass}>Phone Number {req}</label>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={12}
                value={form.phone}
                onChange={(e) => set("phone", digitsOnly(e.target.value))}
                placeholder="e.g., 0168558553"
                className={inputClass}
              />
              {form.phone.length > 0 && (form.phone.length < 10 || form.phone.length > 12) && (
                <p className={errorClass}>Phone number must be 10–12 digits.</p>
              )}
            </div>
            {fields.preferredComm && (
              <div>
                <label className={labelClass}>Preferred Communication {req}</label>
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
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {fields.payslip && (
            <div>
              <label className={labelClass}>
                Payslip Upload{" "}
                <span className="normal-case tracking-normal font-normal text-[#888]">
                  — Optional
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
                  Click to upload or drag &amp; drop
                </p>
                <p className="text-xs text-[#888] mt-1">
                  Upload your latest 3 months&apos; payslips — you can select
                  multiple files (PDF, JPG or PNG).
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
                I agree to the processing of my personal data in accordance with
                the Personal Data Protection Act 2010. {req}
              </label>
            </div>

            <p className="text-sm text-[rgb(85,85,81)] leading-relaxed">
              Before submitting, please review the{" "}
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
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
            {submitError && (
              <p className="text-sm text-[#EE4720] text-center">{submitError}</p>
            )}
            <p className="text-sm text-[rgb(85,85,81)] text-center italic">
              Fast Response Guaranteed: Our specialists will reach out via
              WhatsApp as soon as possible.
            </p>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={goBack}
                className="text-[rgb(85,85,81)] font-semibold hover:text-[#2C76BB] transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
