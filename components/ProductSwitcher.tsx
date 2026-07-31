"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import type { Product } from "@/lib/product";

export default function ProductSwitcher({ active }: { active: Product }) {
  const t = useTranslations("productSwitcher");
  const locale = useLocale();

  return (
    <div
      className="hidden sm:flex items-center rounded-lg p-0.5 text-sm font-medium"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
      role="navigation"
      aria-label="Product switcher"
    >
      {(["erp", "crm"] as const).map((product) => {
        const isActive = active === product;
        return (
          <Link
            key={product}
            href={`/${locale}/${product}`}
            className="px-3 py-1.5 rounded-md transition-colors"
            style={{
              background: isActive ? "white" : "transparent",
              color: isActive ? "var(--brand-color)" : "var(--text-muted)",
              boxShadow: isActive ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
            }}
          >
            {t(product)}
          </Link>
        );
      })}
    </div>
  );
}
