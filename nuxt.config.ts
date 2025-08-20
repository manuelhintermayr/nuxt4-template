// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  
  // Configuration for subfolder deployment
  app: {
    baseURL: '/nuxt4-template/', // Change this to your desired subfolder name
    buildAssetsDir: '/_nuxt/', // Keep assets in _nuxt folder
    cdnURL: '' // Leave empty for relative paths
  },
  
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
