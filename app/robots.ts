import type { MetadataRoute } from "next";

const baseUrl = "https://animbits.dev";

// Static export: emitted to out/robots.txt at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
