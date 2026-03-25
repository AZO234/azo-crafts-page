<template>
  <component :is="href ? 'a' : 'div'" :href="href" :target="href ? '_blank' : undefined" :rel="href ? 'noopener noreferrer' : undefined" class="sv-list-item">
    <Icon v-if="icon" :name="icon" class="list-icon" />
    <div v-else class="list-dot" />
    <div>
      <div v-if="tag" class="list-tag">{{ tag }}</div>
      <div class="list-name">{{ title }}</div>
      <div v-if="meta" class="list-meta">{{ meta }}</div>
    </div>
    <Icon v-if="href" name="bi:box-arrow-up-right" class="list-ext" />
  </component>
</template>

<script setup lang="ts">

defineProps<{ title: string; tag?: string; meta?: string; href?: string; icon?: string }>()
</script>

<style scoped>
.sv-list-item {
  background: var(--surface);
  padding: 0.85rem 1.1rem;
  display: flex; align-items: flex-start; gap: 10px;
  transition: background var(--tr);
  text-decoration: none; color: inherit;
}
.sv-list-item:hover { background: var(--surface2); }
.list-dot {
  width: 5px; height: 5px;
  background: var(--accent); border-radius: 50%;
  margin-top: 5px; flex-shrink: 0;
}
.list-icon {
  width: 16px; height: 16px;
  color: var(--accent); flex-shrink: 0; margin-top: 1px;
}
.list-tag {
  font-family: var(--mono); font-size: 0.56rem;
  letter-spacing: 0.15em; color: var(--accent2);
  text-transform: uppercase; margin-bottom: 2px;
}
.list-name {
  font-size: 0.83rem; font-weight: 700;
  color: var(--text); margin-bottom: 2px; line-height: 1.3;
}
.list-meta {
  font-family: var(--mono); font-size: 0.6rem; color: var(--text-muted);
}
.list-ext {
  width: 12px; height: 12px;
  color: var(--text-muted); margin-left: auto;
  flex-shrink: 0; margin-top: 3px; opacity: 0.5;
}
.sv-list-item:hover .list-ext { opacity: 1; color: var(--accent); }
</style>
