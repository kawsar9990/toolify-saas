"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowUpRight, ImagePlus } from "lucide-react";
import { useAppTranslation } from "@/hook/useAppTranslation";
import {
  FALLBACK_TOOL_SLIDER,
  TOOL_SLIDER_THEMES,
} from "@/data/toolSlider.fallback";
import type {
  ToolSliderCardContent,
  ToolSliderCardItem,
} from "@/types/toolSlider";
import ToolKeenSliderSkeleton from "@/components/skeleton/ToolKeenSliderSkeleton";


const NS = "toolslider";
const AUTOPLAY_DELAY = 2500;

export default function ToolKeenSlider() {
  const { text, objects } = useAppTranslation(NS);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  void text("sectionTitle", FALLBACK_TOOL_SLIDER.sectionTitle);

  const rawItems = objects<ToolSliderCardContent>(
    "items",
    FALLBACK_TOOL_SLIDER.items
  );

  const slides: ToolSliderCardItem[] = rawItems.map((item, idx) => {
    const fallbackItem =
      FALLBACK_TOOL_SLIDER.items[idx] ?? FALLBACK_TOOL_SLIDER.items[0];
    const id = item.id ?? fallbackItem.id;

    return {
      id,
      title: item.title ?? fallbackItem.title,
      subtitle: item.subtitle ?? fallbackItem.subtitle,
      ctaLabel: item.ctaLabel ?? fallbackItem.ctaLabel,
      href: item.href ?? fallbackItem.href,
      imageAlt: item.imageAlt ?? fallbackItem.imageAlt,
      imageSrc: item.imageSrc ?? fallbackItem.imageSrc,
      theme: TOOL_SLIDER_THEMES[id],
    };
  });

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      defaultAnimation: {
        duration: 600,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    []
  );

  useEffect(() => {
    if (!loaded || isHovered || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      instanceRef.current?.next();
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [loaded, isHovered, slides.length, instanceRef]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, []);




  
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

    {(!loaded || showSkeleton) && <ToolKeenSliderSkeleton />}

        <div
          ref={sliderRef}
          className={`keen-slider overflow-hidden rounded-3xl transition-opacity duration-300 ${
            !loaded || showSkeleton
              ? "pointer-events-none h-0 overflow-hidden opacity-0"
              : "h-auto opacity-100"
          }`}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="keen-slider__slide">
              <div
                className={`relative flex min-h-[175px] items-center justify-between overflow-hidden rounded-3xl border p-5 shadow-md sm:min-h-[270px] sm:gap-8 sm:p-10 lg:min-h-[290px] ${slide.theme.cardBg} ${slide.theme.borderColor}`}
              >
              
                <div className="z-10 flex min-w-0 flex-1 flex-col justify-around self-stretch">
                  <div className="max-w-xl space-y-1.5 sm:space-y-3">
                    <h3
                      className={`line-clamp-1 text-xl font-bold tracking-tight sm:text-4xl ${slide.theme.titleText}`}
                    >
                      {slide.title}
                    </h3>
                    <p
                      className={`line-clamp-2 text-xs leading-relaxed sm:line-clamp-1 sm:text-base ${slide.theme.descText}`}
                    >
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="pt-5 sm:pt-8">
                    <Link
                      href={slide.href}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition sm:px-5 sm:py-2.5 sm:text-sm ${slide.theme.buttonBg} ${slide.theme.buttonHoverBg} ${slide.theme.buttonText}`}
                    >
                      <span>{slide.ctaLabel}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

              
                <div className="z-10 flex h-28 w-28 shrink-0 items-center justify-center sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                  {slide.imageSrc ? (
                    <img
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      className="h-full w-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/15 p-4 text-white/90">
                      <ImagePlus className="h-7 w-7 sm:h-9 sm:w-9" />
                      <span className="text-[11px] font-medium tracking-wider">
                        IMG
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      {loaded && !showSkeleton && slides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              aria-label={`Go to ${slide.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-6 bg-slate-700 dark:bg-slate-200"
                  : "w-2 bg-slate-400/50 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}