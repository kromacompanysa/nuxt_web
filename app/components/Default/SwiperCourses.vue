<template>
  <section class="pt-20 pb-10 bg-white">
    <div class="px-4 mx-auto max-w-6xl">
      <div class="text-center space-y-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Elige el camino en
          <span class="text-red-600">Kroma Academy</span>
        </h2>

        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Explora nuestros cursos y experiencias diseñadas para profesionales de
          la odontología moderna.
        </p>
      </div>

        <Swiper
          :modules="[Pagination, Autoplay]"
          :space-between="20"
          :pagination="{ clickable: true }"
          :loop="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.8 },
            1024: { slidesPerView: 3.2 },
          }"
          class="mySwiperHero hero-swiper"
        >
          <SwiperSlide
            v-for="course in cursos"
            :key="course.label"
            class="group"
          >
            <NuxtLink
              :to="course.href"
              class="block overflow-hidden relative w-full h-72 rounded-3xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                :src="course.image"
                :alt="course.label"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              >

              <div
                class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-70 group-[.swiper-slide-active]:opacity-90 transition-all duration-400 delay-100"
              />

              <span
                class="absolute bottom-6 left-1/2 py-4 px-10 text-base font-semibold text-center text-white bg-red-600 rounded-full shadow-md translate-y-2 opacity-70 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:scale-105 transition-all duration-300 delay-200 hover:bg-red-700 hover:shadow-lg hover:scale-110 active:scale-100 capitalize -translate-x-1/2"
              >
                {{ course.label }}
              </span>
            </NuxtLink>
          </SwiperSlide>

          <div class="swiper-pagination mt-10"/>
        </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const navItems = useAppConfig().navbar;

// 1️⃣ Get "academia"
const academiaSection = navItems.find((item) => item.label === "academia");

const cursos =
  academiaSection?.items
    ?.filter((item) =>
      ["cursos virtuales", "cursos presenciales"].includes(item.label),
    )
    .flatMap((item) => item.items || []) ?? [];
</script>

<style scoped>
.mySwiperHero {
  padding-bottom: 40px;
}
</style>
