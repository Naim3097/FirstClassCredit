import ApplyFormMs from "./ApplyFormMs";
import { getApplySettings } from "@/lib/content";
import { toApplyConfig } from "@/lib/applyConfig";

export default async function ApplyPageMs() {
  const settings = await getApplySettings("ms");
  const config = toApplyConfig(settings, {
    motorcycle: "Pembiayaan Sewa Beli Motosikal First Class",
    smartphone: "Pembiayaan Sewa Beli Telefon Pintar First Class",
  });
  return <ApplyFormMs config={config} />;
}
