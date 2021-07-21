# tw-search-retweet-bot

[![GitHub](https://img.shields.io/github/license/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/LICENCE) [![Node](https://img.shields.io/badge/node-%3E%3D%2014.17.1-brightgreen)](https://nodejs.org/ja/) [![python](https://img.shields.io/badge/python-%3E%3D%203.7.3-blue)](https://www.python.org/) [![GitHub last commit](https://img.shields.io/github/last-commit/redpeacock78/tw-search-retweet-bot)](https://github.com/redpeacock78/tw-search-retweet-bot/commits/master)  

**Documentation**: English version | [日本語](https://github.com/redpeacock78/tw-search-retweet-bot/blob/master/docs/README_JP.md)


## 📄 About
**🤖 Create a BOT that retweets tweets that hit the specified search criteria on Twitter🐤**  
  
Sample: [パクリ商品bot(@ImitProductsbot)](https://twitter.com/ImitProductsbot)  

### 📦 Dependencies
***Caution: To run the program, you will need the following items, so please install them beforehand***
- [Docker](https://docs.docker.jp/)
- [Docker Compose](https://docs.docker.jp/compose/overview.html)
- [GNU Make](https://www.gnu.org/software/make/)


## 🛠 Usage
### ⚙ Setup
You can either `git clone` this repository or [download](https://github.com/redpeacock78/tw-search-retweet-bot/archive/refs/heads/master.zip) and unzip it.  
Create an `.env` file in the root directory and write the various settings as follows
```javascript
// Twitter API Key
CONSUMER_KEY='xxxxxxxxxxxxxxxxxxxxx'
CONSUMER_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
ACCESS_TOKEN_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
ACCESS_TOKEN_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

// Twitter Search Setting
// If there is more than one thing you want to search for, use
// SEARCH_QUERY='Search_1
// Search_2'
// or use a line feed code (\n) to separate them.
SEARCH_QUERY='What you want to search for on Twitter'
SEARCH_LIMIT='Maximum number of cases to be retrieved'

// How often do you perform searches
// The following settings will work at 5-minute intervals
// For more information, see https://github.com/merencia/node-cron
NODE_CRON='*/5 * * * *'
```

### 🖥  Operation
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
### Virtualization
- [Docker](https://docs.docker.jp/)(20.10.7)
- [Docker Compose](https://docs.docker.jp/compose/overview.html)(1.29.2)
### Automation Tool
- [GNU Make](https://www.gnu.org/software/make/)(3.81)
### Database
- [MySQL](https://www.mysql.com/jp/)(8.0.19)
### Language
- [Node.js](https://nodejs.org/ja/)(16.3.0)
- [TypeScript](https://www.typescriptlang.org/)(4.3.5)
- [Python](https://www.python.org/)(3.9.5)
### Linter
- [eslint](https://eslint.org/)(7.30.0)
- [prettier](https://prettier.io/)(2.3.2)

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