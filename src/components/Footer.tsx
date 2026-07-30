import Link from "next/link";
import Image from "next/image";
import { localizeHref, type Locale } from "@/lib/locale";
import type { SiteSetting } from "@/payload-types";

// Built-in defaults — used when the CMS has no Site Settings yet.
const DEFAULTS = {
  companyName: "First Class Credit Sdn. Bhd.",
  registrationNo: "201801009791 (1271805-K)",
  address:
    "Lot 538, Ground Floor, Section 6,\nKTLD, Jalan Satok,\n93400 Kuching, Sarawak",
  phone: "+60 82-237878",
  email: "hello@firstclasscredit.com.my",
  whatsappNumber: "60169328901",
  whatsappDisplay: "+60 16-932 8901",
  hoursTime: "8:30 AM – 5:30 PM",
  instagram: "https://www.instagram.com/firstclasscredit.my/",
  facebook: "https://www.facebook.com/firstclasscredit.my",
  tiktok: "https://www.tiktok.com/@firstclasscredit_my",
};

const socialIcons = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h2.5V6H14c-2.2 0-3.5 1.4-3.5 3.6V11H8v3h2.5v7H13.5v-7H16l.5-3h-3V9.8c0-.6.3-.8 1-.8z" />
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.7v2.6c-1.3.1-2.5-.2-3.6-.8v5.9c0 3-2.1 5.1-4.9 5.1-2.6 0-4.7-1.9-4.7-4.5 0-2.7 2.2-4.6 4.9-4.4v2.7c-.4-.1-.8-.2-1.2-.1-1 .2-1.7 1-1.6 2 .1 1 1 1.7 2 1.6 1.1-.1 1.7-1 1.7-2.2V3h2.4z" />
    </svg>
  ),
} as const;

const FOOTER = {
  en: {
    tagline1: "Your Financing, Our Priority.",
    tagline2: "Your trusted partner in hire purchase financing in Malaysia.",
    navigate: "Navigate",
    home: "Home",
    moto: "First Class Motorcycle HP Financing",
    phone: "First Class Smartphone HP Financing",
    about: "About Us",
    resources: "Resources",
    contact: "Contact",
    hoursHeading: "Hours",
    days: "Mon – Fri",
    rights: "All rights reserved.",
    apply: "Apply Now",
  },
  ms: {
    tagline1: "Pembiayaan Anda, Keutamaan Kami.",
    tagline2:
      "Rakan pembiayaan sewa beli yang anda boleh percayai di Malaysia.",
    navigate: "Navigasi",
    home: "Utama",
    moto: "Pembiayaan Sewa Beli Motosikal First Class",
    phone: "Pembiayaan Sewa Beli Telefon Pintar First Class",
    about: "Tentang Kami",
    resources: "Sumber",
    contact: "Hubungi Kami",
    hoursHeading: "Waktu Operasi",
    days: "Isnin – Jumaat",
    rights: "Hak cipta terpelihara.",
    apply: "Mohon Sekarang",
  },
} as const;

export default function Footer({
  locale = "en",
  settings,
}: {
  locale?: Locale;
  settings?: SiteSetting | null;
}) {
  const t = FOOTER[locale];
  const lh = (p: string) => localizeHref(p, locale);

  // Resolve each contact detail from the CMS, falling back to built-in values.
  const companyName = settings?.companyName || DEFAULTS.companyName;
  const registrationNo = settings?.registrationNo || DEFAULTS.registrationNo;
  const addressLines = (settings?.address || DEFAULTS.address).split("\n");
  const phone = settings?.phone || DEFAULTS.phone;
  const phoneTel = phone.replace(/[^\d+]/g, "");
  const email = settings?.email || DEFAULTS.email;
  const waNumber = settings?.whatsappNumber || DEFAULTS.whatsappNumber;
  const waDisplay = settings?.whatsappDisplay || DEFAULTS.whatsappDisplay;
  const hoursTime = settings?.operatingHours?.time || DEFAULTS.hoursTime;
  const social = {
    instagram: settings?.social?.instagram || DEFAULTS.instagram,
    facebook: settings?.social?.facebook || DEFAULTS.facebook,
    tiktok: settings?.social?.tiktok || DEFAULTS.tiktok,
  };
  const socials = [
    { label: "Instagram", href: social.instagram, icon: socialIcons.instagram },
    { label: "Facebook", href: social.facebook, icon: socialIcons.facebook },
    { label: "TikTok", href: social.tiktok, icon: socialIcons.tiktok },
  ];

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
                {t.tagline1}
              </span>
              <span className="block mt-2">{t.tagline2}</span>
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
              {t.navigate}
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link href={lh("/")} className="text-[14px] hover:text-white transition-colors">
                {t.home}
              </Link>
              <Link href={lh("/financing-hp")} className="text-[14px] hover:text-white transition-colors">
                {t.moto}
              </Link>
              <Link href={lh("/objective-financing")} className="text-[14px] hover:text-white transition-colors">
                {t.phone}
              </Link>
              <Link href={lh("/about")} className="text-[14px] hover:text-white transition-colors">
                {t.about}
              </Link>
              <Link href={lh("/resources")} className="text-[14px] hover:text-white transition-colors">
                {t.resources}
              </Link>
              <Link href={lh("/contact")} className="text-[14px] hover:text-white transition-colors">
                {t.contact}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white mb-5">
              {t.contact}
            </p>
            <div className="space-y-3 text-[14px]">
              <p className="leading-relaxed">
                {companyName}
                {addressLines.map((line, i) => (
                  <span key={i}>
                    <br />
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={`tel:${phoneTel}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </p>
              {/* WhatsApp — green logo */}
              <p>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                  </span>
                  {waDisplay}
                </a>
              </p>
              {/* Email */}
              <p>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Hours + Legal */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white mb-5">
              {t.hoursHeading}
            </p>
            <p className="text-[14px] mb-6">
              {t.days}
              <br />
              {hoursTime}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              <Link
                href="/terms"
                className="text-[13px] hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-[13px] hover:text-white transition-colors"
              >
                Privacy Notice
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px]">
          <span className="text-white/75 leading-relaxed">
            &copy; Copyright {new Date().getFullYear()}, {companyName}
            {" "}[Registration No. {registrationNo}]. {t.rights}
          </span>
          <a
            href={lh("/apply")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EE4720] font-semibold hover:text-[#F18F33] transition-colors whitespace-nowrap"
          >
            {t.apply}
          </a>
        </div>
      </div>
    </footer>
  );
}
