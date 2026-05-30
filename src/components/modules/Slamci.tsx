"use client";

import { CreditCard, FileText, Layers } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText, { moduleCardShell } from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";
import { useTheme } from "@/context/ThemeContext";

export default function Slamci() {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-8">
      <ModuleIntroText>
        Sun Life Asset Management Co., Inc. is the fund manager and distributor
        of the Sun Life Prosperity Funds.
      </ModuleIntroText>

      <div className={`overflow-hidden rounded-2xl border ${moduleCardShell(darkMode)}`}>
        <img
          src={TRAINING_ASSETS.slamci.overview}
          alt="SLAMCI overview"
          className="w-full object-contain"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LocalResourceCard
          compact
          item={{
            title: "2021 SLAMCI Welcome Kit",
            src: TRAINING_ASSETS.slamci.welcomeKit,
            icon: FileText,
            mediaType: "pdf",
          }}
        />
        <LocalResourceCard
          compact
          item={{
            title: "SLAMCI Digital Channels One-Pager",
            src: TRAINING_ASSETS.slamci.digitalChannels,
            icon: Layers,
            mediaType: "pdf",
          }}
        />
      </div>

      <LocalResourceCard
        item={{
          title: "SLAMC Bills Payment Guide",
          description: "March 2021 v2",
          src: TRAINING_ASSETS.slamci.billsPaymentGuide,
          icon: CreditCard,
          mediaType: "pdf",
        }}
      />
    </div>
  );
}
