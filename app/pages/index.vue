<!-- app/pages/index.vue -->
<template>
    <section class="max-w-7xl mx-auto px-6 py-20">
        <!-- HERO SECTION -->
        <div class="text-center space-y-6">
            <h1
                class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
                Bienvenido a <span class="text-red-600">Kroma</span>
            </h1>

            <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                Clínica odontológica y academia especializada. Brindamos
                atención profesional y formación avanzada.
            </p>

            <div class="flex justify-center gap-4 pt-6">
                <NuxtLink
                    to="/contact"
                    class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                    Agenda tu cita
                </NuxtLink>

                <NuxtLink
                    to="/about"
                    class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                    Conócenos
                </NuxtLink>
            </div>
        </div>

        <!-- FEATURES / INFO BLOCKS -->
        <div class="grid md:grid-cols-3 gap-10 mt-20">
            <div
                class="p-6 border rounded-xl shadow-sm hover:shadow transition"
            >
                <h3 class="text-xl font-semibold mb-3">Clínica dental</h3>
                <p class="text-gray-600">
                    Tratamientos modernos realizados por especialistas
                    capacitados.
                </p>
            </div>

            <div
                class="p-6 border rounded-xl shadow-sm hover:shadow transition"
            >
                <h3 class="text-xl font-semibold mb-3">Academia</h3>
                <p class="text-gray-600">
                    Cursos y especializaciones para profesionales de
                    odontología.
                </p>
            </div>

            <div
                class="p-6 border rounded-xl shadow-sm hover:shadow transition"
            >
                <h3 class="text-xl font-semibold mb-3">Calidad y tecnología</h3>
                <p class="text-gray-600">
                    Equipos modernos, atención personalizada y procedimientos
                    seguros.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup></script>
