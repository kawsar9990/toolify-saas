"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLayout } from "@/context/LayoutContext";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const { setHideLayout } = useLayout();

  useEffect(() => {
    setHideLayout(true);
    return () => setHideLayout(false);
  }, [setHideLayout]);

  return (
    <section className="h-[calc(100vh-4rem)] w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto text-center"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="mb-4 flex justify-center"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-1 text-xs sm:text-sm font-medium rounded-full border-border bg-background"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0 text-amber-500" />
            <span>Not Found</span>
          </Badge>
        </motion.div>

   
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-3 select-none"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.35 }}
          className="space-y-2.5 mb-7"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Oops! This page doesn&apos;t Found
          </h2>
          <p className="mx-auto max-w-md text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            The address you entered isn&apos;t active or may have been relocated. Head back to the main workspace or step to the previous view.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.35 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full"
        >
          <Link
            href="/"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            <Home className="h-4 w-4 shrink-0" />
            <span>Back to Home</span>
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-input bg-background px-5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>Go Back</span>
          </button>
        </motion.div>

      
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-8 text-xs text-muted-foreground"
        >
          Developed by{" "}
          <span className="font-semibold text-foreground">Kawsar Ahmed</span>
        </motion.p>
      </motion.div>
    </section>
  );
}