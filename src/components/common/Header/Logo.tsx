"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center select-none"
    >
      <Image
        src="/logo/Header.png"
        alt="Logo"
        width={180}
        height={60}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}