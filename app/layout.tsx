import "./globals.css";
import * as React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pathfinder",
  description: "An Erasmus+ project for higher education",
};

// TODO: The content currently scrolls behind the footer.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
