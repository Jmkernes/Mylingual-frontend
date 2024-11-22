import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { PHProvider } from "./providers";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mylingual.ai"),
  title: { default: "MyLingual AI", template: "%s | MyLingual AI" },
  description:
    "Turn the hardest languages into the easiest languages to learn.",
  applicationName: "MyLingual AI",
  authors: [{ name: "MyLingual AI Team", url: "https://mylingual.ai" }],
  generator: "Next.js",
  keywords: [
    "hardest languages to learn",
    "easiest languages to learn",
    "language learning",
    "AI language learning",
    "learn languages fast",
    "language mastery with AI",
    "MyLingual AI",
    "language education",
    "multilingual learning",
    "language skills improvement",
  ],
  referrer: "origin",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1",
  creator: "MyLingual AI Team",
  publisher: "MyLingual AI",
  robots: "index, follow",
  alternates: {
    canonical: "https://mylingual.ai",
    // hreflang: {
    //   "en-US": "https://mylingual.ai/en-US",
    // },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://mylingual.ai",
    title: "MyLingual AI",
    description:
      "Turn the hardest languages into the easiest languages to learn.",
    siteName: "MyLingual AI",
    images: [
      {
        url: "/og-graph.png", // Replace with actual OpenGraph image URL
        alt: "MyLingual AI Logo",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mylingualai",
    creator: "@mylingualai",
    title: "MyLingual AI",
    description:
      "Turn the hardest languages into the easiest languages to learn.",
    images: ["/twitter-image.png"], // Replace with actual Twitter image URL
  },
  // facebook: {
  //   appId: "1234567890", // Replace with your actual Facebook App ID
  // },
  verification: {
    google: "t2tQQUButb_foDj6PLbMMZ3UYK8P5hFFWFM_ULaMXl0", // Replace with your Google verification code
    yandex: "b5fcbd9a3772bf05", // Replace with Yandex verification code if applicable
  },
  appleWebApp: {
    capable: true,
    title: "MyLingual AI",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  // itunes: {
  //   app: {
  //     id: "1234567890", // Replace with your app's ID if applicable
  //     affiliateData: "affiliate123", // Optional
  //     appArguments: "ref=mylingualai", // Optional
  //   },
  // },
  // archives: ["https://mylingual.ai/archives"],
  // assets: "https://mylingual.ai/assets",
  // bookmarks: "https://mylingual.ai/bookmarks",
  category: "AI-Powered Language Learning",
  classification: "Language Learning and Education",
  other: {
    "x-custom-meta": "MyLingualAI",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[hsl(0,0%,3%)] text-tiktok-white">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <PHProvider>
        <body className={openSans.className}>
          <PostHogPageView />
          <Analytics />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
