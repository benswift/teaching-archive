import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const labsYear11 = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/labs-year-11" }),
  schema: z
    .object({
      title: z.string(),
      tagline: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
      templateRepo: z.string().nullish(),
      image: z.string().nullish(),
    })
    .passthrough(),
});

const labsYear12 = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/labs-year-12" }),
  schema: z
    .object({
      title: z.string(),
      tagline: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
      templateRepo: z.string().nullish(),
      image: z.string().nullish(),
    })
    .passthrough(),
});

const deliverablesYear11 = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/deliverables-year-11",
  }),
  schema: z
    .object({
      title: z.string(),
      tagline: z.string().nullish(),
      summary: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
    })
    .passthrough(),
});

const deliverablesYear12 = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/deliverables-year-12",
  }),
  schema: z
    .object({
      title: z.string(),
      tagline: z.string().nullish(),
      summary: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
    })
    .passthrough(),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/resources" }),
  schema: z
    .object({
      title: z.string(),
      tagline: z.string().nullish(),
      hidden: z.coerce.boolean().default(false),
    })
    .passthrough(),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/people" }),
  schema: z
    .object({
      name: z.string(),
      position: z.array(z.string()).nullish(),
      image: z.string().nullish(),
      email: z.string().nullish(),
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

export const collections = {
  "labs-year-11": labsYear11,
  "labs-year-12": labsYear12,
  "deliverables-year-11": deliverablesYear11,
  "deliverables-year-12": deliverablesYear12,
  resources,
  people,
  pages,
};
