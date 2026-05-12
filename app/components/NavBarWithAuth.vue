<template>
  <header class="fixed top-0 z-50 w-full shadow-sm transition-all duration-300 bg-white/90 backdrop-blur-md">
    <div class="flex justify-between items-center py-3 px-6 mx-auto max-w-7xl md:py-4">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2 group">
        <img src="/images/kroma_png_red.png" alt="Kroma Logo"
          class="w-28 h-auto transition-transform duration-300 sm:w-36 md:w-40 group-hover:scale-105">
      </a>

      <!-- Right side: Inscribirte + Acceder (Desktop) -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-black text-sm font-semibold tracking-wide transition">
          INSCRIBIRTE
        </a>
        <a href="#"
          class="px-5 py-2 border border-red-600 rounded-full font-semibold text-red-600 hover:bg-red-50 transition text-sm">
          ACCEDER
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="flex items-center text-gray-700 md:hidden focus:outline-none" aria-label="Toggle menu"
        :aria-expanded="open ? 'true' : 'false'" @click="open = !open">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['md:hidden border-t border-gray-200 bg-white', open ? 'block' : 'hidden']">
      <div class="flex flex-col p-4 space-y-3">
        <a href="#"
          class="block w-full text-center px-6 py-2 border border-gray-400 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition text-sm">
          INSCRIBIRTE
        </a>
        <a href="#"
          class="block w-full text-center px-6 py-2 border border-red-600 rounded-full font-semibold text-red-600 hover:bg-red-50 transition text-sm">
          ACCEDER
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
</script>
