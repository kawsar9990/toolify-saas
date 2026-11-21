"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa6";

import { Mail, Send, CheckCircle2 } from "lucide-react";


const quickLinks = [
  { href: "/about", key: "footer.links.about" },
  { href: "/contact", key: "footer.links.contact" },
  { href: "/faq", key: "footer.links.faq" },
  { href: "/help-center", key: "footer.links.helpCenter" },
];

const legalLinks = [
  { href: "/privacy-policy", key: "footer.links.privacy" },
  { href: "/terms-services", key: "footer.links.terms" },
  { href: "/cookie-policy", key: "footer.links.cookiePolicy" },
  { href: "/refund-policy", key: "footer.links.refundPolicy" },
];


const socialLinks = [
  {
    href: "https://www.facebook.com/programming.kawsar",
    label: "Facebook",
    icon: FaFacebookF,
    colorClass:
      "text-[#1877F2] hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white dark:text-[#4A96FF] dark:hover:bg-[#1877F2] dark:hover:text-white",
  },
  {
    href: "https://wa.me/8801602084187",
    label: "WhatsApp",
    icon: FaWhatsapp,
    colorClass:
      "text-[#25D366] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white dark:text-[#4AE082] dark:hover:bg-[#25D366] dark:hover:text-white",
  },
  {
    href: "https://t.me/Atitwed_Boys",
    label: "Telegram",
    icon: FaTelegram,
    colorClass:
      "text-[#26A5E4] hover:bg-[#26A5E4] hover:border-[#26A5E4] hover:text-white dark:text-[#56BBEF] dark:hover:bg-[#26A5E4] dark:hover:text-white",
  },
  {
    href: "https://www.instagram.com/tmr_kawsar_x",
    label: "Instagram",
    icon: FaInstagram,
    colorClass:
      "text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-[#DD2A7B] hover:text-white dark:text-[#FF6B88] dark:hover:text-white",
  },
  {
    href: "https://github.com/kawsar9990",
    label: "GitHub",
    icon: FaGithub,
    colorClass:
      "text-[#181717] hover:bg-[#181717] hover:border-[#181717] hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:border-white dark:hover:text-gray-900",
  },
  {
    href: "https://www.linkedin.com/in/kawsar-ahmed-2a466441b",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    colorClass:
      "text-[#0A66C2] hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white dark:text-[#3B8CE2] dark:hover:bg-[#0A66C2] dark:hover:text-white",
  },
];


export default function Footer() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [subscribed, setSubscribed] = useState(false);


const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!email.trim()) return;

  if (!agreed) {
      setErrorMsg("Please check the permission box first to subscribe.");
      return;
  }

  setErrorMsg("");
  setSubscribed(true);
  setEmail("");
  setAgreed(false);
};


const headingClass =
    "mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white";
const linkClass =
    "inline-flex items-center text-sm font-medium text-gray-600 transition-colors duration-200 hover:underline hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400";
  
return (
<footer className="mt-auto w-full border-t border-gray-200 bg-white text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
<div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 md:pb-12 lg:px-8">
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

<div className="space-y-4 md:col-span-2 lg:col-span-4">
<Link
  href="/"
  aria-label="Toolify Home"
  className="group inline-flex shrink-0 items-center"
>
<div className="relative h-16 w-52 shrink-0 sm:h-20 sm:w-64">
  <Image
    src="/logo/Header.png"
    alt="Toolify Logo"
    fill
    priority
    sizes="(max-width: 640px) 208px, 256px"
    className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
  />
</div>
</Link>

<p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
 {t("footer.description")}
</p>


<div className="flex flex-wrap items-center gap-2 pt-1">
  {socialLinks.map(({ href, label, icon: Icon, colorClass }) => (
    <Link
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800/80 ${colorClass}`}
    >
      <Icon className="h-4 w-4" />
    </Link>
  ))}
</div>
</div>


<div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-2 lg:col-span-4">
  
<div>
  <h3 className={headingClass}>{t("footer.exploreTitle")}</h3>
  <ul className="space-y-2.5">
    {quickLinks.map((item) => (
      <li key={item.href}>
        <Link href={item.href} className={linkClass}>
          {t(item.key)}
        </Link>
      </li>
    ))}
  </ul>
</div>


<div>
    <h3 className={headingClass}>{t("footer.policiesTitle")}</h3>
    <ul className="space-y-2.5">
      {legalLinks.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={linkClass}>
            {t(item.key)}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>


<div className="min-w-0 md:col-span-2 lg:col-span-4">
  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
    {t("footer.newsletter.title")}
  </h3>

<p className="mb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
  {t("footer.newsletter.description")}
</p>

{subscribed ? (
  <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
    <div className="flex min-w-0 items-center gap-2">
      <CheckCircle2 size={18} className="shrink-0" />
    <span className="font-medium">
        {t("footer.newsletter.successMsg")}
      </span>
    </div>
    <button
      type="button"
      onClick={() => setSubscribed(false)}
      className="shrink-0 cursor-pointer text-xs font-semibold underline hover:opacity-80"
    >
      {t("footer.newsletter.changeBtn")}
    </button>
  </div>
) : (
<form onSubmit={handleSubscribe} className="space-y-3">
  <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-1.5 transition-colors focus-within:border-indigo-500 focus-within:bg-white dark:border-gray-700 dark:bg-gray-800/80 dark:focus-within:border-indigo-400 dark:focus-within:bg-gray-800">
    <span className="shrink-0 pl-2.5 text-gray-400">
      <Mail size={17} />
    </span>

<input
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder={t("footer.newsletter.placeholder")}
  aria-label={t("footer.newsletter.ariaLabel")}
  className="h-9 w-full min-w-0 bg-transparent px-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500"
/>

  <button
    type="submit"
    disabled={!agreed}
    className={`inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-xl px-3.5 text-xs font-semibold text-white transition-all sm:text-sm ${
      agreed
        ? "cursor-pointer bg-indigo-600 shadow-sm hover:bg-indigo-700 active:scale-95"
        : "cursor-not-allowed bg-indigo-400/60 opacity-60 dark:bg-indigo-500/40"
    }`}
  >
    <Send size={14} />
    <span>{t("footer.newsletter.subscribeBtn")}</span>
  </button>
</div>

             
<label className="flex cursor-pointer select-none items-start gap-2.5">
  <input
    type="checkbox"
    checked={agreed}
    onChange={(e) => {
      setAgreed(e.target.checked);
      if (e.target.checked) {
        setErrorMsg("");
      }
    }}
    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800"
  />
  <span className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
     {t("footer.newsletter.agreePrefix")}{" "}
    <Link
      href="/privacy-policy"
      className="font-medium text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400"
    >
      {t("footer.newsletter.privacyLink")}
    </Link>
    .
  </span>
</label>

  {errorMsg && (
    <p className="text-xs font-medium text-rose-500">
      {t("footer.newsletter.permissionError")}
    </p>
  )}
</form>
)}
</div>
</div>

      
<div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row sm:text-left">
  <p>
    &copy; 2026{" "}
    <span className="font-semibold text-gray-800 dark:text-gray-200">
      Toolify
    </span>
    . {t("footer.copyright")}
</p>

<p>
 {t("footer.developedBy")}{" "}
  <span className="font-semibold text-gray-800 dark:text-gray-200">
    {i18n.language === "bn" ? "কাউসার আহমেদ" : "Kawsar Ahmed"}
  </span>
</p>
</div>
</div>
</footer>
);
}