import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Writer's Heaven - Your Creative Blogging Space",
    template: "%s | Writer's Heaven"
  },
  description: "Writer's Heaven is a modern blogging platform where writers share their stories, ideas, and creativity. Join our community of passionate writers and readers.",
  keywords: ["blog", "writing", "creative writing", "articles", "stories", "writers community", "blogging platform"],
  authors: [{ name: "Writer's Heaven Team" }],
  creator: "Writer's Heaven",
  publisher: "Writer's Heaven",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://writersheaven.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Writer's Heaven - Your Creative Blogging Space",
    description: "A modern blogging platform where writers share their stories, ideas, and creativity.",
    url: "https://writersheaven.com",
    siteName: "Writer's Heaven",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Writer's Heaven - Blogging Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writer's Heaven - Your Creative Blogging Space",
    description: "A modern blogging platform where writers share their stories, ideas, and creativity.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@writersheaven", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/writers_heaven_icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}