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
        
        // 📸 INI KUNCI JAWABANNYA: Memberitahu Astro bahwa ini adalah Object Gambar
        screenshots: z.array(
            z.object({
                image: z.string().optional()
            })
        ).optional(),
        
        // 💰 Memberitahu Astro format tombol Safelink
        daftar_download: z.array(
            z.object({
                nama: z.string().optional(),
                link: z.string().optional()
            })
        ).optional()
    }).catchall(z.any()) // 🛡️ Mode Kebal: Terima data apapun tanpa protes
});

export const collections = {
    'aplikasi': aplikasiCollection,
};