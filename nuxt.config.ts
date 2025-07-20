export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },
  css: [
    '@/assets/css/tailwind.scss',
    '@/assets/styles/variables.scss',
    '@/assets/css/main.scss',
  ],
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
      },
    },
  },
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
    preconnect: true,
    download: false,
  },
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './app/assets/icons',
      },
    ],
  },
});
