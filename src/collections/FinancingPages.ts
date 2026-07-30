import type { CollectionConfig } from "payload";
import { ICON_OPTIONS } from "@/fields/iconOptions";

/**
 * A full financing product page (hero → why-us → lineup → eligibility →
 * calculator → FAQ → CTA), rendered at /financing/<slug> (and /ms/financing/<slug>).
 *
 * To add a new product page: open an existing one in the admin, click
 * **Duplicate**, change the slug + content, and publish. No code changes needed.
 */
export const FinancingPages: CollectionConfig = {
  slug: "financing-pages",
  labels: { singular: "Financing Page", plural: "Financing Pages" },
  access: { read: () => true },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "enabled"],
    group: "Content",
    description:
      "Product financing pages. Duplicate one to add a new product page.",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          admin: {
            width: "60%",
            description: 'Admin title, e.g. "Smartphone HP Financing".',
          },
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          index: true,
          admin: {
            width: "40%",
            description:
              'URL segment — the page lives at /financing/<slug>. Lowercase, dashes, e.g. "laptop-hp".',
          },
        },
      ],
    },
    {
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      label: "Published (visible on site)",
    },

    // ── Hero ────────────────────────────────────────────────────────
    {
      type: "collapsible",
      label: "Hero",
      fields: [
        {
          name: "hero",
          type: "group",
          fields: [
            { name: "eyebrow", type: "text", localized: true },
            {
              name: "accent",
              type: "select",
              defaultValue: "gold",
              options: [
                { label: "Gold", value: "gold" },
                { label: "Sky blue", value: "sky" },
              ],
              admin: { description: "Colour of the eyebrow label." },
            },
            {
              name: "title",
              type: "textarea",
              localized: true,
              admin: { description: "Use a line break for a two-line title." },
            },
            { name: "body", type: "textarea", localized: true },
            { name: "backgroundImage", type: "upload", relationTo: "media" },
            {
              name: "backgroundImageUrl",
              type: "text",
              admin: {
                description:
                  "Optional: external image URL, used if no upload is set.",
              },
            },
            { name: "applyHref", type: "text", defaultValue: "/apply" },
            { name: "applyLabel", type: "text", localized: true, defaultValue: "Apply Now" },
          ],
        },
      ],
    },

    // ── Why us ──────────────────────────────────────────────────────
    {
      type: "collapsible",
      label: "Why Us",
      fields: [
        {
          name: "whyUs",
          type: "group",
          fields: [
            { name: "heading", type: "textarea", localized: true },
            {
              name: "cards",
              type: "array",
              labels: { singular: "Card", plural: "Cards" },
              fields: [
                {
                  name: "icon",
                  type: "select",
                  options: [...ICON_OPTIONS],
                  defaultValue: "chart",
                },
                { name: "title", type: "text", localized: true },
                { name: "desc", type: "textarea", localized: true },
              ],
            },
          ],
        },
      ],
    },

    // ── Product lineup ──────────────────────────────────────────────
    {
      type: "collapsible",
      label: "Product Lineup",
      fields: [
        {
          name: "lineup",
          type: "group",
          fields: [
            { name: "enabled", type: "checkbox", defaultValue: true, label: "Show lineup section" },
            { name: "eyebrow", type: "text", localized: true },
            { name: "heading", type: "textarea", localized: true },
            { name: "body", type: "textarea", localized: true },
            {
              name: "products",
              type: "array",
              labels: { singular: "Product", plural: "Products" },
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
                { name: "imageUrl", type: "text", admin: { description: "Used if no upload is set." } },
                { name: "name", type: "text", localized: true },
                { name: "desc", type: "textarea", localized: true },
                { name: "applyHref", type: "text", defaultValue: "/apply" },
              ],
            },
          ],
        },
      ],
    },

    // ── Eligibility ─────────────────────────────────────────────────
    {
      type: "collapsible",
      label: "Eligibility & Documents",
      fields: [
        {
          name: "eligibility",
          type: "group",
          fields: [
            { name: "eyebrow", type: "text", localized: true, defaultValue: "Before You Apply" },
            { name: "heading", type: "textarea", localized: true },
            { name: "intro", type: "textarea", localized: true },
            { name: "checkLabel", type: "text", localized: true, defaultValue: "Check If You Qualify" },
            { name: "checkHref", type: "text", defaultValue: "/apply" },
            { name: "pdsLabel", type: "text", localized: true, defaultValue: "View the Product Disclosure Sheet (PDS)" },
            { name: "pdsUrl", type: "text" },
            {
              name: "rows",
              type: "array",
              labels: { singular: "Row", plural: "Rows" },
              fields: [
                { name: "icon", type: "select", options: [...ICON_OPTIONS], defaultValue: "document" },
                { name: "label", type: "text", localized: true },
                { name: "value", type: "text", localized: true },
              ],
            },
          ],
        },
      ],
    },

    // ── Loan calculator ─────────────────────────────────────────────
    {
      type: "collapsible",
      label: "Loan Calculator",
      fields: [
        {
          name: "calculator",
          type: "group",
          fields: [
            { name: "enabled", type: "checkbox", defaultValue: true, label: "Show calculator section" },
            { name: "eyebrow", type: "text", localized: true, defaultValue: "Plan your budget" },
            { name: "heading", type: "textarea", localized: true },
            { name: "body", type: "textarea", localized: true },
            {
              type: "row",
              fields: [
                { name: "minAmount", type: "number", defaultValue: 3000, admin: { width: "33%" } },
                { name: "maxAmount", type: "number", defaultValue: 10000, admin: { width: "33%" } },
                { name: "step", type: "number", defaultValue: 500, admin: { width: "34%" } },
              ],
            },
            {
              type: "row",
              fields: [
                { name: "defaultAmount", type: "number", defaultValue: 4000, admin: { width: "50%" } },
                { name: "defaultTenure", type: "number", defaultValue: 24, admin: { width: "50%" } },
              ],
            },
            {
              name: "tenures",
              type: "text",
              defaultValue: "12,24,36",
              admin: { description: "Comma-separated month options, e.g. 12,24,36." },
            },
            { name: "pdsUrl", type: "text" },
          ],
        },
      ],
    },

    // ── FAQ ─────────────────────────────────────────────────────────
    {
      type: "collapsible",
      label: "FAQ",
      fields: [
        {
          name: "faq",
          type: "array",
          labels: { singular: "FAQ", plural: "FAQs" },
          fields: [
            { name: "question", type: "text", localized: true, required: true },
            { name: "answer", type: "richText", localized: true },
          ],
        },
      ],
    },

    // ── CTA ─────────────────────────────────────────────────────────
    {
      type: "collapsible",
      label: "Closing CTA",
      fields: [
        {
          name: "cta",
          type: "group",
          fields: [
            { name: "heading", type: "textarea", localized: true },
            { name: "body", type: "textarea", localized: true },
            { name: "buttonLabel", type: "text", localized: true, defaultValue: "Apply Now" },
            { name: "buttonHref", type: "text", defaultValue: "/apply" },
          ],
        },
      ],
    },
  ],
};
