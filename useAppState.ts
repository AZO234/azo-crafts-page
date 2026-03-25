import { ref, watch, computed } from 'vue'

export type FontSize = 'sm' | 'md' | 'lg'
export type Locale   = 'ja' | 'en'

// ── シングルトン状態 ─────────────────────────────────────────
const isDark   = ref(true)
const fontSize = ref<FontSize>('md')
const locale   = ref<Locale>('ja')

// ── i18n ────────────────────────────────────────────────────
const messages = {
  ja: {
    nav: {
      webApps: 'WEB APPS', emulator: 'EMULATOR',
      articles: 'ARTICLES', shopping: 'SHOPPING', github: 'GITHUB', oldPage: 'OLD PAGE',
    },
    hero: {
      eyebrow: 'AZO234 · プロフィール',
      tagline: '熱血プログラマー屋さん !! 🔥',
      sub: 'OSS engineer working deep in the guts of software.',
    },
    sections: {
      webApps: 'Web Apps', github: 'GitHub Projects',
      articles: 'Articles', shopping: 'Shopping Sites',
    },
    stats: {
      location: 'LOCATION', github: 'GITHUB',
      lastUpdate: 'LAST UPDATE', mail: 'MAIL', license: 'LICENSE',
    },
    donate: { label: 'Please donate to my researching!' },
    status: { page: 'PAGE', lang: 'LANG', update: 'LAST UPDATE' },
  },
  en: {
    nav: {
      webApps: 'WEB APPS', emulator: 'EMULATOR',
      articles: 'ARTICLES', shopping: 'SHOPPING', github: 'GITHUB', oldPage: 'OLD PAGE',
    },
    hero: {
      eyebrow: 'AZO234 · Profile',
      tagline: 'Passionate programmer!! 🔥',
      sub: 'OSS engineer working deep in the guts of software.',
    },
    sections: {
      webApps: 'Web Apps', github: 'GitHub Projects',
      articles: 'Articles', shopping: 'Shopping Sites',
    },
    stats: {
      location: 'LOCATION', github: 'GITHUB',
      lastUpdate: 'LAST UPDATE', mail: 'MAIL', license: 'LICENSE',
    },
    donate: { label: 'Please donate to my researching!' },
    status: { page: 'PAGE', lang: 'LANG', update: 'LAST UPDATE' },
  },
}

// ── localStorage キー ────────────────────────────────────────
const KEYS = {
  theme:    'azo-theme',
  fontSize: 'azo-font',
  locale:   'azo-locale',
} as const

export function useAppState() {
  const t = computed(() => messages[locale.value])

  // DOM 反映（クライアントのみ）
  function applyTheme()    { document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light') }
  function applyFont()     { document.documentElement.setAttribute('data-font', fontSize.value) }

  // クライアント初期化（localStorage から復元）
  function initFromStorage() {
    if (!import.meta.client) return
    const savedTheme  = localStorage.getItem(KEYS.theme)
    const savedFont   = localStorage.getItem(KEYS.fontSize)
    const savedLocale = localStorage.getItem(KEYS.locale)
    if (savedTheme)  isDark.value    = savedTheme !== 'light'
    if (savedFont && ['sm','md','lg'].includes(savedFont))
                     fontSize.value  = savedFont as FontSize
    if (savedLocale && ['ja','en'].includes(savedLocale))
                     locale.value    = savedLocale as Locale
    applyTheme()
    applyFont()
  }

  // 変更を localStorage に保存 + DOM に反映
  watch(isDark, (dark) => {
    if (!import.meta.client) return
    localStorage.setItem(KEYS.theme, dark ? 'dark' : 'light')
    applyTheme()
  })
  watch(fontSize, (s) => {
    if (!import.meta.client) return
    localStorage.setItem(KEYS.fontSize, s)
    applyFont()
  })
  watch(locale, (l) => {
    if (!import.meta.client) return
    localStorage.setItem(KEYS.locale, l)
    document.documentElement.setAttribute('lang', l === 'ja' ? 'ja' : 'en')
  })

  return { isDark, fontSize, locale, t, initFromStorage }
}
