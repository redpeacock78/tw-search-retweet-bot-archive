import * as scrape from '../src/utils/scrape';

jest.setTimeout(100000);

describe('Test src/utils/scrape.ts', (): void => {
  test('If you have a single search terms', async (): Promise<void> => {
    process.env.SEARCH_LIMIT = '10';
    process.env.SEARCH_QUERY = 'test';
    await scrape().then((i: string[]): void => {
      //配列かどうか
      expect(Array.isArray(i)).toBe(true);
      //要素の総数
      expect(i.length).toBe(10);
      //要素の型
      i.map((x: string): void => {
        expect(typeof x).toBe('string');
      });
    });
  });
  test('If you have two search terms', async (): Promise<void> => {
    process.env.SEARCH_LIMIT = '10';
    process.env.SEARCH_QUERY = 'test\nOK';
    await scrape().then((i: string[]): void => {
      //配列かどうか
      expect(Array.isArray(i)).toBe(true);
      //要素の総数
      expect(i.length).toBe(20);
      //要素の型
      i.map((x: string): void => {
        expect(typeof x).toBe('string');
      });
    });
  });
});
