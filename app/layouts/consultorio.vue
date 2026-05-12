<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavBarWithAuth />

    <main class="flex-1 pt-20">
      <div class="max-w-7xl mx-auto px-6 pt-3">
        <DefaultBreadcrumbs />
      </div>
      <slot />
    </main>

    <DefaultFooter />
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});
</script>
