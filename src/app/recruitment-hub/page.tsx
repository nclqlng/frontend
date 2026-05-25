"use client";

import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Rocket, Zap } from "lucide-react";
import LicensingFlow from "@/components/LicensingFlow";
import LiveBrighterPortalGuide from "@/components/LiveBrighterPortalGuide";
import RecruitmentTrainingReviewer from "@/components/RecruitmentTrainingReviewer";
import HubPageBackground from "@/components/HubPageBackground";
import RevealSection, { revealTransitionClass } from "@/components/RevealSection";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "ACTIVE RECRUITERS", value: "150+", icon: Users },
  { label: "SUCCESSFUL PLACEMENTS", value: "2.5K+", icon: Target },
  { label: "TIME TO HIRE", value: "45%", icon: Rocket, suffix: "faster" },
  { label: "CANDIDATE SATISFACTION", value: "98%", icon: Zap, suffix: "rate" },
];

function StatCard({
  stat,
  index,
  darkMode,
}: {
  stat: (typeof stats)[number];
  index: number;
  darkMode: boolean;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.1);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 ${revealTransitionClass(visible, "sm")} ${
        darkMode
          ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
          : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
          <Icon size={22} />
        </div>

        <p className="text-2xl font-black tracking-tight">{stat.value}</p>

        <p
          className={`mt-2 text-xs font-bold uppercase tracking-wide ${
            darkMode ? "text-white/50" : "text-slate-500"
          }`}
        >
          {stat.label}
        </p>

        {stat.suffix && (
          <p
            className={`text-[10px] font-medium uppercase ${
              darkMode ? "text-white/30" : "text-slate-400"
            }`}
          >
            {stat.suffix}
          </p>
        )}
      </div>
    </div>
  );
}

export default function RecruitmentHub() {
  const { darkMode } = useTheme();

  return (
    <>
      <Header />
      <HubPageBackground />
      <main
        id="recruitment-hub"
        className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-[#050816] text-white" : "bg-[#f8fafc] text-[#0f172a]"
        }`}
      >
        <RevealSection
          as="section"
          className="relative isolate overflow-hidden px-6 pt-44"
          size="sm"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.55em] text-yellow-500">
              Recruitment Hub System
            </p>

            <h1
              className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              YOUR BRIGHTER JOURNEY
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                BEGINS HERE
              </span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-600"
              }`}
            >
              A centralized recruitment system designed to connect talent,
              streamline hiring workflows, and empower smarter organizational
              decisions.
            </p>

            <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
          </div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={index}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </RevealSection>

        <div className="relative px-6 pb-36">
          <div className="relative mt-16">
            <LicensingFlow />
          </div>

          <div className="mt-16">
            <LiveBrighterPortalGuide />
          </div>

          <div className="mt-16">
            <RecruitmentTrainingReviewer />
          </div>

          <RevealSection as="div" className="mx-auto mt-32 max-w-4xl" size="sm">
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
                  <Users size={32} />
                </div>

                <h2
                  className={`text-3xl font-black md:text-4xl ${
                    darkMode ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  Ready to Start Your Journey?
                </h2>

                <p
                  className={`mx-auto mt-4 max-w-md text-sm leading-relaxed ${
                    darkMode ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Join our growing community of successful advisors and take the
                  first step toward a brighter future.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-yellow-500 to-yellow-600 transition-transform duration-500 group-hover:translate-x-0" />
                  </button>

                  <button
                    type="button"
                    className={`rounded-full border-2 px-8 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                      darkMode
                        ? "border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
                        : "border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    }`}
                  >
                    Learn More
                  </button>
                </div>

                <div className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

                <p
                  className={`mt-6 text-xs uppercase tracking-wide ${
                    darkMode ? "text-white/30" : "text-slate-400"
                  }`}
                >
                  Begin your brighter tomorrow today
                </p>
              </div>
            </div>
          </RevealSection>
        </div>

        <Footer />
      </main>
    </>
  );
}
