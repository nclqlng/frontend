import type { ComponentType } from "react";
import ProductGuide from "./ProductGuide";
import CompetitiveAnalysis from "./CompetitiveAnalysis";
import MedicalGuidelines from "./MedicalGuidelines";
import SubmitAppOnline from "./SubmitAppOnline";
import AdvisorHomeOffice from "./AdvisorHomeOffice";
import RemotePolicyServicing from "./RemotePolicyServicing";
import PaymentChannel from "./PaymentChannel";
import Rome from "./Rome";
import PolicyDeliveryCourier from "./PolicyDeliveryCourier";
import Slamci from "./Slamci";
import UnderwritingEssentials from "./UnderwritingEssentials";
import ClaimsEssentials from "./ClaimsEssentials";
import Ebooks from "./Ebooks";

export const moduleMap: Record<string, ComponentType> = {
  "PRODUCT GUIDE": ProductGuide,
  "PRODUCT COMPETITIVE ANALYSIS": CompetitiveAnalysis,
  "MEDICAL, FOREIGN & OCCUPATIONAL GUIDELINES": MedicalGuidelines,
  "SUBMITTING APP ONLINE": SubmitAppOnline,
  "ADVISORS HOME OFFICE (AHO)": AdvisorHomeOffice,
  "REMOTE POLICY SERVICING": RemotePolicyServicing,
  "PAYMENT CHANNEL": PaymentChannel,
  "REMOTE ONLINE MEDICAL EXAMINATION (R.O.M.E)": Rome,
  "POLICY DELIVERY VIA COURIER": PolicyDeliveryCourier,
  SLAMCI: Slamci,
  "NEW BUSINESS & UNDERWRITING ESSENTIALS": UnderwritingEssentials,
  "CLAIMS ESSENTIALS": ClaimsEssentials,
  "e-BOOKS": Ebooks,
};
