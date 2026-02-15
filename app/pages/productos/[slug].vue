<template>
    <main class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
            <section class="space-y-4">
                <div class="overflow-hidden rounded-2xl bg-gray-50 shadow-inner border border-gray-100">
                    <img :src="product?.image" :alt="product?.label"
                        class="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <div v-for="i in 4" :key="i"
                        class="h-24 bg-gray-100 rounded-lg border cursor-pointer hover:border-red-500 transition-colors overflow-hidden">
                        <img :src="product?.image" class="w-full h-full object-cover opacity-50 hover:opacity-100" />
                    </div>
                </div>
            </section>

            <section class="lg:sticky lg:top-24 space-y-8">
                <div>
                    <span
                        class="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                        {{ product?.category }}
                    </span>
                    <h1 class="text-4xl font-bold text-gray-900 capitalize mb-4">
                        {{ product?.label }}
                    </h1>
                    <p class="text-3xl font-light text-gray-900">
                        ${{ product?.price.toFixed(2) }}
                        <span class="text-sm text-gray-400 font-normal">USD</span>
                    </p>
                </div>

                <div class="border-t border-b border-gray-100 py-6">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Descripción</h3>
                    <p class="text-gray-600 leading-relaxed">
                        {{ product?.description }}
                        Nuestro producto está diseñado bajo los más altos estándares de calidad, garantizando
                        durabilidad y precisión en cada uso clínico. Ideal para profesionales que buscan
                        excelencia y resultados estéticos superiores.
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="flex items-center border rounded-lg overflow-hidden">
                            <button class="px-4 py-2 hover:bg-gray-50 border-r">-</button>
                            <span class="px-6 py-2 font-medium">1</span>
                            <button class="px-4 py-2 hover:bg-gray-50 border-l">+</button>
                        </div>

                        <button
                            class="grow flex items-center justify-center gap-3 bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg active:scale-95">
                            <img src="/icons/cart4.svg" class="w-5 h-5 brightness-0 invert" />
                            Agregar al Carrito
                        </button>
                    </div>

                    <NuxtLink to="/nosotros/contacto"
                        class="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm py-2">
                        <img src="/icons/info.svg" class="w-4 h-4 opacity-50" />
                        ¿Tienes dudas sobre este producto? Contáctanos
                    </NuxtLink>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
const route = useRoute();

// Mock function: In a real app, you'd use useFetch to get data by the slug
// For now, we mimic the structure of your previous data

const products = [
    {
        id: 1,
        slug: "kit-pro",
        label: "Kit Odontológico Pro",
        price: 150.0,
        category: "Clínica",
        image: "/images/hero_0.jpeg",
        description: "Set completo para intervenciones de alta precisión con acabados ergonómicos.",
    },
    {
        id: 2,
        slug: "resina-a2",
        label: "Resina Estética A2",
        price: 45.5,
        category: "Materiales",
        image: "/images/pre_post_01.jpg",
        description: "Resina de nanorelleno con alto brillo y mimetismo cromático excepcional.",
    },
    {
        id: 3,
        slug: "lampara-led",
        label: "Lámpara LED UV",
        price: 89.99,
        category: "Equipos",
        image: "/images/pre_post_02.jpeg",
        description: "Polimerización rápida y efectiva con espectro de luz optimizado.",
    },
    {
        id: 4,
        slug: "escaner-x1",
        label: "Escáner Intraoral X1",
        price: 1200.0,
        category: "Digital",
        image: "/images/pre_post_03.jpeg",
        description: "Digitalización 3D en tiempo real para diagnósticos precisos y rápidos.",
    },
    {
        id: 5,
        slug: "silicona",
        label: "Silicona de Adición",
        price: 65.0,
        category: "Materiales",
        image: "/images/hero_1.jpg",
        description: "Máxima precisión en toma de impresiones con excelente estabilidad dimensional.",
    },
    {
        id: 6,
        slug: "fresas",
        label: "Fresas de Diamante",
        price: 12.5,
        category: "Instrumental",
        image: "/images/hero_2.JPG",
        description: "Corte suave y duradero para preparaciones cavitarias eficientes.",
    },
];

// Find the specific product based on the URL slug
const product = products.find((p) => p.slug === route.params.slug) || products[0];

useHead({
    title: `${product.label} | Kroma`,
    meta: [{ name: "description", content: product.description }],
});
</script>
