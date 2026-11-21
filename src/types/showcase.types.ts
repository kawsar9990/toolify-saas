export interface PreviewToolItem {
  id: string;
  badge: string;
  label: string;
}

export interface MobileTabItem {
  id: string;
  label: string;
  active?: boolean;
}

export interface DesktopMobileShowcaseData {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  searchPlaceholder: string;
  tools: PreviewToolItem[];
  tabs: MobileTabItem[];
}

export interface PromoCtaBannerData {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ShowcaseContent {
  showcase: DesktopMobileShowcaseData;
  promoBanner: PromoCtaBannerData;
}