"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

const FILTERS = [
  { key: "all", labelBg: "Всички", labelEn: "All" },
  { key: "erp", labelBg: "DFlowERP", labelEn: "DFlowERP" },
  { key: "crm", labelBg: "DFlowCRM", labelEn: "DFlowCRM" },
] as const;

export default function BlogFilter({ active }: { active: string }) {
  const locale = useLocale();

  return (
    <div
      className="inline-flex items-center rounded-lg p-0.5 text-sm font-medium"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
      role="tablist"
      aria-label="Filter blog posts"
    >
      {FILTERS.map(({ key, labelBg, labelEn }) => {
        const isActive = active === key;
        const href =
          key === "all"
            ? `/${locale}/blog`
            : `/${locale}/blog?product=${key}`;
        return (
          <Link
            key={key}
            href={href}
            scroll={false}
            className="px-3 py-1.5 rounded-md transition-colors"
            style={{
              background: isActive ? "white" : "transparent",
              color: isActive ? "var(--text)" : "var(--text-muted)",
              boxShadow: isActive ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
            }}
          >
            {locale === "en" ? labelEn : labelBg}
          </Link>
        );
      })}
    </div>
  );
}
