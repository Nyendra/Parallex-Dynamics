import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Catalogue | Parallax Dynamics",
  description:
    "Explore the Parallax Dynamics starship fleet, including Horizon-Class Cruisers, Atlas Colony Carriers, Odyssey Science Vessels, and Hammerhead Corvettes.",
};

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
