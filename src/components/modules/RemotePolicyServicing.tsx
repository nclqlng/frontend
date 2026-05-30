"use client";

import { useState } from "react";
import {
  BookOpen,
  ClipboardList,
  Mail,
  PenLine,
  X,
} from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import {
  remoteServicingEmails,
  TRAINING_ASSETS,
} from "@/lib/training-assets";

function BadgeButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-yellow-500 transition hover:-translate-y-0.5 hover:bg-yellow-400/20"
    >
      {label}
    </button>
  );
}

function EmailDirectoryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close email directory"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-yellow-500" />
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Remote Servicing Email Directory
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-auto max-h-[calc(85vh-64px)]">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-[#1e293b] text-yellow-500">
              <tr>
                <th className="px-4 py-3 font-bold">Category</th>
                <th className="px-4 py-3 font-bold">Transaction</th>
                <th className="px-4 py-3 font-bold">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {remoteServicingEmails.map((row, i) => (
                <tr
                  key={`${row.transaction}-${i}`}
                  className="border-t border-white/5 even:bg-white/[0.02]"
                >
                  <td className="px-4 py-2.5 font-medium text-white/80">
                    {row.category}
                  </td>
                  <td className="px-4 py-2.5 text-white/70">{row.transaction}</td>
                  <td className="px-4 py-2.5 text-yellow-400/90">{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function RemotePolicyServicing() {
  const [showEmailDirectory, setShowEmailDirectory] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  const badgeResources: Record<
    string,
    { title: string; src: string; mediaType: "pdf" | "image" }
  > = {
    confirmation: {
      title: "Policy Servicing Client Confirmation",
      src: TRAINING_ASSETS.policyServicing.clientConfirmation,
      mediaType: "image",
    },
    forms: {
      title: "Policy Servicing Forms",
      src: TRAINING_ASSETS.policyServicing.servicingForms,
      mediaType: "pdf",
    },
  };

  return (
    <div className="space-y-8">
      {showEmailDirectory && (
        <EmailDirectoryModal onClose={() => setShowEmailDirectory(false)} />
      )}

      <ModuleIntroText>
        The Sun Life Comprehensive Guide to Remote Servicing is now here to
        support you as you continue to partner with your clients. The guide
        covers the following servicing processes: Financial and Non-Financial
        Policy/Account Changes, Disbursements, and Claims as well as other
        reference materials.
      </ModuleIntroText>

      <LocalResourceCard
        item={{
          title: "Comprehensive Guide to Remote Servicing",
          src: TRAINING_ASSETS.policyServicing.comprehensiveGuide,
          icon: BookOpen,
          mediaType: "pdf",
        }}
      />

      <LocalResourceCard
        item={{
          title: "Guide to Adding eSignatures to PDF Forms",
          src: TRAINING_ASSETS.policyServicing.esigGuide,
          icon: PenLine,
          mediaType: "pdf",
        }}
      />

      <div className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
          Quick Resources
        </p>
        <div className="flex flex-wrap gap-3">
          <BadgeButton
            label="Remote Servicing Email Directory"
            onClick={() => setShowEmailDirectory(true)}
          />
          <BadgeButton
            label="Policy Servicing Client Confirmation"
            onClick={() =>
              setActiveBadge(
                activeBadge === "confirmation" ? null : "confirmation",
              )
            }
          />
          <BadgeButton
            label="Policy Servicing Forms"
            onClick={() =>
              setActiveBadge(activeBadge === "forms" ? null : "forms")
            }
          />
        </div>
      </div>

      {activeBadge && badgeResources[activeBadge] && (
        <LocalResourceCard
          fullImage={badgeResources[activeBadge].mediaType === "image"}
          item={{
            title: badgeResources[activeBadge].title,
            src: badgeResources[activeBadge].src,
            icon: ClipboardList,
            mediaType: badgeResources[activeBadge].mediaType,
          }}
        />
      )}
    </div>
  );
}
