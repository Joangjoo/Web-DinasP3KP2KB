<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Building/Office
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Meeting/People
    // 'https://images.unsplash.com/photo-1541819777-6c2e366b44a4?q=80&w=2072&auto=format&fit=crop', // Landscape/Structure
]

let intervalId

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
    intervalId = setInterval(nextSlide, 5000) // Change every 5 seconds
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <section class="relative w-full h-[110vh] overflow-hidden">
        <!-- Slider Backgrounds -->
        <div v-for="(slide, index) in slides" :key="index"
            class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            :class="index === currentSlide ? 'opacity-100' : 'opacity-0'">
            <img :src="slide" alt="Slider Image" class="w-full h-full object-cover" />
            <!-- Dark Overlay for Readability -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>

        <!-- Content Overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
            <div class="max-w-5xl mx-auto space-y-8">
                <h1
                    class="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg fade-in-up">
                    Selamat Datang di Portal Resmi <br />
                    <span class="text-2xl md:text-4xl lg:text-4xl font-semibold mt-2 block opacity-90">
                        Dinas Pemberdayaan Perempuan dan Perlindungan Anak, <br />
                        Pengendalian Penduduk dan Keluarga Berencana <br />
                        Kabupaten Sleman
                    </span>
                </h1>

                <p class="text-white/90 text-lg md:text-xl font-medium tracking-wide">
                    Temukan layanan publik dari PEMDA D.I Yogyakarta
                </p>

                
            </div>
        </div>

        <!-- Bottom Wave -->
        <div class="absolute bottom-0 left-0 w-full leading-none overflow-hidden rotate-180 z-20">
            <svg class="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="#F9FAFB" class="fill-gray-50"></path>
            </svg>
        </div>
    </section>
</template>

<style scoped>
.fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
