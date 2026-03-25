<template>
  <div class="error-wrap" :data-theme="isDark ? 'dark' : 'light'">
    <!-- スキャンライン -->
    <div class="scanline-overlay" />

    <div class="error-body">
      <div class="error-code">{{ error.statusCode }}</div>
      <div class="error-msg">
        <Icon name="bi:cpu-fill" class="msg-icon" />
        {{ error.statusCode === 404 ? 'PAGE NOT FOUND' : 'SERVER ERROR' }}
      </div>
      <p class="error-sub">
        <template v-if="error.statusCode === 404">
          指定されたページは存在しないか、移動した可能性があります。
        </template>
        <template v-else>
          サーバーエラーが発生しました。しばらく待ってから再度お試しください。
        </template>
      </p>
      <button class="back-btn" @click="handleError">
        <Icon name="bi:house-fill" class="btn-icon" />RETURN TO TOP
      </button>
    </div>

    <!-- ステータスバー -->
    <div class="status-bar">
      <div class="item">
        <Icon name="bi:cpu-fill" class="si" />STATUS: <span>{{ error.statusCode }}</span>
      </div>
      <div class="item">
        <Icon name="bi:clock-fill" class="si" />THEME: <span>{{ isDark ? 'DARK' : 'LIGHT' }}</span>
      </div>
    </div>

    <div class="copyright">©AZO</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ error: { statusCode: number; message?: string } }>()

const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('azo-theme')
  isDark.value = saved !== 'light'
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style>
@import '~/assets/css/main.css';
</style>

<style scoped>
.error-wrap {
  display: flex; flex-direction: column;
  min-height: 100vh;
  background: var(--bg); color: var(--text);
  font-family: var(--sans);
  position: relative;
}
.scanline-overlay {
  position: fixed; inset: 0; pointer-events: none; z-index: 9999;
  background: repeating-linear-gradient(
    0deg, transparent 0px, transparent 2px,
    var(--scanline) 2px, var(--scanline) 4px
  );
}
.error-body {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 1.25rem; text-align: center; padding: 2rem;
}
.error-code {
  font-family: var(--mono); font-size: clamp(5rem, 18vw, 10rem);
  color: var(--border); letter-spacing: 0.1em; line-height: 1;
}
.error-msg {
  font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.25em;
  color: var(--accent); display: flex; align-items: center; gap: 8px;
  text-transform: uppercase;
}
.msg-icon { width: 16px; height: 16px; }
.error-sub {
  font-family: var(--mono); font-size: 0.65rem;
  color: var(--text-muted); max-width: 380px; line-height: 1.8;
}
.back-btn {
  font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.15em;
  color: var(--accent); border: 1px solid var(--accent);
  padding: 8px 24px; border-radius: var(--radius);
  background: transparent; cursor: pointer;
  display: inline-flex; align-items: center; gap: 6px;
  transition: background var(--tr), color var(--tr);
  margin-top: 0.5rem;
}
.back-btn:hover { background: rgba(0,229,255,0.1); }
.btn-icon { width: 14px; height: 14px; }
.status-bar {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--surface); border-top: 1px solid var(--border);
  padding: 0.3rem 1.5rem;
  font-family: var(--mono); font-size: 0.6rem; color: var(--text-muted);
  display: flex; gap: 2rem; letter-spacing: 0.05em; z-index: 200;
}
.item { display: flex; gap: 0.4rem; align-items: center; }
.item span { color: var(--accent); }
.si { width: 11px; height: 11px; }
.copyright {
  position: fixed; bottom: 1.8rem; right: 0.8rem;
  font-family: var(--mono); font-size: 0.6rem;
  color: var(--text); opacity: 0.35;
  letter-spacing: 0.08em; pointer-events: none; z-index: 201;
}
</style>
