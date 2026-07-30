import Image from "next/image";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { HeroReveal, Reveal, StaggerChildren } from "@/components/ScrollAnimations";
import { Icon } from "@/components/icons";
import EligibilitySection from "@/components/EligibilitySection";
import LoanCalculator from "@/components/LoanCalculator";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { mapEligibilityRows } from "@/components/eligibilityData";
import { localizeHref, type Locale } from "@/lib/locale";
import type { FinancingPage, Media } from "@/payload-types";

function imgUrl(
  upload: number | Media | null | undefined,
  fallback?: string | null,
): string {
  if (upload && typeof upload === "object" && upload.url) return upload.url;
  return fallback || "";
}

function lines(text: string | null | undefined): string[] {
  return (text || "").split("\n");
}

export default function FinancingProductPage({
  doc,
  locale,
}: {
  doc: FinancingPage;
  locale: Locale;
}) {
  const lz = (href: string | null | undefined) =>
    localizeHref(href || "/apply", locale);

  const hero = doc.hero;
  const heroBg = imgUrl(hero?.backgroundImage, hero?.backgroundImageUrl);
  const accentClass = hero?.accent === "sky" ? "text-[#47A7DD]" : "text-[#FCDB81]";

  const whyCards = doc.whyUs?.cards ?? [];
  const lineup = doc.lineup;
  const products = lineup?.products ?? [];
  const elig = doc.eligibility;
  const calc = doc.calculator;
  const tenures = (calc?.tenures || "12,24,36")
    .split(",")
    .map((t) => parseInt(t.trim(), 10))
    .filter((n) => !Number.isNaN(n));

  const faqItems: FAQItem[] = (doc.faq ?? []).map((f) => ({
    question: f.question,
    answer: f.answer ? <RichText data={f.answer} className="faq-rte" /> : null,
  }));

  const cta = doc.cta;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        <div className="absolute inset-0">
          {heroBg && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroBg}')` }}
              aria-hidden
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 20%, rgba(13,36,97,0.75) 38%, rgba(13,36,97,0.15) 60%, rgba(13,36,97,0.0) 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d2461]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32 lg:pb-40 min-h-[580px] md:min-h-[680px] lg:min-h-[740px] flex items-center">
          <HeroReveal className="max-w-[620px]">
            {hero?.eyebrow && (
              <p className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] md:tracking-[3px] mb-4 md:mb-5 ${accentClass}`}>
                {hero.eyebrow}
              </p>
            )}
            <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              {lines(hero?.title).map((l, i, a) => (
                <span key={i}>
                  {l}
                  {i < a.length - 1 && <br className="hidden sm:block" />}
                </span>
              ))}
            </h1>
            {hero?.body && (
              <p className="text-[14px] md:text-[16px] text-white/70 max-w-[460px] mb-8 md:mb-10 leading-[1.65]">
                {hero.body}
              </p>
            )}
            <div className="flex items-center gap-5 md:gap-7">
              <a
                href={lz(hero?.applyHref)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                {hero?.applyLabel || "Apply Now"}
              </a>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      {whyCards.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-start">
              <Reveal className="lg:col-span-3">
                <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-[#272A33] leading-[1.15] tracking-tight mb-5">
                  {doc.whyUs?.heading}
                </h2>
                <div className="w-12 h-[3px] bg-[#2C76BB] rounded-full" />
              </Reveal>
              <StaggerChildren className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                {whyCards.map((c, i) => (
                  <div key={i}>
                    <div className="w-14 h-14 rounded-full bg-[#E8F1FB] flex items-center justify-center mb-5 text-[#2C76BB]">
                      <Icon name={c.icon || "chart"} size={22} />
                    </div>
                    <h4 className="text-[16px] md:text-[17px] font-semibold text-[#272A33] mb-3">
                      {c.title}
                    </h4>
                    <p className="text-[13.5px] md:text-[14px] text-[var(--text-secondary)] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>
      )}

      {/* ===== LINEUP ===== */}
      {lineup?.enabled && products.length > 0 && (
        <section className="relative py-16 md:py-24 bg-[#0d2461] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            aria-hidden
            style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(71,167,221,0.25) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-10 md:mb-14 max-w-[640px] mx-auto">
              {lineup.eyebrow && (
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#FCDB81] mb-3 md:mb-4">
                  {lineup.eyebrow}
                </p>
              )}
              <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-bold text-white leading-[1.1] tracking-tight mb-4">
                {lineup.heading}
              </h2>
              {lineup.body && (
                <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed">
                  {lineup.body}
                </p>
              )}
            </Reveal>

            <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {products.map((d, i) => {
                const src = imgUrl(d.image, d.imageUrl);
                return (
                  <div key={i} className="group relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[16/10] bg-[#f4f6fb] overflow-hidden">
                      {src && (
                        <Image
                          src={src}
                          alt={d.name || ""}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="p-4 md:p-6 flex flex-col flex-1">
                      <h3 className="text-[15px] sm:text-[17px] md:text-[19px] font-bold text-[#0d2461] mb-2 leading-snug">
                        {d.name}
                      </h3>
                      <p className="text-[12px] md:text-[13.5px] text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                        {d.desc}
                      </p>
                      <a
                        href={lz(d.applyHref)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2.5 bg-[#EE4720] text-white text-[13px] md:text-[13.5px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33] w-full"
                      >
                        {hero?.applyLabel || "Apply Now"}
                      </a>
                    </div>
                  </div>
                );
              })}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* ===== ELIGIBILITY ===== */}
      {elig && (elig.rows?.length ?? 0) > 0 && (
        <EligibilitySection
          eyebrow={elig.eyebrow || "Before You Apply"}
          heading={elig.heading || "Eligibility &\nDocuments"}
          intro={
            elig.intro ||
            "Make sure you meet the requirements below before you start your application."
          }
          checkLabel={elig.checkLabel || "Check If You Qualify"}
          checkHref={lz(elig.checkHref)}
          pdsLabel={elig.pdsLabel || "View the Product Disclosure Sheet (PDS)"}
          pdsHref={elig.pdsUrl || "#"}
          rows={mapEligibilityRows(elig)}
        />
      )}

      {/* ===== CALCULATOR ===== */}
      {calc?.enabled && (
        <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 40%, #2C76BB 100%)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(71,167,221,0.18) 0%, transparent 65%)" }} />
          <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <Reveal className="lg:col-span-4">
                {calc.eyebrow && (
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#47A7DD] mb-3 md:mb-4">
                    {calc.eyebrow}
                  </p>
                )}
                <h2 className="text-[26px] md:text-[32px] lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-4 md:mb-5">
                  {calc.heading}
                </h2>
                {calc.body && (
                  <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed max-w-md mb-5 md:mb-6">
                    {calc.body}
                  </p>
                )}
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-8">
                <LoanCalculator
                  minAmount={calc.minAmount ?? 3000}
                  maxAmount={calc.maxAmount ?? 10000}
                  step={calc.step ?? 500}
                  defaultAmount={calc.defaultAmount ?? 4000}
                  tenures={tenures.length ? tenures : [12, 24, 36]}
                  defaultTenure={calc.defaultTenure ?? 24}
                  pdsHref={calc.pdsUrl || "#"}
                  locale={locale}
                />
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      {faqItems.length > 0 && (
        <section className="py-16 md:py-24 bg-[#f7f4ef]">
          <div className="max-w-[860px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#2C76BB] mb-3">
                FAQ
              </p>
              <h2 className="text-[26px] md:text-[34px] font-bold text-[#0d2461] leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="bg-white rounded-2xl border border-[#eef0f5] px-6 md:px-8">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      {cta?.heading && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal>
              <div className="rounded-2xl px-8 md:px-14 py-12 md:py-16 text-center" style={{ background: "linear-gradient(135deg, #0d2461 0%, #1a3a7c 45%, #2C76BB 100%)" }}>
                <h2 className="text-[26px] md:text-[36px] font-bold text-white leading-tight tracking-tight mb-4 max-w-[720px] mx-auto">
                  {cta.heading}
                </h2>
                {cta.body && (
                  <p className="text-[14px] md:text-[16px] text-white/70 leading-relaxed mb-8 max-w-[560px] mx-auto">
                    {cta.body}
                  </p>
                )}
                <a
                  href={lz(cta.buttonHref)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
                >
                  {cta.buttonLabel || "Apply Now"}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
