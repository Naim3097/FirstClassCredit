import Image from "next/image";
import Link from "next/link";
import FAQTabs from "@/components/FAQTabs";
import RepresentativeExample from "@/components/RepresentativeExample";
import { smartphoneResourcesFAQms } from "@/data/smartphoneFAQ.bm";
import { blogPostsMs } from "@/app/resources/blog/posts.bm";

const vehicleFAQ = [
  {
    question: "Apakah itu perjanjian Sewa Beli (HP)?",
    answer:
      "Ia merupakan kontrak di mana anda 'menyewa' motosikal daripada Pemilik (First Class Credit Sdn. Bhd.) dan hak milik berpindah kepada anda setelah pembiayaan diselesaikan sepenuhnya. Anda hanya menjadi pemilik sah selepas ansuran terakhir dijelaskan.",
  },
  {
    question:
      "Adakah Pembiayaan Sewa Beli First Class tertakluk di bawah Akta Sewa Beli 1967?",
    answer:
      "Ya. Semua pembiayaan motosikal kami tertakluk di bawah Akta Sewa Beli 1967, yang melindungi anda sebagai Penyewa.",
  },
  {
    question: "Apakah syarat kelayakan asas untuk memohon?",
    answer:
      "Secara amnya, anda mestilah warganegara Malaysia berumur 18–65 tahun (pada masa permohonan). Anda memerlukan pendapatan bulanan minimum RM1,500.",
  },
  {
    question: "Berapa lama proses kelulusan mengambil masa?",
    answer:
      "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini, dan penyata KWSP/bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam.",
  },
  {
    question: "Bolehkah saya memohon jika skor CCRIS/CTOS saya rendah?",
    answer:
      "Ya, kami menilai lebih daripada sekadar skor. Kami mengambil kira kestabilan pekerjaan semasa dan keupayaan downpayment anda. Walaupun bank tradisional mungkin menolak, kami pakar dalam mencari penyelesaian untuk pelbagai profil kredit.",
  },
  {
    question: "Undang-undang manakah yang mentadbir pinjaman motosikal saya di Malaysia?",
    answer:
      "Semua pembiayaan motosikal di Malaysia tertakluk di bawah Akta Sewa Beli 1967. Ini melindungi anda dengan mengawal selia caj tempoh, peraturan pengambilan semula, dan hak anda sebagai Penyewa.",
  },
  {
    question: "Apakah kadar keuntungan yang ditawarkan?",
    answer:
      "Kadar rata tetap 10.00% setahun (≈ 0.833% sebulan). Kadar ini dikunci untuk sepanjang tempoh pembiayaan.",
  },
  {
    question: "Bagaimanakah faedah dikira?",
    answer:
      "Kami menggunakan kadar rata tetap. Jumlah caj tempoh = Jumlah Dibiayai × Kadar × (Tempoh dalam tahun). Jumlah penuh kemudiannya dibahagikan kepada ansuran yang sama rata sepanjang tempoh.",
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
    question: "Apakah tempoh pinjaman minimum & maksimum?",
    answer: "Minimum 1 tahun (12 bulan) dan maksimum 5 tahun (60 bulan).",
  },
  {
    question: "Apakah jumlah maksimum yang boleh dibiayai?",
    answer:
      "Di bawah Akta Sewa Beli 1967, anda boleh membiayai sehingga 90% daripada nilai motosikal.",
  },
  {
    question: "Apakah yuran dan caj yang perlu saya bayar?",
    answer:
      "Menurut PDS: Duti Setem RM20 (tanpa penjamin) atau RM60 (dengan penjamin), Caj e-Hakmilik RM3, dan Pos RM10. Semua yuran didedahkan dengan jelas di awal — tiada caj tersembunyi.",
  },
  {
    question: "Adakah saya memerlukan insurance / Takaful?",
    answer:
      "Ya. Perlindungan insurance / Takaful komprehensif adalah wajib di bawah Akta Sewa Beli 1967 untuk sepanjang tempoh kemudahan HP.",
  },
  {
    question: "Bagaimanakah cara saya membuat bayaran bulanan?",
    answer:
      "1. Auto-debit atau cek bertarikh hadapan\n2. Mesin Deposit Tunai tersedia di semua bank (perkhidmatan 24 jam)\n3. MEPS interbank GIRO di mana-mana bank yang mengambil bahagian\n4. Perbankan internet",
  },
  {
    question: "Bolehkah saya menyelesaikan pinjaman lebih awal?",
    answer:
      "Ya. Anda akan menerima rebat berkanun menurut Akta Sewa Beli 1967, dikira seperti berikut: Rebat = [RP × (RP + 1)] / [OP × (OP + 1)] × Jumlah Caj Tempoh, di mana RP = Baki Tempoh (bulan) dan OP = Tempoh Asal (bulan).",
  },
  {
    question: "Motosikal jenis apakah yang layak untuk pembiayaan?",
    answer:
      "First Class Credit membiayai pelbagai jenis motosikal, sama ada baharu atau terpakai.",
  },
  {
    question: "Apakah yang berlaku jika saya terlepas bayaran?",
    answer:
      "Penalti bayaran lewat sebanyak 8% setahun atas jumlah tertunggak akan dikenakan, dikira secara harian. Hubungi Pasukan Kutipan kami lebih awal jika anda menghadapi kesukaran supaya kami dapat membincangkan pelan yang sesuai sebelum tindakan selanjutnya diambil.",
  },
  {
    question: "Bilakah First Class Credit boleh menarik balik motosikal saya?",
    answer:
      "Menurut undang-undang, pengambilan semula hanya boleh berlaku selepas anda gagal membayar dua (2) ansuran berturut-turut dan telah disampaikan notis Jadual Keempat (notis 21 hari).",
  },
];

