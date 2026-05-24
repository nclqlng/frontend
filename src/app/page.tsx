"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

import centurionTeam from "@/../public/centurion-assets/centurion-team.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const coreValues = [
  {
    title: "Courage",
    letter: "C",
    description:
      "Taking action in adversity and overcoming challenges with perseverance.",
  },
  {
    title: "Honor",
    letter: "H",
    description:
      "Leading with integrity, transparency, gratitude, and respect.",
  },
  {
    title: "Accountability",
    letter: "A",
    description:
      "Owning our actions, commitments, and growth with responsibility.",
  },
  {
    title: "Excellence",
    letter: "E",
    description:
      "Delivering quality work with consistency, care, and competence.",
  },
  {
    title: "Leadership",
    letter: "L",
    description:
      "Influencing others through service, stewardship, and example.",
  },
];

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
      <main
        className={`overflow-hidden transition-colors duration-500 ${
          darkMode
            ? "bg-[#050816] text-white"
            : "bg-[#f8fafc] text-[#0f172a]"
        }`}
      >
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
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
                darkMode ? "bg-[#050816]" : "bg-white"
              }`}
            />

            <div
              className={`absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full blur-3xl ${
                darkMode ? "bg-yellow-400/20" : "bg-yellow-300/30"
              }`}
            />

            <div
              className={`absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-3xl ${
                darkMode ? "bg-blue-500/20" : "bg-yellow-200/40"
              }`}
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">
            <div className="grid w-full items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT */}
              <div>
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

                <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]">
                  Empowering
                  <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Advisors
                  </span>

                  <span
                    className={`block ${
                      darkMode ? "text-white/90" : "text-[#0f172a]"
                    }`}
                  >
                    Protecting Futures
                  </span>
                </h1>

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

                {/* STATS */}
                <div className="mt-16 grid gap-5 sm:grid-cols-3">
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

              {/* RIGHT */}
              <div className="relative">
                <div
                  className={`relative overflow-hidden rounded-[2.5rem] border p-4 backdrop-blur-2xl ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-yellow-100 bg-white/70 shadow-2xl"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <Image
                      src={centurionTeam}
                      alt="Centurion Team"
                      className="h-[620px] w-full object-cover"
                    />

                    <div
                      className={`absolute inset-0 ${
                        darkMode
                          ? "bg-gradient-to-t from-[#050816]"
                          : "bg-gradient-to-t from-white/70"
                      } via-transparent to-transparent`}
                    />
                  </div>

                  {/* FLOATING CARD */}
                  <div
                    className={`absolute bottom-8 left-8 right-8 rounded-[2rem] border p-6 backdrop-blur-2xl ${
                      darkMode
                        ? "border-white/10 bg-white/10"
                        : "border-white/50 bg-white/80 shadow-xl"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
                          Centurion Culture
                        </p>

                        <h2
                          className={`mt-3 text-3xl font-black ${
                            darkMode ? "text-white" : "text-[#0f172a]"
                          }`}
                        >
                          Growth. Trust. Impact.
                        </h2>
                      </div>

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl font-black text-[#050816]">
                        +
                      </div>
                    </div>

                    <p
                      className={`mt-5 leading-8 ${
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
          </div>
        </section>

        {/* MISSION */}
        <section className="px-6 pb-32">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            {/* MISSION CARD */}
            <div
              className={`rounded-[2.5rem] border p-10 backdrop-blur-2xl transition duration-500 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-yellow-100 bg-white shadow-2xl"
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-500">
                Mission
              </p>

              <h3
                className={`mt-5 text-5xl font-black leading-tight ${
                  darkMode ? "text-white" : "text-[#0f172a]"
                }`}
              >
                Empowering advisors with purpose.
              </h3>

              <p
                className={`mt-6 text-lg leading-9 ${
                  darkMode ? "text-white/60" : "text-slate-600"
                }`}
              >
                Developing purpose-driven financial advisors through mentorship,
                collaboration, and excellence in service.
              </p>
            </div>

            {/* VISION CARD */}
            <div
              className={`rounded-[2.5rem] p-10 transition duration-500 ${
                darkMode
                  ? "bg-gradient-to-br from-yellow-300 to-yellow-500 text-[#050816]"
                  : "border border-yellow-200 bg-gradient-to-br from-yellow-100 to-yellow-300 text-[#0f172a] shadow-2xl"
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em]">
                Vision
              </p>

              <h3 className="mt-5 text-5xl font-black leading-tight">
                Protecting brighter futures.
              </h3>

              <p
                className={`mt-6 text-lg leading-9 ${
                  darkMode ? "text-[#050816]/80" : "text-[#0f172a]/70"
                }`}
              >
                Becoming a trusted community known for integrity, growth, and
                meaningful impact in Filipino families.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section
          id="core-values"
          className="relative overflow-hidden px-6 py-32"
        >
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
                  Core Values
                </p>

                <h2
                  className={`mt-5 text-5xl font-black leading-[1] tracking-[-0.04em] sm:text-7xl ${
                    darkMode ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  The foundation
                  <span
                    className={`block ${
                      darkMode ? "text-white/40" : "text-slate-400"
                    }`}
                  >
                    of our culture
                  </span>
                </h2>
              </div>

              <p
                className={`max-w-lg text-lg leading-9 ${
                  darkMode ? "text-white/55" : "text-slate-600"
                }`}
              >
                Our values shape the way we lead, serve, collaborate, and create
                impact as one Centurion community.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03] hover:border-yellow-400/30 hover:bg-white/[0.06]"
                      : "border-yellow-100 bg-white shadow-xl hover:border-yellow-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-2xl font-black text-[#050816]">
                      {value.letter}
                    </div>

                    <p
                      className={`text-sm font-bold ${
                        darkMode ? "text-white/30" : "text-slate-300"
                      }`}
                    >
                      0{index + 1}
                    </p>
                  </div>

                  <h3
                    className={`mt-8 text-3xl font-black tracking-tight ${
                      darkMode ? "text-white" : "text-[#0f172a]"
                    }`}
                  >
                    {value.title}
                  </h3>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-yellow-400/70 to-transparent" />

                  <p
                    className={`mt-6 leading-8 ${
                      darkMode ? "text-white/60" : "text-slate-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPAIGNS & RECOGNITION */}
        <section className="px-6 pb-32">
          <div
            className={`mx-auto max-w-7xl rounded-[3rem] border p-10 backdrop-blur-2xl transition duration-500 ${
              darkMode
                ? "border-white/10 bg-white/[0.03]"
                : "border-yellow-100 bg-white/80 shadow-2xl"
            }`}
          >
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
                  Campaigns & Recognition
                </p>

                <h2
                  className={`mt-5 text-5xl font-black leading-[1] tracking-[-0.04em] ${
                    darkMode ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  #2026
                  <span
                    className={`block ${
                      darkMode ? "text-white/40" : "text-slate-400"
                    }`}
                  >
                    ANCHORED AND BECOMING
                  </span>
                </h2>
              </div>

              <p
                className={`max-w-xl text-lg leading-9 ${
                  darkMode ? "text-white/55" : "text-slate-600"
                }`}
              >
                A curated showcase of campaigns, recognitions, and standout
                achievements that define growth and impact across the Centurion
                community.
              </p>
            </div>

            <div className="relative mt-16">
              <div
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
                style={{
                  scrollbarWidth: "none",
                }}
              >
                {recognitions.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex min-w-[320px] flex-shrink-0 snap-center rounded-[2.2rem] border p-8 transition-all duration-300 hover:scale-[1.04] sm:min-w-[380px] ${
                      darkMode
                        ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                        : "border-yellow-100 bg-white shadow-lg hover:shadow-2xl"
                    }`}
                  >
                    <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 blur-3xl" />

                    <div className="mb-5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="text-xs uppercase tracking-widest text-yellow-500">
                        Featured Recognition
                      </span>
                    </div>

                    <p
                      className={`text-lg font-semibold leading-8 ${
                        darkMode ? "text-white/90" : "text-slate-800"
                      }`}
                    >
                      {item}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-yellow-500/70">
                        View recognition →
                      </span>

                      <span className="text-xs text-white/30">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/0 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/0 to-transparent" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
