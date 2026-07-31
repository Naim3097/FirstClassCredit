import ApplyForm from "./ApplyForm";
import { getApplySettings } from "@/lib/content";
import { toApplyConfig } from "@/lib/applyConfig";

export default async function ApplyPage() {
  const settings = await getApplySettings("en");
  const config = toApplyConfig(settings, {
    motorcycle: "First Class Motorcycle HP Financing",
    smartphone: "First Class Smartphone HP Financing",
  });
  return <ApplyForm config={config} />;
}
