"use client";

import Link from "next/link";
import { useAppTranslation } from "@/hook/useAppTranslation";
import { FALLBACK_SHOWCASE } from "@/data/showcase.fallback";
import type { MobileTabItem, PreviewToolItem } from "@/types/showcase.types";

const NS = "showus";

export default function AppShowcaseAndCta() {
  const { text, objects } = useAppTranslation(NS);

  const tools = objects<PreviewToolItem>(
    "showcase.tools",
    FALLBACK_SHOWCASE.showcase.tools
  );

  const tabs = objects<MobileTabItem>(
    "showcase.tabs",
    FALLBACK_SHOWCASE.showcase.tabs
  );

  const showcaseTitle = text(
    "showcase.title",
    FALLBACK_SHOWCASE.showcase.title
  );
  const showcaseDescription = text(
    "showcase.description",
    FALLBACK_SHOWCASE.showcase.description
  );
  const showcaseCtaLabel = text(
    "showcase.ctaLabel",
    FALLBACK_SHOWCASE.showcase.ctaLabel
  );
  const showcaseCtaHref = text(
    "showcase.ctaHref",
    FALLBACK_SHOWCASE.showcase.ctaHref
  );
  const searchPlaceholder = text(
    "showcase.searchPlaceholder",
    FALLBACK_SHOWCASE.showcase.searchPlaceholder
  );

  const promoTitle = text(
    "promoBanner.title",
    FALLBACK_SHOWCASE.promoBanner.title
  );
  const promoDescription = text(
    "promoBanner.description",
    FALLBACK_SHOWCASE.promoBanner.description
  );
  const promoCtaLabel = text(
    "promoBanner.ctaLabel",
    FALLBACK_SHOWCASE.promoBanner.ctaLabel
  );
  const promoCtaHref = text(
    "promoBanner.ctaHref",
    FALLBACK_SHOWCASE.promoBanner.ctaHref
  );

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F6F6F7] px-6 py-12 transition-colors dark:bg-zinc-900/90 dark:ring-1 dark:ring-zinc-800 sm:px-12 sm:py-16 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="max-w-md text-3xl font-bold leading-[1.15] tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                {showcaseTitle}
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                {showcaseDescription}
              </p>

              <div className="mt-7">
                <Link
                  href={showcaseCtaHref}
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.99] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 sm:text-sm"
                >
                  {showcaseCtaLabel}
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div className="w-full max-w-[265px] rounded-[34px] border-[5px] border-zinc-950 bg-white p-3.5 shadow-xl shadow-zinc-950/5 dark:border-zinc-700 dark:bg-zinc-950 dark:shadow-black/40">
                <div className="rounded-xl bg-zinc-100 px-3.5 py-2 text-[11px] font-medium text-zinc-400 dark:bg-zinc-900 dark:text-zinc-500">
                  {searchPlaceholder}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {tools.map((tool) => (
                    <div
                      key={tool.id}
                      className="flex flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/70 px-2 py-4 text-center transition-colors hover:border-zinc-200 dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"
                    >
                      <span className="text-xs font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {tool.badge}
                      </span>
                      <span className="mt-1.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                        {tool.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 flex items-center justify-between border-t border-zinc-100 px-1.5 pt-2.5 dark:border-zinc-800">
                  {tabs.map((tab) => (
                    <span
                      key={tab.id}
                      className={`text-[10px] ${
                        tab.active
                          ? "font-bold text-zinc-950 dark:text-white"
                          : "font-medium text-zinc-400 dark:text-zinc-500"
                      }`}
                    >
                      {tab.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#B8F62D] px-6 py-10 shadow-sm sm:px-12 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                {promoTitle}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-zinc-900/85 sm:text-sm">
                {promoDescription}
              </p>
            </div>

            <Link
              href={promoCtaHref}
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-zinc-950 px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.99] sm:text-sm"
            >
              {promoCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}