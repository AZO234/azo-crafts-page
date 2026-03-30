<template>
  <div>

    <!-- ── HERO ── -->
    <section class="hero">
      <div class="hero-left">
        <div class="hero-eyebrow">
          <Icon name="bi:person-fill" class="eyebrow-icon" />{{ t.hero.eyebrow }}
        </div>
        <h2>AZO <em>crafts</em> page.</h2>
        <p class="hero-desc">{{ t.hero.tagline }}<br>{{ t.hero.sub }}</p>
        <div class="hero-langs">
          <span v-for="l in langs" :key="l.name" class="lang-badge">
            <Icon :name="l.icon" class="lang-icon" />{{ l.name }}
          </span>
        </div>
      </div>
      <div class="hero-status">
        <div v-for="s in stats" :key="s.key" class="stat-row">
          <span class="stat-key"><Icon :name="s.icon" class="stat-icon" />{{ s.key }}</span>
          <span class="stat-val">{{ s.value }}</span>
        </div>
      </div>
    </section>

    <!-- ── WEB APPS ── -->
    <section class="section">
      <SvSectionTitle icon="bi:grid-fill">{{ t.sections.webApps }}</SvSectionTitle>
      <div class="cards-grid">
        <SvCard
          v-for="app in webApps" :key="app.title"
          :title="app.title" :category="app.category"
          :icon="app.icon" :thumb="app.thumb"
          :desc="app.desc" :href="app.href" :link-label="app.linkLabel"
          @thumb-click="openModal"
        />
      </div>
    </section>

    <!-- ── SHOPPING ── -->
    <section class="section">
      <SvSectionTitle icon="bi:cart3">{{ t.sections.shopping }}</SvSectionTitle>
      <div class="cards-grid cards-grid--2">
        <SvCard
          v-for="site in shoppingSites" :key="site.title"
          :title="site.title" :category="site.category"
          :icon="site.icon" :thumb="site.thumb"
          :desc="site.desc" :href="site.href" :link-label="site.linkLabel"
          @thumb-click="openModal"
        />
      </div>
    </section>

    <!-- ── EMULATOR ── -->
    <section class="section">
      <SvSectionTitle icon="bi:controller">EMULATOR</SvSectionTitle>
      <div class="cards-grid">
        <SvCard
          v-for="item in emulators" :key="item.title"
          :title="item.title" :category="item.tag"
          :icon="item.icon" :thumb="item.thumb"
          :desc="item.desc" :href="item.href" link-label="Read"
          @thumb-click="openModal"
        />
      </div>
    </section>

    <!-- ── DONATE ── -->
    <div class="donate-bar">
      <div>
        <div class="donate-label">
          <Icon name="bi:cpu-fill" class="donate-icon" />{{ t.donate.label }}
        </div>
        <div class="donate-btc">BTC: 39Ti3CTg9wuquTXt2ELH32BF1Qj2NQjsja</div>
      </div>
      <div class="donate-right">
        <a href="https://buymeacoffee/azo234" target="_blank" rel="noopener noreferrer" class="coffee-btn">
          Buy Me a Coffee
        </a>
        <a href="https://github.com/sponsors/azo234" target="_blank" rel="noopener noreferrer" class="coffee-btn sponsor-btn">
          <Icon name="bi:github" class="btn-icon" />Sponsor
        </a>
        <a href="mailto:typesylph@gmail.com" class="mail-link">
          <Icon name="bi:envelope" class="mail-icon" />typesylph@gmail.com
        </a>
      </div>
    </div>

    <!-- ── MODAL ── -->
    <SvModal
      v-model="modalOpen"
      :title="modalData.title"
      :thumb="modalData.thumb"
      :href="modalData.href"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const config = useRuntimeConfig()
import { useAppState } from '~/composables/useAppState'

const { t, locale } = useAppState()

useHead({
  title: 'AZO crafts page — Works',
  meta: [{ name: 'description', content: 'AZO234のポートフォリオ。Webアプリ・ツール・記事一覧。' }],
})

// ── モーダル ──────────────────────────────────────────────
const modalOpen = ref(false)
const modalData = ref({ title: '', thumb: '', href: '' })

function openModal(payload: { title: string; thumb: string; href?: string }) {
  modalData.value = { title: payload.title, thumb: payload.thumb, href: payload.href ?? '' }
  modalOpen.value = true
}

