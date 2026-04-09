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
    anuTheme({
      checkLinks: false,
      checkA11y: false,
      site: {
        baseurl: "/comp2300",
        gitlab_url: "https://gitlab.cecs.anu.edu.au/comp2300/2019/",
        forum_url: "https://piazza.com/class/js9iyij0aiy637",
        streams_url: "https://cs.anu.edu.au/streams/",
      },
    }),
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
