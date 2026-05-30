"use client";

import type { ReactNode } from "react";
import {
  ClipboardList,
  FileEdit,
  FileText,
  HelpCircle,
  ImageIcon,
  MonitorSmartphone,
  RefreshCw,
  Smartphone,
  Download,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import LocalResourceCard, { type LocalResource } from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

const submissionOptions: LocalResource[] = [
  {
    title: "SunSMART eApp",
    description:
      "Keep secured and healthy. Use SunSMART eApp to submit your apps remotely.",
    src: TRAINING_ASSETS.submitApp.sunsmartEapp,
    icon: Smartphone,
    mediaType: "pdf",
  },
  {
    title: "Just BCOS — Comprehensive User Guide",
    description:
      "Another brighter solution for you and our clients to submit their application.",
    src: TRAINING_ASSETS.submitApp.bcosUserGuide,
    icon: Layers,
    mediaType: "pdf",
  },
];

const sunSmartGuides: LocalResource[] = [
  {
    title: "Compatible Devices",
    src: TRAINING_ASSETS.submitApp.compatibleDevices,
    icon: MonitorSmartphone,
    mediaType: "image",
  },
  {
    title: "Downloading and Basic Troubleshooting",
    src: TRAINING_ASSETS.submitApp.downloadingTroubleshooting,
    icon: Download,
    mediaType: "pdf",
  },
  {
    title: "Primary Sync Guide",
    src: TRAINING_ASSETS.submitApp.primarySyncGuide,
    icon: RefreshCw,
    mediaType: "pdf",
  },
  {
    title: "eApp Review Download Guide — How to Input Extra Rating",
    src: TRAINING_ASSETS.submitApp.eappReviewExtraRating,
    icon: FileEdit,
    mediaType: "pdf",
  },
  {
    title: "Client Suitability Assessment (CSA)",
    src: TRAINING_ASSETS.submitApp.csaGuide,
    icon: ClipboardList,
    mediaType: "pdf",
  },
  {
    title: "Proposal",
    src: TRAINING_ASSETS.submitApp.proposalGuide,
    icon: FileText,
    mediaType: "pdf",
  },
  {
    title: "Basic eApp Fields",
    src: TRAINING_ASSETS.submitApp.basicEappFields,
    icon: FileEdit,
    mediaType: "pdf",
  },
  {
    title: "Questionnaire — Requirements and Submission",
    src: TRAINING_ASSETS.submitApp.questionnaireGuide,
    icon: ClipboardList,
    mediaType: "pdf",
  },
];

const bcosGuides: LocalResource[] = [
  {
    title: "BCOS — 3 Simple Steps",
    src: TRAINING_ASSETS.submitApp.bcos3Steps,
    icon: ImageIcon,
    mediaType: "image",
  },
  {
    title: "BCOS Client Guide",
    src: TRAINING_ASSETS.submitApp.bcosClientGuide,
    icon: ImageIcon,
    mediaType: "image",
  },
  {
    title: "Basic Troubleshooting — BCOS Common Issues",
    src: TRAINING_ASSETS.submitApp.bcosTroubleshooting,
    icon: HelpCircle,
    mediaType: "pdf",
  },
];

function SectionBlock({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  const { darkMode } = useTheme();

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
          <Icon size={18} />
        </div>
        <h3 className={`text-sm font-black uppercase tracking-wide ${darkMode ? "text-white" : "text-slate-900"}`}>
          {title}
        </h3>
        <div className={`h-px flex-1 ${darkMode ? "bg-white/10" : "bg-slate-200"}`} />
      </div>
      {children}
    </section>
  );
}

export default function SubmitAppOnline() {
  return (
    <div className="space-y-10">
      <ModuleIntroText>
        With our digital tools, it&apos;s now easy to submit an app. Check these
        two different ways on how to submit an application online.
      </ModuleIntroText>

      <SectionBlock title="Submit Online" icon={Smartphone}>
        <div className="space-y-6">
          {submissionOptions.map((item) => (
            <LocalResourceCard key={item.src} item={item} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="SunSMART Guide" icon={Smartphone}>
        <div className="space-y-6">
          {sunSmartGuides.map((item) => (
            <LocalResourceCard key={item.src} item={item} compact />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="BCOS Guide" icon={Layers}>
        <div className="space-y-6">
          {bcosGuides.map((item) => (
            <LocalResourceCard key={item.src} item={item} compact fullImage={item.mediaType === "image"} />
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
