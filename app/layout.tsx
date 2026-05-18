import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Writers' Haven — A Quiet Place for Loud Ideas",
    template: "%s · Writers' Haven",
  },
  description:
    "Writers' Haven is a publishing platform for essays, reporting, and short fiction. No engagement loops. No infinite scroll. Just writing.",
  keywords: [
    "blog",
    "writing",
    "essays",
    "reporting",
    "fiction",
    "publishing",
  ],
  authors: [{ name: "Writers' Haven" }],
  creator: "Writers' Haven",
  publisher: "Writers' Haven",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://writersheaven.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Writers' Haven — A Quiet Place for Loud Ideas",
    description:
      "A publishing platform for essays, reporting, and short fiction.",
    url: "https://writersheaven.com",
    siteName: "Writers' Haven",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Writers' Haven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writers' Haven — A Quiet Place for Loud Ideas",
    description:
      "A publishing platform for essays, reporting, and short fiction.",
    images: ["/twitter-image.jpg"],
    creator: "@writersheaven",
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
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-ink text-paper antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
