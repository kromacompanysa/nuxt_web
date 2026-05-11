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
    <DefaultWhatsAppLink
      :phone="contacto.content.whatsappPhone"
      :message="contacto.content.whatsappMessage"
      class="fixed bottom-6 right-6 z-50"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const navItems = useAppConfig().navbar;
const nosotrosSection = navItems.find((item) => item.label === "nosotros");
const contacto = nosotrosSection?.items?.find(
  (item) => item.label === "contacto",
) ?? { label: "contacto", content: {} };

const showBreadcrumbs = computed(() => {
  return route.meta?.breadcrumbs !== false;
});
</script>

