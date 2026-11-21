"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  UserCheck,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Calendar,
  Sparkles,
} from "lucide-react";
import { useAppTranslation } from "@/hook/useAppTranslation";
import { FALLBACK_TERMS } from "@/data/terms.fallback";
import type {
  TermsHighlightCardItem,
  TermsSectionContent,
} from "@/types/terms.types";

const NS = "terms";

export default function Terms() {
  const { text, objects } = useAppTranslation(NS);

  const highlightCards: TermsHighlightCardItem[] = [
    {
      id: "fair-use",
      icon: Scale,
      title: text(
        "highlights.fairUse.title",
        FALLBACK_TERMS.highlights.fairUse.title
      ),
      badge: text(
        "highlights.fairUse.badge",
        FALLBACK_TERMS.highlights.fairUse.badge
      ),
      description: text(
        "highlights.fairUse.description",
        FALLBACK_TERMS.highlights.fairUse.description
      ),
      badgeClass:
        "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
      iconWrapClass:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400",
    },
    {
      id: "account-responsibility",
      icon: UserCheck,
      title: text(
        "highlights.accountResponsibility.title",
        FALLBACK_TERMS.highlights.accountResponsibility.title
      ),
      badge: text(
        "highlights.accountResponsibility.badge",
        FALLBACK_TERMS.highlights.accountResponsibility.badge
      ),
      description: text(
        "highlights.accountResponsibility.description",
        FALLBACK_TERMS.highlights.accountResponsibility.description
      ),
      badgeClass:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
      iconWrapClass:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    },
    {
      id: "service-updates",
      icon: RefreshCw,
      title: text(
        "highlights.serviceUpdates.title",
        FALLBACK_TERMS.highlights.serviceUpdates.title
      ),
      badge: text(
        "highlights.serviceUpdates.badge",
        FALLBACK_TERMS.highlights.serviceUpdates.badge
      ),
      description: text(
        "highlights.serviceUpdates.description",
        FALLBACK_TERMS.highlights.serviceUpdates.description
      ),
      badgeClass:
        "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
      iconWrapClass:
        "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    },
  ];

  const getSection = (
    key: keyof typeof FALLBACK_TERMS.sections
  ): TermsSectionContent => {
    const fallbackSection = FALLBACK_TERMS.sections[key];
    return {
      title: text(`sections.${key}.title`, fallbackSection.title),
      description: text(
        `sections.${key}.description`,
        fallbackSection.description
      ),
      points: objects<string>(
        `sections.${key}.points`,
        fallbackSection.points
      ),
    };
  };

  const detailSections: TermsSectionContent[] = [
    getSection("acceptanceOfTerms"),
    getSection("useOfToolsAndAccount"),
    getSection("intellectualProperty"),
    getSection("limitationsAndChanges"),
  ];

return (
    <main className="min-h-screen pb-24 pt-10 md:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300">
            <FileText size={14} />
            <span>{text("badge", FALLBACK_TERMS.badge)}</span>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {text("title", FALLBACK_TERMS.title)}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            {text("subtitle", FALLBACK_TERMS.subtitle)}
          </p>

          <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-gray-100 px-3 py-1.5 dark:bg-gray-800">
              <Calendar
                size={14}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <strong className="font-medium text-gray-700 dark:text-gray-200">
                {text("lastUpdatedLabel", FALLBACK_TERMS.lastUpdatedLabel)}
              </strong>
              <span>
                {text("lastUpdatedDate", FALLBACK_TERMS.lastUpdatedDate)}
              </span>
            </span>
          </div>
        </motion.section>

      
        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <div className="flex items-center gap-2">
            <Sparkles
              size={18}
              className="text-indigo-600 dark:text-indigo-400"
            />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {text("highlightsTitle", FALLBACK_TERMS.highlightsTitle)}
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {highlightCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/80 p-5 transition-colors hover:border-indigo-200 dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-indigo-500/30"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconWrapClass}`}
                      >
                        <Icon size={20} />
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${item.badgeClass}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      
        <div className="mt-6 space-y-6">
          {detailSections.map((sec) => (
            <section
              key={sec.title}
              className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
            >
              <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {sec.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {sec.description}
              </p>

              <ul className="mt-4 space-y-2.5">
                {sec.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-2xl bg-gray-50/80 px-3.5 py-2.5 text-xs leading-relaxed text-gray-700 dark:bg-gray-800/50 dark:text-gray-200 sm:text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

     
        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {text("contact.title", FALLBACK_TERMS.contact.title)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {text(
                  "contact.description",
                  FALLBACK_TERMS.contact.description
                )}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                <span>
                  {text("contact.ownerNote", FALLBACK_TERMS.contact.ownerNote)}
                </span>
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto">
              <Link
                href="/tools"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition-colors hover:bg-indigo-700"
              >
                <span>
                  {text(
                    "contact.primaryCta",
                    FALLBACK_TERMS.contact.primaryCta
                  )}
                </span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 sm:text-sm"
              >
                <MessageSquare size={15} />
                <span>
                  {text(
                    "contact.secondaryCta",
                    FALLBACK_TERMS.contact.secondaryCta
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