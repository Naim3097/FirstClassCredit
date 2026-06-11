import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/firstclasscredit.my/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/firstclasscredit.my",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 9h2.5V6H14c-2.2 0-3.5 1.4-3.5 3.6V11H8v3h2.5v7H13.5v-7H16l.5-3h-3V9.8c0-.6.3-.8 1-.8z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@firstclasscredit_my",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.7v2.6c-1.3.1-2.5-.2-3.6-.8v5.9c0 3-2.1 5.1-4.9 5.1-2.6 0-4.7-1.9-4.7-4.5 0-2.7 2.2-4.6 4.9-4.4v2.7c-.4-.1-.8-.2-1.2-.1-1 .2-1.7 1-1.6 2 .1 1 1 1.7 2 1.6 1.1-.1 1.7-1 1.7-2.2V3h2.4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#272A33] text-white/60 pt-32 md:pt-40 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="First Class Credit"
              width={160}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-[13px] leading-relaxed mt-4 max-w-[240px]">
              <span className="block text-white font-semibold">
                Your Financing, Our Priority.
              </span>
              <span className="block mt-2">
                Your trusted partner in hire purchase financing in Malaysia.
              </span>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-[14px] hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/financing-hp" className="text-[14px] hover:text-white transition-colors">
                First Class Motorcycle HP Financing
              </Link>
              <Link href="/objective-financing" className="text-[14px] hover:text-white transition-colors">
                First Class Smartphone HP Financing
              </Link>
              <Link href="/about" className="text-[14px] hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/resources" className="text-[14px] hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-[14px] hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white mb-5">
              Contact
            </p>
            <div className="space-y-3 text-[14px]">
              <p className="leading-relaxed">
                First Class Credit Sdn. Bhd.
                <br />
                Lot 538, Ground Floor, Section 6,
                <br />
                KTLD, Jalan Satok,
                <br />
                93400 Kuching, Sarawak
              </p>
              <p>
                <a
                  href="tel:+6082237878"
                  className="hover:text-white transition-colors"
                >
                  +60 82-237878
                </a>
              </p>
              {/* WhatsApp — green logo */}
              <p>
                <a
                  href="https://wa.me/60169328901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                  </span>
                  +60 16-932 8901
                </a>
              </p>
              {/* Email */}
              <p>
                <a
                  href="mailto:hello@firstclasscredit.com.my"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  hello@firstclasscredit.com.my
                </a>
              </p>
            </div>
          </div>

          {/* Hours + Legal */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white mb-5">
              Hours
            </p>
            <p className="text-[14px] mb-6">
              Mon &ndash; Fri
              <br />
              8:30 AM &ndash; 5:30 PM
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="text-[13px] hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-[13px] hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px]">
          <span className="text-white/75 leading-relaxed">
            &copy; Copyright {new Date().getFullYear()}, First Class Credit Sdn. Bhd.
            [Registration No. 201801009791 (1271805-K)]. All rights reserved.
          </span>
          <a
            href="/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EE4720] font-semibold hover:text-[#F18F33] transition-colors whitespace-nowrap"
          >
            Apply Now
          </a>
        </div>
      </div>
    </footer>
  );
}
