import ApplyForm, { type ApplyConfig } from "./ApplyForm";
import { getApplySettings } from "@/lib/content";

export default async function ApplyPage() {
  const settings = await getApplySettings("en");
  const config: ApplyConfig = {
    // Default both on; only hide a form when explicitly disabled in the CMS.
    motorcycleEnabled: settings?.motorcycleEnabled ?? true,
    smartphoneEnabled: settings?.smartphoneEnabled ?? true,
    motorcycleLabel:
      settings?.motorcycleLabel || "First Class Motorcycle HP Financing",
    smartphoneLabel:
      settings?.smartphoneLabel || "First Class Smartphone HP Financing",
  };
  return <ApplyForm config={config} />;
}
