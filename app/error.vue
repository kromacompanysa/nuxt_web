<template>
  <div
    class="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center"
  >
    <div class="relative mb-8">
      <span class="text-[120px] md:text-[180px] font-bold text-red-50 leading-none select-none">
        404
      </span>
    </div>

    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Página no encontrada
    </h1>
    <p class="text-gray-500 text-lg max-w-md mb-10">
      Lo sentimos, la página que buscas no existe o fue movida.
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <NuxtLink
        to="/"
        class="px-8 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition shadow-lg"
      >
        Volver al inicio
      </NuxtLink>
      <NuxtLink
        to="/nosotros/contacto"
        class="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition"
      >
        Contáctanos
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
