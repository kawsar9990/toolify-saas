import type { LucideIcon } from "lucide-react";

export interface CookiePolicySectionText {
  title: string;
  description: string;
}

export interface CookieTypeItemConfig {
  title: string;
  badge: string;
  description: string;
}

export interface CookiePolicyFallback {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  currentLangLabel: string;
  sections: {
    whatAreCookies: CookiePolicySectionText;
    typesOfCookies: {
      title: string;
      essential: CookieTypeItemConfig;
      preference: CookieTypeItemConfig;
      analytics: CookieTypeItemConfig;
    };
    managingCookies: CookiePolicySectionText & {
      tipTitle: string;
      tipText: string;
    };
    contact: CookiePolicySectionText & {
      cta: string;
    };
  };
}

export interface CookieTypeCardItem extends CookieTypeItemConfig {
  id: "essential" | "preference" | "analytics";
  icon: LucideIcon;
  badgeClass: string;
  iconWrapClass: string;
}