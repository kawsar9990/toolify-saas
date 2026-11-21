"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  X,
  MessageSquare,
  LifeBuoy,
  FolderSearch,
  ChevronDown,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppTranslation } from "@/hook/useAppTranslation";
import { FAQ_CATEGORY_KEYS, FALLBACK_FAQ } from "@/data/faq.fallback";
import type { FaqCategoryKey, FaqItem } from "@/types/faq.types";

const NS = "faq";

export default function FAQ() {
  const { text, objects } = useAppTranslation(NS);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategoryKey>("all");
  const [openId, setOpenId] = useState<string | null>(
    "what-is-toolify-and-creator"
  );

  const faqItems = objects<FaqItem>("items", FALLBACK_FAQ.items);

  const filteredItems = faqItems.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchQuery =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchCategory && matchQuery;
  });

  const getCategoryLabel = (cat: FaqCategoryKey): string => {
    if (cat === "all") {
      return text("allCategories", FALLBACK_FAQ.allCategories);
    }
    return text(`categories.${cat}`, FALLBACK_FAQ.categories[cat]);
  };


  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl">
            {text("title", FALLBACK_FAQ.title)}
          </h1>

          <p className="mx-auto mt-2.5 max-w-xl text-xs leading-relaxed text-gray-600 dark:text-zinc-400 sm:text-sm">
            {text("subtitle", FALLBACK_FAQ.subtitle)}
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-lg sm:mt-7">
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-gray-400 dark:text-zinc-500" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={text(
                "searchPlaceholder",
                FALLBACK_FAQ.searchPlaceholder
              )}
              className="h-10 rounded-xl border-gray-200 bg-white pl-10 pr-9 text-xs shadow-2xs transition-all focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-gray-900 dark:text-zinc-100 sm:h-11 sm:text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-zinc-400 dark:hover:bg-gray-700 dark:hover:text-zinc-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {FAQ_CATEGORY_KEYS.map((cat) => {
            const active = activeCategory === cat;
            return (
              <Button
                key={cat}
                type="button"
                size="sm"
                variant={active ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`h-8 cursor-pointer rounded-full px-3.5 text-xs font-medium transition-all ${
                  active
                    ? "bg-indigo-600 text-white shadow-2xs hover:bg-indigo-700"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:border-zinc-800 dark:bg-gray-900 dark:text-zinc-300 dark:hover:bg-gray-800"
                }`}
              >
                {getCategoryLabel(cat)}
              </Button>
            );
          })}
        </div>

        <div className="mt-8">
          {filteredItems.length > 0 ? (
            <div className="space-y-2.5">
              {filteredItems.map((item, idx) => {
                const itemKey = item.id || `faq-${idx}`;
                const isOpen = openId === itemKey;

                return (
                  <div
                    key={itemKey}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all dark:bg-gray-900 ${
                      isOpen
                        ? "border-indigo-300 shadow-xs dark:border-zinc-700"
                        : "border-gray-200/90 dark:border-zinc-800"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenId((prev) => (prev === itemKey ? null : itemKey))
                      }
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-xs font-medium text-gray-900 transition-colors hover:bg-gray-50/70 dark:text-zinc-100 dark:hover:bg-gray-800 sm:px-5 sm:py-3.5 sm:text-sm"
                    >
                      <div className="flex min-w-0 items-center gap-3 pr-1">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-semibold text-indigo-600 dark:bg-gray-900 dark:text-zinc-300">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{item.question}</span>
                      </div>

                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-zinc-400 ${
                          isOpen
                            ? "rotate-180 text-indigo-600 dark:text-zinc-200"
                            : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-4 pb-4 pt-3 text-xs leading-relaxed text-gray-600 dark:border-zinc-800 dark:text-zinc-300 sm:pb-4 sm:pl-12 sm:pr-6 sm:text-sm">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <Card className="rounded-2xl border-dashed border-gray-300 bg-gray-50/60 dark:border-zinc-800 dark:bg-gray-900/60">
              <CardContent className="flex flex-col items-center justify-center px-6 py-10 text-center">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-gray-900 dark:text-zinc-200">
                  <FolderSearch className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-100 sm:text-base">
                  {text("noResultsTitle", FALLBACK_FAQ.noResultsTitle)}
                </h3>
                <p className="mt-1 max-w-md text-xs text-gray-500 dark:text-zinc-400 sm:text-sm">
                  {text("noResultsDesc", FALLBACK_FAQ.noResultsDesc)}
                </p>
                <Button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 h-9 cursor-pointer rounded-xl bg-indigo-600 px-4 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  {text("clearSearch", FALLBACK_FAQ.clearSearch)}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-11 overflow-hidden rounded-3xl border-gray-200/80 bg-gray-50/70 shadow-2xs dark:border-zinc-800 dark:bg-gray-900 sm:mt-12">
          <CardContent className="flex flex-col items-center justify-between gap-5 p-5 text-center sm:flex-row sm:gap-6 sm:px-7 sm:py-6 sm:text-left">
            <div className="max-w-md">
              <h2 className="text-base font-bold text-gray-900 dark:text-zinc-100 sm:text-lg">
                {text("cta.title", FALLBACK_FAQ.cta.title)}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-zinc-400 sm:text-sm">
                {text("cta.description", FALLBACK_FAQ.cta.description)}
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/help-center"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-50 dark:border-zinc-700 dark:bg-gray-900 dark:text-zinc-100 dark:hover:bg-gray-800 sm:w-auto sm:text-sm"
              >
                <LifeBuoy className="h-4 w-4 shrink-0" />
                <span>
                  {text(
                    "cta.helpCenterBtn",
                    FALLBACK_FAQ.cta.helpCenterBtn
                  )}
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-indigo-700 sm:w-auto sm:text-sm"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>
                  {text("cta.contactBtn", FALLBACK_FAQ.cta.contactBtn)}
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}