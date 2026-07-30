import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { HeroBanners } from "./collections/HeroBanners";
import { FAQs } from "./collections/FAQs";
import { Services } from "./collections/Services";
import { Testimonials } from "./collections/Testimonials";
import { SmartphoneProducts } from "./collections/SmartphoneProducts";
import { BlogPosts } from "./collections/BlogPosts";
import { SiteSettings } from "./globals/SiteSettings";
import { HomeImpact } from "./globals/HomeImpact";
import { AboutPartner } from "./globals/AboutPartner";
import { Eligibility } from "./globals/Eligibility";
import { Terms, Privacy } from "./globals/Legal";
import { ApplySettings } from "./globals/ApplySettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // Bilingual content: one document holds both languages; the site fetches
  // the matching locale for the `/` (en) and `/ms` (ms) routes.
  localization: {
    locales: [
      { label: "English", code: "en" },
      { label: "Bahasa Malaysia", code: "ms" },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  collections: [
    Users,
    Media,
    HeroBanners,
    FAQs,
    Services,
    Testimonials,
    SmartphoneProducts,
    BlogPosts,
  ],
  globals: [
    SiteSettings,
    HomeImpact,
    AboutPartner,
    Eligibility,
    Terms,
    Privacy,
    ApplySettings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    // Keep this project's tables in a dedicated schema so they never collide
    // with anything already in the database's `public` schema.
    schemaName: "fcc",
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
