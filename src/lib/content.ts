import { getPayload } from "payload";
import config from "@payload-config";

import type { Locale } from "@/lib/locale";
import type {
  SiteSetting,
  HeroBanner,
  Faq,
  Service,
  Testimonial,
  HomeImpact,
  SmartphoneProduct,
  Eligibility,
  AboutPartner,
  BlogPost,
  Term,
  Privacy,
  ApplySetting,
  FinancingPage,
} from "@/payload-types";

/**
 * Data-access layer between the frontend and Payload.
 *
 * Every getter is defensive: if the database isn't configured yet (no
 * DATABASE_URI) or a query fails, it returns null/[] so callers can fall back
 * to the built-in content. This keeps the site fully working before the CMS is
 * seeded, and lets it switch over automatically once content exists.
 */

const dbConfigured = () => Boolean(process.env.DATABASE_URI);

async function client() {
  return await getPayload({ config });
}

function warn(scope: string, err: unknown) {
  console.warn(
    `[content] ${scope} unavailable, using built-in fallback:`,
    err instanceof Error ? err.message : err,
  );
}

export async function getSiteSettings(
  locale: Locale = "en",
): Promise<SiteSetting | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    return await payload.findGlobal({
      slug: "site-settings",
      locale,
      depth: 0,
    });
  } catch (err) {
    warn("site-settings", err);
    return null;
  }
}

export async function getHeroBanners(locale: Locale): Promise<HeroBanner[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "hero-banners",
      where: { enabled: { equals: true } },
      sort: "order",
      locale,
      depth: 1,
      limit: 20,
    });
    return res.docs;
  } catch (err) {
    warn("hero-banners", err);
    return [];
  }
}

export async function getServices(locale: Locale): Promise<Service[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "services",
      where: { enabled: { equals: true } },
      sort: "order",
      locale,
      depth: 0,
      limit: 50,
    });
    return res.docs;
  } catch (err) {
    warn("services", err);
    return [];
  }
}

export async function getTestimonials(locale: Locale): Promise<Testimonial[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "testimonials",
      where: { enabled: { equals: true } },
      sort: "order",
      locale,
      depth: 0,
      limit: 50,
    });
    return res.docs;
  } catch (err) {
    warn("testimonials", err);
    return [];
  }
}

export async function getFAQs(
  locale: Locale,
  category: Faq["category"],
): Promise<Faq[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "faqs",
      where: { category: { equals: category } },
      sort: "order",
      locale,
      depth: 0,
      limit: 100,
    });
    return res.docs;
  } catch (err) {
    warn(`faqs:${category}`, err);
    return [];
  }
}

export async function getHomeImpact(
  locale: Locale,
): Promise<HomeImpact | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    return await payload.findGlobal({ slug: "home-impact", locale, depth: 1 });
  } catch (err) {
    warn("home-impact", err);
    return null;
  }
}

export async function getSmartphoneProducts(
  locale: Locale,
): Promise<SmartphoneProduct[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "smartphone-products",
      where: { enabled: { equals: true } },
      sort: "order",
      locale,
      depth: 1,
      limit: 50,
    });
    return res.docs;
  } catch (err) {
    warn("smartphone-products", err);
    return [];
  }
}

export async function getEligibility(
  locale: Locale,
): Promise<Eligibility | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    return await payload.findGlobal({ slug: "eligibility", locale, depth: 0 });
  } catch (err) {
    warn("eligibility", err);
    return null;
  }
}

export async function getAboutPartner(
  locale: Locale,
): Promise<AboutPartner | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    return await payload.findGlobal({ slug: "about-partner", locale, depth: 1 });
  } catch (err) {
    warn("about-partner", err);
    return null;
  }
}

export async function getBlogPosts(locale: Locale): Promise<BlogPost[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "blog-posts",
      where: { enabled: { equals: true } },
      sort: "-publishedAt",
      locale,
      depth: 1,
      limit: 100,
    });
    return res.docs;
  } catch (err) {
    warn("blog-posts", err);
    return [];
  }
}

export async function getFinancingPages(
  locale: Locale = "en",
): Promise<FinancingPage[]> {
  if (!dbConfigured()) return [];
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "financing-pages",
      where: { enabled: { equals: true } },
      locale,
      depth: 1,
      limit: 100,
    });
    return res.docs;
  } catch (err) {
    warn("financing-pages", err);
    return [];
  }
}

export async function getFinancingPageBySlug(
  slug: string,
  locale: Locale = "en",
): Promise<FinancingPage | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "financing-pages",
      where: { slug: { equals: slug }, enabled: { equals: true } },
      locale,
      depth: 1,
      limit: 1,
    });
    return res.docs[0] ?? null;
  } catch (err) {
    warn(`financing-page:${slug}`, err);
    return null;
  }
}

export async function getApplySettings(
  locale: Locale = "en",
): Promise<ApplySetting | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    return await payload.findGlobal({
      slug: "apply-settings",
      locale,
      depth: 0,
    });
  } catch (err) {
    warn("apply-settings", err);
    return null;
  }
}

export async function getLegalPage(
  slug: "terms" | "privacy",
  locale: Locale = "en",
): Promise<Term | Privacy | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    return await payload.findGlobal({ slug, locale, depth: 0 });
  } catch (err) {
    warn(`legal:${slug}`, err);
    return null;
  }
}

export async function getBlogPostBySlug(
  locale: Locale,
  slug: string,
): Promise<BlogPost | null> {
  if (!dbConfigured()) return null;
  try {
    const payload = await client();
    const res = await payload.find({
      collection: "blog-posts",
      where: { slug: { equals: slug }, enabled: { equals: true } },
      locale,
      depth: 1,
      limit: 1,
    });
    return res.docs[0] ?? null;
  } catch (err) {
    warn(`blog-post:${slug}`, err);
    return null;
  }
}
