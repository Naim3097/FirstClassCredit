import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import LegalDocRich from "@/components/LegalDocRich";
import { getLegalPage } from "@/lib/content";
import { hasRichText } from "@/lib/richtext";

export const metadata: Metadata = {
  title: "Terms of Service | First Class Credit",
};

export const TERMS_SECTIONS = [
        {
          heading: "Introduction",
          blocks: [
            {
              p: 'Welcome to the digital platform (the "Service") operated by First Class Credit Sdn. Bhd. (Company Registration No. 201801009791 (1271805-K)) (referred to as "First Class Credit", "Company", "we", "us", or "our"). We specialize in motorcycle and smartphone financing operations, which are strictly governed by the regulations and protections mandated under the Hire Purchase Act 1967.',
            },
            {
              p: 'These Terms of Use govern your access to and use of our website and digital services (collectively, the "Platform"). By accessing the Platform or registering an account, you signify your irrevocable agreement to be bound by these Terms of Use. To use the Service, you must be a Malaysian citizen or resident who is at least eighteen (18) years old.',
            },
            {
              p: "We reserve the right to upgrade, modify, or perform technical maintenance on the Platform at any time, and will provide reasonable advance notice if it impacts your active account management. No platform modification shall alter the fixed terms of your executed Hire Purchase Agreement.",
            },
          ],
        },
        {
          heading: "Acceptance of the Service",
          blocks: [
            {
              p: "These Terms of Use strictly govern your digital access to the Platform; they do not constitute a standalone hire purchase offer or agreement.",
            },
            {
              p: "Every financing application approved through this Platform is subject to the execution of a statutory Hire Purchase Agreement and the serving of mandatory pre-contractual notices under the Hire Purchase Act 1967. In the event of any conflict between these Terms of Use and your executed Hire Purchase Agreement, the terms of the Hire Purchase Agreement shall absolutely prevail.",
            },
          ],
        },
        {
          heading: "Credit Due Diligence and Data Reporting",
          blocks: [
            {
              p: "Upon receiving your financing application, we will conduct required legal and credit due diligence. You expressly consent to provide true and accurate personal data, including your NRIC, income statements, and verification details.",
            },
            {
              p: "You authorize us to conduct credit checks with relevant institutions, including the Central Credit Reference Information System (CCRIS) and registered credit reporting agencies like CTOS. You acknowledge that your default history or repayment behavior will be reported to these bureaus, which may impact your future credit approvals. You must also notify us of any changes to your contact details within 7 calendar days to ensure you receive statutory notices.",
            },
          ],
        },
        {
          heading: "Financing, Downpayment, and Asset Protection",
          blocks: [
            {
              p: "Unlike direct cash loans, our financing is strictly for the hire purchase of specific physical assets. Ownership of the asset remains with the Company until your final payment is made.",
            },
            {
              term: "Motorcycle Financing",
              text: "Before the vehicle is delivered, you must pay the agreed minimum statutory deposit. You are strictly required to maintain comprehensive motor insurance/takaful and valid road tax for the asset until the facility is paid in full.",
            },
            {
              term: "Smartphone Financing",
              text: "The smartphone is financed as a Consumer Good. An upfront downpayment (typically 10% of the device price) is required at registration. You are strictly prohibited from selling, trading, or pawning the phone while your contract is active without written consent from the Company, though gifting is permitted if you maintain payment responsibility. You must maintain comprehensive device protection insurance (covering accidental damage, liquid damage, or theft) for the entire duration of the financing tenure. Any refunded premiums from canceled optional protection plans will be directly credited into your account as an advance payment.",
            },
          ],
        },
        {
          heading: "Repayment and Late Fees",
          blocks: [
            {
              p: "Your monthly installment amounts and due dates will be established in your Hire Purchase Agreement and reflected in your digital Account portal. For smartphone accounts, any payment exceeding your scheduled monthly installment will automatically be treated as an advance payment and applied to your next due installment or outstanding fees.",
            },
            {
              p: "If you fail to repay an installment by the due date, a late payment penalty will be charged. In compliance with the Hire Purchase Act 1967, late payment interest is calculated at a simple rate of 8% per annum on the overdue installment amount, charged daily until fully settled.",
            },
          ],
        },
        {
          heading: "Repossession, Remote Locking, and Early Settlement",
          blocks: [
            {
              term: "Early Settlement",
              text: "You maintain the right to settle your financing balance ahead of schedule. The early settlement sum is calculated by deducting statutory rebates from your remaining balance, using the Rule of 78 formula mandated by the Hire Purchase Act 1967: Rebate = [Total Interest x Remaining Period x (Remaining Period + 1)] / [Original Period x (Original Period + 1)].",
            },
            {
              term: "Remote Device Locking (Smartphones Only)",
              text: "If you miss two (2) consecutive monthly payments on a smartphone account, the Company reserves the absolute right to remotely lock your device via security software.",
            },
            {
              term: "Asset Recovery and Repossession",
              text: "Implementing a remote software lock does not waive our legal rights. For both motorcycles and smartphones, the Company retains the right to initiate physical repossession protocols if payment defaults are not resolved. You are strictly liable for covering all collection, administrative, and legal expenses incurred during the asset recovery process. If the sale of the repossessed asset does not cover your outstanding debt, you must pay the remaining shortfall balance to avoid legal prosecution.",
            },
            {
              term: "Deceased Accounts",
              text: "If the hirer passes away, the estate or next-of-kin must notify the Company immediately. Enforcement actions (including repossession or remote locking) will only be deferred until four (4) consecutive monthly defaults have occurred, provided formal notification of death is received.",
            },
          ],
        },
        {
          heading: "Platform Acceptable Use and Suspension",
          blocks: [
            {
              p: "You agree not to exploit, hack, or reverse-engineer the digital infrastructure of the Platform, nor use automated scripts to extract data. Falsifying financial documentation during the application journey is strictly prohibited. We reserve the right to limit, restrict, or suspend your digital Platform Account if we suspect fraudulent activity or a breach of these terms.",
            },
          ],
        },
        {
          heading: "Indemnity and Limitation of Liability",
          blocks: [
            {
              p: "You agree to indemnify the Company against third-party claims arising from your violation of these Terms of Use or misuse of the Platform. While we strive for maximum uptime, we shall not be held liable for delays in processing payments or delivering notifications caused by third-party gateway outages or telecommunication errors. To the maximum extent permitted by Malaysian law, our total corporate liability under these platform Terms of Use shall not exceed Ringgit Malaysia Five Hundred (RM500).",
            },
          ],
        },
        {
          heading: "Governing Law and Jurisdiction",
          blocks: [
            {
              p: "These Terms of Use shall be governed by and construed in accordance with the laws of Malaysia. Any dispute arising out of your use of the Platform shall be brought exclusively before the Civil Courts of Malaysia (including the relevant Subordinate Courts or High Court in Sarawak, depending on the monetary value).",
            },
          ],
        },
];

export default async function Terms() {
  const page = await getLegalPage("terms", "en");
  if (page && hasRichText(page.content)) {
    return (
      <LegalDocRich
        title={page.title || "Terms of Service"}
        content={page.content!}
      />
    );
  }
  return (
    <LegalDoc
      title={page?.title || "Terms of Service"}
      sections={TERMS_SECTIONS}
    />
  );
}
