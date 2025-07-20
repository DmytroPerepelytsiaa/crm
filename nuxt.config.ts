export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
  ],
  css: [
    '@/assets/css/tailwind.scss',
    '@/assets/styles/variables.scss',
    '@/assets/css/main.scss',
  ],
  googleFonts: {
    families: {
      "Plus Jakarta Sans": [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
    preconnect: true,
    download: false 
  },
  eslint: {
    config: {
      stylistic: true,
    }
  }
})