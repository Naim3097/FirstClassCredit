import type { CollectionConfig } from "payload";

/**
 * Customer reviews on the homepage. The layout shows one "featured" quote large
 * on the left, with the remaining ones stacked on the right.
 */
export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonial", plural: "Testimonials" },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "featured", "order", "enabled"],
    group: "Content",
    description: "Customer reviews shown on the homepage.",
  },
  defaultSort: "order",
  fields: [
    {
      name: "quote",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "authorName",
      type: "text",
      required: true,
    },
    {
      name: "descriptor",
      type: "text",
      localized: true,
      admin: {
        description: 'Shown under the name, e.g. "Motorcycle Owner · Kuching".',
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "Featured reviews render large on the left. Keep one or two featured.",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { description: "Lower numbers appear first.", step: 1 },
    },
    {
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      label: "Show on site",
    },
  ],
};
