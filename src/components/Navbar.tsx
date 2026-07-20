"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getLocale, localizeHref, toggleLocalePath } from "@/lib/locale";

const NAV = {
  en: {
    home: "Home",
    services: "Services",
    apply: "Apply Now",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
    ],
    svc: [
      { href: "/financing-hp", label: "First Class Motorcycle HP Financing" },
      { href: "/objective-financing", label: "First Class Smartphone HP Financing" },
    ],
  },
  ms: {
    home: "Utama",
    services: "Perkhidmatan",
    apply: "Mohon Sekarang",
    links: [
      { href: "/about", label: "Tentang Kami" },
      { href: "/resources", label: "Sumber" },
      { href: "/contact", label: "Hubungi Kami" },
    ],
    svc: [
      { href: "/financing-hp", label: "Pembiayaan Sewa Beli Motosikal First Class" },
      { href: "/objective-financing", label: "Pembiayaan Sewa Beli Telefon Pintar First Class" },
    ],
  },
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const locale = getLocale(pathname);
  const t = NAV[locale];
  const homeHref = localizeHref("/", locale);
  const applyHref = localizeHref("/apply", locale);
  const otherHref = toggleLocalePath(pathname);
  const otherLabel = locale === "ms" ? "EN" : "BM";
  const servicesActive = t.svc.some(
    (s) => pathname === localizeHref(s.href, locale)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_#e8e8e0]"
          : open
          ? "bg-white shadow-[0_1px_0_#e8e8e0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href={homeHref} className="flex items-center">
          <Image
            src="/logo.png"
            alt="First Class Credit"
            width={160}
            height={50}
            className={`h-7 lg:h-10 w-auto object-contain transition-all duration-500 ${
              scrolled || open ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Home */}
          <Link
            href={homeHref}
            className={`text-[14px] font-medium transition-colors duration-300 ${
              pathname === homeHref
                ? scrolled
                  ? "text-[#2C76BB]"
                  : "text-white"
                : scrolled
                ? "text-[#272A33]/70 hover:text-[#272A33]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t.home}
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-300 ${
                servicesActive
                  ? scrolled
                    ? "text-[#2C76BB]"
                    : "text-white"
                  : scrolled
                  ? "text-[#272A33]/70 group-hover:text-[#272A33]"
                  : "text-white/70 group-hover:text-white"
              }`}
              aria-haspopup="true"
            >
              {t.services}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {/* Hover bridge + panel */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[300px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="bg-white rounded-xl shadow-[0_16px_48px_-12px_rgba(13,36,97,0.28)] border border-[#eef0f5] p-2">
                {t.svc.map((s) => {
                  const href = localizeHref(s.href, locale);
                  return (
                    <Link
                      key={s.href}
                      href={href}
                      className={`block px-4 py-3 rounded-lg text-[13.5px] font-medium leading-snug transition-colors ${
                        pathname === href
                          ? "bg-[#E8F1FB] text-[#2C76BB]"
                          : "text-[#272A33]/80 hover:bg-[#f4f6fb] hover:text-[#2C76BB]"
                      }`}
                    >
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {t.links.map((link) => {
            const href = localizeHref(link.href, locale);
            return (
              <Link
                key={link.href}
                href={href}
                className={`text-[14px] font-medium transition-colors duration-300 ${
                  pathname === href
                    ? scrolled
                      ? "text-[#2C76BB]"
                      : "text-white"
                    : scrolled
                    ? "text-[#272A33]/70 hover:text-[#272A33]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Language toggle */}
          <Link
            href={otherHref}
            aria-label={`Switch to ${otherLabel === "BM" ? "Bahasa Malaysia" : "English"}`}
            className={`text-[13px] font-semibold rounded-full border px-3 py-1 transition-colors duration-300 ${
              scrolled
                ? "border-[#272A33]/25 text-[#272A33]/70 hover:text-[#2C76BB] hover:border-[#2C76BB]/50"
                : "border-white/40 text-white/80 hover:text-white hover:border-white"
            }`}
          >
            {otherLabel}
          </Link>

          <a
            href={applyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 bg-[#EE4720] text-white text-[14px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
          >
            {t.apply}
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled || open ? "bg-[#272A33]" : "bg-white"
            } ${open ? "rotate-45" : "-translate-y-[5px]"}`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled || open ? "bg-[#272A33]" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled || open ? "bg-[#272A33]" : "bg-white"
            } ${open ? "-rotate-45" : "translate-y-[5px]"}`}
          />
        </button>
      </div>
    </nav>

      {/* Mobile menu — rendered OUTSIDE <nav> so the nav's backdrop-blur
          (which makes the nav a containing block for fixed descendants)
          doesn't clip this panel against the 72px header box. */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 overflow-y-auto overscroll-contain transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex flex-col px-8 pt-12 pb-16 gap-1">
          {/* Home */}
          <Link
            href={homeHref}
            onClick={() => setOpen(false)}
            className={`py-3 text-[28px] font-extralight tracking-tight transition-all duration-300 ${
              pathname === homeHref ? "text-[#2C76BB]" : "text-[#272A33]"
            }`}
            style={{
              transitionDelay: open ? "0ms" : "0ms",
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
            }}
          >
            {t.home}
          </Link>

          {/* Services (expandable) */}
          <div
            style={{
              transitionDelay: open ? "60ms" : "0ms",
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
            }}
            className="transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={`w-full flex items-center justify-between py-3 text-[28px] font-extralight tracking-tight ${
                servicesActive ? "text-[#2C76BB]" : "text-[#272A33]"
              }`}
            >
              {t.services}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-1 pl-4 border-l-2 border-[#E8F1FB] py-1">
                {t.svc.map((s) => {
                  const href = localizeHref(s.href, locale);
                  return (
                    <Link
                      key={s.href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`py-2.5 text-[16px] font-medium leading-snug transition-colors ${
                        pathname === href ? "text-[#2C76BB]" : "text-[#272A33]/75"
                      }`}
                    >
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {t.links.map((link, i) => {
            const href = localizeHref(link.href, locale);
            return (
              <Link
                key={link.href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3 text-[28px] font-extralight tracking-tight transition-all duration-300 ${
                  pathname === href ? "text-[#2C76BB]" : "text-[#272A33]"
                }`}
                style={{
                  transitionDelay: open ? `${(i + 2) * 60}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={applyHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-[#EE4720] text-white font-semibold rounded-lg w-fit"
            style={{
              transitionDelay: open ? `${(t.links.length + 2) * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
            }}
          >
            {t.apply}
          </a>

          {/* Language toggle */}
          <Link
            href={otherHref}
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#272A33]/70 hover:text-[#2C76BB] w-fit"
            style={{
              transitionDelay: open ? `${(t.links.length + 3) * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
            }}
          >
            <span className="inline-flex items-center justify-center rounded-full border border-[#272A33]/25 px-2.5 py-0.5 text-[13px]">
              {otherLabel}
            </span>
            {locale === "ms" ? "English" : "Bahasa Malaysia"}
          </Link>
        </div>
      </div>
    </>
  );
}
