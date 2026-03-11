import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const site = process.env.PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export default defineConfig({
  site: site || undefined,
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    ...(site ? [sitemap()] : []),
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
