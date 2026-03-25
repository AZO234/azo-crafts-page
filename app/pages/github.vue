<template>
  <div>
    <section class="section">
      <SvSectionTitle icon="bi:github">{{ t.sections.github }}</SvSectionTitle>
      <div class="cards-grid">
        <SvCard
          v-for="item in projects" :key="item.title"
          :title="item.title" :category="item.tag"
          :icon="item.icon" :thumb="item.thumb"
          :desc="item.desc" :href="item.href" :link-label="item.linkLabel"
          @thumb-click="openModal"
        />
      </div>
    </section>

    <SvModal
      v-model="modalOpen"
      :title="modalData.title"
      :thumb="modalData.thumb"
      :href="modalData.href"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppState } from '~/composables/useAppState'

const { t } = useAppState()

useHead({
  title: 'AZO crafts page — GitHub',
  meta: [{ name: 'description', content: 'AZO234のGitHubプロジェクト一覧。エミュレータ・ドライバ・ライブラリなど。' }],
})

const modalOpen = ref(false)
const modalData = ref({ title: '', thumb: '', href: '' })
function openModal(p: { title: string; thumb: string; href?: string }) {
  modalData.value = { title: p.title, thumb: p.thumb, href: p.href ?? '' }
  modalOpen.value = true
}

const projects = [
  {
    tag: 'Emulator', icon: 'bi:controller',
    thumb: '/screenshots/np2kai.webp',
    title: 'Neko Project II kai',
    desc: 'PC-98エミュレータ NP2 0.86 kai。各種プラットフォーム対応。',
    href: 'https://github.com/AZO234/NP2kai', linkLabel: 'GitHub',
  },
  {
    tag: 'Libretro', icon: 'bi:controller',
    thumb: '/screenshots/racross-win.webp',
    title: 'RAcross — Windows',
    desc: 'libretro コアのクロスコンパイル環境 (Windows)。',
    href: 'https://github.com/AZO234/RAcross_windows', linkLabel: 'GitHub',
  },
  {
    tag: 'Libretro', icon: 'simple-icons:linux',
    thumb: '/screenshots/racross-linux.webp',
    title: 'RAcross — Linux',
    desc: 'libretro コアのクロスコンパイル環境 (Linux)。',
    href: 'https://github.com/AZO234/RAcross_linux', linkLabel: 'GitHub',
  },
  {
    tag: 'Libretro', icon: 'bi:collection-fill',
    thumb: '/screenshots/racross-mac.webp',
    title: 'RAcross — macOS',
    desc: 'libretro コアのクロスコンパイル環境 (macOS)。',
    href: 'https://github.com/AZO234/RAcross_mac', linkLabel: 'GitHub',
  },
  {
    tag: 'Bare Metal', icon: 'simple-icons:raspberrypi',
    thumb: '/screenshots/raspi-baremetal.webp',
    title: 'RaspberryPi BareMetal',
    desc: 'Raspberry Pi 2/3 用 TOPPERS/FMP・ASP3 ベアメタル環境。',
    href: 'https://github.com/AZO234/RaspberryPi_BareMetal', linkLabel: 'GitHub',
  },
  {
    tag: 'Dev Tool', icon: 'bi:tools',
    thumb: '/screenshots/codeviz.webp',
    title: 'CodeViz for GCC 8.3.0',
    desc: 'GCC 8.3.0 対応コールグラフ可視化ツール。',
    href: 'https://github.com/AZO234/codeviz', linkLabel: 'GitHub',
  },
  {
    tag: 'Python', icon: 'simple-icons:python',
    thumb: '/screenshots/pyd2s.webp',
    title: 'Diablo II save data tweak',
    desc: 'Diablo II セーブデータ改変ツール (pyd2s fork)。',
    href: 'https://github.com/AZO234/pyd2s', linkLabel: 'GitHub',
  },
]
</script>

<style scoped>
.section { margin-bottom: 2.5rem; }
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
