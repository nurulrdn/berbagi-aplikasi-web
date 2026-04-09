import { z, defineCollection } from 'astro:content';

const aplikasiCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        kategori: z.string().optional(),
        os: z.string().optional(),
        ukuran: z.string().optional(),
        gambar: z.string().optional(),
        ringkasan: z.string().optional(),
        
        // Dibuat sangat fleksibel agar menerima format apapun dari CMS
        screenshots: z.any().optional(),
        daftar_download: z.any().optional()
    }).catchall(z.any())
});

export const collections = {
    'aplikasi': aplikasiCollection,
};