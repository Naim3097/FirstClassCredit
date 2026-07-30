"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HeroReveal } from "@/components/ScrollAnimations";

export type HeroSlide = {
  key: string;
  eyebrow: string;
  accent: "sky" | "gold";
  /** Title text; "\n" becomes a line break. */
  title: string;
  body: string;
  /** Background image URL (Blob URL or local /public path). */
  bg: string;
  applyHref: string;
  howHref: string;
  applyLabel: string;
  howLabel: string;
};

const ACCENT: Record<HeroSlide["accent"], string> = {
  sky: "text-[#47A7DD]",
  gold: "text-[#FCDB81]",
};

function Title({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function HomeHero({ slides }: { slides: HeroSlide[] }) {
  const [activeHero, setActiveHero] = useState(0);
  // Bumped whenever the user interacts, to (re)start the auto-rotate timer.
  const [interaction, setInteraction] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  // Auto-rotate the hero between services (respects reduced-motion).
  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActiveHero((i) => (i + 1) % slides.length),
      6500
    );
    return () => clearInterval(id);
  }, [interaction, slides.length]);

  const goTo = (i: number) => {
    setActiveHero((i + slides.length) % slides.length);
    setInteraction((n) => n + 1);
  };

  // Swipe support (mobile): horizontal drag changes the active slide.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let startX: number | null = null;
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0]?.clientX ?? null;
    };
    const onEnd = (e: TouchEvent) => {
      if (startX === null) return;
      const dx = (e.changedTouches[0]?.clientX ?? startX) - startX;
      startX = null;
      if (Math.abs(dx) < 45) return; // ignore taps / tiny drags
      setActiveHero(
        (i) => (i + (dx < 0 ? 1 : -1) + slides.length) % slides.length
      );
      setInteraction((n) => n + 1);
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [slides.length]);

  if (slides.length === 0) return null;
  const slide = slides[Math.min(activeHero, slides.length - 1)];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-end bg-[#0b1a3d] overflow-hidden"
      style={{ touchAction: "pan-y" }}
    >
      {/* Cross-fading backgrounds */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              activeHero === i ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={activeHero !== i}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${s.bg}')`, opacity: 0.8 }}
            />
          </div>
        ))}
        {/* Gradient: bottom band only — desktop */}
        <div className="absolute inset-0 hidden md:block" style={{
          background: "linear-gradient(to top, #0d2461ee 0%, #1a3a7acc 18%, #253A7D55 35%, transparent 55%)"
        }} />
        {/* Gradient: mobile */}
        <div className="absolute inset-0 block md:hidden" style={{
          background: "linear-gradient(to top, #0d2461f2 0%, #1a3a7add 20%, #253A7D66 40%, transparent 60%)"
        }} />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-24 md:pb-32 pt-32 flex flex-col items-center text-center">
        <HeroReveal key={slide.key} className="flex flex-col items-center">
          <p className={`text-[15px] md:text-[18px] font-extrabold uppercase tracking-[3.5px] mb-5 ${ACCENT[slide.accent]}`}>
            {slide.eyebrow}
          </p>
          <h1 className="text-[38px] md:text-[56px] lg:text-[68px] font-light leading-[1.06] text-white tracking-[-0.02em] mb-6">
            <Title text={slide.title} />
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/70 max-w-[560px] mb-10 leading-[1.6]">
            {slide.body}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap min-h-[52px]">
            <a
              href={slide.applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EE4720] text-white text-[15px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#F18F33]"
            >
              {slide.applyLabel}
            </a>
            <Link
              href={slide.howHref}
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white/80 text-[15px] font-medium rounded-lg hover:border-white/60 hover:text-white transition-all duration-300"
            >
              {slide.howLabel}
            </Link>
          </div>
        </HeroReveal>

        {/* Slide indicators */}
        {slides.length > 1 && (
          <div className="mt-12 flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${s.key} financing`}
                aria-current={activeHero === i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeHero === i ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
