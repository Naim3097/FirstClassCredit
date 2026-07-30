import { notFound } from "next/navigation";
import FinancingProductPage from "@/components/FinancingProductPage";
import { getFinancingPageBySlug, getFinancingPages } from "@/lib/content";

export async function generateStaticParams() {
  const pages = await getFinancingPages("ms");
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getFinancingPageBySlug(slug, "ms");
  if (!page) return { title: "Pembiayaan" };
  return {
    title: `${page.title} | First Class Credit`,
    description: page.hero?.body ?? undefined,
  };
}

export default async function FinancingPageRouteMs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getFinancingPageBySlug(slug, "ms");
  if (!page) notFound();
  return <FinancingProductPage doc={page} locale="ms" />;
}
