export default {
  head: {
    title: 'My site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/scss/style.scss'],
  styleResources: {
    scss: [
      '@/assets/scss/settings.scss'
    ]
  },
  plugins: [
    '@/plugins/axios',
    '@/plugins/vClickOutside',
    '@/plugins/global-components'
  ],
  modules: [
    ['@nuxtjs/axios', { baseURL: process.env.BASE_URL || 'site.com' }],
    '@nuxtjs/pwa',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources'
  ],
  buildModules: ['@nuxt/typescript-build'],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  svgSprite: {
    input: '~/static/icons-sprite'
  },
  build: {
    loaders: {
      scss: {
        sourceMap: false
      }
    }
  },
  publicRuntimeConfig: {
    CMS_URL: process.env.CMS_URL || 'site.com'
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'site.com',
    CMS_URL: process.env.CMS_URL || 'site.com'
  }
};
