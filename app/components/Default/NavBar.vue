<template>
    <header
        class="fixed top-0 z-50 w-full shadow-sm transition-all duration-300 bg-white/90 backdrop-blur-md"
    >
        <div
            class="flex justify-between items-center py-3 px-6 mx-auto max-w-7xl md:py-4"
        >
            <!-- Logo -->
            <a href="/" class="flex items-center space-x-2 group">
                <img
                    src="/images/kroma_png_black.png"
                    alt="Kroma Logo"
                    class="w-28 h-auto transition-transform duration-300 sm:w-36 md:w-40 group-hover:scale-105"
                />
            </a>

            <!-- DESKTOP NAV -->
            <nav
                class="hidden md:flex items-center space-x-8 font-medium text-black"
            >
                <template v-for="item in navItems" :key="item.label">
                    <!-- Regular Link -->
                    <a
                        v-if="item.type === 'link'"
                        :href="item.href"
                        class="transition-colors hover:text-red-600"
                    >
                        {{ item.label }}
                    </a>

                    <!-- Dropdown -->
                    <div
                        v-else-if="item.type === 'dropdown'"
                        class="relative group"
                    >
                        <div class="flex items-center space-x-1">
                            <!-- Texto que navega -->
                            <a
                                :href="item.href"
                                class="transition hover:text-red-600"
                            >
                                {{ item.label }}
                            </a>

                            <!-- Botón flecha solo para abrir el menú -->
                            <button
                                class="transition hover:text-red-600 cursor-pointer"
                                @click.stop
                            >
                                <svg
                                    class="w-4 h-4 transition transform group-hover:rotate-180"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.25 4.55a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!-- DROPDOWN MENU -->
                        <div
                            class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 before:absolute before:-top-3 before:left-0 before:w-full before:h-6 before:bg-transparent before:content-['']"
                        >
                            <ul class="py-2">
                                <li v-for="sub in item.items" :key="sub.label">
                                    <a
                                        :href="sub.href"
                                        class="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 transition"
                                    >
                                        {{ sub.label }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Cart -->
                    <a
                        v-else-if="item.type === 'cart'"
                        :href="item.href"
                        class="flex relative items-center transition-colors hover:text-red-600"
                    >
                        <img
                            src="/icons/cart4.svg"
                            class="w-5 h-5"
                            alt="Cart"
                        />

                        <span
                            class="absolute -top-2 -right-4 px-1.5 py-0.5 text-xs bg-red-600 text-white rounded-full"
                        >
                            {{ item.badge }}
                        </span>
                    </a>
                </template>
            </nav>

            <!-- MOBILE MENU BUTTON -->
            <button
                class="flex items-center text-gray-700 md:hidden focus:outline-none"
                @click="open = !open"
                aria-label="Toggle menu"
                :aria-expanded="open ? 'true' : 'false'"
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

        <!-- MOBILE NAV -->
        <div
            :class="[
                'md:hidden border-t border-gray-200 bg-white',
                open ? 'block' : 'hidden',
            ]"
        >
            <ul class="flex flex-col p-4 space-y-2 font-medium text-gray-700">
                <li v-for="item in navItems" :key="item.label">
                    <!-- Link -->
                    <a
                        v-if="item.type === 'link'"
                        :href="item.href"
                        class="block py-2 px-4 rounded-md transition hover:text-blue-600 hover:bg-gray-100"
                    >
                        {{ item.label }}
                    </a>

                    <!-- Dropdown -->
                    <details
                        v-else-if="item.type === 'dropdown'"
                        class="pt-2 border-t border-gray-200 group"
                    >
                        <summary
                            class="flex justify-between items-center py-2 px-4 rounded-md transition cursor-pointer hover:text-blue-600 hover:bg-gray-100"
                        >
                            {{ item.label }}

                            <svg
                                class="ml-2 w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.25 4.55a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </summary>

                        <ul
                            class="py-2 pl-6 pr-2 space-y-1 bg-gray-50 rounded-md"
                        >
                            <li v-for="sub in item.items" :key="sub.label">
                                <a
                                    :href="sub.href"
                                    class="block py-1 px-2 rounded transition hover:text-blue-600 hover:bg-gray-100"
                                >
                                    {{ sub.label }}
                                </a>
                            </li>
                        </ul>
                    </details>

                    <!-- Cart -->
                    <a
                        v-else-if="item.type === 'cart'"
                        :href="item.href"
                        class="flex gap-2 items-center py-2 px-4 rounded-md transition hover:text-blue-600 hover:bg-gray-100"
                    >
                        <img src="/icons/cart4.svg" class="w-5 h-5" />
                        <span>Tienda</span>

                        <span
                            class="ml-auto py-0.5 px-1.5 bg-red-600 text-white rounded-full text-[10px]"
                        >
                            {{ item.badge }}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";

// Load navigation items from app.config.ts
const navItems = useAppConfig().navbar;

// Mobile menu toggle
const open = ref(false);
</script>
