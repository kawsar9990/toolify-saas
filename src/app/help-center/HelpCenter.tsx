"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  X,
  MessageCircle,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Wrench,
  Globe,
  CreditCard,
  AlertTriangle,
  KeyRound,
  ChevronDown,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useAppTranslation } from "@/hook/useAppTranslation";
import {
  FALLBACK_HELP_CENTER,
  HELP_TOPIC_KEYS,
  WHATSAPP_PHONE_NUMBER,
} from "@/data/helpCenter.fallback";
import type {
  HelpArticleItem,
  HelpTopicId,
} from "@/types/helpCenter.types";

const NS = "helpcenter";

function getWhatsappUrl(message: string): string {
  const cleanPhone = WHATSAPP_PHONE_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

function getArticleIcon(id: string) {
  switch (id) {
    case "account-login-access":
      return KeyRound;
    case "using-hundred-plus-tools":
      return Wrench;
    case "language-and-theme-switch":
      return Globe;
    case "free-vs-premium-plans":
      return CreditCard;
    case "request-new-tool":
      return Sparkles;
    default:
      return AlertTriangle;
  }
}

export default function HelpCenter() {
  const { text, objects, lang } = useAppTranslation(NS);
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<HelpTopicId>("all");
  const [expandedId, setExpandedId] = useState<string | null>(
    "account-login-access"
  );

  const items = objects<HelpArticleItem>("items", FALLBACK_HELP_CENTER.items);

  const filteredItems = items.filter((item) => {
    const topicMatch = selectedTopic === "all" || item.topic === selectedTopic;
    const q = query.trim().toLowerCase();
    const queryMatch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q) ||
      item.steps.some((step) => step.toLowerCase().includes(q));
    return topicMatch && queryMatch;
  });

  const getTopicLabel = (topic: HelpTopicId): string => {
    switch (topic) {
      case "all":
        return text("topics.all", FALLBACK_HELP_CENTER.topics.all);
      case "getting-started":
        return text(
          "topics.gettingStarted",
          FALLBACK_HELP_CENTER.topics.gettingStarted
        );
      case "tools-workspace":
        return text(
          "topics.toolsWorkspace",
          FALLBACK_HELP_CENTER.topics.toolsWorkspace
        );
      case "account-billing":
        return text(
          "topics.accountBilling",
          FALLBACK_HELP_CENTER.topics.accountBilling
        );
      case "troubleshooting":
        return text(
          "topics.troubleshooting",
          FALLBACK_HELP_CENTER.topics.troubleshooting
        );
    }
  };

  const defaultWhatsappHref = getWhatsappUrl(
    lang === "bn"
      ? "হ্যালো কাওসার, Toolify হেল্প সেন্টার থেকে আমি একটি বিষয়ে সাহায্য চাই।"
      : "Hi Kawsar, I need assistance from the Toolify Help Center."
  );

  
return (
    <main className="min-h-screen pb-24 pt-10 md:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {text("title", FALLBACK_HELP_CENTER.title)}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {text("subtitle", FALLBACK_HELP_CENTER.subtitle)}
              </p>
            </div>

            <a
              href={defaultWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 transition-colors hover:bg-emerald-700"
            >
              <MessageCircle size={18} />
              <span>
                {text(
                  "channels.whatsapp.ctaLabel",
                  FALLBACK_HELP_CENTER.channels.whatsapp.ctaLabel
                )}
              </span>
              <ArrowUpRight size={16} />
            </a>
          </div>


          <div className="mt-6">
            <div className="relative flex items-center">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 text-gray-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={text(
                  "searchPlaceholder",
                  FALLBACK_HELP_CENTER.searchPlaceholder
                )}
                className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50/70 pl-11 pr-11 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-800/60 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-indigo-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={text(
                    "clearSearchLabel",
                    FALLBACK_HELP_CENTER.clearSearchLabel
                  )}
                  className="absolute right-3 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-200/70 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

      
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {HELP_TOPIC_KEYS.map((topic) => {
              const isActive = selectedTopic === topic;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "border border-gray-200 bg-gray-50 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/60 dark:border-gray-800 dark:bg-gray-800/70 dark:text-gray-300 dark:hover:border-indigo-500/40"
                  }`}
                >
                  {getTopicLabel(topic)}
                </button>
              );
            })}
          </div>

        </motion.section>

 
        <section className="mt-8">
          <div className="mb-4 px-1">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {text("guidesHeading", FALLBACK_HELP_CENTER.guidesHeading)}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
              {text(
                "guidesSubheading",
                FALLBACK_HELP_CENTER.guidesSubheading
              )}
            </p>
          </div>

          {filteredItems.length > 0 ? (
            <div className="space-y-3">
              {filteredItems.map((item, idx) => {
                const Icon = getArticleIcon(item.id);
                const isOpen = expandedId === item.id;
                const waUrl = getWhatsappUrl(item.whatsappPrefill);

                return (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all dark:bg-gray-900 ${
                      isOpen
                        ? "border-indigo-300 shadow-sm dark:border-indigo-500/40"
                        : "border-gray-200/80 dark:border-gray-800"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId((prev) =>
                          prev === item.id ? null : item.id
                        )
                      }
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-gray-50/70 dark:hover:bg-gray-800/40 sm:p-5"
                    >
                      <div className="flex min-w-0 items-start gap-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                          <Icon size={20} />
                        </span>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                              #{idx + 1}
                            </span>
                            <span className="rounded-full border border-indigo-200/80 bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300">
                              {item.badge}
                            </span>
                          </div>
                          <h3 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                            {item.summary}
                          </p>
                        </div>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-indigo-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-4 dark:border-gray-800 dark:bg-gray-800/40 sm:px-6 sm:py-5">
                        <ol className="space-y-2.5">
                          {item.steps.map((step, sIdx) => (
                            <li
                              key={step}
                              className="flex items-start gap-3 text-xs leading-relaxed text-gray-700 dark:text-gray-200 sm:text-sm"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200/70 pt-4 dark:border-gray-700/70">
                          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                            <Check size={14} className="text-emerald-600" />
                            <span>Toolify Guide</span>
                          </span>

                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-2 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                          >
                            <MessageCircle size={15} />
                            <span>
                              {text(
                                "askOnWhatsappLabel",
                                FALLBACK_HELP_CENTER.askOnWhatsappLabel
                              )}
                            </span>
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                <HelpCircle size={22} />
              </div>
              <h3 className="mt-3 text-base font-bold text-gray-900 dark:text-white">
                {text(
                  "emptyState.title",
                  FALLBACK_HELP_CENTER.emptyState.title
                )}
              </h3>
              <p className="mx-auto mt-1.5 max-w-md text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                {text(
                  "emptyState.description",
                  FALLBACK_HELP_CENTER.emptyState.description
                )}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedTopic("all");
                  }}
                  className="h-10 cursor-pointer rounded-xl bg-indigo-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 sm:text-sm"
                >
                  {text(
                    "emptyState.resetButton",
                    FALLBACK_HELP_CENTER.emptyState.resetButton
                  )}
                </button>
                <a
                  href={defaultWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 sm:text-sm"
                >
                  <MessageCircle size={16} />
                  <span>
                    {text(
                      "channels.whatsapp.ctaLabel",
                      FALLBACK_HELP_CENTER.channels.whatsapp.ctaLabel
                    )}
                  </span>
                </a>
              </div>
            </div>
          )}
        </section>

     
        <section className="mt-8 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {text("channelsHeading", FALLBACK_HELP_CENTER.channelsHeading)}
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
           
            <div className="flex flex-col justify-between rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 dark:border-emerald-500/25 dark:bg-emerald-500/5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <MessageCircle size={20} />
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300">
                    {text(
                      "channels.whatsapp.badge",
                      FALLBACK_HELP_CENTER.channels.whatsapp.badge
                    )}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {text(
                    "channels.whatsapp.title",
                    FALLBACK_HELP_CENTER.channels.whatsapp.title
                  )}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                  {text(
                    "channels.whatsapp.subtitle",
                    FALLBACK_HELP_CENTER.channels.whatsapp.subtitle
                  )}
                </p>
              </div>

              <a
                href={defaultWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 sm:text-sm"
              >
                <MessageCircle size={16} />
                <span>
                  {text(
                    "channels.whatsapp.ctaLabel",
                    FALLBACK_HELP_CENTER.channels.whatsapp.ctaLabel
                  )}
                </span>
              </a>
            </div>

           
            <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-gray-800/50">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <MessageSquare size={20} />
                  </span>
                  <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300">
                    {text(
                      "channels.contact.badge",
                      FALLBACK_HELP_CENTER.channels.contact.badge
                    )}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {text(
                    "channels.contact.title",
                    FALLBACK_HELP_CENTER.channels.contact.title
                  )}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                  {text(
                    "channels.contact.subtitle",
                    FALLBACK_HELP_CENTER.channels.contact.subtitle
                  )}
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 sm:text-sm"
              >
                <span>
                  {text(
                    "channels.contact.ctaLabel",
                    FALLBACK_HELP_CENTER.channels.contact.ctaLabel
                  )}
                </span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

        
            <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-gray-800/50">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                    <HelpCircle size={20} />
                  </span>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300">
                    {text(
                      "channels.faq.badge",
                      FALLBACK_HELP_CENTER.channels.faq.badge
                    )}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {text(
                    "channels.faq.title",
                    FALLBACK_HELP_CENTER.channels.faq.title
                  )}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
                  {text(
                    "channels.faq.subtitle",
                    FALLBACK_HELP_CENTER.channels.faq.subtitle
                  )}
                </p>
              </div>

              <Link
                href="/faq"
                className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 sm:text-sm"
              >
                <span>
                  {text(
                    "channels.faq.ctaLabel",
                    FALLBACK_HELP_CENTER.channels.faq.ctaLabel
                  )}
                </span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

      
        <section className="mt-6 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {text(
                  "footerBanner.title",
                  FALLBACK_HELP_CENTER.footerBanner.title
                )}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {text(
                  "footerBanner.description",
                  FALLBACK_HELP_CENTER.footerBanner.description
                )}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                <span>
                  {text(
                    "footerBanner.ownerTag",
                    FALLBACK_HELP_CENTER.footerBanner.ownerTag
                  )}
                </span>
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto">
              <a
                href={defaultWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 transition-colors hover:bg-emerald-700"
              >
                <MessageCircle size={16} />
                <span>
                  {text(
                    "footerBanner.whatsappCta",
                    FALLBACK_HELP_CENTER.footerBanner.whatsappCta
                  )}
                </span>
              </a>

              <Link
                href="/tools"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 sm:text-sm"
              >
                <span>
                  {text(
                    "footerBanner.toolsCta",
                    FALLBACK_HELP_CENTER.footerBanner.toolsCta
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