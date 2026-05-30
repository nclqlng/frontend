"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { ExternalLink } from "lucide-react";

type PdfPreviewProps = {
  src: string;
  title: string;
  compact?: boolean;
  className?: string;
};

export default function PdfPreview({
  src,
  title,
  compact = false,
  className = "",
}: PdfPreviewProps) {
  const { darkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderPdf() {
      setLoading(true);
      setError(false);

      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const pdf = await pdfjs.getDocument(src).promise;
        if (cancelled || !containerRef.current) return;

        containerRef.current.replaceChildren();

        const maxPages = compact ? 1 : pdf.numPages;
        const scale = compact ? 0.9 : 1.15;

        for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) continue;

          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.className = "mx-auto block w-full max-w-full h-auto";
          canvas.setAttribute("role", "img");
          canvas.setAttribute(
            "aria-label",
            `${title} — page ${pageNum} of ${pdf.numPages}`,
          );

          await page.render({ canvas, canvasContext: context, viewport })
            .promise;

          if (cancelled || !containerRef.current) return;

          if (pageNum > 1) {
            const divider = document.createElement("div");
            divider.className = darkMode
              ? "my-3 h-px bg-white/10"
              : "my-3 h-px bg-slate-200";
            containerRef.current.appendChild(divider);
          }

          containerRef.current.appendChild(canvas);
        }

        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    renderPdf();

    return () => {
      cancelled = true;
    };
  }, [src, title, compact, darkMode]);

  const shellClass = darkMode ? "bg-black/20" : "bg-slate-100";
  const previewHeight = compact ? "max-h-[180px]" : "max-h-[520px]";

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 border-t p-6 ${shellClass} ${className}`}
      >
        <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Inline preview unavailable. Open the PDF directly instead.
        </p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-500 hover:text-yellow-400"
        >
          Open PDF <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`relative border-t ${darkMode ? "border-white/10" : "border-slate-200"} ${shellClass} ${className}`}
    >
      {loading && (
        <p
          className={`absolute inset-0 flex items-center justify-center text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
        >
          Loading preview...
        </p>
      )}
      <div
        ref={containerRef}
        className={`overflow-y-auto p-3 ${previewHeight} ${loading ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
}
