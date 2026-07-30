import type { ImpactData, ImpactService } from "@/components/ImpactShowcase";
import type { HomeImpact, Media } from "@/payload-types";

function imageUrl(v: number | Media | null | undefined): string {
  return v && typeof v === "object" && v.url ? v.url : "";
}

type CmsService = NonNullable<HomeImpact["motorcycle"]>;

function mapService(
  s: CmsService | null | undefined,
  key: ImpactService["key"],
): ImpactService {
  return {
    key,
    tab: s?.tab ?? "",
    heading: s?.heading ?? "",
    body: s?.body ?? "",
    // Base href — ImpactShowcase localizes it for the current locale.
    button: { text: s?.buttonText ?? "", href: s?.buttonHref ?? "#" },
    plate: {
      image: imageUrl(s?.plate?.image),
      alt: "",
      eyebrow: s?.plate?.eyebrow ?? "",
      text: s?.plate?.text ?? "",
      badge: s?.plate?.badge ?? undefined,
    },
    stats: (s?.stats ?? []).map((st) => ({
      value: st.value ?? "",
      label: st.label ?? "",
      variant: st.style === "navy" ? ("navy" as const) : ("light" as const),
      icon: st.icon ?? "calendar",
    })),
  };
}

/** Map the "Our Impact" global to the shape ImpactShowcase renders. */
export function mapImpact(hi: HomeImpact | null): ImpactData | undefined {
  if (!hi) return undefined;
  return {
    eyebrow: hi.eyebrow ?? "Our Impact",
    services: [
      mapService(hi.motorcycle, "motorcycle"),
      mapService(hi.smartphone, "smartphone"),
    ],
  };
}
