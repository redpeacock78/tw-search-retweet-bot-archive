# tw-search-retweet-bot

[![GitHub](https://img.shields.io/github/license/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE) [![Node](https://img.shields.io/badge/node-%3E%3D%2014.17.1-brightgreen)](https://nodejs.org/ja/) [![python](https://img.shields.io/badge/python-%3E%3D%203.7.3-blue)](https://www.python.org/) [![GitHub last commit](https://img.shields.io/github/last-commit/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/commits/master)  

**Documentation**: English version | [日本語](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/docs/README_JP.md)


## 📄 About
**🤖 Create a BOT that retweets tweets that hit the specified search criteria on Twitter🐤**  
  
Sample: [パクリ商品bot(@ImitProductsbot)](https://twitter.com/ImitProductsbot)  


## 🛠 Usage
### 🀄️ Way 1: Works on Github Actions
1. Fork this repository.
2. Add the following `Secret Environment Values` to `Settings`->`Secrets` in the forked repository.
    <details><summary><code>Secret Environment Values List</code></summary><div>
    
    |Variable name|Meaning|Default|Yes/No|Notes|
    |:-:|:-:|:-:|:-:|:-:|
    |`CONSUMER_KEY`|Twitter API consumer key|-|Yes||
    |`CONSUMER_SECRET`|Twitter API consumer secret|-|Yes||
    |`ACCESS_TOKEN_KEY`|Twitter API access token key|-|Yes||
    |`ACCESS_TOKEN_SECRET`|Twitter API access token secret|-|Yes||
    |`SEARCH_QUERY`|What you want to search for on Twitter|-|Yes|Words you want to search for on Twitter (You can use the [`search command`](https://developer.twitter.com/en/docs/twitter-api/v1/rules-and-filtering/search-operators)).|
    |`SEARCH_LIMIT`|Maximum number of cases to be retrieved|100|No|By default, it is set to retrieve 100 items.|
    </div></details>

3. Agree to enable Actions.
4. After agreeing to activate the action, re-enable the scheduled workflow (the scheduled task of the workflow).  
***According to [the official documentation](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow), when a public repository is forked, scheduled workflows are disabled by default. Therefore, in order to enable Github Actions timed tasks for forked repositories, this step is required.***
5. Once you have completed the above steps, Github Actions will host the workflow to run every 10 minutes by default.
### 🎴 Way 2: Runs on a self-hosted server
- #### 📦 Dependencies  
  ***Caution: To run the program, you will need the following items, so please install them beforehand***
  - [Docker](https://docs.docker.jp/)
  - [Docker Compose](https://docs.docker.jp/compose/overview.html)
  - [GNU Make](https://www.gnu.org/software/make/)

- #### ⚙ Setup
  You can either `git clone` this repository or [download](https://github.com/redpeacock78/tw-search-retweet-bot/archive/refs/heads/master.zip) and unzip it.  
  Create an `.env` file in the root directory and write the various settings as follows
  ```bash
  # Twitter API Key
  CONSUMER_KEY='xxxxxxxxxxxxxxxxxxxxx'
  CONSUMER_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  ACCESS_TOKEN_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  ACCESS_TOKEN_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

  # Twitter Search Setting
  # If there is more than one thing you want to search for, use
  # SEARCH_QUERY='Search_1
  # Search_2'
  # or use a line feed code (\n) to separate them.
  SEARCH_QUERY='What you want to search for on Twitter'
  SEARCH_LIMIT='Maximum number of cases to be retrieved'

  # How often do you perform searches
  # The following settings will work at 5-minute intervals
  # For more information, see https://github.com/merencia/node-cron
  NODE_CRON='*/5 * * * *'
  ```

- #### 🖥  Operation
  ```bash
  # At initial startup
  $ make build-up
  # By default, Debian is used; if you want to use Alpine, use
  $ make build-up dist=alpine

  # Shutdown
  $ make down

  # Startup after the second time
  $ make up
  ```

## 🧑‍💻 Technology used
- ### Virtualization  
  [![Docker](https://img.shields.io/badge/docker(20.10.7)-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.jp/) [![](https://img.shields.io/badge/docker%20compose(1.29.2)-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.jp/compose/overview.html)  
- ### Automation Tool  
  [![GNU Make](https://img.shields.io/badge/gnu%20make(3.81)-A42E2B?style=for-the-badge&logo=gnu&logoColor=white)](https://www.gnu.org/software/make/)  
- ### Database  
  [![MySQL](https://img.shields.io/badge/mysql(8.0.19)-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/jp/)  
- ### Languages  
  [![Node.js](https://img.shields.io/badge/node.js(16.3.0)-43853D.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/ja/) [![TypeScript](https://img.shields.io/badge/typescript(4.3.5)-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Python](https://img.shields.io/badge/python(3.9.5)-14354C.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/) [![GNU Bash](https://img.shields.io/badge/gnu%20bash(5.1.8)-4EAA25.svg?style=for-the-badge&logo=gnu%20bash&logoColor=white)](https://www.gnu.org/software/bash/)
- ### Linter  
  [![eslint](https://img.shields.io/badge/ESLint(7.30.0)-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/) [![Prettier](https://img.shields.io/badge/Prettier(2.3.2)-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

## ❤ Donate/Support
**Donations and support are always welcome. If you can help us pay for 🥓 or a cup of ☕️ , the author will do his best to add a new feature or fix a bug.**  
  
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/redpeacock78) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/redpeacock78) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/redpeacock78) [![LiberaPay](https://img.shields.io/badge/Liberapay-F6C915?style=for-the-badge&logo=liberapay&logoColor=black)](https://liberapay.com/redpeacock78/donate) [![Fantia](https://raw.githubusercontent.com/redpeacock78/imgs/master/logo.svg)](https://fantia.jp/fanclubs/218155/plans) [![ofuse](https://raw.githubusercontent.com/redpeacock78/imgs/master/ofuse_logo.svg)](https://ofuse.me/redpeacock78)  
|<img src="https://i.imgur.com/yEjo3BS.jpg"  width="50%">|<img src="https://i.imgur.com/Mj43KvP.jpg" width="33%">|
|:-:|:-:|
|[PayPay](https://paypay.ne.jp/guide/send/?_ga=2.238451843.205875726.1558440708-447181547.1558440708)|[Kyash](https://support.kyash.co/hc/ja/articles/900002413646-%E9%80%81%E9%87%91%E6%96%B9%E6%B3%95)|  
<table>
  <thead>
    <tr>
      <th colspan="2" align="center">Cryptocurrency</th>
    </tr>
  </thead>
  <th align="center">Brand</th>
  <th align="center">Address</th>
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

## 🚀 Contribution
Please [Create Issues](https://github.com/redpeacock78/tw-search-retweet-bot/issues/new), or Pull Requests.


## 👾 Author
- Main Programs and Documents: [@redpeacock78](https://github.com/redpeacock78)


## 🎉 Acknowledgements
### 📕 Libraries
- [twint](https://github.com/twintproject/twint) (Getting Twitter information depends on this library)
- [node-twitter](https://github.com/desmondmorris/node-twitter) (The Twitter API operations depend on this library)
### 🎁 Special Thanks
- [木賃ふくよし(芸名) @ 寿烏丸るみの中身(@wb_opus_1)](https://twitter.com/wb_opus_1) (Proponent)


## 🥝 License
This source code is licensed [MIT](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE).