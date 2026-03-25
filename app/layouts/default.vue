<template>
  <div class="sv-app" :data-theme="isDark ? 'dark' : 'light'" :data-font="fontSize">
    <AppHeader
      :is-dark="isDark" :font-size="fontSize" :locale="locale"
      @update:is-dark="isDark = $event"
      @update:font-size="fontSize = $event"
      @update:locale="locale = $event"
    />
    <AppNav :locale="locale" />
    <main class="sv-main">
      <div class="sv-container">
        <slot />
      </div>
    </main>
    <AppStatusBar :locale="locale" />
    <div class="sv-copyright">©AZO</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppState } from '~/composables/useAppState'
const { isDark, fontSize, locale, initFromStorage } = useAppState()
onMounted(() => initFromStorage())
</script>

<style>
@import '~/assets/css/main.css';
</style>

<style scoped>
.sv-app { display: flex; flex-direction: column; min-height: 100vh; }

.sv-main {
  flex: 1;
  padding: 2rem 0 5rem;
  /* ページ全体を覆うが中身はグリッドで80%幅に制限 */
}

.sv-container {
  /* 12カラムグリッド — 中央10カラム ≒ 80% */
  display: grid;
  grid-template-columns:
    1fr
    repeat(10, minmax(0, 1fr))
    1fr;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* コンテナ直下の要素はすべて中央10カラムに配置 */
.sv-container > * {
  grid-column: 2 / 12;
}

@media (max-width: 900px) {
  .sv-container > * { grid-column: 1 / -1; }
  .sv-main { padding: 1.5rem 1rem 5rem; }
}

.sv-copyright {
  position: fixed; bottom: 1.8rem; right: 0.8rem;
  font-family: var(--mono); font-size: 0.6rem;
  color: var(--text); opacity: 0.35;
  letter-spacing: 0.08em; pointer-events: none; z-index: 201;
}
</style>
