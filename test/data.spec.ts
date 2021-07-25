import * as data from '../src/utils/data';

test('Test src/utils/data.ts', async (): Promise<void> => {
  await data().then((i: string[]): void => {
    //配列かどうか
    expect(Array.isArray(i)).toBe(true);
    //要素の型
    i.map((x: string): void => {
      expect(typeof x).toBe('string');
    });
  });
});
