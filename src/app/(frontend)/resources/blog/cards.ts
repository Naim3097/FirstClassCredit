import type { BlogPost as CmsBlogPost } from "@/payload-types";

export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
};

/** Map CMS blog posts to the card shape the Resources list renders. */
export function blogPostCards(cms: CmsBlogPost[]): BlogCard[] {
  return cms.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    readingTime: p.readingTime || "",
    image:
      typeof p.image === "object" && p.image?.url
        ? p.image.url
        : p.imageUrl || "",
  }));
}
