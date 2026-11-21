import type { LucideIcon } from "lucide-react";

export interface RefundRuleItem {
  step: string;
  title: string;
  description: string;
}

export interface RefundPlanCard {
  id: "eligible" | "non-refundable" | "processing";
  title: string;
  badge: string;
  description: string;
}

export interface RefundPolicyFallback {
  badge: string;
  title: string;
  subtitle: string;
  highlightBoxTitle: string;
  highlightBoxDesc: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  currentLangLabel: string;
  cardsTitle: string;
  cards: {
    eligible: RefundPlanCard;
    nonRefundable: RefundPlanCard;
    processing: RefundPlanCard;
  };
  timelineTitle: string;
  timelineSubtitle: string;
  steps: RefundRuleItem[];
  contact: {
    title: string;
    description: string;
    ownerNote: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface RefundPlanCardItem extends RefundPlanCard {
  icon: LucideIcon;
  badgeClass: string;
  iconWrapClass: string;
  accentBorderClass: string;
}