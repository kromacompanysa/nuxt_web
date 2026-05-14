<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <header class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Especialidades
      </h1>
      <p class="text-lg text-gray-500">
        Conoce nuestras especialidades y encuentra el tratamiento que necesitas.
      </p>
    </header>

    <div class="space-y-12">
      <section v-for="(item, index) in itemList" :key="item.href" class="relative">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div :class="index % 2 === 0 ? '' : 'md:order-1'">
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-20 h-20 bg-red-50 rounded-full -z-10" />
              <h2 :class="['text-3xl font-medium capitalize', index % 2 === 0 ? 'text-right' : 'text-left']">
                {{ item.label }}
              </h2>
            </div>
            <p :class="['text-gray-600 leading-relaxed text-lg', index % 2 === 0 ? 'text-right' : 'text-left']">
              {{ item.description }}
            </p>
            <NuxtLink :to="item.ctaLink" :class="[
              'inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition text-sm',
              index % 2 === 0 ? 'float-right' : ''
            ]">
              Agenda tu cita
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>


          </div>

          <div>
            <div class="rounded-lg overflow-hidden shadow-md bg-gray-100">
              <img :src="item.image" :alt="item.label" class="w-full h-56 md:h-64 object-cover">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const navItems = useAppConfig().navbar;

const consultorioSection = navItems.find((item) => item.label === "consultorio");
const listSection = consultorioSection?.items?.find(
  (item) => item.label === "especialidades",
) ?? {
  label: "especialidades",
  items: [],
};

const itemList = listSection.items ?? [];
</script>
