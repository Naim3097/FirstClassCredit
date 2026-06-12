import Image from "next/image";
import Link from "next/link";
import FAQTabs from "@/components/FAQTabs";
import RepresentativeExample from "@/components/RepresentativeExample";
import { blogPosts } from "./blog/posts";

const SMARTPHONE_FAQ_MESSAGE =
  "We are putting the final touches on our new financing solution! Check back soon for details on how we can help fund your next smartphone upgrade.";

const vehicleFAQ = [
  {
    question: "What is a Hire Purchase (HP) agreement?",
    answer:
      "It is a contract where you 'hire' the motorcycle from the Owner (First Class Credit Sdn. Bhd.) and ownership transfers to you upon full settlement. You become the legal owner only after the final instalment is paid.",
  },
  {
    question: "Is First Class Credit Financing HP governed under the Hire Purchase Act 1967?",
    answer:
      "Yes. All our motorcycle financing is governed by the Hire Purchase Act 1967, which protects you as the Hirer.",
  },
  {
    question: "What are the basic eligibility requirements to apply?",
    answer:
      "Generally, you must be a Malaysian citizen aged 18-65 (at the point of application). You'll need a minimum monthly income of RM1,500.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, 3 months' salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours.",
  },
  {
    question: "Can I apply if I have a low CCRIS/CTOS score?",
    answer:
      "Yes, we look at more than just a score. We consider your current employment stability and downpayment capability. While traditional banks might decline, we specialise in finding solutions for varied credit profiles.",
  },
  {
    question: "Which law governs my motorcycle loan in Malaysia?",
    answer:
      "All motorcycle financing in Malaysia is governed by the Hire Purchase Act 1967. This protects you by regulating term charges, repossession rules, and your rights as a Hirer.",
  },
  {
    question: "What is the profit rate offered?",
    answer:
      "A fixed flat rate of 10.00% per annum (≈ 0.833% per month). The rate is locked in for the full tenure.",
  },
  {
    question: "How is the interest calculated?",
    answer:
      "We use a fixed flat rate. Total term charges = Amount Financed × Rate × (Tenure in years). The full amount is then divided into equal instalments over the tenure.",
  },
  {
    question: "Can you provide a representative example?",
    answer: (
      <>
        <p>Here is a typical representative example for a hire purchase loan:</p>
        <RepresentativeExample />
      </>
    ),
  },
  {
    question: "What is the minimum & maximum loan tenure?",
    answer: "Minimum 1 year (12 months) and maximum 5 years (60 months).",
  },
  {
    question: "What is the maximum amount financed?",
    answer:
      "Under the Hire Purchase Act 1967, you can finance up to 90% of the motorcycle's value.",
  },
  {
    question: "What fees and charges do I pay?",
    answer:
      "Per the PDS: Stamp Duty RM20 (without guarantor) or RM60 (with guarantor), e-Hakmilik Charges RM3, and Postage RM10. All fees are disclosed up front — no hidden charges.",
  },
  {
    question: "Do I need insurance / Takaful?",
    answer:
      "Yes. Comprehensive Insurance/Takaful coverage is mandatory under the Hire Purchase Act 1967 for the full tenure of the HP facility.",
  },
  {
    question: "How do I make monthly payments?",
    answer:
      "1. Auto-debit or post-dated cheque\n2. Cash Deposit Machine available at all banks (24-hour service)\n3. MEPS interbank GIRO at any participating banks\n4. Internet banking",
  },
  {
    question: "Can I settle my loan early?",
    answer:
      "Yes. You receive a statutory rebate per the Hire Purchase Act 1967, calculated as: Rebate = [RP × (RP + 1)] / [OP × (OP + 1)] × Total Term Charges, where RP = Remaining Period (months) and OP = Original Period (months).",
  },
  {
    question: "What motorcycles are eligible for financing?",
    answer:
      "First Class Credit finances a wide range of motorcycles, both new and used.",
  },
  {
    question: "What happens if I miss a payment?",
    answer:
      "A late payment penalty of 8% per annum on the amount in arrears, calculated daily, will be charged. Contact our Collection Team early if you face hardship so we can discuss a workable plan before further action.",
  },
  {
    question: "When can First Class Credit repossess my motorcycle?",
    answer:
      "By law, repossession can only occur after you have defaulted on two (2) successive instalments and have been served a Fourth Schedule notice (21-day notice).",
  },
];

export default function Resources() {
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
              Resources
            </p>
            <h1 className="text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              Learn &amp; Explore
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[440px] mb-8 md:mb-10 leading-[1.65]">
              Your complete guide to understanding hire purchase financing, improving your credit profile, and making smart decisions for your motorcycle or smartphone upgrade.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <a
                href="/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Apply Now
              </a>
              <Link
                href="#faq"
                className="inline-flex items-center gap-1.5 text-white text-[13px] md:text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
              >
                View FAQs
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
              Latest Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
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
                    Read More
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
              Frequently Asked Questions
            </p>
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-deep-blue">
              Everything You Need to Know
            </h2>
          </div>
          <FAQTabs
            motorcycleItems={vehicleFAQ}
            smartphoneMessage={SMARTPHONE_FAQ_MESSAGE}
          />
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 text-center">
          <h2 className="text-2xl md:text-[2rem] font-semibold text-white mb-8">
            Still Have Questions?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tangerine hover:scale-[1.02]"
            >
              Contact Us
            </Link>
            <a
              href="/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-[14px] border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
