// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  module: ["@nuxt/ui"],
  css: ["@/assets/css/fonts.css"],
  publicRuntimeConfig: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
  },
});
