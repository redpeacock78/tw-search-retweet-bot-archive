# tw-search-retweet-bot

[![GitHub](https://img.shields.io/github/license/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE) [![Node](https://img.shields.io/badge/node-%3E%3D%2014.17.2-brightgreen)](https://nodejs.org/ja/) [![python](https://img.shields.io/badge/python-%3E%3D%203.7.3-blue)](https://www.python.org/) [![GitHub last commit](https://img.shields.io/github/last-commit/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/commits/master)  

**ドキュメント**: [English version](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/README.md) | 日本語


## 📄 これは何?
**🤖 Twitterで指定した検索条件にヒットしたツイートをリツイートするBOTを作成します🐤**  
  
例: [パクリ商品bot(@ImitProductsbot)](https://twitter.com/ImitProductsbot)  

### 📦 依存関係
***注意してください。プログラムを実行するには、以下のものが必要となりますので、あらかじめインストールしておいてください。***
- [Docker](https://docs.docker.jp/)
- [Docker Compose](https://docs.docker.jp/compose/overview.html)
- [GNU Make](https://www.gnu.org/software/make/)


## 🛠 使用方法
### ⚙ 設定
このリポジトリを`git clone`するか、[ダウンロード](https://github.com/redpeacock78/tw-search-retweet-bot/archive/refs/heads/master.zip)して解凍してください。  

プロジェクトのルートディレクトリに`.env`ファイルを作成し、以下のように各種設定を記述します。
```javascript
// Twitter API Key
CONSUMER_KEY='xxxxxxxxxxxxxxxxxxxxx'
CONSUMER_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
ACCESS_TOKEN_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
ACCESS_TOKEN_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

// Twitter検索設定
SEARCH_QUERY='ツイッターで検索したい内容'
SEARCH_LIMIT='検索結果の最大取得件数'

// どのくらいの頻度で検索を行うかの設定
// 以下の設定は、5分間隔で動作します。
// 詳しくは、https://github.com/merencia/node-cron を参照ください。
NODE_CRON='*/5 * * * *'
```

### 🖥  操作方法
```bash
# 初回起動
$ make build-up
# デフォルトではDebianを使用しています。Alpineを使用したい場合は以下のようにしてください。
$ make build-up dist=alpine

# シャットダウン
$ make down

# 2回目以降の起動
$ make up
```

## 🧑‍💻 使用技術
### 仮想化
- [Docker](https://docs.docker.jp/)(20.10.7)
- [Docker Compose](https://docs.docker.jp/compose/overview.html)(1.29.2)
### 自動化ツール
- [GNU Make](https://www.gnu.org/software/make/)(3.81)
### データベース
- [MySQL](https://www.mysql.com/jp/)(8.0.19)
### 言語
- [Node.js](https://nodejs.org/ja/)(16.3.0)
- [TypeScript](https://www.typescriptlang.org/)(4.3.5)
- [Python](https://www.python.org/)(3.9.5)
### リンター
- [eslint](https://eslint.org/)(7.30.0)
- [prettier](https://prettier.io/)(2.3.2)

## ❤ 寄付・支援
**寄付やサポートはいつでも歓迎です。🥓や一杯の☕️の支払いにご協力いただければ、作者は新機能の追加やバグの修正に最善を尽くします。**  
  
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/redpeacock78) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/redpeacock78) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/redpeacock78) [![Fantia](https://img.shields.io/badge/Fantia-ff69b4?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDI2NS40NCAyNzEuNjY2NjYiCiAgIGhlaWdodD0iMjcxLjY2NjY2IgogICB3aWR0aD0iMjY1LjQ0IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNiIgLz48ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMzMywwLDAsLTEuMzMzMzMzMywwLDI3MS42NjY2NykiCiAgICAgaWQ9ImcxMCI+PGcKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4xKSIKICAgICAgIGlkPSJnMTIiPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTQiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM3ZWM3Mjk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gNTgxLjU5OCwxNzMyLjI4IC0xNi43LDE2My4yIC00ODkuNjAxMSwtNTAuMDkgMTYuNjk5MiwtMTYzLjIxIDY2Ljc4ODksLTY1Mi44IDE2My4yMDMsMTYuNyAtMzMuMzk0LDMyNi40IDE2My4xOTksMTYuNyAtMTYuNjk5LDE2My4yIC0xNjMuMTk5LC0xNi43IC0xNi43LDE2My4yIDMyNi40MDMsMzMuNCIgLz48cGF0aAogICAgICAgICBpZD0icGF0aDE2IgogICAgICAgICBzdHlsZT0iZmlsbDojZTIwNjgwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJtIDc1Ny4xOCwyMDM1LjQ5IDMyOC4xLDIuMDMgMS4wMiwtMTY0LjA1IC0zMjguMTA1LC0yLjAzIC0xLjAxNSwxNjQuMDUiIC8+PHBhdGgKICAgICAgICAgaWQ9InBhdGgxOCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2UyMDY4MDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAxMDg2LjMsMTg3My40NyAxLjAxLC0xNjQuMDUgLTE2NC4wNDgsLTEuMDEgMS4wMTUsLTE2NC4wNSAxNjQuMDUzLDEuMDEgMS4wMSwtMTY0LjA1IC0xNjQuMDQ3LC0xLjAyIDEuMDE2LC0xNjQuMDUgMTY0LjA1MSwxLjAyIDE2NC4wNSwxLjAyIC0xLjAyLDE2NC4wNSAtMy4wNCw0OTIuMTQgLTE2NC4wNSwtMS4wMSIgLz48cGF0aAogICAgICAgICBpZD0icGF0aDIwIgogICAgICAgICBzdHlsZT0iZmlsbDojZTIwNjgwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJtIDc2MC4yMjcsMTU0My4zNCAxNjQuMDUsMS4wMiAxLjAxNiwtMTY0LjA2IC0xNjQuMDUxLC0xLjAxIC0xLjAxNSwxNjQuMDUiIC8+PHBhdGgKICAgICAgICAgaWQ9InBhdGgyMiIKICAgICAgICAgc3R5bGU9ImZpbGw6Izg4MWI4MTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAxNjIwLjY1LDE3OTMuOTcgLTE2My43LC0xMC42OSAxMC42OCwtMTYzLjcxIDMyLjA3LC00OTEuMTEgMTYzLjcsMTAuNjkgLTMyLjA2LDQ5MS4xMiAxNjMuNywxMC42OCAtMTAuNjgsMTYzLjcxIC0xNjMuNzEsLTEwLjY5IiAvPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoMjQiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM4ODFiODE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gMTc5NS4wNCwxNjQwLjk1IDE2My43MSwxMC42OSAzMi4wNiwtNDkxLjExIC0xNjMuNywtMTAuNjkgLTMyLjA3LDQ5MS4xMSIgLz48cGF0aAogICAgICAgICBpZD0icGF0aDI2IgogICAgICAgICBzdHlsZT0iZmlsbDojMzdhNDk4O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJNIDQ5MC43NDYsNTY2LjYwOSA1MDMuMTcyLDczMC4xOTkgMzM5LjU5LDc0Mi42MjEgMzUyLjAxMiw5MDYuMTk5IDE4OC40Myw5MTguNjI5IDE3Ni4wMDgsNzU1LjA1MSAxMi40MjU4LDc2Ny40NjkgMCw2MDMuODkxIDE2My41ODIsNTkxLjQ2MSAxMzguNzM0LDI2NC4zMDEgMTI2LjMwOSwxMDAuNzE5IDI4OS44OTEsODguMjg5MSBsIDE2My41ODIsLTEyLjQxOCAxMi40MjUsMTYzLjU3NzkgLTE2My41ODIsMTIuNDMgMjQuODQ4LDMyNy4xNiAxNjMuNTgyLC0xMi40MyIgLz48cGF0aAogICAgICAgICBpZD0icGF0aDI4IgogICAgICAgICBzdHlsZT0iZmlsbDojMzQzNTc4O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJtIDg5NS44NjMsODYzLjY5OSAxNjEuNzI3LC0yNy41MzkgLTI3LjU0LC0xNjEuNzMgLTE2MS43MjIsMjcuNTM5IDI3LjUzNSwxNjEuNzMiIC8+PHBhdGgKICAgICAgICAgaWQ9InBhdGgzMCIKICAgICAgICAgc3R5bGU9ImZpbGw6IzM0MzU3ODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0iTSA5NDcuNDQxLDE4OS4yNjIgMTAwMi41Miw1MTIuNzExIDg0MC43OTMsNTQwLjI1IDc1OC4xOCw1NS4wNzAzIDkxOS45MDIsMjcuNTMxMyAxMDgxLjYzLDAgbCAyNy41NCwxNjEuNzE5IC0xNjEuNzI5LDI3LjU0MyIgLz48cGF0aAogICAgICAgICBpZD0icGF0aDMyIgogICAgICAgICBzdHlsZT0iZmlsbDojZjA0NzIyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJtIDEzMTUuMTYsODk1IDMyNi40LDMzLjM5OCAxNi43LC0xNjMuMTk5IEwgMTMzMS44NSw3MzEuODAxIDEzMTUuMTYsODk1IiAvPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoMzQiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmMDQ3MjI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Ik0gMTY1OC4yNiw3NjUuMTk5IDE2NzQuOTUsNjAyIGwgLTE2My4yLC0xNi42OTkgMTYuNywtMTYzLjE5OSAxNjMuMiwxNi42OTkgMTYuNywtMTYzLjE5OSAtMTYzLjIsLTE2LjcwNCAxNi43LC0xNjMuMTk4OCAxNjMuMiwxNi42OTE4IDE2My4yLDE2LjY5OSAtNjYuNzksNjUyLjgwOCAtMTYzLjIsLTE2LjY5OSIgLz48cGF0aAogICAgICAgICBpZD0icGF0aDM2IgogICAgICAgICBzdHlsZT0iZmlsbDojZjA0NzIyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJtIDEzNjUuMjUsNDA1LjM5OCAxNjMuMiwxNi43MDQgMTYuNywtMTYzLjIwNCAtMTYzLjIsLTE2LjY5OSAtMTYuNywxNjMuMTk5IiAvPjwvZz48L2c+PC9zdmc+&logoColor=white)](https://fantia.jp/fanclubs/218155/plans)  
|<img src="https://i.imgur.com/yEjo3BS.jpg"  width="50%">|<img src="https://i.imgur.com/Mj43KvP.jpg" width="33%">|
|:-:|:-:|
|[PayPay](https://paypay.ne.jp/guide/send/?_ga=2.238451843.205875726.1558440708-447181547.1558440708)|[Kyash](https://support.kyash.co/hc/ja/articles/900002413646-%E9%80%81%E9%87%91%E6%96%B9%E6%B3%95)|  
<table>
  <thead>
    <tr>
      <th colspan="2" align="center">暗号通貨</th>
    </tr>
  </thead>
  <th align="center">銘柄</th>
  <th align="center">アドレス</th>
  <tr>
    <td align="center">BAT</td>
    <td align="left">0xE2876c1264f9d202bad8f8Bb2f1D632b54Df9637</td>
  <tr>
    <td align="center">BTC</td>
    <td align="left">3DANdi2ooepsWpTFMbM9ZRgLtjKJB1sjkm</td>
  <tr>
    <td align="center">BHC</td>
    <td align="left">3DANdi2ooepsWpTFMbM9ZRgLtjKJB1sjkm</td>
  </tr>
</table>

## 🚀 コントリビューション
[Issues](https://github.com/redpeacock78/tw-search-retweet-bot/issues/new)、またはPull Requestsを作成してください。  


## 👾 作者
- 主なプログラムとドキュメント: [@redpeacock78](https://github.com/redpeacock78)


## 🎉 謝辞
### 📕 ライブラリ
- [twint](https://github.com/twintproject/twint) (Twitterの情報取得はこのライブラリに依存しています)
- [node-twitter](https://github.com/desmondmorris/node-twitter) (Twitter APIの操作はこのライブラリに依存しています)
### 🎁 感謝
- [木賃ふくよし(芸名) @ 寿烏丸るみの中身(@wb_opus_1)](https://twitter.com/wb_opus_1) (提案者)


## 🥝 ライセンス
本ソースコードは[MITライセンス](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE)です。