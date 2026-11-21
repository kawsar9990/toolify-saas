"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAppTranslation } from "@/hook/useAppTranslation";
import {
  CATEGORY_CARDS_CONFIG,
  FALLBACK_CATEGORIES_LOCALE,
} from "@/data/Tools/categories.fallback";
import {
  formatCategoryCountLabel,
  getCategoryToolCount,
} from "@/lib/category-count";
import type { SupportedLang, ToolCatalogEntry } from "@/types/tool-categories";

const NS = "toolcategory";

const EMPTY_TOOLS: ToolCatalogEntry[] = [];

interface HomeCategoryGridProps {
  tools?: ToolCatalogEntry[];
  limit?: number;
}

export default function HomeCategoryGrid({
  tools = EMPTY_TOOLS,
  limit,
}: HomeCategoryGridProps) {
  const { text, lang } = useAppTranslation(NS);
  const activeLang: SupportedLang = lang === "bn" ? "bn" : "en";
  const localeFallback = FALLBACK_CATEGORIES_LOCALE[activeLang];

  const visibleCategories =
    typeof limit === "number"
      ? CATEGORY_CARDS_CONFIG.slice(0, limit)
      : CATEGORY_CARDS_CONFIG;

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {text("sectionTitle", localeFallback.sectionTitle)}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-4">
          {visibleCategories.map((item, idx) => {
            const IconComponent = item.icon;
            const title = text(
              item.titleKey,
              localeFallback.items[item.id].title
            );

            const count = getCategoryToolCount(tools, item.slug);
            const countLabel = formatCategoryCountLabel(
              count,
              activeLang,
              localeFallback.countSuffix
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={`/categories/${encodeURIComponent(item.slug)}`}
                  className={`flex min-h-[126px] flex-col items-center justify-center rounded-2xl p-3 text-center transition-all sm:min-h-[144px] sm:p-4 ${item.cardClass}`}
                >
                  <div
                    className={`mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${item.iconWrapClass}`}
                  >
                    <IconComponent className="h-6 w-6 stroke-[2.2]" />
                  </div>

                  <span className="line-clamp-1 text-sm font-bold leading-snug sm:text-base">
                    {title}
                  </span>

                  <span className="mt-1 text-xs font-medium text-white/90">
                    {countLabel}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}