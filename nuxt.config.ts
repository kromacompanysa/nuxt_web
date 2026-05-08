// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  srcDir: "app/",

  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],

  app: {
    baseURL: "/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Dental Clinic - Kroma', // Good for SEO
      link: [
        {
          rel: "icon",
          type: "image/jpeg", // Double check if it's .jpeg or .jpg or .png
          href: "/favicon.jpeg",
        },
      ],
    },
  },

  nitro: {
    preset: "static",
  },

  compatibilityDate: "2025-07-15",

  modules: ["@nuxt/eslint"],

  devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "swiper/vue",
        "swiper/modules",
      ],
    },
  },
});
