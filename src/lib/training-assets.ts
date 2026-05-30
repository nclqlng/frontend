export type RemoteServicingEmail = {
  category: string;
  transaction: string;
  email: string;
};

export const remoteServicingEmails: RemoteServicingEmail[] = [
  { category: "CLAIMS", transaction: "Critical Illness Benefit", email: "PHIL_Claims@sunlife.com" },
  { category: "CLAIMS", transaction: "Death Claim", email: "PHIL_Claims@sunlife.com" },
  { category: "CLAIMS", transaction: "Hospital Income Benefit", email: "PHIL_Claims@sunlife.com" },
  { category: "CLAIMS", transaction: "Medical Reimbursements", email: "PHIL_Claims@sunlife.com" },
  { category: "DISBURSEMENTS", transaction: "Medical Reimbursements", email: "CSC Hub Head's email address (dependent on branch location)" },
  { category: "DISBURSEMENTS", transaction: "Dividends Withdrawal", email: "CSC Hub Head's email address (dependent on branch location)" },
  { category: "DISBURSEMENTS", transaction: "Maturities", email: "PHIL_Claims@sunlife.com" },
  { category: "DISBURSEMENTS", transaction: "Policy Loan", email: "CSC Hub Head's email address (dependent on branch location)" },
  { category: "DISBURSEMENTS", transaction: "Refund", email: "Phil-OPS-PPA@sunlife.com" },
  { category: "DISBURSEMENTS", transaction: "Traditional Policy Surrender", email: "CSC Hub Head's email address (dependent on branch location)" },
  { category: "DISBURSEMENTS", transaction: "VUL Fund Withdrawal", email: "Phil-ClientServiceCenters@sunlife.com" },
  { category: "DISBURSEMENTS", transaction: "VUL Policy Surrender", email: "Phil-ClientServiceCenters@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "AE and Cash Dividends Payout (Cash)", email: "PHIL-PCR@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "Change in Mode", email: "PHIL_BillingServices@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "Policy Changes", email: "PHIL-PCR@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "Policy Conversion", email: "PHIL-PCR@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "Reinstatement", email: "PHIL-PCR@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "VUL Fund Allocation", email: "Phil-ClientServiceCenters@sunlife.com" },
  { category: "FINANCIAL CHANGES", transaction: "VUL Fund Switch", email: "Phil-ClientServiceCenters@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "ACA Enrollment", email: "Phil-OPS-PPA@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Assignment of Collateral Security", email: "#PHIL-Titles@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Change of Beneficiary (Death)", email: "#PHIL-Titles@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Change of Endowment Beneficiary", email: "#PHIL-Titles@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Duplicate Notice", email: "PHIL_BillingServices@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Release of Assigned Collateral Security", email: "#PHIL-Titles@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Update Contact Info", email: "PHIL-ACS-ClientManagement@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Update Home/Office Address", email: "PHIL-ACS-ClientManagement@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Update Mailing Address", email: "PHIL-ACS-ClientManagement@sunlife.com" },
  { category: "NON-FINANCIAL CHANGES", transaction: "Advisor's Change Request", email: "PHIL-ACS-ClientManagement@sunlife.com" },
];

export const TRAINING_ASSETS = {
  productGuide: {
    showcase: "/training-assets/product-guide/sun-life-product-showcase.pdf",
    traditionalProduct: "/training-assets/product-guide/traditional-product.pdf",
    supplementaryBenefit: "/training-assets/product-guide/supplementary-benefit.pdf",
    vulProduct: "/training-assets/product-guide/vul-product.pdf",
    vulFunds: "/training-assets/product-guide/vul-funds.pdf",
    healthProductsFolder:
      "https://drive.google.com/drive/u/1/folders/1lLaImNumqcqcwLr4B0KwvxY13VpuFCBR",
  },
  competitiveAnalysis: {
    healthVsJointLife: "/training-assets/competitive-analysis/health-vs-joint-life.pdf",
    sunFitAndWell: "/training-assets/competitive-analysis/sun-fit-and-well.pdf",
    sunFitAndWell2019: "/training-assets/competitive-analysis/sun-fit-and-well-2019.pdf",
  },
  medicalGuidelines: {
    cancer: "/training-assets/medical-guidelines/cancer-conditions-guide.pdf",
    medicalCi: "/training-assets/medical-guidelines/medical-conditions-ci-guide.pdf",
    foreign: "/training-assets/medical-guidelines/foreign-residence-guidelines.pdf",
    occupational: "/training-assets/medical-guidelines/occupational-guidelines.pdf",
  },
  submitApp: {
    sunsmartEapp: "/training-assets/submit-app/sunsmart-eapp.pdf",
    bcosUserGuide: "/training-assets/submit-app/bcos-user-guide.pdf",
    compatibleDevices: "/training-assets/submit-app/compatible-devices.jpg",
    downloadingTroubleshooting: "/training-assets/submit-app/downloading-troubleshooting.pdf",
    primarySyncGuide: "/training-assets/submit-app/primary-sync-guide.pdf",
    eappReviewExtraRating: "/training-assets/submit-app/eapp-review-extra-rating.pdf",
    csaGuide: "/training-assets/submit-app/csa-guide.pdf",
    proposalGuide: "/training-assets/submit-app/proposal-guide.pdf",
    basicEappFields: "/training-assets/submit-app/basic-eapp-fields.pdf",
    questionnaireGuide: "/training-assets/submit-app/questionnaire-guide.pdf",
    bcos3Steps: "/training-assets/submit-app/bcos-3-steps.gif",
    bcosClientGuide: "/training-assets/submit-app/bcos-client-guide.png",
    bcosTroubleshooting: "/training-assets/submit-app/bcos-troubleshooting.pdf",
  },
  aho: {
    guide: "/training-assets/aho/advisor-home-office-guide.pdf",
    passwordEnhancements: "/training-assets/aho/aho-password-enhancements.pdf",
    appFormEnhancements: "/training-assets/aho/app-form-enhancements.pdf",
  },
  policyServicing: {
    comprehensiveGuide: "/training-assets/policy-servicing/comprehensive-guide-remote-servicing.pdf",
    esigGuide: "/training-assets/policy-servicing/esig-guide.pdf",
    clientConfirmation: "/training-assets/policy-servicing/client-confirmation.jpg",
    servicingForms: "/training-assets/policy-servicing/servicing-forms.pdf",
  },
  rome: {
    summary: "/training-assets/rome/rome-summary.png",
    guide: "/training-assets/rome/rome-april-2021.pdf",
  },
  paymentChannel: {
    overview: "/training-assets/payment-channel/bills-payment-overview.jpg",
    channels: "/training-assets/payment-channel/payment-channels.jpg",
    bdo: "/training-assets/payment-channel/bdo.jpg",
    bpi: "/training-assets/payment-channel/bpi.jpg",
    metrobank: "/training-assets/payment-channel/metrobank.jpg",
    securityBank: "/training-assets/payment-channel/security-bank.jpg",
    maya: "/training-assets/payment-channel/maya.jpg",
  },
} as const;
