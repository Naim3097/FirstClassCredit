import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Admin",
  },
  access: {
    // Only logged-in admins manage content; adjust as roles are introduced.
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
