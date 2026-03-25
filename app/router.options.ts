import type { RouterConfig } from '@nuxt/schema'

// history モードを明示（さくら静的ホスティング対応）
export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
}
