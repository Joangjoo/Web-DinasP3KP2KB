<script setup>
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
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Formulir Permohonan Informasi</h1>
                <p class="text-lg opacity-90">Silahkan klik untuk mengunduh</p>
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

        <div class="max-w-4xl mx-auto px-4 text-center">
            <div class="space-y-6">
                <!-- Item 1 -->
                <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div class="mb-4">
                        <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">
                        <a href="#" class="hover:text-[#5A9CB5] transition-colors">Link Formulir Permohonan Informasi
                            Publik</a>
                    </h3>
                    <p class="text-gray-600">
                        link ini memuat dokumen Formulir Permohonan Informasi Publik dalam format PDF yang bisa di unduh
                    </p>
                </div>

                <!-- Item 2 -->
                <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                    <div class="mb-4">
                        <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">
                        <a href="#" class="hover:text-[#5A9CB5] transition-colors">Link Formulir Keberatan Permohonan
                            Informasi Publik</a>
                    </h3>
                    <p class="text-gray-600">
                        link ini memuat dokumen Formulir Keberatan Permohonan Informasi Publik dalam format PDF yang
                        bisa di unduh
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
