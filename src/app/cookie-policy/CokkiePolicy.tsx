"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  SlidersHorizontal,
  BarChart3,
  Settings2,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useAppTranslation } from "@/hook/useAppTranslation";
import { FALLBACK_COOKIE_POLICY } from "@/data/cookiePolicy.fallback";
import type { CookieTypeCardItem } from "@/types/cookiePolicy.types";

const NS = "cookiepolicy";

export default function CookiePolicyPage() {
  const { text } = useAppTranslation(NS);

  const cookieTypes: CookieTypeCardItem[] = [
    {
      id: "essential",
      icon: ShieldCheck,
      title: text(
        "sections.typesOfCookies.essential.title",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.essential.title
      ),
      badge: text(
        "sections.typesOfCookies.essential.badge",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.essential.badge
      ),
      description: text(
        "sections.typesOfCookies.essential.description",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.essential.description
      ),
      badgeClass:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
      iconWrapClass:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    },
    {
      id: "preference",
      icon: SlidersHorizontal,
      title: text(
        "sections.typesOfCookies.preference.title",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.preference.title
      ),
      badge: text(
        "sections.typesOfCookies.preference.badge",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.preference.badge
      ),
      description: text(
        "sections.typesOfCookies.preference.description",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.preference.description
      ),
      badgeClass:
        "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
      iconWrapClass:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: text(
        "sections.typesOfCookies.analytics.title",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.analytics.title
      ),
      badge: text(
        "sections.typesOfCookies.analytics.badge",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.analytics.badge
      ),
      description: text(
        "sections.typesOfCookies.analytics.description",
        FALLBACK_COOKIE_POLICY.sections.typesOfCookies.analytics.description
      ),
      badgeClass:
        "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
      iconWrapClass:
        "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    },
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
            <Cookie size={14} />
            <span>{text("badge", FALLBACK_COOKIE_POLICY.badge)}</span>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {text("title", FALLBACK_COOKIE_POLICY.title)}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            {text("subtitle", FALLBACK_COOKIE_POLICY.subtitle)}
          </p>

          <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-gray-100 px-3 py-1.5 dark:bg-gray-800">
              <Calendar
                size={14}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <strong className="font-medium text-gray-700 dark:text-gray-200">
                {text(
                  "lastUpdatedLabel",
                  FALLBACK_COOKIE_POLICY.lastUpdatedLabel
                )}
              </strong>
              <span>
                {text(
                  "lastUpdatedDate",
                  FALLBACK_COOKIE_POLICY.lastUpdatedDate
                )}
              </span>
            </span>
          </div>
        </motion.section>

        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {text(
              "sections.whatAreCookies.title",
              FALLBACK_COOKIE_POLICY.sections.whatAreCookies.title
            )}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            {text(
              "sections.whatAreCookies.description",
              FALLBACK_COOKIE_POLICY.sections.whatAreCookies.description
            )}
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {text(
              "sections.typesOfCookies.title",
              FALLBACK_COOKIE_POLICY.sections.typesOfCookies.title
            )}
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {cookieTypes.map((item) => {
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

        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {text(
              "sections.managingCookies.title",
              FALLBACK_COOKIE_POLICY.sections.managingCookies.title
            )}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            {text(
              "sections.managingCookies.description",
              FALLBACK_COOKIE_POLICY.sections.managingCookies.description
            )}
          </p>

          <div className="mt-5 flex items-start gap-3.5 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-500/20 dark:bg-indigo-500/10">
            <Settings2
              size={20}
              className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400"
            />
            <div className="text-xs leading-relaxed text-gray-700 dark:text-gray-200 sm:text-sm">
              <p className="font-semibold">
                {text(
                  "sections.managingCookies.tipTitle",
                  FALLBACK_COOKIE_POLICY.sections.managingCookies.tipTitle
                )}
              </p>
              <p className="mt-0.5 text-gray-600 dark:text-gray-300">
                {text(
                  "sections.managingCookies.tipText",
                  FALLBACK_COOKIE_POLICY.sections.managingCookies.tipText
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 flex flex-col justify-between gap-4 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-xl">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {text(
                "sections.contact.title",
                FALLBACK_COOKIE_POLICY.sections.contact.title
              )}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {text(
                "sections.contact.description",
                FALLBACK_COOKIE_POLICY.sections.contact.description
              )}
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition-colors hover:bg-indigo-700"
          >
            <span>
              {text(
                "sections.contact.cta",
                FALLBACK_COOKIE_POLICY.sections.contact.cta
              )}
            </span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}