import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import anuTheme from "astro-theme-anu";
import { astromotion, deckPreprocessor } from "astromotion";

export default defineConfig({
  site: "https://teaching.benswift.me",
  base: "/comp2300/",
  integrations: [
    svelte({ extensions: [".svelte"], preprocess: [deckPreprocessor()] }),
    anuTheme({ checkLinks: false, checkA11y: false }),
    astromotion({ theme: "./src/decks/theme.css" }),
    sitemap(),
  ],
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
