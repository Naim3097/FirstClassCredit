import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "blue";
  secondaryButton?: { text: string; href: string };
}

export default function CTABanner({
  heading = "Ready to Get Started?",
  buttonText = "Apply Now",
  buttonHref = "/apply",
  variant = "dark",
  secondaryButton,
}: CTABannerProps) {
  const bg = variant === "blue" ? "bg-blue" : "bg-deep-blue";

  return (
    <section className={`${bg} py-20 md:py-24`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 text-center">
        <h2 className="text-2xl md:text-[2rem] font-semibold text-white mb-8">
          {heading}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-semibold rounded-lg transition-all duration-300 hover:bg-tangerine hover:scale-[1.02]"
          >
            {buttonText}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center px-8 py-[14px] border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
