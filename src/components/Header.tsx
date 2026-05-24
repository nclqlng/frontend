"use client";

import { Search, Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  "Home",
  "Training and Development",
  "Recruitment Hub",
  "Calendar",
  "Gallery",
  "Our Team",
];

export default function Header() {
  const { darkMode } = useTheme();

  return (
    <header className="fixed left-0 top-0 z-[999] w-full px-6 pt-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-6 py-4 backdrop-blur-2xl transition duration-500 ${
          darkMode
            ? "border-white/10 bg-[#050816]/70"
            : "border-yellow-100 bg-white/80 shadow-xl"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 font-black text-[#050816]">
            C
          </div>

          <div>
            <h1
              className={`text-sm font-black uppercase tracking-[0.25em] ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Centurion
            </h1>

            <p
              className={`text-xs ${
                darkMode ? "text-white/40" : "text-slate-500"
              }`}
            >
              Sun Life NBO
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-semibold transition hover:text-yellow-500 ${
                darkMode ? "text-white/70" : "text-slate-600"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* SEARCH */}
          <div
            className={`hidden items-center gap-3 rounded-2xl border px-4 py-3 lg:flex ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-yellow-100 bg-white"
            }`}
          >
            <Search
              size={18}
              className={darkMode ? "text-white/40" : "text-slate-400"}
            />

            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent text-sm outline-none placeholder:text-sm ${
                darkMode
                  ? "text-white placeholder:text-white/30"
                  : "text-[#0f172a] placeholder:text-slate-400"
              }`}
            />
          </div>

          <ThemeToggle />

          {/* MOBILE MENU */}
          <button
            type="button"
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border xl:hidden ${
              darkMode
                ? "border-white/10 bg-white/[0.04] text-white"
                : "border-yellow-100 bg-white text-[#0f172a]"
            }`}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
