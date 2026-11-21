import type { CategorySlug, SupportedLang, ToolCatalogEntry } from "@/types/tool-categories";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function formatNumberByLang(num: number, lang: SupportedLang): string {
  if (lang === "bn") {
    return String(num)
      .split("")
      .map((ch) => (/\d/.test(ch) ? BN_DIGITS[Number(ch)] : ch))
      .join("");
  }
  return String(num);
}

export function getCategoryToolCount(
  tools: ToolCatalogEntry[],
  categorySlug: CategorySlug
): number {
  return tools.filter((tool) => tool.categorySlug === categorySlug).length;
}

export function formatCategoryCountLabel(
  count: number,
  lang: SupportedLang,
  customSuffix?: { single?: string; plural?: string }
): string {
  const formattedNum = formatNumberByLang(count, lang);

  if (lang === "bn") {
    const suffix = customSuffix?.plural ?? "টি টুল";
    return `${formattedNum}${suffix}`;
  }

  if (count === 1) {
    const singleSuffix = customSuffix?.single ?? "Tool";
    return `${formattedNum} ${singleSuffix}`;
  }

  const pluralSuffix = customSuffix?.plural ?? "Tools";
  return `${formattedNum} ${pluralSuffix}`;
}