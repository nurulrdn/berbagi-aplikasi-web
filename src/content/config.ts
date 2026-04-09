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
        
        // 📸 INI KUNCI JAWABANNYA: Memberitahu Astro bahwa ini adalah Gambar dari CMS
        screenshots: z.array(
            z.object({
                image: z.string().optional()
            })
        ).optional(),
        
        // 💰 Format tombol Download
        daftar_download: z.array(
            z.object({
                nama: z.string().optional(),
                link: z.string().optional()
            })
        ).optional()
        
    }).catchall(z.any()) // 🛡️ Mode Kebal Ekstra
});

export const collections = {
    'aplikasi': aplikasiCollection,
};
