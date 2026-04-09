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
        
        // 🚀 Sekarang Astro tahu format gambarnya berupa kumpulan teks link yang aman
        screenshots: z.array(z.string()).optional(),
        
        daftar_download: z.array(
            z.object({
                nama: z.string().optional(),
                link: z.string().optional()
            })
        ).optional()
    }).catchall(z.any())
});

export const collections = {
    'aplikasi': aplikasiCollection,
};