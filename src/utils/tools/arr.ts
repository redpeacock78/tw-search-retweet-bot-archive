const arr: {
  dedup: <T>(array: T[]) => T[];
  diff: <T>(array_1: T[], array_2: T[]) => T[];
} = {
  dedup: <T>(array: T[]): T[] => {
    return [...new Set(array)];
  },
  diff: <T>(array_1: T[], array_2: T[]): T[] => {
    const x: Set<T> = new Set(array_1);
    const y: Set<T> = new Set(array_2);
    const diff: T[] = [...x].filter((i: T): boolean => !y.has(i));
    return diff;
  },
};

export = arr;
