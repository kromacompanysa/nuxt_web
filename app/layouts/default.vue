<!-- app/layouts/default.vue -->
<template>
    <div class="min-h-screen flex flex-col bg-white">
        <!-- Global Navigation -->
        <DefaultNavBar />

        <!-- Page Content -->
        <main class="flex-1 pt-[90px]">
            <div class="max-w-7xl mx-auto px-6 py-1">
                <DefaultBreadcrumbs />
            </div>
            <!-- pt-[90px] ensures the header does NOT overlap -->
            <slot />
        </main>

        <!-- Footer -->
        <DefaultFooter />
    </div>
</template>

<style scoped>
/* Optional: smooth page transitions */
main {
    animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
