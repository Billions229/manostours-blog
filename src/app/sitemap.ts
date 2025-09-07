import { config } from "@/config";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: urlJoin(config.baseUrl, "about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: urlJoin(config.baseUrl, "blog"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: urlJoin(config.baseUrl, "tag"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
