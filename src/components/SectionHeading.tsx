"use client";

import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

/** Shared section H2 title classes — use with SectionHeading or custom layouts */
export function sectionTitleClass(darkMode: boolean) {
  return `mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${
    darkMode ? "text-white" : "text-[#0f172a]"
  }`;
}

/** Gradient highlight word with glow underline */
export function SectionTitleHighlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block overflow-visible px-3 pb-3 pt-1 sm:px-4 ${className}`}
    >
      <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
        {children}
      </span>
      <span
        className="pointer-events-none absolute bottom-0 left-3 right-3 h-3 bg-yellow-400/30 blur-sm sm:left-4 sm:right-4"
        aria-hidden
      />
    </span>
  );
}

type SectionHeadingProps = {
  darkMode: boolean;
  badge: string;
  /** Plain text before the highlight */
  before?: string;
  /** Gradient highlight text */
  highlight?: string;
  /** Render highlight on its own line */
  highlightBlock?: boolean;
  /** Plain text after the highlight */
  after?: string;
  /** Custom title content (overrides before / highlight / after) */
  title?: ReactNode;
  description?: string;
  descriptionClassName?: string;
  showDivider?: boolean;
  className?: string;
  animate?: boolean;
  visible?: boolean;
};

export default function SectionHeading({
  darkMode,
  badge,
  before,
  highlight,
  highlightBlock = false,
  after,
  title,
  description,
  descriptionClassName,
  showDivider = false,
  className = "",
  animate = false,
  visible = true,
}: SectionHeadingProps) {
  const animClass = animate
    ? `transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`
    : "";

  const descriptionDefault = `mx-auto mt-4 max-w-2xl leading-7 ${
    darkMode ? "text-white/60" : "text-slate-600"
  } text-sm`;

  return (
    <div className={`text-center px-4 ${animClass} ${className}`}>
      <div className="mv-float-badge inline-flex items-center gap-2 rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-1.5">
        <Sparkles className="h-4 w-4 text-yellow-500" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
          {badge}
        </span>
      </div>

      <h2
        className={`${sectionTitleClass(darkMode)} overflow-visible px-2 py-3 sm:px-4 sm:py-4`}
      >
        {title ?? (
          <>
            {before}
            {highlight && (
              <>
                {before ? " " : null}
                {highlightBlock ? (
                  <span className="block">
                    <SectionTitleHighlight>{highlight}</SectionTitleHighlight>
                  </span>
                ) : (
                  <SectionTitleHighlight>{highlight}</SectionTitleHighlight>
                )}
              </>
            )}
            {after ? (
              <>
                {" "}
                {after}
              </>
            ) : null}
          </>
        )}
      </h2>

      {description && (
        <p className={descriptionClassName ?? descriptionDefault}>
          {description}
        </p>
      )}

      {showDivider && (
        <div className="mx-auto mt-8 h-px w-72 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
      )}
    </div>
  );
}
