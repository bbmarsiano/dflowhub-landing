"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import type { Product } from "@/lib/product";

interface Props {
  activeProduct?: Product;
}

export default function Footer({ activeProduct }: Props) {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t py-14" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Link href={`/${locale}`}>
                <img
                  src="/logo.png"
                  alt="DFlowHub"
                  style={{ height: "28px", width: "auto" }}
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "200px" }}>{t("tagline")}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text)" }}>
              {activeProduct ? t("product") : t("products")}
            </p>
            <ul className="space-y-3">
              {activeProduct ? (
                [["#features", t("features")], ["#pricing", t("pricing")], ["#faq", t("faq")], ["#onpremise", t("onpremise")]].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-sm transition-colors hover:text-gray-900" style={{ color: "var(--text-muted)" }}>{label}</a>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <Link href={`/${locale}/erp`} className="text-sm transition-colors hover:text-gray-900" style={{ color: "var(--text-muted)" }}>
                      {t("erp")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/crm`} className="text-sm transition-colors hover:text-gray-900" style={{ color: "var(--text-muted)" }}>
                      {t("crm")}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text)" }}>{t("legal")}</p>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm transition-colors hover:text-gray-900" style={{ color: "var(--text-muted)" }}>{t("privacy")}</a></li>
              <li><a href="#" className="text-sm transition-colors hover:text-gray-900" style={{ color: "var(--text-muted)" }}>{t("terms")}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text)" }}>{t("contact")}</p>
            <a href={`mailto:${t("sales")}`} className="text-sm transition-colors hover:underline" style={{ color: "var(--purple)" }}>{t("sales")}</a>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--text-subtle)" }}>{t("copyright")}</p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs" style={{ color: "var(--text-subtle)" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
