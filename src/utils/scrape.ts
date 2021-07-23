require('dotenv').config();
import { PythonShell } from 'python-shell';

const search_criteria = {
  env: {
    SEARCH_QUERY: process.env.SEARCH_QUERY,
    SEARCH_LIMIT: process.env.SEARCH_LIMIT,
  },
};

const scrape: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //検索結果をPythonでスクレイピング
    const resp: unknown = await new Promise((resolve, reject): void => {
      PythonShell.run('libs/search.py', search_criteria, (err, data): void => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
    return (resp as string[]).reverse();
  } catch {
    throw new Error();
  }
};

export = scrape;
