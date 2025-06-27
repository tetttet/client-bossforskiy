import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOSSFORSKIY Official Website: Beauty Fashion Collection",
  description:
    "BOSSFORSKIY Luxury – Where Elegance Meets Cinematic Glamour. Discover high-end designer fashion, luxury lifestyle, and cinematic fashion collections.",
  keywords: [
    "BOSSFORSKIY",
    "Luxury Fashion",
    "High-End Clothing",
    "Designer Wear",
    "Fashion Collection",
    "Luxury Lifestyle",
    "Cinematic Glamour",
    "Elegance",
    "Fashion Show",
    "Haute Couture",
    "Fashion Week",
    "Luxury Brand",
  ],
  authors: [{ name: "BOSSFORSKIY", url: "https://bossforskiy.com" }],
  creator: "BOSSFORSKIY",
  publisher: "BOSSFORSKIY",
  metadataBase: new URL("https://bossforskiy.com"),
  openGraph: {
    title: "BOSSFORSKIY Luxury Fashion Collection",
    description:
      "Explore BOSSFORSKIY's high-end designer clothing, cinematic glamour, and timeless elegance.",
    url: "https://bossforskiy.com",
    siteName: "BOSSFORSKIY",
    images: [
      {
        url: "/logo.jpeg", // желательно использовать изображение 1200x630
        width: 1200,
        height: 630,
        alt: "BOSSFORSKIY Fashion Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOSSFORSKIY Official",
    description: "Where Elegance Meets Cinematic Glamour.",
    creator: "@bossforskiy", // если есть Twitter
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  category: "fashion",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://bossforskiy.com",
    languages: {
      en: "https://bossforskiy.com/en",
      ru: "https://bossforskiy.com/ru",
      ar: "https://bossforskiy.com/ar",
      tr: "https://bossforskiy.com/tr",
    },
  },
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <html lang={locale}>
        <body
          dir="ltr"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
