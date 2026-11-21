import type {
  ToolSliderFallbackData,
  ToolSliderId,
  ToolSliderTheme,
} from "@/types/toolSlider";

export const FALLBACK_TOOL_SLIDER: ToolSliderFallbackData = {
  sectionTitle: "Featured Tools",
  items: [
    {
      id: "qr-code-generator",
      title: "QR Code Generator",
      subtitle: "Create custom QR codes fast.",
      ctaLabel: "Open Tool",
      href: "/tools/qr-code-generator",
      imageAlt: "QR Code Generator illustration",
      imageSrc: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1795261082/Gemini_Generated_Image_t9b1mot9b1mot9b1-removebg-preview_tnkg2u.png",
    },
    {
      id: "calculator",
      title: "Calculator",
      subtitle: "Smart math & quick calculations.",
      ctaLabel: "Open Tool",
      href: "/tools/calculator",
      imageAlt: "Calculator illustration",
      imageSrc: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1795252498/images-removebg-preview_oyj4yf.png",
    },
    {
      id: "typing-speed-test",
      title: "Typing Speed Test",
      subtitle: "Check your WPM & accuracy.",
      ctaLabel: "Start Test",
      href: "/tools/typing-speed-test",
      imageAlt: "Typing Speed Test illustration",
      imageSrc: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1795261227/Gemini_Generated_Image_t10elnt10elnt10e-removebg-preview_vysllj.png",
    },
    {
      id: "barcode-generator",
      title: "Barcode Generator",
      subtitle: "Generate clean barcodes in seconds.",
      ctaLabel: "Open Tool",
      href: "/tools/barcode-generator",
      imageAlt: "Barcode Generator illustration",
      imageSrc: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1795261377/Gemini_Generated_Image_490t2a490t2a490t-removebg-preview_sbgxe5.png",
    },
  ],
};

export const TOOL_SLIDER_THEMES: Record<ToolSliderId, ToolSliderTheme> = {
  "qr-code-generator": {
    cardBg:
      "bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-800",
    titleText: "text-white",
    descText: "text-emerald-50/90",
    buttonBg: "bg-white",
    buttonHoverBg: "hover:bg-emerald-50",
    buttonText: "text-emerald-700",
    imageFrameBg: "bg-white/10",
    borderColor: "border-emerald-400/30",
  },
  calculator: {
    cardBg:
      "bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-800",
    titleText: "text-white",
    descText: "text-amber-50/90",
    buttonBg: "bg-white",
    buttonHoverBg: "hover:bg-amber-50",
    buttonText: "text-orange-700",
    imageFrameBg: "bg-white/10",
    borderColor: "border-amber-400/30",
  },
  "typing-speed-test": {
    cardBg:
      "bg-gradient-to-br from-violet-500 to-indigo-600 dark:from-violet-600 dark:to-indigo-800",
    titleText: "text-white",
    descText: "text-violet-50/90",
    buttonBg: "bg-white",
    buttonHoverBg: "hover:bg-violet-50",
    buttonText: "text-indigo-700",
    imageFrameBg: "bg-white/10",
    borderColor: "border-violet-400/30",
  },
  "barcode-generator": {
    cardBg:
      "bg-gradient-to-br from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-800",
    titleText: "text-white",
    descText: "text-rose-50/90",
    buttonBg: "bg-white",
    buttonHoverBg: "hover:bg-rose-50",
    buttonText: "text-rose-700",
    imageFrameBg: "bg-white/10",
    borderColor: "border-rose-400/30",
  },
};