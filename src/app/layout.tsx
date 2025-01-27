import { ReactNode } from "react";
import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DISSWAPI",
  description: "Display Star Wars API",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
          <Header />

          <main>
            <div className="container gap-4 flex flex-col mx-auto py-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
