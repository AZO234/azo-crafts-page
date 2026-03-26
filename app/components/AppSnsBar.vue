<template>
  <div class="sns-bar">

    <!-- Twitter シェアボタン
         widgets.js が読み込まれるとリッチボタンに変換される
         dev環境/localhost では plain リンクのまま表示 -->
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-show-count="false"
      target="_blank"
      rel="noopener noreferrer"
    >ポスト</a>

    <!-- Facebook シェアボタン
         本番URLでのみ正常動作（localhost ではCORS制限あり） -->
    <iframe
      src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdomisan.sakura.ne.jp%2F&layout&size&width=93&height=20&appId"
      width="93" height="20"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />

    <!-- LINE シェアボタン
         data-env="REAL" = 本番のみ動作。loader.min.js が display:none を解除する -->
    <div
      class="line-it-button"
      data-lang="ja"
      data-type="share-a"
      data-env="REAL"
      data-url="https://domisan.sakura.ne.jp/"
      data-color="default"
      data-size="small"
      data-count="false"
      data-ver="3"
      style="display: none;"
    />

    <!-- Buy Me a Coffee -->
    <a
      href="https://buymeacoffee.com/azo234"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ffdd00?style=flat-square&logo=buymeacoffee&logoColor=black"
        alt="Buy Me a Coffee"
        width="120" height="20"
      >
    </a>

    <!-- GitHub Sponsor -->
    <a
      href="https://github.com/sponsors/azo234"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.shields.io/static/v1?label=Sponsor&message=❤️&logo=github-sponsors&color=lightgrey&style=for-the-badge"
        alt="Sponsor ❤️"
        height="20"
      >
    </a>

  </div>
</template>

<style scoped>
.sns-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  margin-bottom: 0.4rem;
}
.sns-bar img { display: block; }

/* Twitter シェアボタンのデフォルトスタイル
   widgets.js が読み込まれる前のフォールバック表示 */
a.twitter-share-button:not(.twitter-share-button-rendered) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #000;
  color: #fff;
  font-family: -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 9999px;
  text-decoration: none;
  line-height: 1.4;
}
</style>
