/**
 * Seed script — populates Payload with the site's current EN + BM content so
 * that, after running, the live site looks identical to the hardcoded version
 * and the client can edit everything from /admin.
 *
 * Run once against a freshly-migrated database:
 *   npm run seed
 *
 * It is guarded: collections that already contain documents are skipped, while
 * globals are always upserted. Delete rows (or drop the DB and re-migrate) if
 * you want to re-seed a collection from scratch.
 *
 * NOTE: This seeds the highest-value content (Site Settings, hero, services,
 * testimonials, Our Impact, and homepage FAQs). Blog posts, smartphone product
 * cards, eligibility tables and the About partner block are marked TODO below —
 * extend using the same pattern once their source copy is finalised.
 */
import fs from "fs";
import path from "path";
import { getPayload } from "payload";
import config from "@payload-config";

import { richText, richTextFromBlocks } from "./lexical";
import type { IconKey } from "@/fields/iconOptions";
import type { FAQItem } from "@/components/FAQAccordion";
import type { Faq } from "@/payload-types";
import { blogPosts } from "@/app/(frontend)/resources/blog/posts";
import { blogPostsMs } from "@/app/(frontend)/resources/blog/posts.bm";
import { TERMS_SECTIONS } from "@/app/(frontend)/terms/page";
import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/app/(frontend)/privacy/page";

type LegalBlock =
  | { p: string }
  | { term: string; text: string }
  | { list: string[] };
type LegalSection = { heading: string; blocks: LegalBlock[] };
type SeedBlock =
  | { type: "p" | "h2" | "h3" | "callout"; text: string }
  | { type: "ul" | "ol"; items: string[] };

/** Flatten LegalDoc intro + numbered sections into rich-text blocks. */
function legalToBlocks(
  intro: LegalBlock[] | undefined,
  sections: LegalSection[],
): SeedBlock[] {
  const out: SeedBlock[] = [];
  const push = (b: LegalBlock) => {
    if ("p" in b) out.push({ type: "p", text: b.p });
    else if ("term" in b) out.push({ type: "p", text: `${b.term}: ${b.text}` });
    else if ("list" in b) out.push({ type: "ul", items: b.list });
  };
  intro?.forEach(push);
  sections.forEach((s, i) => {
    out.push({ type: "h2", text: `${i + 1}. ${s.heading}` });
    s.blocks.forEach(push);
  });
  return out;
}
import {
  smartphoneFAQ,
  smartphoneResourcesFAQ,
} from "@/data/smartphoneFAQ";
import {
  smartphoneFAQms,
  smartphoneResourcesFAQms,
} from "@/data/smartphoneFAQ.bm";

/**
 * Recursively pull the visible text out of a React node (string, element, or
 * fragment). Prose and list text are preserved; computed components with no
 * text children (e.g. the representative-example table) contribute nothing.
 */
function extractText(node: unknown): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (typeof node === "object" && node !== null && "props" in node) {
    const props = (node as { props?: { children?: unknown } }).props;
    return extractText(props?.children);
  }
  return "";
}

/** Split extracted text into paragraphs on blank runs, for richText. */
function answerToRichText(answer: FAQItem["answer"]) {
  const text = extractText(answer).replace(/\s+/g, " ").trim();
  return richText(text || "—");
}

type StatRow = {
  value: string;
  style: "navy" | "light";
  icon: IconKey;
  label: string;
};

type EligRow = { icon: IconKey; label: string; value: string };

/** Reuse existing row ids so localized array rows keep their other-locale values. */
function attachIds<T extends object>(
  rows: T[],
  saved: Array<{ id?: string | null }> | undefined | null,
): Array<T & { id?: string }> {
  return rows.map((r, i) => ({ ...r, id: saved?.[i]?.id ?? undefined }));
}

