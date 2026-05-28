import { NextResponse } from "next/server";
import { loadGalleryFromDrive } from "@/lib/gallery-drive";
import { teamPhotoSrc } from "@/lib/team-data";

export async function GET() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Gallery is not configured. Set GOOGLE_DRIVE_API_KEY in the environment.",
      },
      { status: 503 }
    );
  }

  try {
    const payload = await loadGalleryFromDrive(apiKey);

    const serializeImages = (
      images: (typeof payload.albums)[number]["images"]
    ) =>
      images.map((image) => ({
        ...image,
        imageSrc: teamPhotoSrc(image.id, 1600),
        thumbSrc: teamPhotoSrc(image.id, 480),
      }));

    return NextResponse.json({
      albums: payload.albums.map((album) => ({
        ...album,
        images: serializeImages(album.images),
        events: album.events.map((event) => ({
          ...event,
          images: serializeImages(event.images),
        })),
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load gallery";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
