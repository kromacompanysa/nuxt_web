<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp contacto"
    class="fixed z-50 flex items-center justify-center rounded-full bg-whatsapp shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 right-4 bottom-4 sm:right-6 sm:bottom-6 w-14 h-14 sm:w-16 sm:h-16"
  >
    <img
      src="/icons/whatsapp.svg"
      alt="WhatsApp"
      class="w-6 h-6 sm:w-7 sm:h-7 pointer-events-none"
    >
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  phone: { type: String, required: true },
  message: { type: String, default: "" },
});

const whatsappUrl = computed(() => {
  const base = `https://wa.me/${props.phone}`;
  return props.message
    ? `${base}?text=${encodeURIComponent(props.message)}`
    : base;
});
</script>
