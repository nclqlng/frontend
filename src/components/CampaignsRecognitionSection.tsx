"use client";

import { SectionTitleHighlight } from "@/components/SectionHeading";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  darkMode: boolean;
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

/* -------------------- REALISTIC MEDAL LACE COMPONENT -------------------- */
function MedalLace() {
  return (
    <div className="absolute left-1/2 -top-40 flex -translate-x-1/2 flex-col items-center pointer-events-none">
      <div className="absolute left-1/2 -translate-x-[14px] h-36 w-5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-400/30" />
      <div className="absolute left-1/2 translate-x-[6px] h-36 w-5 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/20" />
      <div className="absolute left-1/2 -translate-x-1/2 h-36 w-8 bg-gradient-to-b from-blue-600/10 to-transparent" />

      <div className="relative h-16 w-32 mt-36">
        <div className="absolute -left-2 top-0 h-16 w-16 bg-gradient-to-r from-blue-400/95 to-blue-500/70 rounded-l-full shadow-lg shadow-blue-400/25" />
        <div className="absolute -right-2 top-0 h-16 w-16 bg-gradient-to-l from-blue-400/95 to-blue-500/70 rounded-r-full shadow-lg shadow-blue-400/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/90 to-blue-500/60 rounded-b-2xl shadow-[0_12px_20px_rgba(59,130,246,0.2)]" />
        <div className="absolute inset-0 h-8 bg-gradient-to-b from-blue-200/50 to-transparent rounded-b-2xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-8 bg-blue-600/40 rounded-full shadow-md" />
      </div>

      <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-24 w-40 bg-blue-400/8 blur-3xl rounded-full" />
    </div>
  );
}

/* -------------------- MEDAL WRAPPER -------------------- */
function Medal({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex justify-center"
    >
      <MedalLace />

      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-yellow-300/8 blur-3xl" />
      </div>

      <img
        src={src}
        alt={alt}
        className="h-96 w-auto object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-125"
      />
    </a>
  );
}

/* -------------------- MAIN SECTION -------------------- */
export default function CampaignsRecognitionSection({ darkMode }: Props) {
  const { ref, visible } = useInView(0.15);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden px-6 py-40 ${
        darkMode ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* gold ambient field */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_70%)]" />

      {/* HEADER */}
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-1.5 animate-[float_4s_ease-in-out_infinite]">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
            Campaign Mechanics
          </span>
        </div>

        <h2
          className={`mt-10 text-6xl font-black leading-[0.95] tracking-[-0.04em] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${darkMode ? "text-white" : "text-[#0f172a]"}`}
        >
          #2026
          <br />
          <SectionTitleHighlight>ANCHORED</SectionTitleHighlight>
          <br />
          <span className={darkMode ? "text-white" : "text-[#0f172a]"}>
            AND{" "}
            <span className={darkMode ? "text-blue-400" : "text-blue-700"}>
              BECOMING
            </span>
          </span>
        </h2>
      </div>

 {/* -------------------- MODERN EDITORIAL RECOGNITION STANDARD -------------------- */}
 <div
  className={`relative mx-auto mt-8 max-w-5xl transition-all duration-700 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
  {/* top floating label (editorial style, not boxed) */}
  <div className="flex items-center justify-center mb-10">
    <div className="flex items-center gap-3">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <span className="text-xs font-bold uppercase tracking-[0.5em] text-yellow-500">
        Recognition Standard
      </span>

      <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </div>
  </div>
</div>

      {/* MEDALS */}
      <div className="relative mt-56 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        <Medal
          href="https://drive.google.com/file/d/1wGtSuKMdPCmzcW2yjcZq0M8UwRvsKQ3j/view?usp=drivesdk"
          src="/centurion-assets/medallion-gif.gif"
          alt="Medallion Recognition"
        />

        <Medal
          href="https://p1.aprimocdn.net/sunlife/5ab17fed-0548-44e9-8444-b321005592b7/2026%20mdrt%20guidelines-original-file.pdf"
          src="/centurion-assets/mc-gid.gif"
          alt="Macaulay Club Recognition"
        />

        <Medal
          href="https://drive.google.com/file/d/1A93wmFABPWFgwMlwgbEjOmsdeD8-yWHI/view?usp=drivesdk"
          src="/centurion-assets/mdrt-gif.gif"
          alt="MDRT Recognition"
        />
      </div>

 <div className="relative mx-auto mt-14 max-w-5xl transition-all duration-700">
  {/* MAIN TITLE (big editorial style, no container) */}
  <div className="text-center">
    <p className="text-4xl sm:text-5xl font-black tracking-tight">
      <span className="text-yellow-500">Three pillars</span>{" "}
      <span className={darkMode ? "text-white" : "text-slate-900"}>
        of recognition
      </span>
    </p>

    <p
      className={`mt-4 text-sm sm:text-base tracking-[0.35em] uppercase ${
        darkMode ? "text-white/60" : "text-slate-500"
      }`}
    >
      Built on discipline • driven by performance • defined by leadership
    </p>
  </div>

  {/* PILLARS - MODERN FLOATING CHIPS */}
  <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">

    {/* Discipline */}
    <div className="group relative px-8 py-5 rounded-full backdrop-blur-md border border-yellow-400/30 bg-white/5 hover:bg-yellow-400/10 transition-all duration-500">
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl" />

      <p className="relative text-sm font-semibold tracking-[0.3em] text-yellow-500">
        MEDALLION
      </p>
    </div>

    {/* Macaulay Club */}
    <div className="group relative px-8 py-5 rounded-full backdrop-blur-md border border-yellow-400/30 bg-white/5 hover:bg-yellow-400/10 transition-all duration-500">
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl" />

      <p className="relative text-sm font-semibold tracking-[0.3em] text-yellow-500">
        MACAULAY CLUB
      </p>
    </div>

    {/* MDRT */}
    <div className="group relative px-8 py-5 rounded-full backdrop-blur-md border border-yellow-400/30 bg-white/5 hover:bg-yellow-400/10 transition-all duration-500">
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl" />

      <p className="relative text-center text-sm font-semibold tracking-[0.3em] text-yellow-500">
        MILLION DOLLAR ROUND TABLE (MDRT)
      </p>
    </div>
  </div>

  {/* subtle motion divider */}
  <div className="mt-14 flex items-center justify-center">
    <div className="h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
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
