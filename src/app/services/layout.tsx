import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Services | Parallax Dynamics",
  description:
    "Explore Parallax Dynamics corporate divisions and services: Interstellar Travel, Colony Transportation, Deep Space Exploration, Resource Extraction, and Fleet Security.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
