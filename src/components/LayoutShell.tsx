"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isApplyPage = pathname === "/apply";

  return (
    <>
      {!isApplyPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isApplyPage && <Footer />}
      {!isApplyPage && <WhatsAppFloat />}
    </>
  );
}
