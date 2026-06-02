"use client";

import dynamic from "next/dynamic";

const MedalCanvas = dynamic(() => import("./MedalCanvas"), {
  ssr: false,
});

export default function Medal3D({ label }: { label: string }) {
  return (
    <div className="relative flex flex-col items-center">

      {/* 3D MEDAL */}
      <MedalCanvas />

      {/* FLOATING PILL LABEL (HUD STYLE) */}
      <div className="absolute bottom-0 translate-y-[110%]">
        <div className="px-6 py-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 backdrop-blur-md text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase shadow-[0_0_25px_rgba(250,204,21,0.18)] hover:scale-105 transition-transform duration-300 whitespace-nowrap">
          {label}
        </div>
      </div>

    </div>
  );
}