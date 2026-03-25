
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AppHeader: typeof import("../app/components/AppHeader.vue")['default']
export const AppNav: typeof import("../app/components/AppNav.vue")['default']
export const AppSnsBar: typeof import("../app/components/AppSnsBar.vue")['default']
export const AppStatusBar: typeof import("../app/components/AppStatusBar.vue")['default']
export const SvCard: typeof import("../app/components/SvCard.vue")['default']
export const SvListItem: typeof import("../app/components/SvListItem.vue")['default']
export const SvModal: typeof import("../app/components/SvModal.vue")['default']
export const SvSectionTitle: typeof import("../app/components/SvSectionTitle.vue")['default']
export const ThemeToggle: typeof import("../app/components/ThemeToggle.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const IconCSS: typeof import("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const VitePwaManifest: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaManifest: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaAssets: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const PwaAppleImage: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']
export const PwaAppleSplashScreenImage: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']
export const PwaFaviconImage: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']
export const PwaMaskableImage: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']
export const PwaTransparentImage: typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppHeader: LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
export const LazyAppNav: LazyComponent<typeof import("../app/components/AppNav.vue")['default']>
export const LazyAppSnsBar: LazyComponent<typeof import("../app/components/AppSnsBar.vue")['default']>
export const LazyAppStatusBar: LazyComponent<typeof import("../app/components/AppStatusBar.vue")['default']>
export const LazySvCard: LazyComponent<typeof import("../app/components/SvCard.vue")['default']>
export const LazySvListItem: LazyComponent<typeof import("../app/components/SvListItem.vue")['default']>
export const LazySvModal: LazyComponent<typeof import("../app/components/SvModal.vue")['default']>
export const LazySvSectionTitle: LazyComponent<typeof import("../app/components/SvSectionTitle.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../app/components/ThemeToggle.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
export const LazyIconCSS: LazyComponent<typeof import("../node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
export const LazyVitePwaManifest: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaManifest: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaAssets: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
export const LazyPwaAppleImage: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue")['default']>
export const LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue")['default']>
export const LazyPwaFaviconImage: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue")['default']>
export const LazyPwaMaskableImage: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue")['default']>
export const LazyPwaTransparentImage: LazyComponent<typeof import("../node_modules/.pnpm/@vite-pwa+nuxt@1.1.1_magicast@0.5.2_vite@7.3.1_jiti@2.6.1_terser@5.46.1_yaml@2.8.3__wor_29c3c3fa5497324a32b9dd2d542d1350/node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_cac@6.7.14_db0@0.3.4_ioredis_5a99320645447920283ced4e9aa93f50/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
