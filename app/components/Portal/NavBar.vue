<template>
    <header
        class="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
        <div
            class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"
        >
            <!-- Smaller Logo -->
            <a href="/" class="flex items-center space-x-2 group">
                <img
                    src="/images/kroma_png_black.png"
                    alt="Kroma Logo"
                    class="w-24 h-auto transition-transform group-hover:scale-105"
                />
            </a>

            <!-- Desktop Navigation -->
            <nav
                class="hidden md:flex items-center space-x-6 font-medium text-gray-700"
            >
                <a
                    v-for="item in simpleNav"
                    :key="item.label"
                    :href="item.href"
                    class="hover:text-red-600 transition"
                >
                    {{ item.label }}
                </a>
            </nav>

            <!-- Mobile Button -->
            <button
                class="md:hidden focus:outline-none"
                @click="open = !open"
                aria-label="Toggle Menu"
            >
                <svg
                    class="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div
            :class="[
                'md:hidden bg-white border-t border-gray-200',
                open ? 'block' : 'hidden',
            ]"
        >
            <ul class="flex flex-col px-5 py-3 text-gray-700 space-y-2">
                <li v-for="item in simpleNav" :key="item.label">
                    <a
                        :href="item.href"
                        class="block px-3 py-2 rounded hover:bg-gray-100 hover:text-red-600 transition"
                    >
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const simpleNav = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Store", href: "/store" },
    { label: "Contact", href: "/contact" },
];
</script>
