"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TrialModal from "./TrialModal";
import DashboardMockup from "./DashboardMockup";
import type { Product } from "@/lib/product";

export default function Hero({ product }: { product: Product }) {
  const t = useTranslations(`${product}.hero`);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg)" }}>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--brand-color) 8%, transparent) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "var(--brand-faint)", color: "var(--brand-color)" }}>
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--text)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                {t("title")}
              </h1>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "440px" }}>
                {t("subtitle")}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center h-11 px-6 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "var(--brand-color)" }}
                >
                  {t("cta_primary")}
                </button>
                <a
                  href="#onpremise"
                  className="flex items-center h-11 px-5 rounded-xl text-sm font-medium transition-all hover:bg-gray-50"
                  style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                >
                  {t("cta_secondary")}
                </a>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#a78bfa","#818cf8","#60a5fa","#34d399"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>120+</span>{" "}
                  {t("social_proof")}
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)", boxShadow: "0 25px 60px color-mix(in srgb, var(--brand-color) 14%, transparent), 0 8px 24px rgba(0,0,0,0.08)" }}
              >
                <DashboardMockup product={product} />
              </div>
              <div
                className="absolute -bottom-4 -left-4 flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-lg"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{t("badge_overlay")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  );
}
