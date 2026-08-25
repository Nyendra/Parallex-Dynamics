import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Services | Paradallax Initiative",
  description:
    "Explore Paradallax Initiative corporate divisions and services: Interstellar Travel, Colony Transportation, Deep Space Exploration, Resource Extraction, and Fleet Security.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
