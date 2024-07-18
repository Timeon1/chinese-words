import { z ,defineCollection } from 'astro:content';
const listCollection = defineCollection({ 
    type: 'data',
    schema: z.object({
        title: z.string(),
        desc: z.string(),
        data: z.array(z.string())
    })
});

export const collections = {
  'list': listCollection,
};