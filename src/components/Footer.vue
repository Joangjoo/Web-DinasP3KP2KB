<script setup>
// No script needed for static footer
</script>

<template>
    <footer class="relative bg-[#5A9CB5] text-white pt-20 pb-10 mt-20">
        <!-- Top Wave Decoration (White to Blue) -->
        <div class="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform -translate-y-[99%]">
            <svg class="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="#5A9CB5"></path>
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                <!-- Column 1: Contact Info -->
                <div class="space-y-4">
                    <h3 class="font-bold text-lg uppercase tracking-wider mb-2">Hubungi Kami</h3>
                    <h4 class="font-bold text-md leading-tight">
                        Dinas Pemberdayaan Perempuan dan Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana
                        Kab. Sleman
                    </h4>
                    <p class="text-sm opacity-90 leading-relaxed">
                        Jalan Rorojonggrang No.4, Beran Tridadi, Kabupaten Sleman,<br>
                        Daerah Istimewa Yogyakarta 55511
                    </p>
                    <div class="text-sm space-y-1 opacity-90">
                        <p><strong>Telp:</strong> (0274) 868457</p>
                        <p><strong>Email:</strong> dinp3ap2kb@slemankab.go.id</p>
                    </div>
                </div>

                <!-- Column 2: Map -->
                <div>
                    <div class="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative shadow-md">
                        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?q=Dinas%20Pemberdayaan%20Perempuan%20dan%20Perlindungan%20Anak%20Kabupaten%20Sleman&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>

                <!-- Column 3: Links -->
                <div class="space-y-4">
                    <h3 class="font-bold text-lg uppercase tracking-wider mb-2">Tautan Terkait</h3>
                    <ul class="space-y-2 text-sm font-medium">
                        <li>
                            <a href="#"
                                class="hover:text-blue-200 hover:translate-x-1 inline-block transition-transform flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-white rounded-full"></span> Kebijakan Privasi
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:text-blue-200 hover:translate-x-1 inline-block transition-transform flex items-center gap-2">
                                <span class="w-1.5 h-1.5 bg-white rounded-full"></span> Whistle Blower
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Banners/Logos -->
                <div class="space-y-6">
                    <div>
                        <h5 class="font-bold text-xs uppercase mb-2 opacity-80">Website KLA Sleman</h5>
                        <div
                            class="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer w-fit">
                            <!-- Placeholder Logo -->
                            <div class="flex items-center gap-2">
                                <div
                                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#5A9CB5] font-bold text-xs">
                                    KLA</div>
                                <span class="text-[#5A9CB5] font-bold text-xs">KABUPATEN<br>LAYAK ANAK</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="font-bold text-xs uppercase mb-2 opacity-80">Bangga Kencana</h5>
                        <div
                            class="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer w-fit">
                            <div class="flex items-center gap-2">
                                <div
                                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#5A9CB5] font-bold text-xs">
                                    BK</div>
                                <span class="text-[#5A9CB5] font-bold text-xs">BANGGA KENCANA<br>Kabupaten Sleman</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="font-bold text-xs uppercase mb-2 opacity-80">Pemberdayaan Perempuan</h5>
                        <div
                            class="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer w-fit">
                            <div class="flex items-center gap-2">
                                <div
                                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#5A9CB5] font-bold text-xs">
                                    PP</div>
                                <span class="text-[#5A9CB5] font-bold text-xs">PEMBERDAYAAN<br>PEREMPUAN</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="border-t border-white/20 pt-8 text-center text-sm opacity-80">
                <p>&copy; 2024 Dinas P3AP2KB Kabupaten Sleman. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* No extra styles needed */
</style>
