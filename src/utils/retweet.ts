require('dotenv').config();
import twitter = require('twitter');

const retweet: (id: string) => Promise<void> = async (
  id: string
): Promise<void> => {
  //APIキーの読み込みと設定
  const client: twitter = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });
  //使用するAPIの設定
  const condition = 'statuses/retweet';
  //リツイート処理
  await client.post(condition, {
    id: id,
  });
};

export = retweet;
