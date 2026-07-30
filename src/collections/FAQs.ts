import type { CollectionConfig } from "payload";

/**
 * Every place a FAQ list appears on the site. The homepage shows two tabs
 * (motorcycle + smartphone); the product and resources pages show their own
 * full lists.
 */
export const FAQ_CATEGORIES = [
  { label: "Homepage — Motorcycle tab", value: "home-motorcycle" },
  { label: "Homepage — Smartphone tab", value: "home-smartphone" },
  { label: "Motorcycle Financing page", value: "motorcycle-page" },
  { label: "Smartphone Financing page", value: "smartphone-page" },
  { label: "Resources — Motorcycle", value: "resources-motorcycle" },
  { label: "Resources — Smartphone", value: "resources-smartphone" },
] as const;

export const FAQs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "category", "order"],
    group: "Content",
    description:
      "Frequently asked questions. Set the Category to control where each one appears. EN/BM edited with the language switch.",
    listSearchableFields: ["question"],
  },
  defaultSort: "order",
  fields: [
    {
      name: "category",
      type: "select",
      required: true,
      hasMany: false,
      options: [...FAQ_CATEGORIES],
      admin: {
        description: "Which FAQ list this question belongs to.",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { description: "Lower numbers appear first.", step: 1 },
    },
    {
      name: "question",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      localized: true,
      required: true,
    },
  ],
};
