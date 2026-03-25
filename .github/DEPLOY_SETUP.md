# さくらインターネット（ライト） CI/CD セットアップ手順

SSH非対応のため **FTP（FTPS）** でデプロイする。

## 必要な GitHub Secrets

リポジトリの Settings → Secrets and variables → Actions で以下を登録する。

| Secret 名 | 内容 | 例 |
|---|---|---|
| `FTP_HOST` | さくらの FTP ホスト名 | `xxx.sakura.ne.jp` |
| `FTP_USER` | FTP ユーザー名 | `domisan` |
| `FTP_PASSWORD` | FTP パスワード | さくらコンパネのパスワード |
| `FTP_REMOTE_DIR` | デプロイ先ディレクトリ | `/` または `/www/` |

### FTP情報の確認場所

さくらインターネット コントロールパネル →
**サーバー情報** に記載されている：
- FTPホスト名: `ユーザー名.sakura.ne.jp`
- FTPユーザー名: さくらのユーザー名
- FTPパスワード: コントロールパネルのログインパスワード

### FTP_REMOTE_DIR について

さくらライトの公開ディレクトリは通常 `www/` 。
FTPルートから見たパスを指定する：

```
/          → FTPルート直下（= 公開ディレクトリ）
/www/      → www フォルダ内
```

実際のパスはFTPクライアント（FileZilla等）で接続して確認するのが確実。

---

## 初回だけ手動で行うこと

`.htaccess` と `old/` は自動デプロイから除外しているため、
**初回のみ手動でさくらにアップロード**する。

FTPクライアント（FileZilla等）で：
1. `.output/public/.htaccess` をアップロード
2. 旧ページを `old/` フォルダにアップロード

---

## 動作確認

GitHub でリポジトリを作成し push する：

```bash
git init
git remote add origin https://github.com/AZO234/azo-crafts.git
git add .
git commit -m "initial commit"
git push -u origin main
```

GitHub → Actions タブでワークフローの実行を確認。
緑チェックが付けばデプロイ完了（初回は全ファイル転送で数分かかる）。

---

## ワークフローのトリガー

| 操作 | 動作 |
|---|---|
| `main` ブランチに push | 自動デプロイ |
| Actions タブ → "Run workflow" | 手動デプロイ |

2回目以降は差分のみ転送されるので高速。
`buildDate` は `npm run generate` 実行時点（= Actions 実行時）の JST 日付が自動で入る。

---

## 注意事項

- さくらライトは FTPS（FTP over TLS explicit）対応
- FTP パスワードは平文で送信されるリスクがあるため、
  GitHub Secrets に登録して直接コードに書かないこと
- `dangerous-clean-slate: false` により差分のみ転送
  （`true` にするとリモートを全削除してから転送 → 危険）
