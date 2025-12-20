<template>
    <section class="max-w-7xl mx-auto px-6 py-6">
        <h1 class="text-3xl font-semibold text-center mb-10 capitalize">
            {{ especialesSection.label }}
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <NuxtLink
                v-for="item in especialItems"
                :key="item.href"
                :to="item.href"
                class="block group"
            >
                <div class="overflow-hidden rounded-lg shadow-md">
                    <img
                        :src="item.image ?? '/images/pre_post_01.jpg'"
                        class="w-full h-48 object-cover group-hover:scale-105 transition"
                    />
                </div>

                <h2
                    class="mt-3 text-lg font-medium group-hover:text-red-600 capitalize"
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

// 1️⃣ Get "academia"
const academiaSection = navItems.find((item) => item.label === "academia");

// 2️⃣ Get "especial" group
const especialesSection = academiaSection?.items?.find(
    (item) => item.label === "especiales",
) ?? {
    label: "especiales",
    items: [],
};

// 3️⃣ Cards
const especialItems = especialesSection.items ?? [];
</script>
