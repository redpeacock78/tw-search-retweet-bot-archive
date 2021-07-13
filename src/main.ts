import * as retweet from "./retweet";
import * as scrape from "./scrape";
import * as sleep from "./sleep";
import mysql = require("mysql2/promise");
import cron = require("node-cron");

//データベースの設定
const db_setting = {
  host: "db",
  user: "docker",
  password: "docker",
  database: "my_db",
};

const main: () => Promise<void> = async (): Promise<void> => {
  const database = await mysql.createConnection(db_setting);
  try {
    //データベース側の処理
    const sql_query =
      "CREATE TABLE IF NOT EXISTS tweets(id int AUTO_INCREMENT, tweet_id VARCHAR(50), PRIMARY KEY(id))";
    await database.query(sql_query);
    const data: [
      {
        tweet_id: string;
      }
    ] = (await database.query("SELECT tweet_id FROM tweets").then((i) => {
      return i[0];
    })) as [{ tweet_id: string }];
    const data_ids: string[] = data.map((i: { tweet_id: string }): string => {
      return i.tweet_id;
    });
    //データベース側のデータと取得したデータの差分を取得
    const diff_ids: string[] = (await scrape()).filter(
      (i: string): boolean => data_ids.indexOf(i) === -1
    );
    console.log(`New Tweets: ${diff_ids.length}`);
    //差分データが存在すればデータの書き込みとretweetを実行
    if (diff_ids.length !== 0) {
      //書き込み
      diff_ids.map(async (i: string): Promise<void> => {
        const sql_query = "INSERT INTO tweets SET ?";
        await database.query(sql_query, { tweet_id: i });
      });
      //リツイート
      for (const i of diff_ids) {
        await retweet(i).then((): void => {
          console.log(`Retweeted: ${i}`);
        }).catch((): void => {
          console.error(`Fatal Retweet: ${i}`);
        });
        await sleep(2000);
      }
    }
  } catch {
    console.log("error");
  } finally {
    database.end();
  }
};

//5分毎に実行
cron.schedule("*/5 * * * *", async (): Promise<void> => {
  try {
    console.log("Running...");
    await main();
    console.log("Done!");
  } catch (e) {
    console.error(e);
  }
});
