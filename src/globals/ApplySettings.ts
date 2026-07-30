import type { GlobalConfig } from "payload";

/**
 * Controls which financing application forms are available and their labels.
 * Turning a type off removes it from the Apply form's financing-type selector.
 */
export const ApplySettings: GlobalConfig = {
  slug: "apply-settings",
  label: "Apply Forms",
  access: { read: () => true },
  admin: {
    group: "Settings",
    description:
      "Enable/disable each financing application form and edit its label.",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "motorcycleEnabled",
          type: "checkbox",
          defaultValue: true,
          label: "Motorcycle form enabled",
          admin: { width: "50%" },
        },
        {
          name: "motorcycleLabel",
          type: "text",
          localized: true,
          defaultValue: "First Class Motorcycle HP Financing",
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "smartphoneEnabled",
          type: "checkbox",
          defaultValue: true,
          label: "Smartphone form enabled",
          admin: { width: "50%" },
        },
        {
          name: "smartphoneLabel",
          type: "text",
          localized: true,
          defaultValue: "First Class Smartphone HP Financing",
          admin: { width: "50%" },
        },
      ],
    },
  ],
};
