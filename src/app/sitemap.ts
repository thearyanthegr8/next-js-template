import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseUrl}`,
      lastModified: "2025-05-30",
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
