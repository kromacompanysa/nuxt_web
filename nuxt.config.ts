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
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Kroma — Clínica Odontológica y Academia",
      htmlAttrs: { lang: "es" },
      meta: [
        {
          name: "description",
          content:
            "Kroma es una clínica odontológica integral en Arequipa con laboratorio propio y academia de formación continua para profesionales dentales.",
        },
        {
          name: "keywords",
          content:
            "clínica dental, odontología, Arequipa, implantes, ortodoncia, cursos dentales, academia odontológica",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Manrope:wght@300;400;500;600;700;800&display=swap",
        },
        {
          rel: "icon",
          type: "image/jpeg",
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
