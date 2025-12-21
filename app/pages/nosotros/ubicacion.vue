<template>
    <section class="max-w-6xl mx-auto px-6">
        <!-- Heading -->
        <h1 class="text-4xl font-bold text-center py-5 capitalize">
            {{ ubicacionSection?.label ?? "x" }}
        </h1>

        <!-- Layout -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- LEFT: Info -->
            <div class="space-y-6">
                <DefaultBreadcrumbs />
                <div class="bg-white shadow-lg rounded-2xl p-8">
                    <h3
                        class="text-2xl font-semibold mb-4 flex items-center gap-2"
                    >
                        <span class="text-red-600">📍</span> Nuestra Ubicación
                    </h3>

                    <p class="text-gray-700 leading-relaxed">
                        Clínica Kroma <br />
                        Av. Lambramani #175 <br />
                        Arequipa, Arequipa - Perú
                    </p>

                    <div class="mt-6 space-y-2 text-gray-600">
                        <p>📞 +51 999 999 999</p>
                        <p>🕐 Lun - Sáb : 9:00 AM - 7:00 PM</p>
                    </div>

                    <a
                        v-if="ubicacionSection.mapLink"
                        :href="ubicacionSection.mapLink"
                        href="https://www.google.com/maps/place/Av.+Lambramani+175,+Arequipa+04002"
                        target="_blank"
                        class="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
                    >
                        Cómo llegar
                    </a>
                </div>
            </div>

            <!-- RIGHT: Google Map -->
            <div class="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    :src="ubicacionSection.mapUrl"
                    width="100%"
                    height="420"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
// Load navigation items from app.config.ts
const navItems = useAppConfig().navbar;

// 1️⃣ Get "nosotros" section
const nosotrosSection = navItems.find((item) => item.label === "nosotros");

// 2️⃣ Get "ubicacion" item
const ubicacionSection = nosotrosSection?.items?.find(
    (item) => item.label === "ubicacion",
) ?? {
    label: "ubicacion",
};
</script>
