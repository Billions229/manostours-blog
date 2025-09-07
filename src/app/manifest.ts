import { config } from "@/config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.blog.name,
    short_name: "MANOS TOURS",
    description: config.blog.metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/manos.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/images/manos.jpeg", 
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    categories: ["travel", "tourism", "lifestyle", "culture"],
    lang: "fr",
  };
}
