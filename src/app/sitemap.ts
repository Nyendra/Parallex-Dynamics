import type { MetadataRoute } from "next";
import { getAllOperationalRecords } from "@/data/operationsData";

const BASE_URL = "https://paradallax.space";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/operations`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fleet`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/founders`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/axioms`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const operations = getAllOperationalRecords();
  const operationRoutes: MetadataRoute.Sitemap = operations.map((record) => ({
    url: `${BASE_URL}/operations/${record.slug.toLowerCase().trim()}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...operationRoutes];
}
