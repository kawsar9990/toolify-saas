import type { LucideIcon } from "lucide-react";

export interface PrivacySectionContent {
  title: string;
  description: string;
  points: string[];
}

export interface PrivacyHighlightCard {
  id: "data-collection" | "data-protection" | "user-rights";
  title: string;
  badge: string;
  description: string;
}

export interface PrivacyPolicyFallback {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  currentLangLabel: string;
  highlightsTitle: string;
  highlights: {
    dataCollection: PrivacyHighlightCard;
    dataProtection: PrivacyHighlightCard;
    userRights: PrivacyHighlightCard;
  };
  sections: {
    informationWeCollect: PrivacySectionContent;
    howWeUseInformation: PrivacySectionContent;
    dataSecurityAndRetention: PrivacySectionContent;
    yourRightsAndChoices: PrivacySectionContent;
  };
  contact: {
    title: string;
    description: string;
    ownerNote: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface PrivacyHighlightCardItem extends PrivacyHighlightCard {
  icon: LucideIcon;
  badgeClass: string;
  iconWrapClass: string;
}