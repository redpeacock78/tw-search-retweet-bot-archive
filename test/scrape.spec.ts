import * as scrape from '../src/utils/scrape';

test('Test src/utils/scrape.ts', async (): Promise<void> => {
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
