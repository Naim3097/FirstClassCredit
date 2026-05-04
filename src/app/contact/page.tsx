"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroReveal, Reveal } from "@/components/ScrollAnimations";

export default function Contact() {
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
      {/* ===== HERO — Compact, text-only ===== */}
      <section className="bg-[#253A7D]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-36 md:pt-44 pb-16 md:pb-20">
          <HeroReveal className="max-w-[580px]">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
              Contact
            </p>
            <h1 className="text-[36px] md:text-[48px] font-extralight leading-[1.1] text-white tracking-[-0.02em]">
              Let&apos;s get in touch.
            </h1>
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
                <span className="inline-flex items-center text-[12px] font-semibold bg-[#f0f4ff] text-[#253A7D] px-4 py-1.5 rounded-full mb-7">
                  Send a Message
                </span>
                <h2 className="text-[38px] md:text-[52px] font-bold text-[#272A33] leading-[1.1] tracking-[-0.02em] mb-10">
                  Contact Us
                </h2>
              </Reveal>

              {submitted ? (
                <div className="py-16">
                  <p className="text-[22px] font-semibold text-[#272A33] mb-2">
                    Thank you!
                  </p>
                  <p className="text-[15px] text-[var(--text-secondary)]">
                    We&apos;ve received your message and will get back to you
                    within 1 working day.
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
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-[#f7f7f0] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-[#f7f7f0] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                        placeholder="you@email.com"
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
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-[#f7f7f0] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                        placeholder="e.g. 016-855 8553"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquiry"
                        className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                      >
                        Enquiry Type
                      </label>
                      <select
                        id="enquiry"
                        value={formData.enquiry}
                        onChange={(e) =>
                          setFormData({ ...formData, enquiry: e.target.value })
                        }
                        className="w-full px-4 py-3 text-[15px] bg-[#f7f7f0] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors text-[var(--text-secondary)] appearance-none"
                      >
                        <option value="">Choose enquiry type...</option>
                        <option value="financing">Apply for Financing</option>
                        <option value="general">General Enquiry</option>
                        <option value="roadtax">Road Tax &amp; Insurance</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  {/* Message — full width */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                    >
                      Message / Special Requests
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 text-[15px] bg-[#f7f7f0] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors resize-none"
                      placeholder="Anything else we should know?"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#272A33] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#253A7D]"
                  >
                    Send Message
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[13px]">
                      ↗
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: Description + Image card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8 lg:text-right">
                  Tell us how we can help and we&apos;ll confirm your enquiry
                  within 1 working day.
                </p>

                {/* Image card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#e8e8e0]" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/about-mission.jpg"
                    alt="First Class Credit"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 inline-flex items-center text-[12px] font-semibold bg-white text-[#272A33] px-3.5 py-1.5 rounded-full shadow-sm">
                    First Class Credit
                  </span>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO + MAP ===== */}
      <section className="py-16 md:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Info */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-10">
                  Whether you have questions about our financing products,
                  need help with an application, or want to explore a
                  partnership &mdash; we&apos;d love to hear from you.
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      Address
                    </p>
                    <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                      Lot 450, 1st Floor, Lorong Lapangan Terbang 3A,<br />
                      93250 Kuching, Sarawak
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+60168558553"
                      className="text-[15px] text-[#2C76BB] hover:text-[#253A7D] transition-colors"
                    >
                      +60 16-855 8553
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/60168558553"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#2C76BB] hover:text-[#253A7D] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      Hours
                    </p>
                    <p className="text-[15px] text-[var(--text-secondary)]">
                      Mon &ndash; Fri: 9:00 AM &ndash; 5:00 PM
                    </p>
                    <p className="text-[13px] text-[var(--text-muted)] mt-1">
                      Closed on weekends &amp; public holidays
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Map */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden h-full min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.436!2d110.347!3d1.5533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba7c0c0000001%3A0x1!2sLot%20450%2C%20Lorong%20Lapangan%20Terbang%203A%2C%20Kuching!5e0!3m2!1sen!2smy!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="First Class Credit location"
                />
              </div>
            </Reveal>

          </div>

          {/* Quick-apply nudge */}
          <Reveal delay={0.14}>
            <div className="mt-10 bg-[#FDF0CD] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <p className="text-[14px] text-[#272A33]">
                Ready to apply for vehicle financing?
              </p>
              <Link
                href="/apply"
                className="text-[#EE4720] text-[14px] font-semibold whitespace-nowrap"
              >
                Apply Now &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API route / email service
    setSubmitted(true);
  };

  return (
    <>
      {/* ===== HERO — Compact, text-only ===== */}
      <section className="bg-[#253A7D]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-36 md:pt-44 pb-16 md:pb-20">
          <HeroReveal className="max-w-[580px]">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#47A7DD] mb-5">
              Contact
            </p>
            <h1 className="text-[36px] md:text-[48px] font-extralight leading-[1.1] text-white tracking-[-0.02em]">
              Let&apos;s get in touch.
            </h1>
          </HeroReveal>
        </div>
      </section>

      {/* ===== MAIN — Two-column: Info + Form ===== */}
      <section className="py-24 md:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* LEFT — Contact info */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-10">
                  Whether you have questions about our financing products,
                  need help with an application, or want to explore a
                  partnership &mdash; we&apos;d love to hear from you.
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      Address
                    </p>
                    <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                      Lot 450, 1st Floor, Lorong Lapangan Terbang 3A,<br />
                      93250 Kuching, Sarawak
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+60168558553"
                      className="text-[15px] text-[#2C76BB] hover:text-[#253A7D] transition-colors"
                    >
                      +60 16-855 8553
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/60168558553"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#2C76BB] hover:text-[#253A7D] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#272A33] mb-2">
                      Hours
                    </p>
                    <p className="text-[15px] text-[var(--text-secondary)]">
                      Mon &ndash; Fri: 9:00 AM &ndash; 5:00 PM
                    </p>
                    <p className="text-[13px] text-[var(--text-muted)] mt-1">
                      Closed on weekends &amp; public holidays
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Google Maps */}
              <Reveal delay={0.1}>
                <div className="mt-10 rounded-xl overflow-hidden aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.436!2d110.347!3d1.5533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba7c0c0000001%3A0x1!2sLot%20450%2C%20Lorong%20Lapangan%20Terbang%203A%2C%20Kuching!5e0!3m2!1sen!2smy!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="First Class Credit location"
                  />
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.08}>
                <div className="bg-white rounded-2xl border border-[#e8e8e0] p-8 md:p-10">
                  <h2 className="text-[20px] font-semibold text-[#272A33] mb-1">
                    Send us a message
                  </h2>
                  <p className="text-[14px] text-[var(--text-muted)] mb-8">
                    We respond within 1 working day.
                  </p>

                  {submitted ? (
                    <div className="py-16 text-center">
                      <p className="text-[20px] font-semibold text-[#272A33] mb-2">
                        Thank you!
                      </p>
                      <p className="text-[15px] text-[var(--text-secondary)]">
                        We&apos;ve received your message and will get back to you
                        within 1 working day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 text-[15px] bg-[var(--bg-primary)] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                          placeholder="e.g. Ahmad Razak"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 text-[15px] bg-[var(--bg-primary)] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                            placeholder="e.g. 016-855 8553"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                          >
                            Email{" "}
                            <span className="text-[var(--text-muted)] font-normal">
                              (optional)
                            </span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 text-[15px] bg-[var(--bg-primary)] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[13px] font-semibold text-[#272A33] mb-1.5"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 text-[15px] bg-[var(--bg-primary)] border border-[#e8e8e0] rounded-lg outline-none focus:border-[#2C76BB] transition-colors resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>

              {/* Quick-apply nudge */}
              <Reveal delay={0.14}>
                <div className="mt-6 bg-[#FDF0CD] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                  <p className="text-[14px] text-[#272A33]">
                    Ready to apply for vehicle financing?
                  </p>
                  <Link
                    href="/apply"
                    className="text-[#EE4720] text-[14px] font-semibold whitespace-nowrap"
                  >
                    Apply Now &rarr;
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
