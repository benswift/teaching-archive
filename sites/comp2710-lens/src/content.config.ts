import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const workshops = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/workshops" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
    })
    .passthrough(),
});

const deliverables = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/deliverables" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
    })
    .passthrough(),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/resources" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
    })
    .passthrough(),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
  schema: z
    .object({
      title: z.string(),
    })
    .passthrough(),
});

export const collections = { workshops, deliverables, resources, pages };
