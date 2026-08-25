import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Archive | Paradallax Initiative",
  description:
    "Explore active and historical mission records, scientific expedition logs, incident reports, and corporate briefs from Paradallax Initiative operations.",
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
