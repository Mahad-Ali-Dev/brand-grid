'use client';

import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvancedLoader from "@/components/AdvancedLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading simulation - aap ye time adjust kar sakte hain
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Show loader during loading state
  if (isLoading) {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <AdvancedLoader />
        </body>
      </html>
    );
  }

  // Show normal layout after loading
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}