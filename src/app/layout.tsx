import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ricomuh",
    template: "%s | ricomuh",
  },
  description: "just a personal website of a software engineer",
  keywords: [
    "ricomuh",
    "ricomuh.com",
    "personal website",
    "software engineer",
    "blog",
    "articles",
    "portfolio",
    "Rico Muhammad",
    "Rico Muhammad Nashrullah",
    "Rico Nashrullah",
    "Rico",
    "@ricomuh",
    "@ricomuh_",
    "Leolit Games",
    "Leolit",
    "Leolit Games Indonesia",
  ],
  authors: [
    {
      name: "Rico Muhammad Nashrullah",
      url: "https://ricomuh.com",
    },
  ],
  openGraph: {
    title: "ricomuh",
    description: "just a personal website of a software engineer",
    url: "https://ricomuh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
