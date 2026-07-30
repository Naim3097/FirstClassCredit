import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  admin: {
    group: "Settings",
    description:
      "Footer, contact details, social links, WhatsApp, PDS links and the contact map. Shared across the whole site.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Company",
          fields: [
            { name: "companyName", type: "text", defaultValue: "First Class Credit Sdn. Bhd." },
            {
              name: "registrationNo",
              type: "text",
              defaultValue: "201801009791 (1271805-K)",
              label: "Registration number",
            },
            {
              name: "address",
              type: "textarea",
              defaultValue:
                "Lot 538, Ground Floor, Section 6,\nKTLD, Jalan Satok,\n93400 Kuching, Sarawak",
              admin: { description: "One line per row (press Enter for a new line)." },
            },
            {
              name: "operatingHours",
              type: "group",
              fields: [
                {
                  name: "days",
                  type: "text",
                  localized: true,
                  defaultValue: "Mon – Fri",
                },
                {
                  name: "time",
                  type: "text",
                  defaultValue: "8:30 AM – 5:30 PM",
                },
              ],
            },
          ],
        },
        {
          label: "Contact",
          fields: [
            { name: "phone", type: "text", defaultValue: "+60 82-237878" },
            { name: "email", type: "email", defaultValue: "hello@firstclasscredit.com.my" },
            {
              name: "whatsappNumber",
              type: "text",
              defaultValue: "60169328901",
              label: "WhatsApp number",
              admin: {
                description:
                  "Digits only, including country code (e.g. 60169328901). Used for the wa.me link and the floating WhatsApp button.",
              },
            },
            {
              name: "whatsappDisplay",
              type: "text",
              defaultValue: "+60 16-932 8901",
              label: "WhatsApp number (display)",
              admin: { description: "How the number is shown to visitors." },
            },
          ],
        },
        {
          label: "Social",
          fields: [
            {
              name: "social",
              type: "group",
              fields: [
                { name: "instagram", type: "text", defaultValue: "https://www.instagram.com/firstclasscredit.my/" },
                { name: "facebook", type: "text", defaultValue: "https://www.facebook.com/firstclasscredit.my" },
                { name: "tiktok", type: "text", defaultValue: "https://www.tiktok.com/@firstclasscredit_my" },
              ],
            },
          ],
        },
        {
          label: "PDS Links",
          description:
            "Product Disclosure Sheet links. Editable per product and per language (use the language switch).",
          fields: [
            {
              name: "motorcyclePdsUrl",
              type: "text",
              localized: true,
              defaultValue: "/motorcycle-hp-pds.pdf",
              label: "Motorcycle PDS URL",
            },
            {
              name: "smartphonePdsUrl",
              type: "text",
              localized: true,
              defaultValue: "/smartphone-hp-pds.pdf",
              label: "Smartphone PDS URL",
            },
          ],
        },
        {
          label: "Map",
          fields: [
            {
              name: "mapEmbedSrc",
              type: "textarea",
              label: "Google Maps embed src",
              admin: {
                description:
                  'The "src" URL from Google Maps → Share → Embed a map. Used for the map on the Contact page.',
              },
            },
            {
              name: "mapLink",
              type: "text",
              label: '"Open in Maps" link',
              admin: { description: "Where the Open in Maps button points." },
            },
          ],
        },
      ],
    },
  ],
};
