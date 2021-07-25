import * as scrape from './scrape';
import mysql = require('mysql2/promise');

//データベースの設定
const db_setting = {
  host: process.env.DB_HOST ? process.env.DB_HOST : 'mysql_container',
  user: 'docker',
  password: 'docker',
  database: 'my_db',
};

const data: () => Promise<string[]> = async (): Promise<string[]> => {
  const database: mysql.Connection = await mysql.createConnection(db_setting);
  try {
    //データベース側の処理
    const sql_query =
      'CREATE TABLE IF NOT EXISTS tweets(id int AUTO_INCREMENT, tweet_id VARCHAR(50), PRIMARY KEY(id))';
    await database.query(sql_query);
    const data: [
      {
        tweet_id: string;
      }
    ] = (await database.query('SELECT tweet_id FROM tweets').then((i) => {
      return i[0];
    })) as [{ tweet_id: string }];
    const data_ids: string[] = data.map((i: { tweet_id: string }): string => {
      return i.tweet_id;
    });
    //データベース側のデータと取得したデータの差分を取得
    const diff_ids: string[] = (await scrape()).filter(
      (i: string): boolean => data_ids.indexOf(i) === -1
    );
    //差分データが存在すればデータの書き込み
    if (diff_ids.length !== 0) {
      diff_ids.map(async (i: string): Promise<void> => {
        const sql_query = 'INSERT INTO tweets SET ?';
        await database.query(sql_query, { tweet_id: i });
      });
    }
    return diff_ids;
  } catch (e) {
    console.error(e);
    throw new Error();
  } finally {
    database.end();
  }
};

export = data;
