<script setup>
import { ref } from 'vue'

const hukumList = [
    {
        title: 'KEDUDUKAN, SUSUNAN ORGANISASI, TUGAS dan FUNGSI, SERTA TATA KERJA DINAS PEMBERDAYAAN PEREMPUAN dan PERLINDUNGAN ANAK PENGENDALIAN PENDUDUK dan KELUARGA BERENCANA',
        regulation: 'PERATURAN BUPATI SLEMAN NOMOR 72 TAHUN 2016',
        link: '#'
    },
    {
        title: 'PEMBENTUKAN, SUSUNAN ORGANISASI, TUGAS, FUNGSI, dan TATA KERJA PUSAT PELAYANAN TERPADU PERLINDUNGAN PEREMPUAN DAN ANAK (UPTD PPA)',
        regulation: 'PERBUP SLEMAN NOMOR 73 TAHUN 2016 TENTANG PEMBENTUKAN SOTK P3AP2KB',
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Dasar Hukum</h1>
                <p class="text-lg opacity-90">Landasan Hukum Dinas P3AP2KB</p>
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

        <div class="max-w-4xl mx-auto px-4 md:px-8">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div class="space-y-8">
                    <div v-for="(item, index) in hukumList" :key="index"
                        class="p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                        <a :href="item.link" class="block">
                            <h3 class="font-bold text-gray-800 mb-2 group-hover:text-[#5A9CB5] transition-colors">
                                {{ item.title }}
                            </h3>
                            <div class="flex items-center gap-2 text-[#5A9CB5]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span class="font-medium">{{ item.regulation }}</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p class="text-sm text-gray-500 italic">
                        *Silahkan klik untuk membaca atau mengunduh
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
