<template>
  <div class="space-y-10">
    <section class="max-w-6xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-center py-5 capitalize">
        {{ contacto.content.title }}
      </h1>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="space-y-6">
          <div class="bg-white shadow-lg rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <img src="/icons/envelope.svg" class="w-5 h-5 text-red-600" alt="Email">
              Contáctanos
            </h3>
            <p class="text-gray-700 leading-relaxed">
              {{ contacto.content.clinicName }}
            </p>
            <div class="mt-6 space-y-3 text-gray-600">
              <a :href="`tel:+${contacto.content.whatsappPhone}`"
                class="flex items-center gap-2 hover:text-red-600 transition">
                <img src="/icons/headset.svg" class="w-4 h-4" alt="Teléfono">
                +{{ contacto.content.whatsappPhone.replace(/^52/, "51 ") }}
              </a>
              <a :href="`mailto:${contacto.content.emailTo}`"
                class="flex items-center gap-2 hover:text-red-600 transition">
                <img src="/icons/envelope.svg" class="w-4 h-4" alt="Email">
                {{ contacto.content.emailTo }}
              </a>
              <p class="flex items-center gap-2">
                <img src="/icons/clock.svg" class="w-4 h-4" alt="Horario">
                {{ contacto.content.schedule }}
              </p>
            </div>
            <div class="flex flex-wrap gap-3 mt-6">
              <a :href="`mailto:${contacto.content.emailTo}`"
                class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition flex items-center gap-2">
                Enviar correo
              </a>
              <a :href="whatsAppLink" target="_blank"
                class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition flex items-center gap-2">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white shadow-lg rounded-2xl p-8">
          <h3 class="text-2xl font-semibold mb-6">Escríbenos</h3>
          <form class="space-y-4" @submit.prevent="submitForm">
            <div>
              <label class="block text-sm text-gray-600 mb-1">Tu correo</label>
              <input v-model="form.email" type="email" required placeholder="tu@email.com"
                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Mensaje</label>
              <textarea v-model="form.message" rows="4" required placeholder="Escribe tu mensaje..."
                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <button type="submit" class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="space-y-6">
          <div class="bg-white shadow-lg rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <img src="/icons/geo-alt.svg" class="w-5 h-5 text-red-600" alt="Ubicación">
              Nuestra Ubicación
            </h3>
            <p class="text-gray-700 leading-relaxed">
              {{ contacto.content.clinicName }}<br>
              {{ contacto.content.address }}
            </p>
            <div class="mt-6 space-y-2 text-gray-600">
              <a :href="`tel:+${contacto.content.whatsappPhone}`"
                class="flex items-center gap-2 hover:text-red-600 transition">
                <img src="/icons/headset.svg" class="w-4 h-4" alt="Teléfono">
                +{{ contacto.content.whatsappPhone.replace(/^52/, "51 ") }}
              </a>
              <p class="flex items-center gap-2">
                <img src="/icons/clock.svg" class="w-4 h-4" alt="Horario">
                {{ contacto.content.schedule }}
              </p>
            </div>
            <a v-if="contacto.content.mapLink" :href="contacto.content.mapLink" target="_blank"
              class="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
              Cómo llegar
            </a>
          </div>
        </div>

        <div class="rounded-2xl overflow-hidden shadow-lg">
          <iframe v-if="contacto.content.mapUrl" :src="contacto.content.mapUrl" width="100%" height="420"
            style="border: 0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const navItems = useAppConfig().navbar;
const nosotrosSection = navItems.find((item) => item.label === "nosotros");
const contacto = nosotrosSection?.items?.find(
  (item) => item.label === "contacto",
) ?? { label: "contacto", content: {} };

const whatsAppLink = computed(
  () =>
    `https://wa.me/${contacto.content.whatsappPhone}?text=${encodeURIComponent(contacto.content.whatsappMessage)}`,
);

const form = reactive({
  email: "",
  message: "",
});

const submitForm = () => {
  const to = contacto.content.emailTo ?? form.email;
  const from = contacto.content.emailFrom ?? form.email;

  window.location.href = `mailto:${to}?subject=Contacto Kroma&body=${encodeURIComponent(
    `De: ${from}\n\nMensaje:\n${form.message}`,
  )}`;

  form.email = "";
  form.message = "";
};
</script>
