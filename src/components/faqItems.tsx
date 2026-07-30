import { RichText } from "@payloadcms/richtext-lexical/react";
import type { FAQItem } from "@/components/FAQAccordion";
import type { Faq } from "@/payload-types";

/**
 * Convert CMS FAQ documents into the FAQItem shape the accordion renders,
 * rendering the Lexical answer with Payload's React renderer.
 */
export function faqsToItems(faqs: Faq[]): FAQItem[] {
  return faqs.map((f) => ({
    question: f.question,
    answer: <RichText data={f.answer} className="faq-rte" />,
  }));
}
