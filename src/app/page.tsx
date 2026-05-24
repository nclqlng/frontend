"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

import missionCenturion from "@/../public/centurion-assets/mission-centurion.jpg";
import mdrtAwardees from "@/../public/centurion-assets/mdrt.jpg";
import centurionTeam from "@/../public/centurion-assets/centurion-team.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroTypingHeadline from "@/components/HeroTypingHeadline";
import CoreValuesSection from "@/components/CoreValuesSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import CampaignsRecognitionSection from "@/components/CampaignsRecognitionSection";


const recognitions = [
  "League of Legends",
  "2025 Medallion Qualifiers",
  "2024–2025 Macaulay Club Qualifiers",
  "2025 IQA Awardees",
  "Centurion Tree MDRT Force",
  "2026 MDRT Members",
  "Maple Leaf PH Qualifiers",
  "Producers' League Qualifiers",
  "Triple A Qualifiers",
];

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <>
      <Header />
      <main id="home"
        className={`overflow-hidden transition-colors duration-500 ${
          darkMode
            ? "bg-[#050816] text-white"
            : "bg-[#f8fafc] text-[#0f172a]"
        }`}
      >
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          {/* BACKGROUND — Sun Life sun motif, same color palette */}
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 transition duration-700 ${
                darkMode
                  ? "bg-gradient-to-br from-[#050816] via-[#050816] to-[#0a1628]"
                  : "bg-gradient-to-br from-white via-[#fffef8] to-[#f8fafc]"
              }`}
            />

            {/* Sun glow — top left */}
            <div
              className={`pointer-events-none absolute -left-[12%] -top-[18%] h-[min(85vw,680px)] w-[min(85vw,680px)] rounded-full blur-3xl transition duration-700 ${
                darkMode
                  ? "bg-[radial-gradient(circle,rgb(250_204_21/0.35)_0%,rgb(250_204_21/0.12)_35%,transparent_68%)]"
                  : "bg-[radial-gradient(circle,rgb(253_224_71/0.5)_0%,rgb(254_240_138/0.25)_40%,transparent_70%)]"
              }`}
            />

            <div
              className={`pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full blur-3xl transition duration-700 ${
                darkMode ? "bg-yellow-400/20" : "bg-yellow-300/30"
              }`}
            />

            <div
              className={`pointer-events-none absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-3xl transition duration-700 ${
                darkMode ? "bg-blue-500/20" : "bg-yellow-200/40"
              }`}
            />

            {/* Decorative sun rings */}
            <div
              className={`sunlife-arc pointer-events-none absolute -left-24 -top-24 h-[min(100vw,520px)] w-[min(100vw,520px)] transition duration-700 ${
                darkMode ? "border-yellow-400/10" : "border-yellow-400/20"
              }`}
            />
            <div
              className={`sunlife-arc pointer-events-none absolute -left-16 -top-16 h-[min(80vw,420px)] w-[min(80vw,420px)] transition duration-700 ${
                darkMode ? "border-yellow-400/5" : "border-yellow-300/15"
              }`}
            />

            <div
              className={`sunlife-rays pointer-events-none absolute inset-0 transition duration-700 ${
                darkMode ? "opacity-50" : "opacity-70"
              }`}
            />

            <div
              className={`sunlife-mesh pointer-events-none absolute inset-0 transition duration-700 ${
                darkMode ? "opacity-35" : "opacity-50"
              }`}
            />

            <Image
              src={centurionTeam}
              alt="Centurion Team"
              fill
              priority
              className={`object-cover transition duration-700 ${
                darkMode ? "opacity-20" : "opacity-10"
              }`}
            />

            <div
              className={`absolute inset-0 transition duration-700 ${
                darkMode
                  ? "bg-gradient-to-b from-[#050816]/40 via-[#050816]/70 to-[#050816]"
                  : "bg-gradient-to-b from-white/20 via-white/50 to-white"
              }`}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-40">
            <div
              className={`inline-flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-xl ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-yellow-200 bg-white/80 shadow-lg"
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-yellow-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-500">
                Sun Life Centurion NBO
              </p>
            </div>

            <div className="mt-10 grid w-full items-start gap-10 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
              {/* LEFT — headline & CTAs */}
              <div className="flex flex-col justify-center lg:min-h-[520px]">
                <HeroTypingHeadline darkMode={darkMode} />

                <p
                  className={`mt-8 max-w-2xl text-lg leading-9 ${
                    darkMode ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  A next-generation community of purpose-driven financial
                  advisors committed to creating brighter futures for Filipino
                  families.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#core-values"
                    className="rounded-full bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#050816] transition hover:scale-[1.03]"
                  >
                    Explore Culture
                  </a>

                  <a
                    href="#get-involved"
                    className={`rounded-full border px-8 py-4 text-sm font-bold uppercase tracking-wide backdrop-blur-xl transition ${
                      darkMode
                        ? "border-white/10 bg-white/5 text-white hover:border-yellow-400/40 hover:bg-white/10"
                        : "border-yellow-200 bg-white text-[#0f172a] shadow-lg hover:border-yellow-400"
                    }`}
                  >
                    Join Our Team
                  </a>
                </div>
              </div>

              {/* RIGHT — image aligned with headline */}
              <div className="relative w-full lg:sticky lg:top-40">
                <div
                  className={`relative overflow-hidden rounded-[2.5rem] border p-3 backdrop-blur-2xl sm:p-4 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-yellow-100 bg-white/70 shadow-2xl"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:aspect-[5/6] lg:aspect-[4/5]">
                    <Image
                      src={centurionTeam}
                      alt="Centurion Team"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-[center_22%]"
                    />

                    <div
                      className={`absolute inset-0 ${
                        darkMode
                          ? "bg-gradient-to-t from-[#050816] via-[#050816]/20"
                          : "bg-gradient-to-t from-white/80 via-white/20"
                      } to-transparent`}
                    />
                  </div>

                  {/* FLOATING CARD */}
                  <div
                    className={`absolute bottom-4 left-4 right-4 rounded-[1.5rem] border p-5 backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[2rem] sm:p-6 ${
                      darkMode
                        ? "border-white/10 bg-white/10"
                        : "border-white/50 bg-white/80 shadow-xl"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
                          Centurion Culture
                        </p>

                        <h2
                          className={`mt-2 text-2xl font-black sm:mt-3 sm:text-3xl ${
                            darkMode ? "text-white" : "text-[#0f172a]"
                          }`}
                        >
                          Growth. Trust. Impact.
                        </h2>
                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black text-[#050816] sm:h-16 sm:w-16 sm:text-2xl">
                        +
                      </div>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-7 sm:mt-5 sm:text-base sm:leading-8 ${
                        darkMode ? "text-white/65" : "text-slate-600"
                      }`}
                    >
                      Building brighter lives through mentorship, leadership,
                      and meaningful service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS — full width below hero columns */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-16">
              {[
                {
                  value: "2026",
                  label: "Anchored & Becoming",
                },
                {
                  value: "100%",
                  label: "Purpose Driven",
                },
                {
                  value: "∞",
                  label: "Growth Mindset",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-3xl border p-6 backdrop-blur-xl ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-yellow-100 bg-white shadow-xl"
                  }`}
                >
                  <h3 className="text-3xl font-black text-yellow-500">
                    {item.value}
                  </h3>

                  <p
                    className={`mt-2 text-sm uppercase tracking-[0.2em] ${
                      darkMode ? "text-white/50" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MissionVisionSection
          darkMode={darkMode}
          missionImage={missionCenturion}
          visionImage={mdrtAwardees}
        />

        <CoreValuesSection darkMode={darkMode} />

        <CampaignsRecognitionSection
          darkMode={darkMode}
          recognitions={recognitions}
        />

        <Footer />
      </main>
    </>
  );
}
