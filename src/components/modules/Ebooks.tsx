"use client";

import { useMemo, useState } from "react";
import { BookOpen, Download, Search } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ModuleIntroText, { moduleCardShell, moduleSubtleText } from "./ModuleIntroText";
import ebooksManifest from "@/lib/ebooks-manifest.json";

type EbookEntry = {
  id: string;
  title: string;
};

function ebookLocalPath(title: string) {
  const filename = title.replace(/[<>:"/\\|?*]/g, "_");
  return `/training-assets/ebooks/${filename}`;
}

export default function Ebooks() {
  const { darkMode } = useTheme();
  const [query, setQuery] = useState("");
  const books = ebooksManifest as EbookEntry[];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter((book) => book.title.toLowerCase().includes(q));
  }, [books, query]);

  return (
    <div className="space-y-8">
      <ModuleIntroText variant="boxed">
        &ldquo;Reading is essential for those who seek to rise above the
        ordinary.&rdquo;
        <span className="mt-3 block not-italic font-medium">— Jim Rohn</span>
      </ModuleIntroText>

      <p className={`text-sm italic leading-7 ${moduleSubtleText(darkMode)}`}>
        You will keep in perfect peace those whose minds are steadfast, because
        they trust in You. — Isaiah 26:3
      </p>

      <div className="relative">
        <Search
          size={16}
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${moduleSubtleText(darkMode)}`}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search e-books..."
          className={`w-full rounded-xl border py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-yellow-400/50 ${
            darkMode
              ? "border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500"
              : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
          }`}
        />
      </div>

      <p className={`text-xs ${moduleSubtleText(darkMode)}`}>
        {filtered.length} of {books.length} titles
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((book) => {
          const src = ebookLocalPath(book.title);
          return (
            <div
              key={book.id}
              className={`flex items-start gap-3 rounded-xl border p-4 transition hover:border-yellow-400/30 ${moduleCardShell(darkMode)}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-500">
                <BookOpen size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs font-semibold leading-snug ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {book.title.replace(/\.pdf$/i, "")}
                </p>
                <a
                  href={src}
                  download={book.title}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-yellow-500 hover:text-yellow-400"
                >
                  <Download size={12} />
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
