"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "Empowering", gradient: false },
  { text: "Advisors", gradient: true },
  { text: "Protecting Futures", gradient: false },
] as const;

const TYPING_MS = 55;
const PAUSE_AFTER_LINE_MS = 450;
const PAUSE_BEFORE_RESTART_MS = 7000;

const headlineClass =
  "text-6xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[5.5rem] xl:text-[7rem]";

type HeroTypingHeadlineProps = {
  darkMode: boolean;
};

function LineContent({
  text,
  gradient,
  darkMode,
}: {
  text: string;
  gradient: boolean;
  darkMode: boolean;
}) {
  if (gradient) {
    return (
      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
        {text}
      </span>
    );
  }

  if (text === "Protecting Futures") {
    return (
      <span className={darkMode ? "text-white/90" : "text-[#0f172a]"}>
        {text}
      </span>
    );
  }

  return <span>{text}</span>;
}

export default function HeroTypingHeadline({ darkMode }: HeroTypingHeadlineProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentLine = LINES[lineIndex];
  const displayed = currentLine.text.slice(0, charIndex);
  const isLineComplete = charIndex === currentLine.text.length;

  useEffect(() => {
    if (isPaused) return;

    if (!isLineComplete) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), TYPING_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (lineIndex < LINES.length - 1) {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setLineIndex(0);
          setCharIndex(0);
          setIsPaused(false);
        }, PAUSE_BEFORE_RESTART_MS);
      }
    }, PAUSE_AFTER_LINE_MS);

    return () => clearTimeout(timer);
  }, [charIndex, isLineComplete, isPaused, lineIndex]);

  return (
    <h1
      className={`relative w-full ${headlineClass}`}
      aria-label={LINES.map((l) => l.text).join(" ")}
    >
      {/* Invisible sizer — reserves full headline space so layout never shifts */}
      <span className="pointer-events-none invisible block select-none" aria-hidden>
        {LINES.map((line) => (
          <span key={`size-${line.text}`} className="block">
            <LineContent
              text={line.text}
              gradient={line.gradient}
              darkMode={darkMode}
            />
          </span>
        ))}
      </span>

      {/* Visible typing layer */}
      <span className="absolute left-0 top-0 w-full" aria-live="polite">
        {LINES.map((line, index) => {
          const isCurrent = index === lineIndex;
          const isPast = index < lineIndex;
          const text = isPast ? line.text : isCurrent ? displayed : "";
          const showCursor = isCurrent && !isPaused;

          return (
            <span key={line.text} className="block">
              <LineContent
                text={text}
                gradient={line.gradient}
                darkMode={darkMode}
              />
              {showCursor && (
                <span
                  className={`ml-0.5 inline-block w-[3px] animate-pulse align-middle ${
                    line.gradient || !darkMode
                      ? "bg-yellow-400"
                      : "bg-white/90"
                  }`}
                  style={{ height: "0.85em", verticalAlign: "baseline" }}
                  aria-hidden
                />
              )}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
