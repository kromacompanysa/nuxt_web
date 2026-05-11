<!-- app/components/Default/PreFooter.vue -->
<template>
  <section class="relative py-24 overflow-hidden bg-gray-50 text-gray-900 border-t border-gray-200">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-1/3 h-1/2 bg-red-600/3 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"
    />
    <div
      class="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gray-200/50 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"
    />

    <div class="relative px-6 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-3">

        <!-- Left Column: Media & Brand -->
        <div class="flex flex-col self-start">
          <div class="lg:sticky lg:top-24">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-gray-200 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"
              />
              <video
                src="/assets/videos/show_01.mp4"
                autoplay
                muted
                loop
                playsinline
                class="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-xl border border-white"
              />
            </div>

            <div class="mt-10 space-y-4">
              <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
                Kroma <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-gray-600">Hub</span>
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed max-w-sm">
                Integrando salud, formación y tecnología para elevar el estándar de la odontología moderna.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Columns: Services Swiper -->
        <div class="lg:col-span-2">
          <Swiper
            :modules="[Pagination, Grid]"
            :grid="{
              rows: 1,
              fill: 'row',
            }"
            :slides-per-view="1.1"
            :breakpoints="{
              640: { slidesPerView: 2, grid: { rows: 1, fill: 'row' } },
              1024: { slidesPerView: 3, grid: { rows: 1, fill: 'row' } },
            }"
            :space-between="20"
            :pagination="{
              clickable: true,
            }"
            class="prefooter-swiper"
          >
            <SwiperSlide
              v-for="nav in config.navbar.filter((n) => ['consultorio', 'academia', 'laboratorio'].includes(n.label))"
              :key="nav.label"
              :class="[
                'group',
                nav.label === 'consultorio' ? '!lg:w-[calc(200%+20px)]' : ''
              ]"
            >
              <div
                :class="[
                  'relative group p-8 rounded-3xl border transition-all duration-500 overflow-hidden bg-white shadow-sm border-gray-200 hover:shadow-lg hover:-translate-y-1 h-full',
                  nav.label === 'consultorio' ? '!lg:w-[calc(200%+20px)]' : ''
                ]"
              >
                <!-- Background Theme Glow -->
                <div
                  class="absolute -top-24 -right-24 w-48 h-48 bg-red-50/50 blur-[60px] rounded-full group-hover:bg-red-50 transition-colors duration-700"
                />

                <!-- Social Links Above Title -->
                <div class="flex gap-4 mb-6 relative z-10">
                  <a
                    href="#"
                    class="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <img src="/icons/whatsapp.svg" class="w-5 h-5" alt="WhatsApp">
                  </a>
                  <a
                    href="#"
                    class="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <img src="/icons/instagram.svg" class="w-5 h-5" alt="Instagram">
                  </a>
                </div>

                <div class="flex items-end justify-between mb-8 relative z-10">
                  <div>
                    <a
                      :href="nav.href"
                      class="text-3xl font-bold text-gray-900 capitalize tracking-tight hover:text-red-600 transition-colors"
                    >
                      {{ nav.label }}
                    </a>
                  </div>
                </div>

                <div class="grid gap-8 relative z-10">
                  <div
                    v-for="group in nav.items"
                    :key="group.label"
                    class="space-y-4"
                  >
                    <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                      <h4 class="text-xs font-bold text-red-600 uppercase tracking-widest">
                        {{ group.label }}
                      </h4>
                      <button
                        v-if="group.items && group.items.length > 2"
                        class="text-xs font-bold text-red-600 hover:text-red-700 transition-colors px-2 py-0.5 rounded-full bg-red-50 hover:bg-red-100"
                        @click="expandedGroups[group.label] = !expandedGroups[group.label]"
                      >
                        {{ expandedGroups[group.label] ? "−" : "+" }}
                      </button>
                    </div>

                    <ul class="space-y-3">
                      <li
                        v-for="item in (group.items || []).slice(0, expandedGroups[group.label] ? undefined : 2)"
                        :key="item.label"
                      >
                        <a
                          :href="item.href"
                          class="text-sm text-gray-600 hover:text-red-600 flex items-center transition-all duration-300 group/item"
                        >
                          <span class="w-1.5 h-px bg-gray-300 mr-3 transition-all group-hover/item:w-4 group-hover/item:bg-red-500" />
                          {{ item.label }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Decorative Subtle Texture -->
                <div class="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </div>
            </SwiperSlide>

            <div class="swiper-pagination mt-8" />
          </Swiper>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

const config = useAppConfig();
const expandedGroups = ref({});
</script>

<style scoped>
.prefooter-swiper {
  padding-bottom: 40px;
}
</style>
