import { z, defineCollection } from 'astro:content';

const chainsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),       // e.g. "JJ Bean"
        country: z.string(),     // e.g. "Canada"
        region: z.string(),      // e.g. "BC"
        city: z.string(),        // e.g. "Vancouver"
        category: z.enum(['Cafe', 'Restaurant', 'Bar', 'Fast Food']),
        addresses: z.array(z.string()),
        specialty: z.string(),
        three_things: z.object({
            food: z.string(),
            drink: z.string(),
            other: z.string(),
        }),
    }),
});

export const collections = {
    'chains': chainsCollection,
};