import * as data from '../utils/data';
import * as sleep from '../utils/sleep';
import * as retweet from '../utils/retweet';

const core: () => Promise<void> = async (): Promise<void> => {
  console.log('Running...');
  await data()
    .then(async (ids: string[]): Promise<void> => {
      console.log(`New Tweets: ${ids.length}`);
      for (const i of ids) {
        await retweet(i)
          .then((): void => {
            console.log(`Successfully Retweeted: ${i}`);
          })
          .catch((err: Error): void => {
            console.error(`Failed to Retweet: ${i}`);
            console.error(err);
          });
        await sleep(2000);
      }
    })
    .catch((err: Error): void => {
      console.error(err);
    });
};

export = core;