// ── データ ────────────────────────────────────────────────
const langs = [
  { name: 'ASM',        icon: 'bi:cpu-fill' },
  { name: 'C',          icon: 'bi:code-slash' },
  { name: 'C++',        icon: 'simple-icons:cplusplus' },
  { name: 'Rust',       icon: 'simple-icons:rust' },
  { name: 'Python',     icon: 'simple-icons:python' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'Kotlin',     icon: 'simple-icons:kotlin' },
  { name: 'PHP',        icon: 'simple-icons:php' },
]

const stats = computed(() => [
  { key: t.value.stats.location,   icon: 'bi:globe',      value: 'Hiroshima, JP' },
  { key: t.value.stats.github,     icon: 'bi:github',     value: 'AZO234' },
  { key: t.value.stats.lastUpdate, icon: 'bi:clock-fill', value: config.public.buildDate },
  { key: t.value.stats.mail,       icon: 'bi:envelope',   value: 'typesylph@gmail.com' },
  { key: t.value.stats.license,    icon: 'bi:file-earmark',  value: 'GPL3.0 / MIT' },
  { key: t.value.stats.love,       icon: 'bi:heart',  value: 'Cat😺' },
])

const webApps = computed(() => {
  const isJa = locale.value === 'ja'
  return [
    { category: 'Timesignal',          icon: 'bi:clock-fill',         thumb: '/screenshots/timesignal.webp',
      title: isJa ? 'インターネット時報' : 'Internet Time Signal',
      desc: isJa ? '日本標準時を精密に音声でお知らせ。' : 'JST signal viewer via the internet.',
      href: 'https://azo234.github.io/timesignal/', linkLabel: 'Open App' },
    { category: 'Mannen-clock',          icon: 'bi:clock-fill',         thumb: '/screenshots/mannen-clock.webp',
      title: isJa ? 'Web万年時計' : 'Web Perpetual Clock',
      desc: isJa ? '田中久重の万年時計風、和時計・旧暦ガジェット。' : 'Hisashige Tanaka \'Mannen-clock\' (1851).',
      href: 'https://azo234.github.io/mannen-clock/', linkLabel: 'Open App' },
    { category: 'SBS 3D Viewer',      icon: 'bi:file-earmark-image', thumb: '/screenshots/stereo-viewer.webp',
      title: 'SBS STEREO VIEWER',
      desc: isJa ? 'SBS形式（.jps/.pns）の立体画像疑似閲覧ビューア。アニメ出力対応。' : 'Pseudo stereoscopic viewer for SBS images (.jps/.pns). Anim & Fixed modes.',
      href: 'https://azo234.github.io/sbs-stereo-viewer/', linkLabel: 'Open App' },
    { category: 'Sudoku Solver',      icon: 'bi:type',               thumb: '/screenshots/sudoku.webp',
      title: isJa ? '数独解答プログラム' : 'Sudoku Solver',
      desc: isJa ? '数独をブルートフォースで解答するアプリ。' : 'Solve Sudoku with brute-force method.',
      href: 'https://azo234.github.io/sudoku-solver/', linkLabel: 'Open App' },
    { category: 'Stroke font viewer',      icon: 'bi:type',               thumb: '/screenshots/stroke-font.webp',
      title: isJa ? 'ストロークフォントビューア' : 'Stroke Font Viewer',
      desc: isJa ? 'ストローク（ベクター）フォントを閲覧・加工するアプリ。' : 'View and edit stroke vector fonts.',
      href: 'https://azo234.github.io/stroke-font-viewer/', linkLabel: 'Open App' },
  ]
})

const shoppingSites = computed(() => {
  const isJa = locale.value === 'ja'
  return [
    { category: isJa ? 'Japan' : 'Japan',  icon: 'bi:cart3', thumb: '/screenshots/kkc.webp',
      title: isJa ? 'KKC - かんたん価格調査' : 'Easy Price Check',
      desc: isJa ? '日本国内のショッピングサイトを一括検索。バーコード読み取り対応。' : 'Search Japanese shopping sites at once. Barcode reading compatible.',
      href: 'https://domisan.sakura.ne.jp/kkc/kkc.php', linkLabel: 'Open' },
    { category: 'Global',         icon: 'bi:globe',  thumb: '/screenshots/spprice.webp',
      title: 'SpPrice.Net',
      desc: isJa ? '海外ショッピングサイトを一括検索。通貨を自動換算。' : 'Search worldwide. Auto currency conversion.',
      href: 'https://domisan.sakura.ne.jp/spp/spp.php', linkLabel: 'Open' },
  ]
})

