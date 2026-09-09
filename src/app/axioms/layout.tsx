import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Axioms | Paradallax Initiative",
  description:
    "The seven fundamental principles guiding every voyage, experiment, and corporate initiative across known space.",
  alternates: {
    canonical: "/axioms",
  },
  openGraph: {
    type: "website",
    url: "/axioms",
    siteName: "Paradallax Initiative",
    title: "The Axioms | Paradallax Initiative",
    description:
      "The seven fundamental principles guiding every voyage, experiment, and corporate initiative across known space.",
    images: [
      {
        url: "/media/broadcast/broadcast-parallax-public.jpg",
        width: 1200,
        height: 630,
        alt: "The Axioms of Paradallax Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Axioms | Paradallax Initiative",
    description:
      "The seven fundamental principles guiding every voyage, experiment, and corporate initiative across known space.",
    images: ["/media/broadcast/broadcast-parallax-public.jpg"],
  },
};

export default function AxiomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
