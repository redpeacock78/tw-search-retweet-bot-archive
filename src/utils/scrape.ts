require('dotenv').config();
import * as util from 'util';
import { PythonShell } from 'python-shell';
import * as child_process from 'child_process';

const scrape: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //Python-shellに渡す環境変数
    let pypath: string;
    if (!process.env.PYTHON_PATH) {
      const exec = util.promisify(child_process.exec);
      pypath = await exec("type python3|awk '{print $3}'").then(
        (i: { stdout: string; stderr: string }): string => {
          return i.stdout.replace('\n', '');
        }
      );
    } else {
      pypath = process.env.PYTHON_PATH;
    }
    const search_criteria = {
      pythonPath: pypath,
      env: {
        SEARCH_QUERY: process.env.SEARCH_QUERY,
        SEARCH_LIMIT: process.env.SEARCH_LIMIT,
      },
    };
    //検索結果をPythonでスクレイピング
    const resp: unknown = await new Promise((resolve, reject): void => {
      PythonShell.run('libs/search.py', search_criteria, (err, data): void => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
    return (resp as string[]).reverse();
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};

export = scrape;
