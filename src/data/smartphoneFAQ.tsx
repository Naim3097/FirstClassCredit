import RepresentativeExample from "@/components/RepresentativeExample";
import type { FAQItem } from "@/components/FAQAccordion";

// ── Shared answer fragments ─────────────────────────────────────────
const repExampleRows = [
  { label: "Loan amount", value: "RM4,000" },
  { label: "Interest rate", value: "10% per annum (flat rate)" },
  { label: "Tenure", value: "12 months" },
];

const smartphoneRepExample = (
  <>
    <p>Here is a typical representative example for a smartphone hire purchase loan:</p>
    <RepresentativeExample
      rows={repExampleRows}
      monthly="RM366.66"
      final={null}
      note="*Calculated as RM4,000 principal + RM400 total interest, divided by 12 months."
    />
  </>
);

const pdsHiddenFeesAnswer = (
  <>
    We practice full transparency. Typical costs include a Stamp Duty and Postage
    fees. These will be clearly stated in your{" "}
    <a
      href="/smartphone-hp-pds.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#2C76BB] font-semibold underline underline-offset-2 hover:text-[#253A7D]"
    >
      Product Disclosure Sheet (PDS)
    </a>
    .
  </>
);

// ── Homepage "Common Questions" — Smartphone tab (6) ────────────────
export const smartphoneHomeFAQ: FAQItem[] = [
  {
    question: "What are the basic eligibility requirements to apply?",
    answer:
      "Malaysian citizen aged 18–65 at the point of application. You’ll need a minimum monthly income of RM1,300.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, latest 3 months’ payslips or latest EPF statement, latest 3 months’ salary crediting bank statements and bank proof), pre-approval typically takes 24 to 48 hours.",
  },
  {
    question: "What is the minimum and maximum financing tenure?",
    answer:
      "Minimum loan tenure 1 year (12 months) & maximum loan tenure 3 years (36 months).",
  },
  {
    question: "What are the profit rates offered?",
    answer:
      "A fixed flat rate of 10% per annum (≈ 0.833% per month), locked in for the full tenure.",
  },
  {
    question: "Can you provide a representative example?",
    answer: smartphoneRepExample,
  },
  {
    question: 'Are there any "hidden" fees?',
    answer: pdsHiddenFeesAnswer,
  },
];

