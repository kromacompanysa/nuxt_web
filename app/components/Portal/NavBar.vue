<template>
    <header class="fixed top-0 w-full z-50 bg-white shadow-sm backdrop-blur-md">
        <div
            class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3"
        >
            <!-- LOGO -->
            <a href="/" class="flex items-center">
                <img
                    src="/images/kroma_png_black.png"
                    alt="Kroma Logo"
                    class="h-7 sm:h-8 w-auto"
                />
            </a>

            <!-- DESKTOP BUTTONS -->
            <div class="hidden sm:flex items-center space-x-6">
                <a
                    href="/#"
                    class="text-gray-600 hover:text-black text-sm font-medium tracking-wide"
                >
                    INSCRIBIRTE
                </a>

                <a
                    href="/#"
                    class="px-5 py-2 border border-gray-400 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition text-sm"
                >
                    ACCEDER
                </a>
            </div>

            <!-- MOBILE BUTTON (Hamburger) -->
            <button class="sm:hidden text-gray-700" @click="open = !open">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>

        <!-- MOBILE MENU -->
        <div
            v-if="open"
            class="sm:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-2"
        >
            <!-- SIGN IN BUTTON (mobile) -->
            <a
                href="/#"
                class="block w-full text-center px-6 py-1 border border-gray-400 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition text-sm"
            >
                INSCRIBIRTE
            </a>

            <!-- GET STARTED NOW BUTTON (mobile) -->
            <a
                href="/#"
                class="block w-full text-center px-6 py-1 border border-gray-400 rounded-full font-semibold text-gray-700 hover:bg-gray-100 transition text-sm"
            >
                ACCEDER
            </a>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
</script>
