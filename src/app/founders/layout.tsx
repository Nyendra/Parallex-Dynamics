import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founders | Paradallax Initiative",
  description:
    "Meet the visionary executive leadership and founders of Paradallax Initiative guiding interstellar exploration, engineering, and corporate policy.",
  alternates: {
    canonical: "/founders",
  },
  openGraph: {
    type: "website",
    url: "/founders",
    siteName: "Paradallax Initiative",
    title: "The Founders | Paradallax Initiative",
    description:
      "Meet the visionary executive leadership and founders of Paradallax Initiative guiding interstellar exploration, engineering, and corporate policy.",
    images: [
      {
        url: "/media/founders/Flint.jpg",
        width: 1200,
        height: 630,
        alt: "Paradallax Initiative Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founders | Paradallax Initiative",
    description:
      "Meet the visionary executive leadership and founders of Paradallax Initiative guiding interstellar exploration, engineering, and corporate policy.",
    images: ["/media/founders/Flint.jpg"],
  },
};

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
