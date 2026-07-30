import type { GlobalConfig } from "payload";

const legalGlobal = (
  slug: "terms" | "privacy",
  label: string,
  defaultTitle: string,
): GlobalConfig => ({
  slug,
  label,
  access: { read: () => true },
  admin: {
    group: "Legal",
    description: `Editable content for the ${label} page.`,
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      defaultValue: defaultTitle,
    },
    {
      name: "content",
      type: "richText",
      localized: true,
      admin: {
        description:
          "Full page content. Use headings for each section. Leave empty to show the built-in default.",
      },
    },
  ],
});

export const Terms = legalGlobal("terms", "Terms of Service", "Terms of Service");
export const Privacy = legalGlobal("privacy", "Privacy Notice", "Privacy Notice");
