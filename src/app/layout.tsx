import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
