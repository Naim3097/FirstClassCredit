# Deploying First Class Credit to Vercel

This guide walks the First Class Credit team through deploying the website to your
own Vercel account. The site is a **Next.js** app with a built‑in **Payload CMS**
admin panel, backed by **Neon** (PostgreSQL) and **Vercel Blob** (media/image
storage). Content is editable in English and Bahasa Malaysia at `/admin`.

---

## 1. What you need

| Requirement | Notes |
| --- | --- |
| A **Vercel** account | Free Hobby plan works to start; Pro recommended for production |
| A **GitHub** account with access to this repository | Vercel deploys from GitHub |
| A **Neon** Postgres database | Free tier works — https://neon.tech |
| **Node.js 20+** locally | Only needed to run migrations / seeding once |

The app requires **three** environment variables:

| Variable | What it is | Where to get it |
| --- | --- | --- |
| `DATABASE_URI` | Neon Postgres connection string | Neon dashboard → your project → **Connection string** (use the **Pooled** one, and keep `?sslmode=require`) |
| `PAYLOAD_SECRET` | A random secret used to sign admin login tokens | Generate one (see step 3) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob read/write token for image uploads | Vercel → your project → **Storage → Blob** (auto‑added when you create a Blob store) |

> **Never commit these values.** `.env` is git‑ignored. Set them in the Vercel
> dashboard for the deployed site, and in a local `.env` file for one‑time setup.

---

## 2. Create the Neon database

1. Sign in at https://neon.tech and **create a new project** (choose a region
   close to your users, e.g. Singapore).
2. Open **Connection Details** and copy the **Pooled connection string**. It
   looks like `postgresql://USER:PASSWORD@ep-xxxx-pooler.REGION.aws.neon.tech/DBNAME?sslmode=require`.
3. Keep this string — it is your `DATABASE_URI`.

> **Schema isolation:** this project stores all of its tables in a dedicated
> Postgres schema called **`fcc`** (configured in `src/payload.config.ts`). This
> keeps it from colliding with anything else in the database. If you are using a
> brand‑new empty database and prefer the default `public` schema, you may remove
> the `schemaName: "fcc"` line in `src/payload.config.ts`.

---

## 3. Generate a Payload secret

Run this once (locally) and copy the output:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

This is your `PAYLOAD_SECRET`.

---

## 4. Create the Vercel project and Blob store

1. In Vercel, click **Add New → Project** and import this GitHub repository.
2. Framework preset: **Next.js** (auto‑detected). Leave the build settings as
   default (`next build`).
3. Before the first deploy, add a Blob store: project → **Storage → Create → Blob**.
   Vercel automatically adds `BLOB_READ_WRITE_TOKEN` to the project’s environment
   variables.
4. Add the other two variables: project → **Settings → Environment Variables**:
   - `DATABASE_URI` = your Neon pooled connection string
   - `PAYLOAD_SECRET` = the value from step 3

   Add them to **Production**, **Preview**, and **Development** as needed.

---

## 5. Set up the database schema

The database tables must be created before the site can run. Do this **once**
from your machine, pointed at the Neon database:

```bash
# 1. Clone and install
git clone <this-repo-url>
cd FirstClassCredit
npm install

# 2. Create a local .env with the same three variables
cat > .env <<'EOF'
DATABASE_URI=postgresql://...pooler...neon.tech/...?sslmode=require
PAYLOAD_SECRET=your-generated-secret
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
EOF

# 3. Generate and run the migration (creates all tables in the `fcc` schema)
npm run migrate:create initial
npm run migrate
```

> If `migrate` warns about “dev mode” and asks to proceed, that only happens when
> the schema already exists. On a fresh database it runs without prompting.

---

## 6. Seed the starter content (optional but recommended)

This fills the CMS with the current website content (hero, FAQs, services,
testimonials, products, blog posts, legal pages, etc.) in both languages, and
uploads the images to Vercel Blob:

```bash
npm run seed
```

You can re‑run it safely — collections that already have data are skipped.

---

## 7. Deploy

Push to the connected GitHub branch (or click **Deploy** in Vercel). Vercel will
build and host the site. The public site is at your Vercel URL, and the CMS admin
panel is at `https://YOUR-DOMAIN/admin`.

---

## 8. Create your admin login

Open `https://YOUR-DOMAIN/admin`. On first visit Payload shows a **Create First
User** form — set your email and password. You can then log in and edit all
content. Add more admin users under **Users** in the panel.

---

## 9. Editing content

Everything the site shows is editable in `/admin`, in English and Bahasa Malaysia
(use the language switch in the top bar):

- **Homepage** – hero banners, “Our Impact” stats, testimonials, FAQs
- **Navigation & footer** – services menu, contact details, WhatsApp number, social links
- **Motorcycle / Smartphone pages** – eligibility tables, PDS links, phone lineup, FAQs
- **About** – JomKaki Motor partner block
- **Contact** – address, phone, WhatsApp, hours, map
- **Resources** – blog articles and FAQs
- **Legal** – Terms of Service, Privacy Notice
- **Apply Forms** – enable/disable each financing form and edit its label

Every section falls back to sensible built‑in defaults, so the site never breaks
if a field is left empty.

### Adding a new product financing page (no developer needed)

New financing products can get their own full page without any code changes:

1. In `/admin`, open **Financing Pages** and click into the existing
   **Smartphone HP Financing** entry.
2. Click the **⋯ → Duplicate** button (top right).
3. On the copy, change the **slug** (e.g. `laptop-hp`) and edit the hero, cards,
   product lineup, eligibility table, calculator, FAQ, and CTA.
4. Toggle **Published** on and save.

The new page is immediately live at `/financing/<slug>` (and `/ms/financing/<slug>`
for Bahasa Malaysia). Fill in both languages using the language switch in the
admin top bar. Link to it from the navigation or homepage as needed.

---

## Notes & troubleshooting

- **Content updates not showing in production?** Production pages are cached at
  build time. After large content changes, trigger a redeploy in Vercel (or wire
  up on‑demand revalidation). Make sure `DATABASE_URI` is set in Vercel **before**
  a build so pages render real CMS content rather than the built‑in fallbacks.
- **Node version:** the app targets Node 20+. Vercel’s default is fine.
- **Schema push hangs during local setup:** this only happens if you point at a
  database whose `public` schema already contains another Payload project. Use an
  empty database, or keep the `fcc` schema isolation (default).
- **Local development:**
  ```bash
  npm install
  # add .env with the three variables
  npm run dev      # http://localhost:3000  (admin at /admin)
  ```

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` / `npm run start` | Production build / serve |
| `npm run migrate:create <name>` | Generate a database migration |
| `npm run migrate` | Apply pending migrations |
| `npm run seed` | Populate the CMS with starter content |
| `npm run generate:types` | Regenerate Payload TypeScript types after schema changes |
