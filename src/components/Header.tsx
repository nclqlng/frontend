"use client";

import { Search, Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Training and Development", path: "/training-dev" },
  { label: "Recruitment Hub", path: "/recruitment-hub" },
  { label: "Calendar", path: "/calendar" },
  { label: "Gallery", path: "/gallery" },
  { label: "Our Team", path: "/team" },
];

export default function Header() {
  const { darkMode } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <header className="fixed left-0 top-0 z-[999] w-full px-6 pt-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-6 py-4 backdrop-blur-2xl transition-all duration-500 ${
          darkMode
            ? "border-white/10 bg-[#050816]/70"
            : "border-yellow-100 bg-white/80 shadow-xl"
        }`}
      >
        {/* ================= LOGO ================= */}
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

        {/* ================= NAVIGATION ================= */}
        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`relative text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "text-yellow-500"
                    : darkMode
                    ? "text-white/70 hover:text-yellow-500"
                    : "text-slate-600 hover:text-yellow-500"
                }`}
              >
                {item.label}

                {/* ACTIVE INDICATOR */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
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

          {/* THEME */}
          <ThemeToggle />

          {/* MOBILE MENU */}
          <button
            type="button"
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border xl:hidden transition ${
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