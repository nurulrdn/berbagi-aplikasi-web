import { z, defineCollection } from 'astro:content';

const aplikasiCollection = defineCollection({
    type: 'content',
    // z.object() dengan catchall(z.any()) akan menerima semua format tanpa banyak protes
    schema: z.object({
        title: z.string().optional().default('Aplikasi Baru'),
        kategori: z.string().optional(),
        os: z.string().optional(),
        ukuran: z.string().optional(),
        gambar: z.string().optional(),
        ringkasan: z.string().optional(),
        
        // Menggunakan z.any() agar tidak error jika dikosongkan di Ruang Admin
        screenshots: z.any().optional(),
        daftar_download: z.any().optional(),
        
    }).catchall(z.any()) // 🚀 KUNCI RAHASIA: Terima data apapun yang dikirim CMS
});

export const collections = {
    'aplikasi': aplikasiCollection,
};