import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MdxContent from "@/components/blog/MdxContent";
import ProductBadge from "@/components/blog/ProductBadge";
import PostCta from "@/components/blog/PostCta";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const site = getSiteUrl();
  const url = `${site}/${locale}/blog/${post.slug}`;
  const image = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${site}${post.coverImage}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: image }],
    },
  };
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const site = getSiteUrl();
  const image = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${site}${post.coverImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "DFlowHub",
    },
    image: [image],
    mainEntityOfPage: `${site}/${locale}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <ProductBadge product={post.product} locale={locale} />
              <time className="text-sm" style={{ color: "var(--text-subtle)" }}>
                {formatDate(post.date, locale)}
              </time>
              <span className="text-sm" style={{ color: "var(--text-subtle)" }}>
                {post.readingMinutes} {t("minRead")}
              </span>
            </div>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "var(--text)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              {post.title}
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)" }}>
              {post.description}
            </p>
          </div>

          <div className="relative w-full aspect-[1200/630] overflow-hidden rounded-2xl mb-10" style={{ border: "1px solid var(--border)" }}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <MdxContent source={post.content} />
          <PostCta product={post.product} locale={locale} />
        </article>
      </main>
      <Footer />
    </>
  );
}
