import GalleryView, { type GalleryData } from "@/components/GalleryView";
import { loadGalleryFromDrive } from "@/lib/gallery-drive";
import { teamPhotoSrc } from "@/lib/team-data";

function serializeImages(
  images: Awaited<ReturnType<typeof loadGalleryFromDrive>>["albums"][number]["images"]
) {
  return images.map((image) => ({
    ...image,
    imageSrc: teamPhotoSrc(image.id, 1600),
    thumbSrc: teamPhotoSrc(image.id, 480),
  }));
}

function serializeGalleryPayload(
  payload: Awaited<ReturnType<typeof loadGalleryFromDrive>>
): GalleryData {
  return {
    albums: payload.albums.map((album) => ({
      ...album,
      images: serializeImages(album.images),
      events: album.events.map((event) => ({
        ...event,
        images: serializeImages(event.images),
      })),
    })),
  };
}

export default async function GalleryPage() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!apiKey) {
    return (
      <GalleryView
        initialError="Gallery is not configured. Set GOOGLE_DRIVE_API_KEY in the environment."
      />
    );
  }

  let initialData: GalleryData | undefined;
  let initialError: string | undefined;

  try {
    const payload = await loadGalleryFromDrive(apiKey);
    initialData = serializeGalleryPayload(payload);
  } catch (error) {
    initialError =
      error instanceof Error ? error.message : "Failed to load gallery";
  }

  return (
    <GalleryView initialData={initialData} initialError={initialError} />
  );
}
