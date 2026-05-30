"use client";

import { Activity, FileText } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

export default function Rome() {
  return (
    <div className="space-y-8">
      <ModuleIntroText variant="boxed">
        A safe alternative to medical examination. R.O.M.E. is a medical
        examination conducted through video conference by our accredited
        medical examiners.
      </ModuleIntroText>

      <LocalResourceCard
        fullImage
        item={{
          title: "R.O.M.E. Summary",
          description: "At-a-glance overview of the Remote Online Medical Examination process",
          src: TRAINING_ASSETS.rome.summary,
          icon: Activity,
          mediaType: "image",
        }}
      />

      <LocalResourceCard
        item={{
          title: "R.O.M.E. Guide — April 2021",
          description: "Complete guide to Remote Online Medical Examination",
          src: TRAINING_ASSETS.rome.guide,
          icon: FileText,
          mediaType: "pdf",
        }}
      />
    </div>
  );
}
