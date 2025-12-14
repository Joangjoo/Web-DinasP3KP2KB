<script setup>
import { ref } from 'vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';

const sections = [
    {
        id: 1,
        title: "Informasi tentang peraturan, keputusan dan atau kebijakan",
        items: [
            "Dasar Hukum", "Pengembangan Sekolah Ramah Anak", "Perbub KLA",
            "Perbup Pendidikan Keluarga Siap Nikah", "Dasar Hukum Pembentukan UPTD PPA",
            "Dasar Hukum Pembentukan Dinas P3AP2KB", "Perjanjian dengan Pihak Ke-3",
            "MOU dengan Baznas", "MOU dengan UNY", "SOP Melakukan Penelitian/KKN/PKL",
            "Rekapitulasi Izin Magang 2021", "Maklumat Pelayanan Publik UPTD PPA",
            "Maklumat Kode Etik", "Maklumat Pelayanan Informasi"
        ]
    },
    {
        id: 2,
        title: "Informasi tentang pedoman pengelolaan organisasi, administrasi, kepegawaian, dan keuangan",
        subsections: [
            {
                subtitle: "14 Item (Kewajiban Instansi Pemerintah Standar Pelayanan)"
            },
            {
                subtitle: "SDM Dinas P3AP2KB",
                items: ["SDM Perjanuari 2022", "SDM Perjanuari 2024", "Pelanggaran & Hukuman ASN 2024"]
            },
            {
                subtitle: "SOP Pelayanan",
                items: [
                    "SOP PPID", "SOP Pengendalian Akses", "SOP Pendokumentasian Informasi Publik",
                    "SOP Uji Konsekuensi", "SOP Pelayanan UPTD PPA", "SOP Pelayanan Puspaga Kesengsem",
                    "SOP AKB Puspaga Kesengsem", "SOP Pelaksanaan GASPOL di Kampung KB",
                    "Juknis GASPOL 2023"
                ]
            },
            {
                subtitle: "Standar Pelayanan",
                items: ["Standar Pelayanan UPTD PPA", "Standar Pelayanan PPID", "Standar Pelayanan Puspaga Kesengsem"]
            },
            {
                subtitle: "Jadwal Pelayanan",
                items: ["Jadwal Pelayanan Puspaga Kesengsem", "Jadwal Pelayanan Pengaduan UPTD PPA"]
            },
            {
                subtitle: "Indeks Kepuasan Masyarakat",
                items: [
                    "Indeks Kepuasan Masyarakat Dinas P3AP2KB 2018", "Indeks Kepuasan Masyarakat UPTD PPA 2018",
                    "Indeks Kepuasasn Masyarakat Dinas P3AP2KB 2019", "Indeks Kepuasan Masyarakat UPTD PPA 2019",
                    "Indeks Kepuasan Masyarakat Dinas P3AP2KB 2020", "Indeks Kepuasan Masyarakat UPTD PPA 2020",
                    "Indeks Kepuasan Masyarakat UPTD PPA 2021", "Indeks Kepuasan Masyarakat Dinas P3AP2KB 2021",
                    "Indeks Kepuasan Masyarakat UPTD PPA 2022", "Perkembangan IKM Dinas P3AP2KB 2019 – 2023",
                    "Indeks Kepuasan Masyarakat Dinas P3AP2KB 2025 Semester I"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "DATA CAPAIAN",
        subsections: [
            {
                subtitle: "DATA CAPAIAN 2019",
                items: [
                    "Laporan Capaian KB (Jan, Feb, Mar, Apr, Mei, Jun, Jul, Ags, Sep, Okt, Nov, Des)",
                    "Laporan Data Kekerasan UPTD Perlindungan Perempuan dan Anak 2019"
                ]
            },
            {
                subtitle: "DATA CAPAIAN TAHUN 2020",
                items: [
                    "Laporan Bulanan/ Capaian Keuangan dan Fisik (Jan, Feb, Mar, Apr, Mei, Juni)",
                    "Laporan Data Kekerasan UPTD Perlindungan Perempuan dan Anak 2020"
                ]
            },
            {
                subtitle: "DATA CAPAIAN TAHUN 2021",
                items: [
                    "Data Capaian Dinas P3AP2KB 2017 – 2021",
                    "Laporan Jumlah Klien Puspaga (Januari – Agustus 2021, November, Desember)",
                    "Laporan Data Kekerasan UPTD Perlindungan Perempuan dan Anak Kabupaten Sleman Tahun 2021"
                ]
            },
            {
                subtitle: "Data Kekerasan Lainnya",
                items: [
                    "Laporan Data Kekerasan UPTD Perlindungan Perempuan dan Anak 2022 SIKPA FPKK",
                    "Laporan Data Kekerasan UPTD Perlindungan Perempuan dan Anak 2023 SIKPA FPKK",
                    "Laporan Data Kekerasan UPTD Perlindungan Perempuan dan Anak 2024 SIKPA FPKK"
                ]
            }
        ],
        footer: "*untuk data yang lebih lengkap berkaitan dengan kepersertaan KB silahkan datang ke Dinas P3AP2KB Kabupaten Sleman"
    },
    {
        id: 4,
        title: "Data perbendaharaan atau inventaris",
        items: [
            "Aset Tahun 2018", "Aset Tahun 2019", "Aset Tahun 2020", "Aset Tahun 2021",
            "Aset Tahun 2022", "Aset Tahun 2023", "Aset Tahun 2024"
        ]
    },
    {
        id: 5,
        title: "Rencana strategis dan rencana kerja OPD",
        items: [
            "Renstra Tahun 2017 – 2021", "Renstra 2021 – 2026",
            "Renja Tahun 2019", "renja 2020", "renja 2021", "renja 2022", "renja 2023"
        ]
    },
    {
        id: 6,
        title: "Agenda",
        content: ""
    },
    {
        id: 7,
        title: "Informasi dan kebijakan yang disampaikan pejabat publik dalam pertemuan yang terbuka untuk umum dan atau press release",
        items: ["Kebijakan Privasi"]
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Wajib Diumumkan Setiap Saat</h1>
                <p class="text-lg opacity-90">Informasi yang wajib disediakan dan diumumkan setiap saat</p>
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

                        <div v-if="section.footer" class="mt-4 text-sm text-gray-500 italic">
                            {{ section.footer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
