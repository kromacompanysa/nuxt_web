<template>
    <section class="max-w-6xl mx-auto px-6 pb-12 space-y-12">
        <header class="text-center">
            <h1 class="text-4xl md:text-5xl font-semibold capitalize">
                {{ productSection.label }}
            </h1>
            <p class="mt-4 text-gray-500 max-w-2xl mx-auto">
                Explora nuestra línea de productos especializados de alta calidad.
            </p>
        </header>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="product in products" :key="product.id"
                class="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div class="relative overflow-hidden h-64 bg-gray-100">
                    <img :src="product.image" :alt="product.label"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <span
                        class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-700 shadow-sm">
                        {{ product.category }}
                    </span>
                </div>

                <div class="p-6 flex flex-col grow">
                    <h2 class="text-xl font-semibold text-gray-800 capitalize">
                        {{ product.label }}
                    </h2>

                    <p class="mt-2 text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {{ product.description }}
                    </p>

                    <div class="mt-auto pt-6 flex items-center justify-between">
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-400 uppercase font-medium">Precio</span>
                            <span class="text-2xl font-bold text-gray-900">
                                ${{ product.price.toFixed(2) }}
                            </span>
                        </div>

                        <div class="flex items-center gap-2">
                            <NuxtLink :to="product.href"
                                class="group flex items-center gap-0 hover:gap-2 bg-gray-100 text-gray-600 p-2 hover:px-3 rounded-lg transition-all duration-300 ease-in-out overflow-hidden">
                                <img src="/icons/info.svg" class="w-5 h-5 opacity-70 group-hover:opacity-100"
                                    alt="info" />
                                <span
                                    class="max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 text-xs font-medium transition-all duration-300 whitespace-nowrap">
                                    Detalles
                                </span>
                            </NuxtLink>

                            <button
                                class="group flex items-center gap-0 hover:gap-2 bg-red-600 text-white p-2 hover:px-3 rounded-lg transition-all duration-300 ease-in-out overflow-hidden shadow-sm">
                                <img src="/icons/cart4.svg" class="w-5 h-5 brightness-0 invert" alt="cart" />
                                <span
                                    class="max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 text-xs font-medium transition-all duration-300 whitespace-nowrap">
                                    Agregar
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
// Load config to match your existing logic
const navItems = useAppConfig().navbar || [];

// Try to find "productos" in your navbar config
const productSection = navItems.find((item) => item.label === "productos") ?? {
    label: "Nuestros Productos",
};

// Mock Data for 6 products mimicking your app's style
const products = [
    {
        id: 1,
        label: "Kit Odontológico Pro",
        price: 150.0,
        category: "Clínica",
        image: "/images/hero_0.jpeg",
        href: "/productos/kit-pro",
        description: "Set completo para intervenciones de alta precisión con acabados ergonómicos.",
    },
    {
        id: 2,
        label: "Resina Estética A2",
        price: 45.5,
        category: "Materiales",
        image: "/images/pre_post_01.jpg",
        href: "/productos/resina-a2",
        description: "Resina de nanorelleno con alto brillo y mimetismo cromático excepcional.",
    },
    {
        id: 3,
        label: "Lámpara LED UV",
        price: 89.99,
        category: "Equipos",
        image: "/images/pre_post_02.jpeg",
        href: "/productos/lampara-led",
        description: "Polimerización rápida y efectiva con espectro de luz optimizado.",
    },
    {
        id: 4,
        label: "Escáner Intraoral X1",
        price: 1200.0,
        category: "Digital",
        image: "/images/pre_post_03.jpeg",
        href: "/productos/escaner-x1",
        description: "Digitalización 3D en tiempo real para diagnósticos precisos y rápidos.",
    },
    {
        id: 5,
        label: "Silicona de Adición",
        price: 65.0,
        category: "Materiales",
        image: "/images/hero_1.jpg",
        href: "/productos/silicona",
        description: "Máxima precisión en toma de impresiones con excelente estabilidad dimensional.",
    },
    {
        id: 6,
        label: "Fresas de Diamante",
        price: 12.5,
        category: "Instrumental",
        image: "/images/hero_2.JPG",
        href: "/productos/fresas",
        description: "Corte suave y duradero para preparaciones cavitarias eficientes.",
    },
];
</script>
