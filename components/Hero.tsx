"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TrialModal from "./TrialModal";

function DashboardMockup() {
  return (
    <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="520" height="380" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
      <rect width="520" height="36" rx="12" fill="#f3f4f6"/>
      <rect y="24" width="520" height="12" fill="#f3f4f6"/>
      <circle cx="16" cy="18" r="5" fill="#fca5a5"/>
      <circle cx="30" cy="18" r="5" fill="#fcd34d"/>
      <circle cx="44" cy="18" r="5" fill="#86efac"/>
      <rect x="0" y="36" width="110" height="344" fill="#faf9ff"/>
      <rect x="8" y="66" width="94" height="22" rx="6" fill="#ede9fe" opacity="0.6"/>
      <rect x="8" y="66" width="3" height="22" rx="1.5" fill="#7c3aed"/>
      <rect x="12" y="54" width="86" height="8" rx="4" fill="#ede9fe"/>
      <rect x="12" y="72" width="70" height="7" rx="3.5" fill="#ddd6fe"/>
      <rect x="12" y="89" width="78" height="7" rx="3.5" fill="#e5e7eb"/>
      <rect x="12" y="106" width="65" height="7" rx="3.5" fill="#e5e7eb"/>
      <rect x="12" y="123" width="72" height="7" rx="3.5" fill="#e5e7eb"/>
      <rect x="12" y="140" width="68" height="7" rx="3.5" fill="#e5e7eb"/>
      <text x="128" y="62" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#111827">Склад — Преглед</text>
      <rect x="400" y="50" width="60" height="20" rx="5" fill="#7c3aed"/>
      <rect x="468" y="50" width="40" height="20" rx="5" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1"/>
      <rect x="120" y="80" width="90" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="132" y="100" fontFamily="system-ui" fontSize="7" fill="#6b7280">Артикули</text>
      <text x="132" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#111827">2 481</text>
      <rect x="132" y="124" width="30" height="4" rx="2" fill="#dcfce7"/>
      <rect x="220" y="80" width="90" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="232" y="100" fontFamily="system-ui" fontSize="7" fill="#6b7280">Наличност</text>
      <text x="232" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#111827">94.2%</text>
      <rect x="232" y="124" width="42" height="4" rx="2" fill="#ede9fe"/>
      <rect x="320" y="80" width="90" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="332" y="100" fontFamily="system-ui" fontSize="7" fill="#6b7280">Движения</text>
      <text x="332" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#111827">138</text>
      <rect x="332" y="124" width="24" height="4" rx="2" fill="#fef9c3"/>
      <rect x="420" y="80" width="88" height="56" rx="8" fill="#7c3aed"/>
      <text x="432" y="100" fontFamily="system-ui" fontSize="7" fill="#ddd6fe">Задачи</text>
      <text x="432" y="116" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="white">7</text>
      <rect x="432" y="124" width="20" height="4" rx="2" fill="#a78bfa"/>
      <rect x="120" y="148" width="244" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="132" y="166" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#111827">Входящи / Изходящи</text>
      <rect x="132" y="172" width="11" height="30" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="145" y="172" width="11" height="22" rx="2" fill="#ede9fe"/>
      <rect x="162" y="172" width="11" height="45" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="175" y="172" width="11" height="35" rx="2" fill="#ede9fe"/>
      <rect x="192" y="172" width="11" height="38" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="205" y="172" width="11" height="28" rx="2" fill="#ede9fe"/>
      <rect x="222" y="172" width="11" height="55" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="235" y="172" width="11" height="40" rx="2" fill="#ede9fe"/>
      <rect x="252" y="172" width="11" height="42" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="265" y="172" width="11" height="32" rx="2" fill="#ede9fe"/>
      <rect x="282" y="172" width="11" height="60" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="295" y="172" width="11" height="48" rx="2" fill="#ede9fe"/>
      <rect x="312" y="172" width="11" height="48" rx="2" fill="#7c3aed" opacity="0.7"/>
      <rect x="325" y="172" width="11" height="36" rx="2" fill="#ede9fe"/>
      <rect x="120" y="280" width="388" height="76" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <rect x="120" y="280" width="388" height="20" rx="8" fill="#f9fafb"/>
      <rect x="120" y="292" width="388" height="8" fill="#f9fafb"/>
      <text x="132" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">АРТИКУЛ</text>
      <text x="260" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">КОД</text>
      <text x="340" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">КОЛИЧЕСТВО</text>
      <text x="440" y="294" fontFamily="system-ui" fontSize="7" fontWeight="600" fill="#6b7280">СТАТУС</text>
      <text x="132" y="313" fontFamily="system-ui" fontSize="7.5" fill="#111827">Хидравлична помпа</text>
      <text x="260" y="313" fontFamily="system-ui" fontSize="7.5" fill="#6b7280">HP-2240</text>
      <text x="340" y="313" fontFamily="system-ui" fontSize="7.5" fill="#111827">42 бр.</text>
      <rect x="435" y="305" width="32" height="12" rx="4" fill="#dcfce7"/>
      <text x="438" y="314" fontFamily="system-ui" fontSize="6" fontWeight="600" fill="#166534">OK</text>
      <text x="132" y="327" fontFamily="system-ui" fontSize="7.5" fill="#111827">Ремъчна предавка</text>
      <text x="260" y="327" fontFamily="system-ui" fontSize="7.5" fill="#6b7280">RG-8810</text>
      <text x="340" y="327" fontFamily="system-ui" fontSize="7.5" fill="#111827">7 бр.</text>
      <rect x="435" y="319" width="32" height="12" rx="4" fill="#fef9c3"/>
      <text x="438" y="328" fontFamily="system-ui" fontSize="6" fontWeight="600" fill="#854d0e">МАЛКО</text>
      <text x="132" y="341" fontFamily="system-ui" fontSize="7.5" fill="#111827">Уплътнение A-type</text>
      <text x="260" y="341" fontFamily="system-ui" fontSize="7.5" fill="#6b7280">UA-1102</text>
      <text x="340" y="341" fontFamily="system-ui" fontSize="7.5" fill="#111827">186 бр.</text>
      <rect x="435" y="333" width="32" height="12" rx="4" fill="#dcfce7"/>
      <text x="438" y="342" fontFamily="system-ui" fontSize="6" fontWeight="600" fill="#166534">OK</text>
      <rect x="374" y="148" width="134" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
      <text x="386" y="166" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#111827">Активност</text>
      <circle cx="390" cy="180" r="3" fill="#ede9fe"/>
      <circle cx="390" cy="180" r="1.5" fill="#7c3aed"/>
      <text x="398" y="183" fontFamily="system-ui" fontSize="7" fill="#111827">Приемане #4421</text>
      <text x="398" y="193" fontFamily="system-ui" fontSize="6" fill="#9ca3af">преди 3 мин</text>
      <circle cx="390" cy="202" r="3" fill="#ede9fe"/>
      <circle cx="390" cy="202" r="1.5" fill="#7c3aed"/>
      <text x="398" y="205" fontFamily="system-ui" fontSize="7" fill="#111827">Експедиция #4418</text>
      <text x="398" y="215" fontFamily="system-ui" fontSize="6" fill="#9ca3af">преди 12 мин</text>
      <circle cx="390" cy="224" r="3" fill="#ede9fe"/>
      <circle cx="390" cy="224" r="1.5" fill="#7c3aed"/>
      <text x="398" y="227" fontFamily="system-ui" fontSize="7" fill="#111827">Инвентар Z-3</text>
      <text x="398" y="237" fontFamily="system-ui" fontSize="6" fill="#9ca3af">преди 1 час</text>
      <circle cx="390" cy="246" r="3" fill="#ede9fe"/>
      <circle cx="390" cy="246" r="1.5" fill="#7c3aed"/>
      <text x="398" y="249" fontFamily="system-ui" fontSize="7" fill="#111827">Трансфер #4415</text>
      <text x="398" y="259" fontFamily="system-ui" fontSize="6" fill="#9ca3af">преди 2 часа</text>
    </svg>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg)" }}>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "var(--purple-faint)", color: "var(--purple)" }}>
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--text)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                {t("title")}
              </h1>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "440px" }}>
                {t("subtitle")}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center h-11 px-6 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "var(--purple)" }}
                >
                  {t("cta_primary")}
                </button>
                <a
                  href="#onpremise"
                  className="flex items-center h-11 px-5 rounded-xl text-sm font-medium transition-all hover:bg-gray-50"
                  style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                >
                  {t("cta_secondary")}
                </a>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#a78bfa","#818cf8","#60a5fa","#34d399"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>120+</span> компании използват DFlowERP
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)", boxShadow: "0 25px 60px rgba(124,58,237,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}
              >
                <DashboardMockup />
              </div>
              <div
                className="absolute -bottom-4 -left-4 flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-lg"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium" style={{ color: "var(--text)" }}>On-premise · Вашите данни</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
