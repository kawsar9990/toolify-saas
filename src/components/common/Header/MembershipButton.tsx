"use client";

import Link from "next/link";
import { Crown } from "lucide-react";

export default function MembershipButton({
  label = "Membership",
  full = false,
  onClick,
}: {
  label?: string;
  full?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/membership"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 text-gray-950 shadow-md shadow-amber-500/30 ring-1 ring-amber-200/80 transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/40 active:scale-95 dark:ring-amber-300/30 ${
        full ? "h-11 w-full" : "h-9 w-9"
      }`}
    >
      <Crown
        size={full ? 20 : 18}
        strokeWidth={2.3}
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-12"
      />
    </Link>
  );
}