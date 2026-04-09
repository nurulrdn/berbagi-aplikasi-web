import { z, defineCollection } from 'astro:content';

const aplikasiCollection = defineCollection({
    type: 'content',
    // z.object({}).catchall(z.any()) = Terima semua format tanpa protes!
    schema: z.object({
        title: z.string().optional()
    }).catchall(z.any()) 
});

export const collections = {
    'aplikasi': aplikasiCollection,
};