export default function ResourcesMs() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* Mobile image */}
          <Image
            src="/woman-hold-phone-about-us-2.jpg"
            alt=""
            fill
            className="object-cover object-[70%_center] md:hidden"
            priority
          />
          {/* Desktop image */}
          <Image
            src="/woman-hold-phone-about-us-2.jpg"
            alt=""
            fill
            className="object-cover object-right hidden md:block"
            priority
          />
          {/* Left-to-right gradient: minimal overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 20%, rgba(13,36,97,0.75) 38%, rgba(13,36,97,0.15) 60%, rgba(13,36,97,0.0) 100%)",
            }}
          />
          {/* Subtle bottom navy fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d2461]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32 lg:pb-40 min-h-[580px] md:min-h-[680px] lg:min-h-[740px] flex items-center">
          <div className="max-w-[600px]">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] md:tracking-[3px] text-[#47A7DD] mb-4 md:mb-5">
              Sumber
            </p>
            <h1 className="text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              Belajar &amp; Terokai
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[440px] mb-8 md:mb-10 leading-[1.65]">
              Panduan lengkap anda untuk memahami pembiayaan Sewa Beli,
              meningkatkan profil kredit anda, dan membuat keputusan bijak untuk
              naik taraf motosikal atau telefon pintar anda.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <a
                href="/ms/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Mohon Sekarang
              </a>
              <Link
                href="#faq"
                className="inline-flex items-center gap-1.5 text-white text-[13px] md:text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
              >
                Lihat Soalan Lazim
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[100px] bg-[#f7f4ef]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-blue mb-3">
              Blog
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-deep-blue">
              Artikel Terkini
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPostsMs.map((post) => (
              <Link
                key={post.slug}
                href={`/ms/resources/blog/${post.slug}`}
                className="block bg-white border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(39,42,51,0.08)] hover:-translate-y-0.5 group"
              >
                <div className="relative aspect-[16/9] bg-[var(--bg-primary)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#2C76BB] mb-2">
                    {post.readingTime}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-dark-blue mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-blue font-semibold text-[15px] inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                    Baca Lagi
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-[100px] bg-white">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-blue mb-3">
              Soalan Lazim
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-deep-blue">
              Segala Yang Perlu Anda Tahu
            </h2>
          </div>
          <FAQTabs
            motorcycleItems={vehicleFAQ}
            smartphoneItems={smartphoneResourcesFAQms}
            locale="ms"
          />
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 text-center">
          <h2 className="text-2xl md:text-[2rem] font-semibold text-white mb-8">
            Masih Ada Soalan?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ms/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tangerine hover:scale-[1.02]"
            >
              Hubungi Kami
            </Link>
            <a
              href="/ms/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-[14px] border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              Mohon Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
