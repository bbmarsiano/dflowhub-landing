import Link from "next/link";
import type { BlogProduct } from "@/lib/blog";
import { PRODUCTS } from "@/lib/brand";

export default function PostCta({
  product,
  locale,
}: {
  product: BlogProduct;
  locale: string;
}) {
  if (product === "general") {
    return (
      <div
        className="mt-12 rounded-2xl p-7"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
          {locale === "en" ? "Explore DFlowHub" : "Разгледайте DFlowHub"}
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
          {locale === "en"
            ? "Self-hosted ERP and CRM for your business."
            : "Self-hosted ERP и CRM за вашия бизнес."}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center h-10 px-5 rounded-xl text-sm font-semibold text-white"
          style={{ background: "var(--text)" }}
        >
          {locale === "en" ? "Go to hub →" : "Към hub →"}
        </Link>
      </div>
    );
  }

  const brand = PRODUCTS[product];
  const pitch =
    product === "erp"
      ? locale === "en"
        ? "Warehouse, supply chain, manufacturing, POS — on your server."
        : "Склад, доставки, производство, POS — на вашия сървър."
      : locale === "en"
        ? "Sales, service, analytics and marketing — on your server."
        : "Продажби, обслужване, анализи и маркетинг — на вашия сървър.";

  return (
    <div
      className="mt-12 rounded-2xl p-7"
      style={{
        background: `color-mix(in srgb, ${brand.color} 8%, white)`,
        border: `1px solid color-mix(in srgb, ${brand.color} 22%, white)`,
      }}
    >
      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: brand.color }}>
        DFlow{brand.name}
      </p>
      <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
        {pitch}
      </p>
      <Link
        href={`/${locale}/${product}`}
        className="inline-flex items-center h-10 px-5 rounded-xl text-sm font-semibold text-white"
        style={{ background: brand.color }}
      >
        {locale === "en" ? `Go to DFlow${brand.name} →` : `Към DFlow${brand.name} →`}
      </Link>
    </div>
  );
}
