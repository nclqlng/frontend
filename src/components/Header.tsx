"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const barStyles = darkMode
    ? "border-white/10 bg-[#050816]/70"
    : "border-yellow-100 bg-white/80 shadow-xl";

  const navButtonClass = (isActive: boolean) =>
    `w-full rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition duration-300 ${
      isActive
        ? darkMode
          ? "bg-yellow-400/15 text-yellow-400"
          : "bg-yellow-100 text-yellow-700"
        : darkMode
          ? "text-white/80 hover:bg-white/[0.06] hover:text-yellow-400"
          : "text-slate-700 hover:bg-yellow-50 hover:text-yellow-600"
    }`;

  return (
    <header className="page-x fixed left-0 top-0 z-[999] w-full pt-[max(0.75rem,env(safe-area-inset-top))]">
      <div className="relative mx-auto max-w-7xl">
        {menuOpen && (
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-0 bg-black/40 backdrop-blur-[2px] xl:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`relative z-10 overflow-hidden rounded-2xl border px-3 py-3 backdrop-blur-2xl transition-all duration-500 sm:px-5 sm:py-4 md:px-6 ${barStyles}`}
        >
          <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-3">
            {/* LOGO */}
            <button
              type="button"
              onClick={() => handleNavigate("/")}
              className="shrink-0"
              aria-label="Centurion NBO home"
            >
              <Image
                src="/centurion-assets/ctnbo-logo.png"
                alt="Centurion NBO"
                width={112}
                height={112}
                priority
                className="h-11 w-auto object-contain sm:h-14"
              />
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
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
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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

              <div className="hidden xl:block">
                <ThemeToggle />
              </div>

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((open) => !open)}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition active:scale-95 xl:hidden ${
                  menuOpen
                    ? darkMode
                      ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-300"
                      : "border-yellow-300 bg-yellow-50 text-yellow-700"
                    : darkMode
                      ? "border-white/10 bg-white/[0.04] text-white"
                      : "border-yellow-100 bg-white text-[#0f172a]"
                }`}
              >
                {menuOpen ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <nav
            id="mobile-nav"
            className={`grid transition-all duration-300 ease-out xl:hidden ${
              menuOpen
                ? "mt-3 max-h-[min(70dvh,520px)] grid-rows-[1fr] opacity-100"
                : "max-h-0 grid-rows-[0fr] opacity-0"
            }`}
            aria-hidden={!menuOpen}
          >
            <div className="overflow-hidden">
              <div
                className={`flex flex-col gap-1 border-t pt-3 ${
                  darkMode ? "border-white/10" : "border-yellow-100"
                }`}
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => handleNavigate(item.path)}
                      className={navButtonClass(isActive)}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <div className="mt-2 pt-2">
                  <ThemeToggle variant="menu" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
