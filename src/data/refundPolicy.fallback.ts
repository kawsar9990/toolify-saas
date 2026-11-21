import type { RefundPolicyFallback } from "@/types/refundPolicy.types";

export const FALLBACK_REFUND_POLICY: RefundPolicyFallback = {
  badge: "Billing & Refunds",
  title: "Refund Policy",
  subtitle:
    "Clear, fair, and transparent refund guidelines for Toolify—built and maintained by Kawsar—so you always know how billing and requests work.",
  highlightBoxTitle: "Quick Billing Summary",
  highlightBoxDesc:
    "Reach out promptly with your order details if an issue happens with billing or access. Fair cases are reviewed personally by Kawsar and our support team.",
  lastUpdatedLabel: "Last updated:",
  lastUpdatedDate: "November 20, 2026",
  currentLangLabel: "Active Language:",
  cardsTitle: "Refund Eligibility at a Glance",
  cards: {
    eligible: {
      id: "eligible",
      title: "Eligible Cases",
      badge: "Reviewed Fairly",
      description:
        "Duplicate charges, accidental double billing, or major technical access issues that prevent you from using paid features.",
    },
    nonRefundable: {
      id: "non-refundable",
      title: "Non-Refundable Cases",
      badge: "Policy Limits",
      description:
        "Partially used billing cycles, change of mind after extended usage, or accounts suspended due to terms violations.",
    },
    processing: {
      id: "processing",
      title: "Resolution & Timeline",
      badge: "Transparent",
      description:
        "Approved refunds are issued back to the original payment method within a standard processing window.",
    },
  },
  timelineTitle: "How a Refund Request Works",
  timelineSubtitle:
    "Follow these straightforward steps if you need help with a payment or subscription on Toolify.",
  steps: [
    {
      step: "01",
      title: "Check Your Billing Details",
      description:
        "Note your account email, payment date, transaction reference, and the specific issue you experienced.",
    },
    {
      step: "02",
      title: "Contact Support Quickly",
      description:
        "Submit your request through our support page as soon as possible so we can investigate while records are clear.",
    },
    {
      step: "03",
      title: "Case Review by Kawsar & Team",
      description:
        "We review usage logs, billing status, and eligibility fairly without automated runaround.",
    },
    {
      step: "04",
      title: "Confirmation & Settlement",
      description:
        "Once approved, you receive a confirmation update and the refund is processed back to your payment source.",
    },
  ],
  contact: {
    title: "Need Billing Assistance?",
    description:
      "Have a question about a payment, plan upgrade, or refund eligibility on Toolify? Connect with Kawsar and our support team.",
    ownerNote: "Managed by Kawsar • Toolify Billing & Support",
    primaryCta: "Explore Tools",
    secondaryCta: "Contact Support",
  },
};