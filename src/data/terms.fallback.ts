import type { TermsFallback } from "@/types/terms.types";

export const FALLBACK_TERMS: TermsFallback = {
  badge: "Terms & Guidelines",
  title: "Terms of Service",
  subtitle:
    "Please read these terms carefully before using Toolify—created and maintained by Kawsar—for your everyday digital tools and workflows.",
  lastUpdatedLabel: "Last updated:",
  lastUpdatedDate: "November 20, 2026",
  currentLangLabel: "Active Language:",
  highlightsTitle: "Key Usage Principles",
  highlights: {
    fairUse: {
      id: "fair-use",
      title: "Fair & Lawful Use",
      badge: "Responsible",
      description:
        "Use Toolify's 100+ utilities strictly for lawful personal, educational, or professional productivity tasks.",
    },
    accountResponsibility: {
      id: "account-responsibility",
      title: "Account Security",
      badge: "Your Duty",
      description:
        "Keep your login credentials confidential and ensure all activities under your account follow platform rules.",
    },
    serviceUpdates: {
      id: "service-updates",
      title: "Continuous Updates",
      badge: "Evolving",
      description:
        "Toolify regularly improves features, limits, and tool capabilities to keep the workspace fast and reliable.",
    },
  },
  sections: {
    acceptanceOfTerms: {
      title: "1. Acceptance of Terms",
      description:
        "By accessing or using Toolify, you agree to comply with and be bound by these Terms of Service and our Privacy Policy.",
      points: [
        "If you do not agree with any part of these terms, please discontinue using the platform and its tools.",
        "These terms apply to all visitors, registered users, and Free or Premium plan members.",
        "Using the service confirms you are legally permitted to enter into this agreement.",
      ],
    },
    useOfToolsAndAccount: {
      title: "2. Use of Tools & User Accounts",
      description:
        "Toolify provides 100+ online utilities designed to simplify daily workflows when used responsibly.",
      points: [
        "Do not attempt to disrupt, overload, scrape, or reverse-engineer platform infrastructure or APIs.",
        "You are responsible for the accuracy, legality, and safety of any text, code, or files you process.",
        "Accounts found abusing limits or violating security policies may be restricted or suspended.",
      ],
    },
    intellectualProperty: {
      title: "3. Intellectual Property & Ownership",
      description:
        "The Toolify brand, interface design, custom utilities, and platform architecture are created and owned by Kawsar.",
      points: [
        "You retain full ownership of your original input content and generated outputs.",
        "Copying, reselling, or redistributing Toolify's source code or UI without permission is prohibited.",
        "Third-party libraries and icons remain the property of their respective copyright holders.",
      ],
    },
    limitationsAndChanges: {
      title: "4. Service Availability & Updates to Terms",
      description:
        "While we strive for smooth uptime, tools are provided on an 'as-is' and 'as-available' basis.",
      points: [
        "We may add, modify, or retire specific tools or plan limits at any time to improve quality.",
        "Toolify is not liable for indirect losses resulting from temporary downtime or user-input errors.",
        "Updated terms take effect once published on this page with a revised 'Last updated' date.",
      ],
    },
  },
  contact: {
    title: "5. Questions About These Terms?",
    description:
      "Need clarification regarding platform usage, Free & Premium access, or policies? Contact Kawsar and the Toolify support team.",
    ownerNote: "Created & Maintained by Kawsar • Toolify SaaS Platform",
    primaryCta: "Explore Tools",
    secondaryCta: "Contact Support",
  },
};