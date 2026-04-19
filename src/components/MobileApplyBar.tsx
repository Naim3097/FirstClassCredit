import Link from "next/link";

export default function MobileApplyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--border-light)] p-3">
      <Link
        href="/apply"
        className="flex items-center justify-center w-full py-3.5 bg-orange text-white font-semibold rounded-lg text-base"
      >
        Apply Now
      </Link>
    </div>
  );
}
