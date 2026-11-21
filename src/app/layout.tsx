import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "../style/globals.css";
import { Providers } from "@/provider/Providers";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toolify | Fast & Smart Online Tools Workspace",
  description:
    "Unlock a premium workspace of advanced online utilities, smart calculators, and precision tools designed for effortless speed across web and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-background font-sans text-foreground transition-colors duration-200"
      >
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}