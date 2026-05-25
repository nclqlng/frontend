"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageBackground from "@/components/HubPageBackground";
import {
  teamTiers,
  membersByRank,
  teamPhotoSrc,
  type TeamMember,
  type TeamTier,
} from "@/lib/team-data";
import {
  Calendar,
  Sparkles,
  Users,
  Crown,
  Briefcase,
  Shield,
  UserCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tierIcons: Record<TeamTier["rank"], LucideIcon> = {
  BM: Crown,
  SM: Briefcase,
  UM: Shield,
  MC: UserCircle,
};

/** Uniform grid cell — same width for every member card */
const CARD_SLOT =
  "h-full w-full max-w-[320px] justify-self-center sm:max-w-none sm:justify-self-stretch";

function MemberPhoto({
  member,
  darkMode,
}: {
  member: TeamMember;
  darkMode: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!member.photoId || failed) {
    return (
      <div
        className={`flex aspect-[3/4] w-full shrink-0 items-center justify-center ${
          darkMode
            ? "bg-gradient-to-br from-yellow-400/15 to-[#0a1020]"
            : "bg-gradient-to-br from-yellow-100 to-slate-100"
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-500">
          <Users size={28} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[3/4] w-full shrink-0 overflow-hidden ${
        darkMode ? "bg-[#0a1020]" : "bg-slate-200"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- proxied same-origin src */}
      <img
        src={teamPhotoSrc(member.photoId)}
        alt={member.name}
        width={640}
        height={853}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-[center_20%]"
        onError={() => setFailed(true)}
      />
      <span className="absolute bottom-3 left-3 rounded-lg border border-yellow-400/40 bg-black/55 px-2.5 py-1 text-xs font-black tracking-wider text-yellow-400">
        {member.rank}
      </span>
    </div>
  );
}

function MemberCard({
  member,
  darkMode,
  highlight,
}: {
  member: TeamMember;
  darkMode: boolean;
  highlight?: boolean;
}) {
  const hasStrengths = member.strengths.length > 0;

  const cardClass = highlight
    ? darkMode
      ? "border-yellow-400/35 bg-gradient-to-b from-yellow-400/10 to-white/[0.03] shadow-lg shadow-yellow-400/10"
      : "border-yellow-400/50 bg-gradient-to-b from-yellow-50 to-white shadow-md"
    : darkMode
      ? "border-white/10 bg-white/[0.03] backdrop-blur-sm"
      : "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-sm";

  return (
    <article
      className={`flex h-full min-h-[520px] w-full flex-col overflow-hidden rounded-3xl border transition hover:-translate-y-0.5 ${cardClass}`}
    >
      <MemberPhoto member={member} darkMode={darkMode} />

      <div className="flex flex-1 flex-col p-6">
        <h3
          className={`text-lg font-black leading-snug sm:text-xl ${
            darkMode ? "text-white" : "text-[#0f172a]"
          }`}
        >
          {member.name}
        </h3>

        <p
          className={`mt-2 text-sm font-medium ${
            darkMode ? "text-white/65" : "text-slate-600"
          }`}
        >
          {member.role}
        </p>

        <p
          className={`mt-4 flex items-center gap-2 text-xs ${
            darkMode ? "text-white/50" : "text-slate-500"
          }`}
        >
          <Calendar className="h-3.5 w-3.5 shrink-0 text-yellow-500" />
          <span>
            <span className="font-bold uppercase tracking-wide text-yellow-500">
              Coded
            </span>
            {": "}
            {member.coded ?? "—"}
          </span>
        </p>

        <div className="mt-6 flex-1">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
            <Sparkles className="h-3.5 w-3.5" />
            Top 5 Strengths
          </p>

          {hasStrengths ? (
            <ul className="flex flex-wrap gap-2">
              {member.strengths.map((strength) => (
                <li
                  key={strength}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    darkMode
                      ? "border-white/10 bg-white/[0.05] text-white/85"
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
                darkMode ? "text-white/40" : "text-slate-400"
              }`}
            >
              To be updated
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function TierConnector({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex flex-col items-center py-6" aria-hidden>
      <div
        className={`h-10 w-px bg-gradient-to-b from-yellow-400/60 to-yellow-400/15 ${
          darkMode ? "" : "from-yellow-500/50"
        }`}
      />
      <div
        className={`mt-1 h-2 w-2 rotate-45 border-b border-r border-yellow-400/50 ${
          darkMode ? "" : "border-yellow-500/40"
        }`}
      />
    </div>
  );
}

function TeamHierarchy({ darkMode }: { darkMode: boolean }) {
  const activeTiers = teamTiers.filter(
    (tier) => membersByRank(tier.rank).length > 0
  );

  return (
    <div className="flex flex-col items-stretch">
      {activeTiers.map((tier, index) => {
        const members = membersByRank(tier.rank);
        const Icon = tierIcons[tier.rank];
        const highlight = tier.rank === "BM" || tier.rank === "SM";

        return (
          <div key={tier.rank} className="flex flex-col items-center">
            {index > 0 && <TierConnector darkMode={darkMode} />}

            <div className="mb-6 flex w-full max-w-[320px] flex-col items-center text-center sm:max-w-none">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-500">
                <Icon size={22} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-500">
                {tier.rank}
              </p>
              <h2
                className={`mt-1 text-lg font-black sm:text-xl ${
                  darkMode ? "text-white" : "text-[#0f172a]"
                }`}
              >
                {tier.title}
              </h2>
              <p
                className={`mt-1 text-xs ${
                  darkMode ? "text-white/45" : "text-slate-500"
                }`}
              >
                {tier.subtitle}
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member) => (
                <div key={member.name} className={CARD_SLOT}>
                  <MemberCard
                    member={member}
                    darkMode={darkMode}
                    highlight={highlight}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TeamPage() {
  const { darkMode } = useTheme();

  const pill = darkMode
    ? "border-white/10 bg-white/[0.04] text-white/75 backdrop-blur-sm"
    : "border-slate-200/80 bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm";

  return (
    <>
      <Header />
      <HubPageBackground />

      <main
        id="team"
        className={`relative z-10 min-h-screen overflow-hidden transition-colors duration-500 ${
          darkMode ? "text-white" : "text-[#0f172a]"
        }`}
      >
        <section className="relative isolate overflow-hidden px-6 pb-10 pt-44 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.55em] text-yellow-500">
            Our Team
          </p>
          <h1
            className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
              darkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            THE BUILDERS
            <span className="mt-2 block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Behind Centurion
            </span>
          </h1>
          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
              darkMode ? "text-white/60" : "text-slate-600"
            }`}
          >
            Meet the leaders who shape our culture, drive performance, and build
            excellence across the organization.
          </p>
          <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
        </section>

        <div className="relative z-10 mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-3 px-6">
          {teamTiers.map((tier) => {
            const count = membersByRank(tier.rank).length;
            if (count === 0) return null;
            const Icon = tierIcons[tier.rank];
            return (
              <div
                key={tier.rank}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold ${pill}`}
              >
                <Icon className="h-3.5 w-3.5 text-yellow-500" />
                <span className="text-yellow-500">{tier.rank}</span>
                <span className={darkMode ? "text-white/45" : "text-slate-400"}>
                  {tier.title}
                </span>
                <span className="rounded-full bg-yellow-400/15 px-1.5 py-0.5 text-[10px] text-yellow-500">
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
          <TeamHierarchy darkMode={darkMode} />
        </div>
      </main>

      <Footer />
    </>
  );
}
