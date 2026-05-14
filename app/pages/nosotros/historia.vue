<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <header class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        {{ historia.content.title }}
      </h1>
      <p class="text-lg text-gray-500">{{ historia.content.subtitle }}</p>
    </header>

    <div class="space-y-16">
      <section v-for="(section, index) in historia.content.sections" :key="index" class="relative">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div :class="index % 2 === 0 ? '' : 'md:order-1'">
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-20 h-20 bg-red-50 rounded-full -z-10" />
              <h2 class="text-2xl font-semibold text-gray-900 mb-4 relative">
                {{ section.heading }}
              </h2>
            </div>
            <p class="text-gray-600 leading-relaxed text-lg">
              {{ section.body }}
            </p>
          </div>

          <div :class="index % 2 === 0 ? 'md:order-1' : ''">
            <div class="aspect-4/3 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img :src="historia.image" :alt="section.heading" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const navItems = useAppConfig().navbar;
const nosotrosSection = navItems.find((item) => item.label === "nosotros");
const historia = nosotrosSection?.items?.find(
  (item) => item.label === "historia",
) ?? { label: "historia", image: "/images/pre_post_01.jpg" };
</script>
