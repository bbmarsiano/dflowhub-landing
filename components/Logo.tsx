import { PRODUCTS, HUB_BRAND, type BrandProduct } from "@/lib/brand";

interface Props {
  product?: BrandProduct | "hub";
  height?: number;
}

export default function Logo({ product = "hub", height = 28 }: Props) {
  if (product === "hub") {
    return (
      <span
        className="inline-flex items-center font-bold text-base"
        style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
      >
        dFlow
        <span style={{ color: HUB_BRAND.color }}>{HUB_BRAND.name}</span>
      </span>
    );
  }

  const brand = PRODUCTS[product];

  return (
    <span className="inline-flex items-center gap-2">
      <img
        src={brand.icon}
        alt=""
        aria-hidden
        style={{ height, width: height, objectFit: "contain" }}
      />
      <span
        className="font-bold text-base"
        style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
      >
        dFlow
        <span style={{ color: brand.color }}>{brand.name}</span>
      </span>
    </span>
  );
}
