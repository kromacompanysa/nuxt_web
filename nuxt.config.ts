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
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
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
