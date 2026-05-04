import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const vehicleFAQ = [
  {
    question: "What is a Hire Purchase (HP) agreement?",
    answer:
      "It is a contract where you 'hire' the motor vehicle from the owner (the financier) with an option to purchase it at the end of the term. You become the legal owner only after the final instalment is paid.",
  },
  {
    question: "Is First Class Credit Financing HP governed under the Hire Purchase Act 1967?",
    answer: "Yes.",
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
      "Yes, we look at more than just a score. We consider your current employment stability and downpayment capability. While traditional banks might decline, we specialize in finding solutions for varied credit profiles.",
  },
  {
    question: "Which law governs my motor vehicle loan in Malaysia?",
    answer:
      "All vehicle financing in Malaysia is governed by the Hire Purchase Act 1967. This protects you by regulating interest rates, repossession rules, and your rights as a hirer.",
  },
  {
    question: "What are the profit rates offered?",
    answer: "0.833% per month / 10% per annum.",
  },
  {
    question: "How is the interest calculated?",
    answer:
      "Most HP loans use a fixed flat rate. Total interest is calculated on the initial principal over the full tenure.",
  },
  {
    question: "Can you provide a representative example of a hire purchase loan with First Class Credit?",
    answer:
      "Loan amount: RM5,000\nInterest rate: 10% per annum (flat rate)\nTenure: 24 months\nMonthly instalment: RM250 (RM5,000 principal + RM1,000 total interest / 24 months)",
  },
  {
    question: "What is the minimum & maximum loan tenure?",
    answer: "Minimum loan tenure 1 year & maximum loan tenure 5 years.",
  },
  {
    question: "What is the maximum amount financed for motor vehicle purchasing?",
    answer: "Under the Hire Purchase Act 1967, you can finance up to 90% of the motor vehicle's value.",
  },
  {
    question: "Are there any 'hidden' fees?",
    answer:
      "We practice full transparency. Typical costs include a Stamp Duty, Processing Fees, and JPJ Ownership Claim (Hakmilik) fee. These will be clearly stated in your Product Disclosure Sheet (PDS).",
  },
  {
    question: "How do I make monthly payments?",
    answer:
      "1. Auto-debit or post-dated cheque\n2. Cash Deposit Machine available at all banks with 24 hours service\n3. MEPS interbank GIRO at any participating banks\n4. Internet banking",
  },
  {
    question: "Can I settle my loan early?",
    answer:
      "Yes. Under the HP Act, you are entitled to a statutory rebate on the 'unearned' interest if you settle the loan before the end of the tenure.",
  },
  {
    question: "What motor vehicle brands are eligible for financing?",
    answer: "First Class Credit finances a wide range of vehicle brands.",
  },
  {
    question: "What happens if I miss a payment?",
    answer:
      "A late payment interest will be charged on the overdue amount. We encourage you to contact our Collection Team early if you face financial hardship to discuss a restructuring plan.",
  },
  {
    question: "When can First Class Credit repossess my motor vehicle?",
    answer:
      "By law, repossession can only occur after you have defaulted on two (2) successive instalments and have been served a Fourth Schedule notice (21-day notice).",
  },
];

const blogPosts = [
  {
    title: "5 Things to Check Before Signing a Hire Purchase Agreement in Malaysia",
    excerpt:
      "Understanding the fine print of your HP agreement can save you from unexpected costs. Here are the key things every buyer should verify before signing.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "Understanding CCRIS & CTOS: Can You Still Get a Vehicle Loan?",
    excerpt:
      "A low credit score doesn't have to be a dead end. Learn how credit reporting works in Malaysia and what options are available to you.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
];

export default function Resources() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/resources-hero.png"
            alt=""
            fill
            className="object-cover object-[80%_center] lg:object-right"
            priority
          />
          {/* Left-to-right gradient: solid navy on left, fade to transparent on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 30%, rgba(13,36,97,0.85) 50%, rgba(13,36,97,0.35) 75%, rgba(13,36,97,0.15) 100%)",
            }}
          />
          {/* Subtle bottom navy fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d2461]/60 to-transparent" />
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
              Your guide to understanding hire purchase financing, improving your credit profile, and making smart vehicle ownership decisions.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                Apply Now
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center gap-1.5 text-white text-[13px] md:text-[14px] font-semibold hover:text-[#47A7DD] transition-colors"
              >
                View FAQs <span aria-hidden>&rarr;</span>
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
              <article
                key={post.title}
                className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(39,42,51,0.08)] hover:-translate-y-0.5 group"
              >
                <div className="relative aspect-[16/9] bg-[var(--bg-primary)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-dark-blue mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-blue font-semibold text-[15px] inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                    Read More <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </article>
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
          <FAQAccordion items={vehicleFAQ} />
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "linear-gradient(315deg, #47A7DD 0%, #2C76BB 45%, #0d2461 100%)" }}>
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
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-[14px] border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
