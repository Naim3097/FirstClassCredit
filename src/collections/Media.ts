import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  admin: {
    group: "Library",
  },
  upload: {
    // Storage is handled by the Vercel Blob adapter (see payload.config.ts).
    // We keep a few sensible focal sizes; the site mostly uses full-size assets.
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Alt text",
      admin: {
        description: "Describes the image for screen readers and SEO.",
      },
    },
  ],
};
