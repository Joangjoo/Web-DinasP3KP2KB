<script setup>
// Static data for the org chart
const kepalaDinas = {
    name: 'Wildan Solichin, S.IP, MT',
    title: 'KEPALA DINAS'
}

const sekretaris = {
    name: 'Dra. Sri Budiyantiningsih, M.Si',
    title: 'SEKRETARIS'
}

const subbags = [
    { name: 'Helmi Arifianto, S.IP, M.Si', title: 'KEPALA SUBBAGIAN UMUM' },
    { name: 'Rr. Retno Dwiastuti, SE, MM', title: 'KEPALA SUBBAGIAN KEUANGAN' },
    { name: 'Salis Finnahari, S.IP, MPA', title: 'KEPALA SUBBAGIAN PERENCANAAN & EVALUASI' }
]

const bidangs = [
    { name: 'Mahmudah Arfiyati, S.KM, M.H.Kes', title: 'KEPALA BIDANG PEMBERDAYAAN PEREMPUAN' },
    { name: 'Dra. Ambar Sulistyaningrum', title: 'KEPALA BIDANG PERLINDUNGAN & PEMENUHAN HAK ANAK' },
    { name: 'Dra. Dwi Wiharyanti, M.Si', title: 'KEPALA BIDANG PENGENDALIAN PENDUDUK & KELUARGA BERENCANA' },
    { name: 'Muhammad Daroji, S.KM, MPH', title: 'KEPALA BIDANG KETAHANAN & KESEJAHTERAAN KELUARGA' }
]

const uptd = {
    name: 'R.A Prima Walani, S.Psi, M.Kes., Psi.',
    title: 'KEPALA UNIT PELAKSANA TEKNIS DAERAH PERLINDUNGAN PEREMPUAN & ANAK'
}
</script>

