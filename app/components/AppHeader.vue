<template>
  <header class="sv-header">

    <!-- ── LOGO ── -->
    <div class="sv-logo">
      <div class="logo-mark"><img src="/favicon512.png" width="48" alt="logo"></div>
      <div class="logo-text">
        <h1>AZO crafts page</h1>
        <small>OSS ENGINEER — HIROSHIMA, JAPAN</small>
      </div>
      <!-- SNSバー（ロゴの右に縦並び） -->
      <ClientOnly>
        <AppSnsBar />
      </ClientOnly>
    </div>

    <!-- ── CONTROLS ── -->
    <div class="sv-header-right">

      <!-- SNS プロフィールリンク -->
      <div class="sns-links">
        <a
          href="https://x.com/AZO234"
          target="_blank" rel="noopener noreferrer"
          class="sns-btn" title="X (Twitter)"
          aria-label="X (Twitter)"
        >
          <Icon name="simple-icons:x" class="sns-icon" />
        </a>
        <a
          href="https://github.com/AZO234"
          target="_blank" rel="noopener noreferrer"
          class="sns-btn" title="GitHub"
          aria-label="GitHub"
        >
          <Icon name="bi:github" class="sns-icon" />
        </a>
      </div>

      <!-- セパレーター -->
      <div class="sep" />

      <!-- 言語トグル -->
      <div class="toggle-group">
        <button
          v-for="l in (['ja', 'en'] as const)" :key="l"
          class="hdr-btn" :class="{ active: locale === l }"
          :title="l === 'ja' ? '日本語' : 'English'"
          @click="emit('update:locale', l)"
        >
          <Icon name="bi:translate" class="btn-icon" />{{ l.toUpperCase() }}
        </button>
      </div>

      <!-- フォントサイズトグル -->
      <div class="toggle-group">
        <button
          v-for="s in (['sm', 'md', 'lg'] as const)" :key="s"
          class="hdr-btn" :class="{ active: fontSize === s }"
          @click="emit('update:fontSize', s)"
        >
          <Icon name="bi:type" class="btn-icon" />{{ s.toUpperCase() }}
        </button>
      </div>

      <!-- ダーク/ライトトグル -->
      <ThemeToggle
        :model-value="isDark"
        @update:model-value="emit('update:isDark', $event)"
      />

    </div>
  </header>
</template>

<script setup lang="ts">
type FontSize = 'sm' | 'md' | 'lg'
type Locale   = 'ja' | 'en'

defineProps<{
  isDark:   boolean
  fontSize: FontSize
  locale:   Locale
}>()

const emit = defineEmits<{
  'update:isDark':   [v: boolean]
  'update:fontSize': [v: FontSize]
  'update:locale':   [v: Locale]
}>()
</script>

<style scoped>
.sv-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100; flex-shrink: 0;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ── ロゴ + SNSバー ── */
.sv-logo {
  display: flex; align-items: center; gap: 0.9rem;
  flex-wrap: wrap;
}

.logo-mark {
  width: 32px; height: 32px;
  border: 2px solid var(--accent); border-radius: 4px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 3px; padding: 5px; flex-shrink: 0;
}
.logo-mark span { border-radius: 1px; }
.logo-mark span:nth-child(odd)  { background: var(--accent); }
.logo-mark span:nth-child(even) { background: var(--accent2); }

.logo-text h1 {
  font-family: var(--mono); font-size: 1rem;
  letter-spacing: 0.12em; color: var(--accent); line-height: 1;
}
.logo-text small {
  display: block; font-family: var(--mono); font-size: 0.58rem;
  letter-spacing: 0.18em; color: var(--text-muted); margin-top: 3px;
}

/* ── コントロール群 ── */
.sv-header-right {
  display: flex; align-items: center; gap: 0.75rem;
  flex-shrink: 0;
}

/* SNS プロフィールリンク */
.sns-links {
  display: flex; align-items: center; gap: 0.3rem;
}
.sns-btn {
  display: flex; align-items: center; justify-content: center;
  width: 30px; height: 30px;
  color: var(--text-muted);
  border-radius: var(--radius);
  transition: color var(--tr), background var(--tr);
  text-decoration: none;
}
.sns-btn:hover {
  color: var(--accent);
  background: rgba(0,229,255,0.08);
}
.sns-icon { width: 16px; height: 16px; }

/* セパレーター */
.sep {
  width: 1px; height: 20px;
  background: var(--border);
  flex-shrink: 0;
}

/* トグルグループ */
.toggle-group {
  display: flex; overflow: hidden;
  border: 1px solid var(--border); border-radius: var(--radius);
}
.toggle-group .hdr-btn { border: none; border-radius: 0; }

.hdr-btn {
  font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.08em;
  color: var(--text-muted); background: transparent;
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 3px 10px; cursor: pointer;
  display: inline-flex; align-items: center; gap: 5px;
  transition: color var(--tr), border-color var(--tr), background var(--tr);
}
.hdr-btn:hover { color: var(--accent); border-color: var(--accent); }
.hdr-btn.active {
  color: var(--accent); border-color: var(--accent);
  background: rgba(0,229,255,0.1);
}
.btn-icon { width: 13px; height: 13px; flex-shrink: 0; }

/* レスポンシブ */
@media (max-width: 900px) {
  .logo-text small { display: none; }
}
@media (max-width: 700px) {
  .sv-header-right { gap: 0.4rem; }
  .hdr-btn { padding: 3px 7px; font-size: 0.58rem; }
  .sep { display: none; }
}
</style>
