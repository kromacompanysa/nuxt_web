<template>
  <footer class="text-gray-400 border-t border-gray-800 bg-gray-950 mt-10">
    <div class="py-8 px-6 mx-auto max-w-6xl text-sm text-center">
      <!-- Policies -->
      <p class="mb-2 space-x-2">
        <NuxtLink to="/politicas/terminos" class="transition hover:text-white">
          Términos de Servicio
        </NuxtLink>

        <span>|</span>

        <NuxtLink to="/politicas/reembolso" class="transition hover:text-white">
          Política de Reembolso
        </NuxtLink>

        <span>|</span>

        <a href="https://docs.cordstart.com/projects/7/" target="_blank" class="transition hover:text-white">
          Desarrollado por CordStart Tech
        </a>
      </p>

      <!-- Copyright -->
      <p class="text-gray-500">© {{ new Date().getFullYear() }}, Kroma Company S.A. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>
