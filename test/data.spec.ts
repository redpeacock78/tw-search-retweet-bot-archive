import * as data from '../src/utils/data';

test('Test src/utils/data.ts', async (): Promise<void> => {
  await data().then((i: string[]): void => {
    expect(Array.isArray(i)).toBe(true);
  });
});
