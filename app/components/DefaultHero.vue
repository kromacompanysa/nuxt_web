<template>
    <section class="relative min-h-[80vh] overflow-hidden">
        <!-- BACKGROUND SWIPER -->
        <Swiper
            :modules="[Navigation]"
            :navigation="true"
            :loop="true"
            class="heroBackgroundSwiper"
        >
            <SwiperSlide
                v-for="(img, i) in heroImages"
                :key="i"
                class="block w-full h-full"
            >
                <div
                    class="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
                    :style="{ backgroundImage: `url(${img})` }"
                ></div>
            </SwiperSlide>
        </Swiper>

        <!-- WHITE OVERLAY -->
        <div class="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

        <!-- TEXT CONTENT -->
        <div
            class="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-32 text-center text-gray-900"
        >
            <h1 class="text-4xl md:text-6xl font-bold leading-tight">
                Bienvenido a <span class="text-red-600">Kroma</span>
            </h1>

            <p class="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mt-4">
                Clínica odontológica y academia especializada. Brindamos
                atención profesional y formación avanzada.
            </p>

            <div
                class="flex flex-col sm:flex-row justify-center gap-4 pt-8 w-full mx-auto"
            >
                <NuxtLink
                    to="/contact"
                    class="w-[180px] sm:w-auto mx-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-center"
                >
                    Agenda tu cita
                </NuxtLink>

                <NuxtLink
                    to="/about"
                    class="w-[180px] sm:w-auto mx-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-center"
                >
                    Conócenos
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const heroImageNames = ["hero_0.jpeg", "hero_1.jpeg", "hero_2.jpeg"];
const heroImages = heroImageNames.map((name) => `/images/${name}`);
</script>

<style scoped>
.heroBackgroundSwiper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}
</style>
