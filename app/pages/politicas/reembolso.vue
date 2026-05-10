<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">
        {{ content.title }}
      </h1>
      <p class="text-sm text-gray-500">
        Última actualización: {{ content.lastUpdated }}
      </p>
    </header>

    <div class="space-y-8">
      <section
        v-for="(section, index) in content.sections"
        :key="index"
        class="border-b border-gray-100 pb-8 last:border-0"
      >
        <h2 class="text-lg font-semibold text-gray-800 mb-3">
          {{ section.heading }}
        </h2>
        <p class="text-gray-600 leading-relaxed">
          {{ section.body }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
const content = useAppConfig().legal.politicasReembolso;
</script>
