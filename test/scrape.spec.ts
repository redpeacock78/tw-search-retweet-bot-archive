import * as scrape from '../src/utils/scrape';

test('Test src/utils/scrape.ts', async (): Promise<void> => {
  await scrape().then((i): void => {
    expect(Array.isArray(i)).toBe(true);
    const resp: () => string = (): string => {
      return typeof i[Math.floor(Math.random() * i.length)];
    };
    expect(resp()).toBe('string');
  });
});
