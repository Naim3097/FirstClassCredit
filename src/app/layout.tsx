import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileApplyBar from "@/components/MobileApplyBar";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileApplyBar />
      </body>
    </html>
  );
}
