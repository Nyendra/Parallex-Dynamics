import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarfieldCanvas } from "@/components/StarfieldCanvas";
import { LowercaseRedirect } from "@/components/LowercaseRedirect";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paradallax.space"),
  title: "Paradallax Initiative >> Beyond Distance.",
  description:
    "Paradallax Initiative provides advanced interstellar transportation, scientific exploration, frontier logistics, engineering, and security throughout known space.",
  keywords: [
    "Paradallax Initiative",
    "Interstellar Travel",
    "Space Exploration",
    "Frontier Logistics",
    "Sci-Fi Megacorporation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paradallax.space",
    siteName: "Paradallax Initiative",
    title: "Paradallax Initiative >> Beyond Distance.",
    description:
      "Paradallax Initiative provides advanced interstellar transportation, scientific exploration, frontier logistics, engineering, and security throughout known space.",
    images: [
      {
        url: "/media/hero/hero-parallax-transit.jpg",
        width: 1200,
        height: 630,
        alt: "Paradallax Initiative Interstellar Transit Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradallax Initiative >> Beyond Distance.",
    description:
      "Paradallax Initiative provides advanced interstellar transportation, scientific exploration, frontier logistics, engineering, and security throughout known space.",
    images: ["/media/hero/hero-parallax-transit.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paradallax-dark text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
        <Suspense fallback={null}>
          <LowercaseRedirect />
        </Suspense>

        {/* Animated canvas starfield */}
        <StarfieldCanvas />

        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow relative z-10 pt-24 md:pt-28">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
