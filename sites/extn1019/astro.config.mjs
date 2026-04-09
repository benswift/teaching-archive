import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import anuTheme from "astro-theme-anu";
import remarkTemplate from "../../plugins/remark-template.ts";

export default defineConfig({
  site: "https://teaching.benswift.me",
  base: "/extn1019/",
  markdown: {
    remarkPlugins: [
      [
        remarkTemplate,
        {
          site: {
            gitlab_url: "https://gitlab.cecs.anu.edu.au/extn1019",
            teams_url:
              "https://teams.microsoft.com/l/team/19%3aOTD00MCxm2Cng8d0daWyW6FzoaS2UDNxKPWYDvfmaB41%40thread.tacv2/conversations?groupId=b3f83099-6bcb-4275-b677-bd3c2080ca44&tenantId=e37d725c-ab5c-4624-9ae5-f0533e486437",
            teams_url_2024:
              "https://teams.microsoft.com/l/team/19%3A-6cjAMgTZfsRe6F8Qfmq7V-klkcvvznt0XpAX4aaIUQ1%40thread.tacv2/conversations?groupId=07301f82-67c5-4aa9-b0ac-44e6fde06627&tenantId=e37d725c-ab5c-4624-9ae5-f0533e486437",
            vscode_extn1019_version: "1.2.1",
          },
        },
      ],
    ],
  },
  integrations: [
    svelte(),
    mdx(),
    anuTheme({ checkLinks: false, checkA11y: false }),
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
