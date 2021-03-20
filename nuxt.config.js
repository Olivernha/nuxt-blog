export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'My cool web blog'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      }
    ]
  },
  loading: {color: '#fa923f', height: '4px', duration: 5000},
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/data-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL:process.env.BASE_URL || 'https://nuxt-blog-db96c-default-rtdb.firebaseio.com'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
    },

  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-db96c-default-rtdb.firebaseio.com'
  },

  transition:{
    name:'fade',
    mode:'out-in',
  }
}
