import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitWise - Aplikacja do zarządzania fitnessem",
  description: "Aplikacja do zarządzania obiektami sportowymi dla właścicieli i trenerów",
};

import Navbar from './Dashboard/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#F5F5F5] ${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="pt-20">
          <div className="max-w-[1280px] mx-auto px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}