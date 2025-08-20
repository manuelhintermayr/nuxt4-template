// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  
  css: [
    'mouse-follower/dist/mouse-follower.min.css',
    '~/assets/css/main.css',
    '~/assets/css/animations.css'
  ],
  
  components: [
    {
      path: '~/components'
    }
  ],

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' }
    ],
    debug: false
  },
})
