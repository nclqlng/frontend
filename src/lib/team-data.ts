export type TeamMember = {
  rank: "BM" | "SM" | "UM" | "MC";
  name: string;
  role: string;
  coded?: string;
  strengths: string[];
  photoId?: string;
};

export type TeamTier = {
  rank: TeamMember["rank"];
  title: string;
  subtitle: string;
};

export const teamTiers: TeamTier[] = [
  { rank: "BM", title: "Branch Manager", subtitle: "Executive leadership" },
  { rank: "SM", title: "Sales Manager", subtitle: "Senior management" },
  { rank: "UM", title: "Unit Managers", subtitle: "Operational leadership" },
  { rank: "MC", title: "Manager Candidates", subtitle: "Emerging leaders" },
];

export const teamMembers: TeamMember[] = [
  {
    rank: "BM",
    name: "RHEINA PALMA",
    role: "Chemist | Branch Manager",
    coded: "July 01, 2013",
    photoId: "1QlD7oRzbARohp2kWWmuD4XNpAiZd_ood",
    strengths: ["Relator", "Focus", "Command", "Responsibility", "Arranger"],
  },
  {
    rank: "SM",
    name: "MA. KRISTINA CHANG",
    role: "Accountant | Sales Manager",
    coded: "March 13, 2015",
    photoId: "1SD7k_uhhM8ltoN4KV6P8_9juLtFmxqjl",
    strengths: [
      "Strategic",
      "Individualization",
      "Arranger",
      "Relator",
      "Activator",
    ],
  },
  {
    rank: "UM",
    name: "JEFFREY PALMA",
    role: "BPO Cluster Head | Unit Manager",
    coded: "January 12, 2015",
    photoId: "1n9USeb7gIB5JhW8Eoa82IFNRta1PPj6s",
    strengths: ["Strategic", "Significance", "Learner", "Belief", "Futuristic"],
  },
  {
    rank: "UM",
    name: "RAQUEL PATRIS",
    role: "Civil Engineer | Unit Manager",
    coded: "August 1, 2016",
    photoId: "1k7hEFkg5Y8AhiMPCy6UISYYjFchc_JBt",
    strengths: [
      "Deliberative",
      "Harmony",
      "Empathy",
      "Responsibility",
      "Arranger",
    ],
  },
  {
    rank: "UM",
    name: "ELY ANGELES",
    role: "Banker | Unit Manager",
    coded: "December 6, 2016",
    photoId: "1lG0E8dOV4fRwVmgKFMjPI6mCJUuJYLMc",
    strengths: [
      "Positivity",
      "Harmony",
      "Connectedness",
      "Arranger",
      "Empathy",
    ],
  },
  {
    rank: "UM",
    name: "JOMAR REBUSIT",
    role: "Pipping Design Engineer | Unit Manager",
    coded: "June 1, 2018",
    photoId: "1IvlV3imtAsZ8yrYDy7BVg5JGpiBdoNpS",
    strengths: [
      "Learner",
      "Restorative",
      "Analytical",
      "Strategic",
      "Self-Assurance",
    ],
  },
  {
    rank: "UM",
    name: "MARY GRACE RAMIZO",
    role: "Accountant | Unit Manager",
    coded: "April 3, 2017",
    photoId: "1ic4UaDygBSTFY9Wq-of_gtP03_UCwzv1",
    strengths: [
      "Belief",
      "Responsibility",
      "Futuristic",
      "Connectedness",
      "Positivity",
    ],
  },
  {
    rank: "UM",
    name: "NIKKO LABANDA",
    role: "Unit Manager",
    photoId: "1E8Qart77DPmDuBTmyc_RLAeDMizE1ZfR",
    strengths: [],
  },
  {
    rank: "UM",
    name: "MARK RENNIEL VELASCO",
    role: "Unit Manager",
    photoId: "1VFiJ6ItffNVS0L2w2FS1Lc95AzQ39gKo",
    strengths: [],
  },
  {
    rank: "UM",
    name: "JOHN RICK CHANG",
    role: "Unit Manager",
    photoId: "1RoomKVInqMnsQvIIn6L3pHfyU_HSL-O5",
    strengths: [],
  },
  {
    rank: "UM",
    name: "JOSEPH LEGASPI",
    role: "Unit Manager",
    photoId: "1yeTSG8i19JD_h5YaR0OindZJUri7H_7l",
    strengths: [],
  },
  {
    rank: "MC",
    name: "JAKE ABATAYO",
    role: "Unit Manager",
    photoId: "1AUkgLj1vSQWzpWyi4T8rjN63zHl3mn_9",
    strengths: [],
  },
  {
    rank: "MC",
    name: "DEXTER BELENA",
    role: "Unit Manager",
    photoId: "1Se13arO6vF_Y5iXU8-v3HxIAAiXECaIZ",
    strengths: [],
  },
];

export function membersByRank(rank: TeamMember["rank"]) {
  return teamMembers.filter((m) => m.rank === rank);
}

export function teamPhotoSrc(photoId: string, width = 640) {
  return `/api/team-photo?id=${encodeURIComponent(photoId)}&w=${width}`;
}
