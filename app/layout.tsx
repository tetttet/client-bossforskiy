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
  title: "Bossforskiy Luxury",
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
  ],
  authors: [{ name: "BOSSFORSKIY" }],
  creator: "BOSSFORSKIY",
  publisher: "BOSSFORSKIY",
  description: "BOSSFORSKIY Luxury - Where Elegance Meets Cinematic Glamour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
