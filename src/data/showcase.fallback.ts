import type { ShowcaseContent } from "@/types/showcase.types";

export const FALLBACK_SHOWCASE: ShowcaseContent = {
  showcase: {
    title: "A website on desktop. An app on your phone.",
    description:
      "On a computer you get the full Toolify website with a header and wide tool grid. On a phone the same account switches to an app layout with big tiles and a bottom tab bar.",
    ctaLabel: "Create free account",
    ctaHref: "/signup",
    searchPlaceholder: "Search Toolify...",
    tools: [
      { id: "calculator", badge: "=", label: "Calculator" },
      { id: "short-link", badge: "↗", label: "Short Link" },
      { id: "qr-code", badge: "QR", label: "QR Code" },
      { id: "password", badge: "••", label: "Password" },
      { id: "pdf-merge", badge: "PDF", label: "PDF Merge" },
      { id: "remove-bg", badge: "BG", label: "Remove BG" },
    ],
    tabs: [
      { id: "home", label: "Home", active: true },
      { id: "tools", label: "Tools", active: false },
      { id: "plans", label: "Plans", active: false },
      { id: "account", label: "Account", active: false },
    ],
  },
  promoBanner: {
    title: "Your first month is free.",
    description:
      "Make a Toolify account, try every tool, and pick a plan only if you want to keep going.",
    ctaLabel: "Create free account",
    ctaHref: "/signup",
  },
};