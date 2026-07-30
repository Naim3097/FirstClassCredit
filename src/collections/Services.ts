import type { CollectionConfig } from "payload";

/**
 * Products shown in the navbar "Services" dropdown. Add an entry here to make a
 * new product appear in the menu on both the desktop and mobile nav.
 */
export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Service", plural: "Services" },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "href", "order", "enabled"],
    group: "Navigation",
    description: "Items in the navbar Services dropdown.",
  },
  defaultSort: "order",
  fields: [
    {
      name: "name",
      type: "text",
      localized: true,
      required: true,
      admin: { description: "Label shown in the dropdown." },
    },
    {
      name: "href",
      type: "text",
      required: true,
      admin: {
        description:
          'Path for the English site, e.g. "/financing-hp". The /ms prefix is added automatically on the Malay site.',
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
      label: "Show in menu",
    },
  ],
};
