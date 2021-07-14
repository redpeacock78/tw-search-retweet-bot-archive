# tw-search-retweet-bot

[![GitHub](https://img.shields.io/github/license/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE) [![Node](https://img.shields.io/badge/node-%3E%3D%2014.17.2-brightgreen)](https://nodejs.org/ja/) [![python](https://img.shields.io/badge/python-%3E%3D%203.7.3-blue)](https://www.python.org/) ![GitHub last commit](https://img.shields.io/github/last-commit/redpeacock78/tw-search-retweet-bot)  

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
  
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/redpeacock78) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/redpeacock78) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/redpeacock78)  
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