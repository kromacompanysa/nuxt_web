<template>
    <section class="max-w-6xl mx-auto px-6 pb-12 space-y-12">
        <!-- Page Title -->
        <header class="text-center">
            <h1 class="text-4xl md:text-5xl font-semibold capitalize">
                {{ nosotrosSection?.label ?? "Nosotros" }}
            </h1>
            <p class="mt-4 text-gray-500 max-w-2xl mx-auto">
                Conoce nuestra historia, cómo contactarnos y dónde encontrarnos.
            </p>
        </header>

        <!-- Sections -->
        <article
            v-for="(item, index) in nosotrosItems"
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
                    {{ item.label ?? "x" }}
                </h2>

                <p class="mt-4 text-gray-600 leading-relaxed">
                    {{
                        item.description ??
                        "Descubre más información relevante sobre esta sección de Kroma."
                    }}
                </p>
                <NuxtLink
                    :to="item.href ?? 'x'"
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

// Get "nosotros" section
const nosotrosSection = navItems.find((item) => item.label === "nosotros") ?? {
    label: "nosotros",
    items: [],
};

// Cards (historia, contacto, ubicacion)
const nosotrosItems = nosotrosSection.items ?? [];
</script>
