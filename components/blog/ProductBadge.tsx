import type { BlogProduct } from "@/lib/blog";
import { PRODUCTS } from "@/lib/brand";

const LABELS: Record<BlogProduct, { bg: string; en: string }> = {
  erp: { bg: "DFlowERP", en: "DFlowERP" },
  crm: { bg: "DFlowCRM", en: "DFlowCRM" },
  general: { bg: "Общо", en: "General" },
};

export default function ProductBadge({
  product,
  locale = "bg",
}: {
  product: BlogProduct;
  locale?: string;
}) {
  const color =
    product === "general" ? "#6b7280" : PRODUCTS[product].color;
  const label = locale === "en" ? LABELS[product].en : LABELS[product].bg;

  return (
    <span
      className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
      style={{
        color,
        background: `color-mix(in srgb, ${color} 12%, white)`,
      }}
    >
      {label}
    </span>
  );
}
