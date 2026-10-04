import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import { MotionProvider } from "@/components/layout/motion-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NFT Marketplace — Discover, collect and sell digital art",
  description:
    "Collect, buy and sell art from more than 20k NFT artists on a marketplace built for creators.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${workSans.variable} ${spaceMono.variable} h-full antialiased`}>
      <body className="bg-canvas text-ink flex min-h-full flex-col">
        <a
          href="#main-content"
          className="bg-brand text-ink sr-only z-[60] rounded-[20px] px-5 py-3 font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
