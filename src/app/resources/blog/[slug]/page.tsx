import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getPostBySlug, type BlogBlock } from "../posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: `${post.title} — First Class Credit`,
    description: post.excerpt,
  };
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="text-[22px] md:text-[28px] font-bold text-[#0d2461] leading-tight mt-12 mb-4 tracking-[-0.01em]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="text-[18px] md:text-[20px] font-semibold text-[#0d2461] leading-snug mt-8 mb-3"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={i}
          className="text-[15px] md:text-[16px] text-[#3c3c3c] leading-[1.8] mb-5"
        >
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul
          key={i}
          className="list-disc pl-6 mb-6 space-y-2 text-[15px] md:text-[16px] text-[#3c3c3c] leading-[1.75]"
        >
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={i}
          className="list-decimal pl-6 mb-6 space-y-2 text-[15px] md:text-[16px] text-[#3c3c3c] leading-[1.75]"
        >
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-10 rounded-2xl border border-[#dde3f0] bg-[#f4f5fb] px-6 py-5 text-[14px] md:text-[15px] text-[#0d2461] leading-relaxed"
        >
          <p className="mb-3">{block.text}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/financing-hp#calculator"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-[#0d2461]/15 text-[#0d2461] text-[13px] font-semibold rounded-lg hover:border-[#0d2461]/40 transition-colors"
            >
              Calculate Instalment
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#EE4720] text-white text-[13px] font-semibold rounded-lg hover:bg-[#F18F33] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0d2461] pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #0d2461 0%, rgba(13,36,97,0.7) 60%, #0d2461 100%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-[840px] mx-auto px-5 md:px-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[2px] text-[#47A7DD] mb-6 hover:text-white transition-colors"
          >
            Back to Resources
          </Link>
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[2.5px] text-[#47A7DD] mb-3">
            Blog · {post.readingTime}
          </p>
          <h1 className="text-[28px] md:text-[40px] lg:text-[46px] font-bold text-white leading-[1.15] tracking-[-0.02em]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-[#0d2461] pb-0">
        <div className="max-w-[840px] mx-auto px-5 md:px-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden -mb-16 md:-mb-24 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[760px] mx-auto px-5 md:px-10">
          <p className="text-[16px] md:text-[18px] text-[#272A33] leading-[1.7] mb-10 font-medium border-l-2 border-[#47A7DD] pl-5">
            {post.excerpt}
          </p>
          {post.body.map((b, i) => renderBlock(b, i))}
        </div>
      </article>

      {/* Other articles */}
      {others.length > 0 && (
        <section className="bg-[#f7f4ef] py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10 lg:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#2C76BB] mb-3">
              Keep Reading
            </p>
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#0d2461] mb-8">
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/resources/blog/${p.slug}`}
                  className="group bg-white border border-[#eef0f5] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(13,36,97,0.08)] hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#2C76BB] mb-2">
                      {p.readingTime}
                    </p>
                    <h3 className="text-[17px] font-semibold text-[#0d2461] leading-snug mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-[#555] leading-relaxed mb-3">
                      {p.excerpt}
                    </p>
                    <span className="text-[#2C76BB] text-[14px] font-semibold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      Read article
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
