export const PRODUCTS = {
  erp: {
    name: "ERP",
    color: "#6028F5",
    icon: "/brand/icon-erp-clean.png",
    favicon: "/brand/favicon-erp-clean.ico",
  },
  crm: {
    name: "CRM",
    color: "#F51D2F",
    icon: "/brand/icon-crm-red.png",
    favicon: "/brand/favicon-crm-red.ico",
  },
} as const;

export type BrandProduct = keyof typeof PRODUCTS;

export const HUB_BRAND = {
  name: "Hub",
  color: "#111827",
} as const;
