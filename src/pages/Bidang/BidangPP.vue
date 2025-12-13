<script setup>
const newsItems = [
    {
        title: 'Pencanangan Rumah Perlindungan Perempuan (RP3) Rumah Peran RSU Queen Latifa',
        date: 'Dec 11, 2025',
        author: 'Admin Utama',
        categories: ['Berita', 'Bidang PP'],
        excerpt: 'Kekerasan terhadap perempuan dan anak merupakan fenomena global yang terjadi sepanjang abad kehidupan manusia. Bentuk kekerasan merupakan pelanggaran hak asasi manusia (HAM), dan kejahatan terhadap harkat dan martabat kemanusiaan serta bentuk diskriminasi yang harus...',
        link: '#'
    },
    {
        title: 'Pencanangan RP3 di PT. Dhanar Mas Concern Unit Sleman',
        date: 'Nov 4, 2025',
        author: 'Admin Utama',
        categories: ['Berita', 'Bidang PP'],
        excerpt: 'Kekerasan terhadap perempuan dan anak merupakan fenomena global yang terjadi sepanjang abad kehidupan manusia. Bentuk kekerasan merupakan pelanggaran hak asasi manusia (HAM), dan kejahatan terhadap harkat dan martabat kemanusiaan serta bentuk diskriminasi yang harus...',
        link: '#'
    },
    {
        title: 'ADVOKASI DAN SOSIALISASI DRPPA DI 17 KALURAHAN INOVATIF TAHUN 2025',
        date: 'Oct 22, 2025',
        author: 'Admin Utama',
        categories: ['Berita', 'Bidang PP'],
        excerpt: 'Sleman, 22 Oktober 2025 – Dinas P3AP2KB Sleman menyelenggarakan Advokasi dan Sosialisasi Desa Ramah Perempuan dan Peduli Anak (DRPPA) pada hari Rabu (22/10/2025) bertempat di Prima SR Hotel & Convention. kegiatan mengundang 17 Kalurahan dengan unsur Kamituwa,...',
        link: '#'
    },
    {
        title: 'GASA 2025, Talk Show Pembangunan SDM Kalurahan Sumberadi',
        date: 'Oct 7, 2025',
        author: 'Admin Utama',
        categories: ['Berita', 'Bidang PP'],
        excerpt: 'Sleman, 7 Oktober 2025 – Dalam rangka Gerakan “Ayah Sayang Anak” (GASA) tahun 2025 Dinas P3AP2KB Sleman menyelenggarakan Talkshow Pembanguan Sumber Daya Manusia pada hari Selasa (7/10/2025) bertempat di Kalurahan Sumberadi, Mlati. Kegiatan ini mendapat dukungan...',
        link: '#'
    },
    {
        title: 'GASA 2025, Talk Show Pembanguan SDM Kalurahan Sumberagung',
        date: 'Oct 6, 2025',
        author: 'Admin Utama',
        categories: ['Berita', 'Bidang PP'],
        excerpt: 'Sleman, 6 Oktober 2025 – Dalam rangka Gerakan “Ayah Sayang Anak” (GASA) tahun 2025 Dinas P3AP2KB Sleman menyelenggarakan Talk show Pembanguan Sumber Daya Manusia pada hari Senin (6/10/2025) bertempat di Kalurahan Sumberagung, Moyudan. Kegiatan ini mendapat...',
        link: '#'
    },
    {
        title: 'BIMTEK MANAJEMEN KASUS BAGI GUGUS TUGAS TPPO TAHUN 2025',
        date: 'Oct 2, 2025',
        author: 'Admin Utama',
        categories: ['Berita', 'Bidang PP'],
        excerpt: 'Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian penduduk dan keluarga Berencana menyelenggarakan kegiatan Bimbingan Teknis Gugus Tugas Penanganan Tindak Pidana Perdagangan Orang (GT-PTPPO) di Kabupaten Sleman Tahun 2025 pada hari senin dan selasa...',
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Bidang Pemberdayaan Perempuan</h1>
                <p class="text-lg opacity-90">Berita dan Informasi Bidang PP</p>
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
