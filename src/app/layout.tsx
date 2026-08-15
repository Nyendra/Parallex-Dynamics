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
  title: "Parallax Dynamics >> Beyond Distance.",
  description:
    "Parallax Dynamics provides advanced interstellar transportation, scientific exploration, frontier logistics, engineering, and security throughout known space.",
  keywords: [
    "Parallax Dynamics",
    "Interstellar Travel",
    "Space Exploration",
    "Frontier Logistics",
    "Sci-Fi Megacorporation",
  ],
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
      <body className="bg-parallax-dark text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
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
