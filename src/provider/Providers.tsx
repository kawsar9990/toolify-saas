"use client";

import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import i18n from "@/lib/i18n";
import { LayoutProvider } from "@/context/LayoutContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </I18nextProvider>
    </LayoutProvider>
  );
}