// ── Smartphone Services page — full FAQ (12) ────────────────────────
export const smartphoneFAQ: FAQItem[] = [
  {
    question: "How does the Smartphone Hire Purchase program work?",
    answer:
      "This program allows you to purchase a smartphone through fixed monthly payments. Please note that the smartphone legally belongs to First Class Credit until you make your final instalment payment, after which ownership transfers to you.",
  },
  {
    question:
      "Is First Class Credit Smartphone HP Financing governed under the Hire Purchase Act 1967?",
    answer:
      "Yes. All our smartphone financing is governed by the Hire Purchase Act 1967, which protects you as the Hirer.",
  },
  {
    question: "How much downpayment is required?",
    answer: "An upfront downpayment of 10% of the device price is required.",
  },
  {
    question: "What are the profit rates offered?",
    answer: "We charge a fixed flat interest rate of 10% per annum.",
  },
  {
    question: "What is the minimum & maximum loan tenure?",
    answer:
      "Minimum loan tenure 1 year (12 months) & maximum loan tenure 3 years (36 months).",
  },
  {
    question: "Am I required to buy insurance for the smartphone?",
    answer:
      "Yes, you must maintain comprehensive device protection insurance that covers accidental damage, liquid damage, or theft for the entire duration of your financing tenure.",
  },
  {
    question: "Can I sell, trade, or give the phone to someone else?",
    answer:
      "You cannot sell, trade, or pawn the smartphone while your contract is active without our written consent. You are allowed to gift the phone to someone else; however, you remain legally responsible for making all the monthly payments.",
  },
  {
    question: "Can you provide a representative example?",
    answer: smartphoneRepExample,
  },
  {
    question: "What happens if I miss my monthly installments?",
    answer: (
      <>
        <p>
          Defaulting on your payments will result in several enforcement and
          penalty actions:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>
            An additional late interest rate of 8% per annum will be calculated
            and charged daily on any overdue amounts.
          </li>
          <li>
            We have the right to remotely lock your smartphone via security
            software if you miss two (2) consecutive monthly payments.
          </li>
          <li>
            First Class Credit retains the full legal right to physically
            repossess the smartphone if your defaults are not resolved.
          </li>
          <li>
            You are strictly responsible for covering all collection,
            administrative, and legal expenses incurred during the device
            recovery process.
          </li>
          <li>
            Your default history will be reported to credit bureaus such as
            CTOS, which can damage your credit score.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I settle my hire purchase balance early?",
    answer: (
      <>
        <p>
          Yes, you can choose to settle your account early. Your early settlement
          sum will be the original payable balance minus a statutory rebate
          governed by the Hire Purchase Act 1967. The rebate is calculated using
          the following formula:
        </p>
        <p className="font-semibold text-[#272A33] my-2">
          Rebate = [Total Interest × RP × (RP + 1)] / [OP × (OP + 1)]
        </p>
        <p>
          RP represents the remaining period (number of months) from the point
          of early settlement until the original full settlement date.
        </p>
        <p className="mt-1.5">
          OP represents the original period (number of months) set out in your
          Hire Purchase Agreement.
        </p>
      </>
    ),
  },
  {
    question: 'Are there any "hidden" fees?',
    answer: pdsHiddenFeesAnswer,
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, latest 3 months’ salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours.",
  },
];

// ── Resources page — full FAQ ───────────────────────────────────────
export const smartphoneResourcesFAQ: FAQItem[] = [
  {
    question: "How does the Smartphone Hire Purchase program work?",
    answer:
      "This program lets you buy a smartphone through fixed monthly payments. The phone belongs to the Institution until you make your final payment, after which ownership transfers to you.",
  },
  {
    question:
      "Is First Class Credit Smartphone HP Financing governed under the Hire Purchase Act 1967?",
    answer:
      "Yes. All our smartphone financing is governed by the Hire Purchase Act 1967, which protects you as the Hirer.",
  },
  {
    question: "What are the basic eligibility requirements to apply?",
    answer: (
      <>
        <p>
          Our eligibility criteria are designed to be accessible and depend on
          your employment status:
        </p>
        <p className="font-semibold text-[#272A33] mt-3">
          For Employed Individuals:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Must be a Malaysian Citizen.</li>
          <li>Aged between 18 and 65 years old.</li>
          <li>Employed for at least 6 months at your current workplace.</li>
          <li>Minimum gross monthly salary of RM1,300.</li>
          <li>Provide two (2) contactable referees.</li>
          <li>
            Note: Express Financing is available even if you are blacklisted on
            CCRIS or CTOS.
          </li>
        </ul>
        <p className="font-semibold text-[#272A33] mt-3">
          For Self-Employed Individuals:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Your business must have been established for more than 1 year.</li>
          <li>Minimum gross monthly income of RM1,300.</li>
          <li>Provide two (2) contactable referees.</li>
          <li>
            Note: Express Financing is available even if you are blacklisted on
            CCRIS or CTOS.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What documents do I need to submit for the application?",
    answer: (
      <>
        <p>
          Please prepare the following documents based on how you are employed:
        </p>
        <p className="font-semibold text-[#272A33] mt-3">
          For Employed Individuals:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Copy of your NRIC (front and back).</li>
          <li>Latest 3 months’ payslips OR your latest EPF statement.</li>
          <li>Latest 3 months’ salary crediting bank statements.</li>
          <li>
            Bank proof (your personal savings account details for Auto Debit
            purposes).
          </li>
        </ul>
        <p className="font-semibold text-[#272A33] mt-3">
          For Self-Employed Individuals:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-1.5">
          <li>Business Registration Form.</li>
          <li>Latest 6 months’ company bank statements.</li>
          <li>Bank proof (for Direct Debit setup).</li>
        </ul>
      </>
    ),
  },
  {
    question: "How much downpayment is required?",
    answer: "An upfront downpayment of 10% of the device price is required.",
  },
  {
    question: "What is the profit rate offered?",
    answer:
      "A fixed flat rate of 10.00% per annum (≈ 0.833% per month). The rate is locked in for the full tenure.",
  },
  {
    question: "Can you provide a representative example?",
    answer: smartphoneRepExample,
  },
  {
    question: "What is the minimum & maximum loan tenure?",
    answer:
      "Minimum loan tenure 1 year (12 months) & maximum loan tenure 3 years (36 months).",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, latest 3 months’ payslip or latest EPF statement, latest 3 months’ salary crediting bank statements and bank proof), pre-approval typically takes 24 to 48 hours.",
  },
  {
    question: "Are there any setup fees or extra charges?",
    answer:
      "Yes, there are applicable fees and setup costs for this product. Stamp Duty without a guarantor is RM 20.00. Stamp Duty with a guarantor is RM 60.00. Postage fees are RM 10.00.",
  },
  {
    question: "What should I do if I am facing financial difficulties?",
    answer:
      "If you are facing financial difficulties, please call us immediately so we can help adjust your payment plan.",
  },
  {
    question: "How are advance payments treated?",
    answer:
      "Any payment exceeding your monthly instalment will automatically be treated as an advance payment. This amount will be applied to your next due instalment or any outstanding fees.",
  },
  {
    question:
      "Do I need to inform First Class Credit if my contact details change?",
    answer:
      "Yes, you must notify the Institution of any change to your mobile number, email, or mailing address within 7 calendar days to ensure you receive critical system alerts and statutory notices.",
  },
  {
    question:
      "What if I or my guarantor did not receive the agreement documents?",
    answer:
      "If you or your guarantor did not receive a copy of the final Hire Purchase Agreement or Guarantee Form upon registration, contact us immediately.",
  },
  {
    question: "Am I required to buy insurance for the smartphone?",
    answer:
      "Yes, you must maintain comprehensive device protection insurance covering accidental damage, liquid damage, or theft on the smartphone for the entire financing tenure.",
  },
  {
    question: "Can I cancel my optional device protection plan and get a refund?",
    answer:
      "If you cancel a financed optional policy, any pro-rated premium refund will be credited directly into your Hire Purchase account as an advance payment.",
  },
  {
    question: "Can I sell, trade, or give the phone to someone else?",
    answer:
      "You cannot sell, trade, or pawn the phone while your contract is active without written consent from the Institution. You can gift the phone to someone else, but you are still legally responsible for making all monthly payments.",
  },
  {
    question: "What happens if I miss my monthly instalments?",
    answer: (
      <>
        <p>
          Failing to pay your monthly instalments will result in several
          enforcement and penalty actions.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>
            An extra 8% per annum interest rate will be calculated and charged
            daily on any overdue instalment amounts until paid.
          </li>
          <li>
            First Class Credit has the right to remotely lock your smartphone via
            security software if you miss two (2) consecutive monthly payments.
          </li>
          <li>
            First Class Credit retains the full right to physically repossess the
            smartphone if your defaults are not resolved.
          </li>
          <li>
            You are strictly responsible for covering all collection,
            administrative, and legal expenses that the Institution spends during
            the device recovery process.
          </li>
          <li>
            If the repossessed phone is sold and the price does not cover what you
            owe, you must pay the leftover shortfall balance to avoid legal
            prosecution.
          </li>
          <li>
            We will report your default history to credit bureaus like CTOS,
            making your future loan and credit card approvals much more difficult
            or expensive.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I settle my hire purchase balance early?",
    answer: (
      <>
        <p>
          Yes, the net balance due for early settlement is the original payable
          balance less a statutory rebate as per the Hire Purchase Act 1967. The
          rebate shall be calculated in accordance with the following formula:
        </p>
        <p className="font-semibold text-[#272A33] my-2">
          Rebate = [Total Interest × RP × (RP + 1)] / [OP × (OP + 1)]
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            RP represents the remaining period (number of months), from the point
            of early settlement until the original full settlement date.
          </li>
          <li>
            OP represents the original period (number of months) set out in the
            Hire Purchase Agreement.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the policy if the hirer passes away?",
    answer:
      "If the hirer passes away, the estate or next-of-kin must notify us immediately. Enforcement actions, including remote locking, will only be deferred to four (4) consecutive monthly defaults once formal notification of death is received by First Class Credit.",
  },
];
