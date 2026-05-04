export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  /** Full body, written in plain markdown-ish blocks rendered by the page. */
  body: BlogBlock[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "5-things-to-check-before-signing-hire-purchase-agreement-malaysia",
    title:
      "5 Things to Check Before Signing a Hire Purchase Agreement in Malaysia",
    excerpt:
      "Understanding the fine print of your HP agreement can save you from unexpected costs. Here are the key things every buyer should verify before signing.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "A Hire Purchase (HP) agreement is one of the biggest financial commitments most Malaysians will make outside of a home loan. Whether it is your first motorcycle or a family car, signing the dotted line locks you in for years. Before you do, run through this five-point checklist to protect your wallet and your peace of mind.",
      },
      {
        type: "h2",
        text: "1. Confirm the Amount Financed and Margin of Financing",
      },
      {
        type: "p",
        text: "The “Amount Financed” is the figure the financier (the Owner) actually lends you — not the vehicle's sticker price. The “Margin of Financing” is the percentage of the vehicle price being financed (the rest is your downpayment). Under the Hire Purchase Act 1967 this can go up to 90%. Make sure these two numbers match what you discussed with the dealer.",
      },
      {
        type: "h2",
        text: "2. Understand the Fixed Flat Rate — and What It Actually Costs You",
      },
      {
        type: "p",
        text: "Most HP loans in Malaysia use a fixed flat rate — for example, 10.00% per annum. Unlike a reducing-balance loan, flat-rate interest is calculated on the full original amount for the entire tenure. So a RM10,000 loan at 10% flat over 4 years = RM4,000 in total term charges, on top of the principal. Always look at the total amount payable, not just the monthly figure.",
      },
      { type: "h2", text: "3. Know Your Monthly AND Final Instalment" },
      {
        type: "p",
        text: "Many hirers don't realise the final instalment can be slightly different from the monthly one. Your Product Disclosure Sheet (PDS) will state both — for example, RM294 monthly and RM278 final. Both figures are inclusive of the transaction fee. Check them before signing.",
      },
      {
        type: "h2",
        text: "4. Add Up the Fees, Stamp Duty and Insurance",
      },
      { type: "p", text: "Beyond the principal and interest, expect:" },
      {
        type: "ul",
        items: [
          "Stamp Duty: RM20 (without guarantor) or RM60 (with guarantor)",
          "e-Hakmilik Charges: RM3",
          "Postage: RM10",
          "Comprehensive Insurance/Takaful (mandatory under the HP Act 1967, until full settlement)",
        ],
      },
      {
        type: "p",
        text: "These are small individually but worth knowing up front — a transparent financier will list every one of them in your PDS.",
      },
      {
        type: "h2",
        text: "5. Read the Default and Early Settlement Clauses",
      },
      {
        type: "p",
        text: "Life happens. Before signing, you should know exactly what occurs if you fall behind, and what you get back if you settle early.",
      },
      {
        type: "ul",
        items: [
          "Late payment: A penalty of 8% per annum on the arrears, calculated daily, is standard.",
          "Repossession: By law, the Owner can only repossess after you have defaulted on two successive instalments and served you a Fourth Schedule notice (21 days).",
          "Early settlement: You are entitled to a statutory rebate. The formula is Rebate = [RP × (RP+1)] / [OP × (OP+1)] × Total Term Charges, where RP is remaining months and OP is the original tenure.",
        ],
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "A fair HP agreement is a transparent one. Ask your financier for the PDS in writing, read clauses 1–11, and never sign on the same day if you are unsure. At First Class Credit, every customer receives a full Product Disclosure Sheet covering all of the above before signing.",
      },
      {
        type: "callout",
        text: "Ready to apply with confidence? Use our calculator to estimate your instalment, or start your application — we'll come back to you within 24–48 hours.",
      },
    ],
  },
  {
    slug: "ccris-ctos-can-you-still-get-a-vehicle-loan",
    title: "Understanding CCRIS & CTOS: Can You Still Get a Vehicle Loan?",
    excerpt:
      "A low credit score doesn't have to be a dead end. Learn how credit reporting works in Malaysia and what options are available to you.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "If you've been turned down by a bank for a vehicle loan, the words “CCRIS” and “CTOS” probably came up. They sound intimidating, but understanding them is the first step to getting back on the road.",
      },
      { type: "h2", text: "What is CCRIS?" },
      {
        type: "p",
        text: "CCRIS (Central Credit Reference Information System) is operated by Bank Negara Malaysia. It records the last 12 months of your credit behaviour — every loan, credit card and HP facility, and whether you've paid on time. CCRIS doesn't give you a “score”; it shows the raw data, and lenders interpret it.",
      },
      { type: "h2", text: "What is CTOS?" },
      {
        type: "p",
        text: "CTOS is a private credit reporting agency. It compiles your CCRIS record plus public information — bankruptcies, legal actions, directorship history — and produces a CTOS Score (300–850). Banks often use this score as a quick filter.",
      },
      {
        type: "h2",
        text: "The Big Question: Can You Still Get a Motorcycle or Car Loan?",
      },
      {
        type: "p",
        text: "Yes — in many cases, you can. Banks tend to apply rigid score cut-offs. Licensed credit companies like First Class Credit, governed by the Hire Purchase Act 1967, take a wider view. Here's what we actually look at:",
      },
      {
        type: "ol",
        items: [
          "Your current employment stability. Six months of consistent income often matters more than a one-off late payment two years ago.",
          "Your downpayment capacity. A larger downpayment lowers risk and can unlock approval even with imperfect credit.",
          "Debt Service Ratio (DSR). We want to see that the new monthly instalment fits comfortably within your monthly income after existing commitments.",
          "The reason behind any past issues. A medical hardship, retrenchment or business closure is treated very differently from chronic non-payment.",
        ],
      },
      { type: "h2", text: "Practical Steps Before You Apply" },
      {
        type: "ul",
        items: [
          "Pull your own report. Get a free CCRIS report from Bank Negara's eCCRIS portal and check your CTOS score — fix any errors.",
          "Settle small overdue balances. Even RM50 in arrears on a credit card hurts your record disproportionately.",
          "Don't apply everywhere at once. Multiple loan inquiries in a short window are a red flag.",
          "Save for a bigger downpayment. Going from 10% to 19% (a 81.30% margin instead of 90%) noticeably improves your odds.",
          "Have your documents ready. NRIC, latest 3 months' payslips, EPF/bank statements — a complete file gets reviewed faster.",
        ],
      },
      { type: "h2", text: "Where First Class Credit Fits In" },
      {
        type: "p",
        text: "We specialise in serving Malaysians whose credit story is more nuanced than a single number. Our process is fast (24–48 hour pre-approval), our rates are fixed and disclosed in writing via the PDS, and your consumer rights are protected by the Hire Purchase Act 1967 from day one.",
      },
      {
        type: "p",
        text: "A less-than-perfect CCRIS or CTOS doesn't mean the road ahead is closed. It just means you need a financier who looks at the whole picture.",
      },
      {
        type: "callout",
        text: "Want to see what you qualify for? Apply now — we'll come back to you within 24–48 hours.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
