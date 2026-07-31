import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import ProductBadge from "./ProductBadge";

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "bg-BG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export default function BlogCard({
  post,
  locale,
}: {
  post: BlogPost;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-0.5"
      style={{
        background: "white",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div className="relative w-full aspect-[1200/630] overflow-hidden bg-[var(--surface)]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <ProductBadge product={post.product} locale={locale} />
          <time className="text-xs" style={{ color: "var(--text-subtle)" }}>
            {formatDate(post.date, locale)}
          </time>
        </div>
        <h2
          className="text-lg font-bold mb-2"
          style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
        >
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
          {post.description}
        </p>
      </div>
    </Link>
  );
}
