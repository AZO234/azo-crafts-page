<template>
  <div class="status-bar">
    <div v-for="item in items" :key="item.key" class="item">
      <Icon :name="item.icon" class="status-icon" />
      {{ item.key }}: <span>{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppState } from '~/composables/useAppState'

const { locale, t } = useAppState()
const route = useRoute()
const config = useRuntimeConfig()

const pageLabel = computed(() => {
  const map: Record<string, string> = {
    '/': 'TOP', '/github': 'GITHUB',
    '/articles': 'ARTICLES', '/shopping': 'SHOPPING',
  }
  return map[route.path] ?? route.path.toUpperCase().replace('/', '')
})

const items = computed(() => [
  { key: t.value.status.page,   icon: 'bi:house-fill',  value: pageLabel.value },
  { key: t.value.status.lang,   icon: 'bi:translate',   value: locale.value.toUpperCase() },
  { key: t.value.status.update, icon: 'bi:clock-fill',  value: config.public.buildDate },
])
</script>

<style scoped>
.status-bar {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--surface); border-top: 1px solid var(--border);
  padding: 0.3rem 1.5rem;
  font-family: var(--mono); font-size: 0.6rem; color: var(--text-muted);
  display: flex; gap: 2rem; letter-spacing: 0.05em;
  z-index: 200; flex-shrink: 0;
}
.item { display: flex; gap: 0.4rem; align-items: center; }
.item span { color: var(--accent); }
.status-icon { width: 11px; height: 11px; flex-shrink: 0; }
</style>
