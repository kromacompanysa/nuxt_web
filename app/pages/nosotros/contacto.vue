<template>
    <div class="space-y-10">
        <section class="max-w-6xl mx-auto px-6">
            <h1 class="text-4xl font-bold text-center py-5 capitalize">
                {{ contactoSection?.label ?? "Contacto" }}
            </h1>

            <div class="grid md:grid-cols-2 gap-12 items-start">
                <div class="space-y-6">
                    <div class="bg-white shadow-lg rounded-2xl p-8">
                        <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <span class="text-red-600">✉️</span> Contáctanos
                        </h3>
                        <p class="text-gray-700 leading-relaxed">Consultorio Kroma <br ></p>
                        <div class="mt-6 space-y-2 text-gray-600">
                            <p>📞 +51 999 999 999</p>
                            <p>✉ contacto@kroma.pe</p>
                            <p>🕐 Lun - Sáb : 9:00 AM - 7:00 PM</p>
                        </div>
                        <a
href="mailto:contacto@kroma.pe"
                            class="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                            Enviar correo
                        </a>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-2xl p-8">
                    <h3 class="text-2xl font-semibold mb-6">Escríbenos</h3>
                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Tu correo</label>
                            <input
v-model="form.email" type="email" required placeholder="tu@email.com"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" >
                        </div>
                        <div>
                            <label class="block text-sm text-gray-600 mb-1">Mensaje</label>
                            <textarea
v-model="form.message" rows="4" required placeholder="Escribe tu mensaje..."
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
                        </div>
                        <button
type="submit"
                            class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
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
                            <span class="text-red-600">📍</span> Nuestra Ubicación
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Clínica Kroma <br >
                            Av. Lambramani #175 <br >
                            Arequipa, Arequipa - Perú
                        </p>
                        <div class="mt-6 space-y-2 text-gray-600">
                            <p>📞 +51 999 999 999</p>
                            <p>🕐 Lun - Sáb : 9:00 AM - 7:00 PM</p>
                        </div>
                        <a
 v-if="contact.mapLink" :href="contact.mapLink" target="_blank"
                            class="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                            Cómo llegar
                        </a>
                    </div>
                </div>

                <div class="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
 v-if="contact.mapUrl" :src="contact.mapUrl" width="100%" height="420"
                        style="border: 0" allowfullscreen loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive } from "vue";

// 1. Config
const appConfig = useAppConfig();
const navItems = appConfig.navbar;
const nosotrosSection = navItems.find((item) => item.label === "nosotros");
const contactoSection = nosotrosSection?.items?.find((item) => item.label === "contacto") ?? {
    label: "contacto",
};
const contact = appConfig.contact;

// 2. Form logic
const form = reactive({
    email: "",
    message: "",
});

const submitForm = () => {
    const to = contact.emailTo || form.email;
    const from = contact.emailFrom || form.email;

    window.location.href = `mailto:${to}?subject=Contacto Kroma&body=${encodeURIComponent(
        `De: ${from}\n\nMensaje:\n${form.message}`,
    )}`;

    form.email = "";
    form.message = "";
};
</script>
