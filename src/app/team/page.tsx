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
        className={`flex aspect-[3/4] w-full items-center justify-center ${
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
      className={`relative aspect-[3/4] w-full overflow-hidden ${
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
      ? "border-white/10 bg-white/[0.03]"
      : "border-slate-200 bg-white shadow-sm";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl border transition hover:-translate-y-0.5 ${cardClass}`}
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

function TierSection({
  tier,
  darkMode,
}: {
  tier: TeamTier;
  darkMode: boolean;
}) {
  const members = membersByRank(tier.rank);
  if (members.length === 0) return null;

  const Icon = tierIcons[tier.rank];
  const highlight = tier.rank === "BM" || tier.rank === "SM";
  const gridClass =
    members.length === 1
      ? "mx-auto max-w-md"
      : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mb-16 last:mb-0">
      <header className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-500">
          <Icon size={26} />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-500">
          {tier.rank}
        </p>
        <h2
          className={`mt-2 text-2xl font-black sm:text-3xl ${
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
          {tier.subtitle} · {members.length}{" "}
          {members.length === 1 ? "member" : "members"}
        </p>
      </header>

      <div className={gridClass}>
        {members.map((member) => (
          <MemberCard
            key={member.name}
            member={member}
            darkMode={darkMode}
            highlight={highlight}
          />
        ))}
      </div>
    </section>
  );
}

export default function TeamPage() {
  const { darkMode } = useTheme();

  const surface = darkMode
    ? "bg-[#050816] text-white"
    : "bg-[#f8fafc] text-[#0f172a]";

  const pill = darkMode
    ? "border-white/10 bg-white/[0.04] text-white/75"
    : "border-slate-200 bg-white text-slate-600 shadow-sm";

  return (
    <>
      <Header />
      <HubPageBackground />

      <main
        id="team"
        className={`relative z-10 min-h-screen ${surface}`}
      >
        {/* Hero — always visible, no scroll-reveal */}
        <section className="px-6 pb-10 pt-44 text-center">
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

        {/* Rank legend */}
        <div className="mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-3 px-6">
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

        {/* Roster by tier */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
          {teamTiers.map((tier) => (
            <TierSection key={tier.rank} tier={tier} darkMode={darkMode} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
