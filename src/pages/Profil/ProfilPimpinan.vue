<script setup>
import { ref } from 'vue'

const leaders = [
    {
        name: 'Dr. Ir. Nama Kepala Dinas, M.Si',
        position: 'KEPALA DINAS',
        nip: '19700101 199503 1 001',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop', // Professional Man
        quote: 'Mewujudkan keluarga Sleman yang sejahtera dan berdaya saing.'
    },
    {
        name: 'Dra. Nama Sekretaris, M.M',
        position: 'SEKRETARIS DINAS',
        nip: '19750505 200003 2 005',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop', // Professional Woman
        quote: null
    }
]

const kabids = [
    {
        name: 'Nama Kabid 1, S.Sos',
        position: 'KEPALA BIDANG PEMBERDAYAAN PEREMPUAN',
        nip: '19800101 200501 1 002',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop'
    },
    {
        name: 'Nama Kabid 2, S.KM',
        position: 'KEPALA BIDANG KELUARGA BERENCANA',
        nip: '19820202 200602 1 003',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop'
    },
    {
        name: 'Nama Kabid 3, S.Psi',
        position: 'KEPALA BIDANG PERLINDUNGAN ANAK',
        nip: '19850303 200803 2 004',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop'
    }
]
</script>

<template>
    <div class="min-h-screen bg-gray-50 pb-20">
        <!-- Hero Header (Consistent with Sejarah) -->
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Profil Pimpinan</h1>
                <p class="text-lg opacity-90">Jajaran Pimpinan Dinas P3AP2KB Kabupaten Sleman</p>
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

        <div class="max-w-6xl mx-auto px-4 md:px-8">

            <!-- Kepala Dinas (Featured) -->
            <div class="max-w-4xl mx-auto mb-16">
                <div
                    class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transform hover:-translate-y-1 transition-all duration-300">
                    <div class="md:w-2/5 h-80 md:h-auto overflow-hidden relative">
                        <img :src="leaders[0].image" alt="Kepala Dinas"
                            class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110">
                        <div
                            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                            <h2 class="text-white font-bold text-xl">{{ leaders[0].name }}</h2>
                            <p class="text-white/80 text-sm">{{ leaders[0].position }}</p>
                        </div>
                    </div>
                    <div class="md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
                        <span
                            class="inline-block bg-blue-50 text-[#5A9CB5] px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2 w-fit mx-auto md:mx-0">PIMPINAN
                            TERTINGGI</span>
                        <h2 class="text-3xl font-bold text-gray-800 mb-1 hidden md:block">{{ leaders[0].name }}</h2>
                        <h3 class="text-xl text-[#5A9CB5] font-semibold mb-4 hidden md:block">{{ leaders[0].position }}
                        </h3>

                        <div class="w-20 h-1 bg-yellow-400 rounded-full mb-6 mx-auto md:mx-0"></div>

                        <p v-if="leaders[0].quote" class="text-gray-600 italic text-lg mb-6 leading-relaxed">
                            "{{ leaders[0].quote }}"
                        </p>

                        <div class="bg-gray-50 rounded-lg p-4 inline-block w-full md:w-auto">
                            <p class="text-sm text-gray-500 font-mono">NIP. {{ leaders[0].nip }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sekretaris & Kabid Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Sekretaris -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                    <div class="h-64 overflow-hidden relative">
                        <img :src="leaders[1].image" alt="Sekretaris"
                            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors"></div>
                    </div>
                    <div class="p-6 text-center">
                        <h3 class="font-bold text-lg text-gray-800 mb-1 leading-snug">{{ leaders[1].name }}</h3>
                        <p class="text-[#5A9CB5] text-xs font-bold uppercase tracking-wider mb-2">{{ leaders[1].position
                            }}</p>
                        <p
                            class="text-xs text-gray-400 font-mono border-t border-gray-100 pt-3 mt-3 inline-block w-full">
                            NIP. {{ leaders[1].nip }}</p>
                    </div>
                </div>

                <!-- Kabids -->
                <div v-for="(kabid, index) in kabids" :key="index"
                    class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                    <div class="h-64 overflow-hidden relative">
                        <img :src="kabid.image" alt="Kabid"
                            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105">
                    </div>
                    <div class="p-6 text-center">
                        <h3 class="font-bold text-lg text-gray-800 mb-1 leading-snug">{{ kabid.name }}</h3>
                        <p class="text-[#5A9CB5] text-xs font-bold uppercase tracking-wider mb-2 leading-tight">{{
                            kabid.position }}</p>
                        <p
                            class="text-xs text-gray-400 font-mono border-t border-gray-100 pt-3 mt-3 inline-block w-full">
                            NIP. {{ kabid.nip }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
