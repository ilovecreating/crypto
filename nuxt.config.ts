// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  devtools: { enabled: false },
  vite: {
    build: {
      target: ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15'],
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2022',
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  modules: ['@nuxt/test-utils/module'],
});
