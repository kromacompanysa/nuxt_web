<template>
    <section class="pt-20 pb-10 bg-white">
        <div class="px-4 mx-auto max-w-6xl">
            <div class="text-center space-y-4 mb-12">
                <h2
                    class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                >
                    Elige el camino en
                    <span class="text-red-600">Kroma Academy</span>
                </h2>

                <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                    Explora nuestros cursos y experiencias diseñadas para
                    profesionales de la odontología moderna.
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
                    0: { slidesPerView: 1.1 }, // 📱 móviles
                    640: { slidesPerView: 1.8 }, // 📲 tablets pequeñas
                    1024: { slidesPerView: 3.2 }, // 💻 desktop
                }"
                class="mySwiperHero hero-swiper"
            >
                <SwiperSlide v-for="course in courses" :key="course.label">
                    <NuxtLink
                        :to="course.href"
                        class="block overflow-hidden relative w-full h-72 rounded-3xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
                    >
                        <img
                            :src="course.image"
                            :alt="course.label"
                            class="object-cover w-full h-full transition-transform duration-700 transform scale-105 group-hover:scale-110"
                        />

                        <div
                            class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-95"
                        ></div>

                        <span
                            class="absolute bottom-6 left-1/2 py-4 px-10 text-base font-semibold text-center text-white bg-red-600 rounded-full shadow-md transition duration-300 transform -translate-x-1/2 hover:bg-red-700 hover:shadow-lg hover:scale-105"
                        >
                            {{ course.label }}
                        </span>
                    </NuxtLink>
                </SwiperSlide>

                <div class="swiper-pagination mt-10"></div>
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

// obtener la sección Academia
const cursosSection = navItems.find((item) => item.label === "Academia");

// Los items ya contienen label, href y image
const courses = cursosSection?.items ?? [];
</script>

<style scoped>
.mySwiperHero {
    padding-bottom: 40px;
}
</style>
