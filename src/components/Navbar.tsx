"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/financing-hp", label: "Motorcycle Financing" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_#e8e8e0]"
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
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
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
          <Link
            href="/apply"
            className="ml-3 inline-flex items-center justify-center px-5 py-2 bg-[#EE4720] text-white text-[14px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
          >
            Apply Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled ? "bg-[#272A33]" : "bg-white"
            } ${open ? "rotate-45" : "-translate-y-[5px]"}`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled ? "bg-[#272A33]" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled ? "bg-[#272A33]" : "bg-white"
            } ${open ? "-rotate-45" : "translate-y-[5px]"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-8 pt-12 gap-1">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[28px] font-extralight tracking-tight transition-all duration-300 ${
                pathname === link.href
                  ? "text-[#2C76BB]"
                  : "text-[#272A33]"
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-[#EE4720] text-white font-semibold rounded-lg w-fit"
            style={{
              transitionDelay: open ? `${links.length * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
            }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
