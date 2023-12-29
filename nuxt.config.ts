// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: ['@nuxtjs/prismic',
  ],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";
          `
        }
      }
    }
  },
  css: [
    '@/scss/main.scss'
  ],
})
