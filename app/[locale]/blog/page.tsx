import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { getAllPosts, type BlogProduct } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const site = getSiteUrl();

  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `${site}/${locale}/blog`,
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      url: `${site}/${locale}/blog`,
      type: "website",
    },
  };
}

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string }>;
}) {
  const { locale } = await params;
  const { product: productFilter } = await searchParams;
  const t = await getTranslations({ locale, namespace: "blog" });
  const active =
    productFilter === "erp" || productFilter === "crm" ? productFilter : "all";

  const posts = getAllPosts().filter((p) => {
    if (active === "all") return true;
    return p.product === (active as BlogProduct);
  });

  return (
    <>
      <Nav />
      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                color: "var(--text-muted)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {t("badge")}
            </span>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
            >
              {t("title")}
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--text-muted)", maxWidth: 520 }}>
              {t("subtitle")}
            </p>
            <BlogFilter active={active} />
          </div>

          {posts.length === 0 ? (
            <p style={{ color: "var(--text-muted)" }}>{t("empty")}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
