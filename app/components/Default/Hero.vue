<template>
  <section class="relative min-h-[85vh] overflow-hidden w-full">
    <Swiper
      :key="swiperKey"
      :modules="swiperModules"
      :loop="true"
      :autoplay="
        isMobile
          ? {
              delay: 3500,
              disableOnInteraction: false,
            }
          : false
      "
      :navigation="!isMobile"
      :allow-touch-move="true"
      :speed="800"
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
        />
      </SwiperSlide>
    </Swiper>

    <div
      class="absolute inset-0 bg-linear-to-b from-white/70 via-white/60 to-white/40 backdrop-blur-[2px]"
    />

    <div
      class="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-28 text-center text-gray-900"
    >
      <h1
        class="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-sm anim-fade-slide-up font-display"
        style="animation-delay: 0ms"
      >
        Bienvenido a <span class="text-red-600">Kroma</span>
      </h1>

      <p
        class="text-gray-700 text-lg md:text-2xl max-w-3xl mx-auto mt-6 leading-relaxed anim-fade-slide-up font-sans"
        style="animation-delay: 180ms"
      >
        Clínica odontológica y academia especializada. Atención profesional,
        tecnología avanzada y formación de excelencia.
      </p>

      <div
        class="flex flex-col sm:flex-row justify-center gap-5 pt-10 w-full mx-auto anim-fade-slide-up"
        style="animation-delay: 360ms"
      >
        <NuxtLink
          to="/nosotros/contacto"
          class="btn-primary anim-fade-slide-up"
          style="animation-delay: 480ms"
        >
          Agenda tu cita
        </NuxtLink>

        <NuxtLink
          to="/nosotros/historia"
          class="btn-secondary anim-fade-slide-up"
          style="animation-delay: 540ms"
        >
          Conócenos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const heroImageNames = ["hero_0.jpeg", "hero_1.jpg", "hero_2.JPG"];
const heroImages = heroImageNames.map((name) => `/images/${name}`);

const isMobile = ref(false);
const swiperKey = ref(0);

const checkScreen = () => {
  const newValue = window.innerWidth < 768;

  // If mode changes, force Swiper rebuild
  if (isMobile.value !== newValue) {
    isMobile.value = newValue;
    swiperKey.value++; // 🔥 THIS FIXES AUTOPLAY
  }
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});

const swiperModules = computed(() => {
  return isMobile.value ? [Autoplay] : [Navigation];
});
</script>

<style scoped>
.heroBackgroundSwiper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.heroBackgroundSwiper :deep(.swiper-button-prev) {
  left: 2rem;
}

.heroBackgroundSwiper :deep(.swiper-button-next) {
  right: 2rem;
}

.heroBackgroundSwiper :deep(.swiper-button-prev),
.heroBackgroundSwiper :deep(.swiper-button-next) {
  color: #1f2937;
  width: 44px;
  height: 44px;
}

.font-display {
  font-family: var(--font-family-display);
}

.font-sans {
  font-family: var(--font-family-sans);
}

.btn-primary {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: var(--color-btn-primary-bg);
  color: var(--color-btn-primary-text);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.btn-primary:hover {
  background-color: var(--color-btn-primary-hover);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
}

.btn-secondary {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: var(--color-surface-dark);
  color: var(--color-text-on-dark);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.btn-secondary:hover {
  background-color: #374151;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.btn-secondary:active {
  transform: translateY(0) scale(0.98);
}
</style>
