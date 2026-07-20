import RepresentativeExample from "@/components/RepresentativeExample";
import type { FAQItem } from "@/components/FAQAccordion";

// ── Cebisan jawapan yang dikongsi ───────────────────────────────────
const repExampleRows = [
  { label: "Jumlah pinjaman", value: "RM4,000" },
  { label: "Kadar faedah", value: "10% setahun (kadar rata)" },
  { label: "Tempoh", value: "12 bulan" },
];

const smartphoneRepExample = (
  <>
    <p>
      Berikut ialah contoh perwakilan biasa untuk pinjaman sewa beli telefon
      pintar:
    </p>
    <RepresentativeExample
      title="Contoh Pinjaman Perwakilan"
      rows={repExampleRows}
      monthlyLabel="Ansuran bulanan"
      monthly="RM366.66"
      final={null}
      note="*Dikira sebagai RM4,000 prinsipal + RM400 jumlah faedah, dibahagikan kepada 12 bulan."
    />
  </>
);

const pdsHiddenFeesAnswer = (
  <>
    Kami mengamalkan ketelusan sepenuhnya. Kos biasa termasuk Duti Setem dan
    yuran Pos. Ini akan dinyatakan dengan jelas dalam{" "}
    <a
      href="/smartphone-hp-pds.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#2C76BB] font-semibold underline underline-offset-2 hover:text-[#253A7D]"
    >
      Product Disclosure Sheet (PDS)
    </a>{" "}
    anda.
  </>
);

