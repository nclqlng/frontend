export function extractDriveFileId(url: string): string | null {
  const match = url.match(/\/d\/([^/?]+)/);
  return match?.[1] ?? null;
}

export function drivePreviewUrl(url: string): string {
  const id = extractDriveFileId(url);
  if (id) return `https://drive.google.com/file/d/${id}/preview`;
  return url.replace("/view", "/preview");
}

export function driveThumbnailUrl(url: string, size = 1000): string {
  const id = extractDriveFileId(url);
  if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
  return url;
}
