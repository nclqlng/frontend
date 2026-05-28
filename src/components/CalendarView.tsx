"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageBackground from "@/components/HubPageBackground";
import RevealSection from "@/components/RevealSection";
import { CalendarDays, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export type CalendarMonth = {
  fileId: string;
  monthIndex: number;
  label: string;
  fileName: string;
  imageSrc: string;
};

export type CalendarData = {
  year: number;
  current: CalendarMonth;
  months: CalendarMonth[];
  years: { year: number; folderId: string }[];
};

type Props = {
  initialData?: CalendarData | null;
  initialError?: string | null;
};

export default function CalendarView({ initialData, initialError }: Props) {
  const { darkMode } = useTheme();
  const [data, setData] = useState<CalendarData | null>(initialData ?? null);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number | null>(
    initialData?.current.monthIndex ?? null
  );
  const [selectedYear, setSelectedYear] = useState<number | null>(
    initialData?.year ?? null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(initialError ?? null);
  const [imageFailed, setImageFailed] = useState(false);

  const loadCalendar = async (year?: number, monthIndex?: number) => {
    setLoading(true);
    setError(null);
    setImageFailed(false);

    const params = new URLSearchParams();
    if (year !== undefined) params.set("year", String(year));
    if (monthIndex !== undefined) params.set("month", String(monthIndex));

    const query = params.toString();
    const url = query ? `/api/calendar?${query}` : "/api/calendar";

    try {
      const response = await fetch(url);
      const body = (await response.json()) as CalendarData & { error?: string };

      if (!response.ok) {
        throw new Error(body.error ?? "Failed to load calendar");
      }

      setData(body);
      setSelectedYear(body.year);
      setSelectedMonthIndex(body.current.monthIndex);
    } catch (err) {
      setData(null);
      setError(err instanceof Error ? err.message : "Failed to load calendar");
    } finally {
      setLoading(false);
    }
  };

  const activeMonth =
    data?.months.find((m) => m.monthIndex === selectedMonthIndex) ??
    data?.current ??
    null;

  const activeMonthPosition =
    data && activeMonth
      ? data.months.findIndex((m) => m.monthIndex === activeMonth.monthIndex)
      : -1;

  const goToMonth = (monthIndex: number) => {
    if (!data) return;
    setSelectedMonthIndex(monthIndex);
    setImageFailed(false);
  };

  const goToRelativeMonth = (delta: number) => {
    if (!data || activeMonthPosition < 0) return;
    const next = data.months[activeMonthPosition + delta];
    if (next) goToMonth(next.monthIndex);
  };

  const changeYear = (year: number) => {
    setSelectedYear(year);
    void loadCalendar(year);
  };

  const showUnavailable = !loading && (error || !data || !activeMonth);

  return (
    <>
      <Header />
      <HubPageBackground />

      <main
        id="calendar"
        className={`relative z-10 min-h-screen overflow-hidden transition-colors duration-500 ${
          darkMode ? "text-white" : "text-[#0f172a]"
        }`}
      >
        <RevealSection
          as="section"
          className="relative isolate overflow-hidden px-6 pt-44"
          size="sm"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.55em] text-yellow-500">
              Calendar
            </p>

            <h1
              className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              YOUR SCHEDULE,
              <span className="mt-2 block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Brighter Together
              </span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-600"
              }`}
            >
              Training sessions, team events, and key dates — updated monthly
              from our shared calendar folder.
            </p>

            <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
          </div>
        </RevealSection>

        <div className="relative px-6 pb-36">
          <RevealSection
            as="div"
            className="mx-auto mt-16 max-w-5xl"
            size="sm"
            delay={120}
          >
            {loading && (
              <div
                className={`flex flex-col items-center justify-center gap-4 rounded-3xl border py-24 ${
                  darkMode
                    ? "border-yellow-400/20 bg-white/[0.03]"
                    : "border-yellow-400/30 bg-white shadow-sm"
                }`}
              >
                <Loader2 className="h-10 w-10 animate-spin text-yellow-500" />
                <p
                  className={`text-sm ${
                    darkMode ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  Loading calendar…
                </p>
              </div>
            )}

            {!loading && showUnavailable && (
              <div
                className={`rounded-3xl border p-10 text-center ${
                  darkMode
                    ? "border-yellow-400/20 bg-white/[0.03]"
                    : "border-yellow-400/30 bg-white shadow-sm"
                }`}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500">
                  <CalendarDays size={28} />
                </div>
                <h2 className="text-xl font-black">Calendar unavailable</h2>
                <p
                  className={`mx-auto mt-3 max-w-lg text-sm leading-relaxed ${
                    darkMode ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  {error ?? "No calendar data is available right now."}
                </p>
              </div>
            )}

            {!loading && data && activeMonth && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
                      {data.year} Calendar
                    </p>
                    <h2
                      className={`mt-2 text-2xl font-black md:text-3xl ${
                        darkMode ? "text-white" : "text-[#0f172a]"
                      }`}
                    >
                      {activeMonth.label}
                      {activeMonth.monthIndex === data.current.monthIndex &&
                        selectedYear === data.year && (
                          <span className="ml-3 align-middle text-sm font-bold uppercase tracking-wider text-yellow-500">
                            Current
                          </span>
                        )}
                    </h2>
                  </div>

                  {data.years.length > 1 && (
                    <div className="flex flex-wrap gap-2">
                      {data.years.map((y) => (
                        <button
                          key={y.year}
                          type="button"
                          onClick={() => changeYear(y.year)}
                          className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                            selectedYear === y.year
                              ? "border-yellow-400 bg-yellow-400 text-black"
                              : darkMode
                                ? "border-white/15 text-white/70 hover:border-yellow-400/40"
                                : "border-slate-200 text-slate-600 hover:border-yellow-300"
                          }`}
                        >
                          {y.year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {data.months.map((month) => (
                    <button
                      key={month.fileId}
                      type="button"
                      onClick={() => goToMonth(month.monthIndex)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-colors ${
                        selectedMonthIndex === month.monthIndex
                          ? "border-yellow-400 bg-yellow-400 text-black"
                          : darkMode
                            ? "border-white/15 text-white/70 hover:border-yellow-400/40"
                            : "border-slate-200 text-slate-600 hover:border-yellow-300"
                      }`}
                    >
                      {month.label}
                    </button>
                  ))}
                </div>

                <div
                  className={`relative overflow-hidden rounded-3xl border ${
                    darkMode
                      ? "border-yellow-400/20 bg-black/30"
                      : "border-yellow-400/30 bg-white shadow-lg"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
                    <button
                      type="button"
                      aria-label="Previous month"
                      onClick={() => goToRelativeMonth(-1)}
                      disabled={activeMonthPosition <= 0}
                      className={`rounded-full border p-2 transition-colors disabled:opacity-30 ${
                        darkMode
                          ? "border-white/20 bg-black/50 text-white hover:border-yellow-400/50"
                          : "border-slate-200 bg-white/90 text-slate-800 hover:border-yellow-300"
                      }`}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next month"
                      onClick={() => goToRelativeMonth(1)}
                      disabled={
                        activeMonthPosition < 0 ||
                        activeMonthPosition >= data.months.length - 1
                      }
                      className={`rounded-full border p-2 transition-colors disabled:opacity-30 ${
                        darkMode
                          ? "border-white/20 bg-black/50 text-white hover:border-yellow-400/50"
                          : "border-slate-200 bg-white/90 text-slate-800 hover:border-yellow-300"
                      }`}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="relative min-h-[280px] bg-black/5">
                    {!imageFailed ? (
                      /* eslint-disable-next-line @next/next/no-img-element -- proxied Drive image */
                      <img
                        src={activeMonth.imageSrc}
                        alt={`${data.year} ${activeMonth.label} calendar`}
                        className="mx-auto block w-full max-w-5xl"
                        loading="eager"
                        decoding="async"
                        onError={() => setImageFailed(true)}
                      />
                    ) : (
                      <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 px-6 py-16 text-center">
                        <CalendarDays className="text-yellow-500" size={36} />
                        <p
                          className={`text-sm ${
                            darkMode ? "text-white/60" : "text-slate-600"
                          }`}
                        >
                          Could not load the calendar image. Try again later or
                          open the file in Google Drive.
                        </p>
                        <a
                          href={`https://drive.google.com/file/d/${activeMonth.fileId}/view`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-yellow-500 underline-offset-4 hover:underline"
                        >
                          Open in Google Drive
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <p
                  className={`text-center text-xs ${
                    darkMode ? "text-white/40" : "text-slate-500"
                  }`}
                >
                  Showing{" "}
                  <span className="font-semibold text-yellow-500">
                    {activeMonth.label} {data.year}
                  </span>
                  {activeMonth.monthIndex === data.current.monthIndex
                    ? " — latest available for the current period"
                    : null}
                </p>
              </div>
            )}
          </RevealSection>
        </div>

        <Footer />
      </main>
    </>
  );
}
