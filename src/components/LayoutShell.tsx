"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { getLocale } from "@/lib/locale";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isApplyPage = pathname === "/apply" || pathname === "/ms/apply";
  const locale = getLocale(pathname);

  return (
    <>
      {!isApplyPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isApplyPage && <Footer locale={locale} />}
      {!isApplyPage && <WhatsAppFloat />}
    </>
  );
}
