import type { Product } from "@/lib/product";

export interface DashboardMockupData {
  title: string;
  metrics: [
    { label: string; value: string; bar: "green" | "brand" | "amber" },
    { label: string; value: string; bar: "green" | "brand" | "amber" },
    { label: string; value: string; bar: "green" | "brand" | "amber" },
    { label: string; value: string; featured: true },
  ];
  chartTitle: string;
  activityTitle: string;
  activity: { title: string; time: string }[];
  tableHeaders: [string, string, string, string];
  tableRows: {
    col1: string;
    col2: string;
    col3: string;
    status: { label: string; tone: "ok" | "warn" };
  }[];
}

export const ERP_DASHBOARD: DashboardMockupData = {
  title: "Склад — Преглед",
  metrics: [
    { label: "Артикули", value: "2 481", bar: "green" },
    { label: "Наличност", value: "94.2%", bar: "brand" },
    { label: "Движения", value: "138", bar: "amber" },
    { label: "Задачи", value: "7", featured: true },
  ],
  chartTitle: "Входящи / Изходящи",
  activityTitle: "Активност",
  activity: [
    { title: "Приемане #4421", time: "преди 3 мин" },
    { title: "Експедиция #4418", time: "преди 12 мин" },
    { title: "Инвентар Z-3", time: "преди 1 час" },
    { title: "Трансфер #4415", time: "преди 2 часа" },
  ],
  tableHeaders: ["АРТИКУЛ", "КОД", "КОЛИЧЕСТВО", "СТАТУС"],
  tableRows: [
    { col1: "Хидравлична помпа", col2: "HP-2240", col3: "42 бр.", status: { label: "OK", tone: "ok" } },
    { col1: "Ремъчна предавка", col2: "RG-8810", col3: "7 бр.", status: { label: "МАЛКО", tone: "warn" } },
    { col1: "Уплътнение A-type", col2: "UA-1102", col3: "186 бр.", status: { label: "OK", tone: "ok" } },
  ],
};

export const CRM_DASHBOARD: DashboardMockupData = {
  title: "Продажби — Преглед",
  metrics: [
    { label: "Активни сделки", value: "34", bar: "green" },
    { label: "Конверсия", value: "28.6%", bar: "brand" },
    { label: "Нови лийдове", value: "52", bar: "amber" },
    { label: "Задачи", value: "9", featured: true },
  ],
  chartTitle: "Нови сделки по седмица",
  activityTitle: "Активност",
  activity: [
    { title: "Нова сделка #234", time: "преди 5 мин" },
    { title: "Обаждане приключено", time: "преди 18 мин" },
    { title: "Имейл изпратен", time: "преди 40 мин" },
    { title: "Сделка спечелена #229", time: "преди 2 часа" },
  ],
  tableHeaders: ["КЛИЕНТ", "СТОЙНОСТ", "ЕТАП", "СТАТУС"],
  tableRows: [
    { col1: "Технополис ЕООД", col2: "€4 200", col3: "Преговори", status: { label: "OK", tone: "ok" } },
    { col1: "Импулс Трейд", col2: "€1 850", col3: "Оферта", status: { label: "ЧАКА", tone: "warn" } },
    { col1: "Derma Beauty", col2: "€6 400", col3: "Затворена", status: { label: "OK", tone: "ok" } },
  ],
};

const DASHBOARDS: Record<Product, DashboardMockupData> = {
  erp: ERP_DASHBOARD,
  crm: CRM_DASHBOARD,
};

const BAR_FILL: Record<"green" | "brand" | "amber", string> = {
  green: "#dcfce7",
  brand: "var(--brand-faint)",
  amber: "#fef9c3",
};

const BAR_WIDTHS = [30, 42, 24];

const CHART_HEIGHTS = [30, 22, 45, 35, 38, 28, 55, 40, 42, 32, 60, 48, 48, 36];

