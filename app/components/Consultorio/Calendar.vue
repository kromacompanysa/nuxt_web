<template>
  <div class="w-full bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">
          Agenda tu Cita
        </h2>
        <p class="text-gray-500 mt-2">
          Selecciona una fecha disponible para tu consulta
        </p>
      </div>

      <Swiper
        class="calendar-swiper"
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :loop="false"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="(month, index) in months" :key="index">
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div class="flex items-center justify-between mb-6">
              <button class="swiper-button-prev p-2 rounded-full hover:bg-gray-100 transition">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 class="text-xl md:text-2xl font-semibold text-gray-900 capitalize">
                {{ month.name }} {{ currentYear }}
              </h3>
              <button class="swiper-button-next p-2 rounded-full hover:bg-gray-100 transition">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div class="grid grid-cols-7 gap-2">
              <div
                v-for="day in ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']"
                :key="day"
                class="text-center text-xs md:text-sm font-medium text-gray-400 py-2"
              >
                {{ day }}
              </div>

              <button
                v-for="(day, idx) in month.days"
                :key="idx"
                class="relative aspect-square flex items-center justify-center text-sm md:text-base rounded-lg transition-all duration-200"
                :class="getDayClasses(day)"
                :disabled="!day.isCurrentMonth || day.isPast"
                @click="selectDate(day)"
              >
                <span :class="day.isToday ? 'bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center' : ''">
                  {{ day.date }}
                </span>
                
                <span
                  v-if="day.isToday"
                  class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"
                />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="mt-6 flex justify-center gap-4 text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 bg-white border border-gray-200 rounded" />
          <span>Disponible</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 bg-red-50 border border-red-200 rounded" />
          <span>Hoy</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-4 h-4 bg-gray-100 border border-gray-200 rounded" />
          <span>No disponible</span>
        </div>
      </div>

      <div v-if="selectedDate" class="mt-8 text-center">
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 rounded-full text-red-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="font-medium">{{ formatSelectedDate }}</span>
        </div>
      </div>

      <div v-if="showLoginPrompt" class="mt-6 text-center">
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Inicia sesión para agendar tu cita</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const currentYear = new Date().getFullYear();

const selectedDate = ref(null);
const showLoginPrompt = ref(false);

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const months = computed(() => {
  return monthNames.map((name, monthIndex) => {
    const days = getDaysInMonth(monthIndex, currentYear);
    return { name, days };
  });
});

function getDaysInMonth(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const days = [];
  const adjustFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  
  for (let i = 0; i < adjustFirstDay; i++) {
    days.push({ date: '', isCurrentMonth: false });
  }
  
  const today = new Date();
  
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    
    days.push({
      date: d,
      isCurrentMonth: true,
      isPast,
      isToday,
      fullDate: dateObj.toISOString().split('T')[0]
    });
  }
  
  const remaining = 42 - days.length;
  for (let i = 0; i < remaining; i++) {
    days.push({ date: '', isCurrentMonth: false });
  }
  
  return days;
}

function getDayClasses(day) {
  if (!day.isCurrentMonth) return 'invisible';
  if (day.isPast) return 'text-gray-300 cursor-not-allowed';
  if (day.isToday) return 'text-red-600 font-semibold cursor-pointer hover:bg-red-50';
  return 'text-gray-700 hover:bg-red-50 cursor-pointer';
}

function selectDate(day) {
  if (!day.isCurrentMonth || day.isPast) return;
  
  selectedDate.value = day.fullDate;
  showLoginPrompt.value = true;
}

const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return '';
  const date = new Date(selectedDate.value + 'T00:00:00');
  return date.toLocaleDateString('es-PE', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
});

function onSlideChange() {
  selectedDate.value = null;
  showLoginPrompt.value = false;
}
</script>

<style scoped>
.calendar-swiper {
  padding-bottom: 40px;
}

.calendar-swiper :deep(.swiper-button-prev),
.calendar-swiper :deep(.swiper-button-next) {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  margin: 0;
  width: 40px;
  height: 40px;
  color: #4b5563;
  background: #f9fafb;
  border-radius: 50%;
}

.calendar-swiper :deep(.swiper-button-prev):after,
.calendar-swiper :deep(.swiper-button-next):after {
  display: none;
}

.calendar-swiper :deep(.swiper-button-prev:hover),
.calendar-swiper :deep(.swiper-button-next:hover) {
  background: #f3f4f6;
}
</style>
