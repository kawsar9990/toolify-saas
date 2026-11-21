import type { LucideIcon } from "lucide-react";

export interface TermsSectionContent {
  title: string;
  description: string;
  points: string[];
}

export interface TermsHighlightCard {
  id: "fair-use" | "account-responsibility" | "service-updates";
  title: string;
  badge: string;
  description: string;
}

export interface TermsFallback {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  currentLangLabel: string;
  highlightsTitle: string;
  highlights: {
    fairUse: TermsHighlightCard;
    accountResponsibility: TermsHighlightCard;
    serviceUpdates: TermsHighlightCard;
  };
  sections: {
    acceptanceOfTerms: TermsSectionContent;
    useOfToolsAndAccount: TermsSectionContent;
    intellectualProperty: TermsSectionContent;
    limitationsAndChanges: TermsSectionContent;
  };
  contact: {
    title: string;
    description: string;
    ownerNote: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface TermsHighlightCardItem extends TermsHighlightCard {
  icon: LucideIcon;
  badgeClass: string;
  iconWrapClass: string;
}