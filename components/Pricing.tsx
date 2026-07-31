"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TrialModal from "./TrialModal";
import CheckoutModal, { type BillingType } from "./CheckoutModal";
import type { Product } from "@/lib/product";

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const paidPlans = [
  { key: "monthly" as const, featured: false },
  { key: "annual" as const, featured: true },
  { key: "lifetime" as const, featured: false },
];

export default function Pricing({ product }: { product: Product }) {
  const t = useTranslations(`${product}.pricing`);
  const [trialOpen, setTrialOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [billingType, setBillingType] = useState<BillingType>("monthly");

  const plans = [
    { key: "trial" as const, featured: false, isTrial: true },
    ...paidPlans.map((p) => ({ ...p, isTrial: false as const })),
  ];

  const openCheckout = (type: BillingType) => {
    setBillingType(type);
    setCheckoutOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ color: "var(--brand-color)", background: "var(--brand-faint)" }}
            >
              {t("badge")}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
            >
              {t("title")}
            </h2>
            <p className="text-lg" style={{ color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto" }}>
              {t("subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map(({ key, featured, isTrial }) => {
              const features = t.raw(`plans.${key}.features`) as string[];
              return (
                <div
                  key={key}
                  className="relative rounded-2xl p-6 flex flex-col"
                  style={{
                    background: featured ? "var(--brand-color)" : "white",
                    border: `1px solid ${featured ? "var(--brand-color)" : "var(--border)"}`,
                    boxShadow: featured
                      ? "0 20px 40px color-mix(in srgb, var(--brand-color) 25%, transparent)"
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {key === "annual" && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: "white",
                        color: "var(--brand-color)",
                        boxShadow: "0 2px 8px color-mix(in srgb, var(--brand-color) 20%, transparent)",
                      }}
                    >
                      {t("plans.annual.badge")}
                    </div>
                  )}
                  <div className="mb-5">
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-3"
                      style={{ color: featured ? "var(--brand-soft)" : "var(--brand-color)" }}
                    >
                      {t(`plans.${key}.name`)}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className="text-3xl font-bold"
                        style={{
                          color: featured ? "white" : "var(--text)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {t(`plans.${key}.price`)}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: featured ? "var(--brand-muted)" : "var(--text-muted)" }}
                      >
                        {t(`plans.${key}.period`)}
                      </span>
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: featured ? "var(--brand-muted)" : "var(--text-muted)" }}
                    >
                      {t(`plans.${key}.desc`)}
                    </p>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: featured ? "var(--brand-dim)" : "var(--text)" }}
                      >
                        <span style={{ color: featured ? "var(--brand-soft)" : "var(--brand-color)" }}>
                          <Check />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {isTrial ? (
                    <button
                      onClick={() => setTrialOpen(true)}
                      className="w-full h-10 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                      style={{
                        background: "var(--brand-faint)",
                        color: "var(--brand-color)",
                        border: "1px solid var(--brand-dim)",
                      }}
                    >
                      {t(`plans.${key}.cta`)}
                    </button>
                  ) : (
                    <button
                      onClick={() => openCheckout(key as BillingType)}
                      className="w-full h-10 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                      style={
                        featured
                          ? { background: "white", color: "var(--brand-color)" }
                          : { background: "var(--brand-color)", color: "white" }
                      }
                    >
                      {t(`plans.${key}.cta`)}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} product={product} />
      <CheckoutModal
        open={checkoutOpen}
        product={product}
        billingType={billingType}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}
