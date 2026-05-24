"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      id="get-involved"
      className="relative overflow-hidden px-6 pb-20"
    >
      <div
        className={`mx-auto max-w-7xl rounded-[3rem] border p-14 backdrop-blur-2xl transition duration-500 ${
          darkMode
            ? "border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02]"
            : "border-yellow-100 bg-gradient-to-br from-white to-yellow-50 shadow-2xl"
        }`}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
              Join Our Journey
            </p>

            <h2
              className={`mt-5 text-5xl font-black leading-[1] tracking-[-0.04em] sm:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Build a future
              <span
                className={`block ${
                  darkMode ? "text-white/40" : "text-slate-400"
                }`}
              >
                anchored in purpose
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="flex h-16 items-center justify-center rounded-full bg-yellow-400 px-10 text-sm font-bold uppercase tracking-wide text-[#050816] transition hover:scale-[1.03]"
          >
            Get Started
          </a>
        </div>

        <div
          className={`mt-16 rounded-[2rem] border p-10 text-center transition duration-500 ${
            darkMode
              ? "border-white/10 bg-white/[0.03]"
              : "border-yellow-100 bg-white shadow-xl"
          }`}
        >
          <p
            className={`text-2xl italic leading-10 ${
              darkMode ? "text-white/75" : "text-slate-700"
            }`}
          >
            “You will keep in perfect peace those whose minds are steadfast,
            because they trust in You.”
          </p>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-yellow-500">
            Isaiah 26:3
          </p>
        </div>

        <div
          className={`mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm lg:flex-row ${
            darkMode
              ? "border-white/10 text-white/35"
              : "border-yellow-100 text-slate-500"
          }`}
        >
          <p>© 2026 Sun Life Centurion NBO</p>

          <p>Anchored & Becoming</p>
        </div>
      </div>
    </footer>
  );
}
