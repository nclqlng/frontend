"use client";

import { useTheme } from "@/context/ThemeContext";

/**
 * Shared ambient backdrop for hub-style pages (Recruitment, Training & Dev).
 * Keeps both routes visually aligned while supporting light/dark themes.
 */
export default function HubPageBackground() {
  const { darkMode } = useTheme();

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden transition duration-700"
      aria-hidden
    >
      {/* Base depth gradient */}
      <div
        className={`absolute inset-0 transition duration-700 ${
          darkMode
            ? "bg-gradient-to-br from-[#050816] via-[#060b1a] to-[#0a1628]"
            : "bg-gradient-to-br from-[#fffef8] via-[#f8fafc] to-[#f1f5f9]"
        }`}
      />

      {/* Sun rays — top-left quadrant */}
      <div
        className={`sunlife-rays absolute inset-0 transition duration-700 ${
          darkMode ? "opacity-40" : "opacity-55"
        }`}
      />

      {/* Fine mesh overlay */}
      <div
        className={`sunlife-mesh absolute inset-0 transition duration-700 ${
          darkMode ? "opacity-30" : "opacity-45"
        }`}
      />

      {/* Primary golden aura — hero focal */}
      <div
        className={`hub-orb-drift absolute left-1/2 top-[28%] h-[min(90vw,820px)] w-[min(90vw,820px)] -translate-x-1/2 rounded-full blur-[200px] transition duration-700 ${
          darkMode
            ? "bg-[radial-gradient(circle,rgb(250_204_21/0.14)_0%,rgb(250_204_21/0.04)_45%,transparent_72%)]"
            : "bg-[radial-gradient(circle,rgb(253_224_71/0.35)_0%,rgb(254_240_138/0.12)_50%,transparent_75%)]"
        }`}
      />

      {/* Secondary cool depth — bottom right */}
      <div
        className={`absolute -bottom-32 -right-32 h-[560px] w-[560px] rounded-full blur-[160px] transition duration-700 ${
          darkMode ? "bg-blue-500/[0.07]" : "bg-slate-300/40"
        }`}
      />

      {/* Tertiary warm accent — left edge */}
      <div
        className={`hub-orb-drift-reverse absolute -left-48 top-24 h-[480px] w-[480px] rounded-full blur-[120px] transition duration-700 ${
          darkMode ? "bg-yellow-400/[0.06]" : "bg-yellow-200/50"
        }`}
        style={{ animationDelay: "-4s" }}
      />

      {/* Decorative sun arcs — top left */}
      <div
        className={`sunlife-arc absolute -left-28 -top-28 h-[min(100vw,480px)] w-[min(100vw,480px)] transition duration-700 ${
          darkMode ? "border-yellow-400/10" : "border-yellow-400/18"
        }`}
      />
      <div
        className={`sunlife-arc absolute -left-16 -top-16 h-[min(80vw,360px)] w-[min(80vw,360px)] transition duration-700 ${
          darkMode ? "border-yellow-400/[0.06]" : "border-yellow-300/12"
        }`}
      />

      {/* Conic halo — centered upper */}
      <div
        className={`absolute left-1/2 top-[32%] h-[min(110vw,920px)] w-[min(110vw,920px)] -translate-x-1/2 rounded-full blur-3xl transition duration-700 ${
          darkMode ? "opacity-[0.05]" : "opacity-[0.07]"
        } bg-[conic-gradient(from_200deg_at_50%_50%,transparent_0deg,rgba(250,204,21,0.5)_40deg,transparent_80deg,transparent_180deg,rgba(250,204,21,0.25)_220deg,transparent_280deg)]`}
      />

      {/* Orbit rings — system / network motif */}
      <div
        className={`absolute left-1/2 top-[48%] h-[min(120vw,900px)] w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full border transition duration-700 ${
          darkMode ? "border-yellow-200/10" : "border-yellow-400/15"
        }`}
      />
      <div
        className={`absolute left-1/2 top-[48%] h-[min(85vw,620px)] w-[min(85vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full border transition duration-700 ${
          darkMode ? "border-white/[0.04]" : "border-slate-300/50"
        }`}
      />
      <div
        className={`hub-orbit-spin absolute left-1/2 top-[48%] h-[min(95vw,720px)] w-[min(95vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed transition duration-700 ${
          darkMode ? "border-yellow-400/[0.06]" : "border-yellow-500/10"
        }`}
      />

      {/* Structured grid with radial fade */}
      <div
        className={`hub-grid-fade absolute inset-0 transition duration-700 ${
          darkMode ? "opacity-[0.035]" : "opacity-[0.04]"
        } ${
          darkMode
            ? "bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]"
        } bg-[size:72px_72px]`}
      />

      {/* Network constellation */}
      <svg
        className={`absolute inset-0 h-full w-full transition duration-700 ${
          darkMode ? "opacity-25" : "opacity-35"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hub-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(250 204 21)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(250 204 21)" stopOpacity={darkMode ? "0.2" : "0.35"} />
            <stop offset="100%" stopColor="rgb(250 204 21)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#hub-line-grad)" strokeWidth="0.5" fill="none">
          <line x1="18%" y1="22%" x2="32%" y2="38%" />
          <line x1="32%" y1="38%" x2="48%" y2="28%" />
          <line x1="48%" y1="28%" x2="72%" y2="35%" />
          <line x1="72%" y1="35%" x2="85%" y2="52%" />
          <line x1="32%" y1="38%" x2="28%" y2="58%" />
          <line x1="48%" y1="28%" x2="55%" y2="62%" />
          <line x1="28%" y1="58%" x2="55%" y2="62%" />
          <line x1="55%" y1="62%" x2="78%" y2="68%" />
        </g>
        <g>
          {[
            ["18%", "22%"],
            ["32%", "38%"],
            ["48%", "28%"],
            ["72%", "35%"],
            ["85%", "52%"],
            ["28%", "58%"],
            ["55%", "62%"],
            ["78%", "68%"],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={darkMode ? 2.5 : 3}
              className={i % 2 === 0 ? "hub-node-pulse" : "hub-node-pulse-delayed"}
              fill={darkMode ? "rgb(250 204 21 / 0.35)" : "rgb(234 179 8 / 0.5)"}
            />
          ))}
        </g>
      </svg>

      {/* Glass highlight streak */}
      <div
        className={`hub-shimmer-streak absolute top-[22%] left-[-15%] h-[1px] w-[70%] rotate-[-14deg] bg-gradient-to-r transition duration-700 ${
          darkMode
            ? "from-transparent via-white/15 to-transparent"
            : "from-transparent via-slate-400/25 to-transparent"
        }`}
      />

      {/* Edge vignette */}
      <div
        className={`absolute inset-0 transition duration-700 ${
          darkMode
            ? "bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,#050816_100%)] opacity-70"
            : "bg-[radial-gradient(ellipse_85%_65%_at_50%_35%,transparent_0%,#f8fafc_100%)] opacity-50"
        }`}
      />

      {/* Subtle film grain */}
      <div className="hub-noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />

      {/* Micro accent particles */}
      <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-yellow-300/30 hub-node-pulse" />
      <div className="absolute right-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-yellow-400/25 hub-node-pulse-delayed" />
      <div className="absolute bottom-[22%] left-[38%] h-1 w-1 rounded-full bg-white/20 hub-node-pulse" />
    </div>
  );
}
