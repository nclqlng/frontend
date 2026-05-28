"use client";

import { useTheme } from "@/context/ThemeContext";

/**
 * Shared ambient backdrop for hub-style pages.
 * Sun Life–inspired warmth with a restrained, readable layout in light and dark themes.
 */
export default function HubPageBackground() {
  const { darkMode } = useTheme();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition duration-700"
      aria-hidden
    >
      {/* Base depth */}
      <div
        className={`absolute inset-0 transition duration-700 ${
          darkMode
            ? "bg-gradient-to-br from-[#050816] via-[#060b1a] to-[#0a1628]"
            : "bg-gradient-to-br from-[#fffef8] via-[#f8fafc] to-[#f1f5f9]"
        }`}
      />

      {/* Top-left sun — soft core glow */}
      <div
        className={`hub-sun-core absolute -left-[6%] -top-[10%] h-[min(72vw,560px)] w-[min(72vw,560px)] rounded-full blur-3xl transition duration-700 ${
          darkMode
            ? "bg-[radial-gradient(circle,rgb(250_204_21/0.22)_0%,rgb(250_204_21/0.06)_42%,transparent_68%)]"
            : "bg-[radial-gradient(circle,rgb(253_224_71/0.45)_0%,rgb(254_240_138/0.15)_45%,transparent_72%)]"
        }`}
      />

      {/* Gentle sun rays — masked so they fade before the content area */}
      <div
        className={`hub-sun-rays absolute inset-0 transition duration-700 ${
          darkMode ? "opacity-30" : "opacity-45"
        }`}
      />

      {/* Single decorative arc */}
      <div
        className={`hub-sun-arc absolute -left-24 -top-24 h-[min(88vw,440px)] w-[min(88vw,440px)] transition duration-700 ${
          darkMode ? "border-yellow-400/[0.07]" : "border-yellow-400/15"
        }`}
      />

      {/* Center golden wash */}
      <div
        className={`hub-orb-drift absolute left-1/2 top-[26%] h-[min(85vw,720px)] w-[min(85vw,720px)] -translate-x-1/2 rounded-full blur-[180px] transition duration-700 ${
          darkMode
            ? "bg-[radial-gradient(circle,rgb(250_204_21/0.1)_0%,rgb(250_204_21/0.03)_50%,transparent_75%)]"
            : "bg-[radial-gradient(circle,rgb(253_224_71/0.28)_0%,rgb(254_240_138/0.08)_55%,transparent_78%)]"
        }`}
      />

      {/* Cool depth — bottom right */}
      <div
        className={`absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full blur-[140px] transition duration-700 ${
          darkMode ? "bg-blue-500/[0.05]" : "bg-slate-300/35"
        }`}
      />

      {/* One subtle orbit — static, fades at edges */}
      <div
        className={`hub-orbit-ring absolute left-1/2 top-[44%] h-[min(100vw,780px)] w-[min(100vw,780px)] -translate-x-1/2 -translate-y-1/2 transition duration-700 ${
          darkMode ? "border-yellow-200/[0.06]" : "border-yellow-400/12"
        }`}
      />

      {/* Grid with radial fade */}
      <div
        className={`hub-grid-fade absolute inset-0 transition duration-700 ${
          darkMode ? "opacity-[0.025]" : "opacity-[0.035]"
        } ${
          darkMode
            ? "bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]"
        } bg-[size:80px_80px]`}
      />

      {/* Edge vignette — keeps focus on content */}
      <div
        className={`absolute inset-0 transition duration-700 ${
          darkMode
            ? "bg-[radial-gradient(ellipse_85%_70%_at_50%_38%,transparent_0%,#050816_100%)] opacity-75"
            : "bg-[radial-gradient(ellipse_90%_70%_at_50%_35%,transparent_0%,#f8fafc_100%)] opacity-55"
        }`}
      />
    </div>
  );
}
