<template>
    <section class="pt-24 pb-24 px-6 max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
            {{ courseTitle }}
        </h1>

        <p class="mt-4 text-gray-600 text-lg">
            Próximamente encontrarás toda la información sobre este curso.
        </p>

        <div class="mt-10 py-10 border rounded-xl bg-white shadow-sm">
            <p class="text-gray-500">Contenido en desarrollo...</p>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: "portal",
});

const route = useRoute();
const slug = route.params.slug;

// Convert slug into title
const courseTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
</script>
