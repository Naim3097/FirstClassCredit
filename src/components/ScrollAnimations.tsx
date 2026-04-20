"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: keyof HTMLElementTagNameMap;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 0.8,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.set(el, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power4.out",
        });
      },
    });

    return () => trigger.kill();
  }, [delay, y, duration]);

  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}

export function StaggerChildren({
  children,
  className = "",
  stagger = 0.12,
  y = 40,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const items = el.children;
    gsap.set(items, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          ease: "power4.out",
        });
      },
    });

    return () => trigger.kill();
  }, [stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function HeroReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const items = el.children;
    gsap.set(items, { opacity: 0, y: 60 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.18,
      ease: "power4.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function CountUp({ end, suffix = "", className = "" }: { end: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = end + suffix;
      return;
    }

    el.textContent = "0" + suffix;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: end,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val) + suffix;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
