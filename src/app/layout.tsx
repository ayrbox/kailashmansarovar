import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kailashmansarovar.co.uk'),
  title: {
    default: "Kailash Mansarovar Yatra 2026 | UK Tour Operator | Nepal Route",
    template: "%s | Kailash Mansarovar Yatra"
  },
  description: "Sacred Kailash Mansarovar Yatra 2026 from UK. Year of the Horse pilgrimage via Nepal-Tibet route. Small groups, all permits included. UK-based support. Book your spiritual journey to Mount Kailash.",
  keywords: [
    "Kailash Mansarovar Yatra 2026",
    "Mount Kailash tour UK",
    "Kailash pilgrimage from UK",
    "Nepal route Kailash",
    "Kailash tour operator UK",
    "Lake Mansarovar pilgrimage",
    "Mount Kailash Kora",
    "Kailash Parikrama",
    "Tibet pilgrimage UK",
    "Kailash yatra Nepal route"
  ],
  authors: [{ name: "Kailash Mansarovar UK" }],
  creator: "Kailash Mansarovar UK",
  publisher: "Kailash Mansarovar UK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://kailashmansarovar.co.uk",
    siteName: "Kailash Mansarovar Yatra",
    title: "Kailash Mansarovar Yatra 2026 | UK Tour Operator | Nepal Route",
    description: "Sacred Kailash Mansarovar Yatra 2026 from UK. Year of the Horse pilgrimage via Nepal-Tibet route. Small groups, all permits included.",
    images: [
      {
        url: "/kailash-mountain.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Kailash - Sacred Pilgrimage Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kailash Mansarovar Yatra 2026 | UK Tour Operator",
    description: "Sacred pilgrimage to Mount Kailash via Nepal-Tibet route. Year of the Horse 2026. Book with UK-based operator.",
    images: ["/kailash-mountain.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {children}
      </body>
    </html>
  );
}
