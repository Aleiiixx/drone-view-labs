import type { APIRoute } from "astro";
import { getSiteUrl } from "@/data/site";

export const GET: APIRoute = () => {
  const siteUrl = getSiteUrl();
  const lines = ["User-agent: *", "Allow: /"];

  if (siteUrl) {
    lines.push("", `Sitemap: ${siteUrl}/sitemap-index.xml`);
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
