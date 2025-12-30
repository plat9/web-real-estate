import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ar",
    locales: ["ar"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
  site: "https://altayyib-realestate.com",
  outDir: "dist",
  build: {
    format: "directory",
  },
  // Enable RTL support
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
