import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    locale: z.enum(['es', 'en']),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
