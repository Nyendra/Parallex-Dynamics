import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Services | Paradallax Initiative",
  description:
    "Explore Paradallax Initiative corporate divisions and services: Interstellar Travel, Colony Transportation, Deep Space Exploration, Resource Extraction, and Fleet Security.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Paradallax Initiative",
    title: "Core Services | Paradallax Initiative",
    description:
      "Explore Paradallax Initiative corporate divisions and services: Interstellar Travel, Colony Transportation, Deep Space Exploration, Resource Extraction, and Fleet Security.",
    images: [
      {
        url: "/media/services/interstellar-travel.jpg",
        width: 1200,
        height: 630,
        alt: "Paradallax Initiative Core Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Services | Paradallax Initiative",
    description:
      "Explore Paradallax Initiative corporate divisions and services: Interstellar Travel, Colony Transportation, Deep Space Exploration, Resource Extraction, and Fleet Security.",
    images: ["/media/services/interstellar-travel.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
