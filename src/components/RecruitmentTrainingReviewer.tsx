"use client";

import { useTheme } from "@/context/ThemeContext";
import {
  FileText,
  Lock,
  ExternalLink,
  Download,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { revealTransitionClass } from "@/components/RevealSection";
import { useInView } from "@/hooks/useInView";

type CardItem = {
  title: string;
  subtitle: string;
  badge: "PDF" | "LOCKED";
  url: string;
  mediaType: "pdf" | "gif";
  media?: string;
  tag?: string;
};

const trainingPdfs: CardItem[] = [
  {
    title: "Insurance Concepts (TRAD & VUL)",
    subtitle: "Core reviewer for TRAD & VUL insurance concepts",
    badge: "PDF",
    url: "https://drive.google.com/file/d/1czpHTjRHL6zOMCM5IFgmQ7dKX1NE1kme/view",
    mediaType: "pdf",
    tag: "REVIEWER",
  },
  {
    title: "TRAD Insurance Concepts",
    subtitle: "Traditional insurance training walkthrough",
    badge: "LOCKED",
    url: "https://sso.sunlife.com.ph/login/login.htm",
    mediaType: "gif",
    media: "/centurion-assets/trad.gif",
    tag: "TRAD",
  },
  {
    title: "VUL Insurance Concepts",
    subtitle: "Variable Universal Life training walkthrough",
    badge: "LOCKED",
    url: "https://sso.sunlife.com.ph/login/login.htm",
    mediaType: "gif",
    media: "/centurion-assets/vul.gif",
    tag: "VUL",
  },
];

type TrainingCardProps = {
  item: CardItem;
  darkMode: boolean;
};

function TrainingCard({
  item,
  darkMode,
  index,
}: TrainingCardProps & { index: number }) {
  const isLocked = item.badge === "LOCKED";
  const Icon: LucideIcon = isLocked ? Lock : FileText;
  const { ref, visible } = useInView<HTMLElement>(0.1);

  return (
    <article
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${revealTransitionClass(visible)} ${
        darkMode
          ? "border-white/10 bg-white/[0.03] hover:border-yellow-400/25 hover:shadow-lg hover:shadow-yellow-400/5"
          : "border-slate-200 bg-white shadow-sm hover:border-yellow-300/60 hover:shadow-lg hover:shadow-slate-200/80"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Media */}
      <div
        className={`relative h-52 w-full overflow-hidden ${
          darkMode ? "bg-black/40" : "bg-slate-100"
        }`}
      >
        {item.mediaType === "pdf" && (
          <iframe
            src={item.url.replace("/view", "/preview")}
            title={item.title}
            className="h-full w-full"
          />
        )}

        {item.mediaType === "gif" && item.media && (
          <img
            src={item.media}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${
            darkMode ? "from-[#0a0f1a] to-transparent" : "from-white to-transparent"
          }`}
        />

        {item.tag && (
          <span className="absolute left-3 top-3 rounded-md bg-yellow-400 px-2 py-0.5 text-[9px] font-black text-black">
            {item.tag}
          </span>
        )}

        {isLocked && (
          <span
            className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold ${
              darkMode
                ? "border border-red-400/30 bg-red-500/15 text-red-400"
                : "border border-red-200 bg-red-50 text-red-600"
            }`}
          >
            <Lock size={10} />
            SSO
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black transition group-hover:scale-105">
              <Icon size={18} />
            </div>

            <div>
              <h3
                className={`text-sm font-black uppercase leading-tight ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-1 text-[10px] leading-relaxed ${
                  darkMode ? "text-white/50" : "text-slate-500"
                }`}
              >
                {item.subtitle}
              </p>
            </div>
          </div>

          <span
            className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${
              isLocked
                ? darkMode
                  ? "bg-red-500/15 text-red-400"
                  : "bg-red-50 text-red-600"
                : darkMode
                  ? "bg-yellow-400/15 text-yellow-400"
                  : "bg-yellow-400/20 text-yellow-700"
            }`}
          >
            {item.badge}
          </span>
        </div>

        {/* Preview skeleton */}
        <div
          className={`mt-4 rounded-xl border p-3 ${
            darkMode
              ? "border-white/10 bg-black/25"
              : "border-slate-100 bg-slate-50"
          }`}
        >
          <div className="space-y-2">
            <div
              className={`h-2 w-full rounded ${
                darkMode ? "bg-white/10" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-2 w-4/5 rounded ${
                darkMode ? "bg-white/[0.07]" : "bg-slate-200/70"
              }`}
            />
            <div
              className={`h-2 w-3/5 rounded ${
                darkMode ? "bg-white/[0.04]" : "bg-slate-100"
              }`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-yellow-500"
          >
            {isLocked ? "Sign In" : "Open"}
            <ExternalLink size={14} />
          </a>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download ${item.title}`}
            className={`rounded-xl border px-3 py-2.5 transition ${
              darkMode
                ? "border-yellow-400/25 text-yellow-400 hover:bg-yellow-400/10"
                : "border-yellow-400/40 text-yellow-600 hover:bg-yellow-400/10"
            }`}
          >
            <Download size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function RecruitmentTrainingReviewer() {
  const { darkMode } = useTheme();
  const { ref: sectionRef, visible: sectionVisible } =
    useInView<HTMLDivElement>(0.08);
  const { ref: footnoteRef, visible: footnoteVisible } =
    useInView<HTMLDivElement>(0.1);

  return (
    <div ref={sectionRef} className="w-full space-y-12">
      <SectionHeading
        darkMode={darkMode}
        badge="Training Reviewer"
        before="Insurance Concepts"
        highlight="Mastery"
        description="Review essential insurance concepts for TRAD and VUL preparation."
        showDivider
        animate
        visible={sectionVisible}
        className="duration-1000 ease-out"
      />

      {/* Cards */}
      <div className="grid gap-6 px-2 lg:grid-cols-3">
        {trainingPdfs.map((item, index) => (
          <TrainingCard
            key={item.title}
            item={item}
            darkMode={darkMode}
            index={index}
          />
        ))}
      </div>

      {/* Footnote */}
      <div
        ref={footnoteRef}
        className={`mx-2 flex items-start gap-3 rounded-2xl border p-5 text-xs leading-relaxed ${revealTransitionClass(footnoteVisible, "sm")} ${
          darkMode
            ? "border-yellow-400/20 bg-white/[0.02] text-white/60"
            : "border-yellow-200 bg-yellow-50/40 text-slate-600"
        }`}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-500">
          <Lock size={16} />
        </div>
        <p>
          <span className="font-bold text-yellow-500">SSO access required</span>{" "}
          for TRAD and VUL walkthrough materials. Use credentials:{" "}
          <span
            className={`font-mono font-bold ${
              darkMode ? "text-white/90" : "text-slate-800"
            }`}
          >
            sl_brightbox
          </span>
        </p>
      </div>
    </div>
  );
}
