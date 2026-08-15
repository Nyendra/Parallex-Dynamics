import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Axioms | Parallax Dynamics",
  description:
    "The seven fundamental principles guiding every voyage, experiment, and corporate initiative across known space.",
};

export default function AxiomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
