"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const services = [
  { href: "/financing-hp", label: "First Class Motorcycle HP Financing" },
  { href: "/objective-financing", label: "First Class Smartphone HP Financing" },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesActive = services.some((s) => s.href === pathname);

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
        <Link href="/" className="flex items-center">
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
            href="/"
            className={`text-[14px] font-medium transition-colors duration-300 ${
              pathname === "/"
                ? scrolled
                  ? "text-[#2C76BB]"
                  : "text-white"
                : scrolled
                ? "text-[#272A33]/70 hover:text-[#272A33]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Home
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
              Services
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
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block px-4 py-3 rounded-lg text-[13.5px] font-medium leading-snug transition-colors ${
                      pathname === s.href
                        ? "bg-[#E8F1FB] text-[#2C76BB]"
                        : "text-[#272A33]/80 hover:bg-[#f4f6fb] hover:text-[#2C76BB]"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {links
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-300 ${
                  pathname === link.href
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
            ))}
          <a
            href="/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center justify-center px-5 py-2 bg-[#EE4720] text-white text-[14px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
          >
            Apply Now
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
            href="/"
            onClick={() => setOpen(false)}
            className={`py-3 text-[28px] font-extralight tracking-tight transition-all duration-300 ${
              pathname === "/" ? "text-[#2C76BB]" : "text-[#272A33]"
            }`}
            style={{
              transitionDelay: open ? "0ms" : "0ms",
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
            }}
          >
            Home
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
              Services
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
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className={`py-2.5 text-[16px] font-medium leading-snug transition-colors ${
                      pathname === s.href ? "text-[#2C76BB]" : "text-[#272A33]/75"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining links */}
          {links
            .filter((link) => link.href !== "/")
            .map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-[28px] font-extralight tracking-tight transition-all duration-300 ${
                  pathname === link.href ? "text-[#2C76BB]" : "text-[#272A33]"
                }`}
                style={{
                  transitionDelay: open ? `${(i + 2) * 60}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            ))}
          <a
            href="/apply"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-[#EE4720] text-white font-semibold rounded-lg w-fit"
            style={{
              transitionDelay: open ? `${(links.length + 2) * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
}
