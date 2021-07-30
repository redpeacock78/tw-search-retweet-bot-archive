import * as db from './db';
import * as scrape from './scrape';

const data: () => Promise<string[] | Error> = async (): Promise<
  string[] | Error
> => {
  try {
    //データベース側のデータと取得したデータの差分を取得
    const db_data: string[] = (await (await db()).read()) as string[];
    const scrape_data: string[] = await scrape();
    const diff_data: string[] = scrape_data.filter(
      (i: string): boolean => db_data.indexOf(i) === -1
    );
    //差分データが存在すればデータの書き込み
    if (diff_data.length !== 0) {
      await (await db()).write(diff_data);
    }
    return diff_data;
  } catch (e: unknown) {
    return e as Error;
  }
};

export = data;
