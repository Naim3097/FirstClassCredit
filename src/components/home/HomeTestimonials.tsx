import { Reveal } from "@/components/ScrollAnimations";

export type TestimonialItem = {
  quote: string;
  authorName: string;
  descriptor?: string | null;
  featured?: boolean | null;
};

/**
 * Homepage reviews. The first featured item (or first item) renders large on
 * the left; the rest stack on the right with alternating accent borders.
 */
export default function HomeTestimonials({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: TestimonialItem[];
}) {
  if (items.length === 0) return null;
  const lead = items.find((i) => i.featured) ?? items[0];
  const side = items.filter((i) => i !== lead);
  const borderColors = ["border-[#2C76BB]", "border-[#F18F33]"];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[var(--text-muted)] mb-10">
            {eyebrow}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <blockquote className="text-[22px] md:text-[28px] font-light text-[#272A33] leading-[1.4] tracking-[-0.01em]">
              &ldquo;{lead.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#253A7D] flex items-center justify-center text-white text-sm font-semibold">
                {lead.authorName.charAt(0)}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#272A33]">
                  {lead.authorName}
                </p>
                {lead.descriptor && (
                  <p className="text-[13px] text-[var(--text-muted)]">
                    {lead.descriptor}
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          {side.length > 0 && (
            <div className="flex flex-col gap-8">
              {side.map((t, i) => (
                <Reveal key={`${t.authorName}-${i}`} delay={0.08 + i * 0.08}>
                  <div
                    className={`border-l-2 ${
                      borderColors[i % borderColors.length]
                    } pl-6`}
                  >
                    <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-[13px] font-semibold text-[#272A33] mt-3">
                      {t.authorName}
                      {t.descriptor ? ` · ${t.descriptor}` : ""}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
