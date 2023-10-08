import "./globals.css";
import * as React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPT-3 Playground",
  description: "A playground for GPT-3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
