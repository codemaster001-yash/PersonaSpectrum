export enum ColorType {
  RED = 'Red',
  YELLOW = 'Yellow',
  GREEN = 'Green',
  BLUE = 'Blue'
}

export interface StatPoint {
  label: string;
  value: number; // 0-10
}

export interface ImpactRef {
  color: ColorType;
  description: string;
}

export interface PersonalityData {
  type: ColorType;
  tagline: string; // e.g., "Driven by POWER & RESULTS"
  description: string;
  stats: StatPoint[];
  communicationTips: string[];
  impactOnOthers: ImpactRef[];
  // avatarUrl removed in favor of procedural component
  themeColor: string; // Hex for charts
  textColor: string; // Tailwind class
  bgColor: string; // Tailwind class
  borderColor: string; // Tailwind class
  shadowColor: string; // Tailwind class
}