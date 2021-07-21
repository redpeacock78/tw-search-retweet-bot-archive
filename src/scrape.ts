import { PythonShell } from 'python-shell';

const scrape: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //検索結果をPythonでスクレイピング
    const resp: unknown = await new Promise((resolve, reject): void => {
      PythonShell.run('python/search.py', null, (err, data): void => {
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
