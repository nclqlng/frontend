"use client";

import { Briefcase, Globe2, HeartPulse, Ribbon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText, { moduleCardShell, moduleSubtleText } from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

const guidelineDocs = [
  {
    title: "Cancer Conditions Guide",
    description: "Underwriting reference for cancer-related conditions",
    src: TRAINING_ASSETS.medicalGuidelines.cancer,
    icon: Ribbon,
  },
  {
    title: "Medical Conditions and Critical Illness Guide",
    description: "Medical and CI underwriting guidelines",
    src: TRAINING_ASSETS.medicalGuidelines.medicalCi,
    icon: HeartPulse,
  },
  {
    title: "Foreign Residence Guidelines",
    description: "Guidelines for foreign residence cases (June 2017)",
    src: TRAINING_ASSETS.medicalGuidelines.foreign,
    icon: Globe2,
  },
  {
    title: "Occupational Guidelines",
    description: "Occupation classification and underwriting (August 2020)",
    src: TRAINING_ASSETS.medicalGuidelines.occupational,
    icon: Briefcase,
  },
];

export default function MedicalGuidelines() {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-6">
      <ModuleIntroText>
        Essential underwriting references for medical, foreign residence, and
        occupational cases. Select a guide below to preview or download the full
        document.
      </ModuleIntroText>

      <div className="grid gap-4 sm:grid-cols-2">
        {guidelineDocs.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.src}
              className={`flex flex-col items-center rounded-2xl border p-5 text-center transition hover:border-yellow-400/30 ${moduleCardShell(darkMode)}`}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10 text-yellow-500 ring-1 ring-yellow-400/20">
                <Icon size={28} strokeWidth={1.75} />
              </div>
              <h3 className={`text-sm font-bold leading-snug ${darkMode ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              {item.description && (
                <p className={`mt-2 text-xs ${moduleSubtleText(darkMode)}`}>
                  {item.description}
                </p>
              )}
              <a
                href={item.src}
                download={item.src.split("/").pop()}
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-yellow-400 px-4 py-2 text-xs font-bold text-black transition hover:scale-[1.03] hover:bg-yellow-300"
              >
                View Guide
              </a>
            </div>
          );
        })}
      </div>

      <div className="space-y-6 pt-2">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
          Document Previews
        </p>
        {guidelineDocs.map((item) => (
          <LocalResourceCard
            key={item.src}
            item={{ ...item, mediaType: "pdf" }}
          />
        ))}
      </div>
    </div>
  );
}
