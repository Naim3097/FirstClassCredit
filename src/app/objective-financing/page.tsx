import Image from "next/image";
import Link from "next/link";

export default function ObjectiveFinancing() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-dark-blue to-deep-blue overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(44,118,187,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(71,167,221,0.2) 0%, transparent 50%)",
        }} />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 py-28 text-center">
        <span className="inline-block bg-tangerine text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
          Coming Soon
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extralight leading-[1.1] text-white mb-6 max-w-2xl mx-auto">
          Fund Your Next Big Goal
        </h1>
        <p className="text-lg md:text-xl text-light-blue/70 max-w-xl mx-auto mb-10 leading-relaxed">
          We are finalizing a new, flexible financing solution tailored for your
          personal milestones, lifestyle upgrades, and essential device needs.
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tangerine hover:scale-[1.02]"
        >
          I&apos;m Interested
        </Link>
      </div>
    </section>
  );
}
