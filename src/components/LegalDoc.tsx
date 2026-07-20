type Block =
  | { p: string }
  | { term: string; text: string }
  | { list: string[] };

interface Section {
  heading: string;
  blocks: Block[];
}

interface LegalDocProps {
  title: string;
  intro?: Block[];
  sections: Section[];
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("p" in b) {
          return (
            <p
              key={i}
              className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-4"
            >
              {b.p}
            </p>
          );
        }
        if ("term" in b) {
          return (
            <p
              key={i}
              className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-3"
            >
              <span className="font-semibold text-[#272A33]">{b.term}:</span>{" "}
              {b.text}
            </p>
          );
        }
        return (
          <ul
            key={i}
            className="list-disc pl-5 space-y-2 mb-4 text-[15px] text-[var(--text-secondary)] leading-[1.7]"
          >
            {b.list.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

export default function LegalDoc({ title, intro, sections }: LegalDocProps) {
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
        <div className="max-w-[820px] mx-auto px-5 md:px-10 lg:px-16">
          {intro && (
            <div className="mb-10">
              <Blocks blocks={intro} />
            </div>
          )}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-[19px] md:text-[22px] font-bold text-[#0d2461] mb-4">
                  {i + 1}. {s.heading}
                </h2>
                <Blocks blocks={s.blocks} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
