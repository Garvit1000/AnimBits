import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl = "https://animbits.dev";

// Static export: emitted to out/sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/playground",
    "/about",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const docRoutes = source.getPages().map((page) => page.url);

  const routes = Array.from(new Set([...staticRoutes, ...docRoutes]));

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/docs") ? 0.8 : 0.6,
  }));
}
