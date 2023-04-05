// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Mon site de voiture',
            htmlAttrs: { lang: "fr" },
        },
    },
    css:[
        "@/assets/css/global.css",
    ]
})
