import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Archive | Paradallax Initiative",
  description:
    "Explore active and historical mission records, scientific expedition logs, incident reports, and corporate briefs from Paradallax Initiative operations.",
  alternates: {
    canonical: "/operations",
  },
  openGraph: {
    type: "website",
    url: "/operations",
    siteName: "Paradallax Initiative",
    title: "Operations Archive | Paradallax Initiative",
    description:
      "Explore active and historical mission records, scientific expedition logs, incident reports, and corporate briefs from Paradallax Initiative operations.",
    images: [
      {
        url: "/media/broadcast/broadcast-parallax-public.jpg",
        width: 1200,
        height: 630,
        alt: "Paradallax Initiative Operations Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Archive | Paradallax Initiative",
    description:
      "Explore active and historical mission records, scientific expedition logs, incident reports, and corporate briefs from Paradallax Initiative operations.",
    images: ["/media/broadcast/broadcast-parallax-public.jpg"],
  },
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
