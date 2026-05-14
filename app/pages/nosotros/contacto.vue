<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <header class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        {{ contacto.content.title }}
      </h1>
      <p class="text-lg text-gray-500">
        {{ contacto.content.subtitle }}
      </p>
    </header>

    <div class="space-y-16">
      <section class="relative">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-20 h-20 bg-red-50 rounded-full -z-10" />
            <div class="bg-white shadow-lg rounded-2xl p-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <img src="/icons/envelope.svg" class="w-6 h-6 text-red-600" alt="Email">
                Contáctanos
              </h2>
              <p class="text-gray-700 leading-relaxed text-lg mb-6">
                {{ contacto.content.clinicName }}
              </p>
              <div class="space-y-4 text-gray-600">
                <a :href="`tel:+${contacto.content.whatsappPhone}`"
                  class="flex items-center gap-3 hover:text-red-600 transition group">
                  <img src="/icons/headset.svg" class="w-5 h-5 group-hover:scale-110 transition" alt="Teléfono">
                  <span class="text-lg">+{{ contacto.content.whatsappPhone.replace(/^52/, "51 ") }}</span>
                </a>
                <a :href="`mailto:${contacto.content.emailTo}`"
                  class="flex items-center gap-3 hover:text-red-600 transition group">
                  <img src="/icons/envelope.svg" class="w-5 h-5 group-hover:scale-110 transition" alt="Email">
                  <span class="text-lg">{{ contacto.content.emailTo }}</span>
                </a>
                <p class="flex items-center gap-3">
                  <img src="/icons/clock.svg" class="w-5 h-5" alt="Horario">
                  <span class="text-lg">{{ contacto.content.schedule }}</span>
                </p>
              </div>
              <div class="flex flex-wrap gap-4 mt-8">
                <a :href="`mailto:${contacto.content.emailTo}`"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg">
                  Enviar correo
                </a>
                <a :href="whatsAppLink" target="_blank"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-2xl p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Escríbenos</h2>
            <form class="space-y-6" @submit.prevent="submitForm">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tu correo</label>
                <input v-model="form.email" type="email" required placeholder="tu@email.com"
                  class="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-gray-50">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea v-model="form.message" rows="5" required placeholder="Escribe tu mensaje..."
                  class="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-gray-50 resize-none" />
              </div>
              <button type="submit"
                class="w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition shadow-md hover:shadow-lg">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="relative">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="md:order-1 relative">
            <div class="absolute -top-4 -left-4 w-20 h-20 bg-red-50 rounded-full -z-10" />
            <div class="bg-white shadow-lg rounded-2xl p-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <img src="/icons/geo-alt.svg" class="w-6 h-6 text-red-600" alt="Ubicación">
                Nuestra Ubicación
              </h2>
              <p class="text-gray-700 leading-relaxed text-lg mb-6">
                {{ contacto.content.clinicName }}<br>
                {{ contacto.content.address }}
              </p>
              <div class="space-y-4 text-gray-600 mb-6">
                <a :href="`tel:+${contacto.content.whatsappPhone}`"
                  class="flex items-center gap-3 hover:text-red-600 transition group">
                  <img src="/icons/headset.svg" class="w-5 h-5 group-hover:scale-110 transition" alt="Teléfono">
                  <span class="text-lg">+{{ contacto.content.whatsappPhone.replace(/^52/, "51 ") }}</span>
                </a>
                <p class="flex items-center gap-3">
                  <img src="/icons/clock.svg" class="w-5 h-5" alt="Horario">
                  <span class="text-lg">{{ contacto.content.schedule }}</span>
                </p>
              </div>
              <a v-if="contacto.content.mapLink" :href="contacto.content.mapLink" target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition shadow-md hover:shadow-lg">
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
