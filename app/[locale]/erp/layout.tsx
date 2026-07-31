import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { PRODUCTS } from "@/lib/brand";

export const metadata: Metadata = {
  title: "DFlowERP — Модулна ERP система",
  description: "Self-hosted ERP система с WMS, SCM, MES, POS и Backup модули.",
  icons: {
    icon: PRODUCTS.erp.favicon,
  },
};

export default function ErpLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={
        {
          "--brand-color": PRODUCTS.erp.color,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
