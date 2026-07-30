# First Class Credit

The official website for **First Class Credit Sdn. Bhd.** — motorcycle and
smartphone Hire Purchase financing in Kuching, Sarawak.

Built with **Next.js** (App Router) and a built‑in **Payload CMS** admin panel.
Content is fully editable in **English** and **Bahasa Malaysia**, backed by
**Neon** (PostgreSQL) and **Vercel Blob** (image storage).

## Tech stack

- **Next.js 16** + React 19 (App Router, Turbopack)
- **Payload CMS 3** — admin panel at `/admin`, content served via the Local API
- **Neon** PostgreSQL (`@payloadcms/db-postgres`)
- **Vercel Blob** for media/image uploads
- **Tailwind CSS 4**, **GSAP** for animation
- Bilingual: English at `/` and Bahasa Malaysia at `/ms`

## Local development

```bash
npm install

# create a .env file with:
#   DATABASE_URI=postgresql://...              (Neon pooled connection string)
#   PAYLOAD_SECRET=<random 32-byte hex>
#   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...   (Vercel Blob)

npm run migrate:create initial   # first time only — creates the database schema
npm run migrate
npm run seed                     # optional — load starter content

npm run dev                      # http://localhost:3000  (admin at /admin)
```

## Project structure

```
src/
  app/(frontend)/     Public website (EN at /, BM at /ms)
  app/(payload)/      Payload admin panel + REST/GraphQL API
  collections/        CMS collections (hero banners, FAQs, blog posts, …)
  globals/            CMS globals (site settings, eligibility, legal pages, …)
  components/         React UI components
  lib/content.ts      Data-access layer (Payload → pages, with fallbacks)
  seed/               Content seeding script
  payload.config.ts   Payload configuration
```

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for a full step‑by‑step guide to deploying
on Vercel with Neon and Vercel Blob.
