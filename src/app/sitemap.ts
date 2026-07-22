import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "", "gates", "garage-doors", "access-control", "servicing",
    "gallery", "about", "service-areas", "contact", "privacy", "terms",
  ];
  const now = new Date();
  return pages.map((p) => ({
    url: `${site.url}/${p ? `${p}/` : ""}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "contact" ? 0.9 : 0.7,
  }));
}
