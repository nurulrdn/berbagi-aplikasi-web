import { defineCollection } from 'astro:content';

const aplikasiCollection = defineCollection({
    type: 'content'
});

export const collections = {
    'aplikasi': aplikasiCollection,
};