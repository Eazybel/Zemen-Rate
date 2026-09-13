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
  title: "Zemen Rate | Real-Time Currency Conversion & Exchange Utility",
  description:
    "Fast, lightweight multi-currency exchange rate calculator and converter built for accurate daily valuations.",
  keywords: [
    "currency converter",
    "exchange rates",
    "zemen rate",
    "forex utility",
    "ETB converter",
  ],
  authors: [{ name: "Ezedin Kamil Yassin" }],
  openGraph: {
    title: "Zemen Rate | Currency Exchange Utility",
    description: "Real-time conversions crafted for quick checks and multi-currency tracking.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zemen Rate | Currency Exchange Utility",
    description: "Real-time conversions crafted for quick checks and multi-currency tracking.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
