<template>
    <footer class="bg-gray-100 border-t border-gray-300 text-gray-600">
        <div class="max-w-6xl mx-auto px-6 py-6 text-center text-sm">
            <!-- Links -->
            <p class="space-x-2 mb-2">
                <NuxtLink
                    to="/politicas/terminos"
                    class="hover:text-gray-900 transition"
                >
                    Terms
                </NuxtLink>

                <span>|</span>

                <NuxtLink
                    to="/politicas/reembolso"
                    class="hover:text-gray-900 transition"
                >
                    Refunds
                </NuxtLink>
            </p>

            <p class="text-gray-500 text-xs">
                © 2025 Kroma. Built by CordStart Tech.
            </p>
        </div>
    </footer>
</template>
