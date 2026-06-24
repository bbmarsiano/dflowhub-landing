"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import TrialModal from "./TrialModal";

export default function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="DFlowERP"
              className="h-7 w-auto"
            />
          </a>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:flex items-center h-9 px-4 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--purple)" }}
            >
              {t("cta")}
            </button>
          </div>
        </div>
      </nav>
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
