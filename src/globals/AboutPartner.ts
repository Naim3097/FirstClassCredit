import type { GlobalConfig } from "payload";

/**
 * The "Powered by JomKaki Motor" partner section on the About page.
 */
export const AboutPartner: GlobalConfig = {
  slug: "about-partner",
  label: "About — Partner Section",
  access: {
    read: () => true,
  },
  admin: {
    group: "Pages",
    description: 'The "Our Partner" block on the About page.',
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      localized: true,
      defaultValue: "Our Partner",
    },
    {
      name: "heading",
      type: "text",
      localized: true,
      required: true,
      defaultValue: "Powered by JomKaki Motor",
    },
    {
      name: "body",
      type: "richText",
      localized: true,
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      admin: { description: "Partner logo shown on the right." },
    },
    {
      type: "row",
      fields: [
        {
          name: "linkLabel",
          type: "text",
          localized: true,
          defaultValue: "Visit JomKaki Motor",
          admin: { width: "50%" },
        },
        {
          name: "linkUrl",
          type: "text",
          admin: { width: "50%" },
        },
      ],
    },
  ],
};
