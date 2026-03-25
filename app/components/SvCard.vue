<template>
  <div class="sv-card">
    <!-- サムネイル -->
    <div
      class="card-thumb"
      @click="thumb && imgLoaded && emit('thumb-click', { title, thumb, href })"
    >
      <!-- 画像（ロード後に表示） -->
      <img
        v-if="thumb"
        :src="thumb"
        :alt="title"
        class="thumb-img"
        :class="{ loaded: imgLoaded }"
        loading="lazy"
        @load="onLoad"
        @error="imgError = true"
      />

      <!-- プレースホルダ：未ロード中 -->
      <Transition name="fade">
        <div v-if="!imgLoaded && !imgError" class="thumb-placeholder">
          <div class="placeholder-grid" />
          <Icon
            :name="thumb ? 'bi:image' : (icon ?? 'bi:image')"
            class="placeholder-icon"
          />
          <span v-if="!thumb && category" class="placeholder-label">{{ category }}</span>
        </div>
      </Transition>

      <!-- エラー時 -->
      <div v-if="imgError" class="thumb-placeholder thumb-error">
        <div class="placeholder-grid" />
        <Icon name="bi:image-alt" class="placeholder-icon error" />
      </div>

      <!-- ホバーオーバーレイ（ロード済みのみ） -->
      <div v-if="thumb && imgLoaded" class="thumb-overlay">
        <Icon name="bi:arrows-fullscreen" class="overlay-icon" />
      </div>
    </div>

    <!-- カード本文 -->
    <div class="card-body">
      <div class="card-header">
        <Icon v-if="icon" :name="icon" class="card-icon" />
        <span v-if="category" class="card-cat">{{ category }}</span>
      </div>
      <div class="card-name">{{ title }}</div>
      <div v-if="desc" class="card-desc">{{ desc }}</div>
      <a
        v-if="href && linkLabel"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="card-link"
      >
        <Icon name="bi:box-arrow-up-right" class="link-icon" />{{ linkLabel }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title:      string
  category?:  string
  icon?:      string
  thumb?:     string
  desc?:      string
  href?:      string
  linkLabel?: string
}>()

const emit = defineEmits<{
  'thumb-click': [payload: { title: string; thumb: string; href?: string }]
}>()

const imgLoaded = ref(false)
const imgError  = ref(false)

// SSR でレンダリングされた img がすでにキャッシュ済みの場合
// @load イベントが発火しないことがあるので onMounted で確認する
onMounted(() => {
  if (!props.thumb) {
    imgLoaded.value = false
    return
  }
  // Image オブジェクトで complete を確認
  const img = new Image()
  img.onload  = () => { imgLoaded.value = true }
  img.onerror = () => { imgError.value  = true }
  img.src = props.thumb
  // すでにブラウザキャッシュにある場合は complete が true
  if (img.complete && img.naturalWidth > 0) {
    imgLoaded.value = true
  }
})

function onLoad() {
  imgLoaded.value = true
}
</script>

<style scoped>
.sv-card {
  background: var(--surface);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: border-color var(--tr), transform var(--tr), box-shadow var(--tr);
  display: flex;
  flex-direction: column;
}
.sv-card:hover {
  border-color: rgba(0,229,255,0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

/* ── サムネイル ── */
.card-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--surface2);
  cursor: pointer;
  flex-shrink: 0;
}

.thumb-img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.thumb-img.loaded { opacity: 1; }

/* プレースホルダ */
.thumb-placeholder {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.5rem;
  background: var(--surface2);
}
.placeholder-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.4;
}
.placeholder-icon {
  width: 28px; height: 28px;
  color: var(--text-muted); opacity: 0.5;
  position: relative; z-index: 1;
  animation: pulse 1.8s ease-in-out infinite;
}
.placeholder-icon.error { animation: none; opacity: 0.25; }
.placeholder-label {
  font-family: var(--mono); font-size: 0.55rem;
  letter-spacing: 0.18em; color: var(--text-muted);
  text-transform: uppercase; opacity: 0.5;
  position: relative; z-index: 1;
}
@keyframes pulse { 0%,100%{opacity:0.35} 50%{opacity:0.75} }

/* ホバーオーバーレイ */
.thumb-overlay {
  position: absolute; inset: 0;
  background: rgba(0,229,255,0.08);
  display: flex; align-items: center; justify-content: center;
  opacity: 0;
  transition: opacity var(--tr);
}
.card-thumb:hover .thumb-overlay { opacity: 1; }
.overlay-icon { width: 24px; height: 24px; color: var(--accent); }

/* フェードトランジション */
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-leave-to     { opacity: 0; }

/* ── カード本文 ── */
.card-body {
  padding: 1rem 1.1rem 1.1rem;
  display: flex; flex-direction: column;
  gap: 0.35rem; flex: 1;
}
.card-header {
  display: flex; align-items: center; gap: 6px;
  margin-bottom: 0.1rem;
}
.card-icon { width: 14px; height: 14px; color: var(--accent2); flex-shrink: 0; }
.card-cat {
  font-family: var(--mono); font-size: 0.55rem;
  letter-spacing: 0.18em; color: var(--accent2);
  text-transform: uppercase; opacity: 0.85;
}
.card-name {
  font-size: 0.88rem; font-weight: 700;
  color: var(--text); line-height: 1.3;
}
.card-desc {
  font-family: var(--mono); font-size: 0.6rem;
  color: var(--text-muted); line-height: 1.7; flex: 1;
}
.card-link {
  display: inline-flex; align-items: center; gap: 4px;
  margin-top: 0.5rem;
  font-family: var(--mono); font-size: 0.58rem;
  color: var(--accent); letter-spacing: 0.08em;
  text-decoration: none; opacity: 0.75;
  transition: opacity var(--tr);
  align-self: flex-start;
}
.card-link:hover { opacity: 1; }
.link-icon { width: 10px; height: 10px; }
</style>
