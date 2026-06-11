"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const malaysianStates = [
  "Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan",
  "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah",
  "Sarawak", "Selangor", "Terengganu", "W.P. Kuala Lumpur",
  "W.P. Labuan", "W.P. Putrajaya",
];

// Input sanitisers
const digitsOnly = (v: string) => v.replace(/\D/g, "");
const noDigits = (v: string) => v.replace(/[0-9]/g, "");
const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const initialForm = {
  condition: "",
  brand: "",
  year: "",
  price: "",
  downpayment: "",
  tenure: "",
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

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [financingType, setFinancingType] = useState("motorcycle");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [wait, setWait] = useState({ name: "", phone: "", email: "" });

  const set = <K extends keyof typeof initialForm>(key: K, value: (typeof initialForm)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  // Preselect the financing type from the URL (?type=smartphone) — e.g. when
  // a customer arrives from the Smartphone HP Financing waitlist CTA.
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type === "smartphone" || type === "objective") {
      setFinancingType("objective");
    }
  }, []);

  // ── Validation ──────────────────────────────────────────────────
  const step1Valid =
    !!form.condition &&
    form.brand.trim().length > 0 &&
    !!form.year &&
    form.price.length > 0 &&
    form.downpayment.length > 0 &&
    !!form.tenure;
  const step2Valid =
    !!form.employment &&
    form.salary.length > 0 &&
    !!form.location &&
    !!form.creditIssues;
  const step3Valid =
    form.fullName.trim().length > 0 &&
    form.age.length > 0 &&
    form.nric.length === 12 &&
    emailValid(form.email) &&
    form.phone.length >= 10 &&
    form.phone.length <= 12 &&
    !!form.preferredComm &&
    form.pdpa;
  const allValid = step1Valid && step2Valid && step3Valid;

  const waitValid =
    wait.name.trim().length > 0 &&
    wait.phone.length >= 10 &&
    wait.phone.length <= 12 &&
    emailValid(wait.email);

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
            as soon as possible.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#2C76BB] text-[#2C76BB] font-semibold rounded-lg transition-all duration-300 hover:bg-[#2C76BB] hover:text-white"
          >
            Back to Home
          </Link>
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
          {[
            { num: 1, label: "Financing Details" },
            { num: 2, label: "Financial Profile" },
            { num: 3, label: "Personal Details" },
          ].map((s, i) => (
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
                    s.num
                  )}
                </div>
                <span className="hidden md:inline text-sm font-semibold text-[#272A33]">
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div className="w-12 md:w-16 h-[2px] bg-[#e8e8e0] mx-3 md:mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[640px] mx-auto px-5 md:px-10 pb-20">
        {/* Step 1: Financing Details */}
        {step === 1 && (
          <div className="space-y-7">
            <div>
              <label className={labelClass}>Financing Type</label>
              <select
                value={financingType}
                onChange={(e) => setFinancingType(e.target.value)}
                className={selectClass}
              >
                <option value="motorcycle">First Class Motorcycle HP Financing</option>
                <option value="objective">
                  First Class Smartphone HP Financing (Coming Soon)
                </option>
              </select>
            </div>

            {financingType === "motorcycle" ? (
              <>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                </div>
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
              </>
            ) : (
              <div className="bg-[#FCDB81]/30 border border-[#FCDB81] rounded-xl p-6">
                <p className="text-[#272A33] mb-4">
                  We are putting the final touches on our tailored First Class
                  Smartphone HP Financing plans! Join our waitlist, and our team
                  will WhatsApp you the moment it launches.
                </p>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Full Name {req}</label>
                    <input
                      type="text"
                      value={wait.name}
                      onChange={(e) => setWait({ ...wait, name: noDigits(e.target.value) })}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number {req}</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={12}
                      value={wait.phone}
                      onChange={(e) => setWait({ ...wait, phone: digitsOnly(e.target.value) })}
                      placeholder="e.g., 0168558553"
                      className={inputClass}
                    />
                    {wait.phone.length > 0 && (wait.phone.length < 10 || wait.phone.length > 12) && (
                      <p className={errorClass}>Phone number must be 10–12 digits.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Email Address {req}</label>
                    <input
                      type="email"
                      value={wait.email}
                      onChange={(e) => setWait({ ...wait, email: e.target.value })}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                    {wait.email.length > 0 && !emailValid(wait.email) && (
                      <p className={errorClass}>Please enter a valid email address.</p>
                    )}
                  </div>
                  <button
                    type="button"
                    disabled={!waitValid}
                    onClick={() => setSubmitted(true)}
                    className="w-full py-4 bg-[#F18F33] text-white font-semibold rounded-lg transition-all duration-300 enabled:hover:bg-[#EE4720] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            )}

            {financingType === "motorcycle" && (
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  disabled={!step1Valid}
                  onClick={() => setStep(2)}
                  className={nextBtn}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Financial Profile */}
        {step === 2 && (
          <div className="space-y-7">
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

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[rgb(85,85,81)] font-semibold hover:text-[#2C76BB] transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!step2Valid}
                onClick={() => setStep(3)}
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
            <div>
              <label className={labelClass}>
                Payslip Upload{" "}
                <span className="normal-case tracking-normal font-normal text-[#888]">
                  — Optional
                </span>
              </label>
              <div className="mt-2 border-2 border-dashed border-[#e8e8e0] rounded-xl p-8 text-center hover:border-[#2C76BB] transition-colors cursor-pointer">
                <p className="text-sm text-[#888]">
                  Drag &amp; drop or click to upload
                </p>
                <p className="text-xs text-[#888] mt-1">
                  Speed up your approval! Upload your last 3 months&apos;
                  payslip.
                </p>
              </div>
            </div>
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

            <button
              type="button"
              disabled={!allValid}
              onClick={() => setSubmitted(true)}
              className="w-full py-4 bg-[#EE4720] text-white font-semibold rounded-lg transition-all duration-300 enabled:hover:bg-[#F18F33] enabled:hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed mt-2"
            >
              Submit Application
            </button>
            <p className="text-sm text-[rgb(85,85,81)] text-center italic">
              Fast Response Guaranteed: Our specialists will reach out via
              WhatsApp as soon as possible.
            </p>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setStep(2)}
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
