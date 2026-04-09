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
        
        // 🚀 INI KUNCI UTAMANYA: Memaksa Astro menerima format gambar apapun!
        screenshots: z.any().optional(),
        daftar_download: z.any().optional()
        
    }).catchall(z.any()) // Mode Santai Aktif
});

export const collections = {
    'aplikasi': aplikasiCollection,
};