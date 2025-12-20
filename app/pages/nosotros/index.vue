<template>
    <section class="max-w-7xl mx-auto px-6 py-6">
        <h1 class="text-3xl font-semibold text-center mb-10 capitalize">
            {{ nosotrosSection.label }}
        </h1>

        <DefaultBreadcrumbs />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <NuxtLink
                v-for="item in nosotrosItems"
                :key="item.href"
                :to="item.href"
                class="block group"
            >
                <div class="overflow-hidden rounded-lg shadow-md">
                    <img
                        :src="item.image ?? '/images/pre_post_01.jpg'"
                        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <h2
                    class="mt-3 text-lg font-medium capitalize group-hover:text-red-600"
                >
                    {{ item.label }}
                </h2>
            </NuxtLink>
        </div>
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
