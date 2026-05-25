"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealSize = "sm" | "md";

/** Matches MissionVisionSection scroll-reveal classes */
export function revealTransitionClass(
  visible: boolean,
  size: RevealSize = "md"
) {
  const hidden = size === "sm" ? "translate-y-10 opacity-0" : "translate-y-16 opacity-0";
  return `transition-all duration-1000 ease-out ${
    visible ? "translate-y-0 opacity-100" : hidden
  }`;
}

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  threshold?: number;
  /** Stagger delay in ms (e.g. index * 120) */
  delay?: number;
  size?: RevealSize;
  id?: string;
};

export default function RevealSection({
  children,
  className = "",
  as: Tag = "section",
  threshold = 0.12,
  delay,
  size = "md",
  id,
}: RevealSectionProps) {
  const { ref, visible } = useInView<HTMLElement>(threshold);

  const style: CSSProperties | undefined =
    delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${revealTransitionClass(visible, size)} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
