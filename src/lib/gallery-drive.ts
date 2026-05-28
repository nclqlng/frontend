import { listDriveFolder, type DriveEntry } from "@/lib/calendar-drive";

export const GALLERY_ROOT_FOLDER_ID = "1pFzFX0O6FU-gA54Rlrg3GZb4vf0k42Ty";

const FOLDER_MIME = "application/vnd.google-apps.folder";

export type GalleryImage = {
  id: string;
  name: string;
  modifiedTime?: string;
};

export type GalleryEvent = {
  folderId: string;
  name: string;
  modifiedTime?: string;
  images: GalleryImage[];
};

export type GalleryAlbum = {
  folderId: string;
  name: string;
  modifiedTime?: string;
  /** Images stored directly in the album folder */
  images: GalleryImage[];
  /** Per-event subfolders (e.g. individual events under Branch Events) */
  events: GalleryEvent[];
};

export type GalleryPayload = {
  albums: GalleryAlbum[];
};

function isFolder(entry: DriveEntry) {
  return entry.mimeType === FOLDER_MIME;
}

function isImage(entry: DriveEntry) {
  return entry.mimeType.startsWith("image/");
}

function sortByModifiedDesc<T extends { modifiedTime?: string }>(items: T[]) {
  return [...items].sort((a, b) => {
    const ta = a.modifiedTime ? Date.parse(a.modifiedTime) : 0;
    const tb = b.modifiedTime ? Date.parse(b.modifiedTime) : 0;
    return tb - ta;
  });
}

function imagesFromFiles(files: DriveEntry[]): GalleryImage[] {
  return sortByModifiedDesc(
    files
      .filter((file) => !isFolder(file) && isImage(file))
      .map((file) => ({
        id: file.id,
        name: file.name,
        modifiedTime: file.modifiedTime,
      }))
  );
}

/** Collect all images under a folder, recursing into nested subfolders. */
async function collectImagesRecursive(
  folderId: string,
  apiKey: string
): Promise<GalleryImage[]> {
  const files = await listDriveFolder(folderId, apiKey);
  const direct = imagesFromFiles(files);
  const subfolders = files.filter(isFolder);

  if (subfolders.length === 0) {
    return direct;
  }

  const nested = await Promise.all(
    subfolders.map((sub) => collectImagesRecursive(sub.id, apiKey))
  );

  return sortByModifiedDesc([...direct, ...nested.flat()]);
}

async function loadAlbumFromFolder(
  folder: DriveEntry,
  apiKey: string
): Promise<GalleryAlbum> {
  const files = await listDriveFolder(folder.id, apiKey);
  const subfolders = sortByModifiedDesc(files.filter(isFolder));
  const directImages = imagesFromFiles(files);

  if (subfolders.length > 0) {
    const events = await Promise.all(
      subfolders.map(async (sub) => ({
        folderId: sub.id,
        name: sub.name,
        modifiedTime: sub.modifiedTime,
        images: await collectImagesRecursive(sub.id, apiKey),
      }))
    );

    return {
      folderId: folder.id,
      name: folder.name,
      modifiedTime: folder.modifiedTime,
      images: directImages,
      events,
    };
  }

  return {
    folderId: folder.id,
    name: folder.name,
    modifiedTime: folder.modifiedTime,
    images: directImages,
    events: [],
  };
}

export function galleryAlbumPhotoCount(album: GalleryAlbum) {
  const fromEvents = album.events.reduce((n, event) => n + event.images.length, 0);
  return album.images.length + fromEvents;
}

export async function loadGalleryFromDrive(apiKey: string): Promise<GalleryPayload> {
  const rootEntries = await listDriveFolder(GALLERY_ROOT_FOLDER_ID, apiKey);

  const folders = sortByModifiedDesc(rootEntries.filter(isFolder));

  if (folders.length === 0) {
    throw new Error("No event folders found in the gallery Drive folder.");
  }

  const albums = await Promise.all(
    folders.map((folder) => loadAlbumFromFolder(folder, apiKey))
  );

  return { albums };
}
