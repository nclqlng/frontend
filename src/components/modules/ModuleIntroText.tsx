"use client";

import type { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

type ModuleIntroTextProps = {
  children: ReactNode;
  variant?: "plain" | "boxed";
  className?: string;
};

export default function ModuleIntroText({
  children,
  variant = "plain",
  className = "",
}: ModuleIntroTextProps) {
  const { darkMode } = useTheme();

  const textClass = darkMode ? "text-slate-400" : "text-slate-600";

  if (variant === "boxed") {
    return (
      <div
        className={`rounded-2xl border p-5 ${
          darkMode
            ? "border-slate-700/60 bg-slate-800/40"
            : "border-slate-200 bg-slate-50"
        } ${className}`}
      >
        <p className={`text-sm leading-7 ${textClass}`}>{children}</p>
      </div>
    );
  }

  return (
    <p className={`text-sm leading-7 ${textClass} ${className}`}>{children}</p>
  );
}

export function moduleMutedText(darkMode: boolean) {
  return darkMode ? "text-slate-400" : "text-slate-600";
}

export function moduleSubtleText(darkMode: boolean) {
  return darkMode ? "text-slate-500" : "text-slate-500";
}

export function moduleCardShell(darkMode: boolean) {
  return darkMode
    ? "border-white/10 bg-white/[0.03]"
    : "border-slate-200 bg-white shadow-sm";
}
