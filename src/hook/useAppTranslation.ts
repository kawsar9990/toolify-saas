"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type AppLang = "en" | "bn";

export function useAppTranslation(ns: string = "common") {
  const { t, i18n } = useTranslation(ns);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const ready = isHydrated && i18n.isInitialized;
  const lang: AppLang = ready && i18n.language === "bn" ? "bn" : "en";

  const text = (key: string, fallback: string): string => {
    if (!ready) return fallback;
    const val = t(key, { ns });
    return typeof val === "string" && val.trim() && val !== key
      ? val
      : fallback;
  };

  const objects = <T,>(key: string, fallback: T[]): T[] => {
    if (!ready) return fallback;
    const val = t(key, { ns, returnObjects: true });
    return Array.isArray(val) && val.length > 0 ? (val as T[]) : fallback;
  };

  return { text, objects, lang, ready, i18n };
}