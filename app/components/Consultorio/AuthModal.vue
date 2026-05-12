<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="$emit('close')"
        />

        <div
          class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden anim-scale-in"
        >
          <button
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1"
            @click="$emit('close')"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="p-8">
            <div class="text-center mb-8">
              <img src="/images/kroma_png_black.png" alt="Kroma" class="h-12 mx-auto mb-4">
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ isSignUp ? 'Crear Cuenta' : 'Bienvenido' }}
              </h2>
              <p class="text-gray-500 mt-1 text-sm">
                {{ isSignUp ? 'Inscríbete para agendar citas' : 'Inicia sesión para continuar' }}
              </p>
            </div>

            <div class="flex mb-6 bg-gray-100 rounded-full p-1">
              <button
                class="flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300"
                :class="!isSignUp ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
                @click="isSignUp = false"
              >
                Acceder
              </button>
              <button
                class="flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300"
                :class="isSignUp ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
                @click="isSignUp = true"
              >
                Inscribirte
              </button>
            </div>

            <form class="space-y-4" @submit.prevent="handleSubmit">
              <div v-if="isSignUp">
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input
                  type="text"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-gray-50"
                  placeholder="Tu nombre"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-gray-50"
                  placeholder="correo@ejemplo.com"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input
                  type="password"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition bg-gray-50"
                  placeholder="••••••••"
                >
              </div>

              <button
                type="submit"
                class="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                {{ isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión' }}
              </button>
            </form>

            <div class="mt-6 text-center">
              <p class="text-sm text-gray-500">
                <template v-if="isSignUp">
                  ¿Ya tienes cuenta?
                  <a href="#" class="text-red-600 hover:underline font-medium">Acceder</a>
                </template>
                <template v-else>
                  ¿No tienes cuenta?
                  <a href="#" class="text-red-600 hover:underline font-medium">Inscribirte</a>
                </template>
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-100">
              <p class="text-xs text-center text-gray-400">
                Al continuar, aceptas nuestros
                <a href="#" class="text-gray-500 underline">Términos</a>
                y
                <a href="#" class="text-gray-500 underline">Política de Privacidad</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialMode: {
    type: String,
    default: 'signin'
  }
});

defineEmits(['close']);

const isSignUp = ref(false);

const handleSubmit = () => {
  console.log('Form submitted - Cognito integration coming soon');
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
