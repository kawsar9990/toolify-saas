"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  LayoutGrid,
  LogIn,
  UserPlus,
  Heart,
  Crown,
  User,
  Menu,
  X,
} from "lucide-react";
import Logo from "./Logo";
import FavButton from "./FavButton";
import MembershipButton from "./MembershipButton";
import LangToggle from "@/components/language/LangToggle";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [favCount] = useState(0);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);





  const navLinkClass = (href: string) =>
    `inline-flex h-9 w-28 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 text-sm font-semibold transition-colors duration-200 ${
      pathname === href
        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400"
        : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
    }`;



  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-transparent bg-white/85 shadow-lg shadow-black/5 backdrop-blur-md dark:bg-gray-900/85 dark:shadow-black/40"
            : "border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-6 xl:px-8">
          <Logo />

          <nav className="hidden items-center gap-1.5 lg:flex">
            <Link href="/" className={navLinkClass("/")}>
              <span className="truncate">{t("nav.home")}</span>
            </Link>
            <Link href="/tools" className={navLinkClass("/tools")}>
              <span className="truncate">{t("nav.tools")}</span>
            </Link>
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <MembershipButton label={t("nav.membership")} />
            <FavButton count={favCount} label={t("nav.favourites")} />
            <LangToggle />
            <ThemeToggle />

            <span className="mx-0.5 h-6 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />

            <Link
              href="/login"
              className="inline-flex h-9 w-24 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-gray-300 px-3 text-xs font-semibold text-gray-800 transition-colors duration-200 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-600 dark:text-gray-100 dark:hover:border-indigo-400 dark:hover:text-indigo-400 xl:h-10 xl:w-28 xl:text-sm"
            >
              <span className="truncate">{t("nav.login")}</span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 w-24 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-indigo-600 px-3 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition-colors duration-200 hover:bg-indigo-700 xl:h-10 xl:w-28 xl:text-sm"
            >
              <span className="truncate">{t("nav.signup")}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="hidden items-center gap-2 sm:flex">
              <FavButton count={favCount} label={t("nav.favourites")} />
              <ThemeToggle />
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={t("nav.menu")}
              aria-expanded={open}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-700 transition active:scale-95 dark:bg-gray-800 dark:text-gray-200"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              aria-label={t("nav.profile")}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition active:scale-95"
            >
              <User size={18} />
            </Link>
          </div>
        </div>
      </header>



<AnimatePresence>
  {open && (
    <motion.div
      key="mobile-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={() => setOpen(false)}
      className="fixed inset-x-0 top-16 bottom-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
      aria-hidden="true"
    />
  )}
</AnimatePresence>



<AnimatePresence>
{open && (
<motion.div
  key="mobile-menu"
  initial={{ opacity: 0, y: "-100%" }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: "-100%" }}
  transition={{
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 lg:hidden"
>
<div className="mx-auto max-w-2xl space-y-4 px-4 py-4 pb-24 sm:px-6 md:pb-6">
  <div className="hidden grid-cols-2 gap-2 md:grid">
    <Link
      href="/"
      onClick={() => setOpen(false)}
      className="flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gray-50 px-3 text-sm font-medium leading-none text-gray-800 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-gray-800/60 dark:text-gray-200"
    >
      <Home size={16} className="shrink-0" />
      <span className="truncate">{t("nav.home")}</span>
    </Link>

  <Link
    href="/tools"
    onClick={() => setOpen(false)}
    className="flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gray-50 px-3 text-sm font-medium leading-none text-gray-800 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-gray-800/60 dark:text-gray-200"
  >
    <LayoutGrid size={16} className="shrink-0" />
    <span className="truncate">{t("nav.tools")}</span>
  </Link>
  </div>

<Link
  href="/membership"
  onClick={() => setOpen(false)}
  aria-label={t("nav.membership")}
  className="group flex min-h-[64px] w-full items-center justify-center gap-3 rounded-2xl border border-amber-200/70 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100/70 px-4 py-2 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md active:scale-[0.99] dark:border-amber-500/20 dark:from-amber-500/10 dark:via-yellow-500/10 dark:to-amber-500/15 sm:min-h-[72px]"
>
  <span className="truncate text-base font-bold text-gray-800 transition-colors duration-300 group-hover:text-amber-700 dark:text-amber-100 dark:group-hover:text-amber-300 sm:text-lg">
    {t("nav.membership")}
  </span>

  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 text-black shadow-[0_3px_10px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-11 sm:w-11">
    <Crown
      size={20}
      strokeWidth={2.4}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </span>
</Link>


<div className="grid grid-cols-2 gap-3">
  <Link
    href="/login"
    onClick={() => setOpen(false)}
    className="flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-gray-300 px-3 text-sm font-semibold text-gray-800 transition-colors dark:border-gray-600 dark:text-gray-100"
  >
    <LogIn size={16} className="shrink-0" />
    <span className="truncate">{t("nav.login")}</span>
  </Link>
  <Link
    href="/signup"
    onClick={() => setOpen(false)}
    className="flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-indigo-600 px-3 text-sm font-semibold text-white transition-colors"
  >
    <UserPlus size={16} className="shrink-0" />
    <span className="truncate">{t("nav.signup")}</span>
  </Link>
</div>

<div className="flex h-12 items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 dark:bg-gray-800/60">
  <span className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">
    {t("ui.language")}
  </span>
  <LangToggle />
</div>

<div className="flex h-12 items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 dark:bg-gray-800/60">
  <span className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">
    {t("ui.theme")}
    {mounted
      ? resolvedTheme === "dark"
        ? t("ui.dark")
        : t("ui.light")
      : ""}
  </span>
  <ThemeToggle />
</div>
</div>
</motion.div>
)}
</AnimatePresence>


      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95 md:hidden">
        <ul className="grid grid-cols-4">
          {(
            [
              { href: "/", icon: Home, label: t("nav.home") },
              { href: "/tools", icon: LayoutGrid, label: t("nav.tools") },
              { href: "/favourites", icon: Heart, label: t("nav.favourites") },
              { href: "/login", icon: LogIn, label: t("nav.login") },
            ] as const
          ).map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex h-16 flex-col items-center justify-center gap-1 px-1 text-[11px] font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <span
                    className={`flex h-7 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-indigo-100 dark:bg-indigo-500/20" : ""
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="max-w-full truncate">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}