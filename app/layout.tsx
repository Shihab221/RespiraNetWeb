import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Analytics from "../components/Analytics";
import { Montserrat } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Script from "next/script"; // ← Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"], 
  variable: '--font-montserrat' 
});

export const metadata: Metadata = {
  title: "App Analytics Dashboard",
  description: "Track your app visits and downloads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V0BV9QBGGE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MKPBP09807', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        {/* Main content */}
        <main>
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}