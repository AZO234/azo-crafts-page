# AZO crafts page — Nuxt 3 リニューアル

STEREO VIEWER と同じデザイントークンで統一したポートフォリオサイト。

## Tech Stack

- [Nuxt 3](https://nuxt.com/) — SSG/SSR
- [Vue 3](https://vuejs.org/) + Composition API
- [TypeScript](https://www.typescriptlang.org/)
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)
- CSS カスタムプロパティ（STEREO VIEWER と共通デザイントークン）

## Design Tokens（STEREO VIEWER 準拠）

| 変数           | Dark           | Light     |
|----------------|----------------|-----------|
| `--bg`         | `#0a0c10`      | `#f0f2f7` |
| `--surface`    | `#11141a`      | `#ffffff` |
| `--accent`     | `#00e5ff`      | `#0088bb` |
| `--accent2`    | `#ff3d6b`      | `#e0174f` |
| Font Mono      | Share Tech Mono |          |
| Font Sans      | Zen Kaku Gothic New |      |

## Setup

```bash
npm install
npm run dev
```

## Build & Deploy（Sakura Internet 向け）

```bash
# 静的ファイル生成
npm run generate

# dist/ を sakura にアップロード
# ── FTPクライアント等で domisan.sakura.ne.jp/ 直下へ ──
```

## ページ構成

```
/              → index.vue   Web Apps（メイン）
/github        → github.vue  GitHub プロジェクト一覧
/articles      → articles.vue 技術記事一覧
/shopping      → shopping.vue ショッピングサイト
OLD PAGE       → https://domisan.sakura.ne.jp/old/  （既存ページそのまま）
```

## コンポーネント

| コンポーネント      | 役割                              |
|-------------------|-----------------------------------|
| `AppHeader`       | ロゴ＋言語・フォント・テーマトグル |
| `AppNav`          | ページナビゲーション               |
| `AppStatusBar`    | 下部固定ステータスバー             |
| `SvSectionTitle`  | セクション見出し（PanelTitle相当） |
| `SvCard`          | カードグリッドアイテム             |
| `SvListItem`      | リストアイテム（記事・GitHub）     |
