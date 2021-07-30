import * as data from '../src/utils/data';

jest.setTimeout(100000);

test('Test src/utils/data.ts', async (): Promise<void> => {
  process.env.SEARCH_LIMIT = '10';
  process.env.SEARCH_QUERY = 'test';
  await (data() as Promise<string[]>).then((i: string[]): void => {
    //配列かどうか
    expect(Array.isArray(i)).toBe(true);
    //要素の型
    i.map((x: string): void => {
      expect(typeof x).toBe('string');
    });
  });
});
