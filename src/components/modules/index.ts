import type { ComponentType } from "react";
import ProductGuide from "./ProductGuide";
import CompetitiveAnalysis from "./CompetitiveAnalysis";
import MedicalGuidelines from "./MedicalGuidelines";
import SubmitAppOnline from "./SubmitAppOnline";
import AdvisorHomeOffice from "./AdvisorHomeOffice";
import RemotePolicyServicing from "./RemotePolicyServicing";
import PaymentChannel from "./PaymentChannel";
import Rome from "./Rome";

export const moduleMap: Record<string, ComponentType> = {
  "PRODUCT GUIDE": ProductGuide,
  "PRODUCT COMPETITIVE ANALYSIS": CompetitiveAnalysis,
  "MEDICAL, FOREIGN & OCCUPATIONAL GUIDELINES": MedicalGuidelines,
  "SUBMITTING APP ONLINE": SubmitAppOnline,
  "ADVISORS HOME OFFICE (AHO)": AdvisorHomeOffice,
  "REMOTE POLICY SERVICING": RemotePolicyServicing,
  "PAYMENT CHANNEL": PaymentChannel,
  "REMOTE ONLINE MEDICAL EXAMINATION (R.O.M.E)": Rome,
};
