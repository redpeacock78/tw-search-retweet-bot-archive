import * as db from '#tools/db';
import * as arr from '#tools/arr';
import * as scrape from '#tools/scrape';

const data: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //データベース側のデータと取得したデータの差分を取得
    const db_data: string[] = (await (await db()).read()) as string[];
    const scrape_data: string[] = arr.dedup<string>(await scrape());
    const diff_data: string[] = arr.diff<string>(scrape_data, db_data);
    //差分データが存在すればデータの書き込み
    if (diff_data.length) {
      await (await db()).write(diff_data);
    }
    return diff_data;
  } catch (e: unknown) {
    throw new Error(e as string);
  }
};

export = data;
