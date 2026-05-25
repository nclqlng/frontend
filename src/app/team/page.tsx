"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageBackground from "@/components/HubPageBackground";
import RevealSection, { revealTransitionClass } from "@/components/RevealSection";
import { useInView } from "@/hooks/useInView";
import {
  Users,
  Calendar,
  Sparkles,
  Crown,
  Briefcase,
  Shield,
  UserCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function gdrivePhotoUrl(fileId: string, width = 900) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}

type TeamMember = {
  rank: string;
  name: string;
  role: string;
  coded?: string;
  strengths: string[];
  photoId?: string;
};

type CabinetTier = {
  rank: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  order: number;
};

const cabinetTiers: CabinetTier[] = [
  {
    rank: "BM",
    title: "Branch Manager",
    subtitle: "Executive leadership",
    icon: Crown,
    order: 1,
  },
  {
    rank: "SM",
    title: "Sales Manager",
    subtitle: "Senior management",
    icon: Briefcase,
    order: 2,
  },
  {
    rank: "UM",
    title: "Unit Managers",
    subtitle: "Operational leadership",
    icon: Shield,
    order: 3,
  },
  {
    rank: "MC",
    title: "Manager Candidates",
    subtitle: "Emerging leaders",
    icon: UserCircle,
    order: 4,
  },
];

const teamMembers: TeamMember[] = [
  {
    rank: "BM",
    name: "RHEINA PALMA",
    role: "Chemist | Branch Manager",
    coded: "July 01, 2013",
    photoId: "1QlD7oRzbARohp2kWWmuD4XNpAiZd_ood",
    strengths: ["Relator", "Focus", "Command", "Responsibility", "Arranger"],
  },
  {
    rank: "SM",
    name: "MA. KRISTINA CHANG",
    role: "Accountant | Sales Manager",
    coded: "March 13, 2015",
    photoId: "1SD7k_uhhM8ltoN4KV6P8_9juLtFmxqjl",
    strengths: [
      "Strategic",
      "Individualization",
      "Arranger",
      "Relator",
      "Activator",
    ],
  },
  {
    rank: "UM",
    name: "JEFFREY PALMA",
    role: "BPO Cluster Head | Unit Manager",
    coded: "January 12, 2015",
    photoId: "1n9USeb7gIB5JhW8Eoa82IFNRta1PPj6s",
    strengths: ["Strategic", "Significance", "Learner", "Belief", "Futuristic"],
  },
  {
    rank: "UM",
    name: "RAQUEL PATRIS",
    role: "Civil Engineer | Unit Manager",
    coded: "August 1, 2016",
    photoId: "1k7hEFkg5Y8AhiMPCy6UISYYjFchc_JBt",
    strengths: [
      "Deliberative",
      "Harmony",
      "Empathy",
      "Responsibility",
      "Arranger",
    ],
  },
  {
    rank: "UM",
    name: "ELY ANGELES",
    role: "Banker | Unit Manager",
    coded: "December 6, 2016",
    photoId: "1lG0E8dOV4fRwVmgKFMjPI6mCJUuJYLMc",
    strengths: [
      "Positivity",
      "Harmony",
      "Connectedness",
      "Arranger",
      "Empathy",
    ],
  },
  {
    rank: "UM",
    name: "JOMAR REBUSIT",
    role: "Pipping Design Engineer | Unit Manager",
    coded: "June 1, 2018",
    photoId: "1IvlV3imtAsZ8yrYDy7BVg5JGpiBdoNpS",
    strengths: [
      "Learner",
      "Restorative",
      "Analytical",
      "Strategic",
      "Self-Assurance",
    ],
  },
  {
    rank: "UM",
    name: "MARY GRACE RAMIZO",
    role: "Accountant | Unit Manager",
    coded: "April 3, 2017",
    photoId: "1ic4UaDygBSTFY9Wq-of_gtP03_UCwzv1",
    strengths: [
      "Belief",
      "Responsibility",
      "Futuristic",
      "Connectedness",
      "Positivity",
    ],
  },
  {
    rank: "UM",
    name: "NIKKO LABANDA",
    role: "Unit Manager",
    photoId: "1E8Qart77DPmDuBTmyc_RLAeDMizE1ZfR",
    strengths: [],
  },
  {
    rank: "UM",
    name: "MARK RENNIEL VELASCO",
    role: "Unit Manager",
    photoId: "1VFiJ6ItffNVS0L2w2FS1Lc95AzQ39gKo",
    strengths: [],
  },
  {
    rank: "UM",
    name: "JOHN RICK CHANG",
    role: "Unit Manager",
    photoId: "1RoomKVInqMnsQvIIn6L3pHfyU_HSL-O5",
    strengths: [],
  },
  {
    rank: "UM",
    name: "JOSEPH LEGASPI",
    role: "Unit Manager",
    photoId: "1yeTSG8i19JD_h5YaR0OindZJUri7H_7l",
    strengths: [],
  },
  {
    rank: "MC",
    name: "JAKE ABATAYO",
    role: "Unit Manager",
    photoId: "1AUkgLj1vSQWzpWyi4T8rjN63zHl3mn_9",
    strengths: [],
  },
  {
    rank: "MC",
    name: "DEXTER BELENA",
    role: "Unit Manager",
    photoId: "1Se13arO6vF_Y5iXU8-v3HxIAAiXECaIZ",
    strengths: [],
  },
];

