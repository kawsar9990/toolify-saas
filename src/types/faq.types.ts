export type FaqCategoryKey =
  | "all"
  | "general"
  | "tools"
  | "security"
  | "account";

export interface FaqItem {
  id: string;
  category: Exclude<FaqCategoryKey, "all"> | string;
  question: string;
  answer: string;
}

export interface FaqFallbackData {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  allCategories: string;
  categories: {
    general: string;
    tools: string;
    security: string;
    account: string;
  };
  noResultsTitle: string;
  noResultsDesc: string;
  clearSearch: string;
  cta: {
    title: string;
    description: string;
    contactBtn: string;
    helpCenterBtn: string;
  };
  items: FaqItem[];
}