import { RichText } from "@payloadcms/richtext-lexical/react";

type RichTextData = React.ComponentProps<typeof RichText>["data"];

/** Legal page shell that renders CMS rich-text content. */
export default function LegalDocRich({
  title,
  content,
}: {
  title: string;
  content: RichTextData;
}) {
  return (
    <>
      <section className="relative bg-[#0d2461] pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="max-w-[820px] mx-auto px-5 md:px-10 lg:px-16">
          <h1 className="text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.08] text-white tracking-[-0.02em]">
            {title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[820px] mx-auto px-5 md:px-10 lg:px-16 legal-rte">
          <RichText data={content} />
        </div>
      </section>
    </>
  );
}
