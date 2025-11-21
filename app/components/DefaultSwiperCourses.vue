<template>
    <section class="pt-20 pb-10 bg-white">
        <div class="px-4 mx-auto max-w-6xl">
            <!-- Title -->
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

            <!-- Swiper Component -->
            <Swiper
                :modules="[Pagination, Autoplay]"
                :slides-per-view="1.1"
                :space-between="20"
                :pagination="{ clickable: true }"
                :loop="true"
                :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false,
                }"
                :breakpoints="{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                }"
                class="mySwiperHero hero-swiper"
            >
                <SwiperSlide v-for="course in courses" :key="course.title">
                    <NuxtLink
                        :to="course.url"
                        class="block overflow-hidden relative w-full h-72 rounded-3xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
                    >
                        <img
                            :src="course.img"
                            :alt="course.title"
                            class="object-cover w-full h-full transition-transform duration-700 transform scale-105 group-hover:scale-110"
                        />

                        <div
                            class="absolute inset-0 .bg-linear-to-t to-transparent opacity-90 transition-opacity group-hover:opacity-95 from-black/70 via-black/30"
                        ></div>

                        <span
                            class="absolute bottom-6 left-1/2 py-4 px-10 text-base font-semibold text-center text-white bg-red-600 rounded-full shadow-md transition duration-300 transform -translate-x-1/2 hover:bg-red-700 hover:shadow-lg hover:scale-105"
                        >
                            {{ course.title }}
                        </span>
                    </NuxtLink>
                </SwiperSlide>

                <!-- Pagination -->
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

const courses = [
    {
        title: "Curso Tema 1",
        img: "//dentlit.com/cdn/shop/files/dentlit-online-course-thumbnail_2x_103da2ba-7fdc-4b58-ba35-39ceec0b05b1_160x160@2x.png?v=1675373315",
        url: "curso/1",
    },
    {
        title: "Curso Tema 2",
        img: "//dentlit.com/cdn/shop/files/dentlit-life-in-person-thumbnail_2x_b695378b-3051-4189-84a3-97c0947a3908_160x160@2x.png?v=1675373337",
        url: "/curso/2",
    },
    {
        title: "Curso Tema 3",
        img: "//dentlit.com/cdn/shop/files/books-and-products-thumbnail_2x_8c716495-022a-4fd4-8681-2b4298ac41a9_160x160@2x.png?v=1675373353",
        url: "/curso/3",
    },
    {
        title: "Curso Tema 4",
        img: "//dentlit.com/cdn/shop/files/dentlit-life-in-person-thumbnail_2x_b695378b-3051-4189-84a3-97c0947a3908_160x160@2x.png?v=1675373337",
        url: "/curso/4",
    },
    {
        title: "Curso Tema 5",
        img: "//dentlit.com/cdn/shop/files/dentlit-life-in-person-thumbnail_2x_b695378b-3051-4189-84a3-97c0947a3908_160x160@2x.png?v=1675373337",
        url: "/curso/5",
    },
];
</script>

<style scoped>
.mySwiperHero {
    padding-bottom: 40px;
}
</style>
