import { defineCollection, z } from 'astro:content';

const urls = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    path: z.string(),
    title: z.string(),
    description: z.string(),
    external: z.boolean().optional()
  }))
});

const docs = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    type: z.string(),
    embedUrl: z.string()
  }))
});

export const collections = {
  urls,
  docs
};
