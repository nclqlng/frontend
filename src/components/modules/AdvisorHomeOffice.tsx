"use client";

import { Building2, KeyRound, FileEdit } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

export default function AdvisorHomeOffice() {
  return (
    <div className="space-y-8">
      <ModuleIntroText variant="boxed">
        This advisor portal provides the most complete and accurate
        self-service information and resources for advisors. Advisor Home
        Office is your primary digital touchpoint which enables you to focus
        on what you do best: building lifetime partnerships with your
        clients.
      </ModuleIntroText>

      <LocalResourceCard
        item={{
          title: "Advisor Home Office Guide 2021",
          description: "Complete guide to the Advisor Home Office portal",
          src: TRAINING_ASSETS.aho.guide,
          icon: Building2,
          mediaType: "pdf",
        }}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <LocalResourceCard
          compact
          item={{
            title: "AHO Password Enhancements",
            description: "Password update guide (March 2021)",
            src: TRAINING_ASSETS.aho.passwordEnhancements,
            icon: KeyRound,
            mediaType: "pdf",
          }}
        />
        <LocalResourceCard
          compact
          item={{
            title: "App Form Enhancements",
            description: "PDF form updates (March 2021)",
            src: TRAINING_ASSETS.aho.appFormEnhancements,
            icon: FileEdit,
            mediaType: "pdf",
          }}
        />
      </div>
    </div>
  );
}
