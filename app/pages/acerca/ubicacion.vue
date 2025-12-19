
<template>
    <section class="max-w-6xl mx-auto px-6 py-10">
        <!-- Heading -->
        <!-- <h1 class="text-4xl font-bold text-center mb-4">contacto</h1> -->
        <!-- <p class="text-center text-gray-500 mb-16"> -->
        <!--   Encuéntranos y agenda tu cita con facilidad -->
        <!-- </p> -->

        <!-- Layout -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- LEFT: Info -->
            <div class="space-y-6">
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
                        <p>✉ contacto@kroma.pe</p>
                        <p>🕐 Lun - Sáb : 9:00 AM - 7:00 PM</p>
                    </div>

                    <a
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.1912766416547!2d-71.5234735430459!3d-16.409874778330668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0239f9f507%3A0x8587ee56077b30a2!2sAv.%20Lambramani%20175%2C%20Arequipa%2004002!5e0!3m2!1sen!2spe!4v1764101713789!5m2!1sen!2spe"
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
const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.790988!2d-77.002!3d-12.089!2m3!1f0!2f0!3f0";
</script>
