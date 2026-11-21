import type { LucideIcon } from "lucide-react";

export type CategorySlug =
  | "calculation-converter"
  | "device-tools"
  | "qr-scanner"
  | "productivity"
  | "daily-tools"
  | "image-design"
  | "video tool"
  | "pdf-document"
  | "security-utilities"
  | "student-academic"
  | "ai-coding"
  | "religious";

export type SupportedLang = "en" | "bn";

export interface ToolCatalogEntry {
  slug: string;
  categorySlug: CategorySlug;
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  accessType?: "free" | "credit" | "trial" | "paid";
  iconKey?: string;
}

export interface CategoryCardConfig {
  id: CategorySlug;
  slug: CategorySlug;
  icon: LucideIcon;
  titleKey: string;
  fallbackTitle: {
    en: string;
    bn: string;
  };
  cardClass: string;
  iconWrapClass: string;
}

export interface CategoriesLocaleContent {
  sectionTitle: string;
  sectionSubtitle: string;
  countSuffix: {
    single: string;
    plural: string;
  };
  items: Record<
    CategorySlug,
    {
      title: string;
    }
  >;
}