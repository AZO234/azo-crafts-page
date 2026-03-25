<template>
  <div>
    <section class="section">
      <SvSectionTitle icon="bi:cart3">{{ t.sections.shopping }}</SvSectionTitle>
      <div class="cards-grid">
        <SvCard
          v-for="site in sites" :key="site.title"
          :title="site.title" :category="site.category"
          :icon="site.icon" :thumb="site.thumb"
          :desc="site.desc" :href="site.href" :link-label="site.linkLabel"
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
  title: 'AZO crafts page — Shopping',
  meta: [{ name: 'description', content: 'AZO234のショッピングサイト一覧。国内・海外の価格比較ツール。' }],
})

const modalOpen = ref(false)
const modalData = ref({ title: '', thumb: '', href: '' })
function openModal(p: { title: string; thumb: string; href?: string }) {
  modalData.value = { title: p.title, thumb: p.thumb, href: p.href ?? '' }
  modalOpen.value = true
}

const sites = [
  {
    category: '国内', icon: 'bi:cart3',
    thumb: '/screenshots/kkc.webp',
    title: 'かんたん価格調査',
    desc: '日本国内のショッピングサイトを一括検索。お得にショッピング！',
    href: 'https://domisan.sakura.ne.jp/kkc/kkc.php', linkLabel: 'Open',
  },
  {
    category: 'Global', icon: 'bi:globe',
    thumb: '/screenshots/spprice.webp',
    title: 'SpPrice.Net',
    desc: '海外ショッピングサイトを一括検索。通貨を自動換算。Price comparison worldwide.',
    href: 'https://domisan.sakura.ne.jp/spp/spp.php', linkLabel: 'Open',
  },
]
</script>

<style scoped>
.section { margin-bottom: 2.5rem; }
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
</style>
