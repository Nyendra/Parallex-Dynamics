import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Catalogue | Paradallax Initiative",
  description:
    "Explore the Paradallax Initiative starship fleet, including Horizon-Class Cruisers, Atlas Colony Carriers, Odyssey Science Vessels, and Hammerhead Corvettes.",
  alternates: {
    canonical: "/fleet",
  },
  openGraph: {
    type: "website",
    url: "/fleet",
    siteName: "Paradallax Initiative",
    title: "Fleet Catalogue | Paradallax Initiative",
    description:
      "Explore the Paradallax Initiative starship fleet, including Horizon-Class Cruisers, Atlas Colony Carriers, Odyssey Science Vessels, and Hammerhead Corvettes.",
    images: [
      {
        url: "/media/fleet/horizon.jpg",
        width: 1200,
        height: 630,
        alt: "Paradallax Initiative Fleet Catalogue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet Catalogue | Paradallax Initiative",
    description:
      "Explore the Paradallax Initiative starship fleet, including Horizon-Class Cruisers, Atlas Colony Carriers, Odyssey Science Vessels, and Hammerhead Corvettes.",
    images: ["/media/fleet/horizon.jpg"],
  },
};

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
