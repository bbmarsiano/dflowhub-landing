"use client";
import { useTranslations } from "next-intl";

export default function OnPremise() {
  const t = useTranslations("onpremise");
  return (
    <section id="onpremise" className="py-24" style={{ background: "var(--purple-faint)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1 rounded-full" style={{ color: "var(--purple)", background: "var(--purple-dim)" }}>
          {t("badge")}
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "var(--text)", letterSpacing: "-0.025em" }}>
          {t("title")}
        </h2>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
          {t("subtitle")}
        </p>
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-8 py-5 rounded-2xl" style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0" style={{ color: "var(--purple)" }}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span className="text-base" style={{ color: "var(--text-muted)" }}>
            {t("contact")}{" "}
            <a href={`mailto:${t("email")}`} className="font-semibold hover:underline" style={{ color: "var(--purple)" }}>
              {t("email")}
            </a>
          </span>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔒", title: "Персонализирана конфигурация", desc: "Настройваме системата спрямо вашите бизнес процеси." },
            { icon: "📋", title: "SLA гаранции", desc: "Договорени времена за реакция и наличност на системата." },
            { icon: "🎓", title: "Обучение на екипа", desc: "Обучаваме вашия екип да използва всички модули ефективно." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-5" style={{ border: "1px solid var(--border)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-lg" style={{ background: "var(--purple-faint)" }}>{icon}</div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>{title}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
