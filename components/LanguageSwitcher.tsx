"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "bg" ? "en" : "bg";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-sm font-medium transition-colors"
      style={{ color: "var(--text-muted)" }}
      aria-label="Switch language"
    >
      <span style={{ opacity: locale === "bg" ? 1 : 0.4, color: "var(--text)" }}>BG</span>
      <span style={{ color: "var(--border)" }}>/</span>
      <span style={{ opacity: locale === "en" ? 1 : 0.4, color: "var(--text)" }}>EN</span>
    </button>
  );
}
