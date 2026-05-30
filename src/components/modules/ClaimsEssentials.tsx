"use client";

import { ClipboardList, FileText, Quote } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText, { moduleCardShell } from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";
import { useTheme } from "@/context/ThemeContext";

export default function ClaimsEssentials() {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-8">
      <div className={`rounded-2xl border p-6 ${moduleCardShell(darkMode)}`}>
        <div className="mb-3 flex items-center gap-2 text-yellow-500">
          <Quote size={18} />
          <span className="text-xs font-bold uppercase tracking-[0.35em]">
            Message from Leadership
          </span>
        </div>
        <p className="text-sm italic leading-7 text-slate-500 dark:text-slate-400">
          &ldquo;Our clients&apos; trust is built upon our ability to deliver on
          our promises a definitive expression of which is the payment of claims
          and maturities. As always, it is our honor to fulfill our duty.&rdquo;
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
          — Alex Narciso
        </p>
        <p className="text-xs text-slate-500">
          Sun Life President and Chief Agency Distribution Officer
        </p>
      </div>

      <LocalResourceCard
        item={{
          title: "Learning About Claims",
          description: "Claims Learning Session — February 18",
          src: TRAINING_ASSETS.claims.learningSession,
          icon: FileText,
          mediaType: "pdf",
        }}
      />

      <LocalResourceCard
        item={{
          title: "Claim Requirements",
          description: "New claim requirements reference",
          src: TRAINING_ASSETS.claims.requirements,
          icon: ClipboardList,
          mediaType: "pdf",
        }}
      />

      <LocalResourceCard
        item={{
          title: "Policy Riders & Provisions",
          description: "Complete riders with New CI (Revised 30 May 2016)",
          src: TRAINING_ASSETS.claims.policyRiders,
          icon: FileText,
          mediaType: "office",
        }}
      />
    </div>
  );
}
