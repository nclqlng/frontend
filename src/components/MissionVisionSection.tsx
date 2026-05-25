"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Target, Trophy, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

type MissionVisionSectionProps = {
  darkMode: boolean;
  missionImage: StaticImageData;
  visionImage: StaticImageData;
};

type Block = {
  step: string;
  label: string;
  tagline: string;
  title: string;
  highlight: string;
  body: string;
  chips: string[];
  metrics: { value: string; label: string }[];
  icon: LucideIcon;
  imageAlt: string;
  accent: string;
  ring: string;
  imagePosition: "left" | "right";
};

const blocks: Block[] = [
  {
    step: "01",
    label: "Our Mission",
    tagline: "What we do everyday",
    title: "Building Excellence Together",
    highlight: "Excellence",
    body: "Developing winning leaders, nurturing client relationships, and guiding clients toward financial security and success.",
    chips: ["Winning Leaders", "Client Relationships", "Financial Security"],
    metrics: [
      { value: "Daily", label: "Commitment" },
      { value: "100%", label: "Purpose" },
      { value: "∞", label: "Growth" },
    ],
    icon: Target,
    imageAlt: "Centurion team at Sun Life — Building Excellence Together",
    accent: "from-yellow-400/20 via-transparent to-blue-500/5",
    ring: "from-yellow-400/50 via-yellow-500/20 to-transparent",
    imagePosition: "left",
  },
  {
    step: "02",
    label: "Our Vision",
    tagline: "What we want to accomplish",
    title: "A Strong Hold of Inspiring MDRTs",
    highlight: "Inspiring MDRTs",
    body: "Where excellence is the standard and leadership is multiplied.",
    chips: ["Circle of Excellence", "MDRT Culture", "Leadership Multiplied"],
    metrics: [
      { value: "MDRT", label: "Standard" },
      { value: "Top", label: "Awardees" },
      { value: "2026", label: "Forward" },
    ],
    icon: Trophy,
    imageAlt: "Centurion MDRT medallion awardees",
    accent: "from-amber-400/25 via-yellow-400/10 to-transparent",
    ring: "from-amber-300/60 via-yellow-400/30 to-transparent",
    imagePosition: "right",
  },
];