// ── Halaman Perkhidmatan Telefon Pintar — FAQ penuh (12) ────────────
export const smartphoneFAQms: FAQItem[] = [
  {
    question: "Bagaimanakah program Hire Purchase telefon pintar berfungsi?",
    answer:
      "Program ini membolehkan anda membeli telefon pintar melalui bayaran bulanan tetap. Sila ambil perhatian bahawa telefon pintar tersebut secara sah dimiliki oleh First Class Credit sehingga anda menjelaskan ansuran terakhir, dan selepas itu hak milik akan berpindah kepada anda.",
  },
  {
    question:
      "Adakah Pembiayaan Sewa Beli Telefon Pintar First Class tertakluk di bawah Akta Sewa Beli 1967?",
    answer:
      "Ya. Semua pembiayaan telefon pintar kami tertakluk di bawah Akta Sewa Beli 1967, yang melindungi anda sebagai Penyewa.",
  },
  {
    question: "Berapakah downpayment yang diperlukan?",
    answer:
      "Downpayment pendahuluan sebanyak 10% daripada harga peranti diperlukan.",
  },
  {
    question: "Apakah kadar keuntungan yang ditawarkan?",
    answer: "Kami mengenakan kadar faedah rata tetap sebanyak 10% setahun.",
  },
  {
    question: "Apakah tempoh pinjaman minimum & maksimum?",
    answer:
      "Tempoh pinjaman minimum 1 tahun (12 bulan) & tempoh pinjaman maksimum 3 tahun (36 bulan).",
  },
  {
    question: "Adakah saya diwajibkan membeli insurance untuk telefon pintar?",
    answer:
      "Ya, anda perlu mengekalkan insurance perlindungan peranti komprehensif yang meliputi kerosakan tidak sengaja, kerosakan akibat cecair, atau kecurian sepanjang tempoh pembiayaan anda.",
  },
  {
    question: "Bolehkah saya menjual, menukar, atau memberikan telefon kepada orang lain?",
    answer:
      "Anda tidak boleh menjual, menukar, atau mencagarkan telefon pintar tersebut semasa kontrak anda masih aktif tanpa kebenaran bertulis daripada kami. Anda dibenarkan menghadiahkan telefon kepada orang lain; namun, anda tetap bertanggungjawab dari segi undang-undang untuk membuat semua bayaran bulanan.",
  },
  {
    question: "Boleh berikan contoh perwakilan?",
    answer: smartphoneRepExample,
  },
  {
    question: "Apakah yang berlaku jika saya terlepas ansuran bulanan?",
    answer: (
      <>
        <p>
          Kegagalan membuat bayaran akan mengakibatkan beberapa tindakan
          penguatkuasaan dan penalti:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>
            Kadar faedah lewat tambahan sebanyak 8% setahun akan dikira dan
            dikenakan secara harian atas sebarang jumlah tertunggak.
          </li>
          <li>
            Kami berhak mengunci telefon pintar anda dari jauh melalui perisian
            keselamatan jika anda terlepas dua (2) bayaran bulanan berturut-turut.
          </li>
          <li>
            First Class Credit mengekalkan hak undang-undang penuh untuk menarik
            balik telefon pintar secara fizikal jika keingkaran anda tidak
            diselesaikan.
          </li>
          <li>
            Anda bertanggungjawab sepenuhnya untuk menampung semua kos kutipan,
            pentadbiran, dan guaman yang terlibat sepanjang proses pengambilan
            semula peranti.
          </li>
          <li>
            Sejarah keingkaran anda akan dilaporkan kepada biro kredit seperti
            CTOS, yang boleh menjejaskan skor kredit anda.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Bolehkah saya menyelesaikan baki Hire Purchase lebih awal?",
    answer: (
      <>
        <p>
          Ya, anda boleh memilih untuk menyelesaikan akaun anda lebih awal.
          Jumlah penyelesaian awal anda ialah baki asal yang perlu dibayar tolak
          rebat berkanun yang tertakluk di bawah Akta Sewa Beli 1967. Rebat
          dikira menggunakan formula berikut:
        </p>
        <p className="font-semibold text-[#272A33] my-2">
          Rebat = [Jumlah Faedah × RP × (RP + 1)] / [OP × (OP + 1)]
        </p>
        <p>
          RP mewakili baki tempoh (bilangan bulan) dari titik penyelesaian awal
          sehingga tarikh penyelesaian penuh asal.
        </p>
        <p className="mt-1.5">
          OP mewakili tempoh asal (bilangan bulan) seperti yang dinyatakan dalam
          Perjanjian Hire Purchase anda.
        </p>
      </>
    ),
  },
  {
    question: 'Adakah sebarang yuran "tersembunyi"?',
    answer: pdsHiddenFeesAnswer,
  },
  {
    question: "Berapa lama proses kelulusan mengambil masa?",
    answer:
      "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini, dan penyata KWSP/bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam.",
  },
];

// ── Halaman Sumber — FAQ penuh ──────────────────────────────────────
export const smartphoneResourcesFAQms: FAQItem[] = [
  {
    question: "Bagaimanakah program Hire Purchase telefon pintar berfungsi?",
    answer:
      "Program ini membolehkan anda membeli telefon pintar melalui bayaran bulanan tetap. Telefon tersebut dimiliki oleh pihak Institusi sehingga anda membuat bayaran terakhir, dan selepas itu hak milik berpindah kepada anda.",
  },
  {
    question:
      "Adakah Pembiayaan Sewa Beli Telefon Pintar First Class tertakluk di bawah Akta Sewa Beli 1967?",
    answer:
      "Ya. Semua pembiayaan telefon pintar kami tertakluk di bawah Akta Sewa Beli 1967, yang melindungi anda sebagai Penyewa.",
  },
  {
    question: "Apakah syarat kelayakan asas untuk memohon?",
    answer: (
      <>
        <p>
          Kriteria kelayakan kami direka untuk mudah diakses dan bergantung pada
          status pekerjaan anda:
        </p>
        <p className="font-semibold text-[#272A33] mt-3">
          Untuk Individu Bekerja:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Mestilah Warganegara Malaysia.</li>
          <li>Berumur antara 18 hingga 65 tahun.</li>
          <li>Telah bekerja sekurang-kurangnya 6 bulan di tempat kerja semasa anda.</li>
          <li>Gaji kasar bulanan minimum RM1,300.</li>
          <li>Menyediakan dua (2) orang perujuk yang boleh dihubungi.</li>
          <li>
            Nota: Pembiayaan Express tersedia walaupun anda disenaraihitamkan
            pada CCRIS atau CTOS.
          </li>
        </ul>
        <p className="font-semibold text-[#272A33] mt-3">
          Untuk Individu Bekerja Sendiri:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Perniagaan anda mestilah telah beroperasi lebih daripada 1 tahun.</li>
          <li>Pendapatan kasar bulanan minimum RM1,300.</li>
          <li>Menyediakan dua (2) orang perujuk yang boleh dihubungi.</li>
          <li>
            Nota: Pembiayaan Express tersedia walaupun anda disenaraihitamkan
            pada CCRIS atau CTOS.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Apakah dokumen yang perlu saya kemukakan untuk permohonan?",
    answer: (
      <>
        <p>
          Sila sediakan dokumen berikut berdasarkan status pekerjaan anda:
        </p>
        <p className="font-semibold text-[#272A33] mt-3">
          Untuk Individu Bekerja:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Salinan NRIC anda (depan dan belakang).</li>
          <li>Slip gaji 3 bulan terkini ATAU penyata KWSP terkini anda.</li>
          <li>Penyata bank pengkreditan gaji 3 bulan terkini.</li>
          <li>
            Bukti bank (butiran akaun simpanan peribadi anda untuk tujuan Auto
            Debit).
          </li>
        </ul>
        <p className="font-semibold text-[#272A33] mt-3">
          Untuk Individu Bekerja Sendiri:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Borang Pendaftaran Perniagaan.</li>
          <li>Penyata bank syarikat 6 bulan terkini.</li>
          <li>Bukti bank (untuk penyediaan Direct Debit).</li>
        </ul>
      </>
    ),
  },
  {
    question: "Berapakah downpayment yang diperlukan?",
    answer:
      "Downpayment pendahuluan sebanyak 10% daripada harga peranti diperlukan.",
  },
  {
    question: "Apakah kadar keuntungan yang ditawarkan?",
    answer:
      "Kadar rata tetap 10.00% setahun (≈ 0.833% sebulan). Kadar ini dikunci untuk sepanjang tempoh pembiayaan.",
  },
  {
    question: "Boleh berikan contoh perwakilan?",
    answer: smartphoneRepExample,
  },
  {
    question: "Apakah tempoh pinjaman minimum & maksimum?",
    answer:
      "Tempoh pinjaman minimum 1 tahun (12 bulan) & tempoh pinjaman maksimum 3 tahun (36 bulan).",
  },
  {
    question: "Berapa lama proses kelulusan mengambil masa?",
    answer:
      "Setelah kami menerima dokumen lengkap anda (NRIC, slip gaji 3 bulan terkini atau penyata KWSP terkini, penyata bank pengkreditan gaji 3 bulan terkini dan bukti bank), pra-kelulusan biasanya mengambil masa 24 hingga 48 jam.",
  },
  {
    question: "Adakah sebarang yuran penyediaan atau caj tambahan?",
    answer:
      "Ya, terdapat yuran dan kos penyediaan yang dikenakan untuk produk ini. Duti Setem tanpa penjamin ialah RM20.00. Duti Setem dengan penjamin ialah RM60.00. Yuran Pos ialah RM10.00.",
  },
  {
    question: "Apakah yang perlu saya lakukan jika menghadapi kesukaran kewangan?",
    answer:
      "Jika anda menghadapi kesukaran kewangan, sila hubungi kami dengan segera supaya kami dapat membantu melaraskan pelan bayaran anda.",
  },
  {
    question: "Bagaimanakah bayaran pendahuluan dikendalikan?",
    answer:
      "Sebarang bayaran yang melebihi ansuran bulanan anda akan dianggap sebagai bayaran pendahuluan secara automatik. Jumlah ini akan digunakan untuk ansuran yang akan datang atau sebarang yuran tertunggak.",
  },
  {
    question:
      "Perlukah saya memaklumkan First Class Credit jika butiran hubungan saya berubah?",
    answer:
      "Ya, anda mesti memaklumkan kepada pihak Institusi sebarang perubahan nombor telefon bimbit, e-mel, atau alamat surat-menyurat anda dalam tempoh 7 hari kalendar bagi memastikan anda menerima makluman sistem penting dan notis berkanun.",
  },
  {
    question:
      "Bagaimana jika saya atau penjamin saya tidak menerima dokumen perjanjian?",
    answer:
      "Jika anda atau penjamin anda tidak menerima salinan Perjanjian Hire Purchase atau Borang Jaminan yang muktamad semasa pendaftaran, hubungi kami dengan segera.",
  },
  {
    question: "Adakah saya diwajibkan membeli insurance untuk telefon pintar?",
    answer:
      "Ya, anda perlu mengekalkan insurance perlindungan peranti komprehensif yang meliputi kerosakan tidak sengaja, kerosakan akibat cecair, atau kecurian ke atas telefon pintar sepanjang tempoh pembiayaan.",
  },
  {
    question:
      "Bolehkah saya membatalkan pelan perlindungan peranti pilihan saya dan mendapat bayaran balik?",
    answer:
      "Jika anda membatalkan polisi pilihan yang dibiayai, sebarang bayaran balik premium secara pro-rata akan dikreditkan terus ke dalam akaun Hire Purchase anda sebagai bayaran pendahuluan.",
  },
  {
    question: "Bolehkah saya menjual, menukar, atau memberikan telefon kepada orang lain?",
    answer:
      "Anda tidak boleh menjual, menukar, atau mencagarkan telefon tersebut semasa kontrak anda masih aktif tanpa kebenaran bertulis daripada pihak Institusi. Anda boleh menghadiahkan telefon kepada orang lain, tetapi anda tetap bertanggungjawab dari segi undang-undang untuk membuat semua bayaran bulanan.",
  },
  {
    question: "Apakah yang berlaku jika saya terlepas ansuran bulanan?",
    answer: (
      <>
        <p>
          Kegagalan membayar ansuran bulanan anda akan mengakibatkan beberapa
          tindakan penguatkuasaan dan penalti.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>
            Kadar faedah tambahan sebanyak 8% setahun akan dikira dan dikenakan
            secara harian atas sebarang jumlah ansuran tertunggak sehingga
            dijelaskan.
          </li>
          <li>
            First Class Credit berhak mengunci telefon pintar anda dari jauh
            melalui perisian keselamatan jika anda terlepas dua (2) bayaran
            bulanan berturut-turut.
          </li>
          <li>
            First Class Credit mengekalkan hak penuh untuk menarik balik telefon
            pintar secara fizikal jika keingkaran anda tidak diselesaikan.
          </li>
          <li>
            Anda bertanggungjawab sepenuhnya untuk menampung semua kos kutipan,
            pentadbiran, dan guaman yang ditanggung oleh pihak Institusi
            sepanjang proses pengambilan semula peranti.
          </li>
          <li>
            Jika telefon yang ditarik balik dijual dan harganya tidak menampung
            jumlah hutang anda, anda perlu membayar baki kekurangan yang tinggal
            bagi mengelakkan pendakwaan undang-undang.
          </li>
          <li>
            Kami akan melaporkan sejarah keingkaran anda kepada biro kredit
            seperti CTOS, yang menjadikan kelulusan pinjaman dan kad kredit anda
            pada masa hadapan jauh lebih sukar atau mahal.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Bolehkah saya menyelesaikan baki Hire Purchase lebih awal?",
    answer: (
      <>
        <p>
          Ya, baki bersih yang perlu dibayar untuk penyelesaian awal ialah baki
          asal yang perlu dibayar tolak rebat berkanun menurut Akta Sewa Beli
          1967. Rebat akan dikira mengikut formula berikut:
        </p>
        <p className="font-semibold text-[#272A33] my-2">
          Rebat = [Jumlah Faedah × RP × (RP + 1)] / [OP × (OP + 1)]
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            RP mewakili baki tempoh (bilangan bulan), dari titik penyelesaian
            awal sehingga tarikh penyelesaian penuh asal.
          </li>
          <li>
            OP mewakili tempoh asal (bilangan bulan) seperti yang dinyatakan
            dalam Perjanjian Hire Purchase.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Apakah polisi jika penyewa meninggal dunia?",
    answer:
      "Sekiranya penyewa meninggal dunia, pihak harta pusaka atau waris terdekat mesti memaklumkan kepada kami dengan segera. Tindakan penguatkuasaan, termasuk penguncian dari jauh, hanya akan ditangguhkan sehingga empat (4) keingkaran bulanan berturut-turut setelah pemberitahuan rasmi kematian diterima oleh First Class Credit.",
  },
];
