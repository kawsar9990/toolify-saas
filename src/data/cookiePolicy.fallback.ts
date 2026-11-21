import type { CookiePolicyFallback } from "@/types/cookiePolicy.types";

export const FALLBACK_COOKIE_POLICY: CookiePolicyFallback = {
  badge: "Legal & Privacy",
  title: "Cookie Policy",
  subtitle:
    "How we use cookies and similar technologies to improve your experience, remember preferences, and keep our platform secure.",
  lastUpdatedLabel: "Last updated:",
  lastUpdatedDate: "November 20, 2026",
  currentLangLabel: "Active Language:",
  sections: {
    whatAreCookies: {
      title: "1. What Are Cookies?",
      description:
        "Cookies are small text files stored on your browser or device when you visit a website. They help websites recognize your browser, save preferences like theme and language, and keep sessions working smoothly.",
    },
    typesOfCookies: {
      title: "2. Types of Cookies We Use",
      essential: {
        title: "Essential Cookies",
        badge: "Required",
        description:
          "Necessary for core features such as navigation, authentication, security, and basic page rendering. These cannot be disabled.",
      },
      preference: {
        title: "Preference & Functional Cookies",
        badge: "Experience",
        description:
          "Remember your selected language (English / Bangla), dark or light theme, and saved favorites or UI choices.",
      },
      analytics: {
        title: "Analytics & Performance Cookies",
        badge: "Insights",
        description:
          "Help us understand how visitors interact with pages and tools so we can fix bottlenecks and improve speed.",
      },
    },
    managingCookies: {
      title: "3. Managing or Disabling Cookies",
      description:
        "You can control, clear, or block cookies anytime through your browser settings. Please note that disabling essential cookies may affect login, theme/language persistence, or certain interactive features.",
      tipTitle: "Browser Tip",
      tipText:
        "Check the Privacy or Site Settings section in Chrome, Edge, Safari, or Firefox to manage stored cookies per site.",
    },
    contact: {
      title: "4. Questions & Support",
      description:
        "If you have questions about our Cookie Policy or privacy practices, reach out to our support team before continuing to use account features.",
      cta: "Go to Tools",
    },
  },
};