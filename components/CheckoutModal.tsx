"use client";
import { useEffect } from "react";

interface Plan {
  name: string;
  price: string;
  period: string;
  link: string;
  features: string[];
  delivery: string;
}

interface Props {
  open: boolean;
  plan: Plan | null;
  onClose: () => void;
}

export default function CheckoutModal({ open, plan, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open || !plan) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ background: "white", boxShadow: "0 32px 80px rgba(0,0,0,0.18)" }}
      >
        {/* Header */}
        <div className="px-8 pt-7 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100"
            style={{ color: "var(--text-subtle)" }}
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-3 mb-1">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: "var(--purple-faint)", color: "var(--purple)" }}
            >
              {plan.name}
            </span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-3">
            <span className="text-3xl font-bold" style={{ color: "var(--text)", letterSpacing: "-0.03em" }}>
              {plan.price}
            </span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.period}</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">

          {/* What you get */}
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-subtle)" }}>
            Включено в плана
          </p>
          <ul className="space-y-2.5 mb-6">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text)" }}>
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" style={{ color: "var(--purple)" }}>
                  <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.12"/>
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* Delivery info */}
          <div
            className="flex gap-3 p-4 rounded-xl mb-6"
            style={{ background: "var(--purple-faint)", border: "1px solid var(--purple-dim)" }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--purple)" }}>
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 7V6m0 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="text-sm leading-relaxed" style={{ color: "var(--purple)" }}>
              {plan.delivery}
            </p>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-6 mb-6">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Сигурно плащане" },
              { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Stripe" },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", text: "Анулиране по всяко време" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-shrink-0" style={{ color: "var(--text-subtle)" }}>
                  <path d={icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs" style={{ color: "var(--text-subtle)" }}>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={plan.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--purple)" }}
          >
            Продължи към плащане
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="text-center text-xs mt-3" style={{ color: "var(--text-subtle)" }}>
            Ще бъдете пренасочени към Stripe за сигурно плащане
          </p>
        </div>
      </div>
    </div>
  );
}
