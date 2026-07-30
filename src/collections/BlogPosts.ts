import type { CollectionConfig } from "payload";

/**
 * Resources → blog articles. Rendered both in the article list and as a
 * reusable article template at /resources/blog/[slug] (and /ms/...).
 */
export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  labels: { singular: "Blog Post", plural: "Blog Posts" },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedAt", "enabled"],
    group: "Content",
    description:
      "Articles for the Resources section. EN/BM edited with the language switch — the slug can differ per language.",
  },
  defaultSort: "-publishedAt",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "slug",
      type: "text",
      localized: true,
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description:
          "URL segment, e.g. ccris-ctos-can-you-still-get-a-motorcycle-loan. Lowercase, words separated by hyphens.",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        description: "Controls ordering (newest first).",
      },
    },
    {
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      label: "Published",
      admin: { position: "sidebar" },
    },
    {
      name: "readingTime",
      type: "text",
      localized: true,
      admin: { description: 'e.g. "5 min read".' },
    },
    {
      name: "excerpt",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Cover image. Leave blank to use the external image URL below instead.",
      },
    },
    {
      name: "imageUrl",
      type: "text",
      admin: {
        description:
          "Optional external cover image URL (used only if no cover image is uploaded).",
      },
    },
    {
      name: "body",
      type: "richText",
      localized: true,
      required: true,
    },
    {
      name: "callout",
      type: "textarea",
      localized: true,
      admin: {
        description:
          'Optional call-to-action box shown at the end of the article (with "Calculate Instalment" and "Apply Now" buttons).',
      },
    },
  ],
};
