import RepresentativeExample from "@/components/RepresentativeExample";
import type { FAQItem } from "@/components/FAQAccordion";

const pdsLinkClass =
  "text-[#2C76BB] font-semibold underline underline-offset-2 hover:text-[#253A7D]";

// ── Motosikal (homepage) ─────────────────────────────────────────────
export const motorcycleHomeFAQms: FAQItem[] = [
  {
    question: "Apakah syarat kelayakan asas?",
    answer:
      "Warganegara Malaysia berumur 18–65 tahun pada masa permohonan, dengan pendapatan bulanan minimum RM1,500.",
  },
  {
    question: "Berapa lama proses kelulusan mengambil masa?",
    answer:
      "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini, dan penyata KWSP/bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam.",
  },
  {
    question: "Berapakah margin dan tempoh pembiayaan maksimum?",
    answer:
      "Anda boleh membiayai sehingga 90% daripada nilai motosikal untuk tempoh maksimum 5 tahun (60 bulan). Margin sebenar bergantung pada profil anda dan motosikal tersebut.",
  },
  {
    question: "Apakah kadar keuntungan yang ditawarkan?",
    answer:
      "Kadar rata tetap 10.00% setahun (≈ 0.833% sebulan), dikunci untuk sepanjang tempoh pembiayaan.",
  },
  {
    question: "Boleh berikan contoh perwakilan?",
    answer: (
      <>
        <p>Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli:</p>
        <RepresentativeExample
          title="Contoh Pinjaman Perwakilan"
          rows={[
            { label: "Jumlah pinjaman", value: "RM10,000" },
            { label: "Kadar faedah", value: "10% setahun (kadar rata)" },
            { label: "Tempoh", value: "48 bulan" },
          ]}
          monthlyLabel="Ansuran bulanan"
          monthly="RM294"
          finalLabel="Ansuran akhir"
          final="RM278"
          note="*Kedua-dua ansuran termasuk yuran transaksi."
        />
      </>
    ),
  },
  {
    question: "Adakah sebarang caj tersembunyi?",
    answer: (
      <>
        Tidak. Menurut{" "}
        <a
          href="/motorcycle-hp-pds.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={pdsLinkClass}
        >
          Product Disclosure Sheet (PDS)
        </a>
        : Duti Setem RM20 (tanpa penjamin) atau RM60 (dengan penjamin), Caj
        e-Hakmilik RM3, dan Pos RM10. Semua yuran didedahkan dengan jelas di
        awal.
      </>
    ),
  },
];

// ── Telefon Pintar (homepage) ────────────────────────────────────────
export const smartphoneHomeFAQms: FAQItem[] = [
  {
    question: "Apakah syarat kelayakan asas untuk memohon?",
    answer:
      "Warganegara Malaysia berumur 18–65 tahun pada masa permohonan. Anda memerlukan pendapatan bulanan minimum RM1,300.",
  },
  {
    question: "Berapa lama proses kelulusan mengambil masa?",
    answer:
      "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini atau penyata KWSP terkini, penyata bank pengkreditan gaji 3 bulan terkini dan bukti bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam.",
  },
  {
    question: "Apakah tempoh pembiayaan minimum dan maksimum?",
    answer:
      "Tempoh pinjaman minimum 1 tahun (12 bulan) & tempoh pinjaman maksimum 3 tahun (36 bulan).",
  },
  {
    question: "Apakah kadar keuntungan yang ditawarkan?",
    answer:
      "Kadar rata tetap 10% setahun (≈ 0.833% sebulan), dikunci untuk sepanjang tempoh pembiayaan.",
  },
  {
    question: "Boleh berikan contoh perwakilan?",
    answer: (
      <>
        <p>
          Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli telefon
          pintar:
        </p>
        <RepresentativeExample
          title="Contoh Pinjaman Perwakilan"
          rows={[
            { label: "Jumlah pinjaman", value: "RM4,000" },
            { label: "Kadar faedah", value: "10% setahun (kadar rata)" },
            { label: "Tempoh", value: "12 bulan" },
          ]}
          monthlyLabel="Ansuran bulanan"
          monthly="RM366.66"
          final={null}
          note="*Dikira sebagai RM4,000 prinsipal + RM400 jumlah faedah, dibahagikan kepada 12 bulan."
        />
      </>
    ),
  },
  {
    question: 'Adakah sebarang caj "tersembunyi"?',
    answer: (
      <>
        Kami mengamalkan ketelusan sepenuhnya. Kos biasa termasuk Duti Setem dan
        yuran Pos. Ini akan dinyatakan dengan jelas dalam{" "}
        <a
          href="/smartphone-hp-pds.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={pdsLinkClass}
        >
          Product Disclosure Sheet (PDS)
        </a>{" "}
        anda.
      </>
    ),
  },
];
