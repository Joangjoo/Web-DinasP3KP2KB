<script setup>
import { ref } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';

const sections = [
    {
        id: 1,
        title: "Visi dan misi Kabupaten Sleman Tahun 2021",
        content: "Visi dan misi Kabupaten Sleman Tahun 2021..."
    },
    {
        id: 2,
        title: "Profil Organisasi Perangkat Daerah (OPD)",
        content: "Profil Organisasi Perangkat Daerah (OPD)..."
    },
    {
        id: 3,
        title: "Profil singkat Kepala OPD",
        content: "Profil singkat Kepala OPD..."
    },
    {
        id: 4,
        title: "Ringkasan informasi tentang program dan/atau kegiatan yang sedang dijalankan",
        subsections: [
            {
                subtitle: "Program Kerja",
                items: [
                    "Program dan kegiatan yang direncanakan untuk dilaksanakan pada tahun 2019",
                    "Program dan kegiatan yang direncanakan untuk dilaksanakan pada tahun 2020",
                    "Program dan kegiatan yang diencanakan untuk dilaksanakan pada tahun 2021",
                    "Program dan kegiatan yang direncanakan untuk dilaksanakan pada tahun 2022",
                    "Program dan kegiatan yang direncanakan untuk dilaksanakan pada tahun 2023"
                ]
            },
            {
                subtitle: "Dokumen Pelaksanaan Anggaran",
                items: [
                    "DPPA 2019", "DPA 2019",
                    "DPPA 2020", "DPA 2020",
                    "DPPA 2021", "DPA 2021",
                    "DPPA 2022", "DPA 2023",
                    "Anggaran 2024"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Ringkasan informasi kinerja Perangkat Daerah",
        subsections: [
            {
                subtitle: "1. Ringkasan informasi kinerja Perangkat Daerah",
                items: [
                    "Rekapitulasi Pengawasan Internal melaui E-Kinerja 2021",
                    "LKjIP 2018", "LKjIP 2019", "LKjIP 2020", "LKjIP 2021", "LKjlP 2022", "LKjIP 2023", "LKjIP 2024",
                    "Renstra Perubahan (2017-2021)",
                    "Renstra 2021 – 2026",
                    "Renja 2021", "Renja 2022", "Renja 2023", "Renja 2024", "Renja 2024 (ter update)"
                ]
            },
            {
                subtitle: "2. Laporan Triwulan",
                items: [
                    "Laporan Triwulan I Tahun 2021",
                    "Laporan Triwulan II Tahun 2021",
                    "Laporan Triwulan III Tahun 2021",
                    "Laporan Triwulan 2022",
                    "Laporan Triwulan I Tahun 2023"
                ]
            },
            {
                subtitle: "3. Indikator Kinerja Utama",
                items: [
                    "IKU (Indikator Kinerja Utama)",
                    "IKU 2021 – 2026"
                ]
            },
            {
                subtitle: "4. Tujuan dan Sasaran Program Kerja 2021 – 2026",
                items: []
            },
            {
                subtitle: "5. Perjanjian Kinerja",
                items: [
                    "Perjanjian Kinerja 2019",
                    "Perjanjian Kinerja 2020",
                    "Perjanjian Kinerja 2021",
                    "Perjanjian Kinerja 2021 Perubahan ke dua",
                    "Perjanjian Kinerja 2022",
                    "Perjanjian Kinerja 2023",
                    "Perjanjian Kinerja Berjenjang 2024"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Ringkasan laporan keuangan Dinas P3AP2KB",
        subsections: [
            {
                subtitle: "Laporan Keuangan & Realisasi Anggaran",
                items: [
                    "Laporan Keuangan Semester II 2021",
                    "Laporan Realisasi Anggaran (LRA) 2019",
                    "Laporan Realisasi Anggaran (LRA) 2020",
                    "Laporan Realisasi Anggaran (LRA) 2021",
                    "Laporan Realisasi Anggaran (LRA) 2022",
                    "Laporan Realisasi Anggaran (LRA) 2023",
                    "Laporan Realisasi Anggaran (LRA) 2024"
                ]
            },
            {
                subtitle: "Neraca",
                items: [
                    "Neraca 2019", "Neraca 2020", "Neraca 2021", "Neraca 2022", "Neraca 2023 (Januari – Juni)", "Neraca 2024"
                ]
            },
            {
                subtitle: "Catatan atas Laporan Keuangan (CALK)",
                items: [
                    "Catatan atas Laporan Keuangan (CALK) 2019",
                    "Catatan atas Laporan Keuangan (CALK) 2020",
                    "Catatan atas Laporan Keuangan (CALK) 2021",
                    "Catatan atas Laporan Keuangan (CALK) 2022",
                    "Catatan atas Laporan Keuangan (CALK) 2023",
                    "Catatan atas Laporan Keuangan (CALK) 2024"
                ]
            },
            {
                subtitle: "Realisasi Capaian Fisik dan Keuangan",
                items: [
                    "Realisasi Capaian Fisik dan Keuangan Tahun Anggaran 2019",
                    "Realisasi Capaian Fisik dan Keuangan Tahun Anggaran 2020",
                    "Realisasi Capaian Fisik dan Keuangan Tahun Anggaran 2021",
                    "Realisasi Capaian Fisik dan Keuangan Tahun Anggaran 2022"
                ]
            },
            {
                subtitle: "Laporan LHKPN",
                items: [
                    "LHKPN 2021", "LHKPN 2022", "LHKPN 2023", "LHKPN 2024"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Informasi tentang pengumuman Rencana Umum Pengadaan (RUP) Barang dan Jasa pemerintah",
        items: [
            "RUP Tahun Anggaran 2020",
            "RUP (Swakelola dan Penyedia Tahun Anggaran 2021)",
            "Rekap RUP 2022",
            "Rekap RUP 2023",
            "Rekap RUP 2024"
        ]
    },
    {
        id: 8,
        title: "Informasi tentang prosedur peringatan dini dan prosedur evakuasi keadaan darurat di setiap kantor OPD",
        content: ""
    },
    {
        id: 9,
        title: "Informasi tentang tata cara pengaduan atau pelanggaran yang dilakukan baik oleh pejabat Perangkat Daerah maupun pihak yang mendapatkan izin atau perjanjian kerja dari Perangkat Daerah yang bersangkutan",
        content: ""
    },
    {
        id: 10,
        title: "Informasi tentang hak dan tata cara memperoleh informasi, serta tata cara penyelesaian sengketa informasi",
        content: ""
    },
    {
        id: 11,
        title: "Ringkasan laporan akses informasi publik",
        items: [
            "Laporan Informasi Publik 2019",
            "Laporan Informasi Publik 2020",
            "Laporan Informasi Publik 2021",
            "Laporan Informasi Publik 2022 (Januari – Maret)",
            "Laporan Informasi Publik 2022 -2023",
            "Laporan Informasi Publik 2024",
            "Permohonan Informasi yang ditolak 2022",
            "Monev Pelayanan Informasi Quartal 4 Tahun 2023",
            "SPT PPID dan SK Daftar Informasi Publik",
            "SK PLID 2024",
            "SKP PPID 2024"
        ]
    },
    {
        id: 12,
        title: "Sarana Informasi Daerah",
        content: ""
    },
    {
        id: 13,
        title: "Pejabat Pengelola Informasi dan Dokumentasi Pemerintah Kabupaten SLEMAN",
        content: ""
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Wajib Diumumkan Berkala</h1>
                <p class="text-lg opacity-90">Informasi yang wajib disediakan dan diumumkan secara berkala</p>
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

                        <div v-if="section.subsections" class="space-y-6">
                            <div v-for="(sub, sIdx) in section.subsections" :key="sIdx">
                                <h4 class="font-semibold text-gray-800 mb-3">{{ sub.subtitle }}</h4>
                                <div class="space-y-2 pl-4 border-l-2 border-gray-200">
                                    <div v-for="(item, idx) in sub.items" :key="idx" class="flex items-start gap-2">
                                        <!-- <span class="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span> -->
                                        <a href="#" class="hover:text-[#5A9CB5] transition-colors block py-1">{{ item
                                            }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
