export const CALENDAR_ROOT_FOLDER_ID = "1bXZznR4XOoi4P_fVOlGuZtaPKZTyp2SE";

const FOLDER_MIME = "application/vnd.google-apps.folder";

const MONTH_ALIASES: Record<string, number> = {
  january: 0,
  jan: 0,
  february: 1,
  feb: 1,
  march: 2,
  mar: 2,
  april: 3,
  apr: 3,
  may: 4,
  june: 5,
  jun: 5,
  july: 6,
  jul: 6,
  august: 7,
  aug: 7,
  september: 8,
  sep: 8,
  sept: 8,
  october: 9,
  oct: 9,
  november: 10,
  nov: 10,
  december: 11,
  dec: 11,
};

const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export type DriveEntry = {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
};

export type CalendarMonthEntry = {
  fileId: string;
  monthIndex: number;
  label: string;
  fileName: string;
};

export type CalendarPayload = {
  year: number;
  yearFolderId: string;
  current: CalendarMonthEntry;
  months: CalendarMonthEntry[];
  years: { year: number; folderId: string }[];
};

type DriveListResponse = {
  files?: DriveEntry[];
  nextPageToken?: string;
};

export function monthIndexFromFileName(name: string): number | null {
  const stem = name.replace(/\.[^/.]+$/, "").trim().toLowerCase();
  if (stem in MONTH_ALIASES) return MONTH_ALIASES[stem];

  for (const [alias, index] of Object.entries(MONTH_ALIASES)) {
    if (stem.startsWith(`${alias} `) || stem.endsWith(` ${alias}`)) {
      return index;
    }
  }

  return null;
}

export function pickYearFolder(
  folders: DriveEntry[],
  referenceYear = new Date().getFullYear()
): { year: number; folderId: string } | null {
  const years = folders
    .filter((f) => f.mimeType === FOLDER_MIME && /^\d{4}$/.test(f.name.trim()))
    .map((f) => ({ year: Number(f.name), folderId: f.id }))
    .filter((y) => Number.isFinite(y.year))
    .sort((a, b) => b.year - a.year);

  if (years.length === 0) return null;

  return years.find((y) => y.year === referenceYear) ?? years[0];
}

export function calendarMonthsFromFiles(files: DriveEntry[]): CalendarMonthEntry[] {
  const months: CalendarMonthEntry[] = [];

  for (const file of files) {
    if (file.mimeType === FOLDER_MIME) continue;
    if (!file.mimeType.startsWith("image/")) continue;

    const monthIndex = monthIndexFromFileName(file.name);
    if (monthIndex === null) continue;

    months.push({
      fileId: file.id,
      monthIndex,
      label: MONTH_LABELS[monthIndex],
      fileName: file.name,
    });
  }

  return months.sort((a, b) => a.monthIndex - b.monthIndex);
}

/** Prefer the current month; otherwise the latest month at or before today. */
export function pickCurrentMonth(
  months: CalendarMonthEntry[],
  referenceDate = new Date()
): CalendarMonthEntry | null {
  if (months.length === 0) return null;

  const currentIndex = referenceDate.getMonth();
  const atOrBefore = months.filter((m) => m.monthIndex <= currentIndex);

  if (atOrBefore.length > 0) {
    return atOrBefore[atOrBefore.length - 1];
  }

  return months[months.length - 1];
}

export async function listDriveFolder(
  parentId: string,
  apiKey: string
): Promise<DriveEntry[]> {
  const collected: DriveEntry[] = [];
  let pageToken: string | undefined;

  do {
    const url = new URL("https://www.googleapis.com/drive/v3/files");
    url.searchParams.set("q", `'${parentId}' in parents and trashed=false`);
    url.searchParams.set(
      "fields",
      "nextPageToken,files(id,name,mimeType,modifiedTime)"
    );
    url.searchParams.set("pageSize", "100");
    url.searchParams.set("orderBy", "name");
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(
        `Drive API error (${response.status}): ${detail.slice(0, 200)}`
      );
    }

    const data = (await response.json()) as DriveListResponse;
    collected.push(...(data.files ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return collected;
}

export async function loadCalendarFromDrive(
  apiKey: string,
  options?: { year?: number; monthIndex?: number }
): Promise<CalendarPayload> {
  const rootEntries = await listDriveFolder(CALENDAR_ROOT_FOLDER_ID, apiKey);
  const yearFolders = rootEntries.filter((e) => e.mimeType === FOLDER_MIME);

  const years = yearFolders
    .filter((f) => /^\d{4}$/.test(f.name.trim()))
    .map((f) => ({ year: Number(f.name), folderId: f.id }))
    .filter((y) => Number.isFinite(y.year))
    .sort((a, b) => b.year - a.year);

  const targetYear =
    options?.year ??
    pickYearFolder(yearFolders, new Date().getFullYear())?.year ??
    years[0]?.year;

  if (targetYear === undefined) {
    throw new Error("No year folders found in the calendar Drive folder.");
  }

  const yearFolder = years.find((y) => y.year === targetYear);
  if (!yearFolder) {
    throw new Error(`Calendar folder for ${targetYear} was not found.`);
  }

  const yearFiles = await listDriveFolder(yearFolder.folderId, apiKey);
  const months = calendarMonthsFromFiles(yearFiles);

  if (months.length === 0) {
    throw new Error(`No calendar images found for ${targetYear}.`);
  }

  const current =
    options?.monthIndex !== undefined
      ? months.find((m) => m.monthIndex === options.monthIndex) ??
        pickCurrentMonth(months)
      : pickCurrentMonth(months);

  if (!current) {
    throw new Error(`Could not resolve a calendar month for ${targetYear}.`);
  }

  return {
    year: targetYear,
    yearFolderId: yearFolder.folderId,
    current,
    months,
    years,
  };
}
