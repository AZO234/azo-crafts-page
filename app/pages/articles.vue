<template>
  <div>
    <section class="section">
      <SvSectionTitle icon="bi:card-list">{{ t.sections.articles }}</SvSectionTitle>
      <div class="cards-grid">
        <SvCard
          v-for="item in articles" :key="item.title"
          :title="item.title" :category="item.tag"
          :icon="item.icon" :thumb="item.thumb"
          :desc="item.desc" :href="item.href" link-label="Read"
          @thumb-click="openModal"
        />
      </div>
    </section>

    <SvModal
      v-model="modalOpen"
      :title="modalData.title"
      :thumb="modalData.thumb"
      :href="modalData.href"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppState } from '~/composables/useAppState'

const { t } = useAppState()

useHead({
  title: 'AZO crafts page — Articles',
  meta: [{ name: 'description', content: 'AZO234の技術記事一覧。RaspberryPi・Arduino・Linux・Windowsなど。' }],
})

const modalOpen = ref(false)
const modalData = ref({ title: '', thumb: '', href: '' })
function openModal(p: { title: string; thumb: string; href?: string }) {
  modalData.value = { title: p.title, thumb: p.thumb, href: p.href ?? '' }
  modalOpen.value = true
}

const articles = [
  {
    tag: 'RPi TOPPERS', icon: 'simple-icons:raspberrypi',
    thumb: '/screenshots/rp-toppers.webp',
    title: 'RaspberryPiでTOPPERS',
    desc: 'Raspberry Pi用TOPPERS（TRON系OS）',
    href: 'https://domisan.sakura.ne.jp/article/rp_toppers/rp_toppers.html',
  },
  {
    tag: 'Linux Driver', icon: 'simple-icons:linux',
    thumb: '/screenshots/psxpad-linux.webp',
    title: 'PS1/2 SPI Interface Driver for Linux',
    desc: 'PS1/2コントローラをSPIバスに直結するLinuxドライバ。Linux kernelに収録。',
    href: 'https://domisan.sakura.ne.jp/article/psxpad/psxpad.html',
  },
  {
    tag: 'Arduino', icon: 'simple-icons:arduino',
    thumb: '/screenshots/arduino-psxpad.webp',
    title: 'PSX Joypad Library for Arduino IDE',
    desc: 'PS1/2コントローラをArduinoなどで制御するライブラリ。',
    href: 'https://domisan.sakura.ne.jp/article/arduino_psxpad/arduino_psxpad.html',
  },
  {
    tag: 'Arduino', icon: 'simple-icons:arduino',
    thumb: '/screenshots/arduino-ssd1306.webp',
    title: 'SSD1306 OLED (I2C) Library',
    desc: 'SSD1306(I2C)モノクロOLEDディスプレイをArduinoで制御するライブラリ。',
    href: 'https://domisan.sakura.ne.jp/article/arduino_ssd1306_i2c/arduino_ssd1306_i2c.html',
  },
  {
    tag: 'Arduino', icon: 'simple-icons:arduino',
    thumb: '/screenshots/arduino-ssd1331.webp',
    title: 'SSD1331 Color OLED (SPI) Library',
    desc: 'SSD1331(SPI)カラーOLEDディスプレイをArduinoで制御するライブラリ。',
    href: 'https://domisan.sakura.ne.jp/article/arduino_ssd1331_spi/arduino_ssd1331_spi.html',
  },
  {
    tag: 'Arduino', icon: 'simple-icons:arduino',
    thumb: '/screenshots/arduino-font-ja.webp',
    title: '日本語フォントライブラリ',
    desc: '8x8・16x16日本語ビットマップフォントと周辺機能ライブラリ（ESP32専用）。',
    href: 'https://domisan.sakura.ne.jp/article/arduino_font_ja/arduino_font_ja.html',
  },
  {
    tag: '3D Image', icon: 'bi:file-earmark-image',
    thumb: '/screenshots/mpo-article.webp',
    title: 'MPO閲覧・公開する方法',
    desc: '3D画像ファイル(.mpo)の閲覧・Web公開方法の解説。',
    href: 'https://domisan.sakura.ne.jp/article/mpo/mpo.html',
  },
  {
    tag: 'Ubuntu', icon: 'simple-icons:ubuntu',
    thumb: '/screenshots/ubuntu-multimedia.webp',
    title: 'マルチメディア機能',
    desc: 'Ubuntuでのlibx264・libx265 ffpresetを使ったマルチメディア環境構築。',
    href: 'https://domisan.sakura.ne.jp/article/ub_multimedia/ub_multimedia.html',
  },
  {
    tag: 'Windows', icon: 'bi:tools',
    thumb: '/screenshots/recuva.webp',
    title: '削除済みファイル復活「Recuva」',
    desc: '削除したファイルを復元するソフトウェア「Recuva」の使い方。',
    href: 'https://domisan.sakura.ne.jp/article/recuva/recuva.html',
  },
  {
    tag: 'Windows', icon: 'bi:tools',
    thumb: '/screenshots/testdisk.webp',
    title: 'TestDisk & PhotoRec',
    desc: 'ストレージドライブ復旧ソフト「TestDisk & PhotoRec」の使い方。',
    href: 'https://domisan.sakura.ne.jp/article/photorec/photorec.html',
  },
  {
    tag: 'CAD Font', icon: 'bi:type',
    thumb: '/screenshots/cadfont.webp',
    title: 'CAD用ストロークフォント「AZOmix」',
    desc: 'CAD向けベクターフォント「AZOmix」の解説・配布。',
    href: 'https://domisan.sakura.ne.jp/article/cadfont/cadfont.html',
  },
  {
    tag: 'CURVE', icon: 'bi:bezier2',
    thumb: '/screenshots/curve.webp',
    title: '曲線について',
    desc: 'ベジェ曲線・スプライン曲線などの数学的解説。',
    href: 'https://domisan.sakura.ne.jp/article/curve/curve.html',
  },
  {
    tag: 'MPEG', icon: 'bi:collection-fill',
    thumb: '/screenshots/mpeg-ts.webp',
    title: 'MPEG-2 TS 解説',
    desc: 'MPEG-2トランスポートストリームの仕様・構造解説。',
    href: 'https://domisan.sakura.ne.jp/article/ts/ts.html',
  },
]
</script>

<style scoped>
.section { margin-bottom: 2.5rem; }
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
