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
import DefaultPreFooter from "@/components/DefaultPreFooter.vue";
import DefaultSwiperGallery from "@/components/DefaultSwiperGallery.vue";
import DefaultSwiperCourses from "@/components/DefaultSwiperCourses.vue";
import DefaultHero from "@/components/DefaultHero.vue";
</script>
