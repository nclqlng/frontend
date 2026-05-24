"use client";

import {
  Award,
  CheckCircle2,
  Shield,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CoreValuesSectionProps = {
  darkMode: boolean;
};

type CoreValue = {
  title: string;
  letter: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
};

const coreValues: CoreValue[] = [
  {
    title: "Courage",
    letter: "C",
    tagline: "Act with heart",
    description:
      "Taking action in adversity and overcoming challenges with perseverance.",
    icon: Shield,
  },
  {
    title: "Honor",
    letter: "H",
    tagline: "Lead with integrity",
    description:
      "Leading with integrity, transparency, gratitude, and respect.",
    icon: Award,
  },
  {
    title: "Accountability",
    letter: "A",
    tagline: "Own the outcome",
    description:
      "Owning our actions, commitments, and growth with responsibility.",
    icon: CheckCircle2,
  },
  {
    title: "Excellence",
    letter: "E",
    tagline: "Raise the bar",
    description:
      "Delivering quality work with consistency, care, and competence.",
    icon: Star,
  },
  {
    title: "Leadership",
    letter: "L",
    tagline: "Serve and elevate",
    description:
      "Influencing others through service, stewardship, and example.",
    icon: Users,
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once for smoother perf
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

function ValueCard({
  value,
  index,
  darkMode,
}: {
  value: CoreValue;
  index: number;
  darkMode: boolean;
}) {
  const { ref, visible } = useInView(0.15);
  const Icon = value.icon;
  const num = String(index + 1).padStart(2, "0");

  // subtle hover tilt (no libs)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `perspective(900px) rotateX(${y * -6}deg) rotateY(${
      x * 6
    }deg) translateY(-2px)`;
  };

  const resetTransform = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <article
      ref={ref}
      className={`group relative transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className={`relative h-full overflow-hidden rounded-[2rem] p-[1px] transition-all duration-500 ease-out hover:shadow-[0_25px_80px_-20px_rgba(250,204,21,0.45)] ${
          darkMode
            ? "bg-gradient-to-br from-yellow-400/40 via-white/10 to-transparent"
            : "bg-gradient-to-br from-yellow-300/70 via-yellow-100/50 to-yellow-50"
        }`}
      >
        <div
          className={`relative flex h-full flex-col overflow-hidden rounded-[1.95rem] p-6 sm:p-7 ${
            darkMode ? "bg-[#050816]" : "bg-white"
          }`}
        >
          {/* floating glow */}
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-yellow-400/10 blur-2xl animate-[float_6s_ease-in-out_infinite]" />

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-lg font-black text-[#050816] shadow-md shadow-yellow-500/20 transition-transform duration-300 group-hover:scale-110">
                {value.letter}
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:rotate-6 ${
                  darkMode
                    ? "border-yellow-400/25 bg-yellow-400/10 text-yellow-400"
                    : "border-yellow-200 bg-yellow-50 text-yellow-600"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </div>
            </div>

            <span
              className={`text-sm font-bold tabular-nums transition-opacity duration-300 ${
                darkMode ? "text-white/25" : "text-slate-300"
              }`}
            >
              {num}
            </span>
          </div>

          <h3
            className={`mt-6 text-2xl font-black tracking-tight transition-all duration-300 group-hover:tracking-wide ${
              darkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            {value.title}
          </h3>

          <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-yellow-500">
            {value.tagline}
          </p>

          <div className="my-5 h-px w-full bg-gradient-to-r from-yellow-400/70 via-yellow-400/20 to-transparent" />

          <p
            className={`flex-1 text-sm leading-7 ${
              darkMode ? "text-white/55" : "text-slate-600"
            }`}
          >
            {value.description}
          </p>

          <div
            className={`mt-6 inline-flex w-fit items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 ${
              darkMode
                ? "border-yellow-400/30 text-yellow-400/80"
                : "border-yellow-300 text-yellow-600"
            }`}
          >
            C.H.A.E.L.
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CoreValuesSection({
  darkMode,
}: CoreValuesSectionProps) {
  const { ref: sectionRef, visible: sectionVisible } = useInView(0.08);
  const acronym = coreValues.map((v) => v.letter).join(".");

  return (
    <section
      ref={sectionRef}
      id="core-values"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* ambient glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite] ${
          darkMode ? "bg-yellow-400/8" : "bg-yellow-200/40"
        }`}
      />

      <div className="sunlife-rays pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-1.5 animate-[float_4s_ease-in-out_infinite]">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
              Our Core Values
            </span>
          </div>

          <h2
            className={`mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${
              darkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            The foundation
            <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              of our culture
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-lg leading-8 ${
              darkMode ? "text-white/55" : "text-slate-600"
            }`}
          >
            Our values shape the way we lead, serve, collaborate, and create
            impact as one Centurion community.
          </p>
        </div>

        {/* Acronym */}
        <div
          className={`mx-auto mt-12 max-w-4xl transition-all duration-1000 delay-150 ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-[2rem] border px-6 py-8 sm:px-10 sm:py-10 ${
              darkMode
                ? "border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-white/[0.03] to-blue-500/5"
                : "border-yellow-200 bg-gradient-to-r from-yellow-50 via-white to-amber-50 shadow-xl shadow-yellow-100/50"
            }`}
          >
            <p
              className={`text-center text-xs font-bold uppercase tracking-[0.35em] ${
                darkMode ? "text-white/40" : "text-slate-500"
              }`}
            >
              We live by the acronym
            </p>

            <p className="mt-3 text-center text-4xl font-black tracking-[0.2em] text-yellow-500 sm:text-5xl">
              {acronym}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {coreValues.map((value, i) => (
                <span
                  key={value.letter}
                  className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider sm:text-xs transition-transform duration-300 hover:scale-105 ${
                    darkMode
                      ? "border-white/10 bg-white/5 text-white/60"
                      : "border-yellow-200 bg-white text-slate-600"
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="text-yellow-500">{value.letter}</span>
                  <span className="mx-1 opacity-40">·</span>
                  {value.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 xl:grid-cols-5">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              value={value}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          className={`mt-12 flex flex-col items-center justify-between gap-4 rounded-[2rem] border px-6 py-6 sm:flex-row sm:px-8 transition-all duration-1000 ${
            darkMode
              ? "border-white/10 bg-white/[0.03]"
              : "border-yellow-100 bg-white shadow-lg"
          } ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className={`text-center text-sm font-semibold sm:text-left ${
              darkMode ? "text-white/60" : "text-slate-600"
            }`}
          >
            <span className="font-black text-yellow-500">C.H.A.E.L.</span> —
            the character standard behind every Centurion advisor.
          </p>

          <a
            href="#get-involved"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#050816] transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            Join our culture
          </a>
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}