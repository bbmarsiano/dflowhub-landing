import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function CheckoutSuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale } = await params;
  const { session_id: sessionId } = await searchParams;
  const t = await getTranslations("checkoutResult");

  return (
    <>
      <Nav />
      <main className="min-h-[70vh] flex items-center justify-center px-6 pt-28 pb-20">
        <div className="w-full max-w-lg text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--brand-faint)" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-7 h-7"
              style={{ color: "var(--brand-color)" }}
            >
              <path
                d="M5 12l5 5L20 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
          >
            {t("successTitle")}
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            {t("successBody")}
          </p>
          {sessionId && (
            <p className="text-xs mb-8 font-mono break-all" style={{ color: "var(--text-subtle)" }}>
              {t("sessionId")}: {sessionId}
            </p>
          )}
          <Link
            href={`/${locale}`}
            className="inline-flex items-center h-11 px-6 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "var(--brand-color)" }}
          >
            {t("backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
