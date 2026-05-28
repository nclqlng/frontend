"use client";

import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageBackground from "@/components/HubPageBackground";
import RevealSection from "@/components/RevealSection";
import { ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const { darkMode } = useTheme();

  return (
    <>
      <Header />
      <HubPageBackground />

      <main
        id="gallery"
        className={`relative z-10 min-h-screen overflow-hidden transition-colors duration-500 ${
          darkMode ? "text-white" : "text-[#0f172a]"
        }`}
      >
        <RevealSection
          as="section"
          className="relative isolate overflow-hidden px-6 pt-44"
          size="sm"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.55em] text-yellow-500">
              Gallery
            </p>

            <h1
              className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              MOMENTS THAT
              <span className="mt-2 block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Define Centurion
              </span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-600"
              }`}
            >
              Highlights from events, campaigns, and team milestones — curated
              for the community.
            </p>

            <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
          </div>
        </RevealSection>

        <div className="relative px-6 pb-36">
          <RevealSection as="div" className="mx-auto mt-20 max-w-4xl" size="sm" delay={120}>
            <div
              className={`relative overflow-hidden rounded-3xl border p-12 text-center transition-all duration-500 ${
                darkMode
                  ? "border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-transparent"
                  : "border-yellow-400/30 bg-gradient-to-br from-yellow-50 to-transparent"
              }`}
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl" />

              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500">
                  <ImageIcon size={32} />
                </div>

                <h2
                  className={`text-3xl font-black md:text-4xl ${
                    darkMode ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  Gallery Coming Soon
                </h2>

                <p
                  className={`mx-auto mt-4 max-w-md text-sm leading-relaxed ${
                    darkMode ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  We are preparing photo collections from Centurion events and
                  milestones. Check back for the full experience.
                </p>

                <div className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
              </div>
            </div>
          </RevealSection>
        </div>

        <Footer />
      </main>
    </>
  );
}
