<template>
  <div>
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

useHead({
  title: 'AZO crafts page — Emulator',
  meta: [{ name: 'description', content: 'AZO234のエミュレータ関連記事。NP2kai・RetroArch・PC-8801・MSXなど。' }],
})

const modalOpen = ref(false)
const modalData = ref({ title: '', thumb: '', href: '' })
function openModal(p: { title: string; thumb: string; href?: string }) {
  modalData.value = { title: p.title, thumb: p.thumb, href: p.href ?? '' }
  modalOpen.value = true
}

const emulators = [
  {
    tag: 'Emulator', icon: 'bi:controller',
    thumb: '/screenshots/np2kai-article.webp',
    title: 'Neko Project II (NP2) 改変',
    desc: 'PC-98エミュレータ NP2 0.86 kai の改変・ビルド手順解説。',
    href: 'https://domisan.sakura.ne.jp/article/np2kai/np2kai.html',
  },
  {
    tag: 'Retro', icon: 'bi:controller',
    thumb: '/screenshots/retroarch.webp',
    title: 'RetroArch マルチエミュレータ',
    desc: 'マルチエミュレータシステム「RetroArch」の導入・設定ガイド。',
    href: 'https://domisan.sakura.ne.jp/article/retroarch/retroarch.html',
  },
  {
    tag: 'Retro', icon: 'bi:cpu-fill',
    thumb: '/screenshots/pc88.webp',
    title: 'PC-8801 保全情報',
    desc: 'レトロPC「PC-8801」の保全・メンテナンス情報。',
    href: 'https://domisan.sakura.ne.jp/article/pc88/pc88.html',
  },
  {
    tag: 'Retro', icon: 'bi:cpu-fill',
    thumb: '/screenshots/msx.webp',
    title: 'MSX 保全情報',
    desc: 'レトロPC「MSX」の保全・メンテナンス情報。',
    href: 'https://domisan.sakura.ne.jp/article/msx/msx.html',
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
