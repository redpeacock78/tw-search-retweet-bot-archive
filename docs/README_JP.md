# tw-search-retweet-bot

[![GitHub](https://img.shields.io/github/license/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE) [![Node](https://img.shields.io/badge/node-%3E%3D%2014.17.1-brightgreen)](https://nodejs.org/ja/) [![python](https://img.shields.io/badge/python-%3E%3D%203.7.3-blue)](https://www.python.org/) [![GitHub last commit](https://img.shields.io/github/last-commit/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/commits/master)  
[![Release](https://github.com/redpeacock78/tw-search-retweet-bot/actions/workflows/release.yml/badge.svg)](https://github.com/redpeacock78/tw-search-retweet-bot/actions/workflows/release.yml) [![Daily Docker Build](https://github.com/redpeacock78/tw-search-retweet-bot/actions/workflows/daily-build.yml/badge.svg)](https://github.com/redpeacock78/tw-search-retweet-bot/actions/workflows/daily-build.yml)  
[![codecov](https://codecov.io/gh/redpeacock78/tw-search-retweet-bot/branch/master/graph/badge.svg?token=OF4BLGPS8Z)](https://codecov.io/gh/redpeacock78/tw-search-retweet-bot) [![Maintainability](https://api.codeclimate.com/v1/badges/062235405bc7d1f73e76/maintainability)](https://codeclimate.com/github/redpeacock78/tw-search-retweet-bot/maintainability) [![DeepScan grade](https://deepscan.io/api/teams/13696/projects/18142/branches/438023/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=13696&pid=18142&bid=438023)    

**ドキュメント**: [English version](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/README.md) | 日本語  

## 📖 目次
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [📄 これは何?](#-%E3%81%93%E3%82%8C%E3%81%AF%E4%BD%95)
- [🛠 使用方法](#-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
  - [🀄️ 方法1: Github Actionsで動作させる (これが最も簡単)](#-%E6%96%B9%E6%B3%951-github-actions%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%95%E3%81%9B%E3%82%8B-%E3%81%93%E3%82%8C%E3%81%8C%E6%9C%80%E3%82%82%E7%B0%A1%E5%8D%98)
  - [🎴 方法2: 自前のサーバーで動作させる](#-%E6%96%B9%E6%B3%952-%E8%87%AA%E5%89%8D%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%95%E3%81%9B%E3%82%8B)
- [🧑‍💻 使用技術](#-%E4%BD%BF%E7%94%A8%E6%8A%80%E8%A1%93)
- [❤ 寄付・支援](#-%E5%AF%84%E4%BB%98%E6%94%AF%E6%8F%B4)
- [🚀 コントリビューション](#-%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)
- [👾 作者](#-%E4%BD%9C%E8%80%85)
- [🎉 謝辞](#-%E8%AC%9D%E8%BE%9E)
  - [📚 ライブラリ](#-%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA)
  - [🎁 感謝](#-%E6%84%9F%E8%AC%9D)
- [🥝 ライセンス](#-%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 📄 これは何?
**🤖 Twitterで指定した検索条件にヒットしたツイートをリツイートするBOTを作成します🐤**  
  
例: [パクリ商品bot(@ImitProductsbot)](https://twitter.com/ImitProductsbot)  


## 🛠 使用方法
### 🀄️ 方法1: Github Actionsで動作させる (これが最も簡単)
1. このリポジトリをフォークします。
![Fork](https://i.imgur.com/4bcu1ws.jpg)
2. フォークされたリポジトリの`Settings` -> `Secrets`に、以下の`秘密の環境変数`を設定してください。
![Secret_1](https://imgur.com/z1g8Qz4.jpg)  
![Secret_2](https://imgur.com/EDHEHwI.jpg)  
    <details><summary><b>秘密の環境変数一覧</b></summary><div>

    |変数名|内容|デフォルト値|必須|注釈|
    |:-:|:-:|:-:|:-:|:-:|
    |`CONSUMER_KEY`|Twitter APIコンシューマーキー|-|はい||
    |`CONSUMER_SECRET`|Twitter APIコンシューマーシークレット|-|はい||
    |`ACCESS_TOKEN_KEY`|Twitter APIアクセストークンキー|-|はい|`Read and Write`の権限を付与した後に取得したトークンを使用します。|
    |`ACCESS_TOKEN_SECRET`|Twitter APIアクセストークンシークレット|-|はい|同上|
    |`SEARCH_QUERY`|Twitterで検索したい内容|-|はい|Twitterで検索したい内容([`検索コマンド`](https://developer.twitter.com/en/docs/twitter-api/v1/rules-and-filtering/search-operators)を使用することができます)。|
    |`SEARCH_LIMIT`|検索対象となる最大件数|100|いいえ|デフォルトでは、100件のアイテムを取得するように設定されています(APIの制限により、100件以上の数値を設定することは推奨されません)。|
    </div></details>
3. アクションの有効化に同意します。
![Enable_Actions](https://imgur.com/AnQxsp2.jpg)
4. アクションの有効化に同意した後、スケジュールされたワークフロー(ワークフローの定期実行)を再度有効にします。 
![Re-enable_workflow](https://imgur.com/GHdlfpA.jpg)
    - ***[公式ドキュメント](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)によると、パブリックリポジトリがフォークされると、スケジュールされたワークフローはデフォルトで無効になります。そのため、フォークされたリポジトリに対してGithub Actionsの定期実行を有効にするためには、この手順が必要となります。***
5. 以上の手順を完了すると、Github Actionsはデフォルトで10分ごとにワークフローを実行するようにホストされます。

### 🎴 方法2: 自前のサーバーで動作させる
- #### 📦 依存関係
  ***注意: プログラムを実行するには、以下のものが必要となりますので、あらかじめインストールしておいてください。***
  - [Docker](https://docs.docker.jp/)
  - [Docker Compose](https://docs.docker.jp/compose/overview.html)
  - [GNU Make](https://www.gnu.org/software/make/)

- #### ⚙ 設定
  このリポジトリを`git clone`するか、[ダウンロード](https://github.com/redpeacock78/tw-search-retweet-bot/archive/refs/heads/master.zip)して解凍してください。  

  プロジェクトのルートディレクトリに`.env`ファイルを作成し、以下のように各種設定を記述します。
  ```bash
  # Twitter API Key
  CONSUMER_KEY='xxxxxxxxxxxxxxxxxxxxx'
  CONSUMER_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  ACCESS_TOKEN_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  ACCESS_TOKEN_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

  # Twitter検索設定
  # 検索したい内容が複数ある場合は
  # SEARCH_QUERY='検索_1
  # 検索_2'
  # などのように改行で区切るか改行コード(\n)で区切ってください。
  SEARCH_QUERY='ツイッターで検索したい内容'
  SEARCH_LIMIT='検索結果の最大取得件数'

  # どのくらいの頻度で検索を行うかの設定
  # 以下の設定は、5分間隔で動作します。
  # 詳しくは、https://github.com/merencia/node-cron を参照ください。
  NODE_CRON='*/5 * * * *'
  ```

- #### 🖥  操作方法
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
- ### 仮想化
  [![Docker](https://img.shields.io/badge/docker(20.10.7)-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.jp/) [![](https://img.shields.io/badge/docker%20compose(1.29.2)-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.jp/compose/overview.html)
- ### 自動化ツール
  [![GNU Make](https://img.shields.io/badge/gnu%20make(3.81)-A42E2B?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/)
- ### データベース
  [![MySQL](https://img.shields.io/badge/mysql(8.0.19)-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/jp/)
- ### 言語
  [![Node.js](https://img.shields.io/badge/node.js(16.3.0)-43853D.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/ja/) [![TypeScript](https://img.shields.io/badge/typescript(4.3.5)-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Python](https://img.shields.io/badge/python(3.9.5)-14354C.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/) [![GNU Bash](https://img.shields.io/badge/gnu%20bash(5.1.8)-4EAA25.svg?style=for-the-badge&logo=gnu%20bash&logoColor=white)](https://www.gnu.org/software/bash/)
- ### テストフレームワーク
  [![Jest](https://img.shields.io/badge/jest(27.0.6)-C21325.svg?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io)
- ### リンター
  [![eslint](https://img.shields.io/badge/ESLint(7.30.0)-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/) [![Prettier](https://img.shields.io/badge/Prettier(2.3.2)-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

## ❤ 寄付・支援
**寄付やサポートはいつでも歓迎です。🥓や一杯の☕️の支払いにご協力いただければ、作者は新機能の追加やバグの修正に最善を尽くします。**  
  
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/redpeacock78) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/redpeacock78) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/redpeacock78) [![LiberaPay](https://img.shields.io/badge/Liberapay-F6C915?style=for-the-badge&logo=liberapay&logoColor=black)](https://liberapay.com/redpeacock78/donate) [![Fantia](https://raw.githubusercontent.com/redpeacock78/imgs/master/logo.svg)](https://fantia.jp/fanclubs/218155/plans) [![ofuse](https://raw.githubusercontent.com/redpeacock78/imgs/master/ofuse_logo.svg)](https://ofuse.me/redpeacock78)  
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
### 📚 ライブラリ
- [twint](https://github.com/twintproject/twint) (Twitterの情報取得はこのライブラリに依存しています)
- [node-twitter](https://github.com/desmondmorris/node-twitter) (Twitter APIの操作はこのライブラリに依存しています)
### 🎁 感謝
- [木賃ふくよし(芸名) @ 寿烏丸るみの中身(@wb_opus_1)](https://twitter.com/wb_opus_1) (提案者)


## 🥝 ライセンス
本ソースコードは[MITライセンス](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE)です。