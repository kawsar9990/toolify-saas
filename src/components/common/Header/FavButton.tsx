"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function FavButton({
  count,
  label,
}: {
  count: number;
  label: string;
}) {
  return (
    <Link
      href="/"
      aria-label={label}
      title={label}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 transition hover:scale-105 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20"
    >
      <Heart size={18} className={count > 0 ? "fill-rose-500" : ""} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}