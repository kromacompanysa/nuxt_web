<template>
    <section class="pt-10 pb-10 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <div class="mb-12 text-center">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Casos de éxito.
                </h2>
                <p class="mx-auto mt-4 max-w-2xl text-gray-600">
                    Resultados reales de pacientes que confiaron en Kroma Dental
                    Studio.
                </p>
            </div>

            <Swiper
                :modules="[Grid, Pagination]"
                :grid="{ rows: 2, fill: 'row' }"
                :slides-per-view="3"
                :space-between="1"
                :pagination="{ clickable: true }"
                :breakpoints="{
                    320: { slidesPerView: 1, grid: { rows: 1 } },
                    640: { slidesPerView: 2, grid: { rows: 2 } },
                    1024: { slidesPerView: 3, grid: { rows: 2 } },
                }"
                class="mySwiperBoxes"
            >
                <SwiperSlide v-for="(img, i) in gallery" :key="i">
                    <div class="overflow-hidden relative h-64">
                        <img
                            :src="img"
                            alt="Caso de éxito Kroma"
                            class="object-cover absolute inset-0 w-full h-full"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const galleryNames = [
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
    "grid_01.jpeg",
];

const gallery = galleryNames.map((name) => `/images/${name}`);
</script>

<style scoped>
.mySwiperBoxes {
    padding-bottom: 40px;
}
</style>
