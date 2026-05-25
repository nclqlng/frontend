"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  CheckCircle2,
  Sparkles,
  UserRound,
  Flag,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { revealTransitionClass } from "@/components/RevealSection";
import { useInView } from "@/hooks/useInView";

type Step = {
  title: string;
  subtitle?: string;
};

const rows: Step[][] = [
  [
    { title: "LIVE BRIGHTER FORUM" },
    {
      title: "LIVE BRIGHTER PORTAL (LBP)",
      subtitle: "FM to send invite link / Candidate to accomplish form",
    },
    {
      title: "INSURANCE CONCEPTS TRAINING",
      subtitle: "TRAD & VUL / SLTC",
    },
    {
      title: "LICENSING EXAMS",
      subtitle: "Registration • Take Exams • Wait for Results",
    },
  ],
  [
    {
      title: "LICENSE APPLICATION PROCESSING",
      subtitle: "Registration to Insurance Commission Licensing Database",
    },
    {
      title: "CHECKING OF REQUIREMENTS",
      subtitle: "Background Checking (CIBI, Dow Jones)",
    },
    {
      title: "SUBMIT TO LICENSING",
    },
    {
      title: "APPROVALS NBM",
      subtitle: "Cluster Management",
    },
  ],
  [
    {
      title: "ISSUANCE OF PROVISIONAL AUTHORITY",
      subtitle: "By Insurance Commission",
    },
    {
      title: "CONTRACTING",
      subtitle: "Contract Acknowledgement Email • Input Contracting Date in LBP",
    },
    {
      title: "CODING ADVISE",
      subtitle: "NBM to Input Date in LBP",
    },
    {
      title: "CODING ADVISE",
      subtitle: "NBM to Input Date in LBP",
    },
  ],
];

const flatSteps = rows.flat();

function TiltCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    el.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
      scale(1.02)
    `;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-all duration-300 ease-out"
      style={{
        transformStyle: "preserve-3d",
        animation: `floatCard 5s ease-in-out infinite`,
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function LicensingFlow() {
  const { darkMode } = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { ref: sectionRef, visible: sectionVisible } = useInView(0.08);
  const { ref: flowRef, visible: flowVisible } = useInView<HTMLDivElement>(0.1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === flatSteps.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Calculate exact position for advisor icon following the snake pattern
  const getAdvisorPosition = () => {
    const row = Math.floor(activeStep / 4);
    const col = activeStep % 4;
    
    // Card positions: col 0 = 2%, col 1 = 27%, col 2 = 52%, col 3 = 77%
    const leftPositions = [2, 27, 52, 77];
    
    // For row 1 (index 1), we need to reverse the order because it goes right to left
    let actualCol = col;
    if (row === 1) {
      actualCol = 3 - col; // Reverse the column order for second row
    }
    
    // Vertical positions: row 0 = 100px, row 1 = 390px, row 2 = 680px
    const topPositions = [100, 390, 680];
    
    return {
      top: `${topPositions[row]}px`,
      left: `${leftPositions[actualCol]}%`,
      transform: 'translateX(-50%)', // Center the advisor on the card
    };
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden px-6 py-28 ${
        darkMode ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[180px]" />
        <div className="absolute left-[10%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-yellow-300/30" />
        <div className="absolute bottom-[15%] right-[12%] h-2 w-2 animate-ping rounded-full bg-yellow-400/20" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          darkMode={darkMode}
          badge="Recruitment Workflow"
          before="Your"
          highlight="Licensing"
          after="Flow"
          description="Experience the complete advisor onboarding journey through a visually immersive and structured licensing ecosystem designed for efficiency, compliance, and deployment readiness."
          descriptionClassName={`mx-auto mt-5 max-w-2xl text-base leading-8 ${
            darkMode ? "text-white/55" : "text-slate-600"
          }`}
          showDivider
          animate
          visible={sectionVisible}
          className="duration-1000 ease-out"
        />

        {/* FLOW */}
        <div
          ref={flowRef}
          className={`relative mt-28 hidden xl:block ${revealTransitionClass(flowVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          {/* CONNECTOR SVG - Static lines only */}
          <svg
            className="absolute left-0 top-0 h-[840px] w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ pointerEvents: 'none' }}
          >
            {/* Row 1 - left to right */}
            <path
              d="M160 90 H1090"
              stroke={darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            {/* Row 2 - right to left */}
            <path
              d="M1090 380 H160"
              stroke={darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            {/* Row 3 - left to right */}
            <path
              d="M160 670 H1090"
              stroke={darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            {/* Vertical connector 1 (top right to middle right) */}
            <path
              d="M1090 90 V380"
              stroke={darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            {/* Vertical connector 2 (middle left to bottom left) */}
            <path
              d="M160 380 V670"
              stroke={darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />

            {/* Animated flowing dots on the paths */}
            <circle r="4" fill="#facc15" className="animate-flow1" />
            <circle r="4" fill="#facc15" className="animate-flow2" />
            <circle r="4" fill="#facc15" className="animate-flow3" />
          </svg>

          {/* MOVING ADVISOR - Now follows the snake pattern correctly */}
          <div
            className="pointer-events-none absolute z-30 transition-all duration-700 ease-in-out"
            style={getAdvisorPosition()}
          >
            <div className="relative" style={{ transform: 'translateX(-50%)' }}>
              <div className="absolute inset-0 scale-150 rounded-full bg-yellow-400/30 blur-2xl" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-300/50 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl shadow-yellow-500/40">
                {activeStep === flatSteps.length - 1 ? (
                  <Flag size={22} className="text-white" />
                ) : (
                  <UserRound size={22} className="text-white" />
                )}
                <div className="absolute inset-0 animate-ping rounded-full border-2 border-yellow-300/50" />
              </div>
            </div>
          </div>

          {/* CARDS GRID - All containers have consistent size */}
          <div className="space-y-20">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-4 gap-8 ${
                  rowIndex === 1 ? "direction-rtl" : ""
                }`}
              >
                {row.map((step, index) => {
                  const actualIndex = rowIndex * 4 + index;
                  const isActive = activeStep === actualIndex;
                  
                  // For RTL row, reverse the visual order but keep data correct
                  const displayIndex = rowIndex === 1 ? 3 - index : index;

                  return (
                    <TiltCard key={actualIndex} index={actualIndex}>
                      <div className="group relative">
                        {/* Glow effect on active */}
                        <div
                          className={`absolute -inset-[2px] rounded-2xl blur-xl transition-all duration-500 ${
                            isActive
                              ? "bg-yellow-400/50 opacity-100"
                              : "opacity-0 group-hover:opacity-30"
                          }`}
                        />

                        {/* Border gradient */}
                        <div className="relative rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 p-[2px] shadow-lg">
                          {/* Inner card - Fixed height for consistency */}
                          <div
                            className={`relative flex min-h-[200px] flex-col justify-center overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 ${
                              darkMode
                                ? "bg-[#0b1120]/95 backdrop-blur-xl"
                                : "bg-white"
                            } ${
                              isActive
                                ? "scale-[1.02] shadow-lg"
                                : ""
                            }`}
                          >
                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                              <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
                            </div>

                            {/* Top accent line */}
                            <div className="absolute inset-x-4 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

                            {/* Icon */}
                            <div
                              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 ${
                                isActive
                                  ? "bg-yellow-400 text-white shadow-md shadow-yellow-400/30 scale-110"
                                  : "bg-yellow-400/10 text-yellow-500"
                              }`}
                            >
                              {isActive ? (
                                <Sparkles size="22" className="animate-pulse" />
                              ) : (
                                <CheckCircle2 size="20" />
                              )}
                            </div>

                            {/* Step number */}
                            <div className="absolute right-3 top-3 text-[10px] font-bold uppercase tracking-wider opacity-30">
                              0{actualIndex + 1}
                            </div>

                            {/* Title */}
                            <h3
                              className={`text-sm font-black uppercase leading-tight tracking-wide px-2 ${
                                darkMode ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {step.title}
                            </h3>

                            {/* Subtitle */}
                            {step.subtitle && (
                              <p
                                className={`mt-3 text-[11px] leading-relaxed px-2 ${
                                  darkMode ? "text-white/45" : "text-slate-500"
                                }`}
                              >
                                {step.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE FALLBACK */}
        <div
          className={`mt-20 grid grid-cols-1 gap-6 xl:hidden ${revealTransitionClass(flowVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          {flatSteps.map((step, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-[1px] bg-gradient-to-r from-yellow-400/50 to-yellow-500/50 transition-all duration-300 hover:scale-[1.02] ${
                darkMode ? "" : "shadow-md"
              }`}
            >
              <div
                className={`rounded-2xl p-5 ${
                  darkMode
                    ? "bg-[#0b1120]/90 backdrop-blur-sm"
                    : "bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
                    <CheckCircle2 size="22" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-black uppercase ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">
                        0{i + 1}
                      </span>
                    </div>
                    {step.subtitle && (
                      <p className={`mt-2 text-xs leading-relaxed ${darkMode ? "text-white/50" : "text-slate-500"}`}>
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes flow1 {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(930px, 0);
            opacity: 0;
          }
        }

        @keyframes flow2 {
          0% {
            transform: translate(930px, 0);
            opacity: 1;
          }
          100% {
            transform: translate(0, 290px);
            opacity: 0;
          }
        }

        .direction-rtl {
          direction: rtl;
        }

        .direction-rtl > * {
          direction: ltr;
        }

        .animate-flow1 {
          animation: flow1 6s linear infinite;
        }
      `}</style>
    </section>
  );
}