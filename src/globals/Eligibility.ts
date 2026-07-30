import type { GlobalConfig, Field } from "payload";
import { ICON_OPTIONS } from "../fields/iconOptions";

/**
 * The "Eligibility & Documents" tables on the Motorcycle and Smartphone
 * financing pages. Each product has its own intro copy and a list of rows.
 */
const productFields: Field[] = [
  {
    name: "eyebrow",
    type: "text",
    localized: true,
    defaultValue: "Before You Apply",
  },
  {
    name: "heading",
    type: "text",
    localized: true,
    required: true,
    defaultValue: "Eligibility & Documents",
  },
  {
    name: "intro",
    type: "textarea",
    localized: true,
    admin: { description: "Short paragraph under the heading." },
  },
  {
    name: "rows",
    type: "array",
    labels: { singular: "Row", plural: "Rows" },
    minRows: 1,
    admin: { initCollapsed: true, description: "Each requirement row in the table." },
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "icon",
            type: "select",
            options: [...ICON_OPTIONS],
            defaultValue: "person",
            admin: { width: "30%" },
          },
          {
            name: "label",
            type: "text",
            localized: true,
            required: true,
            admin: { width: "70%", description: 'e.g. "Nationality".' },
          },
        ],
      },
      {
        name: "value",
        type: "textarea",
        localized: true,
        required: true,
        admin: { description: 'e.g. "Malaysian Citizen".' },
      },
    ],
  },
];

export const Eligibility: GlobalConfig = {
  slug: "eligibility",
  label: "Eligibility & Documents",
  access: {
    read: () => true,
  },
  admin: {
    group: "Pages",
    description:
      "The Eligibility & Documents tables on the Motorcycle and Smartphone financing pages. PDS links are edited in Site Settings.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        { label: "Motorcycle", fields: [{ name: "motorcycle", type: "group", fields: productFields }] },
        { label: "Smartphone", fields: [{ name: "smartphone", type: "group", fields: productFields }] },
      ],
    },
  ],
};
