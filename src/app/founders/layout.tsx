import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founders | Parallax Dynamics",
  description:
    "Meet the visionary executive leadership and founders of Parallax Dynamics guiding interstellar exploration, engineering, and corporate policy.",
};

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
