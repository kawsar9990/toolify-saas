import type { LucideIcon } from "lucide-react";

export interface AboutPillarItem {
  id: "craft" | "speed" | "accessibility";
  title: string;
  badge: string;
  description: string;
}

export interface AboutMilestoneItem {
  label: string;
  value: string;
  detail: string;
}

export interface AboutFallback {
  badge: string;
  title: string;
  subtitle: string;
  roleTag: string;
  creatorName: string;
  profileImageCaption: string;
  homePreviewBadge: string;
  homePreviewTitle: string;
  homePreviewCaption: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  currentLangLabel: string;
  highlights: AboutMilestoneItem[];
  storySection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  pillarsHeading: string;
  pillars: {
    craft: AboutPillarItem;
    speed: AboutPillarItem;
    accessibility: AboutPillarItem;
  };
  ctaBanner: {
    title: string;
    description: string;
    ownerNote: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface AboutPillarCardItem extends AboutPillarItem {
  icon: LucideIcon;
  badgeClass: string;
  iconWrapClass: string;
}