import RepresentativeExample from "@/components/RepresentativeExample";
import type { FAQItem } from "@/components/FAQAccordion";

const smartphoneRepExampleRows = [
  { label: "Loan amount", value: "RM4,000" },
  { label: "Interest rate", value: "10% per annum (flat rate)" },
  { label: "Tenure", value: "12 months" },
];

// Smartphone HP Financing FAQs — exact client-approved content.
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
    answer: (
      <>
        <p>
          Here is a typical representative example for a smartphone hire purchase
          loan:
        </p>
        <RepresentativeExample
          rows={smartphoneRepExampleRows}
          monthly="RM366.66"
          final={null}
          note="*Calculated as RM4,000 principal + RM400 total interest, divided by 12 months."
        />
      </>
    ),
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
    answer: (
      <>
        We practice full transparency. Typical costs include a Stamp Duty and
        Postage fees. These will be clearly stated in your{" "}
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
    ),
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once we receive your complete documentation (NRIC, latest 3 months’ salary slips, and EPF/bank statements), pre-approval typically takes 24 to 48 hours.",
  },
];

// Shorter set shown in the homepage "Common Questions" tab.
const HOME_QUESTIONS = [
  "How does the Smartphone Hire Purchase program work?",
  "How much downpayment is required?",
  "What are the profit rates offered?",
  "What is the minimum & maximum loan tenure?",
  "Can you provide a representative example?",
  'Are there any "hidden" fees?',
];

export const smartphoneHomeFAQ: FAQItem[] = smartphoneFAQ.filter((f) =>
  HOME_QUESTIONS.includes(f.question)
);
