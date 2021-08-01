require('dotenv').config();
import * as util from 'util';
import { PythonShell } from 'python-shell';
import * as child_process from 'child_process';

const scrape: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //Python-shellに渡す環境変数
    const exec = util.promisify(child_process.exec);
    const pypath: string = await exec("type python3|awk '{print $3}'").then(
      (i: { stdout: string; stderr: string }): string => {
        return i.stdout.replace('\n', '');
      }
    );
    const search_criteria = {
      pythonPath: pypath,
      env: {
        SEARCH_QUERY: process.env.SEARCH_QUERY,
        SEARCH_LIMIT: process.env.SEARCH_LIMIT,
      },
    };
    //検索結果をPythonでスクレイピング
    const py = util.promisify(PythonShell.run);
    return await py('libs/search.py', search_criteria).then(
      (i: string[]): string[] => {
        return i.reverse();
      }
    );
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};

export = scrape;
