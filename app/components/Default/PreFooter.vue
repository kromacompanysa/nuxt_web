<!-- app/components/Default/PreFooter.vue -->
<template>
  <section class="relative py-24 overflow-hidden bg-gray-50 text-gray-900 border-t border-gray-200">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-1/3 h-1/2 bg-red-600/[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2">
    </div>
    <div
      class="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gray-200/50 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2">
    </div>

    <div class="relative px-6 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-3">

        <!-- Left Column: Media & Brand -->
        <div class="flex flex-col">
          <div class="lg:sticky lg:top-24">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-gray-200 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000">
              </div>
              <video src="/assets/videos/show_01.mp4" autoplay muted loop playsinline
                class="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-xl border border-white" />
            </div>

            <div class="mt-10 space-y-4">
              <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
                Kroma <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-gray-600">Hub</span>
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed max-w-sm">
                Integrando salud, formación y tecnología para elevar el estándar de la odontología moderna.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Columns: Services Grid -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <template v-for="nav in config.navbar" :key="nav.label">
              <div v-if="['consultorio', 'academia', 'laboratorio'].includes(nav.label)" :class="[
                'relative group p-8 rounded-3xl border transition-all duration-500 overflow-hidden',
                'bg-white shadow-sm border-gray-200',
                'hover:border-red-600/30 hover:shadow-2xl hover:shadow-red-900/5 hover:-translate-y-1',
                nav.label === 'consultorio' ? 'md:col-span-2' : 'col-span-1'
              ]">
                <!-- Background Theme Glow -->
                <div class="absolute -top-24 -right-24 w-48 h-48 bg-red-50/50 blur-[60px] rounded-full group-hover:bg-red-50 transition-colors duration-700"></div>

                <!-- Social Links Above Title -->
                <div class="flex gap-3 mb-6 relative z-10">
                  <a href="#"
                    class="flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-600 border border-green-100 rounded-full hover:bg-green-100 transition-colors">
                    <img src="/icons/whatsapp.svg" class="w-3.5 h-3.5" alt="WhatsApp" />
                    WhatsApp
                  </a>
                  <a href="#"
                    class="flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 rounded-full hover:bg-red-100 transition-colors">
                    <img src="/icons/instagram.svg" class="w-3.5 h-3.5" alt="Instagram" />
                    Instagram
                  </a>
                </div>

                <div class="flex items-end justify-between mb-8 relative z-10">
                  <div>
                    <span
                      class="text-[11px] font-bold text-red-600 uppercase tracking-[0.2em] mb-1 block">Especialidad</span>
                    <h3 class="text-3xl font-bold text-gray-900 capitalize tracking-tight">{{ nav.label }}</h3>
                  </div>
                  <a :href="nav.href"
                    class="group/link flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 hover:border-red-200">
                    Explorar
                    <span class="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>

                <!-- Sub-items Grid -->
                <div
                  :class="['grid gap-8 relative z-10', nav.label === 'consultorio' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1']">
                  <div v-for="group in nav.items" :key="group.label" class="space-y-4">
                    <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                      {{ group.label }}
                    </h4>

                    <ul class="space-y-3">
                      <li v-for="item in group.items" :key="item.label">
                        <a :href="item.href"
                          class="text-sm text-gray-600 hover:text-red-600 flex items-center transition-all duration-300 group/item">
                          <span class="w-1.5 h-px bg-gray-300 mr-3 transition-all group-hover/item:w-4 group-hover/item:bg-red-500"></span>
                          {{ item.label }}
                        </a>
                      </li>
                      <li v-if="group.type === 'link'">
                        <a :href="group.href"
                          class="text-sm text-gray-600 hover:text-red-600 flex items-center transition-all duration-300 group/item">
                          <span class="w-1.5 h-px bg-gray-300 mr-3 transition-all group-hover/item:w-4"></span>
                          {{ group.label }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Decorative Subtle Texture -->
                <div class="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
            </template>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const config = {
  navbar: [
    {
      label: "consultorio",
      href: "/consultorio",
      items: [
        {
          label: "especialidades clínicas",
          items: [
            { label: "periodoncia avanzada", href: "/consultorio/especialidades/periodoncia" },
            { label: "endodoncia microscópica", href: "/consultorio/especialidades/endodoncia" },
            { label: "ortodoncia invisible", href: "/consultorio/especialidades/ortodoncia" },
            { label: "rehabilitación integral", href: "/consultorio/especialidades/rehabilitacion-oral" },
          ],
        },
      ],
    },
    {
      label: "academia",
      href: "/academia",
      items: [
        {
          label: "formación continua",
          items: [
            { label: "fotografía clínica", href: "/academia/especialidad/fotografia-odontologica" },
            { label: "odontología digital", href: "/academia/especialidad/odontologia-digital" },
          ],
        },
        {
          label: "e-learning",
          items: [
            { label: "bootcamp virtual resinas", href: "/academia/cursos-virtuales/resinas-intensivo" },
          ],
        },
      ],
    },
    {
      label: "laboratorio",
      href: "/laboratorio",
      items: [
        {
          label: "soluciones cad/cam",
          items: [
            { label: "impresión 3d", href: "/laboratorio/servicios/impresion" },
            { label: "diseño digital", href: "/laboratorio/servicios/diseño-3d" },
          ],
        },
      ],
    },
  ],
};
</script>

<style scoped>
/* Refined for light theme */
.shadow-xl {
  shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