async function seed() {
  const payload = await getPayload({ config });

  const publicPath = (file: string) =>
    path.join(process.cwd(), "public", file);

  // Upload an image from /public into Media (cached per file within this run).
  const mediaCache = new Map<string, number>();
  async function media(file: string, alt: string): Promise<number> {
    const cached = mediaCache.get(file);
    if (cached !== undefined) return cached;
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      filePath: publicPath(file),
    });
    const id = doc.id as number;
    mediaCache.set(file, id);
    return id;
  }

  async function isEmpty(collection: Parameters<typeof payload.count>[0]["collection"]) {
    const { totalDocs } = await payload.count({ collection });
    return totalDocs === 0;
  }

  // ─────────────────────────────────────────────────────────────────────
  // GLOBAL: Site Settings (footer / contact / social / whatsapp / PDS)
  // ─────────────────────────────────────────────────────────────────────
  await payload.updateGlobal({
    slug: "site-settings",
    locale: "en",
    data: {
      companyName: "First Class Credit Sdn. Bhd.",
      registrationNo: "201801009791 (1271805-K)",
      address:
        "Lot 538, Ground Floor, Section 6,\nKTLD, Jalan Satok,\n93400 Kuching, Sarawak",
      operatingHours: { days: "Mon – Fri", time: "8:30 AM – 5:30 PM" },
      phone: "+60 82-237878",
      email: "hello@firstclasscredit.com.my",
      whatsappNumber: "60169328901",
      whatsappDisplay: "+60 16-932 8901",
      social: {
        instagram: "https://www.instagram.com/firstclasscredit.my/",
        facebook: "https://www.facebook.com/firstclasscredit.my",
        tiktok: "https://www.tiktok.com/@firstclasscredit_my",
      },
      motorcyclePdsUrl: "/motorcycle-hp-pds.pdf",
      smartphonePdsUrl: "/smartphone-hp-pds.pdf",
      mapEmbedSrc:
        "https://www.google.com/maps?q=Lot+538+Section+6+KTLD+Jalan+Satok+93400+Kuching+Sarawak&output=embed",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Lot+538+Section+6+KTLD+Jalan+Satok+93400+Kuching+Sarawak",
    },
  });
  await payload.updateGlobal({
    slug: "site-settings",
    locale: "ms",
    data: {
      operatingHours: { days: "Isnin – Jumaat", time: "8:30 AM – 5:30 PM" },
      motorcyclePdsUrl: "/motorcycle-hp-pds.pdf",
      smartphonePdsUrl: "/smartphone-hp-pds.pdf",
    },
  });
  console.log("✓ Site Settings");

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: Hero Banners
  // ─────────────────────────────────────────────────────────────────────
  if (await isEmpty("hero-banners")) {
    const motoBg = await media("home-2.jpg", "Couple with a new motorcycle");
    const phoneBg = await media("home-iphone-2.jpg", "Person using a smartphone");

    const moto = await payload.create({
      collection: "hero-banners",
      locale: "en",
      data: {
        internalName: "Motorcycle",
        enabled: true,
        order: 0,
        accent: "sky",
        eyebrow: "First Class Motorcycle Hire Purchase Financing",
        title: "Your Next Ride,\nFinanced the Straightforward Way",
        body: "Licensed motorcycle Hire Purchase financing in Kuching. Up to 90% margin, tenures up to 60 months, fixed rates with no surprises.",
        backgroundImage: motoBg,
        applyHref: "/apply",
        howItWorksHref: "/financing-hp",
      },
    });
    await payload.update({
      collection: "hero-banners",
      id: moto.id,
      locale: "ms",
      data: {
        eyebrow: "Pembiayaan Sewa Beli Motosikal First Class",
        title: "Motosikal Baharu Anda,\nDibiayai dengan Cara yang Mudah",
        body: "Pembiayaan Hire Purchase motosikal berlesen di Kuching. Margin sehingga 90%, tempoh sehingga 60 bulan, kadar tetap tanpa kejutan.",
      },
    });

    const phone = await payload.create({
      collection: "hero-banners",
      locale: "en",
      data: {
        internalName: "Smartphone",
        enabled: true,
        order: 1,
        accent: "gold",
        eyebrow: "First Class Smartphone Hire Purchase Financing",
        title: "Smart Financing for\nYour Next Smartphone",
        body: "Fund your next tech upgrade effortlessly. First Class Credit is bringing you hassle-free, accessible smartphone financing with flexible terms to Kuching and beyond.",
        backgroundImage: phoneBg,
        applyHref: "/apply?type=smartphone",
        howItWorksHref: "/objective-financing",
      },
    });
    await payload.update({
      collection: "hero-banners",
      id: phone.id,
      locale: "ms",
      data: {
        eyebrow: "Pembiayaan Sewa Beli Telefon Pintar First Class",
        title: "Pembiayaan Bijak untuk\nTelefon Pintar Baharu Anda",
        body: "Biayai naik taraf teknologi anda dengan mudah. First Class Credit membawakan pembiayaan telefon pintar yang mudah diakses dan tanpa kerumitan, dengan terma fleksibel untuk Kuching dan sekitarnya.",
      },
    });
    console.log("✓ Hero Banners");
  } else {
    console.log("• Hero Banners already present — skipped");
  }

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: Services (navbar dropdown)
  // ─────────────────────────────────────────────────────────────────────
  if (await isEmpty("services")) {
    const services: Array<{ en: string; ms: string; href: string }> = [
      {
        en: "First Class Motorcycle HP Financing",
        ms: "Pembiayaan Sewa Beli Motosikal First Class",
        href: "/financing-hp",
      },
      {
        en: "First Class Smartphone HP Financing",
        ms: "Pembiayaan Sewa Beli Telefon Pintar First Class",
        href: "/objective-financing",
      },
    ];
    for (let i = 0; i < services.length; i++) {
      const s = services[i];
      const doc = await payload.create({
        collection: "services",
        locale: "en",
        data: { name: s.en, href: s.href, order: i, enabled: true },
      });
      await payload.update({
        collection: "services",
        id: doc.id,
        locale: "ms",
        data: { name: s.ms },
      });
    }
    console.log("✓ Services");
  } else {
    console.log("• Services already present — skipped");
  }

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: Testimonials (BM falls back to EN until translated)
  // ─────────────────────────────────────────────────────────────────────
  {
    // Always reseed so EN + BM stay in sync.
    await payload.delete({
      collection: "testimonials",
      where: { id: { exists: true } },
    });
    const testimonials = [
      {
        authorName: "Ahmad Razak",
        featured: true,
        order: 0,
        en: {
          quote:
            "The process was so fast — I got my motorcycle within a week of applying. The team was incredibly helpful from start to finish.",
          descriptor: "Motorcycle Owner · Kuching",
        },
        ms: {
          quote:
            "Prosesnya sangat pantas — saya dapat motosikal saya dalam masa seminggu selepas memohon. Pasukan mereka amat membantu dari mula hingga akhir.",
          descriptor: "Pemilik Motosikal · Kuching",
        },
      },
      {
        authorName: "Siti Nurhaliza",
        featured: false,
        order: 1,
        en: {
          quote:
            "Even with my credit history, First Class Credit found a way to help me. Transparent rates, no surprises.",
          descriptor: "Sibu",
        },
        ms: {
          quote:
            "Walaupun dengan sejarah kredit saya, First Class Credit tetap mencari jalan untuk membantu saya. Kadar yang telus, tiada kejutan.",
          descriptor: "Sibu",
        },
      },
      {
        authorName: "James Lee",
        featured: false,
        order: 2,
        en: {
          quote:
            "The online application took less than 5 minutes. Pre-approval came in 24 hours. Professional service from start to finish.",
          descriptor: "Miri",
        },
        ms: {
          quote:
            "Permohonan dalam talian mengambil masa kurang daripada 5 minit. Pra-kelulusan diterima dalam masa 24 jam. Perkhidmatan profesional dari mula hingga akhir.",
          descriptor: "Miri",
        },
      },
    ];
    for (const t of testimonials) {
      const doc = await payload.create({
        collection: "testimonials",
        locale: "en",
        data: {
          authorName: t.authorName,
          featured: t.featured,
          order: t.order,
          enabled: true,
          quote: t.en.quote,
          descriptor: t.en.descriptor,
        },
      });
      await payload.update({
        collection: "testimonials",
        id: doc.id,
        locale: "ms",
        data: { quote: t.ms.quote, descriptor: t.ms.descriptor },
      });
    }
    console.log("✓ Testimonials (EN+BM)");
  }

  // ─────────────────────────────────────────────────────────────────────
  // GLOBAL: Home — Our Impact
  // ─────────────────────────────────────────────────────────────────────
  {
    const mopedImg = await media("moped.png", "Customer with a new motorcycle");
    const iphoneImg = await media(
      "iphone-horizontal-3.jpg",
      "Person using a new smartphone",
    );

    await payload.updateGlobal({
      slug: "home-impact",
      locale: "en",
      data: {
        eyebrow: "Our Impact",
        motorcycle: {
          tab: "Motorcycle HP Financing",
          heading: "The Numbers That Matter",
          body: "We keep it simple. Competitive rates, fast approvals, and high financing margins so you can focus on what matters — getting on the road.",
          buttonText: "About Motorcycle Financing",
          buttonHref: "/financing-hp",
          plate: {
            image: mopedImg,
            eyebrow: "On the road",
            text: "Driving Malaysians forward with simple, transparent motorcycle HP financing.",
          },
          stats: [
            { value: "90%", style: "navy", icon: "clock", label: "Maximum financing margin" },
            { value: "60", style: "light", icon: "calendar", label: "Months maximum tenure" },
            { value: "24–48h", style: "light", icon: "bolt", label: "Pre-approval turnaround" },
            { value: "10%", style: "light", icon: "percent", label: "Fixed interest per annum" },
          ],
        },
        smartphone: {
          tab: "Smartphone HP Financing",
          heading: "Built to Keep You Connected",
          body: "A simpler way to own your next device. Transparent terms, fast pre-approvals, and a fixed monthly rate you can plan around.",
          buttonText: "About Smartphone Financing",
          buttonHref: "/objective-financing",
          plate: {
            image: iphoneImg,
            eyebrow: "Stay connected",
            text: "Own the latest device today and spread the cost with confidence.",
          },
          stats: [
            { value: "36", style: "light", icon: "calendar", label: "Months maximum tenure" },
            { value: "24–48h", style: "light", icon: "bolt", label: "Pre-approval turnaround" },
            { value: "10%", style: "navy", icon: "percent", label: "Per annum effective interest rate" },
            { value: "", style: "navy", icon: "apple", label: "iPhone 17 Full Lineup Now Available" },
          ],
        },
      },
    });

    // Read back the EN rows so the MS write can reuse their ids. Without this,
    // Payload treats the MS array as new rows and drops the EN values (the
    // array is non-localized with localized subfields).
    const savedImpact = await payload.findGlobal({
      slug: "home-impact",
      locale: "en",
      depth: 0,
    });
    const withIds = <T extends object>(
      rows: T[],
      saved: Array<{ id?: string | null }> | undefined | null,
    ): Array<T & { id?: string }> =>
      rows.map((r, i) => ({ ...r, id: saved?.[i]?.id ?? undefined }));

    await payload.updateGlobal({
      slug: "home-impact",
      locale: "ms",
      data: {
        eyebrow: "Impak Kami",
        motorcycle: {
          tab: "Pembiayaan Sewa Beli Motosikal",
          heading: "Angka yang Penting",
          body: "Kami permudahkan semuanya. Kadar yang kompetitif, kelulusan pantas, dan margin pembiayaan yang tinggi supaya anda boleh fokus pada apa yang penting — meneruskan perjalanan anda.",
          buttonText: "Tentang Pembiayaan Motosikal",
          buttonHref: "/financing-hp",
          plate: {
            eyebrow: "Di atas jalan",
            text: "Membawa rakyat Malaysia ke hadapan dengan pembiayaan sewa beli motosikal yang mudah dan telus.",
          },
          stats: withIds<StatRow>(
            [
              { value: "90%", style: "navy", icon: "clock", label: "Margin pembiayaan maksimum" },
              { value: "60", style: "light", icon: "calendar", label: "Bulan tempoh maksimum" },
              { value: "24–48j", style: "light", icon: "bolt", label: "Tempoh pra-kelulusan" },
              { value: "10%", style: "light", icon: "percent", label: "Faedah tetap setahun" },
            ],
            savedImpact.motorcycle?.stats,
          ),
        },
        smartphone: {
          tab: "Pembiayaan Sewa Beli Telefon Pintar",
          heading: "Direka untuk Anda Sentiasa Terhubung",
          body: "Cara yang lebih mudah untuk memiliki peranti baharu anda. Terma yang telus, pra-kelulusan pantas, dan kadar bulanan tetap yang mudah dirancang.",
          buttonText: "Tentang Pembiayaan Telefon Pintar",
          buttonHref: "/objective-financing",
          plate: {
            eyebrow: "Kekal terhubung",
            text: "Miliki peranti terkini hari ini dan bayar secara ansuran dengan penuh yakin.",
          },
          stats: withIds<StatRow>(
            [
              { value: "36", style: "light", icon: "calendar", label: "Bulan tempoh maksimum" },
              { value: "24–48j", style: "light", icon: "bolt", label: "Tempoh pra-kelulusan" },
              { value: "10%", style: "navy", icon: "percent", label: "Kadar faedah efektif setahun" },
              { value: "", style: "navy", icon: "apple", label: "iPhone 17 Full Lineup Kini Tersedia" },
            ],
            savedImpact.smartphone?.stats,
          ),
        },
      },
    });
    console.log("✓ Home — Our Impact");
  }

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: FAQs (homepage motorcycle + smartphone tabs)
  // Answers are seeded as plain paragraphs; editors can add links/lists.
  // ─────────────────────────────────────────────────────────────────────
  if (await isEmpty("faqs")) {
    type FaqSeed = { q: string; a: string };
    const seedFaqs = async (
      category: "home-motorcycle" | "home-smartphone",
      en: FaqSeed[],
      ms: FaqSeed[],
    ) => {
      for (let i = 0; i < en.length; i++) {
        const doc = await payload.create({
          collection: "faqs",
          locale: "en",
          data: {
            category,
            order: i,
            question: en[i].q,
            answer: richText(en[i].a),
          },
        });
        if (ms[i]) {
          await payload.update({
            collection: "faqs",
            id: doc.id,
            locale: "ms",
            data: { question: ms[i].q, answer: richText(ms[i].a) },
          });
        }
      }
    };

    await seedFaqs(
      "home-motorcycle",
      [
        { q: "What are the basic eligibility requirements?", a: "Malaysian citizen aged 18–65 at the point of application with a minimum monthly income of RM1,500." },
        { q: "How long does the approval process take?", a: "Once we receive your complete documentation (NRIC, latest 3 months’ salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours." },
        { q: "What is the maximum financing margin and tenure?", a: "You can finance up to 90% of the motorcycle’s value for a maximum period of 5 years (60 months). Actual margin depends on your profile and the motorcycle." },
        { q: "What is the profit rate offered?", a: "A fixed flat rate of 10.00% per annum (≈ 0.833% per month), locked in for the full tenure." },
        { q: "Can you provide a representative example?", a: "Here is a typical representative example for a hire purchase loan. Loan amount RM10,000, 10% flat per annum, 48-month tenure: monthly instalment RM294 and final instalment RM278 (both inclusive of the transaction fee)." },
        { q: "Are there any hidden fees?", a: "No. Per the Product Disclosure Sheet (PDS): Stamp Duty RM20 (without guarantor) or RM60 (with guarantor), e-Hakmilik Charges RM3, and Postage RM10. All fees are disclosed up front." },
      ],
      [
        { q: "Apakah syarat kelayakan asas?", a: "Warganegara Malaysia berumur 18–65 tahun pada masa permohonan, dengan pendapatan bulanan minimum RM1,500." },
        { q: "Berapa lama proses kelulusan mengambil masa?", a: "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini, dan penyata KWSP/bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam." },
        { q: "Berapakah margin dan tempoh pembiayaan maksimum?", a: "Anda boleh membiayai sehingga 90% daripada nilai motosikal untuk tempoh maksimum 5 tahun (60 bulan). Margin sebenar bergantung pada profil anda dan motosikal tersebut." },
        { q: "Apakah kadar keuntungan yang ditawarkan?", a: "Kadar rata tetap 10.00% setahun (≈ 0.833% sebulan), dikunci untuk sepanjang tempoh pembiayaan." },
        { q: "Boleh berikan contoh perwakilan?", a: "Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli. Jumlah pinjaman RM10,000, 10% kadar rata setahun, tempoh 48 bulan: ansuran bulanan RM294 dan ansuran akhir RM278 (kedua-duanya termasuk yuran transaksi)." },
        { q: "Adakah sebarang caj tersembunyi?", a: "Tidak. Menurut Product Disclosure Sheet (PDS): Duti Setem RM20 (tanpa penjamin) atau RM60 (dengan penjamin), Caj e-Hakmilik RM3, dan Pos RM10. Semua yuran didedahkan dengan jelas di awal." },
      ],
    );

    await seedFaqs(
      "home-smartphone",
      [
        { q: "What are the basic eligibility requirements to apply?", a: "Malaysian citizen aged 18–65 at the point of application. You’ll need a minimum monthly income of RM1,300." },
        { q: "How long does the approval process take?", a: "Once we receive your complete documentation (NRIC, latest 3 months’ payslips or latest EPF statement, latest 3 months’ salary crediting bank statements and bank proof), pre-approval typically takes 24 to 48 hours." },
        { q: "What is the minimum and maximum financing tenure?", a: "Minimum loan tenure 1 year (12 months) & maximum loan tenure 3 years (36 months)." },
        { q: "What are the profit rates offered?", a: "A fixed flat rate of 10% per annum (≈ 0.833% per month), locked in for the full tenure." },
        { q: "Can you provide a representative example?", a: "Here is a typical representative example for a smartphone hire purchase loan. Loan amount RM4,000, 10% flat per annum, 12-month tenure: monthly instalment RM366.66 (RM4,000 principal + RM400 total interest, divided by 12 months)." },
        { q: 'Are there any "hidden" fees?', a: "We practice full transparency. Typical costs include Stamp Duty and Postage fees. These will be clearly stated in your Product Disclosure Sheet (PDS)." },
      ],
      [
        { q: "Apakah syarat kelayakan asas untuk memohon?", a: "Warganegara Malaysia berumur 18–65 tahun pada masa permohonan. Anda memerlukan pendapatan bulanan minimum RM1,300." },
        { q: "Berapa lama proses kelulusan mengambil masa?", a: "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini atau penyata KWSP terkini, penyata bank pengkreditan gaji 3 bulan terkini dan bukti bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam." },
        { q: "Apakah tempoh pembiayaan minimum dan maksimum?", a: "Tempoh pinjaman minimum 1 tahun (12 bulan) & tempoh pinjaman maksimum 3 tahun (36 bulan)." },
        { q: "Apakah kadar keuntungan yang ditawarkan?", a: "Kadar rata tetap 10% setahun (≈ 0.833% sebulan), dikunci untuk sepanjang tempoh pembiayaan." },
        { q: "Boleh berikan contoh perwakilan?", a: "Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli telefon pintar. Jumlah pinjaman RM4,000, 10% kadar rata setahun, tempoh 12 bulan: ansuran bulanan RM366.66 (RM4,000 prinsipal + RM400 jumlah faedah, dibahagikan kepada 12 bulan)." },
        { q: 'Adakah sebarang caj "tersembunyi"?', a: "Kami mengamalkan ketelusan sepenuhnya. Kos biasa termasuk Duti Setem dan yuran Pos. Ini akan dinyatakan dengan jelas dalam Product Disclosure Sheet (PDS) anda." },
      ],
    );
    console.log("✓ FAQs (homepage tabs)");
  } else {
    console.log("• FAQs already present — skipped");
  }

  // ─────────────────────────────────────────────────────────────────────
  // GLOBAL: About — Partner (JomKaki Motor)
  // ─────────────────────────────────────────────────────────────────────
  {
    const logo = await media("jomkaki-motor.png", "JomKaki Motor logo");
    await payload.updateGlobal({
      slug: "about-partner",
      locale: "en",
      data: {
        eyebrow: "Our Partner",
        heading: "Powered by JomKaki Motor",
        logo,
        linkLabel: "Visit JomKaki Motor",
        linkUrl: "#",
        body: richText(
          "At First Class Credit, we are committed to making your upgrades as seamless as possible. To bring our financial solutions directly to you, we have proudly partnered with JomKaki Motor.",
          "As our official vendor partner, JomKaki Motor serves as your premier destination to access our Hire Purchase (HP) financing. Whether you are looking to hit the road with a new motorcycle or upgrade your tech with the latest smartphone, you can easily apply for and utilise our flexible financing plans directly through JomKaki Motor. Together, we ensure a smooth, hassle-free experience from application to ownership.",
        ),
      },
    });
    await payload.updateGlobal({
      slug: "about-partner",
      locale: "ms",
      data: {
        eyebrow: "Rakan kami",
        heading: "Dikuasakan oleh JomKaki Motor",
        linkLabel: "Lawati JomKaki Motor",
        body: richText(
          "Di First Class Credit, kami komited untuk menjadikan setiap naik taraf anda semudah mungkin. Bagi membawa penyelesaian kewangan kami terus kepada anda, kami dengan bangganya bekerjasama dengan JomKaki Motor.",
          "Sebagai rakan vendor rasmi kami, JomKaki Motor menjadi destinasi utama anda untuk mengakses pembiayaan Sewa Beli (HP) kami. Sama ada anda ingin turun ke jalan raya dengan motosikal baharu atau menaik taraf peranti dengan smartphone terkini, anda boleh memohon dan menggunakan pelan pembiayaan fleksibel kami terus menerusi JomKaki Motor. Bersama-sama, kami memastikan pengalaman yang lancar dan tanpa kerumitan dari permohonan sehingga pemilikan.",
        ),
      },
    });
    console.log("✓ About — Partner");
  }

  // ─────────────────────────────────────────────────────────────────────
  // GLOBAL: Eligibility (motorcycle + smartphone tables)
  // ─────────────────────────────────────────────────────────────────────
  {
    await payload.updateGlobal({
      slug: "eligibility",
      locale: "en",
      data: {
        motorcycle: {
          eyebrow: "Before You Apply",
          heading: "Eligibility &\nDocuments",
          intro:
            "Make sure you meet the requirements below before you start your application.",
          rows: [
            { icon: "person", label: "Nationality", value: "Malaysian Citizen" },
            { icon: "calendar", label: "Age", value: "18 to 65 years old (at end of financing tenure)" },
            { icon: "income", label: "Minimum Income", value: "RM1,500 basic monthly salary" },
            { icon: "document", label: "Documents", value: "Copy of NRIC, latest 3 months’ payslips, latest EPF statement or latest 3 months’ bank statements" },
          ] satisfies EligRow[],
        },
        smartphone: {
          eyebrow: "Before You Apply",
          heading: "Eligibility &\nDocuments",
          intro:
            "Make sure you meet the requirements below before you start your application.",
          rows: [
            { icon: "person", label: "Nationality", value: "Malaysian Citizen" },
            { icon: "calendar", label: "Age", value: "18 to 65 years old" },
            { icon: "income", label: "Minimum Income", value: "RM1,300 basic monthly salary" },
            { icon: "document", label: "Documents", value: "Copy of NRIC, latest 3 months’ payslips or latest EPF statement, latest 3 months’ salary crediting bank statements and bank proof" },
          ] satisfies EligRow[],
        },
      },
    });
    const savedElig = await payload.findGlobal({
      slug: "eligibility",
      locale: "en",
      depth: 0,
    });
    await payload.updateGlobal({
      slug: "eligibility",
      locale: "ms",
      data: {
        motorcycle: {
          eyebrow: "Sebelum Anda Memohon",
          heading: "Kelayakan &\nDokumen",
          intro:
            "Pastikan anda memenuhi syarat di bawah sebelum memulakan permohonan anda.",
          rows: attachIds<EligRow>(
            [
              { icon: "person", label: "Warganegara", value: "Warganegara Malaysia" },
              { icon: "calendar", label: "Umur", value: "18 hingga 65 tahun (pada akhir tempoh pembiayaan)" },
              { icon: "income", label: "Pendapatan Minimum", value: "Gaji bulanan asas RM1,500" },
              { icon: "document", label: "Dokumen", value: "Salinan NRIC, slip gaji 3 bulan terkini, penyata KWSP terkini atau penyata bank 3 bulan terkini" },
            ],
            savedElig.motorcycle?.rows,
          ),
        },
        smartphone: {
          eyebrow: "Sebelum Anda Memohon",
          heading: "Kelayakan &\nDokumen",
          intro:
            "Pastikan anda memenuhi syarat di bawah sebelum memulakan permohonan anda.",
          rows: attachIds<EligRow>(
            [
              { icon: "person", label: "Warganegara", value: "Warganegara Malaysia" },
              { icon: "calendar", label: "Umur", value: "18 hingga 65 tahun" },
              { icon: "income", label: "Pendapatan Minimum", value: "Gaji bulanan asas RM1,300" },
              { icon: "document", label: "Dokumen", value: "Salinan NRIC, slip gaji 3 bulan terkini atau penyata KWSP terkini, penyata bank pengkreditan gaji 3 bulan terkini dan bukti bank." },
            ],
            savedElig.smartphone?.rows,
          ),
        },
      },
    });
    console.log("✓ Eligibility");
  }

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: Smartphone Products (iPhone lineup)
  // ─────────────────────────────────────────────────────────────────────
  if (await isEmpty("smartphone-products")) {
    const products = [
      {
        name: "iPhone 17e",
        img: "iphone-17e.jpg",
        en: "Sleek, ultra-slim, and packed with essential next-gen features.",
        ms: "Kemas, sangat nipis, dan sarat dengan ciri generasi baharu yang penting.",
      },
      {
        name: "iPhone 17",
        img: "iphone-17.jpg",
        en: "The perfect balance of power and everyday design.",
        ms: "Keseimbangan sempurna antara kuasa dan reka bentuk harian.",
      },
      {
        name: "iPhone 17 Pro",
        img: "iphone-17-pro.jpg",
        en: "Pro-level cameras and ultimate performance in a premium titanium finish.",
        ms: "Kamera bertaraf pro dan prestasi terunggul dalam kemasan titanium premium.",
      },
      {
        name: "iPhone 17 Pro Max",
        img: "iphone-17-pro-max.jpg",
        en: "The ultimate iPhone experience with the largest display and maximum power.",
        ms: "Pengalaman iPhone terunggul dengan paparan terbesar dan kuasa maksimum.",
      },
    ];
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const image = await media(p.img, `${p.name} device`);
      const doc = await payload.create({
        collection: "smartphone-products",
        locale: "en",
        data: {
          name: p.name,
          description: p.en,
          image,
          applyHref: "/apply?type=smartphone",
          order: i,
          enabled: true,
        },
      });
      await payload.update({
        collection: "smartphone-products",
        id: doc.id,
        locale: "ms",
        data: { description: p.ms },
      });
    }
    console.log("✓ Smartphone Products");
  } else {
    console.log("• Smartphone Products already present — skipped");
  }

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: FAQs — product & resources categories
  // Answers are auto-extracted from the existing FAQ data (prose preserved;
  // the computed representative-example table becomes plain intro text).
  // ─────────────────────────────────────────────────────────────────────
  const seedFaqCategory = async (
    category: NonNullable<Faq["category"]>,
    enItems: FAQItem[],
    msItems: FAQItem[],
  ) => {
    const { totalDocs } = await payload.count({
      collection: "faqs",
      where: { category: { equals: category } },
    });
    if (totalDocs > 0) {
      console.log(`• FAQs ${category} present — skipped`);
      return;
    }
    for (let i = 0; i < enItems.length; i++) {
      const doc = await payload.create({
        collection: "faqs",
        locale: "en",
        data: {
          category,
          order: i,
          question: enItems[i].question,
          answer: answerToRichText(enItems[i].answer),
        },
      });
      if (msItems[i]) {
        await payload.update({
          collection: "faqs",
          id: doc.id,
          locale: "ms",
          data: {
            question: msItems[i].question,
            answer: answerToRichText(msItems[i].answer),
          },
        });
      }
    }
    console.log(`✓ FAQs ${category} (${enItems.length})`);
  };

  // Motorcycle financing page FAQ (transcribed — not exported from the page).
  const motoFaqEn: FAQItem[] = [
    { question: "What is a Hire Purchase (HP) agreement?", answer: "It is a contract where you “hire” the motorcycle from the Owner (First Class Credit Sdn. Bhd.) and ownership transfers to you upon full settlement. You become the legal owner only after the final instalment is paid." },
    { question: "Is First Class Motorcycle HP Financing governed under the Hire Purchase Act 1967?", answer: "Yes. All our motorcycle financing is governed by the Hire Purchase Act 1967, which protects you as the Hirer." },
    { question: "What is the maximum amount financed?", answer: "You can finance up to 90% of the motorcycle’s value. Actual margin depends on your profile and the motorcycle." },
    { question: "What is the profit rate offered?", answer: "A fixed flat rate of 10.00% per annum (≈ 0.833% per month). The rate is locked in for the full tenure." },
    { question: "What is the minimum and maximum loan tenure?", answer: "Minimum 1 year (12 months) and maximum 5 years (60 months)." },
    { question: "Can you provide a representative example?", answer: "Here is a typical representative example for a hire purchase loan. See the figures in your Product Disclosure Sheet (PDS)." },
    { question: "What fees and charges do I pay?", answer: "Per the PDS: Stamp Duty RM20 (without guarantor) or RM60 (with guarantor), e-Hakmilik Charges RM3, and Postage RM10. All fees are disclosed up front — no hidden charges." },
    { question: "Do I need insurance / Takaful?", answer: "Yes. Comprehensive Insurance/Takaful coverage is mandatory under the Hire Purchase Act 1967 until the HP facility is fully settled." },
    { question: "What if I miss a payment?", answer: "A late payment penalty of 8% per annum on the amount in arrears, calculated daily, will be charged. Contact us early if you face hardship so we can find a workable solution." },
    { question: "Can I settle my loan early?", answer: "Yes. You receive a statutory rebate per the Hire Purchase Act 1967, calculated as: Rebate = [RP × (RP + 1)] / [OP × (OP + 1)] × Total Term Charges, where RP = Remaining Period (months) and OP = Original Period (months)." },
    { question: "How long does the approval process take?", answer: "Once we receive your complete documentation (NRIC, latest 3 months’ salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours." },
  ];
  const motoFaqMs: FAQItem[] = [
    { question: "Apakah itu perjanjian Sewa Beli (HP)?", answer: "Ia merupakan kontrak di mana anda “menyewa” motosikal daripada Pemilik (First Class Credit Sdn. Bhd.) dan hak milik berpindah kepada anda setelah pembiayaan diselesaikan sepenuhnya. Anda hanya menjadi pemilik sah selepas ansuran terakhir dijelaskan." },
    { question: "Adakah Pembiayaan Sewa Beli Motosikal First Class tertakluk di bawah Akta Sewa Beli 1967?", answer: "Ya. Semua pembiayaan motosikal kami tertakluk di bawah Akta Sewa Beli 1967, yang melindungi anda sebagai Penyewa." },
    { question: "Apakah jumlah maksimum yang boleh dibiayai?", answer: "Anda boleh membiayai sehingga 90% daripada nilai motosikal. Margin sebenar bergantung pada profil anda dan motosikal tersebut." },
    { question: "Apakah kadar keuntungan yang ditawarkan?", answer: "Kadar rata tetap 10.00% setahun (≈ 0.833% sebulan). Kadar ini dikunci untuk sepanjang tempoh pembiayaan." },
    { question: "Apakah tempoh pinjaman minimum dan maksimum?", answer: "Minimum 1 tahun (12 bulan) dan maksimum 5 tahun (60 bulan)." },
    { question: "Boleh berikan contoh perwakilan?", answer: "Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli. Sila lihat angka dalam Product Disclosure Sheet (PDS) anda." },
    { question: "Apakah yuran dan caj yang perlu saya bayar?", answer: "Menurut PDS: Duti Setem RM20 (tanpa penjamin) atau RM60 (dengan penjamin), Caj e-Hakmilik RM3, dan Pos RM10. Semua yuran didedahkan dengan jelas di awal — tiada caj tersembunyi." },
    { question: "Adakah saya memerlukan insurance / Takaful?", answer: "Ya. Perlindungan insurance / Takaful komprehensif adalah wajib di bawah Akta Sewa Beli 1967 sehingga kemudahan HP diselesaikan sepenuhnya." },
    { question: "Bagaimana jika saya terlepas bayaran?", answer: "Penalti bayaran lewat sebanyak 8% setahun atas jumlah tertunggak akan dikenakan, dikira secara harian. Hubungi kami lebih awal jika anda menghadapi kesukaran supaya kami dapat mencari penyelesaian yang sesuai." },
    { question: "Bolehkah saya menyelesaikan pinjaman lebih awal?", answer: "Ya. Anda akan menerima rebat berkanun menurut Akta Sewa Beli 1967, dikira seperti berikut: Rebat = [RP × (RP + 1)] / [OP × (OP + 1)] × Jumlah Caj Tempoh, di mana RP = Baki Tempoh (bulan) dan OP = Tempoh Asal (bulan)." },
    { question: "Berapa lama proses kelulusan mengambil masa?", answer: "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini, dan penyata KWSP/bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam." },
  ];

  await seedFaqCategory("motorcycle-page", motoFaqEn, motoFaqMs);
  await seedFaqCategory("smartphone-page", smartphoneFAQ, smartphoneFAQms);
  await seedFaqCategory("resources-smartphone", smartphoneResourcesFAQ, smartphoneResourcesFAQms);

  // ─────────────────────────────────────────────────────────────────────
  // COLLECTION: Blog Posts (from the existing posts.ts / posts.bm.ts)
  // Block bodies are converted to Lexical richText; the trailing callout
  // block is stored in the separate `callout` field.
  // ─────────────────────────────────────────────────────────────────────
  if (await isEmpty("blog-posts")) {
    const msBySlug = new Map(blogPostsMs.map((p) => [p.slug, p]));
    for (let i = 0; i < blogPosts.length; i++) {
      const en = blogPosts[i];
      const ms = msBySlug.get(en.slug);
      const calloutEn = en.body.find((b) => b.type === "callout");
      const bodyEn = en.body.filter((b) => b.type !== "callout");
      const doc = await payload.create({
        collection: "blog-posts",
        locale: "en",
        data: {
          title: en.title,
          slug: en.slug,
          excerpt: en.excerpt,
          readingTime: en.readingTime,
          imageUrl: en.image,
          enabled: true,
          publishedAt: `2026-0${Math.min(i + 1, 9)}-01T00:00:00.000Z`,
          body: richTextFromBlocks(bodyEn),
          callout: calloutEn?.type === "callout" ? calloutEn.text : undefined,
        },
      });
      if (ms) {
        const calloutMs = ms.body.find((b) => b.type === "callout");
        const bodyMs = ms.body.filter((b) => b.type !== "callout");
        await payload.update({
          collection: "blog-posts",
          id: doc.id,
          locale: "ms",
          data: {
            title: ms.title,
            slug: ms.slug,
            excerpt: ms.excerpt,
            readingTime: ms.readingTime,
            body: richTextFromBlocks(bodyMs),
            callout: calloutMs?.type === "callout" ? calloutMs.text : undefined,
          },
        });
      }
    }
    console.log(`✓ Blog Posts (${blogPosts.length})`);
  } else {
    console.log("• Blog Posts already present — skipped");
  }

  // ─────────────────────────────────────────────────────────────────────
  // GLOBALS: Terms of Service + Privacy Notice (from the existing pages)
  // ─────────────────────────────────────────────────────────────────────
  await payload.updateGlobal({
    slug: "terms",
    locale: "en",
    data: {
      title: "Terms of Service",
      content: richTextFromBlocks(legalToBlocks(undefined, TERMS_SECTIONS)),
    },
  });
  await payload.updateGlobal({
    slug: "privacy",
    locale: "en",
    data: {
      title: "Privacy Notice",
      content: richTextFromBlocks(
        legalToBlocks(PRIVACY_INTRO, PRIVACY_SECTIONS),
      ),
    },
  });
  console.log("✓ Terms + Privacy");

  console.log("\nSeed complete.");
}

// Top-level await so `payload run` waits for completion (it awaits the module
// import, not a floating promise). fs.writeFileSync gives a flush-safe summary
// that process.exit() can't truncate.
const summaryPath =
  process.env.SEED_OUT || "/tmp/fcc-seed.out";
try {
  await seed();
  fs.writeFileSync(summaryPath, "SEED OK\n");
} catch (err) {
  const msg = err instanceof Error ? (err.stack ?? err.message) : String(err);
  console.error("Seed failed:", msg);
  fs.writeFileSync(summaryPath, "SEED FAILED:\n" + msg + "\n");
  process.exit(1);
}
process.exit(0);
