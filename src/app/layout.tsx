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
  metadataBase: new URL("https://ricomuh.com"),
  title: {
    default: "ricomuh - Software Engineer & Portfolio",
    template: "%s | ricomuh",
  },
  description:
    "Personal website of Rico Muhammad Nashrullah, a software engineer specializing in web and mobile development. Explore my projects, articles, and portfolio.",
  keywords: [
    "ricomuh",
    "ricomuh.com",
    "personal website",
    "software engineer",
    "web developer",
    "mobile developer",
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
  creator: "Rico Muhammad Nashrullah",
  publisher: "Rico Muhammad Nashrullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ricomuh.com",
    siteName: "ricomuh",
    title: "ricomuh - Software Engineer & Portfolio",
    description:
      "Personal website of Rico Muhammad Nashrullah, a software engineer specializing in web and mobile development.",
    images: [
      {
        url: "https://ricomuh.com/media/me.png",
        width: 208,
        height: 208,
        alt: "Rico Muhammad Nashrullah",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ricomuh - Software Engineer & Portfolio",
    description:
      "Personal website of Rico Muhammad Nashrullah, a software engineer specializing in web and mobile development.",
    creator: "@ricomuh_",
    images: ["https://ricomuh.com/media/me.png"],
  },
  icons: {
    icon: [{ url: "/icons/site.webmanifest", type: "image/webmanifest" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
