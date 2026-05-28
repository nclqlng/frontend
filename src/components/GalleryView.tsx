"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageBackground from "@/components/HubPageBackground";
import RevealSection from "@/components/RevealSection";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  ImageIcon,
} from "lucide-react";

export type GalleryImageData = {
  id: string;
  name: string;
  modifiedTime?: string;
  imageSrc: string;
  thumbSrc: string;
};

export type GalleryEventData = {
  folderId: string;
  name: string;
  modifiedTime?: string;
  images: GalleryImageData[];
};

export type GalleryAlbumData = {
  folderId: string;
  name: string;
  modifiedTime?: string;
  images: GalleryImageData[];
  events: GalleryEventData[];
};

export type GalleryData = {
  albums: GalleryAlbumData[];
};

function albumPhotoCount(album: GalleryAlbumData) {
  const fromEvents = album.events.reduce(
    (total, event) => total + event.images.length,
    0
  );
  return album.images.length + fromEvents;
}

type Props = {
  initialData?: GalleryData | null;
  initialError?: string | null;
};

function formatAlbumDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function GalleryCarousel({
  folderId,
  images,
  darkMode,
}: {
  folderId: string;
  images: GalleryImageData[];
  darkMode: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const total = images.length;
  const active = images[index];

  const goTo = (next: number) => {
    setIndex(next);
    setImageFailed(false);
  };

  if (total === 0) {
    return (
      <div
        className={`flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl border px-6 py-12 text-center ${
          darkMode
            ? "border-white/10 bg-white/[0.03]"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <ImageIcon className="text-yellow-500" size={32} />
        <p className={`text-sm ${darkMode ? "text-white/60" : "text-slate-600"}`}>
          Photos for this album are being added.
        </p>
      </div>
    );
  }

  return (
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
          aria-label="Previous photo"
          onClick={() => goTo(index === 0 ? total - 1 : index - 1)}
          className={`rounded-full border p-2 transition-colors ${
            darkMode
              ? "border-white/20 bg-black/50 text-white hover:border-yellow-400/50"
              : "border-slate-200 bg-white/90 text-slate-800 hover:border-yellow-300"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            darkMode
              ? "bg-black/50 text-white/80"
              : "bg-white/90 text-slate-700 shadow-sm"
          }`}
        >
          {index + 1} / {total}
        </span>

        <button
          type="button"
          aria-label="Next photo"
          onClick={() => goTo(index === total - 1 ? 0 : index + 1)}
          className={`rounded-full border p-2 transition-colors ${
            darkMode
              ? "border-white/20 bg-black/50 text-white hover:border-yellow-400/50"
              : "border-slate-200 bg-white/90 text-slate-800 hover:border-yellow-300"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="relative min-h-[280px] bg-black/5 md:min-h-[420px]">
        {!imageFailed && active ? (
          /* eslint-disable-next-line @next/next/no-img-element -- proxied Drive image */
          <img
            key={active.id}
            src={active.imageSrc}
            alt={active.name}
            className="mx-auto block h-full max-h-[70vh] w-full object-contain"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 px-6 py-16 text-center">
            <ImageIcon className="text-yellow-500" size={36} />
            <p
              className={`text-sm ${
                darkMode ? "text-white/60" : "text-slate-600"
              }`}
            >
              Could not load this photo. Try another slide or open the album in
              Google Drive.
            </p>
            <a
              href={`https://drive.google.com/drive/folders/${folderId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-yellow-500 underline-offset-4 hover:underline"
            >
              Open in Drive
            </a>
          </div>
        )}
      </div>

      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto border-t p-3 scrollbar-thin">
          {images.map((image, i) => (
            <button
              key={image.id}
              type="button"
              aria-label={`View photo ${i + 1}`}
              onClick={() => goTo(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === index
                  ? "border-yellow-400 ring-2 ring-yellow-400/30"
                  : darkMode
                    ? "border-white/10 opacity-70 hover:opacity-100"
                    : "border-slate-200 opacity-80 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.thumbSrc}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GalleryView({ initialData, initialError }: Props) {
  const { darkMode } = useTheme();
  const [data] = useState<GalleryData | null>(initialData ?? null);
  const [error] = useState<string | null>(initialError ?? null);
  const hasPhotos =
    data?.albums.some((album) => albumPhotoCount(album) > 0) ?? false;

  const showUnavailable =
    error || !data || data.albums.length === 0 || !hasPhotos;

  return (
    <>
      <Header />
      <HubPageBackground />

      <main
        id="gallery"
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
              Gallery
            </p>

            <h1
              className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
                darkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              MOMENTS THAT
              <span className="mt-2 block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Define Centurion
              </span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${
                darkMode ? "text-white/60" : "text-slate-600"
              }`}
            >
              Highlights from events, campaigns, and team milestones — curated
              from our Events Gallery on Google Drive.
            </p>

            <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
          </div>
        </RevealSection>

        <div className="relative px-6 pb-36">
          <RevealSection
            as="div"
            className="mx-auto mt-20 max-w-6xl space-y-16"
            size="sm"
            delay={120}
          >
            {showUnavailable ? (
              <div
                className={`relative overflow-hidden rounded-3xl border p-12 text-center ${
                  darkMode
                    ? "border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-transparent"
                    : "border-yellow-400/30 bg-gradient-to-br from-yellow-50 to-transparent"
                }`}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-500">
                  <ImageIcon size={32} />
                </div>

                <h2 className="text-2xl font-black md:text-3xl">
                  {error ? "Gallery unavailable" : "Gallery coming soon"}
                </h2>

                <p
                  className={`mx-auto mt-4 max-w-md text-sm leading-relaxed ${
                    darkMode ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  {error ??
                    "Event albums are being prepared. Check back shortly."}
                </p>
              </div>
            ) : (
              data.albums.map((album, albumIndex) => {
                const updated = formatAlbumDate(album.modifiedTime);
                const photoCount = albumPhotoCount(album);
                const hasEvents = album.events.length > 0;

                return (
                  <article
                    key={album.folderId}
                    className={`rounded-[32px] border p-6 md:p-8 ${
                      darkMode
                        ? "border-white/10 bg-white/[0.03]"
                        : "border-slate-200 bg-white shadow-xl"
                    }`}
                  >
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <FolderOpen className="h-4 w-4 text-yellow-500" />
                          <p className="text-xs font-bold uppercase tracking-[0.45em] text-yellow-500">
                            {albumIndex === 0 ? "Latest album" : "Event album"}
                          </p>
                        </div>
                        <h2 className="text-2xl font-black md:text-3xl">
                          {album.name}
                        </h2>
                        {updated && (
                          <p
                            className={`mt-2 text-xs ${
                              darkMode ? "text-white/45" : "text-slate-500"
                            }`}
                          >
                            Updated {updated}
                            {photoCount > 0
                              ? ` · ${photoCount} photo${
                                  photoCount === 1 ? "" : "s"
                                }`
                              : hasEvents
                                ? ` · ${album.events.length} event${
                                    album.events.length === 1 ? "" : "s"
                                  }`
                                : null}
                          </p>
                        )}
                      </div>

                      <a
                        href={`https://drive.google.com/drive/folders/${album.folderId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold transition-colors ${
                          darkMode
                            ? "border-white/15 text-white/80 hover:border-yellow-400/40 hover:text-yellow-400"
                            : "border-slate-200 text-slate-700 hover:border-yellow-300 hover:text-yellow-600"
                        }`}
                      >
                        Open in Drive
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    <div className="space-y-10">
                      {hasEvents ? (
                        album.events.map((event, eventIndex) => {
                          const eventUpdated = formatAlbumDate(
                            event.modifiedTime
                          );

                          return (
                            <section key={event.folderId}>
                              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                                <div>
                                  <p
                                    className={`text-xs font-bold uppercase tracking-[0.35em] ${
                                      darkMode
                                        ? "text-white/35"
                                        : "text-slate-400"
                                    }`}
                                  >
                                    {eventIndex === 0
                                      ? "Latest event"
                                      : "Event"}
                                  </p>
                                  <h3 className="mt-1 text-xl font-bold">
                                    {event.name}
                                  </h3>
                                  {eventUpdated && (
                                    <p
                                      className={`mt-1 text-xs ${
                                        darkMode
                                          ? "text-white/40"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      Updated {eventUpdated}
                                      {event.images.length > 0
                                        ? ` · ${event.images.length} photo${
                                            event.images.length === 1
                                              ? ""
                                              : "s"
                                          }`
                                        : null}
                                    </p>
                                  )}
                                </div>

                                <a
                                  href={`https://drive.google.com/drive/folders/${event.folderId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-xs font-semibold text-yellow-500 underline-offset-4 hover:underline ${
                                    darkMode ? "" : ""
                                  }`}
                                >
                                  View folder
                                </a>
                              </div>

                              <GalleryCarousel
                                folderId={event.folderId}
                                images={event.images}
                                darkMode={darkMode}
                              />
                            </section>
                          );
                        })
                      ) : null}

                      {album.images.length > 0 && (
                        <section>
                          {hasEvents && (
                            <h3
                              className={`mb-4 text-sm font-bold uppercase tracking-[0.35em] ${
                                darkMode ? "text-white/40" : "text-slate-500"
                              }`}
                            >
                              More photos
                            </h3>
                          )}
                          <GalleryCarousel
                            folderId={album.folderId}
                            images={album.images}
                            darkMode={darkMode}
                          />
                        </section>
                      )}

                      {!hasEvents && album.images.length === 0 && (
                        <GalleryCarousel
                          folderId={album.folderId}
                          images={[]}
                          darkMode={darkMode}
                        />
                      )}
                    </div>
                  </article>
                );
              })
            )}
          </RevealSection>
        </div>

        <Footer />
      </main>
    </>
  );
}
