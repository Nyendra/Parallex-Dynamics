import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Archive | Parallax Dynamics",
  description:
    "Explore active and historical mission records, scientific expedition logs, incident reports, and corporate briefs from Parallax Dynamics operations.",
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
