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
    cdnURL: "/",
    head: {
      link: [
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
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
