<template>
    <section class="max-w-6xl mx-auto px-6 pb-12 space-y-12">
        <!-- Page Title -->
        <header class="text-center">
            <h1 class="text-4xl md:text-5xl font-semibold capitalize">
                {{ laboratorioSection.label }}
            </h1>
            <p class="mt-4 text-gray-500 max-w-2xl mx-auto">
                Conoce nuestros servicios, especialidades y beneficios para ti.
            </p>
        </header>

        <!-- Sections -->
        <article
            v-for="(item, index) in laboratorioItems"
            :key="item.href"
            class="grid md:grid-cols-2 gap-12 items-center"
            :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
        >
            <!-- Image -->
            <div class="overflow-hidden rounded-xl shadow-lg">
                <img
                    :src="item.image ?? '/images/pre_post_01.jpg'"
                    class="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            <!-- Content -->
            <div>
                <h2 class="text-3xl font-medium capitalize">
                    {{ item.label }}
                </h2>

                <p class="mt-4 text-gray-600 leading-relaxed">
                    {{
                        item.description ??
                        "Descubre más información relevante sobre esta sección del laboratorio."
                    }}
                </p>

                <!-- Dynamic group items (especialidades, seguros, etc.) -->
                <ul
                    v-if="item.type === 'group' && item.items?.length"
                    class="mt-6 flex flex-wrap gap-1"
                >
                    <li
                        v-for="child in item.items"
                        :key="child.href"
                    >
                        <NuxtLink
                            :to="child.href"
                            class="inline-block px-2 py-1 border rounded-full text-sm
                                   hover:bg-red-50 hover:text-red-600 transition capitalize"
                        >
                            {{ child.label }}
                        </NuxtLink>
                    </li>
                </ul>

                <NuxtLink
                    :to="item.href"
                    class="inline-block mt-6 text-red-600 font-medium hover:underline"
                >
                    Ver más →
                </NuxtLink>
            </div>
        </article>
    </section>
</template>

<script setup>
// Load navbar config
const navItems = useAppConfig().navbar;

// Get "laboratorio" section
const laboratorioSection =
    navItems.find((item) => item.label === "laboratorio") ?? {
        label: "laboratorio",
        items: [],
    };

// Items (especialidades, seguros, etc.)
const laboratorioItems = laboratorioSection.items ?? [];
</script>



