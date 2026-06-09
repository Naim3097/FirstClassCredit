import { HeroReveal } from "@/components/ScrollAnimations";

const APPLY_HREF = "/apply?type=smartphone";

export default function SmartphoneFinancing() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="relative bg-[#0d2461] overflow-hidden">
        {/* Background image + gradient */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600&q=80&auto=format&fit=crop')",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0d2461 0%, #0d2461 22%, rgba(13,36,97,0.78) 45%, rgba(13,36,97,0.2) 75%, rgba(13,36,97,0.0) 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d2461]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32 lg:pb-40 min-h-[580px] md:min-h-[680px] lg:min-h-[740px] flex items-center">
          <HeroReveal className="max-w-[620px]">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] md:tracking-[3px] text-[#FCDB81]">
                First Class Smartphone HP Financing
              </p>
              <span className="inline-block bg-[#F18F33] text-white text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-5 md:mb-6">
              The Smart Way to<br className="hidden sm:block" /> Upgrade Your Phone.
            </h1>
            <p className="text-[14px] md:text-[16px] text-white/70 max-w-[460px] mb-8 md:mb-10 leading-[1.65]">
              We&apos;re launching a flexible payment solution for the devices you
              rely on most. Join the waitlist to be the first to know when we go
              live.
            </p>
            <div className="flex items-center gap-5 md:gap-7">
              <a
                href={APPLY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-[#EE4720] text-white text-[14px] md:text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
              >
                I&apos;m Interested
              </a>
            </div>
          </HeroReveal>
        </div>
      </section>
    </>
  );
}
