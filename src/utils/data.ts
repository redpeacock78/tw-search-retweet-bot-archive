import * as db from '#tools/db';
import * as scrape from '#tools/scrape';
import * as gyokuto from 'gyokuto';

const calc = gyokuto.calc();
const tools = gyokuto.tools();

const data: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //データベース側のデータと取得したデータの差分を取得
    const db_data: string[] = tools.dedup<string>(
      (await (await db()).read()) as string[]
    );
    const scrape_data: string[] = tools.dedup<string>(await scrape());
    const diff_data: string[] = calc.diff<string[]>(scrape_data)(db_data) as [];
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
