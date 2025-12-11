<template>
    <main class="w-full">
        <!-- ================================
         HERO SECTION (Thinkific Style)
    ================================= -->
        <section
            class="relative h-[80vh] md:h-[85vh] flex items-center bg-cover bg-center"
            style="background-image: url(/images/hero_0.jpeg)"
        >
            <div class="max-w-4xl mx-auto px-6 text-black">
                <h1 class="text-4xl md:text-6xl font-bold leading-tight">
                    {{ courseTitle }}
                </h1>

                <p class="mt-4 text-lg max-w-xl opacity-90">
                    Domina la fotografía dental desde la comodidad de tu hogar u
                    oficina.
                </p>

                <div class="mt-8 flex gap-4 justify-center">
                    <a
                        href="#"
                        class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full"
                    >
                        Accede Ahora
                    </a>

                    <a
                        href="#"
                        class="border border-white/70 text-white font-medium px-6 py-3 rounded-full hover:bg-white/20"
                    >
                        Free Preview
                    </a>
                </div>
            </div>
        </section>

        <!-- ================================
         3 ICON FEATURES
    ================================= -->
        <section class="py-20 bg-white">
            <div
                class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6"
            >
                <div>
                    <img
                        src="/icons/award.svg"
                        alt="Award Icon"
                        class="w-12 h-12 mx-auto text-gray-500"
                    />
                    <h3 class="mt-4 text-xl font-semibold">
                        Curso Certificado
                    </h3>
                    <p class="mt-2 text-gray-600">
                        Continúa tu formación odontológica con el Curso de
                        Fotografía Dental en línea.
                    </p>
                </div>

                <div>
                    <img
                        src="/icons/camera.svg"
                        alt="Camera Icon"
                        class="w-12 h-12 mx-auto text-gray-500"
                    />
                    <h3 class="mt-4 text-xl font-semibold">
                        No se necesita conocimiento previo
                    </h3>
                    <p class="mt-2 text-gray-600">
                        Ya seas principiante o fotógrafo con experiencia, este
                        curso es para ti.
                    </p>
                </div>

                <div>
                    <img
                        src="/icons/mobile.svg"
                        alt="Mobile Icon"
                        class="w-12 h-12 mx-auto text-gray-500"
                    />
                    <h3 class="mt-4 text-xl font-semibold">
                        Accesible desde cualquier dispositivo
                    </h3>
                    <p class="mt-2 text-gray-600">
                        Aprende a tu propio ritmo con acceso ilimitado a los
                        videos.
                    </p>
                </div>
            </div>
        </section>

        <!-- ================================
         BIG VIDEO HERO
    ================================= -->
        <section
            class="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
            style="background-image: url(/images/hero_0.jpeg)"
        >
            <button
                @click="openVideo"
                class="flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white w-16 h-16 md:w-20 md:h-20 transition-all duration-300"
            >
                <img
                    src="/icons/play.svg"
                    alt="Play Icon"
                    class="w-6 h-6 md:w-8 md:h-8"
                />
            </button>

            <!-- VIDEO MODAL -->
            <div
                v-if="showVideo"
                class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            >
                <div class="w-full max-w-4xl">
                    <iframe
                        class="w-full aspect-video rounded-lg"
                        src="https://www.youtube.com/embed/X5scq_ZG6lk?start=250"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    ></iframe>

                    <button
                        class="mt-4 px-6 py-2 bg-white text-gray-800 font-medium rounded"
                        @click="showVideo = false"
                    >
                        Close
                    </button>
                </div>
            </div>
        </section>

        <!-- ================================
         TEXT + IMAGE PREVIEW
    ================================= -->
        <section class="py-24 bg-white">
            <div
                class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6"
            >
                <div class="text-center md:text-left">
                    <h2 class="text-3xl md:text-4xl font-light leading-snug">
                        Domina el arte de la Fotografía Odontológica a tu propio
                        ritmo, en tu propio tiempo.
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Llevando los talleres del Dr. Jaime Ramos directamente a
                        tu hogar y oficina.
                    </p>
                </div>

                <img src="/images/hero_0.jpeg" class="rounded-lg shadow-xl" />
            </div>
        </section>

        <!-- ================================
         CAPÍTULO PREVIEW (LOOP)
    ================================= -->
        <section class="py-20 bg-gray-50">
            <h2 class="text-3xl font-light text-center mb-8">
                Vista Previa del Curso
            </h2>

            <p class="text-center text-gray-600 mb-12">
                Mira la introducción de cada capítulo para tener una muestra de
                lo que viene.
            </p>

            <div class="space-y-0">
                <!-- CAPÍTULO 1 -->
                <div
                    class="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
                    style="background-image: url(/images/hero_0.jpeg)"
                >
                    <button class="p-6 bg-white/80 rounded-full shadow-lg">
                        <img
                            src="/icons/play.svg"
                            alt="Play Icon"
                            class="w-6 h-6 md:w-8 md:h-8"
                        />
                    </button>
                    <div class="absolute bottom-10 text-center text-white">
                        <h3 class="text-5xl font-light">
                            CAPÍTULO 1<br />Fundamentos de la Fotografía
                        </h3>
                    </div>
                </div>

                <!-- CAPÍTULO 2 -->
                <div
                    class="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
                    style="background-image: url(/images/hero_0.jpeg)"
                >
                    <button class="p-6 bg-white/80 rounded-full shadow-lg">
                        <img
                            src="/icons/play.svg"
                            alt="Play Icon"
                            class="w-6 h-6 md:w-8 md:h-8"
                        />
                    </button>
                    <div class="absolute bottom-10 text-white text-center">
                        <h3 class="text-5xl font-light">
                            CAPÍTULO 2<br />Equipamiento Intro
                        </h3>
                    </div>
                </div>

                <!-- CAPÍTULO 3 -->
                <div
                    class="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
                    style="background-image: url(/images/hero_0.jpeg)"
                >
                    <button class="p-6 bg-white/80 rounded-full shadow-lg">
                        <img
                            src="/icons/play.svg"
                            alt="Play Icon"
                            class="w-6 h-6 md:w-8 md:h-8"
                        />
                    </button>
                    <div class="absolute bottom-10 text-white text-center">
                        <h3 class="text-5xl font-light">
                            CAPÍTULO 3<br />Final
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
definePageMeta({ layout: "portal" });

const route = useRoute();
const slug = route.params.slug;

const courseTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const showVideo = ref(false);
const openVideo = () => (showVideo.value = true);
</script>

<style>
/* Ensure text looks elegant like Thinkific */
h1,
h2,
h3 {
    font-family: "Inter", sans-serif;
}
</style>
