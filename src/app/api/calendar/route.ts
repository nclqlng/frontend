import { NextRequest, NextResponse } from "next/server";
import { loadCalendarFromDrive } from "@/lib/calendar-drive";
import { teamPhotoSrc } from "@/lib/team-data";

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Calendar is not configured. Set GOOGLE_DRIVE_API_KEY in the environment.",
      },
      { status: 503 }
    );
  }

  const yearParam = request.nextUrl.searchParams.get("year");
  const monthParam = request.nextUrl.searchParams.get("month");

  const year = yearParam ? Number(yearParam) : undefined;
  const monthIndex = monthParam ? Number(monthParam) : undefined;

  if (yearParam && (!Number.isFinite(year) || year! < 2000)) {
    return NextResponse.json({ error: "Invalid year" }, { status: 400 });
  }

  if (
    monthParam &&
    (!Number.isFinite(monthIndex) || monthIndex! < 0 || monthIndex! > 11)
  ) {
    return NextResponse.json({ error: "Invalid month" }, { status: 400 });
  }

  try {
    const payload = await loadCalendarFromDrive(apiKey, { year, monthIndex });

    return NextResponse.json({
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
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load calendar";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
