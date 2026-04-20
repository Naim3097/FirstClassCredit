"use client";

import Link from "next/link";
import { useState } from "react";

const malaysianStates = [
  "Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan",
  "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah",
  "Sarawak", "Selangor", "Terengganu", "W.P. Kuala Lumpur",
  "W.P. Labuan", "W.P. Putrajaya",
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [financingType, setFinancingType] = useState("motorcycle");
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full py-3.5 px-0 border-0 border-b-2 border-[#e8e8e0] bg-transparent text-base focus:border-[#2C76BB] focus:outline-none transition-colors placeholder:text-[#888]";
  const selectClass =
    "w-full py-3.5 px-0 border-0 border-b-2 border-[#e8e8e0] bg-transparent text-base focus:border-[#2C76BB] focus:outline-none transition-colors appearance-none cursor-pointer";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-[1.5px] text-[#2C76BB] mb-2";

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
          <div className="w-9 h-9 bg-gradient-to-br from-[#253A7D] to-[#2C76BB] rounded-lg flex items-center justify-center text-white text-sm font-bold">
            FC
          </div>
          <span className="text-lg font-semibold text-[#272A33] tracking-tight">
            First Class Credit
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm text-[rgb(85,85,81)] hover:text-[#2C76BB] transition-colors"
        >
          &larr; Back to Home
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
                <option value="motorcycle">Motorcycle Financing HP</option>
                <option value="objective">
                  Objective Financing (Coming Soon)
                </option>
              </select>
            </div>

            {financingType === "motorcycle" ? (
              <>
                <div>
                  <label className={labelClass}>Motorcycle Condition</label>
                  <select className={selectClass}>
                    <option>New</option>
                    <option>Used</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>
                    Motorcycle Brand &amp; Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Yamaha Y16ZR"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Year of Manufacture</label>
                  <select className={selectClass}>
                    {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Motorcycle Price (RM)</label>
                    <input
                      type="text"
                      placeholder="e.g., 12,000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Downpayment (RM)</label>
                    <input
                      type="text"
                      placeholder="e.g., 1,200"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Loan Tenure</label>
                  <select className={selectClass}>
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
                  We are putting the final touches on our tailored Objective
                  Financing plans! Join our waitlist, and our team will WhatsApp
                  you the moment it launches.
                </p>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+60"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <button className="w-full py-4 bg-[#F18F33] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#EE4720]">
                    Join Waitlist
                  </button>
                </div>
              </div>
            )}

            {financingType === "motorcycle" && (
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-4 bg-[#2C76BB] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#253A7D]"
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Financial Profile */}
        {step === 2 && (
          <div className="space-y-7">
            <div>
              <label className={labelClass}>Employment Type</label>
              <select className={selectClass}>
                <option>Private</option>
                <option>Government</option>
                <option>GLC</option>
                <option>Self-Employed / Business</option>
                <option>Part-Timer</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Monthly Basic Salary (RM)</label>
              <input
                type="text"
                placeholder="e.g., 2,500"
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
                placeholder="e.g., 800"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Current Location</label>
              <select className={selectClass}>
                {malaysianStates.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Existing Credit Issues?</label>
              <div className="flex gap-6 pt-2">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="creditIssues"
                      value={opt}
                      defaultChecked={opt === "No"}
                      className="w-4 h-4 accent-[#2C76BB]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="text-[rgb(85,85,81)] font-semibold hover:text-[#2C76BB] transition-colors"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-4 bg-[#2C76BB] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#253A7D]"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div className="space-y-7">
            <div>
              <label className={labelClass}>Full Name (as per NRIC)</label>
              <input
                type="text"
                placeholder="Full legal name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>NRIC Number</label>
              <input
                type="text"
                placeholder="e.g., 900101-13-1234"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                type="tel"
                placeholder="+60"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Preferred Communication</label>
              <div className="flex flex-wrap gap-6 pt-2">
                {["WhatsApp", "Phone Call", "Email"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredComm"
                      value={opt}
                      defaultChecked={opt === "WhatsApp"}
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
                className="w-4 h-4 mt-1 accent-[#2C76BB] flex-shrink-0"
              />
              <label htmlFor="pdpa" className="text-sm text-[rgb(85,85,81)] leading-relaxed cursor-pointer">
                I agree to the processing of my personal data in accordance with
                the Personal Data Protection Act 2010.
              </label>
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="w-full py-4 bg-[#EE4720] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] hover:scale-[1.01] mt-2"
            >
              Submit Application
            </button>
            <p className="text-sm text-[rgb(85,85,81)] text-center italic">
              Fast Response Guaranteed: Our specialists will reach out via
              WhatsApp as soon as possible.
            </p>

            <div className="flex justify-start">
              <button
                onClick={() => setStep(2)}
                className="text-[rgb(85,85,81)] font-semibold hover:text-[#2C76BB] transition-colors"
              >
                &larr; Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
