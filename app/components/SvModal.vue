<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-backdrop" @click.self="close">
        <div class="modal-box" role="dialog" :aria-label="title">

          <!-- ヘッダー -->
          <div class="modal-header">
            <span class="modal-title">{{ title }}</span>
            <button class="modal-close" @click="close" aria-label="閉じる">
              <Icon name="bi:x-lg" class="close-icon" />
            </button>
          </div>

          <!-- 画像 -->
          <div class="modal-img-wrap">
            <img
              :src="thumb"
              :alt="title"
              class="modal-img"
              :class="{ loaded: imgLoaded }"
              @load="imgLoaded = true"
            />
            <div v-if="!imgLoaded" class="modal-placeholder">
              <div class="placeholder-grid" />
              <Icon name="bi:image" class="ph-icon" />
            </div>
          </div>

          <!-- フッター -->
          <div class="modal-footer">
            <a
              v-if="href"
              :href="href"
              target="_blank"
              rel="noopener noreferrer"
              class="modal-open-btn"
            >
              <Icon name="bi:box-arrow-up-right" class="btn-icon" />
              OPEN APP
            </a>
            <button class="modal-close-btn" @click="close">
              <Icon name="bi:x" class="btn-icon" />CLOSE
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title:      string
  thumb:      string
  href?:      string
}>()

const emit = defineEmits<{
  'update:modelValue': [v: boolean]
}>()

const imgLoaded = ref(false)

// モーダルが開くたびにリセット
watch(() => props.modelValue, (v) => {
  if (v) imgLoaded.value = false
})

function close() { emit('update:modelValue', false) }

// ESCキーで閉じる
if (import.meta.client) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && props.modelValue) close()
  })
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.85);
  display: flex; align-items: center; justify-content: center;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
}

.modal-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 860px;
  display: flex; flex-direction: column;
  box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,229,255,0.1);
}

/* ヘッダー */
.modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.8rem 1.1rem;
  border-bottom: 1px solid var(--border);
  background: var(--surface2);
}
.modal-title {
  font-family: var(--mono); font-size: 0.72rem;
  letter-spacing: 0.12em; color: var(--accent);
  text-transform: uppercase;
}
.modal-close {
  background: transparent; border: none; cursor: pointer;
  color: var(--text-muted); padding: 2px;
  display: flex; align-items: center;
  transition: color var(--tr);
}
.modal-close:hover { color: var(--accent2); }
.close-icon { width: 16px; height: 16px; }

/* 画像エリア */
.modal-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--bg);
  overflow: hidden;
}
.modal-img {
  width: 100%; height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.modal-img.loaded { opacity: 1; }

.modal-placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.placeholder-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.3;
}
.ph-icon {
  width: 40px; height: 40px;
  color: var(--text-muted); opacity: 0.3;
  position: relative; z-index: 1;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:0.7} }

/* フッター */
.modal-footer {
  display: flex; align-items: center; justify-content: flex-end;
  gap: 0.75rem;
  padding: 0.75rem 1.1rem;
  border-top: 1px solid var(--border);
  background: var(--surface2);
}
.modal-open-btn {
  font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.12em;
  color: var(--accent); border: 1px solid var(--accent);
  padding: 5px 16px; border-radius: var(--radius);
  text-decoration: none; background: transparent;
  display: inline-flex; align-items: center; gap: 5px;
  transition: background var(--tr);
}
.modal-open-btn:hover { background: rgba(0,229,255,0.1); }
.modal-close-btn {
  font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.12em;
  color: var(--text-muted); border: 1px solid var(--border);
  padding: 5px 16px; border-radius: var(--radius);
  background: transparent; cursor: pointer;
  display: inline-flex; align-items: center; gap: 5px;
  transition: color var(--tr), border-color var(--tr);
}
.modal-close-btn:hover { color: var(--text); border-color: var(--text-muted); }
.btn-icon { width: 12px; height: 12px; }

/* トランジション */
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-active .modal-box, .modal-leave-active .modal-box { transition: transform 0.2s ease, opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal-box, .modal-leave-to .modal-box { transform: scale(0.96); opacity: 0; }
</style>
