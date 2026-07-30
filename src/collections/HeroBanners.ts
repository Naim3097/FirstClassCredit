import type { CollectionConfig } from "payload";

export const HeroBanners: CollectionConfig = {
  slug: "hero-banners",
  labels: {
    singular: "Hero Banner",
    plural: "Hero Banners",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "internalName",
    defaultColumns: ["internalName", "accent", "order", "enabled"],
    group: "Homepage",
    description:
      "Slides in the homepage hero carousel. Drag order via the Order field. EN/BM edited with the language switch.",
  },
  defaultSort: "order",
  fields: [
    {
      name: "internalName",
      type: "text",
      required: true,
      label: "Internal name",
      admin: {
        description: "Only shown in the admin — not on the website.",
      },
    },
    {
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      label: "Show on site",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Lower numbers appear first.",
        step: 1,
      },
    },
    {
      name: "accent",
      type: "select",
      required: true,
      defaultValue: "sky",
      options: [
        { label: "Sky blue (motorcycle style)", value: "sky" },
        { label: "Gold (smartphone style)", value: "gold" },
      ],
      admin: {
        description: "Colour of the eyebrow text.",
      },
    },
    {
      name: "eyebrow",
      type: "text",
      localized: true,
      required: true,
      admin: {
        description: "Small uppercase label above the title.",
      },
    },
    {
      name: "title",
      type: "textarea",
      localized: true,
      required: true,
      admin: {
        description: "Main headline. Press Enter for a line break.",
      },
    },
    {
      name: "body",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "applyHref",
      type: "text",
      required: true,
      defaultValue: "/apply",
      admin: {
        description: 'Destination for the "Apply Now" button.',
      },
    },
    {
      name: "howItWorksHref",
      type: "text",
      required: true,
      defaultValue: "/financing-hp",
      admin: {
        description: 'Destination for the "How It Works" button.',
      },
    },
  ],
};
