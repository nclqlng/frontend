"use client";

import { useTheme } from "@/context/ThemeContext";
import {
  Sparkles,
  FileText,
  Lock,
  ExternalLink,
  Download,
  BookOpen,
} from "lucide-react";

type CardItem = {
  title: string;
  subtitle: string;
  badge: "PDF" | "LOCKED";
  url: string;
  mediaType: "pdf" | "gif";
  media?: string;
};

const trainingPdfs: CardItem[] = [
  // 1️⃣ PDF (MAIN FRONT PAGE)
  {
    title: "Insurance Concepts (TRAD & VUL)",
    subtitle: "Core reviewer for TRAD & VUL insurance concepts",
    badge: "PDF",
    url: "https://drive.google.com/file/d/1czpHTjRHL6zOMCM5IFgmQ7dKX1NE1kme/view",
    mediaType: "pdf",
  },

  // 2️⃣ TRAD GIF
  {
    title: "TRAD Insurance Concepts",
    subtitle: "Traditional insurance training walkthrough",
    badge: "LOCKED",
    url: "https://sso.sunlife.com.ph/login/login.htm",
    mediaType: "gif",
    media: "/centurion-assets/trad.gif",
  },

  // 3️⃣ VUL GIF
  {
    title: "VUL Insurance Concepts",
    subtitle: "Variable Universal Life training walkthrough",
    badge: "LOCKED",
    url: "https://sso.sunlife.com.ph/login/login.htm",
    mediaType: "gif",
    media: "/centurion-assets/vul.gif",
  },
];

export default function TrainingReviewer({
  darkMode,
}: {
  darkMode?: boolean;
}) {
  const themeDark = darkMode ?? false;

  return (
    <section className="mt-16 space-y-10">

      {/* HEADER */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
            Training Reviewer
          </span>
        </div>

        <h2 className={`mt-6 text-4xl font-black ${
          themeDark ? "text-white" : "text-slate-900"
        }`}>
          Insurance Concepts <span className="text-yellow-500">Mastery</span>
        </h2>

        <p className={`mx-auto mt-4 max-w-2xl text-sm leading-7 ${
          themeDark ? "text-white/60" : "text-slate-600"
        }`}>
          Review essential insurance concepts for TRAD and VUL preparation.
        </p>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {trainingPdfs.map((item, i) => {
          const isLocked = item.badge === "LOCKED";
          const Icon = isLocked ? Lock : FileText;

          return (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition hover:-translate-y-1 ${
                themeDark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >

              {/* ================= MEDIA ================= */}
              <div className="h-52 w-full bg-black/5 overflow-hidden">

                {/* 1️⃣ PDF FRONT PAGE (Google Drive Preview) */}
                {item.mediaType === "pdf" && (
                  <iframe
                    src={item.url.replace("/view", "/preview")}
                    className="w-full h-full"
                  />
                )}

                {/* 2️⃣ GIF DISPLAY */}
                {item.mediaType === "gif" && item.media && (
                  <img
                    src={item.media}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5 space-y-4">

                <div className="flex items-start justify-between gap-3">

                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-xl bg-yellow-400 flex items-center justify-center text-black">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3 className={`text-sm font-black uppercase ${
                        themeDark ? "text-white" : "text-slate-900"
                      }`}>
                        {item.title}
                      </h3>

                      <p className="text-[10px] text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* BADGE */}
                  <span className={`text-[9px] px-2 py-1 rounded-full font-bold ${
                    isLocked
                      ? "bg-red-500/10 text-red-500"
                      : "bg-yellow-400/20 text-yellow-600"
                  }`}>
                    {item.badge}
                  </span>

                </div>

                {/* PREVIEW BLOCK */}
                <div className={`rounded-xl border p-3 ${
                  themeDark
                    ? "border-white/10 bg-black/20"
                    : "border-slate-100 bg-slate-50"
                }`}>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-300/30 rounded" />
                    <div className="h-2 w-4/5 bg-slate-300/20 rounded" />
                    <div className="h-2 w-3/5 bg-slate-300/10 rounded" />
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-3">

                  <a
                    href={item.url}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-black hover:bg-yellow-500"
                  >
                    Open <ExternalLink size={14} />
                  </a>

                  <button className="rounded-xl border border-yellow-400/30 px-3 py-2.5 text-yellow-500 hover:bg-yellow-400/10">
                    <Download size={16} />
                  </button>

                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* FOOTNOTE */}
      <div className={`rounded-2xl border p-5 text-xs ${
        themeDark
          ? "border-yellow-400/20 bg-white/[0.02] text-white/60"
          : "border-yellow-200 bg-yellow-50/40 text-slate-600"
      }`}>
        <Lock className="inline mr-2 text-yellow-500" size={16} />
        Some materials require login credentials: <b>sl_brightbox</b>
      </div>

    </section>
  );
}