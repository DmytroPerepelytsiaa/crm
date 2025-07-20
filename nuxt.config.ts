// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
  ],
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/tailwind.scss',
    '@/assets/styles/variables.scss',
  ],
})