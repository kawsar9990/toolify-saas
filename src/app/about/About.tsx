"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Languages,
  ArrowRight,
  MessageSquare,
  LayoutTemplate,
  UserCheck,
} from "lucide-react";
import { useAppTranslation } from "@/hook/useAppTranslation";
import {
  CLOUDINARY_PROFILE_IMG,
  FALLBACK_ABOUT,
  HOME_PAGE_PREVIEW_IMG,
} from "@/data/about.fallback";
import type {
  AboutMilestoneItem,
  AboutPillarCardItem,
} from "@/types/about.types";

const NS = "about";

export default function About() {
  const { text, objects } = useAppTranslation(NS);

  const highlights = objects<AboutMilestoneItem>(
    "highlights",
    FALLBACK_ABOUT.highlights
  );

  const storyParagraphs = objects<string>(
    "storySection.paragraphs",
    FALLBACK_ABOUT.storySection.paragraphs
  );

  const pillars: AboutPillarCardItem[] = [
    {
      id: "craft",
      icon: Code2,
      title: text("pillars.craft.title", FALLBACK_ABOUT.pillars.craft.title),
      badge: text("pillars.craft.badge", FALLBACK_ABOUT.pillars.craft.badge),
      description: text(
        "pillars.craft.description",
        FALLBACK_ABOUT.pillars.craft.description
      ),
      badgeClass:
        "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
      iconWrapClass:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400",
    },
    {
      id: "speed",
      icon: Zap,
      title: text("pillars.speed.title", FALLBACK_ABOUT.pillars.speed.title),
      badge: text("pillars.speed.badge", FALLBACK_ABOUT.pillars.speed.badge),
      description: text(
        "pillars.speed.description",
        FALLBACK_ABOUT.pillars.speed.description
      ),
      badgeClass:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
      iconWrapClass:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    },
    {
      id: "accessibility",
      icon: Languages,
      title: text(
        "pillars.accessibility.title",
        FALLBACK_ABOUT.pillars.accessibility.title
      ),
      badge: text(
        "pillars.accessibility.badge",
        FALLBACK_ABOUT.pillars.accessibility.badge
      ),
      description: text(
        "pillars.accessibility.description",
        FALLBACK_ABOUT.pillars.accessibility.description
      ),
      badgeClass:
        "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
      iconWrapClass:
        "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden pb-20 pt-6 sm:pt-10 md:pb-16">
      <div className="mx-auto w-full max-w-5xl px-3.5 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:rounded-3xl sm:p-7"
        >
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="min-w-0 lg:col-span-7">
              <h1 className="text-xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
                {text("title", FALLBACK_ABOUT.title)}
              </h1>

              <p className="mt-2.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {text("subtitle", FALLBACK_ABOUT.subtitle)}
              </p>

              <div className="mt-4 inline-flex max-w-full items-start gap-2 rounded-xl border border-gray-200/80 bg-gray-50 px-3 py-1.5 text-[11px] font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-800/60 dark:text-gray-200 sm:items-center sm:rounded-2xl sm:px-3.5 sm:py-2 sm:text-xs">
                <UserCheck
                  size={14}
                  className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400 sm:mt-0"
                />
                <span className="break-words">
                  {text("roleTag", FALLBACK_ABOUT.roleTag)}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 xs:grid-cols-3 sm:grid-cols-3 sm:gap-3">
                {highlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 rounded-xl border border-gray-100 bg-gray-50/80 p-3 dark:border-gray-800 dark:bg-gray-800/50 sm:rounded-2xl sm:p-3.5"
                  >
                    <p className="truncate text-sm font-bold text-indigo-600 dark:text-indigo-400 sm:text-lg">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 truncate text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-tight text-gray-500 dark:text-gray-400">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 space-y-3.5 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/60">
                <div className="flex items-center gap-3 p-3 sm:p-3.5">
                  <img
                    src={CLOUDINARY_PROFILE_IMG}
                    alt={text("creatorName", FALLBACK_ABOUT.creatorName)}
                    className="h-12 w-12 shrink-0 rounded-xl border border-indigo-200/70 object-cover dark:border-indigo-500/30 sm:h-14 sm:w-14"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-gray-900 dark:text-white sm:text-sm">
                      {text("creatorName", FALLBACK_ABOUT.creatorName)}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-gray-600 dark:text-gray-300 sm:text-xs">
                      {text(
                        "profileImageCaption",
                        FALLBACK_ABOUT.profileImageCaption
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/60">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={HOME_PAGE_PREVIEW_IMG}
                    alt={text(
                      "homePreviewTitle",
                      FALLBACK_ABOUT.homePreviewTitle
                    )}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:flex-nowrap sm:p-3.5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white">
                      <LayoutTemplate
                        size={14}
                        className="shrink-0 text-indigo-600 dark:text-indigo-400"
                      />
                      <span className="truncate">
                        {text(
                          "homePreviewTitle",
                          FALLBACK_ABOUT.homePreviewTitle
                        )}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs">
                      {text(
                        "homePreviewCaption",
                        FALLBACK_ABOUT.homePreviewCaption
                      )}
                    </p>
                  </div>
                  <span className="max-w-full truncate rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300 sm:shrink-0 sm:text-[11px]">
                    {text("homePreviewBadge", FALLBACK_ABOUT.homePreviewBadge)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-4 w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:mt-6 sm:rounded-3xl sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 sm:text-xs">
            {text("storySection.eyebrow", FALLBACK_ABOUT.storySection.eyebrow)}
          </p>
          <h2 className="mt-1 text-base font-bold text-gray-900 dark:text-white sm:text-2xl">
            {text("storySection.title", FALLBACK_ABOUT.storySection.title)}
          </h2>

          <div className="mt-3 space-y-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            {storyParagraphs.map((para) => (
              <p key={para} className="break-words">
                {para}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-4 w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:mt-6 sm:rounded-3xl sm:p-7">
          <h2 className="text-base font-bold text-gray-900 dark:text-white sm:text-xl">
            {text("pillarsHeading", FALLBACK_ABOUT.pillarsHeading)}
          </h2>

          <div className="mt-4 grid gap-3.5 md:grid-cols-3 md:gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="flex min-w-0 flex-col justify-between rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-colors hover:border-indigo-200 dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-indigo-500/30 sm:rounded-2xl sm:p-5"
                >
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${pillar.iconWrapClass}`}
                      >
                        <Icon size={18} />
                      </span>
                      <span
                        className={`truncate rounded-full border px-2.5 py-0.5 text-[10px] font-semibold sm:text-[11px] ${pillar.badgeClass}`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="mt-3.5 text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-4 w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:mt-6 sm:rounded-3xl sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="min-w-0 max-w-xl">
              <h2 className="text-base font-bold text-gray-900 dark:text-white sm:text-xl">
                {text("ctaBanner.title", FALLBACK_ABOUT.ctaBanner.title)}
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                {text(
                  "ctaBanner.description",
                  FALLBACK_ABOUT.ctaBanner.description
                )}
              </p>
              <p className="mt-2.5 inline-flex max-w-full items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1.5 text-[11px] font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300 sm:text-xs">
                <span className="break-words">
                  {text("ctaBanner.ownerNote", FALLBACK_ABOUT.ctaBanner.ownerNote)}
                </span>
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:gap-2.5">
              <Link
                href="/tools"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition-colors hover:bg-indigo-700 sm:h-11 sm:text-sm"
              >
                <span>
                  {text(
                    "ctaBanner.primaryCta",
                    FALLBACK_ABOUT.ctaBanner.primaryCta
                  )}
                </span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 sm:text-sm"
              >
                <MessageSquare size={14} />
                <span>
                  {text(
                    "ctaBanner.secondaryCta",
                    FALLBACK_ABOUT.ctaBanner.secondaryCta
                  )}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}