<template>
    <div class="min-h-screen bg-gray-50 pb-20">
        <!-- Hero Header (Consistent) -->
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Pejabat Struktural</h1>
                <p class="text-lg opacity-90">Bagan Susunan Organisasi Dinas P3AP2KB</p>
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

        <!-- Org Chart Container -->
        <div class="max-w-screen-2xl mx-auto px-4 overflow-hidden pb-20">
            <div
                class="min-w-[1200px] flex flex-col items-center pt-8 bg-white/50 rounded-3xl border border-blue-50 relative">

                <!-- LEVEL 1: KEPALA DINAS (Root) -->
                <div class="relative z-20 mb-8">
                    <div class="org-card bg-white border-2 border-gray-800 shadow-md p-4 w-72 rounded-sm relative z-20">
                        <h3 class="font-bold text-gray-900 border-b border-gray-300 pb-2 mb-2 uppercase">{{
                            kepalaDinas.title }}</h3>
                        <p class="text-gray-700 font-medium">{{ kepalaDinas.name }}</p>
                    </div>
                    <!-- Solid Stem Down from KD -->
                    <div class="absolute left-1/2 -ml-0.5 top-full h-8 w-1 bg-gray-800"></div>
                </div>

                <!-- SPINE & SEKRETARIS ROW -->
                <div class="w-full relative h-[350px]">

                    <!-- CENTRAL SPINE ARCHITECTURE -->
                    <!-- 1. Top Junction (KD enters here) -->
                    <!-- 2. Solid Line going Right (to Sek) & Down (Transition) -->

                    <!-- Horizontal Solid Line to Right (Sekretaris) -->
                    <!-- Starts from Center, goes Right -->
                    <div class="absolute top-0 left-1/2 w-[350px] h-1 bg-gray-800 z-10"></div>

                    <!-- Vertical Solid Drop to Sekretaris -->
                    <!-- At end of horizontal line -->
                    <div class="absolute top-0 left-[calc(50%+350px-2px)] h-8 w-1 bg-gray-800 z-10"></div>

                    <!-- Vertical Dashed Spine Downwards from Junction -->
                    <!-- Starts exactly where KD solid line ended (top: 0 of this container) -->
                    <div
                        class="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-0 border-l-2 border-dashed border-gray-800 z-0">
                    </div>


                    <!-- SEKRETARIS CARD -->
                    <div class="absolute top-[32px] left-[calc(50%+350px)] -translate-x-1/2 z-20">
                        <div class="org-card bg-white border-2 border-gray-800 shadow-md p-4 w-72 rounded-sm">
                            <h3 class="font-bold text-gray-900 border-b border-gray-300 pb-2 mb-2 uppercase">{{
                                sekretaris.title }}</h3>
                            <p class="text-gray-700 font-medium">{{ sekretaris.name }}</p>
                        </div>

                        <!-- Line to Subbags -->
                        <div class="absolute left-1/2 -ml-0.5 top-full h-8 w-1 bg-gray-800"></div>
                    </div>

                    <!-- SUBBAGS ROW (Under Sekretaris) -->
                    <div class="absolute top-[170px] left-[calc(50%+350px)] -translate-x-1/2 w-[850px]">
                        <!-- Bracket Line -->
                        <div class="absolute top-0 left-[20px] right-[20px] h-4 border-t-2 border-gray-800"></div>
                        <!-- Vertical connectors -->
                        <div class="absolute top-0 left-[20px] h-4 w-1 bg-gray-800"></div> <!-- Left child -->
                        <div class="absolute top-0 left-1/2 -ml-0.5 h-4 w-1 bg-gray-800"></div> <!-- Middle child -->
                        <div class="absolute top-0 right-[20px] h-4 w-1 bg-gray-800"></div> <!-- Right child -->

                        <!-- Cards -->
                        <div class="flex justify-between mt-4">
                            <div v-for="sub in subbags" :key="sub.name"
                                class="org-card bg-white border-2 border-gray-800 shadow-md p-3 w-64 rounded-sm">
                                <h3
                                    class="font-bold text-xs uppercase text-gray-900 border-b border-gray-300 pb-1 mb-1 min-h-[32px] flex items-center justify-center">
                                    {{ sub.title }}</h3>
                                <p class="text-sm text-gray-700">{{ sub.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LEVEL 3: BIDANGS (Crossed by Dashed Spine) -->
                <div class="w-full relative mt-16 mb-8">
                    <!-- Dashed Backbone continues through this section (handled by global layout or per-section?) -->
                    <!-- Let's continue the spine locally to ensure height match -->
                    <div
                        class="absolute -top-16 bottom-0 left-1/2 -ml-0.5 w-0 border-l-2 border-dashed border-gray-800 z-0">
                    </div>

                    <!-- Horizontal Dashed Line -->
                    <div class="w-[88%] mx-auto border-t-2 border-dashed border-gray-800 relative h-8 mt-8">
                        <!-- Vertical connectors to cards -->
                        <div class="absolute top-0 left-0 w-0 h-8 border-l-2 border-dashed border-gray-800"></div>
                        <div class="absolute top-0 left-[33%] w-0 h-8 border-l-2 border-dashed border-gray-800"></div>
                        <!-- Center is spine -->
                        <div class="absolute top-0 right-[33%] w-0 h-8 border-l-2 border-dashed border-gray-800"></div>
                        <div class="absolute top-0 right-0 w-0 h-8 border-l-2 border-dashed border-gray-800"></div>
                    </div>

                    <!-- Bidangs Row -->
                    <div class="flex justify-between w-[90%] mx-auto -mt-1 gap-4">
                        <div v-for="bidang in bidangs" :key="bidang.name"
                            class="org-card bg-white border-2 border-gray-800 shadow-md p-4 w-64 rounded-sm z-10">
                            <h3
                                class="font-bold text-xs uppercase text-gray-900 border-b border-gray-300 pb-2 mb-2 min-h-[48px] flex items-center justify-center">
                                {{ bidang.title }}</h3>
                            <p class="text-sm text-gray-700">{{ bidang.name }}</p>
                        </div>
                    </div>
                </div>

                <!-- LEVEL 4: UPTD (Bottom of Spine) -->
                <div class="relative z-10 pt-12">
                    <!-- Spine Connector -->
                    <div
                        class="absolute -top-12 bottom-full left-1/2 -ml-0.5 w-0 border-l-2 border-dashed border-gray-800 z-0">
                    </div>
                    <!-- Vertical Dash to Card -->
                    <div class="absolute -top-12 left-1/2 -ml-0.5 h-12 w-0 border-l-2 border-dashed border-gray-800">
                    </div>

                    <div class="org-card bg-white border-2 border-gray-800 shadow-md p-4 w-80 rounded-sm relative z-20">
                        <h3 class="font-bold text-gray-900 border-b border-gray-300 pb-2 mb-2 text-sm uppercase">{{
                            uptd.title }}</h3>
                        <p class="text-gray-700 font-medium">{{ uptd.name }}</p>
                    </div>
                </div>

                <div class="h-10"></div>
            </div>
            <!-- Legend -->
            <div
                class="max-w-xs mt-8 mx-auto md:mx-0 p-4 bg-white border border-gray-300 rounded-lg text-sm shadow-sm relative z-20">
                <h4 class="font-bold mb-2">Keterangan:</h4>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-1 bg-gray-800"></div>
                    <span>Garis Komando</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="w-8 h-1 border-t-2 border-dashed border-gray-800"></div>
                    <span>Garis Koordinasi</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.org-card {
    transition: all 0.3s ease;
}

.org-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-color: #5A9CB5;
}
</style>
