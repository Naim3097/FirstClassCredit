import Image from "next/image";
import { Reveal } from "@/components/ScrollAnimations";

/**
 * "Our Partner" (JomKaki Motor) block on the About page. Purely presentational —
 * the page resolves each field from the CMS with a built-in fallback.
 */
export default function PartnerSection({
  eyebrow,
  heading,
  body,
  logoUrl,
  logoAlt,
  linkLabel,
  linkUrl,
  vendorLabel,
}: {
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
  logoUrl: string;
  logoAlt: string;
  linkLabel: string;
  linkUrl: string;
  vendorLabel: string;
}) {
  return (
    <section className="py-20 md:py-28 bg-[#f8f8f5]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <Reveal>
          <div className="bg-white rounded-2xl border border-[#eef0f5] overflow-hidden shadow-[0_24px_70px_-40px_rgba(13,36,97,0.3)] grid grid-cols-1 lg:grid-cols-12">
            {/* Text */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#F18F33] mb-4">
                {eyebrow}
              </p>
              <h2 className="text-[26px] md:text-[34px] font-bold text-[#0d2461] leading-[1.15] tracking-tight mb-5">
                {heading}
              </h2>
              <div className="partner-body text-[14px] md:text-[15px] text-[#555] leading-[1.8] mb-8 space-y-4">
                {body}
              </div>
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                {linkLabel}
              </a>
            </div>

            {/* Visual panel */}
            <div
              className="relative lg:col-span-5 min-h-[200px] lg:min-h-0 flex items-center justify-center p-8 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0d2461 0%, #253A7D 55%, #2C76BB 100%)" }}
            >
              <div
                className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full opacity-25"
                style={{ background: "radial-gradient(circle, #47A7DD 0%, transparent 70%)" }}
                aria-hidden
              />
              <div className="relative flex flex-col items-center text-center">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={800}
                  height={800}
                  className="w-[190px] md:w-[230px] h-auto object-contain"
                  unoptimized
                />
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#FCDB81] mt-4">
                  {vendorLabel}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
