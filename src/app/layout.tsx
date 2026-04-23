import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
      style: "normal",
      weight: "200 800",
    },
    {
      path: "../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "200 800",
    },
  ],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "First Class Credit | HP Motorcycle Financing in Malaysia",
  description:
    "Turn your two-wheeled goals into reality with hassle-free HP financing. Flexible repayments up to 60 months, pre-approval within 24-48 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
