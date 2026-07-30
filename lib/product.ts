export type Product = "erp" | "crm";

export const ERP_MODULES = ["wms", "scm", "mes", "pos", "backup"] as const;
export const CRM_MODULES = ["sales", "service", "analytics", "marketing", "integrations"] as const;

export function productModules(product: Product) {
  return product === "erp" ? ERP_MODULES : CRM_MODULES;
}
