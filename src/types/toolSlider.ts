export type ToolSliderId =
  | "qr-code-generator"
  | "calculator"
  | "typing-speed-test"
  | "barcode-generator";

export interface ToolSliderCardContent {
  id: ToolSliderId;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  imageAlt: string;
  imageSrc: string;
}

export interface ToolSliderTheme {
  cardBg: string;
  titleText: string;
  descText: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
  imageFrameBg: string;
  borderColor: string;
}

export interface ToolSliderCardItem extends ToolSliderCardContent {
  theme: ToolSliderTheme;
}

export interface ToolSliderFallbackData {
  sectionTitle: string;
  items: ToolSliderCardContent[];
}