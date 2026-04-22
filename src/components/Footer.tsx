import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#272A33] text-white/60 pt-16 pb-8">
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
            <p className="text-[13px] leading-relaxed mt-3 max-w-[240px]">
              Your trusted partner in hire purchase financing. Helping
              Malaysians achieve their mobility goals since Kuching,
              Sarawak.
            </p>
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
                Motorcycle Financing
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
                Lot 450, 1st Floor,
                <br />
                Lorong Lapangan Terbang 3A,
                <br />
                93250 Kuching, Sarawak
              </p>
              <p>
                <a
                  href="tel:+60168558553"
                  className="hover:text-white transition-colors"
                >
                  +60 16-855 8553
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/60168558553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
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
              9:00 AM &ndash; 5:00 PM
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

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-white/30">
          <span>
            &copy; {new Date().getFullYear()} First Class Credit. All rights
            reserved.
          </span>
          <Link
            href="/apply"
            className="text-[#EE4720] font-semibold hover:text-[#F18F33] transition-colors"
          >
            Apply Now &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
