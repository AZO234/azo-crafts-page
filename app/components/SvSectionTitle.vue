<template>
  <div class="section-title">
    <Icon v-if="icon" :name="icon" class="title-icon" />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ icon?: string }>()
</script>

<style scoped>
.section-title {
  font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.2em;
  color: var(--text-muted); text-transform: uppercase;
  margin-bottom: 1.1rem;
  display: flex; align-items: center; gap: 6px;
}
.section-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.title-icon { width: 13px; height: 13px; flex-shrink: 0; }
</style>
