import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import type { NavServices } from "@/components/Navbar";
import { getSiteSettings, getServices } from "@/lib/content";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../fonts/PlusJakartaSans-VariableFont_wght.ttf",
      style: "normal",
      weight: "200 800",
    },
    {
      path: "../../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "200 800",
    },
  ],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "First Class Credit | Motorcycle Hire Purchase Financing in Malaysia",
  description:
    "Turn your two-wheeled goals into reality with hassle-free HP financing. Flexible repayments up to 60 months, pre-approval within 24-48 hours.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Non-localized contact details for the footer & WhatsApp button. Localized
  // labels (nav, hours "days") stay in-component. Returns null until seeded,
  // in which case the components use their built-in defaults.
  const settings = await getSiteSettings();

  // Services dropdown is localized, so fetch both languages for the client nav.
  const [servicesEn, servicesMs] = await Promise.all([
    getServices("en"),
    getServices("ms"),
  ]);
  const services: NavServices = {
    en: servicesEn.map((s) => ({ name: s.name, href: s.href })),
    ms: servicesMs.map((s) => ({ name: s.name, href: s.href })),
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col`}>
        <LayoutShell settings={settings} services={services}>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
