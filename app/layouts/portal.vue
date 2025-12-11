<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- New Navbar -->
        <PortalNavBar />

        <main class="flex-1 pt-20">
            <slot />
        </main>

        <!-- New Footer -->
        <PortalFooter />
    </div>
</template>