function membersByRank(rank: string) {
  return teamMembers.filter((m) => m.rank === rank);
}

function TeamMemberPhoto({
  member,
  darkMode,
}: {
  member: TeamMember;
  darkMode: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!member.photoId || failed) {
    return (
      <div className="relative flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-yellow-400/20 to-yellow-600/5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500">
          <Users size={24} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden ${
        darkMode ? "bg-[#0a1020]" : "bg-slate-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- GDrive redirects break next/image */}
      <img
        src={gdrivePhotoUrl(member.photoId)}
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 to-transparent"
        aria-hidden
      />
      <span className="absolute bottom-3 left-3 z-10 rounded-lg border border-yellow-400/35 bg-black/50 px-2.5 py-1 text-xs font-black tracking-wider text-yellow-400 backdrop-blur-sm">
        {member.rank}
      </span>
    </div>
  );
}

function TeamMemberCard({
  member,
  index,
  darkMode,
  accent = false,
}: {
  member: TeamMember;
  index: number;
  darkMode: boolean;
  accent?: boolean;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.08);
  const hasStrengths = member.strengths.length > 0;

  return (
    <div
      ref={ref}
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${revealTransitionClass(visible, "sm")} ${
        accent
          ? darkMode
            ? "border-yellow-400/30 bg-gradient-to-b from-yellow-400/10 to-white/[0.03] shadow-lg shadow-yellow-400/5"
            : "border-yellow-400/40 bg-gradient-to-b from-yellow-50 to-white shadow-md"
          : darkMode
            ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
            : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"
      }`}
      style={{ transitionDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div
        className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent ${
          accent ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } transition-opacity duration-300`}
      />

      <TeamMemberPhoto member={member} darkMode={darkMode} />

      <div className="relative flex flex-1 flex-col p-6">
        <h3
          className={`text-lg font-black leading-snug tracking-tight sm:text-xl ${
            darkMode ? "text-white" : "text-[#0f172a]"
          }`}
        >
          {member.name}
        </h3>

        <p
          className={`mt-2 text-sm font-medium leading-relaxed ${
            darkMode ? "text-white/60" : "text-slate-600"
          }`}
        >
          {member.role}
        </p>

        <div
          className={`mt-4 flex items-center gap-2 text-xs ${
            darkMode ? "text-white/45" : "text-slate-500"
          }`}
        >
          <Calendar className="h-3.5 w-3.5 shrink-0 text-yellow-500" />
          <span>
            <span className="font-bold uppercase tracking-wide text-yellow-500/90">
              Coded
            </span>
            {": "}
            {member.coded ?? "—"}
          </span>
        </div>

        <div className="mt-6 min-h-[7.5rem] flex-1">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
              Top 5 Strengths
            </p>
          </div>

          {hasStrengths ? (
            <ul className="flex flex-wrap gap-2">
              {member.strengths.map((strength) => (
                <li
                  key={strength}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] text-white/80"
                      : "border-slate-200 bg-slate-50 text-slate-700"
                  }`}
                >
                  {strength}
                </li>
              ))}
            </ul>
          ) : (
            <p
              className={`text-xs italic ${
                darkMode ? "text-white/35" : "text-slate-400"
              }`}
            >
              To be updated
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function HierarchyConnector({
  darkMode,
  fanOut = false,
}: {
  darkMode: boolean;
  fanOut?: boolean;
}) {
  const line = darkMode ? "bg-yellow-400/35" : "bg-yellow-400/50";

  if (!fanOut) {
    return (
      <div className="flex flex-col items-center py-2" aria-hidden>
        <div className={`h-10 w-px ${line}`} />
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-5xl flex-col items-center py-2" aria-hidden>
      <div className={`h-8 w-px ${line}`} />
      <div className={`h-px w-full max-w-4xl ${line}`} />
      <div className={`h-8 w-px ${line}`} />
    </div>
  );
}

function CabinetTierSection({
  tier,
  members,
  darkMode,
  tierIndex,
}: {
  tier: CabinetTier;
  members: TeamMember[];
  darkMode: boolean;
  tierIndex: number;
}) {
  const { ref, visible } = useInView<HTMLElement>(0.08);
  const Icon = tier.icon;
  const count = members.length;

  if (count === 0) return null;

  const accent = tier.rank === "BM" || tier.rank === "SM";
  const singleInGrid = count === 1;

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center ${revealTransitionClass(visible, "sm")}`}
      style={{ transitionDelay: `${tierIndex * 100}ms` }}
    >
      <div className="mb-8 w-full max-w-3xl text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-500">
          <Icon size={26} />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.45em] text-yellow-500">
          Tier {tier.order} · {tier.rank}
        </p>
        <h2
          className={`mt-3 text-2xl font-black sm:text-3xl ${
            darkMode ? "text-white" : "text-[#0f172a]"
          }`}
        >
          {tier.title}
        </h2>
        <p
          className={`mt-2 text-sm ${
            darkMode ? "text-white/50" : "text-slate-500"
          }`}
        >
          {tier.subtitle}
          <span className="mx-2 text-yellow-500/60">·</span>
          {count} {count === 1 ? "member" : "members"}
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <div
            key={`${member.rank}-${member.name}`}
            className={`h-full min-w-0 ${
              singleInGrid
                ? "sm:col-span-2 sm:col-start-1 lg:col-span-1 lg:col-start-2"
                : ""
            }`}
          >
            <TeamMemberCard
              member={member}
              index={index}
              darkMode={darkMode}
              accent={accent}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TeamPage() {
  const { darkMode } = useTheme();
  const activeTiers = cabinetTiers.filter(
    (t) => membersByRank(t.rank).length > 0
  );

  return (
    <>
      <Header />
      <HubPageBackground />
      <main
        id="team"
        className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-[#050816] text-white" : "bg-[#f8fafc] text-[#0f172a]"
        }`}
      >
        <RevealSection
          as="section"
          className="relative isolate overflow-hidden px-6 pt-44"
          size="sm"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.55em] text-yellow-500">
              Our Team
            </p>

            <h1
              className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              THE BUILDERS
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Behind Centurion
              </span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-600"
              }`}
            >
              Meet the leaders who shape our culture, drive performance, and
              build excellence across the organization.
            </p>

            <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
          </div>
        </RevealSection>

        <div className="relative px-6 pb-36 pt-12">
          <RevealSection as="div" className="mx-auto max-w-7xl" delay={120}>
            <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
              {cabinetTiers.map((tier) => {
                const count = membersByRank(tier.rank).length;
                if (count === 0) return null;
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.rank}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold ${
                      darkMode
                        ? "border-white/10 bg-white/[0.04] text-white/70"
                        : "border-slate-200 bg-white text-slate-600 shadow-sm"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 text-yellow-500" />
                    <span className="text-yellow-500">{tier.rank}</span>
                    <span className={darkMode ? "text-white/40" : "text-slate-400"}>
                      {tier.title}
                    </span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        darkMode
                          ? "bg-yellow-400/15 text-yellow-400"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center">
              {activeTiers.map((tier, i) => {
                const members = membersByRank(tier.rank);
                const isLast = i === activeTiers.length - 1;
                const needsFanOut =
                  !isLast &&
                  membersByRank(activeTiers[i + 1].rank).length > 1;

                return (
                  <div
                    key={tier.rank}
                    className="flex w-full flex-col items-center"
                  >
                    <CabinetTierSection
                      tier={tier}
                      members={members}
                      darkMode={darkMode}
                      tierIndex={i}
                    />
                    {!isLast && (
                      <HierarchyConnector
                        darkMode={darkMode}
                        fanOut={needsFanOut}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </RevealSection>
        </div>

        <Footer />
      </main>
    </>
  );
}