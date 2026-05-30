"use client";

import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

const competitiveAnalysisDocs = [
  {
    title: "Sun Life Health Products vs Joint Life",
    description: "Product competitive analysis — health products comparison",
    src: TRAINING_ASSETS.competitiveAnalysis.healthVsJointLife,
  },
  {
    title: "SUN Fit and Well Competitive Analysis",
    description: "Competitive landscape for SUN Fit and Well",
    src: TRAINING_ASSETS.competitiveAnalysis.sunFitAndWell,
  },
  {
    title: "Product Competitive Analysis — SUN Fit and Well",
    description: "Detailed competitive analysis (November 2019 edition)",
    src: TRAINING_ASSETS.competitiveAnalysis.sunFitAndWell2019,
  },
];

export default function CompetitiveAnalysis() {
  return (
    <div className="space-y-6">
      <ModuleIntroText>
        Review competitive positioning and product comparisons to strengthen
        client conversations and advisory recommendations.
      </ModuleIntroText>

      {competitiveAnalysisDocs.map((item) => (
        <LocalResourceCard
          key={item.src}
          item={{ ...item, mediaType: "pdf" }}
        />
      ))}
    </div>
  );
}
