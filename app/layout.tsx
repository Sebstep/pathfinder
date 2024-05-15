import "./globals.css";
import * as React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pathfinder",
  description: "An Erasmus+ project for higher education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <GoogleAnalytics gaId="G-CCR887R8FM" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="mx-auto py-14 sm:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
