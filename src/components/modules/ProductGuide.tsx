"use client";

import { FileText, FolderOpen } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import { TRAINING_ASSETS } from "@/lib/training-assets";

const productGuides = [
  {
    title: "Sun Life Product Showcase",
    src: TRAINING_ASSETS.productGuide.showcase,
    actionLabel: "Traditional Product",
    actionSrc: TRAINING_ASSETS.productGuide.traditionalProduct,
  },
  {
    title: "Supplementary Benefit",
    src: TRAINING_ASSETS.productGuide.supplementaryBenefit,
    actionLabel: "VUL Product",
    actionSrc: TRAINING_ASSETS.productGuide.vulProduct,
  },
  {
    title: "VUL Funds",
    src: TRAINING_ASSETS.productGuide.vulFunds,
    actionLabel: "Health Products",
    actionSrc: TRAINING_ASSETS.productGuide.healthProductsFolder,
    external: true,
  },
];

export default function ProductGuide() {
  return (
    <div className="space-y-6">
      {productGuides.map((item) => (
        <div key={item.title} className="space-y-3">
          <LocalResourceCard
            item={{
              title: item.title,
              src: item.src,
              icon: FileText,
              mediaType: "pdf",
            }}
          />
          <div className="flex justify-end">
            <a
              href={item.actionSrc}
              target="_blank"
              rel="noopener noreferrer"
              download={item.external ? undefined : item.actionSrc.split("/").pop()}
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-3 py-2 text-xs font-semibold text-black transition hover:scale-[1.03]"
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