const emulators = [
  {
    tag: 'NP2kai', icon: 'bi:controller',
    thumb: '/screenshots/np2kai-article.webp',
    title: 'Neko Project II (NP2) 改変',
    desc: 'PC-98エミュレータ NP2 0.86 kai の改変・ビルド手順解説。',
    href: 'https://domisan.sakura.ne.jp/article/np2kai/np2kai.html',
  },
  {
    tag: 'RetroArch', icon: 'bi:controller',
    thumb: '/screenshots/retroarch.webp',
    title: 'RetroArch マルチエミュレータ',
    desc: 'マルチエミュレータシステム「RetroArch」の導入・設定ガイド。',
    href: 'https://domisan.sakura.ne.jp/article/retroarch/retroarch.html',
  },
  {
    tag: 'PC-8801', icon: 'bi:cpu-fill',
    thumb: '/screenshots/pc88.webp',
    title: 'PC-8801 保全情報',
    desc: 'レトロPC「PC-8801」の保全・メンテナンス情報。',
    href: 'https://domisan.sakura.ne.jp/article/pc88/pc88.html',
  },
  {
    tag: 'MSX', icon: 'bi:cpu-fill',
    thumb: '/screenshots/msx.webp',
    title: 'MSX 保全情報',
    desc: 'レトロPC「MSX」の保全・メンテナンス情報。',
    href: 'https://domisan.sakura.ne.jp/article/msx/msx.html',
  },
]
</script>

<style scoped>
.hero {
  padding: 2.5rem 0; border-bottom: 1px solid var(--border); margin-bottom: 2.5rem;
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 2rem; flex-wrap: wrap;
}
.hero-eyebrow {
  font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.2em;
  color: var(--accent2); margin-bottom: 0.75rem;
  display: flex; align-items: center; gap: 6px;
}
.eyebrow-icon { width: 13px; height: 13px; }
h2 {
  font-family: var(--mono); font-size: clamp(1.6rem, 4vw, 2.8rem);
  letter-spacing: 0.06em; color: var(--text); line-height: 1.2; margin-bottom: 1rem;
}
h2 em { font-style: normal; color: var(--accent); }
.hero-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.8; max-width: 440px; }
.hero-langs { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1rem; }
.lang-badge {
  font-family: var(--mono); font-size: 0.6rem; padding: 2px 8px;
  background: var(--surface2); border: 1px solid var(--border); border-radius: 3px;
  color: var(--accent); letter-spacing: 0.08em;
  display: inline-flex; align-items: center; gap: 4px;
  transition: border-color var(--tr), background var(--tr);
}
.lang-badge:hover { border-color: var(--accent); background: rgba(0,229,255,0.08); }
.lang-icon { width: 11px; height: 11px; }
.hero-status {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1rem 1.25rem;
  min-width: 240px; display: flex; flex-direction: column; gap: 0.6rem;
}
.stat-row {
  display: flex; justify-content: space-between; align-items: center;
  font-family: var(--mono); font-size: 0.62rem; color: var(--text-muted); letter-spacing: 0.05em;
}
.stat-key { display: flex; align-items: center; gap: 5px; }
.stat-icon { width: 11px; height: 11px; }
.stat-val { color: var(--accent); }

/* ── セクション・グリッド ── */
.section { margin-bottom: 2.5rem; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
.cards-grid--2 {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* ── DONATE ── */
.donate-bar {
  margin-top: 2rem; padding: 1rem 1.25rem;
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
}
.donate-label {
  font-family: var(--mono); font-size: 0.65rem; color: var(--text-muted);
  margin-bottom: 3px; display: flex; align-items: center; gap: 5px;
}
.donate-icon { width: 12px; height: 12px; }
.donate-btc { font-family: var(--mono); font-size: 0.62rem; color: var(--accent); letter-spacing: 0.04em; }
.donate-right { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
.coffee-btn {
  font-family: var(--mono); font-size: 0.62rem; color: var(--accent2);
  border: 1px solid var(--accent2); padding: 4px 12px; border-radius: var(--radius);
  text-decoration: none; opacity: 0.8;
  display: inline-flex; align-items: center; gap: 5px;
  transition: opacity var(--tr);
}
.coffee-btn:hover { opacity: 1; }
.sponsor-btn { color: var(--text-muted); border-color: var(--border); }
.sponsor-btn:hover { color: var(--accent); border-color: var(--accent); }
.btn-icon { width: 12px; height: 12px; }
.mail-link {
  font-family: var(--mono); font-size: 0.6rem; color: var(--text-muted);
  text-decoration: none; display: inline-flex; align-items: center; gap: 4px;
}
.mail-link:hover { color: var(--accent); }
.mail-icon { width: 12px; height: 12px; }
</style>