const pillars = [
  { title: "Mission", desc: "Daily excellence in action" },
  { title: "Vision", desc: "Inspiring MDRT leadership" },
  { title: "Impact", desc: "Brighter futures for families" },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function MissionVisionCard({
  block,
  image,
  darkMode,
  index,
}: {
  block: Block;
  image: StaticImageData;
  darkMode: boolean;
  index: number;
}) {
  const { ref, visible } = useInView();
  const Icon = block.icon;
  const imageFirst = block.imagePosition === "left";
  const titleParts = block.title.split(block.highlight);
  const showHighlight = titleParts.length > 1;

  return (
    <article
      ref={ref}
      className={`relative transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className={`absolute left-1/2 top-8 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)] lg:block ${
          visible ? "scale-100" : "scale-0"
        } transition-transform duration-500`}
        aria-hidden
      />

      <div
        className={`group relative rounded-[2.85rem] p-[1px] transition duration-500 hover:shadow-[0_32px_100px_-20px_rgba(250,204,21,0.45)] ${
          darkMode
            ? `bg-gradient-to-br ${block.ring}`
            : "bg-gradient-to-br from-yellow-300/80 via-yellow-200/40 to-yellow-100/30"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-[2.8rem] ${
            darkMode ? "bg-[#050816]" : "bg-white"
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${block.accent}`}
          />

          <span
            className={`pointer-events-none absolute -right-1 top-2 select-none font-black leading-none opacity-[0.05] sm:right-4 ${
              darkMode ? "text-white" : "text-[#0f172a]"
            }`}
            style={{ fontSize: "clamp(4.5rem, 12vw, 10rem)" }}
            aria-hidden
          >
            {block.step}
          </span>

          <div className="relative grid lg:grid-cols-2">
            <div
              className={`relative p-3 sm:p-5 ${
                imageFirst ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="mv-shine relative min-h-[300px] overflow-hidden rounded-[2rem] sm:min-h-[360px] lg:min-h-[420px]">
                <Image
                  src={image}
                  alt={block.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-2xl border border-white/25 bg-black/45 px-3 py-2 backdrop-blur-xl">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-sm font-black text-[#050816] shadow-lg">
                    {block.step}
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400/90">
                      Centurion
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      {block.label}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {block.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/20 sm:text-xs"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14 ${
                imageFirst ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border shadow-lg ${
                    darkMode
                      ? "border-yellow-400/35 bg-gradient-to-br from-yellow-400/20 to-yellow-500/5 text-yellow-400 shadow-yellow-400/10"
                      : "border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 text-yellow-600 shadow-yellow-200/50"
                  }`}
                >
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <span
                  className={`hidden rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] sm:inline-flex ${
                    darkMode
                      ? "border-white/10 text-white/35"
                      : "border-slate-200 text-slate-400"
                  }`}
                >
                  {block.tagline}
                </span>
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
                {block.label}
              </p>
              <p
                className={`mt-1 text-xs font-semibold uppercase tracking-[0.22em] sm:hidden ${
                  darkMode ? "text-white/40" : "text-slate-500"
                }`}
              >
                {block.tagline}
              </p>

              <h3
                className={`mt-4 text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl xl:text-5xl ${
                  darkMode ? "text-white" : "text-[#0f172a]"
                }`}
              >
                {showHighlight ? (
                  <>
                    {titleParts[0]}
                    <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                      {block.highlight}
                    </span>
                    {titleParts[1]}
                  </>
                ) : (
                  block.title
                )}
              </h3>

              <blockquote
                className={`relative mt-6 border-l-2 border-yellow-400/80 py-1 pl-5 text-lg leading-9 italic ${
                  darkMode ? "text-white/65" : "text-slate-600"
                }`}
              >
                {block.body}
              </blockquote>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {block.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`rounded-2xl border px-3 py-3 text-center transition duration-300 group-hover:border-yellow-400/30 ${
                      darkMode
                        ? "border-white/10 bg-white/[0.04]"
                        : "border-yellow-100 bg-yellow-50/50"
                    }`}
                  >
                    <p className="text-xl font-black text-yellow-500 sm:text-2xl">
                      {metric.value}
                    </p>
                    <p
                      className={`mt-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        darkMode ? "text-white/40" : "text-slate-500"
                      }`}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/70 to-transparent" />
                <a
                  href="#core-values"
                  className={`group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] transition hover:text-yellow-500 ${
                    darkMode ? "text-white/40" : "text-slate-500"
                  }`}
                >
                  Explore values
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MissionVisionSection({
  darkMode,
  missionImage,
  visionImage,
}: MissionVisionSectionProps) {
  const images = [missionImage, visionImage];
  const { ref: sectionRef, visible: sectionVisible } = useInView(0.08);

  return (
    <section
      ref={sectionRef}
      id="mission-vision"
      className="relative overflow-hidden px-6 pb-32"
    >
      <div
        className={`sunlife-rays pointer-events-none absolute inset-0 ${
          darkMode ? "opacity-30" : "opacity-20"
        }`}
      />
      <div
        className={`mv-glow-orb pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl ${
          darkMode ? "bg-yellow-400/15" : "bg-yellow-300/30"
        }`}
      />
      <div
        className={`mv-glow-orb pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full blur-3xl [animation-delay:1.5s] ${
          darkMode ? "bg-blue-500/10" : "bg-yellow-200/40"
        }`}
      />

      <div className="relative mx-auto mt-14 max-w-7xl">
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            darkMode={darkMode}
            badge="Purpose & Direction"
            before="What drives"
            highlight="Centurion"
            description="Our mission fuels daily action. Our vision sets the bar for who we become."
            descriptionClassName={`mx-auto mt-4 max-w-2xl text-lg leading-8 ${
              darkMode ? "text-white/55" : "text-slate-600"
            }`}
            animate
            visible={sectionVisible}
            className="duration-1000 ease-out"
          />

          <div
            className={`mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3 transition-all duration-1000 ${
              sectionVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`rounded-2xl border px-4 py-4 backdrop-blur-xl ${
                  darkMode
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-yellow-100 bg-white/80 shadow-lg shadow-yellow-100/40"
                }`}
              >
                <p className="text-sm font-black text-yellow-500">
                  {pillar.title}
                </p>
                <p
                  className={`mt-1 text-xs leading-5 ${
                    darkMode ? "text-white/50" : "text-slate-500"
                  }`}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="pointer-events-none absolute left-1/2 top-[22rem] hidden h-[calc(100%-22rem)] w-px -translate-x-1/2 lg:block"
          aria-hidden
        >
          <div
            className={`h-full w-full bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-yellow-400/50 transition-opacity duration-1000 ${
              sectionVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="relative flex flex-col gap-14 lg:gap-20">
          {blocks.map((block, index) => (
            <MissionVisionCard
              key={block.step}
              block={block}
              image={images[index]}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
