"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HubPage() {
  const t = useTranslations("hub");
  const locale = useLocale();

  const products = [
    { key: "erp" as const, href: `/${locale}/erp` },
    { key: "crm" as const, href: `/${locale}/crm` },
  ];

  return (
    <>
      <Nav />
      <main className="min-h-[70vh] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ color: "var(--purple)", background: "var(--purple-faint)" }}
            >
              {t("badge")}
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-5"
              style={{ color: "var(--text)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
            >
              {t("title")}
            </h1>
            <p
              className="text-lg leading-relaxed mx-auto"
              style={{ color: "var(--text-muted)", maxWidth: "520px" }}
            >
              {t("subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {products.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="group block rounded-2xl p-8 transition-all hover:-translate-y-0.5"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "var(--purple)" }}
                >
                  {t(`${key}.name`)}
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  {t(`${key}.pitch`)}
                </p>
                <span
                  className="text-sm font-semibold transition-opacity group-hover:opacity-80"
                  style={{ color: "var(--purple)" }}
                >
                  {t(`${key}.cta`)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
