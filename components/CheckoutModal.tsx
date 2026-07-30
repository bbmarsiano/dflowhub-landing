"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export type BillingType = "monthly" | "annual" | "lifetime";

interface Props {
  product: string;
  billingType: BillingType;
  open: boolean;
  onClose: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CheckoutModal({ product, billingType, open, onClose }: Props) {
  const t = useTranslations("checkout");
  const [tenantName, setTenantName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setTenantName("");
      setEmail("");
      setStatus("idle");
      setErrorMsg("");
    }, 300);
  };

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();
    const trimmedTenant = tenantName.trim();
    if (!trimmedTenant || !trimmedEmail) return;
    if (!EMAIL_RE.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg(t("invalidEmail"));
      return;
    }

    const base = process.env.NEXT_PUBLIC_LICENSE_SERVER_URL;
    if (!base) {
      setStatus("error");
      setErrorMsg(t("error"));
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${base}/functions/v1/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          billingType,
          email: trimmedEmail,
          tenantName: trimmedTenant,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };

      if (!res.ok || data.error || !data.url) {
        setStatus("error");
        setErrorMsg(data.error || t("error"));
        return;
      }

      window.location.href = data.url;
    } catch {
      setStatus("error");
      setErrorMsg(t("error"));
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{ background: "white", boxShadow: "0 25px 60px rgba(0,0,0,0.15)" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          style={{ color: "var(--text-subtle)" }}
          aria-label={t("close")}
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <h2
          className="text-xl font-bold mb-1"
          style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
        >
          {t("title")}
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          {t("subtitle")}
        </p>

        <div className="space-y-3">
          <input
            type="text"
            placeholder={t("company")}
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full h-11 px-4 rounded-xl text-sm outline-none"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--purple)";
              e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.boxShadow = "none";
            }}
          />
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full h-11 px-4 rounded-xl text-sm outline-none"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--purple)";
              e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        {status === "error" && errorMsg && (
          <p className="mt-3 text-sm text-red-500">{errorMsg}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={status === "loading" || !tenantName.trim() || !email.trim()}
          className="mt-5 w-full h-11 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: "var(--purple)" }}
        >
          {status === "loading" ? t("submitting") : t("submit")}
        </button>

        <p className="text-center text-xs mt-3" style={{ color: "var(--text-subtle)" }}>
          {t("stripeNote")}
        </p>
      </div>
    </div>
  );
}
