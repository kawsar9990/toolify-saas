"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  MessageSquare,
  Calendar,
  Info,
} from "lucide-react";
import { useAppTranslation } from "@/hook/useAppTranslation";
import { FALLBACK_REFUND_POLICY } from "@/data/refundPolicy.fallback";
import type {
  RefundPlanCardItem,
  RefundRuleItem,
} from "@/types/refundPolicy.types";

const NS = "refundpolicy";

export default function RefundPolicy() {
  const { text, objects } = useAppTranslation(NS);

  const eligibilityCards: RefundPlanCardItem[] = [
    {
      id: "eligible",
      icon: CheckCircle2,
      title: text(
        "cards.eligible.title",
        FALLBACK_REFUND_POLICY.cards.eligible.title
      ),
      badge: text(
        "cards.eligible.badge",
        FALLBACK_REFUND_POLICY.cards.eligible.badge
      ),
      description: text(
        "cards.eligible.description",
        FALLBACK_REFUND_POLICY.cards.eligible.description
      ),
      badgeClass:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
      iconWrapClass:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
      accentBorderClass: "border-t-4 border-t-emerald-500",
    },
    {
      id: "non-refundable",
      icon: XCircle,
      title: text(
        "cards.nonRefundable.title",
        FALLBACK_REFUND_POLICY.cards.nonRefundable.title
      ),
      badge: text(
        "cards.nonRefundable.badge",
        FALLBACK_REFUND_POLICY.cards.nonRefundable.badge
      ),
      description: text(
        "cards.nonRefundable.description",
        FALLBACK_REFUND_POLICY.cards.nonRefundable.description
      ),
      badgeClass:
        "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/30",
      iconWrapClass:
        "bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400",
      accentBorderClass: "border-t-4 border-t-rose-500",
    },
    {
      id: "processing",
      icon: Clock,
      title: text(
        "cards.processing.title",
        FALLBACK_REFUND_POLICY.cards.processing.title
      ),
      badge: text(
        "cards.processing.badge",
        FALLBACK_REFUND_POLICY.cards.processing.badge
      ),
      description: text(
        "cards.processing.description",
        FALLBACK_REFUND_POLICY.cards.processing.description
      ),
      badgeClass:
        "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
      iconWrapClass:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400",
      accentBorderClass: "border-t-4 border-t-indigo-500",
    },
  ];

  const steps = objects<RefundRuleItem>("steps", FALLBACK_REFUND_POLICY.steps);

  return (
    <main className="min-h-screen pb-24 pt-10 md:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300">
                <RotateCcw size={14} />
                <span>{text("badge", FALLBACK_REFUND_POLICY.badge)}</span>
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {text("title", FALLBACK_REFUND_POLICY.title)}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {text("subtitle", FALLBACK_REFUND_POLICY.subtitle)}
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-500/20 dark:bg-indigo-500/10 lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
                <Info size={15} />
                <span>
                  {text(
                    "highlightBoxTitle",
                    FALLBACK_REFUND_POLICY.highlightBoxTitle
                  )}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-700 dark:text-gray-200 sm:text-sm">
                {text(
                  "highlightBoxDesc",
                  FALLBACK_REFUND_POLICY.highlightBoxDesc
                )}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-gray-100 px-3 py-1.5 dark:bg-gray-800">
              <Calendar
                size={14}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <strong className="font-medium text-gray-700 dark:text-gray-200">
                {text(
                  "lastUpdatedLabel",
                  FALLBACK_REFUND_POLICY.lastUpdatedLabel
                )}
              </strong>
              <span>
                {text(
                  "lastUpdatedDate",
                  FALLBACK_REFUND_POLICY.lastUpdatedDate
                )}
              </span>
            </span>
          </div>
        </motion.section>


        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {text("cardsTitle", FALLBACK_REFUND_POLICY.cardsTitle)}
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {eligibilityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className={`flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-gray-800/50 ${card.accentBorderClass}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconWrapClass}`}
                      >
                        <Icon size={20} />
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${card.badgeClass}`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {text("timelineTitle", FALLBACK_REFUND_POLICY.timelineTitle)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {text(
              "timelineSubtitle",
              FALLBACK_REFUND_POLICY.timelineSubtitle
            )}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-gray-800/50"
              >
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-xl bg-indigo-600 px-2.5 text-xs font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

    
        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {text("contact.title", FALLBACK_REFUND_POLICY.contact.title)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {text(
                  "contact.description",
                  FALLBACK_REFUND_POLICY.contact.description
                )}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                <span>
                  {text(
                    "contact.ownerNote",
                    FALLBACK_REFUND_POLICY.contact.ownerNote
                  )}
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
                    FALLBACK_REFUND_POLICY.contact.primaryCta
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
                    FALLBACK_REFUND_POLICY.contact.secondaryCta
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