"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TrialModal from "./TrialModal";
import CheckoutModal from "./CheckoutModal";

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15"/>
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const deliveryText: Record<string, string> = {
  monthly: "След успешно плащане ще получите имейл с лицензен ключ и инструкции за инсталация. Абонаментът се подновява автоматично всеки месец и може да бъде анулиран по всяко време.",
  annual: "След успешно плащане ще получите имейл с лицензен ключ и инструкции за инсталация. Абонаментът покрива 12 месеца и може да бъде анулиран преди следващото подновяване.",
  lifetime: "След еднократното плащане ще получите имейл с постоянен лицензен ключ. Включва всички бъдещи обновления без допълнителни такси — платете веднъж, използвайте завинаги.",
};

export default function Pricing() {
  const t = useTranslations("pricing");
  const [trialOpen, setTrialOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<{
    name: string;
    price: string;
    period: string;
    link: string;
    features: string[];
    delivery: string;
  } | null>(null);

  const plans = [
    { key: "trial", link: null, featured: false, isTrial: true },
    { key: "monthly", link: "https://buy.stripe.com/28E3cu86HaTc8yydu7b3q00", featured: false, isTrial: false },
    { key: "annual", link: "https://buy.stripe.com/eVqcN486Hd1kg102Ptb3q01", featured: true, isTrial: false },
    { key: "lifetime", link: "https://buy.stripe.com/aFa6oGev54uO5mm2Ptb3q02", featured: false, isTrial: false },
  ] as const;

  return (
    <>
      <section id="pricing" className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ color: "var(--purple)", background: "var(--purple-faint)" }}>
              {t("badge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text)", letterSpacing: "-0.025em" }}>
              {t("title")}
            </h2>
            <p className="text-lg" style={{ color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto" }}>
              {t("subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map(({ key, link, featured, isTrial }) => {
              const features = t.raw(`plans.${key}.features`) as string[];
              return (
                <div
                  key={key}
                  className="relative rounded-2xl p-6 flex flex-col"
                  style={{
                    background: featured ? "var(--purple)" : "white",
                    border: `1px solid ${featured ? "var(--purple)" : "var(--border)"}`,
                    boxShadow: featured ? "0 20px 40px rgba(124,58,237,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {key === "annual" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap" style={{ background: "white", color: "var(--purple)", boxShadow: "0 2px 8px rgba(124,58,237,0.2)" }}>
                      {t("plans.annual.badge")}
                    </div>
                  )}
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: featured ? "#a78bfa" : "var(--purple)" }}>
                      {t(`plans.${key}.name`)}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-bold" style={{ color: featured ? "white" : "var(--text)", letterSpacing: "-0.03em" }}>
                        {t(`plans.${key}.price`)}
                      </span>
                      <span className="text-sm" style={{ color: featured ? "#c4b5fd" : "var(--text-muted)" }}>
                        {t(`plans.${key}.period`)}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: featured ? "#c4b5fd" : "var(--text-muted)" }}>
                      {t(`plans.${key}.desc`)}
                    </p>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm" style={{ color: featured ? "#ede9fe" : "var(--text)" }}>
                        <span style={{ color: featured ? "#a78bfa" : "var(--purple)" }}><Check /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {isTrial ? (
                    <button
                      onClick={() => setTrialOpen(true)}
                      className="w-full h-10 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "var(--purple-faint)", color: "var(--purple)", border: "1px solid var(--purple-dim)" }}
                    >
                      {t(`plans.${key}.cta`)}
                    </button>
                  ) : (
                    <button
                      onClick={() => setCheckoutPlan({
                        name: t(`plans.${key}.name`),
                        price: t(`plans.${key}.price`),
                        period: t(`plans.${key}.period`),
                        link: link!,
                        features,
                        delivery: deliveryText[key],
                      })}
                      className="w-full h-10 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                      style={featured ? { background: "white", color: "var(--purple)" } : { background: "var(--purple)", color: "white" }}
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

      <TrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
      <CheckoutModal
        open={!!checkoutPlan}
        plan={checkoutPlan}
        onClose={() => setCheckoutPlan(null)}
      />
    </>
  );
}
