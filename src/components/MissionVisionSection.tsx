"use client";

import Image, { type StaticImageData } from "next/image";
import { Sparkles, Target, Trophy } from "lucide-react";

type MissionVisionSectionProps = {
  darkMode: boolean;
  missionImage: StaticImageData;
  visionImage: StaticImageData;
};

const blocks = [
  {
    step: "01",
    label: "Our Mission",
    tagline: "What we do everyday",
    title: "Building Excellence Together",
    highlight: "Excellence",
    body: "Developing winning leaders, nurturing client relationships, and guiding clients toward financial security and success.",
    chips: ["Winning Leaders", "Client Relationships", "Financial Security"],
    icon: Target,
    imageAlt: "Centurion team at Sun Life — Building Excellence Together",
    accent: "from-yellow-400/25 via-transparent to-transparent",
    imagePosition: "left" as const,
  },
  {
    step: "02",
    label: "Our Vision",
    tagline: "What we want to accomplish",
    title: "A Strong Hold of Inspiring MDRTs",
    highlight: "Inspiring MDRTs",
    body: "Where excellence is the standard and leadership is multiplied.",
    chips: ["Circle of Excellence", "MDRT Culture", "Leadership Multiplied"],
    icon: Trophy,
    imageAlt: "Centurion MDRT medallion awardees",
    accent: "from-yellow-500/30 via-amber-400/10 to-transparent",
    imagePosition: "right" as const,
  },
];

export default function MissionVisionSection({
  darkMode,
  missionImage,
  visionImage,
}: MissionVisionSectionProps) {
  const images = [missionImage, visionImage];

  return (
    <section className="relative px-6 pb-32">
      {/* Section atmosphere */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-96 w-[min(100%,48rem)] -translate-x-1/2 rounded-full blur-3xl ${
          darkMode ? "bg-yellow-400/10" : "bg-yellow-300/25"
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section intro */}
        <div className="mb-14 text-center lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
              Purpose & Direction
            </span>
          </div>
          <h2
            className={`mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${
              darkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            What drives{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Centurion
            </span>
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-lg leading-8 ${
              darkMode ? "text-white/55" : "text-slate-600"
            }`}
          >
            Our mission fuels daily action. Our vision sets the bar for who we
            become.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            const image = images[index];
            const imageFirst = block.imagePosition === "left";

            const titleParts = block.title.split(block.highlight);
            const showHighlight = titleParts.length > 1;

            return (
              <article
                key={block.step}
                className={`group relative overflow-hidden rounded-[2.75rem] border transition duration-500 hover:shadow-[0_24px_80px_-24px_rgba(250,204,21,0.35)] ${
                  darkMode
                    ? "border-white/10 bg-white/[0.02]"
                    : "border-yellow-100/80 bg-white shadow-xl shadow-yellow-100/50"
                }`}
              >
                {/* Gradient wash */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${block.accent} opacity-60`}
                />

                {/* Watermark step */}
                <span
                  className={`pointer-events-none absolute -right-2 top-4 select-none font-black leading-none opacity-[0.06] sm:right-6 sm:top-6 ${
                    darkMode ? "text-white" : "text-[#0f172a]"
                  }`}
                  style={{ fontSize: "clamp(5rem, 14vw, 11rem)" }}
                  aria-hidden
                >
                  {block.step}
                </span>

                <div
                  className={`relative grid items-stretch gap-0 lg:grid-cols-2 ${
                    imageFirst ? "" : ""
                  }`}
                >
                  {/* Image panel */}
                  <div
                    className={`relative min-h-[280px] p-3 sm:min-h-[340px] sm:p-4 ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative h-full min-h-[260px] overflow-hidden rounded-[2rem] sm:min-h-[320px]">
                      <Image
                        src={image}
                        alt={block.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div
                        className={`absolute inset-0 ${
                          darkMode
                            ? "bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent"
                            : "bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent"
                        }`}
                      />

                      {/* Floating badge on image */}
                      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-black/40 px-3 py-2 backdrop-blur-md">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-400 text-sm font-black text-[#050816]">
                          {block.step}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-white">
                          {block.label}
                        </span>
                      </div>

                      {/* Chip strip on image bottom */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {block.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:text-xs"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative offset frame */}
                    <div
                      className={`pointer-events-none absolute -bottom-2 w-24 rounded-2xl border-2 sm:w-32 ${
                        imageFirst ? "-right-2 border-yellow-400/40" : "-left-2 border-yellow-400/40"
                      } ${darkMode ? "bg-yellow-400/10" : "bg-yellow-400/20"} aspect-square`}
                      aria-hidden
                    />
                  </div>

                  {/* Content panel */}
                  <div
                    className={`relative flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${
                        darkMode
                          ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-400"
                          : "border-yellow-300 bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={2.25} />
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
                      {block.label}
                    </p>
                    <p
                      className={`mt-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                        darkMode ? "text-white/40" : "text-slate-500"
                      }`}
                    >
                      {block.tagline}
                    </p>

                    <h3
                      className={`mt-5 text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
                        darkMode ? "text-white" : "text-[#0f172a]"
                      }`}
                    >
                      {showHighlight ? (
                        <>
                          {titleParts[0]}
                          <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                            {block.highlight}
                          </span>
                          {titleParts[1]}
                        </>
                      ) : (
                        block.title
                      )}
                    </h3>

                    <p
                      className={`mt-5 max-w-lg text-lg leading-9 ${
                        darkMode ? "text-white/60" : "text-slate-600"
                      }`}
                    >
                      {block.body}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/80 to-transparent" />
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.25em] ${
                          darkMode ? "text-white/30" : "text-slate-400"
                        }`}
                      >
                        Centurion NBO
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
