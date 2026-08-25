import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Founders | Paradallax Initiative",
  description:
    "Meet the visionary executive leadership and founders of Paradallax Initiative guiding interstellar exploration, engineering, and corporate policy.",
};

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
