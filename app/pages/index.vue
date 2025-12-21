<!-- app/pages/index.vue -->
<template>
    <section class="">
        <!-- Hero Section -->
        <DefaultHero />

        <!-- Swiper Courses -->
        <DefaultSwiperCourses />

        <!-- Swiper Gallery -->
        <DefaultSwiperGallery />

        <!-- Pre-Footer -->
        <DefaultPreFooter />
    </section>
</template>

<script setup>
definePageMeta({
    breadcrumbs: false,
});
</script>
