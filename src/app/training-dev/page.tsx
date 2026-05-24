"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  BookOpen,
  FileText,
  Shield,
  CreditCard,
  Building2,
  Activity,
  CheckCircle2,
} from "lucide-react";

/* ================= MODULE IMPORTS ================= */
import ProductGuide from "@/components/modules/ProductGuide";

/* ================= MODULE DATA ================= */
const trainingItems = [
  { label: "PRODUCT GUIDE", icon: BookOpen, key: "product-guide" },
  { label: "PRODUCT COMPETITIVE ANALYSIS", icon: Activity, key: "competitive-analysis" },
  { label: "MEDICAL, FOREIGN & OCCUPATIONAL GUIDELINES", icon: Shield, key: "medical-guidelines" },
  { label: "SUBMITTING APP ONLINE", icon: FileText, key: "submit-app" },
  { label: "ADVISORS HOME OFFICE (AHO)", icon: Building2, key: "aho" },
  { label: "REMOTE POLICY SERVICING", icon: FileText, key: "policy-servicing" },
  { label: "PAYMENT CHANNEL", icon: CreditCard, key: "payment-channel" },
  { label: "REMOTE ONLINE MEDICAL EXAMINATION (R.O.M.E)", icon: Activity, key: "rome" },
  { label: "POLICY DELIVERY VIA COURIER", icon: Building2, key: "courier" },
  { label: "SLAMCI", icon: Shield, key: "slamci" },
  { label: "NEW BUSINESS & UNDERWRITING ESSENTIALS", icon: BookOpen, key: "underwriting" },
  { label: "CLAIMS ESSENTIALS", icon: FileText, key: "claims" },
  { label: "bRIGHT WAYS OF DOING BUSINESS", icon: Activity, key: "bright-ways" },
  { label: "e-BOOKS", icon: BookOpen, key: "ebooks" },
];

/* ================= MODULE RENDERER ================= */
function renderModule(key: string) {
  switch (key) {
    case "product-guide":
      return <ProductGuide />;

    default:
      return (
        <div className="flex h-full min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500">
              <Activity size={26} />
            </div>

            <h3 className="text-lg font-bold">Module Content Coming Soon</h3>

            <p className="mt-3 text-sm text-slate-500 dark:text-white/50">
              This learning module is currently being prepared for deployment.
            </p>
          </div>
        </div>
      );
  }
}

/* ================= PAGE ================= */
export default function TrainingDev() {
  const { darkMode } = useTheme();
  const [activeModule, setActiveModule] = useState(trainingItems[0]);

  return (
    <div
      className={`relative flex min-h-screen flex-col overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#050816] text-white" : "bg-[#f8fafc] text-[#0f172a]"
      }`}
    >
      <Header />

      {/* =================  BACKGROUND  ================= */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

{/* subtle top wash (reduced gold intensity) */}
<div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent" />

{/* MAIN SOFT AURA */}
<div className="absolute left-1/2 top-1/3 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-white/5 blur-[220px] dark:bg-yellow-400/5" />

{/* SECONDARY DEPTH */}
<div className="absolute bottom-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-slate-500/10 blur-[180px]" />

{/* SOFT LEFT GLOW */}
<div className="absolute -left-40 top-20 h-[420px] w-[420px] rotate-45 bg-yellow-400/5 blur-3xl" />

{/* VERY SUBTLE ACCENTS */}
<div className="absolute left-20 top-28 h-1.5 w-1.5 rounded-full bg-yellow-300/20 animate-pulse" />
<div className="absolute right-28 top-1/2 h-1.5 w-1.5 rounded-full bg-white/20 animate-bounce" />
<div className="absolute bottom-28 left-1/3 h-1.5 w-1.5 rounded-full bg-yellow-400/20 animate-ping" />

{/* ───────────────────────────── */}
{/* NEW: SUN LIFE STYLE ELEMENTS */}
{/* ───────────────────────────── */}

{/* soft structured grid (finance / system feel) */}
<div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />

{/* subtle radial sun rays */}
<div className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.04] bg-[conic-gradient(from_0deg,transparent,rgba(250,204,21,0.4),transparent)] blur-2xl" />

{/* orbit ring (system / trust / “global network” feel) */}
<div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/10" />

{/* second orbit ring */}
<div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

{/* glass highlight streak */}
<div className="absolute top-1/4 left-[-10%] h-[2px] w-[60%] rotate-[-12deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

{/* floating micro nodes (structured “network” feel) */}
<div className="absolute top-40 right-1/4 h-2 w-2 rounded-full bg-yellow-300/20" />
<div className="absolute bottom-40 right-1/3 h-2 w-2 rounded-full bg-white/20" />
<div className="absolute top-1/2 left-1/4 h-2 w-2 rounded-full bg-yellow-200/20" />


</div>

      {/* ================= MAIN ================= */}
      <main className="relative px-6 pb-36 pt-44">

        {/* ================= HERO ================= */}
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.55em] text-yellow-500">
            Training & Development Hub
          </p>

          {/*  FIXED H1 STYLE */}
        <h1
          className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
            darkMode ? "text-white" : "text-[#0f172a]"
          }`}
        >
          Empowering Excellence
          <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">            Through Knowledge Systems
          </span>
        </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
              darkMode ? "text-white/60" : "text-slate-600"
            }`}
          >
            A centralized learning ecosystem designed to strengthen
            performance, discipline, leadership, and operational excellence
            across the organization.
          </p>

          <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
        </div>

        {/* ================= GRID ================= */}
        <div className="mx-auto mt-28 grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">

          {/* LEFT */}
          <div className="lg:col-span-5">

            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-yellow-500">
                Learning Modules
              </p>

              <p className={`text-xs ${darkMode ? "text-white/40" : "text-slate-500"}`}>
                Select a module
              </p>
            </div>

            <div className="space-y-5">

              {trainingItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeModule.key === item.key;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveModule(item)}
                    className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isActive
                        ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/10"
                        : darkMode
                        ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                        : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {isActive && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400" />
                    )}

                    <div className="relative flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-bold leading-6">
                          {item.label}
                        </p>

                        <p className={`mt-1 text-xs ${darkMode ? "text-white/40" : "text-slate-500"}`}>
                          Internal learning resource
                        </p>
                      </div>

                    </div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">

            <div className="sticky top-32">

              <div className={`relative overflow-hidden rounded-[32px] border p-8 lg:p-10 ${
                darkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-200 bg-white shadow-2xl"
              }`}>

                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

                <div className="relative mb-8 flex items-center justify-between">

                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-yellow-500" />
                      <p className="text-xs font-bold uppercase tracking-[0.45em] text-yellow-500">
                        Module Content
                      </p>
                    </div>

                    <h2 className="text-2xl font-black">
                      {activeModule.label}
                    </h2>
                  </div>

                </div>

                <div className="relative">
                  {renderModule(activeModule.key)}
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}