import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/posts" }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().nullish(),
      week: z.number().nullish(),
      published: z.coerce.boolean().default(true),
    })
    .passthrough(),
});

const deliverables = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/deliverables" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
      published: z.coerce.boolean().default(true),
      date: z.coerce.date().nullish(),
    })
    .passthrough(),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/resources" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string().nullish(),
      published: z.coerce.boolean().default(true),
    })
    .passthrough(),
});

export const collections = { posts, deliverables, resources };
