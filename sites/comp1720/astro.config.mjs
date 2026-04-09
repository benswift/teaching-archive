import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import anuTheme from "astro-theme-anu";
import { astromotion, deckPreprocessor } from "astromotion";
import remarkTemplate from "../../plugins/remark-template.ts";

function p5SsrStub() {
  const virtualId = "\0p5-ssr-stub";
  return {
    name: "p5-ssr-stub",
    enforce: "pre",
    resolveId(id, _source, options) {
      if (id === "p5" && options?.ssr) return virtualId;
    },
    load(id) {
      if (id === virtualId) return "export default class p5 {}; export { p5 };";
    },
  };
}

export default defineConfig({
  site: "https://teaching.benswift.me",
  base: "/comp1720/",
  vite: {
    plugins: [p5SsrStub()],
  },
  markdown: {
    remarkPlugins: [
      [
        remarkTemplate,
        {
          site: {
            gitlab_url: "https://gitlab.cecs.anu.edu.au/comp1720/2024",
            year: "2024",
            forum: {
              name: "Ed",
              url: "https://edstem.org/au/join/dswwXs",
            },
            extension: {
              name: "COMP1720 Extension Pack",
              id: "anucecsit.comp1720-extension-pack",
              vscode_url:
                "https://marketplace.visualstudio.com/items?itemName=anucecsit.comp1720-extension-pack",
              vscodium_url: "https://open-vsx.org/extension/anucecsit/comp1720-extension-pack",
            },
            contacts: {
              page_contact: { email: "COMP1720@anu.edu.au" },
            },
          },
        },
      ],
    ],
  },
  integrations: [
    mdx(),
    svelte({
      extensions: [".svelte"],
      preprocess: [deckPreprocessor()],
    }),
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
