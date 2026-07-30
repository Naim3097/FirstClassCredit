import type { HeroSlide } from "./HomeHero";
import type { HeroBanner } from "@/payload-types";
import { localizeHref, type Locale } from "@/lib/locale";

type Labels = { apply: string; how: string };

/**
 * Map CMS hero banners to the shape HomeHero renders. Hrefs are localized for
 * the current locale; button labels come from the caller (localized in code).
 */
export function bannersToSlides(
  banners: HeroBanner[],
  locale: Locale,
  labels: Labels,
): HeroSlide[] {
  return banners.map((b) => {
    const img =
      typeof b.backgroundImage === "object" && b.backgroundImage?.url
        ? b.backgroundImage.url
        : "";
    return {
      key: String(b.id),
      eyebrow: b.eyebrow,
      accent: (b.accent as HeroSlide["accent"]) ?? "sky",
      title: b.title,
      body: b.body,
      bg: img,
      applyHref: localizeHref(b.applyHref, locale),
      howHref: localizeHref(b.howItWorksHref, locale),
      applyLabel: labels.apply,
      howLabel: labels.how,
    };
  });
}
