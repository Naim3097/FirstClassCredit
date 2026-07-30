import type { CollectionConfig } from "payload";

/**
 * The phone lineup cards on the Smartphone HP Financing page
 * ("The Complete iPhone 17 Lineup"). Add a card here to extend the lineup.
 */
export const SmartphoneProducts: CollectionConfig = {
  slug: "smartphone-products",
  labels: { singular: "Smartphone Product", plural: "Smartphone Products" },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order", "enabled"],
    group: "Content",
    description: "Product cards in the smartphone lineup section.",
  },
  defaultSort: "order",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: { description: 'e.g. "iPhone 17 Pro".' },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "applyHref",
      type: "text",
      defaultValue: "/apply?type=smartphone",
      admin: { description: 'Destination for the card\'s "Apply Now" button.' },
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
