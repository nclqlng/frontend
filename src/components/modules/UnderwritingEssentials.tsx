"use client";

import { BookOpen, ClipboardList, FileText, Stethoscope } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

const modules = [
  {
    title: "Module 1 — New Business Application Processing",
    description: "IES 2019 Module 1 — June 3 Hyperion",
    src: TRAINING_ASSETS.underwriting.module1,
    icon: ClipboardList,
    mediaType: "office" as const,
  },
  {
    title: "Module 2 — New Business Guidelines and Review of Underwriting Limits",
    description: "IES 2019 Module 2 — June 3 2019 Hyperion",
    src: TRAINING_ASSETS.underwriting.module2,
    icon: BookOpen,
    mediaType: "pdf" as const,
  },
  {
    title: "Module 3 — Underwriting and Risk Assessment (Medical)",
    description: "IES 2019 Module 3 — Hyperion July 1 2019",
    src: TRAINING_ASSETS.underwriting.module3,
    icon: Stethoscope,
    mediaType: "pdf" as const,
  },
  {
    title: "Module 5 — Large Case Underwriting",
    description: "IES 2019 Module 5 — Hyperion NBO Jul 08",
    src: TRAINING_ASSETS.underwriting.module5,
    icon: FileText,
    mediaType: "pdf" as const,
  },
];

export default function UnderwritingEssentials() {
  return (
    <div className="space-y-8">
      <ModuleIntroText>
        Understand the handling and approval of Entity-Owned Individual Life
        application.
      </ModuleIntroText>

      <div className="grid gap-6 md:grid-cols-3">
        <LocalResourceCard
          compact
          item={{
            title: "Underwriting Amidst the Pandemic (COVID)",
            src: TRAINING_ASSETS.underwriting.covid,
            icon: Stethoscope,
            mediaType: "pdf",
          }}
        />
        <LocalResourceCard
          compact
          item={{
            title: "Non-Med and Special Test Limits",
            src: TRAINING_ASSETS.underwriting.nonMedLimits,
            icon: ClipboardList,
            mediaType: "pdf",
          }}
        />
        <LocalResourceCard
          compact
          item={{
            title: "Updates UW Manual — Health",
            src: TRAINING_ASSETS.underwriting.uwManualHealth,
            icon: FileText,
            mediaType: "pdf",
          }}
        />
      </div>

      <div className="space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
          IES 2019 Training Modules
        </p>
        {modules.map((item) => (
          <LocalResourceCard key={item.src} item={item} />
        ))}
      </div>
    </div>
  );
}
