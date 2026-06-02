"use client";

import Medal3D from "@/components/Medal3D";
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

export default function CampaignsRecognitionSection({ darkMode }: Props) {
  const { ref, visible } = useInView(0.15);

  return (
    <section
      ref={ref}
      style={{ fontFamily: "Gotham, sans-serif" }}
      className={`relative overflow-hidden px-6 py-40 ${
        darkMode ? "bg-[#050816]" : "bg-white"
      }`}
    >
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
          className={`mt-10 text-6xl font-black leading-[0.95] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${darkMode ? "text-white" : "text-[#0f172a]"}`}
        >
          #2026 <br />
          <SectionTitleHighlight>ANCHORED</SectionTitleHighlight> <br />
          AND <span className="text-blue-500">BECOMING</span>
        </h2>
      </div>

      {/* LABEL */}
      <div
        className={`text-center mt-10 transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs font-bold tracking-[0.5em] text-yellow-500">
          Recognition Standard
        </span>
      </div>

      {/* MEDALS */}
      <div className="mt-20 flex flex-wrap justify-center gap-12">

        <Medal3D label="MEDALLION" />

        <a
          href="https://drive.google.com/file/d/1A93wmFABPWFgwMlwgbEjOmsdeD8-yWHI/view?usp=drivesdk"
          target="_blank"
        >
          <Medal3D label="MACAULAY CLUB" />
        </a>

        <a
          href="https://p1.aprimocdn.net/sunlife/5ab17fed-0548-44e9-8444-b321005592b7/2026%20mdrt%20guidelines-original-file.pdf"
          target="_blank"
        >
          <Medal3D label="MILLION DOLLAR ROUND TABLE (MDRT)" />
        </a>

      </div>

      {/* TEXT (UNCHANGED) */}
      <div className="text-center mt-20 max-w-5xl mx-auto">
        <p className="text-4xl font-black text-yellow-500">
          Three pillars of recognition
        </p>

        <p className="mt-4 text-sm tracking-[0.35em] uppercase text-gray-400">
          Built on discipline • driven by performance • defined by leadership
        </p>

      </div>
    </section>
  );
}