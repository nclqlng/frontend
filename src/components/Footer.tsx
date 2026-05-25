"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import {
  Globe,
  MapPin,
  Building2,
  ExternalLink,
  Rocket,
  HeartHandshake,
  Link as LinkIcon,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative border-t">

      {/* ================= SCROLL TO TOP BUTTON ================= */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-[#050816] shadow-lg shadow-yellow-400/20 transition-all duration-500
        ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-6"
        }`}
      >
        <ArrowUp className="h-5 w-5 animate-bounce" />
      </button>

      {/* ================= FOOTER ================= */}
      <div
        className={`px-6 py-32 transition-colors duration-500 ${
          darkMode ? "bg-[#050816] text-white" : "bg-white text-[#0f172a]"
        }`}
      >

        {/* HERO STRIP */}
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

            {/* BRAND */}
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <Image
                  src="/centurion-assets/ctnbo-logo.png"
                  alt="Centurion NBO"
                  width={120}
                  height={120}
                  className="h-12 w-auto object-contain sm:h-14"
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-yellow-500">
                    Centurion
                  </p>
                  <p className={`text-sm ${
                    darkMode ? "text-white/60" : "text-slate-500"
                  }`}>
                    Sun Life 96th New Business Office
                  </p>
                </div>
              </div>

              <p className={`max-w-xl text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-500"
              }`}>
                We develop leaders, serve with excellence, and create lasting impact
                through meaningful financial solutions built on trust, discipline,
                and purpose.
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-yellow-500">
                <HeartHandshake className="h-4 w-4" />
                Build your future with us
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 md:items-end">

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-[#050816] transition hover:scale-[1.03]"
              >
                <Rocket className="h-4 w-4" />
                Get Involved
              </a>

              <p className={`text-xs tracking-[0.3em] uppercase ${
                darkMode ? "text-white/40" : "text-slate-500"
              }`}>
                Opportunities • Leadership • Growth
              </p>

            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

          {/* GRID */}
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3">

            {/* CONNECT */}
            <div className="space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-yellow-500">
                Connect
              </p>

              <div className="space-y-5 text-sm">

                <a href="https://www.sunlife.com.ph/en/" target="_blank"
                  className="flex items-center gap-2 hover:text-yellow-500 transition">
                  <Globe className="h-4 w-4" />
                  Sun Life Philippines
                  <ExternalLink className="ml-auto h-3 w-3 opacity-40" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=61578119323360" target="_blank"
                  className="flex items-center gap-2 hover:text-yellow-500 transition">
                  <LinkIcon className="h-4 w-4" />
                  Facebook Page
                  <ExternalLink className="ml-auto h-3 w-3 opacity-40" />
                </a>

                <a href="https://www.instagram.com/live%20brighter%20with%20palmas" target="_blank"
                  className="flex items-center gap-2 hover:text-yellow-500 transition">
                  <LinkIcon className="h-4 w-4" />
                  Instagram
                  <ExternalLink className="ml-auto h-3 w-3 opacity-40" />
                </a>

              </div>
            </div>

            {/* OFFICES */}
            <div className="space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-yellow-500">
                Offices
              </p>

              <div className="space-y-8">

                <div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Building2 className="h-4 w-4 text-yellow-500" />
                    Headquarters
                  </div>
                  <p className={darkMode ? "text-white/60" : "text-slate-500"}>
                    Rada Street, Makati, Philippines, 1229
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Building2 className="h-4 w-4 text-yellow-500" />
                    Centurion Tree NBO
                  </div>
                  <p className={darkMode ? "text-white/60" : "text-slate-500"}>
                    8th Floor, One Trium Tower, Alabang, Muntinlupa
                  </p>
                </div>

              </div>
            </div>

            {/* PURPOSE */}
            <div className="space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-yellow-500">
                Purpose
              </p>

              <p className={`text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-500"
              }`}>
                Anchored in discipline, driven by performance, and shaped by leadership—
                we empower individuals to build meaningful financial futures rooted in trust.
              </p>

              <div className="pt-6 text-sm font-medium text-yellow-500">
                Discipline • Performance • Leadership
              </div>
            </div>

          </div>

          {/* FINAL BAR */}
          <div className={`mt-20 flex flex-col gap-3 border-t pt-10 md:flex-row md:items-center md:justify-between text-sm ${
            darkMode ? "text-white/40 border-white/10" : "text-slate-500 border-slate-200"
          }`}>
            <p>© 2026 Sun Life Centurion NBO</p>
            <p>Anchored in Purpose • Built for Excellence</p>
          </div>

        </div>
      </div>
    </footer>
  );
}