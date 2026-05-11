<!-- app/layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Global Navigation -->
    <DefaultNavBar />

    <!-- Page Content -->
    <main class="flex-1 pt-20">
      <div v-if="showBreadcrumbs" class="max-w-7xl mx-auto px-6 pt-3">
        <DefaultBreadcrumbs />
      </div>
      <slot />
    </main>

    <!-- Footer -->
    <DefaultFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showBreadcrumbs = computed(() => {
  return route.meta?.breadcrumbs !== false;
});
</script>