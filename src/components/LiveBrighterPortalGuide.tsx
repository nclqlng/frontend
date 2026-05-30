"use client";

import type { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Mail,
  ArrowRight,
  FileText,
  BookOpen,
  ClipboardList,
  ExternalLink,
  Download,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { revealTransitionClass } from "@/components/RevealSection";
import { useInView } from "@/hooks/useInView";

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

type GuideCardProps = {
  icon: LucideIcon;
  title: string;
  highlight?: string;
  darkMode: boolean;
  children: ReactNode;
};

function GuideCard({
  icon: Icon,
  title,
  highlight,
  darkMode,
  children,
}: GuideCardProps) {
  return (
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
}

function ProcessStepCard({
  index,
  darkMode,
  icon: Icon,
  title,
  highlight,
  children,
}: {
  index: number;
  darkMode: boolean;
  icon: LucideIcon;
  title: string;
  highlight: string;
  children: ReactNode;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={revealTransitionClass(visible)}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <GuideCard darkMode={darkMode} icon={Icon} title={title} highlight={highlight}>
        {children}
      </GuideCard>
    </div>
  );
}

export default function LiveBrighterPortalGuide() {
  const { darkMode } = useTheme();
  const { ref: headerRef, visible: headerVisible } =
    useInView<HTMLDivElement>(0.08);
  const { ref: resourcesRef, visible: resourcesVisible } =
    useInView<HTMLDivElement>(0.1);

  return (
    <div className="w-full space-y-12">

      <div ref={headerRef}>
        <SectionHeading
          darkMode={darkMode}
          badge="Getting Started"
          before="Live"
          highlight="Brighter"
          after="Portal"
          description="A structured onboarding journey for advisor account creation and application completion."
          descriptionClassName={`mx-auto mt-4 max-w-3xl text-sm leading-7 ${
            darkMode ? "text-white/60" : "text-slate-600"
          }`}
          showDivider
          animate
          visible={headerVisible}
          className="duration-1000 ease-out"
        />
      </div>

      {/* ================= PROCESS FLOW (FULL WIDTH) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-2">

        {/* STEP 1 */}
        <ProcessStepCard index={0} darkMode={darkMode} icon={Mail} title="REGISTER & CREATE" highlight="ACCOUNT">
          <p className="text-xs text-slate-600 dark:text-white/60 mb-4">
            Start by accessing your invitation email and creating your Live Brighter account.
          </p>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black hover:bg-yellow-500 transition"
          >
            Get started <ArrowRight size={16} aria-hidden />
          </button>
        </ProcessStepCard>

        {/* STEP 2 */}
        <ProcessStepCard index={1} darkMode={darkMode} icon={ClipboardList} title="ACCOMPLISH" highlight="ONLINE APPLICATION">
          <p className="text-xs text-slate-600 dark:text-white/60">
            Log in and complete all required details in{" "}
            <span className="text-yellow-500 font-semibold">Profile Assessment</span>.
            It contains <span className="font-semibold">5 Tabs</span> and multiple
            information cards that must be completed.
          </p>
        </ProcessStepCard>

        {/* STEP 3 - FULL REQUIREMENTS */}
        <ProcessStepCard index={2} darkMode={darkMode} icon={FileText} title="COMPLETION OF" highlight="REQUIREMENTS">
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
        </ProcessStepCard>

        {/* STEP 4 - VISUAL END STATE */}
        <ProcessStepCard index={3} darkMode={darkMode} icon={Download} title="SUBMIT & REVIEW" highlight="READY">
          <p className="text-xs text-slate-600 dark:text-white/60">
            Ensure all requirements are completed and ready for final submission and validation.
          </p>

          <div className="mt-4 h-10 w-full rounded-lg bg-yellow-400/10 flex items-center justify-center text-[10px] text-yellow-500 font-bold">
            COMPLETION STAGE
          </div>
        </ProcessStepCard>

      </div>

      {/* ================= HELPFUL RESOURCES (FULL WIDTH SEPARATE) ================= */}
      <div
        ref={resourcesRef}
        className={`w-full rounded-2xl border p-6 ${revealTransitionClass(resourcesVisible)} ${
          darkMode
            ? "border-yellow-400/20 bg-white/[0.02]"
            : "border-yellow-200 bg-yellow-50/30"
        }`}
        style={{ transitionDelay: "120ms" }}
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
                className={`group rounded-xl border p-4 transition-all duration-700 hover:-translate-y-1 ${
                  resourcesVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${
                  darkMode
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-slate-200 bg-white"
                }`}
                style={{ transitionDelay: `${180 + i * 100}ms` }}
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