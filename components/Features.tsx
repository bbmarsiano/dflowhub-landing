"use client";
import { useTranslations } from "next-intl";

const icons: Record<string, JSX.Element> = {
  wms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <path d="M9 22V12h6v10M7 12h10"/>
    </svg>
  ),
  scm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <path d="M16 8h4l3 3v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  mes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
  pos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4M7 7h2M11 7h2M15 7h2M7 11h2M11 11h2M15 11h2"/>
    </svg>
  ),
  backup: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
};

const moduleKeys = ["wms", "scm", "mes", "pos", "backup"] as const;

export default function Features() {
  const t = useTranslations("features");
  return (
    <section id="features" className="py-24" style={{ background: "var(--purple-faint)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ color: "var(--purple)", background: "var(--purple-dim)" }}>
            {t("badge")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text)", letterSpacing: "-0.025em" }}>
            {t("title")}
          </h2>
          <p className="text-lg" style={{ color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto" }}>
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {moduleKeys.map((key) => (
            <div
              key={key}
              className="group relative bg-white rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--purple-faint)", color: "var(--purple)" }}>
                {icons[key]}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--purple)" }}>
                {t(`modules.${key}.name`)}
              </span>
              <h3 className="text-base font-semibold mb-2 mt-1" style={{ color: "var(--text)" }}>
                {t(`modules.${key}.desc`)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t(`modules.${key}.detail`)}
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--purple)" }} />
            </div>
          ))}
          <div className="relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden" style={{ background: "var(--purple)" }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#a78bfa" }}>Интеграция</p>
              <h3 className="text-base font-semibold mb-2 text-white">Всички модули работят заедно</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#c4b5fd" }}>
                Данните от WMS захранват SCM, MES синхронизира с WMS, POS отразява наличностите в реално време.
              </p>
            </div>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {moduleKeys.map((k) => (
                <span key={k} className="text-xs font-semibold px-2 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  {k.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
