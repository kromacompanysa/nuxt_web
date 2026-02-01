<template>
    <section class="pt-10 pb-10 bg-gray-50">
        <!-- Title block (centered) -->
        <div class="text-center space-y-4 mb-12 px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Casos de <span class="text-red-600">éxito</span>
            </h2>

            <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                Resultados reales de pacientes que confiaron en Kroma Dental Studio.
            </p>
        </div>

        <!-- Full-width Swiper -->
        <div class="w-full">
            <Swiper :modules="[Grid, Pagination]" :grid="{ rows: 2, fill: 'row' }" :slides-per-view="3"
                :space-between="1" :pagination="{ clickable: true }" :breakpoints="{
                    320: { slidesPerView: 1, grid: { rows: 1 } },
                    640: { slidesPerView: 2, grid: { rows: 2 } },
                    1024: { slidesPerView: 3, grid: { rows: 2 } },
                }" class="mySwiperBoxes">
                <SwiperSlide v-for="(img, i) in gallery" :key="i">
                    <div class="overflow-hidden relative h-64">
                        <img :src="img" alt="Caso de éxito Kroma" class="object-cover absolute inset-0 w-full h-full" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
const appConfig = useAppConfig();

import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const gallery = appConfig.gallery;
</script>

<style scoped>
.mySwiperBoxes {
    padding-bottom: 40px;
}
</style>
