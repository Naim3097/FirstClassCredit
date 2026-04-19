import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-warm-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">FC</span>
              </div>
              <span className="font-semibold">First Class Credit</span>
            </div>
            <p className="text-sm text-warm-white/70 leading-relaxed">
              Tailored hire purchase solutions designed to put ownership within
              reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-warm-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/financing-hp", label: "Motorcycle Financing HP" },
                { href: "/about", label: "About Us" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-warm-white">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-warm-white/70">
              <li>
                LOT 442, Ground Floor Section 11,
                <br />
                KTLD, Jln Kulas, Kampung Bandarshah,
                <br />
                93400 Kuching, Sarawak
              </li>
              <li>
                <a
                  href="https://wa.me/60169328901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +6016-932 8901
                </a>
              </li>
              <li>
                <a
                  href="tel:+6082549196"
                  className="hover:text-white transition-colors"
                >
                  Office: +6082-549 196
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-warm-white">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy Disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-warm-white/50">
          &copy; {new Date().getFullYear()} First Class Credit. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
