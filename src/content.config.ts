import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case studies, one Markdown file per language: src/content/projects/<lang>/<slug>.md.
 * Translations of the same project share a `key`, used by the language switch.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/projects' }),
  schema: z.object({
    key: z.string(),
    year: z.number(),
    period: z.string(),
    client: z.string(),
    title: z.string(),
    summary: z.string(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).max(3),
    tags: z.array(z.string()),
    tone: z.enum(['orange', 'blue', 'neutral']).default('neutral'),
    quote: z.string().optional(),
    quoteBy: z.string().optional(),
  }),
});

export const collections = { projects };
