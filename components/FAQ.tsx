"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(0);
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section id="faq" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{ color: "var(--purple)", background: "var(--purple-faint)" }}>
            {t("badge")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "var(--text)", letterSpacing: "-0.025em" }}>
            {t("title")}
          </h2>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "white" }}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold" style={{ color: open === i ? "var(--purple)" : "var(--text)" }}>
                  {item.q}
                </span>
                <svg
                  viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0 transition-transform"
                  style={{ color: "var(--purple)", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div style={{ maxHeight: open === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.25s ease" }}>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
