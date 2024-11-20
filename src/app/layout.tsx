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
  title: "MyLingual AI",
  description: "The hardest languages to learn just got easier",
  applicationName: "MyLingual AI",
  keywords: [
    "language learning",
    "hardest languages",
    "easiest languages",
    "language app",
  ],
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
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
