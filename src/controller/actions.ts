import * as core from '../core/core';

const actions: () => Promise<void> = async (): Promise<void> => {
  await core();
};

export = actions;
