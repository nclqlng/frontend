"use client";

import { useTheme } from "@/context/ThemeContext";
import {
  Mail,
  ArrowRight,
  FileText,
  BookOpen,
  Sparkles,
  ClipboardList,
  ExternalLink,
  Download,
} from "lucide-react";

type ResourceLink = {
  title: string;
  url: string;
  icon: React.ElementType;
  description?: string;
};

const guideResources: ResourceLink[] = [
  {
    title: "QUICK GUIDE: USING LIVE BRIGHTER PORTAL",
    url: "https://drive.google.com/file/d/1ugmn_eoQx4xFR0XECh0Zik1USDBX9gbu/view",
    icon: BookOpen,
    description: "Step-by-step walkthrough of the portal",
  },
  {
    title: "LIVE BRIGHTER PORTAL",
    url: "https://drive.google.com/file/d/1Eeb8ozSpJZfXYZJmfALXmRUw8wDKjbN9/view",
    icon: BookOpen,
    description: "Overview and navigation guide",
  },
  {
    title: "ADVISOR CANDIDATE GUIDE",
    url: "https://drive.google.com/file/d/1pHN2nEsC6nWrVl6TnP9HqCm4CaP0bKHe/view",
    icon: BookOpen,
    description: "Complete onboarding resource for candidates",
  },
];

export default function LiveBrighterPortalGuide() {
  const { darkMode } = useTheme();

  const Card = ({ icon: Icon, title, highlight, children }: any) => (
    <div
      className={`relative h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-11 w-11 rounded-xl bg-yellow-400 flex items-center justify-center text-black">
          <Icon size={18} />
        </div>

        <h3
          className={`text-sm font-black uppercase leading-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
          {highlight && (
            <span className="block text-yellow-500">{highlight}</span>
          )}
        </h3>
      </div>

      {children}
    </div>
  );

  return (
    <div className="w-full space-y-12">

      {/* ================= HEADER ================= */}
      <div className="text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-1.5">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
            Getting Started
          </span>
        </div>

        <h2
            className={`mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
            }`}
            >
            Live{" "}
            <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Brighter
                </span>

                {/* glow underline */}
                <span
                className="absolute -bottom-1 left-0 h-3 w-full bg-yellow-400/30 blur-sm"
                aria-hidden
                />
            </span>{" "}
            Portal
        </h2>
        <p
          className={`mx-auto mt-4 max-w-3xl text-sm leading-7 ${
            darkMode ? "text-white/60" : "text-slate-600"
          }`}
        >
          A structured onboarding journey for advisor account creation and application completion.
        </p>

        <div className="mx-auto mt-8 h-px w-72 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      </div>

      {/* ================= PROCESS FLOW (FULL WIDTH) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-2">

        {/* STEP 1 */}
        <Card icon={Mail} title="REGISTER & CREATE" highlight="ACCOUNT">
          <p className="text-xs text-slate-600 dark:text-white/60 mb-4">
            Start by accessing your invitation email and creating your Live Brighter account.
          </p>

          <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black hover:bg-yellow-500 transition">
            GET STARTED <ArrowRight size={16} />
          </button>
        </Card>

        {/* STEP 2 */}
        <Card icon={ClipboardList} title="ACCOMPLISH" highlight="ONLINE APPLICATION">
          <p className="text-xs text-slate-600 dark:text-white/60">
            Log in and complete all required details in{" "}
            <span className="text-yellow-500 font-semibold">Profile Assessment</span>.
            It contains <span className="font-semibold">5 Tabs</span> and multiple
            information cards that must be completed.
          </p>
        </Card>

        {/* STEP 3 - FULL REQUIREMENTS */}
        <Card icon={FileText} title="COMPLETION OF" highlight="REQUIREMENTS">
          <div className="space-y-4 text-xs">

            {/* TRAD */}
            <div className="border-b border-yellow-400/10 pb-3">
              <p className="font-bold">CA Form (TRAD)</p>
              <p className="text-[10px] text-slate-500 dark:text-white/50">
                Traditional life insurance application form
              </p>
              <span className="text-[9px] font-bold text-yellow-500">TRAD</span>
            </div>

            {/* VUL */}
            <div className="border-b border-yellow-400/10 pb-3">
              <p className="font-bold">CA Form (VUL)</p>
              <p className="text-[10px] text-slate-500 dark:text-white/50">
                Variable Universal Life insurance application form
              </p>
              <span className="text-[9px] font-bold text-yellow-500">VUL</span>
            </div>

            {/* GUIDE */}
            <div>
              <p className="font-bold">Quick Guide</p>
              <p className="text-[10px] text-slate-500 dark:text-white/50">
                Step-by-step instructions for completing CA forms
              </p>
              <span className="text-[9px] font-bold text-yellow-500">GUIDE</span>
            </div>

          </div>
        </Card>

        {/* STEP 4 - VISUAL END STATE */}
        <Card icon={Download} title="SUBMIT & REVIEW" highlight="READY">
          <p className="text-xs text-slate-600 dark:text-white/60">
            Ensure all requirements are completed and ready for final submission and validation.
          </p>

          <div className="mt-4 h-10 w-full rounded-lg bg-yellow-400/10 flex items-center justify-center text-[10px] text-yellow-500 font-bold">
            COMPLETION STAGE
          </div>
        </Card>

      </div>

      {/* ================= HELPFUL RESOURCES (FULL WIDTH SEPARATE) ================= */}
      <div
        className={`w-full rounded-2xl border p-6 ${
          darkMode
            ? "border-yellow-400/20 bg-white/[0.02]"
            : "border-yellow-200 bg-yellow-50/30"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-yellow-400/30" />

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-yellow-500">
            <Download size={12} />
            Helpful Resources
          </div>

          <div className="h-px flex-1 bg-yellow-400/30" />
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {guideResources.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className={`group rounded-xl border p-4 transition hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-400 group-hover:text-black transition">
                    <Icon size={16} />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase">
                      {item.title}
                    </p>
                    <p className="text-[10px] opacity-60 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <ExternalLink size={12} className="opacity-40" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-[10px] opacity-50 pb-6">
        Need assistance? Contact your Unit Manager or Support Team
      </div>

    </div>
  );
}