import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";
import anuTheme from "astro-theme-anu";

export default defineConfig({
  site: "https://teaching.benswift.me",
  base: "/",
  integrations: [svelte(), anuTheme({ checkLinks: false, checkA11y: false })],
  fonts: [
    {
      name: "Public Sans",
      cssVariable: "--font-public-sans",
      provider: fontProviders.google(),
    },
    {
      name: "Roboto Mono",
      cssVariable: "--font-roboto-mono",
      provider: fontProviders.google(),
      weights: ["400", "700"],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
});
