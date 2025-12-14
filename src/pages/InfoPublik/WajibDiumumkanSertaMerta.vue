<script setup>
import { ref } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';

const sections = [
    {
        id: 1,
        title: "Informasi tentang bencana alam seperti gempa bumi, erupsi Merapi, kekeringan, hama penyakit tanaman, epidemik, Kejadian Luar Biasa (KLB)",
        items: [
            "Tingkat Aktifitas Merapi 2018",
            "Instruksi Bupati Sleman 443-0021 ttg Kewaspadaan dan Penanganan COVID-19",
            "Status Siaga Gunung Merapi Diperpanjang, Pemkab Sleman Terapkan Simulasi Mitigasi Bencana",
            "Video Simulasi Penanganan Bencana Dinas P3AP2KB Sleman"
        ]
    },
    {
        id: 2,
        title: "Informasi tentang rencana gangguan terhadap utilitas dan pelayanan publik",
        items: [
            "Pembatasan Kegiatan Bepergian ke Luar Daerah dan/atau Mudik dan/atau Cuti Bagi Pegawai ASN di Lingkungan Pemerintah Kabupaten Sleman Dalam Masa Pandemi COVID-19",
            "Surat Edaran Pencegahan Korupsi dan Gratifikasi di Hari Raya",
            "Jam Kerja Pegawai ASN Pada Bulan Ramadhan 1442 Hijriah",
            "PPKM Mikro Diperpanjang, Cakupan Wilayah Diperluas, Periode 6-19 April 2021",
            "Jam Pelayanan PPKM Mikro sampai tanggal 30 Juli 2021",
            "Himbauan dirumah saja sampai 7 hari ke depan dari tanggal 28 Juni 2021",
            "Perubahan Jam Pelayanan Masa PPKM Darurat UPTD PPA Kabupaten Sleman 05 -20 Juli 2021"
        ]
    },
    {
        id: 3,
        title: "Titik Kumpul dan Jalur Evakuasi di Kantor Dinas P3AP2KB Kabupaten Sleman",
        content: ""
    },
    {
        id: 4,
        title: "Informasi Perubahan Jam Kerja dan Layanan",
        items: [
            "Perubahan Jam Kerja ASN Dinas P3AP2KB Kabupaten Sleman Selama Bulan Ramadan 1443 H",
            "Perubahan Jam Layanan UPTD Perlindungan Perempuan Anak Dinas P3AP2KB Selama Ramadan 1443 H",
            "Perubahan Jam Layanan Puspaga Kesengsem Sleman Selama Ramadan 1443 H",
            "Libur Pelayanan Dinas Selama Cuti Bersama Libur Lebaran 1443 H",
            "Pelayanan Publik Puspaga Kesengsem Selama Libur Lebaran 1443 H",
            "Layanan UPTD PPA Selama Libur Lebaran 1443 H",
            "Perubahan Jam Kerja ASN Dinas P3AP2KB Kabupaten Sleman Selam Bulan Ramadhan 1444 H / 2023",
            "Perubahan Jam Layanan Puspaga Kesengsem Sleman Selama Ramadhan 1444 H / 2023",
            "Perubahan Jam Layanan UPTD Perlindungan Perempuan Anak Dinas P3AP2KB Selama Ramadan 1444 H / 2023",
            "Perubahan Jam Layanan Puspaga Kesengsem Sleman Selama Ramadhan 1445 H / 2024",
            "Perubahan Jam Layanan UPTD Perlindungan Perempuan Anak Dinas P3AP2KB Selama Ramadan 1445 H / 2024"
        ]
    },
    {
        id: 5,
        title: "press release",
        items: [
            "Pengaduan Penyalahgunaan Wewenang ASN di lingkup Dinas P3AP2KB Sleman"
        ]
    }
];

const openSection = ref(null);

const toggleSection = (id) => {
    openSection.value = openSection.value === id ? null : id;
};
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Wajib Diumumkan Serta Merta</h1>
                <p class="text-lg opacity-90">Informasi yang wajib disediakan dan diumumkan secara serta merta</p>
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

        <div class="max-w-4xl mx-auto px-4">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div v-for="section in sections" :key="section.id" class="border-b border-gray-100 last:border-0">
                    <button @click="toggleSection(section.id)"
                        class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        :class="{ 'bg-blue-50/50': openSection === section.id }">
                        <div class="flex gap-4">
                            <span class="text-[#5A9CB5] font-bold">{{ section.id }}.</span>
                            <span class="font-semibold text-gray-800">{{ section.title }}</span>
                        </div>
                        <component :is="openSection === section.id ? ChevronUpIcon : ChevronDownIcon"
                            class="w-5 h-5 text-gray-400" />
                    </button>

                    <div v-show="openSection === section.id" class="px-6 py-4 pl-14 bg-gray-50/50 text-gray-600">
                        <div v-if="section.content">
                            {{ section.content }}
                        </div>

                        <div v-if="section.items" class="space-y-2">
                            <div v-for="(item, idx) in section.items" :key="idx" class="flex items-start gap-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-[#5A9CB5] mt-2 flex-shrink-0"></span>
                                <a href="#" class="hover:text-[#5A9CB5] transition-colors">{{ item }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
