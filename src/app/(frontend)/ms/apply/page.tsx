import ApplyFormMs from "./ApplyFormMs";
import type { ApplyConfig } from "@/app/(frontend)/apply/ApplyForm";
import { getApplySettings } from "@/lib/content";

export default async function ApplyPageMs() {
  const settings = await getApplySettings("ms");
  const config: ApplyConfig = {
    motorcycleEnabled: settings?.motorcycleEnabled ?? true,
    smartphoneEnabled: settings?.smartphoneEnabled ?? true,
    motorcycleLabel:
      settings?.motorcycleLabel || "Pembiayaan Sewa Beli Motosikal First Class",
    smartphoneLabel:
      settings?.smartphoneLabel ||
      "Pembiayaan Sewa Beli Telefon Pintar First Class",
  };
  return <ApplyFormMs config={config} />;
}
