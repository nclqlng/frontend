"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type ThemeToggleProps = {
  variant?: "icon" | "menu";
  className?: string;
};

export default function ThemeToggle({
  variant = "icon",
  className = "",
}: ThemeToggleProps) {
  const { darkMode, toggleTheme } = useTheme();

  if (variant === "menu") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className={`flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left transition ${
          darkMode
            ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
            : "border-yellow-100 bg-yellow-50/50 hover:bg-yellow-50"
        } ${className}`}
      >
        <span className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              darkMode
                ? "bg-yellow-400/15 text-yellow-300"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            {darkMode ? <Sun size={20} strokeWidth={2.25} /> : <Moon size={20} strokeWidth={2.25} />}
          </span>
          <span>
            <span
              className={`block text-sm font-semibold ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              {darkMode ? "Light mode" : "Dark mode"}
            </span>
            <span
              className={`block text-xs ${
                darkMode ? "text-white/45" : "text-slate-500"
              }`}
            >
              {darkMode ? "Switch to a brighter look" : "Switch to a darker look"}
            </span>
          </span>
        </span>
        <span
          className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
            darkMode ? "bg-yellow-400/30" : "bg-slate-200"
          }`}
          aria-hidden
        >
          <span
            className={`absolute top-0.5 h-6 w-6 rounded-full shadow-sm transition-transform ${
              darkMode
                ? "left-[calc(100%-1.625rem)] bg-yellow-400"
                : "left-0.5 bg-white"
            }`}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border transition hover:scale-105 active:scale-95 sm:h-12 sm:w-12 sm:rounded-2xl ${
        darkMode
          ? "border-white/10 bg-white/[0.04] text-yellow-300 hover:border-yellow-400/30 hover:bg-yellow-400/10"
          : "border-yellow-200 bg-gradient-to-br from-white to-yellow-50 text-amber-600 shadow-sm hover:border-yellow-300 hover:shadow-md"
      } ${className}`}
    >
      <span
        className={`absolute inset-0 rounded-xl transition-opacity ${
          darkMode
            ? "bg-gradient-to-br from-yellow-400/20 to-transparent opacity-100"
            : "opacity-0"
        }`}
        aria-hidden
      />
      <span className="relative transition-transform duration-300 group-hover:rotate-12">
        {darkMode ? (
          <Sun size={20} strokeWidth={2.25} className="drop-shadow-[0_0_8px_rgba(250,204,21,0.45)]" />
        ) : (
          <Moon size={20} strokeWidth={2.25} />
        )}
      </span>
    </button>
  );
}
