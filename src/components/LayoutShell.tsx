"use client";

import { usePathname } from "next/navigation";
import Navbar, { type NavServices } from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { getLocale } from "@/lib/locale";
import type { SiteSetting } from "@/payload-types";

export default function LayoutShell({
  children,
  settings,
  services,
}: {
  children: React.ReactNode;
  settings?: SiteSetting | null;
  services?: NavServices;
}) {
  const pathname = usePathname();
  const isApplyPage = pathname === "/apply" || pathname === "/ms/apply";
  const locale = getLocale(pathname);

  return (
    <>
      {!isApplyPage && <Navbar services={services} />}
      <main className="flex-1">{children}</main>
      {!isApplyPage && <Footer locale={locale} settings={settings} />}
      {!isApplyPage && (
        <WhatsAppFloat number={settings?.whatsappNumber || undefined} />
      )}
    </>
  );
}
