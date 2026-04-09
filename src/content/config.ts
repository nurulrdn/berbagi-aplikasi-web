import { z, defineCollection } from 'astro:content';

const aplikasiCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        kategori: z.string().optional(),
        os: z.string().default('Windows'),
        ukuran: z.string().optional(),
        gambar: z.string().optional(),
        
        // AMUNISI BARU YANG DITAMBAHKAN
        ringkasan: z.string().optional(),
        screenshots: z.array(
            z.object({
                image: z.string().optional()
            })
        ).optional(),
        
        // MESIN UANG
        daftar_download: z.array(
            z.object({
                nama: z.string(),
                link: z.string()
            })
        ).optional()
    })
});

export const collections = {
    'aplikasi': aplikasiCollection,
};