<template>
    <nav class="text-sm text-gray-500 mb-6">
        <ol class="flex flex-wrap items-center gap-2">
            <li>
                <NuxtLink to="/" class="hover:text-gray-900"> Home </NuxtLink>
            </li>

            <li
                v-for="(crumb, index) in crumbs"
                :key="crumb.to"
                class="flex items-center gap-2"
            >
                <span>&gt;</span>

                <NuxtLink
                    v-if="index !== crumbs.length - 1"
                    :to="crumb.to"
                    class="hover:text-gray-900 capitalize"
                >
                    {{ crumb.label }}
                </NuxtLink>

                <span v-else class="text-gray-900 font-medium capitalize">
                    {{ crumb.label }}
                </span>
            </li>
        </ol>
    </nav>
</template>

<script setup>
const route = useRoute();

const crumbs = computed(() => {
    const segments = route.path.split("/").filter(Boolean);

    return segments.map((segment, index) => {
        const to = "/" + segments.slice(0, index + 1).join("/");

        return {
            label: segment.replace(/-/g, " "),
            to,
        };
    });
});
</script>
