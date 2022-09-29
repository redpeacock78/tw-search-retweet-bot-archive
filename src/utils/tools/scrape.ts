require('dotenv').config();
import * as util from 'util';
import { PythonShell } from 'python-shell';
import * as child_process from 'child_process';

type py_option = {
  pythonPath: string;
  env: {
    SEARCH_QUERY: string;
    SEARCH_LIMIT: string;
  };
};

const scrape: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    const query: string = process.env.SEARCH_QUERY;
    const limit: string = process.env.SEARCH_LIMIT;
    if (!query && !limit) {
      throw 'No SEARCH_QUERY and SEARCH_LIMIT is set.';
    } else if (!query) {
      throw 'No SEARCH_QUERY is set.';
    } else if (!limit) {
      throw 'No SEARCH_LIMIT is set.';
    } else {
      //Python-shellに渡す環境変数
      const exec = util.promisify(child_process.exec);
      const pypath: string = await exec("type python3|awk '{print $3}'").then(
        (i: { stdout: string; stderr: string }): string => {
          return i.stdout.replace('\n', '');
        }
      );
      const search_criteria: py_option = {
        pythonPath: pypath,
        env: {
          SEARCH_QUERY: query,
          SEARCH_LIMIT: limit,
        },
      };
      //検索結果をPythonでスクレイピング
      const py: (py_script: string, py_option: py_option) => Promise<string[]> =
        util.promisify(PythonShell.run);
      const result: string[] = await py('libs/search.py', search_criteria).then(
        (i: string[]): string[] => i !== null ? i.reverse() : []
      );
      return result;
    }
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};

export = scrape;
