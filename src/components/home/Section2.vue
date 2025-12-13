<script setup>
import { ref } from 'vue'

const services = [
    {
        title: 'PUSPAGA Kesengsem',
        subtitle: 'Pusat Pembelajaran Keluarga',
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        description: 'Layanan konsultasi dan edukasi untuk keluarga yang harmonis dan sejahtera.',
        details: [
            'Pelayanan Konseling Perkawinan',
            'Pelayanan Konseling Pengasuhan Anak',
            'Pelayanan Konseling Tumbuh Kembang Anak',
            'Pelayanan Konseling Pra Nikah',
            'Edukasi Khusus / Parenting',
            'AKB (Adaptasi Kebiasaan Baru)',
        ],
        contact: null
    },
    {
        title: 'UPTD PPA Sleman',
        subtitle: 'Unit Pelaksana Teknis Daerah Perlindungan Perempuan dan Anak',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        description: 'Layanan gratis perlindungan bagi perempuan dan anak korban kekerasan.',
        details: [
            'Pengaduan',
            'Pendampingan (hukum, psikologis, kerohanian, rujukan medis)',
            'Mediasi',
            'Pengelolaan Kasus'
        ],
        contact: {
            tel: '0274-865579',
            wa: '+62 813-2801-2054'
        }
    },
    {
        title: 'Putaran Sumringah',
        subtitle: 'Pusat Pembelajaran Perempuan Sembada',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        description: 'Program pendaftaran dan pelatihan untuk perempuan pelopor.',
        details: [
            'Perempuan Domisili Sleman',
            'Minimal lulusan SMA',
            'Tidak terlibat parpol',
            'Fasilitas: Tas, Modul, Konsumsi'
        ],
        contact: {
            wa: '+62 896 7819 5255',
            note: 'Scan QR di poster untuk link pendaftaran'
        }
    }
]
</script>

<template>
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <!-- Header -->
            <div class="text-center mb-16">
                <h2 class=" text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                    Layanan Publik
                    <div
                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#5A9CB5] rounded-full">
                    </div>
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Dapatkan layanan publik untuk memenuhi kebutuhan masyarakat Kabupaten Sleman dengan mudah dan
                    transparan.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(service, index) in services" :key="index"
                    class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full group">

                    <!-- Icon -->
                    <div
                        class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#5A9CB5] group-hover:bg-[#5A9CB5] group-hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
                        </svg>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ service.title }}</h3>
                    <p class="text-sm text-[#5A9CB5] font-semibold mb-4">{{ service.subtitle }}</p>

                    <!-- Divider -->
                    <hr class="border-gray-100 mb-4" />

                    <!-- Details List -->
                    <ul class="space-y-3 mb-6 flex-grow">
                        <li v-for="(detail, i) in service.details" :key="i"
                            class="flex items-start text-sm text-gray-600">
                            <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{{ detail }}</span>
                        </li>
                    </ul>

                    <!-- Contact/CTA Area -->
                    <div v-if="service.contact" class="mt-auto bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Kontak Layanan</p>
                        <div class="space-y-2">
                            <div v-if="service.contact.tel" class="flex items-center text-sm text-gray-700">
                                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {{ service.contact.tel }}
                            </div>
                            <div v-if="service.contact.wa" class="flex items-center text-sm text-gray-700">
                                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                {{ service.contact.wa }}
                            </div>
                            <div v-if="service.contact.note" class="text-xs text-gray-500 italic mt-1">
                                * {{ service.contact.note }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* No specific custom styles needed, Tailwind covers it */
</style>
