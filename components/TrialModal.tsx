"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const SUPABASE_URL = "https://lvhraynmvyvancqyezef.supabase.co/functions/v1/generate-trial";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2aHJheW5tdnl2YW5jcXllemVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNTY4MDMsImV4cCI6MjA5MzYzMjgwM30.ubBo7w9sVcbq2oXDrJebWMP8Y2NOSd-aCAVdcRQsLC0";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TrialModal({ open, onClose }: Props) {
  const t = useTranslations("modal");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  const handleSubmit = async () => {
    if (!email || !name) return;
    setStatus("loading");
    try {
      const res = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email, name, company }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setName(""); setCompany(""); setEmail(""); setStatus("idle"); }, 300);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{ background: "white", boxShadow: "0 25px 60px rgba(0,0,0,0.15)" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          style={{ color: "var(--text-subtle)" }}
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--purple-faint)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" style={{ color: "var(--purple)" }}>
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>{t("success")}</h3>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>{t("title")}</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>{t("subtitle")}</p>
            <div className="space-y-3">
              {[
                { ph: t("name"), val: name, set: setName, type: "text" },
                { ph: t("company"), val: company, set: setCompany, type: "text" },
                { ph: t("email"), val: email, set: setEmail, type: "email" },
              ].map(({ ph, val, set, type }) => (
                <input
                  key={ph}
                  type={type}
                  placeholder={ph}
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
                  className="w-full h-11 px-4 rounded-xl text-sm outline-none"
                  style={{ border: "1px solid var(--border)", color: "var(--text)" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--purple)"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                />
              ))}
            </div>
            {status === "error" && <p className="mt-3 text-sm text-red-500">{t("error")}</p>}
            <button
              onClick={handleSubmit}
              disabled={status === "loading" || !email || !name}
              className="mt-5 w-full h-11 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "var(--purple)" }}
            >
              {status === "loading" ? t("submitting") : t("submit")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
