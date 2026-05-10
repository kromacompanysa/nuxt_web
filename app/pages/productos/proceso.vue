<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <header class="mb-14 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">
        {{ content.title }}
      </h1>
      <p class="text-sm text-gray-500">
        Última actualización: {{ content.lastUpdated }}
      </p>
    </header>

    <div class="relative">
      <div
        class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-red-100"
      />

      <div class="space-y-10">
        <div
          v-for="(step, index) in content.steps"
          :key="index"
          class="relative pl-12 md:pl-0"
          :class="
            index % 2 === 0
              ? 'md:pr-[calc(50%+2rem)] md:text-right'
              : 'md:pl-[calc(50%+2rem)] md:text-left'
          "
        >
          <div
            class="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold text-sm"
          >
            {{ step.number }}
          </div>

          <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
              {{ step.heading }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ step.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const content = useAppConfig().legal.productosProceso;
</script>
