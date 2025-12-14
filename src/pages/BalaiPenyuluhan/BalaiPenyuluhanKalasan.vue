<script setup>
const newsItems = [
    {
        title: 'BAKSOS IMPLAND DAN IUD DI BIDAN WIDYA JUANGEN PURWOMARTANI KALASAN',
        date: 'Feb 12, 2025',
        author: 'Admin Utama',
        categories: ['Baksos', 'Informasi', 'kalasan', 'Penyuluh KB'],
        excerpt: 'BAKSOS IMPLAND DAN IUD DI BIDAN WIDYA JUANGEN PURWOMARTANI KALASAN Kegiatan Baksos dilakukan pada tanggal 5 dan 6 Februari 2025. Dalam kegiatan yang diselenggarakan di Bidan Widya ini, dari PKB, PLKB dan Pengelola Administrasi Balai KB menghadiri atau mendampingi para...',
        link: '#'
    },
    {
        title: 'BAKSOS PELAYANAN KB MKJP DI KLINIK PMB RETNO WIDYAWATI SOROGENEN PURWOMARTANI KALASAN',
        date: 'Mar 6, 2024',
        author: 'Admin Utama',
        categories: ['Baksos', 'kalasan', 'Penyuluh KB'],
        excerpt: 'Pada hari Kamis, 15 Februari 2024 dilaksanakan kegiatan Pelayanan KB di Desa sorogenen kalurahan purwomartani. Berupa kegiatan pelayanan metode kontrasepsi jangka panjang (MKJP). Kegiatan tersebut bertempat di klinik PMB Retno Widyawati. Kegiatan pelayanan KB...',
        link: '#'
    },
    {
        title: 'RAKOR IMP KALURAHAN TIRTOMARTANI',
        date: 'Mar 6, 2024',
        author: 'Admin Utama',
        categories: ['Agenda', 'kalasan', 'Penyuluh KB'],
        excerpt: 'Pada hari jumat tanggal 2 Februari 2023 IMP Kalurahan Tirtomartani, Kapanewon Kalasan, Kabupaten Sleman melaksanakan kegiatan rapat koordinasi IMP Kalurahan Tirtomartani Tahun 2024 bertempatan di gedung serba guna Kaluran Tirtomartani. Kegiatan ini di hadiri...',
        link: '#'
    },
    {
        title: 'SERAH TERIMA JABATAN KAPANEWON KALASAN',
        date: 'Jan 23, 2024',
        author: 'Admin Utama',
        categories: ['balai Penyuluhan', 'Berita', 'kalasan'],
        excerpt: 'Sleman, 23 Januari 2024 Serah terima jabatan dilaksanakan pada hari kamis, 4 Januari 2024 bertempat di pendopo kapanewon kalasan. Kegiatan ini bertujuan untuk memperkenalkan panewu yang baru dan pengalaman bertugas dan pematangan pemikiran dalam kepemimpinan serta...',
        link: '#'
    },
    {
        title: 'SURVEY STUNTING POSYANDU BKB TUNAS HARAPAN DUSUN JONGKANGAN',
        date: 'Mar 24, 2023',
        author: 'Admin Utama',
        categories: ['kalasan'],
        excerpt: 'Pada Tanggal, 15 Maret 2023 di Posyandu BKB Tunas Harapan Dusun Jongkangan dilaksanakan survet stunting tahun 2023 yang dihadiri oleh Tim dari Australia UGM dan Sarjito.  survei posyandu BKB Tunas Harapan diselenggarakan dalam rangka untuk mengetahui perkembangan...',
        link: '#'
    },
    {
        title: 'KEGIATAN KEMITRAAN KAPANEWON SEHAT',
        date: 'Mar 24, 2023',
        author: 'Admin Utama',
        categories: ['kalasan'],
        excerpt: 'Pada tanggal, 17 Maret 2023 bertempatan di Aula Kapanewon Kalasan dilaksaankan kegiatan kemitraan kapanewon sehat tahun 2023 yang dihadari oleh kabupaten, puskesmas, pasar, PKH, lurah-lurah, Pokja paud, TK, SD, SMP, SMA/SLTA. kegiatan kemitraan kapanewon sehat...',
        link: '#'
    }
]
</script>

<template>
    <div class="min-h-screen bg-gray-50 pb-20">
        <!-- Hero Header -->
        <div class="bg-[#5A9CB5] text-white pt-32 pb-20 mb-12 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" stroke-width="2" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Balai Penyuluhan Kalasan</h1>
                <p class="text-lg opacity-90">Berita dan Informasi Seputar Balai Penyuluhan Kalasan</p>
            </div>
            <div class="absolute bottom-0 left-0 w-full leading-none overflow-hidden rotate-180">
                <svg class="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="#F9FAFB"></path>
                </svg>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-4 md:px-8">
            <div class="space-y-8">
                <article v-for="(item, index) in newsItems" :key="index"
                    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group">

                    <!-- Content -->
                    <div class="p-6 md:p-8 flex-1">
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="(cat, cIdx) in item.categories" :key="cIdx"
                                class="px-3 py-1 bg-blue-50 text-[#5A9CB5] text-xs font-semibold rounded-full uppercase tracking-wider">
                                {{ cat }}
                            </span>
                        </div>

                        <h2
                            class="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#5A9CB5] transition-colors leading-tight">
                            <a :href="item.link">{{ item.title }}</a>
                        </h2>

                        <div class="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span class="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {{ item.author }}
                            </span>
                            <span class="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ item.date }}
                            </span>
                        </div>

                        <p v-if="item.excerpt" class="text-gray-600 leading-relaxed mb-6">
                            {{ item.excerpt }}
                        </p>

                        <a :href="item.link"
                            class="inline-flex items-center font-semibold text-[#5A9CB5] hover:gap-2 transition-all duration-300 group-hover/link">
                            Baca Selengkapnya
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 ml-1 transition-transform group-hover/link:translate-x-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>

            <!-- Pagination Placeholder -->
            <div class="flex justify-center mt-12 gap-2">
                <button class="w-10 h-10 rounded-full bg-[#5A9CB5] text-white font-bold shadow-md">1</button>
                <button
                    class="w-10 h-10 rounded-full bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 transition-colors">2</button>
                <button
                    class="w-10 h-10 rounded-full bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
