"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export type Lang = "en" | "bn";

export default function LangToggle() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language === "bn" ? "bn" : "en";

  const changeLang = (next: Lang) => {
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem("lang", next);
    } catch {}
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "bn") {
        i18n.changeLanguage(saved);
        document.documentElement.lang = saved;
      }
    } catch {}
  }, [i18n]);



  const base =
    "w-12 whitespace-nowrap py-1 text-center text-xs font-semibold rounded-full transition-colors duration-200";
  const on = "bg-indigo-600 text-white shadow";
  const off =
    "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white";


  return (
    <div
      className="flex items-center rounded-full bg-gray-100 p-1 dark:bg-gray-800"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => changeLang("en")}
        className={`cursor-pointer ${base} ${lang === "en" ? on : off}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLang("bn")}
        className={`cursor-pointer ${base} ${lang === "bn" ? on : off}`}
      >
        বাং
      </button>
    </div>
  );
}