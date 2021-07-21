require('dotenv').config();
import * as data from './data';
import * as sleep from './sleep';
import * as retweet from './retweet';
import cron = require('node-cron');

//一定間隔で実行
cron.schedule(process.env.NODE_CRON, async (): Promise<void> => {
  try {
    const error: string[] = [];
    console.log('Running...');
    await data().then(async (ids: string[]): Promise<void> => {
      console.log(`New Tweets: ${ids.length}`);
      for (const i of ids) {
        await retweet(i)
          .then((): void => {
            console.log(`Successfully Retweeted: ${i}`);
          })
          .catch((): void => {
            error.push(`${i}`);
            console.error(`Failed to Retweet: ${i}`);
          });
        await sleep(2000);
      }
    });
    if (!error.length) {
      console.log('Done!');
    } else {
      console.error(`Failed to Retweet:\n  ${error.join('\n  ')}`);
    }
  } catch (err: unknown) {
    console.error(err);
  }
});
