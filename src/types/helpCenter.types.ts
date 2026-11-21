import type { LucideIcon } from "lucide-react";

export type HelpTopicId =
  | "all"
  | "getting-started"
  | "tools-workspace"
  | "account-billing"
  | "troubleshooting";

export interface HelpArticleItem {
  id: string;
  topic: Exclude<HelpTopicId, "all">;
  badge: string;
  title: string;
  summary: string;
  steps: string[];
  whatsappPrefill: string;
}

export interface QuickChannelCard {
  id: "whatsapp" | "contact" | "faq";
  title: string;
  subtitle: string;
  badge: string;
  ctaLabel: string;
}

export interface HelpCenterFallback {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  clearSearchLabel: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  currentLangLabel: string;
  topics: {
    all: string;
    gettingStarted: string;
    toolsWorkspace: string;
    accountBilling: string;
    troubleshooting: string;
  };
  guidesHeading: string;
  guidesSubheading: string;
  askOnWhatsappLabel: string;
  emptyState: {
    title: string;
    description: string;
    resetButton: string;
  };
  channelsHeading: string;
  channels: {
    whatsapp: QuickChannelCard;
    contact: QuickChannelCard;
    faq: QuickChannelCard;
  };
  footerBanner: {
    title: string;
    description: string;
    ownerTag: string;
    whatsappCta: string;
    toolsCta: string;
  };
  items: HelpArticleItem[];
}

export interface HelpArticleViewItem extends HelpArticleItem {
  icon: LucideIcon;
}