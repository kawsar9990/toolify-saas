"use client";

export default function ToolKeenSliderSkeleton() {
  return (
    <div aria-label="Loading featured tools slider" className="w-full">
      <div className="flex min-h-[175px] animate-pulse items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-slate-100 p-5 shadow-md dark:border-slate-800/60 dark:bg-slate-900/80 sm:min-h-[270px] sm:gap-8 sm:p-10 lg:min-h-[290px]">
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
          <div className="max-w-xl space-y-2 sm:space-y-3">
            <div className="h-6 w-44 rounded-lg bg-slate-300/80 dark:bg-slate-700/80 sm:h-10 sm:w-72" />

            <div className="space-y-1.5 pt-1">
              <div className="h-3.5 w-48 rounded bg-slate-300/60 dark:bg-slate-800 sm:h-4 sm:w-80" />
              <div className="h-3.5 w-36 rounded bg-slate-300/50 dark:bg-slate-800/80 sm:hidden" />
            </div>
          </div>

          <div className="pt-5 sm:pt-8">
            <div className="h-8 w-28 rounded-xl bg-slate-300/80 dark:bg-slate-700/80 sm:h-10 sm:w-32" />
          </div>
        </div>

        <div className="h-28 w-28 shrink-0 rounded-2xl bg-slate-300/70 dark:bg-slate-800/90 sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-2 w-6 rounded-full bg-slate-300 dark:bg-slate-700" />
        <span className="h-2 w-2 rounded-full bg-slate-300/60 dark:bg-slate-800" />
        <span className="h-2 w-2 rounded-full bg-slate-300/60 dark:bg-slate-800" />
        <span className="h-2 w-2 rounded-full bg-slate-300/60 dark:bg-slate-800" />
      </div>
    </div>
  );
}