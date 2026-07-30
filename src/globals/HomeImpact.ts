import type { GlobalConfig, Field } from "payload";
import { ICON_OPTIONS } from "../fields/iconOptions";

const statsField: Field = {
  name: "stats",
  type: "array",
  labels: { singular: "Stat", plural: "Stats" },
  minRows: 1,
  admin: {
    description: "The stat cards on the right of the bento.",
    initCollapsed: true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "value",
          type: "text",
          localized: true,
          admin: {
            width: "40%",
            description: 'e.g. "90%", "60", "24–48h". Leave blank for a label-only card.',
          },
        },
        {
          name: "style",
          type: "select",
          defaultValue: "light",
          options: [
            { label: "Light", value: "light" },
            { label: "Navy (highlight)", value: "navy" },
          ],
          admin: { width: "30%" },
        },
        {
          name: "icon",
          type: "select",
          options: [...ICON_OPTIONS],
          defaultValue: "calendar",
          admin: { width: "30%" },
        },
      ],
    },
    {
      name: "label",
      type: "text",
      localized: true,
      required: true,
    },
  ],
};

const serviceFields: Field[] = [
  {
    name: "tab",
    type: "text",
    localized: true,
    required: true,
    admin: { description: "Label on the toggle button." },
  },
  {
    name: "heading",
    type: "text",
    localized: true,
    required: true,
  },
  {
    name: "body",
    type: "textarea",
    localized: true,
    required: true,
  },
  {
    type: "row",
    fields: [
      {
        name: "buttonText",
        type: "text",
        localized: true,
        admin: { width: "50%" },
      },
      {
        name: "buttonHref",
        type: "text",
        admin: { width: "50%", description: 'e.g. "/financing-hp".' },
      },
    ],
  },
  {
    name: "plate",
    type: "group",
    label: "Image plate",
    fields: [
      { name: "image", type: "upload", relationTo: "media" },
      { name: "eyebrow", type: "text", localized: true },
      { name: "text", type: "textarea", localized: true },
      { name: "badge", type: "text", localized: true, admin: { description: "Optional corner badge." } },
    ],
  },
  statsField,
];

export const HomeImpact: GlobalConfig = {
  slug: "home-impact",
  label: "Homepage — Our Impact",
  access: {
    read: () => true,
  },
  admin: {
    group: "Homepage",
    description:
      'The "Our Impact" section with the motorcycle/smartphone toggle and editable stat cards.',
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      localized: true,
      defaultValue: "Our Impact",
    },
    {
      type: "tabs",
      tabs: [
        { label: "Motorcycle", fields: [{ name: "motorcycle", type: "group", fields: serviceFields }] },
        { label: "Smartphone", fields: [{ name: "smartphone", type: "group", fields: serviceFields }] },
      ],
    },
  ],
};
