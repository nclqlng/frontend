"use client";

import {
  ExternalLink,
  FileText,
  FolderOpen,
} from "lucide-react";

const productGuides = [
  {
    title: "Sun Life Product Showcase",
    preview:
      "https://drive.google.com/file/d/140L5zgtIbD3BLkQ6nUmRcaJquHHTQlt3/preview",
    main: "https://drive.google.com/file/d/140L5zgtIbD3BLkQ6nUmRcaJquHHTQlt3/view",
    actionLabel: "Traditional Product",
    actionLink:
      "https://drive.google.com/file/d/1yjsMrJNJjj5ruo1tsDZSsZcLkY5BoKRF/view",
  },

  {
    title: "Supplementary Benefit",
    preview:
      "https://drive.google.com/file/d/178Is7jA72f2BsMkFtoABVMNFM34vo1tg/preview",
    main: "https://drive.google.com/file/d/178Is7jA72f2BsMkFtoABVMNFM34vo1tg/view",
    actionLabel: "VUL Product",
    actionLink:
      "https://drive.google.com/file/d/1iJ9ttRsWfbZU5YBy3ivvWV98qbl5jfgo/view",
  },

  {
    title: "VUL Funds",
    preview:
      "https://drive.google.com/file/d/1ANcsKpunoK8I5EjNt7096PYvKLmEq24p/preview",
    main: "https://drive.google.com/file/d/1ANcsKpunoK8I5EjNt7096PYvKLmEq24p/view",
    actionLabel: "Health Products",
    actionLink:
      "https://drive.google.com/drive/u/1/folders/1lLaImNumqcqcwLr4B0KwvxY13VpuFCBR",
  },
];

export default function ProductGuide() {
  return (
    <div className="space-y-6">

      {productGuides.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-yellow-500" />
              <p className="text-sm font-semibold">{item.title}</p>
            </div>

            <a
              href={item.main}
              target="_blank"
              className="text-xs text-yellow-500 flex items-center gap-1"
            >
              Open <ExternalLink size={12} />
            </a>
          </div>

          {/* PDF PREVIEW */}
          <iframe
            src={item.preview}
            className="w-full h-[220px] border-t border-white/10"
          />

          {/* BUTTON */}
          <div className="p-3 flex justify-end">
            <a
              href={item.actionLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-yellow-400 text-black hover:scale-[1.03] transition"
            >
              <FolderOpen size={14} />
              {item.actionLabel}
            </a>
          </div>
        </div>
      ))}

    </div>
  );
}