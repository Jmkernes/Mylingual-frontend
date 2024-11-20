import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyLingual AI",
  description: "The hardest languages to learn just got easier",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-light-100 dark:bg-dark-400 text-tiktok-black dark:text-tiktok-white"
    >
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
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
