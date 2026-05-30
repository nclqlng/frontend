"use client";

import { Download, FileText, type LucideIcon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { moduleCardShell, moduleSubtleText } from "./ModuleIntroText";
import PdfPreview from "./PdfPreview";

export type LocalResource = {
  title: string;
  src: string;
  description?: string;
  icon?: LucideIcon;
  mediaType: "pdf" | "image" | "office";
  downloadName?: string;
};

type LocalResourceCardProps = {
  item: LocalResource;
  compact?: boolean;
  fullImage?: boolean;
};

export default function LocalResourceCard({
  item,
  compact = false,
  fullImage = false,
}: LocalResourceCardProps) {
  const { darkMode } = useTheme();
  const Icon = item.icon ?? FileText;
  const previewHeight = fullImage ? "min-h-[280px]" : compact ? "h-[180px]" : "h-[220px]";
  const downloadName =
    item.downloadName ?? item.src.split("/").pop() ?? "download";

  return (
    <div className={`overflow-hidden rounded-2xl border ${moduleCardShell(darkMode)}`}>
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <p className={`text-sm font-semibold leading-snug ${darkMode ? "text-white" : "text-slate-900"}`}>
              {item.title}
            </p>
            {item.description && (
              <p className={`mt-0.5 text-xs ${moduleSubtleText(darkMode)}`}>
                {item.description}
              </p>
            )}
          </div>
        </div>

        <a
          href={item.src}
          download={downloadName}
          className="flex shrink-0 items-center gap-1 rounded-lg bg-yellow-400/10 px-2.5 py-1.5 text-xs font-semibold text-yellow-500 transition hover:bg-yellow-400/20"
        >
          <Download size={12} />
          Download
        </a>
      </div>

      {item.mediaType === "pdf" ? (
        <PdfPreview
          src={item.src}
          title={item.title}
          compact={compact}
          className={previewHeight}
        />
      ) : item.mediaType === "office" ? (
        <div
          className={`border-t px-4 py-8 text-center ${darkMode ? "border-white/10 bg-black/20" : "border-slate-200 bg-slate-50"} ${previewHeight}`}
        >
          <p className={`text-sm ${moduleSubtleText(darkMode)}`}>
            PowerPoint preview is not available here. Use the download button to open the file.
          </p>
        </div>
      ) : (
        <div
          className={`border-t ${darkMode ? "border-white/10 bg-black/20" : "border-slate-200 bg-slate-50"} ${fullImage ? "p-4" : previewHeight}`}
        >
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className={
              fullImage
                ? "mx-auto h-auto w-full max-w-full object-contain"
                : "h-full w-full object-contain object-center"
            }
          />
        </div>
      )}
    </div>
  );
}
