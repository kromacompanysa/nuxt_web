<template>
  <section class="max-w-6xl mx-auto px-6 pb-12 space-y-12">
    <!-- Page Title -->
    <header class="text-center">
      <h1 class="text-4xl md:text-5xl font-semibold capitalize">
        {{ consultorioSection.label }}
      </h1>
      <p class="mt-4 text-gray-500 max-w-2xl mx-auto">
        Conoce nuestros servicios, especialidades y beneficios para ti.
      </p>
    </header>

    <!-- Sections -->
    <article v-for="(item, index) in consultorioItems" :key="item.href" class="grid md:grid-cols-2 gap-12 items-center"
      :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
      <!-- Image -->
      <div class="overflow-hidden rounded-xl shadow-lg">
        <img :src="item.image ?? '/images/pre_post_01.jpg'"
          class="w-full h-80 object-cover transition-transform duration-500 hover:scale-105">
      </div>

      <!-- Content -->
      <div>
        <h2 class="text-3xl font-medium capitalize">
          {{ item.label }}
        </h2>

        <p class="mt-4 text-gray-600 leading-relaxed">
          {{
            item.description ??
            "Descubre más información relevante sobre esta sección del consultorio."
          }}
        </p>

        <!-- Dynamic group items (especialidades, seguros, etc.) -->
        <ul v-if="item.type === 'group' && item.items?.length" class="mt-6 flex flex-wrap gap-1">
          <li v-for="child in item.items" :key="child.href">
            <NuxtLink :to="child.href" class="inline-block px-2 py-1 border rounded-full text-sm
                                   hover:bg-red-50 hover:text-red-600 transition capitalize">
              {{ child.label }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink :to="item.href" class="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition text-sm">
          Ver más
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </article>
  </section>
</template>

<script setup>
// Load navbar config
const navItems = useAppConfig().navbar;

// Get "consultorio" section
const consultorioSection =
  navItems.find((item) => item.label === "consultorio") ?? {
    label: "Consultorio",
    items: [],
  };

// Items (especialidades, seguros, etc.)
const consultorioItems = consultorioSection.items ?? [];
</script>
