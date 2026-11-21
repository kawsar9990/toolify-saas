import type { PrivacyPolicyFallback } from "@/types/privacyPolicy.types";

export const FALLBACK_PRIVACY_POLICY: PrivacyPolicyFallback = {
  badge: "Privacy & Trust",
  title: "Privacy Policy",
  subtitle:
    "How Toolify—created by Kawsar—collects, uses, and protects your information when you explore our tools and platform.",
  lastUpdatedLabel: "Last updated:",
  lastUpdatedDate: "November 20, 2026",
  currentLangLabel: "Active Language:",
  highlightsTitle: "Core Privacy Commitments",
  highlights: {
    dataCollection: {
      id: "data-collection",
      title: "Minimal Data Collection",
      badge: "Transparency",
      description:
        "We only gather information needed to run features smoothly, keep accounts secure, and improve overall usability.",
    },
    dataProtection: {
      id: "data-protection",
      title: "Security First",
      badge: "Protected",
      description:
        "Modern security practices protect session integrity and prevent unauthorized access to user information.",
    },
    userRights: {
      id: "user-rights",
      title: "Your Control & Choice",
      badge: "Control",
      description:
        "Manage your language, theme, and account preferences anytime with clear visibility into how data is handled.",
    },
  },
  sections: {
    informationWeCollect: {
      title: "1. Information We Collect",
      description:
        "Depending on how you interact with Toolify, we may collect limited account details, preference settings, and technical usage diagnostics.",
      points: [
        "Account & profile details you voluntarily provide when signing in or contacting support.",
        "UI preferences such as language selection (English / Bangla) and light or dark mode.",
        "Basic browser, device, and page performance signals to keep tools fast and reliable.",
      ],
    },
    howWeUseInformation: {
      title: "2. How We Use Information",
      description:
        "Your information helps us operate, maintain, and refine the workspace experience built by Kawsar.",
      points: [
        "Authenticate sessions, save preferences, and deliver requested utility features.",
        "Identify bugs, optimize speed, and improve tool workflows across devices.",
        "Respond to support inquiries, feedback, and feature requests.",
      ],
    },
    dataSecurityAndRetention: {
      title: "3. Data Security & Retention",
      description:
        "We take reasonable technical and organizational safeguards to protect your data and retain it only as long as necessary.",
      points: [
        "We do not sell your personal information to third-party data brokers.",
        "Information is retained only while needed for active service operations or legal compliance.",
        "No online service can guarantee 100% absolute security, so keep credentials safe.",
      ],
    },
    yourRightsAndChoices: {
      title: "4. Your Rights & Choices",
      description:
        "You stay in control of your experience and can reach out whenever you have questions about your privacy.",
      points: [
        "Update preferences or clear local browser data/cookies at any time.",
        "Request assistance or clarification regarding your account or privacy concerns.",
        "Review this policy periodically as Toolify evolves with new tools and features.",
      ],
    },
  },
  contact: {
    title: "5. Contact Kawsar & Support Team",
    description:
      "Have questions about how privacy works on Toolify? Reach out directly to our support team or explore the available tools.",
    ownerNote: "Maintained by Kawsar • Toolify Privacy & Platform Team",
    primaryCta: "Explore Tools",
    secondaryCta: "Contact Support",
  },
};