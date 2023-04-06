// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Mon site de voiture',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                  name: 'description',
                  content: 'Site de concession de voiture'
                }
              ],
            htmlAttrs: { lang: "fr" },
        },
    },
    css:[
        "@/assets/css/global.css",
    ],
    modules: [
        '@nuxt/image-edge',
    ]

 
})
