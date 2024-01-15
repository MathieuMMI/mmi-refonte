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
  plugins: [
    '~/plugins/gsap.js',
  ],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  vite: {
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
