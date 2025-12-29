<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp contacto"
    class="fixed z-50 flex items-center justify-center rounded-full bg-[#25D366] /* WhatsApp official green */ shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 /* Positioning */ right-4 bottom-4 sm:right-6 sm:bottom-6 /* Size */ w-14 h-14 sm:w-16 sm:h-16"
  >
    <img
      src="/icons/whatsapp.svg"
      alt="WhatsApp"
      class="w-6 h-6 sm:w-7 sm:h-7 pointer-events-none"
    />
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
