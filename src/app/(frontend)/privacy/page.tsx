import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import LegalDocRich from "@/components/LegalDocRich";
import { getLegalPage } from "@/lib/content";
import { hasRichText } from "@/lib/richtext";

export const metadata: Metadata = {
  title: "Privacy Notice | First Class Credit",
};

export const PRIVACY_INTRO = [
        {
          p: 'First Class Credit Sdn. Bhd. (Company Registration No. 201801009791 (1271805-K)) ("the Company", "we", "us", or "our") values your privacy. This Privacy Notice is issued in accordance with the Malaysian Personal Data Protection Act 2010 (PDPA). It explains how we collect, use, process, disclose, and protect your personal data when you access our website, mobile application, and digital services (collectively, the "Platform").',
        },
];

export const PRIVACY_SECTIONS = [
        {
          heading: "Personal Data We Collect",
          blocks: [
            {
              p: "To evaluate your account registration and process hire purchase facilities, we must collect and process your personal data. This includes:",
            },
            {
              term: "Identity Data",
              text: "Your full name, NRIC number (MyKad), date of birth, gender, and nationality.",
            },
            {
              term: "Contact Data",
              text: "Residential address, mailing address, email address, and mobile phone number.",
            },
            {
              term: "Financial Data",
              text: "Employment history, employer details, monthly income, bank account numbers, payslips, bank statements, EPF statements, and tax files.",
            },
            {
              term: "Credit Profile Data",
              text: "Credit scores, payment histories, bankruptcy checks, and active litigation records obtained from registered credit reporting agencies.",
            },
            {
              term: "Technical Data",
              text: "IP address, device type, operating system, and browser tracking information when you interact with our Platform.",
            },
          ],
        },
        {
          heading: "Source of Your Personal Data",
          blocks: [
            {
              p: "We collect your personal data directly from you when you fill out forms, register an account, or upload files to our Platform. Additionally, we collect data from third-party sources, including:",
            },
            {
              list: [
                "Registered credit reporting agencies (e.g., CTOS, CRIF, Experian) and Bank Negara Malaysia’s Central Credit Reference Information System (CCRIS).",
                "Government agencies or statutory bodies (e.g., LHDN, KWSP) where permitted.",
                "Fraud prevention agencies and public databases.",
              ],
            },
          ],
        },
        {
          heading: "Purpose of Processing Your Data",
          blocks: [
            {
              p: "Your personal data is processed for necessary operational, legal, and credit assessment purposes, including:",
            },
            {
              term: "Identity Verification",
              text: "Authenticating your identity via electronic Know-Your-Customer (eKYC) workflows.",
            },
            {
              term: "Credit Evaluation",
              text: "Assessing your creditworthiness, debt-to-income ratios, and financial eligibility for hire purchase facilities (motorcycles and smartphones).",
            },
            {
              term: "Contractual Obligation",
              text: "Generating, digitally signing, and executing your statutory Hire Purchase Agreement and mandatory pre-contractual notices.",
            },
            {
              term: "Disbursement & Collections",
              text: "Managing financing approvals, tracking monthly installments, issuing statements, and conducting asset recovery/repossession actions if a default occurs.",
            },
            {
              term: "Regulatory Compliance",
              text: "Fulfilling statutory obligations under the Hire Purchase Act 1967, Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA), and tax regulations.",
            },
          ],
        },
        {
          heading: "Disclosure of Your Personal Data",
          blocks: [
            {
              p: "We keep your data confidential. However, to operate the Service and fulfill legal requirements, we may disclose your data to the following third parties:",
            },
            {
              term: "Regulators & Government Authorities",
              text: "The Ministry of Domestic Trade and Costs of Living (KPDN), Bank Negara Malaysia (BNM), Inland Revenue Board (LHDN), the Royal Malaysia Police (PDRM), and other relevant government authorities.",
            },
            {
              term: "Credit Reporting Agencies",
              text: "Authorized credit bureaus to log repayment behavior or update active default statuses.",
            },
            {
              term: "Service Partners",
              text: "Our designated payment gateway partners (such as FPX providers), secure identity verification software partners, and cloud storage providers.",
            },
            {
              term: "Professional Advisors & Recovery Agents",
              text: "Our legal counsel, auditors, and authorized/licensed repossession agencies in the event of default and asset recovery proceedings.",
            },
          ],
        },
        {
          heading: "Your Rights Under the PDPA",
          blocks: [
            {
              p: "As a data subject in Malaysia, you hold specific statutory rights regarding your information:",
            },
            {
              term: "Right of Access & Correction",
              text: "You have the right to request a copy of your personal data or request updates to inaccurate or obsolete data via your Account settings.",
            },
            {
              term: "Right to Withdraw Consent",
              text: "You may withdraw your consent for us to process your data for marketing or non-essential features. However, please note that withdrawing consent for core operational data will result in the immediate termination of your platform Account and financing eligibility.",
            },
          ],
        },
        {
          heading: "Data Retention and Security",
          blocks: [
            {
              term: "Security",
              text: "We protect your personal data using industry-standard Secure Socket Layer (SSL) encryption, firewalls, and restricted administrative access protocols.",
            },
            {
              term: "Retention",
              text: "We retain your financial and identity data for as long as your account remains active, or for a mandatory period of seven (7) years following the full settlement of your hire purchase facility to satisfy statutory tax, audit, and record-keeping laws.",
            },
          ],
        },
        {
          heading: "Contact and Complaints",
          blocks: [
            {
              p: "If you have questions regarding this Privacy Notice, or if you wish to exercise your data access and correction rights, please contact our team at:",
            },
            { term: "Phone", text: "082-237878" },
            { term: "Email", text: "hello@firstclasscredit.com.my" },
            {
              term: "Mailing Address",
              text: "Lot 538, Ground Floor, Section 6, KTLD, Jalan Satok, 93400 Kuching, Sarawak.",
            },
          ],
        },
];

export default async function Privacy() {
  const page = await getLegalPage("privacy", "en");
  if (page && hasRichText(page.content)) {
    return (
      <LegalDocRich
        title={page.title || "Privacy Notice"}
        content={page.content!}
      />
    );
  }
  return (
    <LegalDoc
      title={page?.title || "Privacy Notice"}
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
    />
  );
}
