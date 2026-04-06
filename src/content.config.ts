import { z, defineCollection } from 'astro:content';
// Fitur baru Astro 5 untuk menarik file secara otomatis
import { glob } from 'astro/loaders'; 

const aplikasiCollection = defineCollection({
  // Kita menggunakan loader 'glob' untuk membaca semua file .md di folder aplikasi
  loader: glob({ pattern: "**/*.md", base: "./src/content/aplikasi" }),
  schema: z.object({
    title: z.string(),
    kategori: z.string(),
    os: z.string().default('Windows'),
    ukuran: z.string(),
    daftar_download: z.array(
      z.object({
        nama: z.string(),
        link: z.string()
      })
    ).optional(),
    ringkasan: z.string(),
    gambar: z.string().optional(),
    fungsi: z.string().optional(),
    kelebihan: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    spesifikasi: z.object({
      os: z.string().optional(),
      prosesor: z.string().optional(),
      ram: z.string().optional(),
      penyimpanan: z.string().optional(), // <--- Tambahan baru
      gpu: z.string().optional(),         // <--- Tambahan baru
    }).optional(),
  })
});

export const collections = {
  'aplikasi': aplikasiCollection,
};