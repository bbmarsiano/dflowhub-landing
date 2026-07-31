"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import ProductSwitcher from "./ProductSwitcher";
import TrialModal from "./TrialModal";
import Logo from "./Logo";
import type { Product } from "@/lib/product";

interface Props {
  activeProduct?: Product;
}

export default function Nav({ activeProduct }: Props) {
  const t = useTranslations("nav");
  const locale = useLocale();
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
          <Link href={`/${locale}`} className="flex items-center">
            <Logo product={activeProduct ?? "hub"} />
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            {activeProduct && <ProductSwitcher active={activeProduct} />}
            <LanguageSwitcher />
            {activeProduct && (
              <button
                onClick={() => setModalOpen(true)}
                className="hidden sm:flex items-center h-9 px-4 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--brand-color)" }}
              >
                {t("cta")}
              </button>
            )}
          </div>
        </div>
      </nav>
      {activeProduct && (
        <TrialModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          product={activeProduct}
        />
      )}
    </>
  );
}
