"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition hover:scale-105 ${
        darkMode
          ? "border-white/10 bg-white/[0.04] text-yellow-300"
          : "border-yellow-100 bg-white text-[#0f172a]"
      }`}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
