<template>
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-center pt-5">Nuestra Historia</h1>
    <!-- Section 1 -->
    <section
        class="relative flex items-center justify-center bg-white py-3 md:py-5"
    >
        <div class="relative z-10 w-full max-w-6xl px-6 mx-auto">
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <!-- Text -->
                <div class="space-y-6 text-gray-700 text-justify order-1">
                    <p class="text-sm leading-relaxed md:text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus laoreet ex nec lorem posuere, at ultricies augue
                        dapibus. Suspendisse potenti. Donec bibendum, ligula ac
                        mattis elementum, erat purus fermentum est, vel faucibus
                        sapien justo ac neque.
                    </p>
                    <p class="text-sm leading-relaxed md:text-md">
                        Curabitur euismod, magna a fringilla commodo, nulla
                        metus tincidunt lacus, nec facilisis arcu justo ut urna.
                        Praesent vulputate, felis et laoreet gravida, lectus
                        eros volutpat enim, vitae faucibus tortor augue nec
                        neque.
                    </p>
                    <p class="text-sm leading-relaxed md:text-md">
                        Aenean id justo nec lorem malesuada fermentum. Nam
                        volutpat sem vitae lacus cursus, at efficitur elit
                        egestas. Nulla facilisi. Aliquam erat volutpat. Integer
                        et sapien a elit imperdiet convallis.
                    </p>
                </div>

                <!-- Video -->
                <div class="flex justify-center md:justify-end order-2">
                    <iframe
                        src="https://player.vimeo.com/video/322795741"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                        class="w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2 (Reversed layout) -->
    <section
        class="relative flex items-center justify-center bg-white py-3 md:py-10"
    >
        <div class="relative z-10 w-full max-w-6xl px-6 mx-auto">
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <!-- Video first on desktop -->
                <div
                    class="flex justify-center md:justify-start order-2 md:order-1"
                >
                    <iframe
                        src="https://player.vimeo.com/video/322795741"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                        class="w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover"
                    ></iframe>
                </div>

                <!-- Text second on desktop -->
                <div
                    class="space-y-6 text-gray-700 text-justify order-1 md:order-2"
                >
                    <p class="text-sm leading-relaxed md:text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus laoreet ex nec lorem posuere, at ultricies augue
                        dapibus. Suspendisse potenti. Donec bibendum, ligula ac
                        mattis elementum, erat purus fermentum est, vel faucibus
                        sapien justo ac neque.
                    </p>
                    <p class="text-sm leading-relaxed md:text-md">
                        Curabitur euismod, magna a fringilla commodo, nulla
                        metus tincidunt lacus, nec facilisis arcu justo ut urna.
                        Praesent vulputate, felis et laoreet gravida, lectus
                        eros volutpat enim, vitae faucibus tortor augue nec
                        neque.
                    </p>
                    <p class="text-sm leading-relaxed md:text-md">
                        Aenean id justo nec lorem malesuada fermentum. Nam
                        volutpat sem vitae lacus cursus, at efficitur elit
                        egestas. Nulla facilisi. Aliquam erat volutpat. Integer
                        et sapien a elit imperdiet convallis.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Base Grid Component -->
    <DefaultSwiperGallery />
</template>

<script setup>
import DefaultSwiperGallery from "@/components/DefaultSwiperGallery.vue";
</script>
