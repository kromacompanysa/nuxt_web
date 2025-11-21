<!-- app/layouts/default.vue -->
<template>
    <div class="min-h-screen flex flex-col bg-white">
        <!-- Global Navigation -->
        <DefaultNavBar />

        <!-- Page Content -->
        <main class="flex-1 pt-[90px]">
            <!-- pt-[90px] ensures the header does NOT overlap -->
            <slot />
        </main>

        <!-- Grid -->
        <DefaultGrid />

        <!-- Pre-Footer -->
        <DefaultPreFooter />

        <!-- Footer -->
        <DefaultFooter />
    </div>
</template>

<script setup>
import DefaultNavBar from "@/components/DefaultNavBar.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
import DefaultPreFooter from "@/components/DefaultPreFooter.vue";
import DefaultGrid from "@/components/DefaultGrid.vue";
</script>

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