export default function DashboardMockup({ product }: { product: Product }) {
  const data = DASHBOARDS[product];
  const [m0, m1, m2, m3] = data.metrics;

  return (
    <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="520" height="380" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
      <rect width="520" height="36" rx="12" fill="#f3f4f6"/>
      <rect y="24" width="520" height="12" fill="#f3f4f6"/>
      <circle cx="16" cy="18" r="5" fill="#fca5a5"/>
      <circle cx="30" cy="18" r="5" fill="#fcd34d"/>
      <circle cx="44" cy="18" r="5" fill="#86efac"/>
      <rect x="0" y="36" width="110" height="344" fill="#faf9ff"/>
      <rect x="8" y="66" width="94" height="22" rx="6" fill="var(--brand-faint)" opacity="0.6"/>
      <rect x="8" y="66" width="3" height="22" rx="1.5" fill="var(--brand-color)"/>
      <rect x="12" y="54" width="86" height="8" rx="4" fill="var(--brand-faint)"/>
      <rect x="12" y="72" width="70" height="7" rx="3.5" fill="var(--brand-muted)"/>
      <rect x="12" y="89" width="78" height="7" rx="3.5" fill="#e5e7eb"/>
      <rect x="12" y="106" width="65" height="7" rx="3.5" fill="#e5e7eb"/>
      <rect x="12" y="123" width="72" height="7" rx="3.5" fill="#e5e7eb"/>
      <rect x="12" y="140" width="68" height="7" rx="3.5" fill="#e5e7eb"/>

      <text x="128" y="62" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#111827">{data.title}</text>
      <rect x="400" y="50" width="60" height="20" rx="5" fill="var(--brand-color)"/>
      <rect x="468" y="50" width="40" height="20" rx="5" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1"/>

      {/* Metric cards */}
      <rect x="120" y="80" width="90" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="132" y="100" fontFamily="system-ui" fontSize="7" fill="#6b7280">{m0.label}</text>
      <text x="132" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#111827">{m0.value}</text>
      <rect x="132" y="124" width={BAR_WIDTHS[0]} height="4" rx="2" fill={BAR_FILL[m0.bar]}/>

      <rect x="220" y="80" width="90" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="232" y="100" fontFamily="system-ui" fontSize="7" fill="#6b7280">{m1.label}</text>
      <text x="232" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#111827">{m1.value}</text>
      <rect x="232" y="124" width={BAR_WIDTHS[1]} height="4" rx="2" fill={BAR_FILL[m1.bar]}/>

      <rect x="320" y="80" width="90" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="332" y="100" fontFamily="system-ui" fontSize="7" fill="#6b7280">{m2.label}</text>
      <text x="332" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#111827">{m2.value}</text>
      <rect x="332" y="124" width={BAR_WIDTHS[2]} height="4" rx="2" fill={BAR_FILL[m2.bar]}/>

      <rect x="420" y="80" width="88" height="56" rx="8" fill="var(--brand-color)"/>
      <text x="432" y="100" fontFamily="system-ui" fontSize="7" fill="var(--brand-muted)">{m3.label}</text>
      <text x="432" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="white">{m3.value}</text>
      <rect x="432" y="124" width="20" height="4" rx="2" fill="var(--brand-soft)"/>

      {/* Chart */}
      <rect x="120" y="148" width="244" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="132" y="166" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#111827">{data.chartTitle}</text>
      {CHART_HEIGHTS.map((h, i) => (
        <rect
          key={i}
          x={132 + i * 13.5}
          y={172}
          width="11"
          height={h}
          rx="2"
          fill={i % 2 === 0 ? "var(--brand-color)" : "var(--brand-faint)"}
          opacity={i % 2 === 0 ? 0.7 : 1}
        />
      ))}

      {/* Activity */}
      <rect x="374" y="148" width="134" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="386" y="166" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#111827">{data.activityTitle}</text>
      {data.activity.map((item, i) => {
        const y = 180 + i * 22;
        return (
          <g key={i}>
            <circle cx="390" cy={y} r="3" fill="var(--brand-faint)"/>
            <circle cx="390" cy={y} r="1.5" fill="var(--brand-color)"/>
            <text x="398" y={y + 3} fontFamily="system-ui" fontSize="7" fill="#111827">{item.title}</text>
            <text x="398" y={y + 13} fontFamily="system-ui" fontSize="6" fill="#9ca3af">{item.time}</text>
          </g>
        );
      })}

      {/* Table */}
      <rect x="120" y="280" width="388" height="76" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <rect x="120" y="280" width="388" height="20" rx="8" fill="#f9fafb"/>
      <rect x="120" y="292" width="388" height="8" fill="#f9fafb"/>
      <text x="132" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">{data.tableHeaders[0]}</text>
      <text x="260" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">{data.tableHeaders[1]}</text>
      <text x="340" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">{data.tableHeaders[2]}</text>
      <text x="440" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">{data.tableHeaders[3]}</text>
      {data.tableRows.map((row, i) => {
        const y = 313 + i * 14;
        const badgeY = 305 + i * 14;
        const isWarn = row.status.tone === "warn";
        return (
          <g key={i}>
            <text x="132" y={y} fontFamily="system-ui" fontSize="7.5" fill="#111827">{row.col1}</text>
            <text x="260" y={y} fontFamily="system-ui" fontSize="7.5" fill="#6b7280">{row.col2}</text>
            <text x="340" y={y} fontFamily="system-ui" fontSize="7.5" fill="#111827">{row.col3}</text>
            <rect x="435" y={badgeY} width={isWarn ? 36 : 32} height="12" rx="4" fill={isWarn ? "#fef9c3" : "#dcfce7"}/>
            <text x="438" y={badgeY + 9} fontFamily="system-ui" fontSize="6" fontWeight="600" fill={isWarn ? "#854d0e" : "#166534"}>
              {row.status.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
