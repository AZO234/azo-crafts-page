// ビルド時の日付を生成（JST）
const buildDate = (() => {
  const d = new Date()
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000)
  const y = jst.getUTCFullYear()
  const m = String(jst.getUTCMonth() + 1).padStart(2, '0')
  const day = String(jst.getUTCDate()).padStart(2, '0')
  return `${y}/${m}/${day}`
})()

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  srcDir: 'app/',

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vite-pwa/nuxt',
    'nuxt-gtag',
  ],

  runtimeConfig: {
    public: { buildDate },
  },

  router: {
    options: { strict: false },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'AZO crafts page',
      short_name: 'AZO crafts',
      description: 'AZO234 — OSS Engineer, Hiroshima, Japan',
      theme_color: '#00e5ff',
      background_color: '#0a0c10',
      display: 'standalone',
      start_url: '/',
      lang: 'ja',
      icons: [
        { src: '/favicon512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,webp,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
    devOptions: { enabled: false },
  },

  nitro: {
    prerender: {
      routes: ['/', '/github', '/articles'],
      crawlLinks: true,
    },
  },

  gtag: {
    id: 'G-7113BVBJ8V',
  },

  app: {
    head: {
      title: 'AZO crafts page',
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AZO234 — OSS Engineer, Hiroshima, Japan' },
        { name: 'author', content: 'AZO234' },
        { name: 'theme-color', content: '#00e5ff' },
        { property: 'og:site_name', content: 'AZO crafts page' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://domisan.sakura.ne.jp/' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@AZO234' },
        { name: 'twitter:creator', content: '@AZO234' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Zen+Kaku+Gothic+New:wght@300;400;700&display=swap',
        },
        { rel: 'canonical', href: 'https://domisan.sakura.ne.jp/' },
        { rel: 'icon', href: '/favicon512.png', type: 'image/png' },
      ],
      script: [
        // Twitter ウィジェット — tagPosition: bodyClose で確実に読み込む
        {
          src: 'https://platform.twitter.com/widgets.js',
          async: true,
          type: 'text/javascript',
          tagPosition: 'bodyClose',
        },
        // LINE Social Plugin
        {
          src: 'https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js',
          async: true,
          defer: true,
          tagPosition: 'bodyClose',
        },
      ],
    },
  },
})
