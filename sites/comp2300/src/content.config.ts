import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const labs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/labs" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
      templateRepo: z.string().nullish(),
    })
    .passthrough(),
});

const deliverables = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/deliverables" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
      templateRepo: z.string().nullish(),
    })
    .passthrough(),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/resources" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
    })
    .passthrough(),
});

export const collections = { labs, deliverables, resources };
