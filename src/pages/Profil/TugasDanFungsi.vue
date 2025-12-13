<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid' // Assuming Heroicons is available or I'll use SVG

const activeSection = ref(null)

const toggleSection = (index) => {
    activeSection.value = activeSection.value === index ? null : index
}

const sections = [
    {
        title: 'Sekretariat',
        tugas: 'Sekretariat mempunyai tugas melaksanakan urusan umum, urusan kepegawaian, urusan keuangan, urusan perencanaan dan evaluasi serta mengoordinasikan pelaksanaan tugas satuan organisasi.',
        fungsi: [
            'Penyusunan rencana kerja Sekretariat dan Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana;',
            'Perumusan kebijakan teknis kesekretariatan;',
            'Pelaksanaan urusan umum;',
            'Pelaksanaan urusan kepegawaian;',
            'Pelaksanaan urusan keuangan;',
            'Pelaksanaan urusan perencanaan dan evaluasi;',
            'Pengoordinasian pelaksanaan tugas satuan organisasi lingkup Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana;',
            'Evaluasi dan penyusunan laporan pelaksanaan kerja Sekretariat dan Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana.'
        ],
        subSections: [
            {
                title: 'Subbagian Umum dan Kepegawaian',
                tugas: 'Subbagian Umum dan Kepegawaian mempunyai tugas menyiapkan bahan pelaksanaan urusan umum dan urusan kepegawaian.',
                fungsi: [
                    'Penyusunan rencana kerja Subbagian Umum dan Kepegawaian;',
                    'Perumusan kebijakan teknis pelaksanaan urusan umum dan urusan kepegawaian;',
                    'Pengelolaan persuratan dan kearsipan;',
                    'Pengelolaan perlengkapan, keamanan, dan kebersihan;',
                    'Pengelolaan dokumentasi dan informasi;',
                    'Penyusunan perencanaan kebutuhan, pengembangan dan pembinaan pegawai;',
                    'Pelayanan administrasi pegawai dan pengelolaan tata usaha kepegawaian;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Subbagian Umum dan Kepegawaian.'
                ]
            },
            {
                title: 'Subbagian Keuangan',
                tugas: 'Subbagian Keuangan mempunyai tugas menyiapkan bahan pelaksanaan urusan keuangan.',
                fungsi: [
                    'Penyusunan rencana kerja Subbagian Keuangan;',
                    'Perumusan kebijakan teknis pelaksanaan urusan keuangan;',
                    'Pelaksanaan perbendaharaan, pembukuan, dan pelaporan keuangan;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Subbagian Keuangan.'
                ]
            },
            {
                title: 'Subbagian Perencanaan dan Evaluasi',
                tugas: 'Subbagian Perencanaan dan Evaluasi mempunyai tugas menyiapkan bahan pelaksanaan urusan Perencanaan dan Evaluasi.',
                fungsi: [
                    'Penyusunan rencana kerja Subbagian Perencanaan dan Evaluasi;',
                    'Perumusan kebijakan teknis pelaksanaan urusan perencanaan dan evaluasi;',
                    'Pengoordinasian penyusunan rencana kerja Sekretariat dan rencana kerja Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana;',
                    'Pengoordinasian evaluasi dan pelaporan pelaksanaan kerja Sekretariat dan pelaksanaan kerja Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Subbagian Perencanaan dan Evaluasi.'
                ]
            }
        ]
    },
    {
        title: 'Bidang Pemberdayaan Perempuan',
        tugas: 'Bidang Pemberdayaan Perempuan melaksanakan tugas membina dan melaksanakan peningkatan kualitas hidup perempuan dan perlindungan hak perempuan.',
        fungsi: [
            'Penyusunan rencana kerja Bidang Pemberdayaan Perempuan;',
            'Perumusan kebijakan teknis peningkatan kualitas hidup perempuan dan perlindungan hak perempuan;',
            'Pelaksanaan dan pembinaan peningkatan kualitas hidup perempuan;',
            'Pelaksanaan dan pembinaan perlindungan hak perempuan;',
            'Evaluasi dan penyusunan laporan pelaksanaan kerja Bidang Pemberdayaan Perempuan.'
        ],
        subSections: [
            {
                title: 'Seksi Kualitas Hidup Perempuan',
                tugas: 'Seksi Kualitas Hidup Perempuan mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan kualitas hidup perempuan.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Kualitas Hidup Perempuan;',
                    'Perumusan kebijakan teknis peningkatan kualitas hidup perempuan;',
                    'Pelaksanaan dan pembinaan pengarusutamaan, kesetaraan, dan keadilan gender;',
                    'Pelaksanaan dan pembinaan penguatan partisipasi lembaga dan partisipasi masyarakat;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Kualitas Hidup Perempuan.'
                ]
            },
            {
                title: 'Seksi Perlindungan Perempuan',
                tugas: 'Seksi Perlindungan Perempuan mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan perlindungan hak perempuan.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Perlindungan Perempuan;',
                    'Perumusan kebijakan teknis perlindungan hak perempuan;',
                    'Pelaksanaan dan pembinaan perlindungan hak perempuan;',
                    'Pelaksanaan, pembinaan, dan advokasi perencanaan penganggaran responsif gender;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Perlindungan Perempuan.'
                ]
            }
        ]
    },
    {
        title: 'Bidang Perlindungan dan Pemenuhan Hak Anak',
        tugas: 'Bidang Perlindungan dan Pemenuhan Hak Anak melaksanakan tugas membina perlindungan anak dan pemenuhan hak anak.',
        fungsi: [
            'Penyusunan rencana kerja Bidang Perlindungan dan Pemenuhan Hak Anak;',
            'Perumusan kebijakan teknis perlindungan anak dan pemenuhan hak anak;',
            'Pelaksanaan dan pembinaan perlindungan anak;',
            'Pelaksanaan dan pembinaan pemenuhan hak anak;',
            'Evaluasi dan penyusunan laporan pelaksanaan kerja Bidang Perlindungan dan Pemenuhan Hak Anak.'
        ],
        subSections: [
            {
                title: 'Seksi Perlindungan Anak',
                tugas: 'Seksi Perlindungan Anak mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan perlindungan anak.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Perlindungan Anak;',
                    'Perumusan kebijakan teknis perlindungan anak;',
                    'Pelaksanaan dan pembinaan perlindungan anak;',
                    'Pelaksanaan, pembinaan, dan pendampingan anak yang memerlukan perlindungan khusus;',
                    'Pengelolaan dan pembinaan sistem informasi gender dan anak;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Perlindungan Anak.'
                ]
            },
            {
                title: 'Seksi Pemenuhan Hak Anak',
                tugas: 'Seksi Pemenuhan Hak Anak mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan pemenuhan hak anak.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Pemenuhan Hak Anak;',
                    'Perumusan kebijakan teknis pemenuhan hak anak;',
                    'Pelaksanaan dan pembinaan pemenuhan hak anak;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Pemenuhan Hak Anak.'
                ]
            }
        ]
    },
    {
        title: 'Bidang Pengendalian Penduduk dan Keluarga Berencana',
        tugas: 'Bidang Pengendalian Penduduk dan Keluarga Berencana melaksanakan tugas membina pengendalian penduduk dan keluarga berencana.',
        fungsi: [
            'Penyusunan rencana kerja Bidang Pengendalian Penduduk dan Keluarga Berencana;',
            'Perumusan kebijakan teknis pengendalian penduduk dan keluarga berencana;',
            'Pelaksanaan dan pembinaan pengendalian penduduk;',
            'Pelaksanaan dan pembinaan advokasi, komunikasi, informasi dan edukasi;',
            'Pembinaan dan penggerakan keluarga berencana;',
            'Evaluasi dan penyusunan laporan pelaksanaan kerja Bidang Pengendalian Penduduk dan Keluarga Berencana.'
        ],
        subSections: [
            {
                title: 'Seksi Pengendalian Penduduk, Advokasi, Komunikasi, Informasi dan Edukasi',
                tugas: 'Seksi Pengendalian Penduduk, Advokasi, Komunikasi, Informasi dan Edukasi mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan pengendalian penduduk , advokasi, komunikasi, informasi dan edukasi.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Pengendalian Penduduk, Advokasi, Komunikasi, Informasi dan Edukasi;',
                    'Perumusan kebijakan teknis pengendalian penduduk, advokasi, komunikasi, informasi dan edukasi;',
                    'Pelaksanaan sinkronisasi kebijakan pengendalian kuantitas penduduk;',
                    'Pembinaan advokasi, komunikasi, informasi dan edukasi;',
                    'Pelaksanaan pendataan dan pengelolaan sistem informasi keluarga;',
                    'Pemantauan dan evaluasi data dan informasi pengendalian penduduk dan keluarga berencana;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Pengendalian Penduduk, Advokasi, Komunikasi, Informasi dan Edukasi.'
                ]
            },
            {
                title: 'Seksi Pembinaan Keluarga Berencana',
                tugas: 'Seksi Pembinaan Keluarga Berencana mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan penggerakan keluarga berencana.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Pembinaan Keluarga Berencana;',
                    'Perumusan kebijakan teknis pembinaan keluarga berencana;',
                    'Pembinaan, dan penggerakan keluarga berencana;',
                    'Pengelolaan alat obat kontrasepsi dan sarana prasarana keluarga berencana;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Pembinaan Keluarga Berencana.'
                ]
            }
        ]
    },
    {
        title: 'Bidang Ketahanan dan Kesejahteraan Keluarga',
        tugas: 'Bidang Ketahanan dan Kesejahteraan Keluarga melaksanakan tugas membina ketahanan keluarga dan pemberdayaan keluarga sejahtera.',
        fungsi: [
            'Penyusunan rencana kerja Bidang Ketahanan dan Kesejahteraan Keluarga;',
            'Perumusan kebijakan teknis pembinaan ketahanan keluarga dan kesejahteraan keluarga;',
            'Pembinaan ketahanan keluarga;',
            'Pemberdayaan keluarga sejahtera;',
            'Pelaksanaan dan pembinaan peningkatan kemitraan;',
            'Evaluasi dan penyusunan laporan pelaksanaan kerja Bidang Ketahanan dan Kesejahteraan Keluarga.'
        ],
        subSections: [
            {
                title: 'Seksi Bina Ketahanan Keluarga',
                tugas: 'Seksi Bina Ketahanan Keluarga mempunyai tugas menyiapkan bahan pembinaan ketahanan keluarga.',
                fungsi: [
                    'Penyusunan rencana kerja seksi Bina Ketahanan Keluarga;',
                    'Perumusan kebijakan teknis pembinaan ketahanan keluarga;',
                    'Pelaksanaan dan pembinaan bina keluarga balita dan anak, bina ketahanan remaja, bina keluarga lansia dan rentan;',
                    'Pelaksanaan dan pembinaan pusat informasi konseling remaja dan mahasiswa;',
                    'evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Bina Ketahanan Keluarga.'
                ]
            },
            {
                title: 'Seksi Pemberdayaan Keluarga Sejahtera dan Kemitraan',
                tugas: 'Seksi Pemberdayaan Keluarga Sejahtera dan Kemitraan mempunyai tugas menyiapkan bahan pelaksanaan dan pembinaan pemberdayaan keluarga sejahtera dan peningkatan kemitraan.',
                fungsi: [
                    'Penyusunan rencana kerja Seksi Pemberdayaan Keluarga Sejahtera dan Kemitraan;',
                    'Perumusan kebijakan teknis pemberdayaan keluarga sejahtera dan peningkatan kemitraan;',
                    'Pemberdayaan ekonomi keluarga sejahtera;',
                    'Pelaksanaan penguatan kemitraan lembaga dan peran serta masyarakat;',
                    'Pendayagunaan tenaga penyuluh Keluarga Berencana;',
                    'Evaluasi dan penyusunan laporan pelaksanaan kerja Seksi Pemberdayaan Keluarga Sejahtera dan Kemitraan.'
                ]
            }
        ]
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Tugas dan Fungsi</h1>
                <p class="text-lg opacity-90">Uraian Tugas dan Fungsi Dinas P3AP2KB</p>
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
            <div class="space-y-6">
                <div v-for="(section, index) in sections" :key="index"
                    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                    :class="{ 'shadow-lg ring-1 ring-blue-100': activeSection === index }">

                    <!-- Header -->
                    <button @click="toggleSection(index)"
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                        <h2 class="text-xl md:text-2xl font-bold text-gray-800"
                            :class="{ 'text-[#5A9CB5]': activeSection === index }">
                            {{ section.title }}
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-gray-400 transition-transform duration-300"
                            :class="{ 'rotate-180 text-[#5A9CB5]': activeSection === index }">
                            <path fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <!-- Content (Expanded) -->
                    <div v-show="activeSection === index" class="px-6 pb-8 animate-fade-in-down">
                        <div class="border-t border-gray-100 pt-6">
                            <!-- Main Tugas -->
                            <div class="mb-6">
                                <h3 class="font-bold text-[#5A9CB5] mb-2 uppercase tracking-wide text-sm">Tugas:</h3>
                                <p class="text-gray-700 leading-relaxed">{{ section.tugas }}</p>
                            </div>

                            <!-- Main Fungsi -->
                            <div class="mb-8">
                                <h3 class="font-bold text-[#5A9CB5] mb-2 uppercase tracking-wide text-sm">Fungsi:</h3>
                                <ul class="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li v-for="(func, fIdx) in section.fungsi" :key="fIdx" class="leading-relaxed">{{
                                        func }}</li>
                                </ul>
                            </div>

                            <!-- Sub Sections -->
                            <div v-if="section.subSections && section.subSections.length > 0" class="space-y-6 mt-8">
                                <div class="flex items-center gap-4">
                                    <div class="h-px bg-gray-200 flex-grow"></div>
                                    <span class="text-gray-400 text-sm font-medium uppercase tracking-wider">Unit Kerja
                                        & Perincian</span>
                                    <div class="h-px bg-gray-200 flex-grow"></div>
                                </div>

                                <div v-for="(sub, sIdx) in section.subSections" :key="sIdx"
                                    class="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                                    <h4 class="font-bold text-lg text-gray-800 mb-4">{{ sub.title }}</h4>

                                    <div class="mb-4">
                                        <h5 class="font-bold text-gray-600 text-xs uppercase mb-1">Tugas:</h5>
                                        <p class="text-gray-700 text-sm leading-relaxed">{{ sub.tugas }}</p>
                                    </div>

                                    <div>
                                        <h5 class="font-bold text-gray-600 text-xs uppercase mb-1">Fungsi:</h5>
                                        <ul class="list-disc list-outside ml-4 space-y-1 text-gray-700 text-sm">
                                            <li v-for="(subFunc, sfIdx) in sub.fungsi" :key="sfIdx"
                                                class="leading-relaxed">{{ subFunc }}</li>
                                        </ul>
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

<style scoped>
/* Simple fade animation */
.animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
