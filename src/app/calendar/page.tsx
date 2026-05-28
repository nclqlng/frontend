import CalendarView, { type CalendarData } from "@/components/CalendarView";
import { loadCalendarFromDrive } from "@/lib/calendar-drive";
import { teamPhotoSrc } from "@/lib/team-data";

function serializeCalendarPayload(
  payload: Awaited<ReturnType<typeof loadCalendarFromDrive>>
): CalendarData {
  return {
    year: payload.year,
    current: {
      ...payload.current,
      imageSrc: teamPhotoSrc(payload.current.fileId, 1920),
    },
    months: payload.months.map((month) => ({
      ...month,
      imageSrc: teamPhotoSrc(month.fileId, 1920),
    })),
    years: payload.years,
  };
}

export default async function CalendarPage() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!apiKey) {
    return (
      <CalendarView
        initialError="Calendar is not configured. Set GOOGLE_DRIVE_API_KEY in the environment."
      />
    );
  }

  let initialData: CalendarData | undefined;
  let initialError: string | undefined;

  try {
    const payload = await loadCalendarFromDrive(apiKey);
    initialData = serializeCalendarPayload(payload);
  } catch (error) {
    initialError =
      error instanceof Error ? error.message : "Failed to load calendar";
  }

  return (
    <CalendarView initialData={initialData} initialError={initialError} />
  );
}
