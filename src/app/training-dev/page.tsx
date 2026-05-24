"use client";

import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, FileText, Shield, CreditCard, Building2, Activity } from "lucide-react";

const trainingItems = [
  { label: "PRODUCT GUIDE", icon: BookOpen },
  { label: "PRODUCT COMPETITIVE ANALYSIS", icon: Activity },
  { label: "MEDICAL, FOREIGN & OCCUPATIONAL GUIDELINES", icon: Shield },
  { label: "SUBMITTING APP ONLINE", icon: FileText },
  { label: "ADVISORS HOME OFFICE (AHO)", icon: Building2 },
  { label: "REMOTE POLICY SERVICING", icon: FileText },
  { label: "PAYMENT CHANNEL", icon: CreditCard },
  { label: "REMOTE ONLINE MEDICAL EXAMINATION (R.O.M.E)", icon: Activity },
  { label: "POLICY DELIVERY VIA COURIER", icon: Building2 },
  { label: "SLAMCI", icon: Shield },
  { label: "NEW BUSINESS & UNDERWRITING ESSENTIALS", icon: BookOpen },
  { label: "CLAIMS ESSENTIALS", icon: FileText },
  { label: "bRIGHT WAYS OF DOING BUSINESS", icon: Activity },
  { label: "e-BOOKS", icon: BookOpen },
];

export default function TrainingDev() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-[#050816] text-white" : "bg-white text-[#0f172a]"
      }`}
    >
      <Header />

      {/* ================= PREMIUM BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />
      </div>

      {/* ================= MAIN ================= */}
      <main className="relative pt-44 pb-36 px-6">

        {/* ================= HERO ================= */}
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-500">
            Training & Development Hub
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Empowering Excellence
            <span className="block text-yellow-500">
              Through Knowledge Systems
            </span>
          </h1>

          <p className={`mt-6 text-sm leading-7 ${
            darkMode ? "text-white/60" : "text-slate-600"
          }`}>
            A centralized learning environment designed to strengthen discipline,
            performance, and leadership across all business operations.
          </p>

          {/* PREMIUM DIVIDER */}
          <div className="mx-auto mt-10 h-px w-52 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
        </div>

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mt-28 max-w-6xl">

          <div className="flex items-center justify-between mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-500">
              Learning Modules
            </p>

            <p className={`text-xs ${
              darkMode ? "text-white/40" : "text-slate-500"
            }`}>
              Internal Knowledge System
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {trainingItems.map((item, i) => {
              const Icon = item.icon;

              return (
                <button
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                      : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  {/* glow layer */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-yellow-400/10 to-transparent" />

                  {/* icon */}
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
                      <Icon size={18} />
                    </div>

                    <p className="text-sm font-semibold leading-6">
                      {item.label}
                    </p>
                  </div>

                  {/* animated underline */}
                  <div className="mt-4 h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}