<script setup>
// No script needed for static content
</script>

<template>
    <div class="min-h-screen bg-gray-50 pb-20">
        <!-- Hero Header -->
        <div class="bg-[#5A9CB5] text-white pt-32 pb-20 mb-12 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <!-- Decorative pattern -->
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Sejarah Dinas P3AP2KB</h1>
                <p class="text-lg opacity-90">Perjalanan dan Transformasi Organisasi</p>
            </div>
            <!-- Bottom Wave -->
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
            <!-- Introduction Card -->
            <div class="bg-white rounded-2xl shadow-sm p-8 mb-12 border-l-4 border-[#5A9CB5]">
                <p class="text-gray-700 leading-relaxed text-lg">
                    <span class="font-bold text-[#5A9CB5]">Dinas Pemberdayaan Perempuan dan Perlindungan Anak,
                        Pengendalian Penduduk dan Keluarga Berencana (Dinas P3AP2KB) Kabupaten Sleman</span> berdiri
                    berdasarkan <span class="font-semibold">Peraturan Bupati Sleman Nomor 72 Tahun 2016</span> tentang
                    Kedudukan, Susunan Organisasi, Tugas dan Fungsi, serta tata kerja Dinas Pemberdayaan Perempuan dan
                    Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana.
                </p>
            </div>

            <!-- Timeline Section -->
            <div class="relative border-l-2 border-blue-200 ml-4 md:ml-6 space-y-12">

                <!-- 2016 - Current -->
                <div class="relative pl-8 md:pl-12">
                    <div
                        class="absolute -left-[9px] top-0 w-5 h-5 bg-[#5A9CB5] rounded-full border-4 border-white shadow-sm">
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span
                            class="inline-block bg-blue-100 text-[#5A9CB5] text-xs font-bold px-2 py-1 rounded mb-2">2016
                            - Sekarang</span>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Dinas P3AP2KB</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Organisasi ini ditetapkan sebagai Dinas Pemberdayaan Perempuan dan Perlindungan Anak,
                            Pengendalian Penduduk dan Keluarga Berencana berdasarkan Peraturan Bupati Sleman Nomor 72
                            Tahun 2016.
                        </p>
                    </div>
                </div>

                <!-- 2011 -->
                <div class="relative pl-8 md:pl-12">
                    <div
                        class="absolute -left-[9px] top-0 w-5 h-5 bg-blue-300 rounded-full border-4 border-white shadow-sm">
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span
                            class="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-2">2011</span>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Penambahan Bidang Pemberdayaan Masyarakat</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Badan Keluarga Berencana, Pemberdayaan Perempuan dan Perlindungan Anak (BKBPPPA) mengalami
                            perubahan dengan adanya penambahan bidang baru yaitu <strong>Bidang Pemberdayaan
                                Masyarakat</strong>.
                        </p>
                        <p class="text-gray-600 leading-relaxed mt-2 bg-blue-50 p-4 rounded-lg text-sm">
                            Sejak saat itu, badan ini mengampu 3 urusan kompleks:
                        <ul class="list-disc list-inside mt-1 ml-2 font-semibold text-[#5A9CB5]">
                            <li>Urusan Keluarga Berencana</li>
                            <li>Urusan Pemberdayaan Perempuan dan Perlindungan Anak</li>
                            <li>Urusan Pemberdayaan Masyarakat</li>
                        </ul>
                        </p>
                    </div>
                </div>

                <!-- 2010 -->
                <div class="relative pl-8 md:pl-12">
                    <div
                        class="absolute -left-[9px] top-0 w-5 h-5 bg-blue-300 rounded-full border-4 border-white shadow-sm">
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span
                            class="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-2">2010</span>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Penggabungan Menjadi SKPD Baru</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Kedua bidang (Bidang KB dan Bidang PPPA) bergabung dalam satu SKPD baru yaitu <strong>Badan
                                Keluarga Berencana, Pemberdayaan Perempuan dan Perlindungan Anak</strong>.
                        </p>
                    </div>
                </div>

                <!-- 2009 (Pre-August) -->
                <div class="relative pl-8 md:pl-12">
                    <div
                        class="absolute -left-[9px] top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-sm">
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span
                            class="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-2">Sebelum
                            4 Agustus 2009</span>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Terpisah dalam Dinas Berbeda</h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            Sebelum terbentuknya badan gabungan, fungsi-fungsi ini berada di unit kerja yang berbeda:
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="border border-gray-100 p-3 rounded-lg bg-gray-50">
                                <h4 class="font-bold text-sm text-gray-700">Bidang Keluarga Berencana</h4>
                                <p class="text-xs text-gray-500 mt-1">Berada pada Dinas Tenaga Kerja, Sosial dan
                                    Keluarga Berencana.</p>
                            </div>
                            <div class="border border-gray-100 p-3 rounded-lg bg-gray-50">
                                <h4 class="font-bold text-sm text-gray-700">Pemberdayaan Perempuan & Perlindungan Anak
                                </h4>
                                <p class="text-xs text-gray-500 mt-1">Berada di Bagian Kesejahteraan Rakyat Sekretariat
                                    Daerah.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Foundation (2009) -->
                <div class="relative pl-8 md:pl-12">
                    <div
                        class="absolute -left-[9px] top-0 w-5 h-5 bg-blue-300 rounded-full border-4 border-white shadow-sm">
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span class="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-2">4
                            Agustus 2009</span>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Dasar Pembentukan Awal</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Berdasarkan Peraturan Daerah Kabupaten Sleman Nomor 9 Tahun 2009, terbentuklah <strong>Badan
                                Keluarga Berencana, Pemberdayaan Perempuan dan Perlindungan Anak Kabupaten
                                Sleman</strong>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
