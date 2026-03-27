<template>
  <nav class="sv-nav">
    <NuxtLink
      v-for="item in navItems" :key="item.to"
      :to="item.to" class="nav-item"
      active-class="active" exact-active-class="active"
    >
      <Icon :name="item.icon" class="nav-icon" />
      {{ item.label }}
    </NuxtLink>
    <a
      href="https://domisan.sakura.ne.jp/old/"
      target="_blank" rel="noopener noreferrer"
      class="nav-item nav-old"
    >
      <Icon name="bi:clock-fill" class="nav-icon" />{{ t.nav.oldPage }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppState } from '~/composables/useAppState'

const { t } = useAppState()

const navItems = computed(() => [
  { to: '/',         icon: 'bi:grid-fill',    label: t.value.nav.works  },
  { to: '/articles', icon: 'bi:card-list',    label: t.value.nav.articles },
  { to: '/github',   icon: 'bi:github',       label: t.value.nav.github   },
])
</script>

<style scoped>
.sv-nav {
  background: var(--surface); border-bottom: 1px solid var(--border);
  padding: 0 1.5rem; display: flex; flex-shrink: 0; overflow-x: auto;
}
.nav-item {
  font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em;
  color: var(--text-muted); padding: 0.6rem 1.1rem;
  border-bottom: 2px solid transparent;
  transition: color var(--tr), border-color var(--tr);
  text-decoration: none; white-space: nowrap;
  display: inline-flex; align-items: center; gap: 6px;
}
.nav-item:hover  { color: var(--text); }
.nav-item.active { color: var(--accent); border-bottom-color: var(--accent); }
.nav-old { margin-left: auto; opacity: 0.45; }
.nav-old:hover { opacity: 0.8; }
.nav-icon { width: 14px; height: 14px; flex-shrink: 0; }
</style>
