<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navbarMenu } from '../data/navbarMenu'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const activeDropdown = ref(null)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeMobileDropdown = ref(null)

const showDropdown = (index) => {
  activeDropdown.value = index
}

const hideDropdown = () => {
  activeDropdown.value = null
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleMobileDropdown = (index) => {
  if (activeMobileDropdown.value === index) {
    activeMobileDropdown.value = null
  } else {
    activeMobileDropdown.value = index
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled || isMobileMenuOpen ? 'bg-[#5A9CB5] shadow-md py-2' : 'bg-transparent py-4']">
    <div class="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-white">

      <!-- Brand / Logo -->
      <div class="flex items-center gap-3 z-50 relative">
        <!-- Placeholder for logo if needed, for now just text -->
        <!-- <img src="/logo.png" alt="Logo" class="h-10 w-10" /> -->
        <RouterLink to="/" class="flex flex-col">
          <span class="font-bold text-lg leading-tight tracking-wide">Dinas P3AP2KB</span>
          <span class="text-xs opacity-90 tracking-wider">KABUPATEN SLEMAN</span>
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden z-50 p-1 rounded-md hover:bg-white/10 transition-colors">
        <Bars3Icon v-if="!isMobileMenuOpen" class="h-8 w-8 text-white" />
        <XMarkIcon v-else class="h-8 w-8 text-white" />
      </button>

      <!-- Desktop Menu Items -->
      <div class="hidden md:flex items-center gap-6">
        <div v-for="(item, index) in navbarMenu" :key="index" class="relative group" @mouseenter="showDropdown(index)"
          @mouseleave="hideDropdown">
          <!-- Menu Item with Link -->
          <template v-if="!item.children">
            <RouterLink :to="item.path"
              class="text-sm font-medium transition-colors duration-300 hover:text-blue-200 relative py-2">
              {{ item.name }}
            </RouterLink>
          </template>

          <!-- Menu Item with Dropdown -->
          <template v-else>
            <button
              class="text-sm font-medium transition-colors duration-300 hover:text-blue-200 flex items-center gap-1 cursor-default py-2"
              :class="{ 'text-blue-200': activeDropdown === index }">
              {{ item.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === index }" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div v-show="activeDropdown === index"
              class="absolute top-full right-0 mt-0 pt-2 w-64 origin-top-right transition-all duration-200">
              <div class="bg-white rounded-lg shadow-xl overflow-hidden py-1">
                <template v-for="(child, childIndex) in item.children" :key="childIndex">
                  <RouterLink v-if="!child.children" :to="child.path"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#5A9CB5] transition-colors">
                    {{ child.name }}
                  </RouterLink>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Desktop Right Side Actions -->
      <div class="hidden md:flex items-center gap-3">
        <button class="bg-[#4a8a9e] hover:bg-[#3d7587] text-white px-4 py-1.5 rounded text-sm transition font-medium">
          Masuk
        </button>
        <!-- Language selector placeholder -->
        <div class="flex items-center gap-1 text-sm cursor-pointer hover:text-yellow-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Indonesia</span>
        </div>
      </div>

    </div>

    <!-- Mobile Menu Overlay -->
    <div v-show="isMobileMenuOpen"
      class="fixed inset-0 bg-[#5A9CB5] z-40 pt-24 pb-8 px-6 overflow-y-auto md:hidden flex flex-col">
      <div class="flex-1 space-y-4">
        <div v-for="(item, index) in navbarMenu" :key="index" class="border-b border-white/20 pb-4 last:border-0">
          <!-- Mobile Link -->
          <RouterLink v-if="!item.children" :to="item.path" @click="isMobileMenuOpen = false"
            class="block text-xl font-semibold text-white hover:text-blue-200">
            {{ item.name }}
          </RouterLink>

          <!-- Mobile Dropdown -->
          <div v-else>
            <button @click="toggleMobileDropdown(index)"
              class="flex items-center justify-between w-full text-xl font-semibold text-white">
              {{ item.name }}
              <ChevronDownIcon :class="{ 'rotate-180': activeMobileDropdown === index }"
                class="h-6 w-6 transition-transform" />
            </button>
            <div v-show="activeMobileDropdown === index" class="mt-3 space-y-2 pl-4">
              <RouterLink v-for="(child, cIdx) in item.children" :key="cIdx" :to="child.path"
                @click="isMobileMenuOpen = false" class="block text-white/80 hover:text-white py-1">
                {{ child.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Actions -->
      <div class="mt-8 pt-8 border-t border-white/20">
        <button class="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-lg mb-4">
          Masuk
        </button>
        <div class="flex items-center justify-center gap-2 text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Indonesia</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Prevent scrolling when mobile menu is open */
:global(body.mobile-menu-open) {
  overflow: hidden;
}
</style>