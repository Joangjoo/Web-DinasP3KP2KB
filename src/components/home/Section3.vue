<script setup>
import { ref } from 'vue'

const activeTab = ref('terbaru')

const featuredNews = {
    title: 'Pencanangan Rumah Perlindungan Perempuan (RP3) Rumah Peran RSU Queen Latifa',
    date: '11 Desember 2025',
    author: 'Admin Utama',
    category: 'Berita, Bidang PP',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop', // Placeholder for "Ceremony/Healthcare"
    content: 'Pemerintah Kabupaten Sleman melalui Dinas P3AP2KB meresmikan Rumah Perlindungan Perempuan (RP3) sebagai wujud komitmen dalam memberikan rasa aman dan keadilan bagi perempuan...'
}

const listNews = [
    {
        title: 'Penerimaan Study Tiru dari Kalurahan Donokerto Turi',
        date: '10 Desember 2025',
        author: 'Admin Utama',
        category: 'Berita, Bidang P2HA, Informasi, Informasi Publik, PUSPAGA',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Hasil Seleksi Tahap III (Uji Publik) Calon Anggota Komisi Perlindungan Anak Daerah Sleman Periode 2026–2028',
        date: '8 Desember 2025',
        author: 'Admin Utama',
        category: 'Bidang P2HA, Informasi, Informasi Publik',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    }
]

// Duplicate for left sidebar demo interaction
const sidebarNews = [...listNews, ...listNews]

</script>

<template>
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-8">

            <!-- Section Header -->
            <div class="flex justify-between items-end mb-10 border-b pb-4">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800">Berita Terkini</h2>
                    <div class="h-1 w-20 bg-[#5A9CB5] mt-2 rounded-full"></div>
                </div>
                <button
                    class="hidden md:flex items-center gap-2 text-[#5A9CB5] font-semibold border border-[#5A9CB5] px-4 py-2 rounded-lg hover:bg-[#5A9CB5] hover:text-white transition-all">
                    Lihat Semua Berita
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
            </div>

            <!-- Dashboard Layout Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

                <!-- 1. Left Sidebar (News Feed) -->
                <div class="lg:col-span-3 bg-[#2c3e50] text-white rounded-xl overflow-hidden shadow-lg flex flex-col">
                    <div class="p-4 bg-[#1a252f]">
                        <h3 class="font-bold text-lg">Artikel</h3>
                    </div>
                    <div class="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-2">
                        <div v-for="(item, i) in sidebarNews" :key="i"
                            class="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition cursor-pointer group">
                            <span class="text-xs text-gray-300 block mb-1">Artikel &bull; {{ item.date }}</span>
                            <h4 class="text-sm font-semibold leading-tight group-hover:text-blue-200 line-clamp-3">
                                {{ item.title }}
                            </h4>
                            <div class="mt-2 h-0.5 w-full bg-white/10 group-hover:bg-blue-400 transition-all"></div>
                        </div>
                    </div>
                </div>

                <!-- 2. Center (Featured Item) -->
                <div class="lg:col-span-5 relative group overflow-hidden rounded-xl shadow-lg h-[400px] lg:h-auto">
                    <img :src="featuredNews.image" alt="Featured"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                        <span
                            class="inline-block bg-[#5A9CB5] text-white text-xs font-bold px-2 py-1 rounded mb-3 w-fit">
                            PEMERINTAHAN
                        </span>
                        <h3 class="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                            {{ featuredNews.title.toUpperCase() }}
                        </h3>
                        <div class="flex items-center text-gray-300 text-xs md:text-sm mb-4 space-x-4">
                            <span class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                                {{ featuredNews.date }}
                            </span>
                            <span class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                                    </path>
                                </svg>
                                Penulis: {{ featuredNews.author }}
                            </span>
                        </div>
                        <button
                            class="border border-white/50 text-white hover:bg-[#5A9CB5] hover:border-[#5A9CB5] px-5 py-2 rounded text-sm transition-all w-fit">
                            Baca Selengkapnya
                        </button>
                    </div>
                </div>

                <!-- 3. Right Sidebar (Recent/Popular) -->
                <div class="lg:col-span-4 flex flex-col">
                    <!-- Tabs -->
                    <div class="flex border-b border-gray-200 mb-4">
                        <button @click="activeTab = 'terbaru'"
                            class="flex-1 py-3 text-sm font-bold text-center border-b-2 transition-colors"
                            :class="activeTab === 'terbaru' ? 'border-[#5A9CB5] text-[#5A9CB5]' : 'border-transparent text-gray-400 hover:text-gray-600'">
                            TERBARU
                        </button>
                        <button @click="activeTab = 'terpopuler'"
                            class="flex-1 py-3 text-sm font-bold text-center border-b-2 transition-colors"
                            :class="activeTab === 'terpopuler' ? 'border-[#5A9CB5] text-[#5A9CB5]' : 'border-transparent text-gray-400 hover:text-gray-600'">
                            TERPOPULER
                        </button>
                    </div>

                    <!-- List Content -->
                    <div class="flex-1 overflow-y-auto space-y-6 pr-2">
                        <template v-if="activeTab === 'terbaru'">
                            <div v-for="(item, index) in listNews" :key="index" class="space-y-2 group cursor-pointer">
                                <h4
                                    class="text-md font-semibold text-gray-800 leading-snug group-hover:text-[#5A9CB5] transition-colors">
                                    {{ item.title }}
                                </h4>
                                <div class="text-xs text-gray-500 flex items-center gap-2">
                                    <span class="text-[#5A9CB5] font-medium truncate max-w-[150px]">{{ item.category
                                        }}</span>
                                    <span>|</span>
                                    <span>{{ item.date }}</span>
                                </div>
                                <hr class="border-gray-100 mt-2" />
                            </div>
                            <!-- Repeat for visual fill -->
                            <div class="space-y-2 group cursor-pointer opacity-75">
                                <h4
                                    class="text-md font-semibold text-gray-800 leading-snug group-hover:text-[#5A9CB5] transition-colors">
                                    Aset Daerah Diperkuat, Kualitas Layanan Publik Jabar Langsung Melesat
                                </h4>
                                <div class="text-xs text-gray-500 flex items-center gap-2">
                                    <span class="text-[#5A9CB5] font-medium">Pemerintahan</span>
                                    <span>|</span>
                                    <span>10 Desember 2025</span>
                                </div>
                                <hr class="border-gray-100 mt-2" />
                            </div>
                        </template>
                        <div v-else class="flex items-center justify-center h-40 text-gray-400 text-sm">
                            Belum ada berita populer saat ini.
                        </div>
                    </div>
                </div>

            </div>

            <div class="mt-8 text-center md:hidden">
                <button
                    class="inline-flex items-center gap-2 text-[#5A9CB5] font-semibold border border-[#5A9CB5] px-6 py-2 rounded-lg hover:bg-[#5A9CB5] hover:text-white transition-all">
                    Lihat Semua Berita
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* Hide scrollbar for layout cleanliness but keep functionality */
.overflow-y-auto {
    scrollbar-width: thin;
}
</style>
