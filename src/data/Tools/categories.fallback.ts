import {
  Calculator,
  Smartphone,
  QrCode,
  FolderKanban,
  Wrench,
  Image as ImageIcon,
  Video,
  FileText,
  Bot,
  ShieldCheck,
  GraduationCap,
  MoonStar,
} from "lucide-react";
import type {
  CategoryCardConfig,
  CategoriesLocaleContent,
} from "@/types/tool-categories";

export const CATEGORY_CARDS_CONFIG: CategoryCardConfig[] = [
  {
    id: "calculation-converter",
    slug: "calculation-converter",
    icon: Calculator,
    titleKey: "items.calculation-converter.title",
    fallbackTitle: {
      en: "Calculation & Converter",
      bn: "ক্যালকুলেশন ও কনভার্টার",
    },
    cardClass:
      "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-purple-500/20 dark:from-violet-600 dark:to-purple-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "device-tools",
    slug: "device-tools",
    icon: Smartphone,
    titleKey: "items.device-tools.title",
    fallbackTitle: {
      en: "Device Tools",
      bn: "ডিভাইস টুলস",
    },
    cardClass:
      "bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-md shadow-blue-500/20 dark:from-sky-600 dark:to-blue-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "qr-scanner",
    slug: "qr-scanner",
    icon: QrCode,
    titleKey: "items.qr-scanner.title",
    fallbackTitle: {
      en: "QR & Scanner",
      bn: "কিউআর ও স্ক্যানার",
    },
    cardClass:
      "bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-md shadow-emerald-500/20 dark:from-emerald-600 dark:to-green-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "productivity",
    slug: "productivity",
    icon: FolderKanban,
    titleKey: "items.productivity.title",
    fallbackTitle: {
      en: "Productivity",
      bn: "প্রোডাক্টিভিটি",
    },
    cardClass:
      "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-orange-500/20 dark:from-amber-500 dark:to-orange-700",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "daily-tools",
    slug: "daily-tools",
    icon: Wrench,
    titleKey: "items.daily-tools.title",
    fallbackTitle: {
      en: "Daily Tools",
      bn: "ডেইলি টুলস",
    },
    cardClass:
      "bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-md shadow-rose-500/20 dark:from-rose-600 dark:to-pink-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "image-design",
    slug: "image-design",
    icon: ImageIcon,
    titleKey: "items.image-design.title",
    fallbackTitle: {
      en: "Image & Design",
      bn: "ইমেজ ও ডিজাইন",
    },
    cardClass:
      "bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-md shadow-teal-500/20 dark:from-cyan-600 dark:to-teal-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "video tool",
    slug: "video tool",
    icon: Video,
    titleKey: "items.video tool.title",
    fallbackTitle: {
      en: "Video Tools",
      bn: "ভিডিও টুলস",
    },
    cardClass:
      "bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white shadow-md shadow-fuchsia-500/20 dark:from-fuchsia-700 dark:to-pink-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "pdf-document",
    slug: "pdf-document",
    icon: FileText,
    titleKey: "items.pdf-document.title",
    fallbackTitle: {
      en: "PDF & Document",
      bn: "পিডিএফ ও ডকুমেন্ট",
    },
    cardClass:
      "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md shadow-red-500/20 dark:from-red-600 dark:to-rose-800",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "security-utilities",
    slug: "security-utilities",
    icon: ShieldCheck,
    titleKey: "items.security-utilities.title",
    fallbackTitle: {
      en: "Security Utilities",
      bn: "সিকিউরিটি ইউটিলিটি",
    },
    cardClass:
      "bg-gradient-to-br from-slate-600 to-zinc-800 text-white shadow-md shadow-slate-700/20 dark:from-slate-700 dark:to-zinc-900",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "ai-coding",
    slug: "ai-coding",
    icon: Bot,
    titleKey: "items.ai-coding.title",
    fallbackTitle: {
      en: "AI & Coding",
      bn: "এআই ও কোডিং",
    },
    cardClass:
      "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-indigo-500/20 dark:from-blue-700 dark:to-indigo-900",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "student-academic",
    slug: "student-academic",
    icon: GraduationCap,
    titleKey: "items.student-academic.title",
    fallbackTitle: {
      en: "Student & Academic",
      bn: "স্টুডেন্ট ও একাডেমিক",
    },
    cardClass:
      "bg-gradient-to-br from-indigo-500 to-blue-700 text-white shadow-md shadow-indigo-500/20 dark:from-indigo-600 dark:to-blue-900",
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    id: "religious",
    slug: "religious",
    icon: MoonStar,
    titleKey: "items.religious.title",
    fallbackTitle: {
      en: "Religious",
      bn: "রিলিজিয়াস",
    },
    cardClass:
      "bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-emerald-600/20 dark:from-emerald-700 dark:to-teal-900",
    iconWrapClass: "bg-white/20 text-white",
  },
];


export const FALLBACK_CATEGORIES_LOCALE: Record<
  SupportedLang,
  CategoriesLocaleContent
> = {
  en: {
    sectionTitle: "Categories",
    sectionSubtitle: "Explore tools by category",
    countSuffix: {
      single: "Tool",
      plural: "Tools",
    },
    items: {
      "calculation-converter": { title: "Calculation & Converter" },
      "device-tools": { title: "Device Tools" },
      "qr-scanner": { title: "QR & Scanner" },
      "productivity": { title: "Productivity" },
      "daily-tools": { title: "Daily Tools" },
      "image-design": { title: "Image & Design" },
      "video tool": { title: "Video Tools" },
      "pdf-document": { title: "PDF & Document" },
      "security-utilities": { title: "Security Utilities" },
      "ai-coding": { title: "AI & Coding" },
      "student-academic": { title: "Student & Academic" },
      "religious": { title: "Religious" },
    },
  },
  bn: {
    sectionTitle: "ক্যাটাগরি",
    sectionSubtitle: "ক্যাটাগরি অনুযায়ী টুলস দেখুন",
    countSuffix: {
      single: "টি টুল",
      plural: "টি টুল",
    },
    items: {
      "calculation-converter": { title: "ক্যালকুলেশন ও কনভার্টার" },
      "device-tools": { title: "ডিভাইস টুলস" },
      "qr-scanner": { title: "কিউআর ও স্ক্যানার" },
      "productivity": { title: "প্রোডাক্টিভিটি" },
      "daily-tools": { title: "ডেইলি টুলস" },
      "image-design": { title: "ইমেজ ও ডিজাইন" },
      "video tool": { title: "ভিডিও টুলস" },
      "pdf-document": { title: "পিডিএফ ও ডকুমেন্ট" },
      "security-utilities": { title: "সিকিউরিটি ইউটিলিটি" },
      "ai-coding": { title: "এআই ও কোডিং" },
      "student-academic": { title: "স্টুডেন্ট ও একাডেমিক" },
      "religious": { title: "রিলিজিয়াস" },
    },
  },
};