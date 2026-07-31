import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { PRODUCTS } from "@/lib/brand";

export const metadata: Metadata = {
  title: "DFlowCRM — Self-hosted CRM",
  description: "Self-hosted CRM система за продажби, обслужване и маркетинг.",
  icons: {
    icon: PRODUCTS.crm.favicon,
  },
};

export default function CrmLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={
        {
          "--brand-color": PRODUCTS.crm.color,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
